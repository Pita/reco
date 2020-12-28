import { AST } from 'regexpp';
import { Collector, mergeGroupsOfFibers } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import { handleElement } from './Element';
import { BacktrackingError } from '../BacktrackingException';
import { CharRange } from '../CharRange';

const deriveFirstCharOfQuantifierIsolated = (
  quantifier: AST.Quantifier,
  collector: Collector,
  flags: Flags,
) => {
  const firstCharFakeCollector = collector.fakeCollector();
  const firstCharFiber = handleElement(
    quantifier.element,
    firstCharFakeCollector,
    firstCharFakeCollector.createFinalFiber(CharRange.createEmptyRange()),
    {
      ...flags,
    },
  );
  return firstCharFiber.meta.firstCharRange;
};

const deriveFirstCharForQuantifierFollowUp = (
  quantifier: AST.Quantifier,
  currentFiber: FiberTemplateDefinition,
  firstCharOfQuantifierIsolated: CharRange,
) => {
  return quantifier.max > 1
    ? firstCharOfQuantifierIsolated.union(currentFiber.meta.firstCharRange)
    : currentFiber.meta.firstCharRange;
};

const checkIfQuantifierHasInternalBacktracking = (
  quantifier: AST.Quantifier,
  collector: Collector,
  flags: Flags,
  followUpFirstChar: CharRange,
) => {
  try {
    const fakeCollector = collector.fakeCollector();
    handleElement(
      quantifier.element,
      fakeCollector,
      fakeCollector.createFinalFiber(followUpFirstChar),
      {
        ...flags,
        INTERNAL_no_backtracking: true,
      },
    );
  } catch (e) {
    if (e instanceof BacktrackingError) {
      return true;
    }

    throw e;
  }

  return false;
};

const checkIfQuantifierHasExternalBacktracking = (
  firstCharOfQuantifierIsolated: CharRange,
  currentFiber: FiberTemplateDefinition,
) => {
  return firstCharOfQuantifierIsolated.hasOverlap(
    currentFiber.meta.firstCharRange,
  );
};

const deriveFirstCharAfterQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  followUpFirstChar: CharRange,
) => {
  const fakeCollector = collector.fakeCollector();
  const quantifierFiber = handleElement(
    quantifier.element,
    fakeCollector,
    fakeCollector.createFinalFiber(followUpFirstChar),
    {
      ...flags,
    },
  );

  return quantifier.min > 0
    ? quantifierFiber.meta.firstCharRange
    : quantifierFiber.meta.firstCharRange.union(
        currentFiber.meta.firstCharRange,
      );
};

const checkIfQuantifierHasFixedLength = (
  quantifier: AST.Quantifier,
  collector: Collector,
  flags: Flags,
  followUpFirstChar: CharRange,
) => {
  const fakeCollector = collector.fakeCollector();
  const quantifierFiber = handleElement(
    quantifier.element,
    fakeCollector,
    fakeCollector.createFinalFiber(followUpFirstChar),
    flags,
  );

  const { minCharLength, maxCharLength } = quantifierFiber.meta;

  if (minCharLength === maxCharLength) {
    return {
      fixedLengthOptimizable: true,
      fixedLength: minCharLength,
    };
  } else {
    return {
      fixedLengthOptimizable: false,
    };
  }
};

const analyzeQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
) => {
  const firstCharOfQuantifierIsolated = deriveFirstCharOfQuantifierIsolated(
    quantifier,
    collector,
    flags,
  );
  const followUpFirstChar = deriveFirstCharForQuantifierFollowUp(
    quantifier,
    currentFiber,
    firstCharOfQuantifierIsolated,
  );
  const hasInternalBacktracking = checkIfQuantifierHasInternalBacktracking(
    quantifier,
    collector,
    flags,
    followUpFirstChar,
  );
  const hasExternalBackTracking = checkIfQuantifierHasExternalBacktracking(
    firstCharOfQuantifierIsolated,
    currentFiber,
  );
  const firstCharAfterQuantifier = deriveFirstCharAfterQuantifier(
    quantifier,
    collector,
    currentFiber,
    flags,
    followUpFirstChar,
  );

  const {
    fixedLengthOptimizable,
    fixedLength,
  } = checkIfQuantifierHasFixedLength(
    quantifier,
    collector,
    flags,
    followUpFirstChar,
  );

  return {
    firstCharAfterQuantifier,
    needsBacktracking: hasInternalBacktracking || hasExternalBackTracking,
    followUpFirstChar,
    fixedLengthOptimizable,
    fixedLength,
  };
};

const generateBacktrackingQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  firstCharAfterQuantifier: CharRange,
  followUpFirstChar: CharRange,
) => {
  const {
    quantifierFinalFiber,
    quantifierHandler,
  } = collector.createQuantifierFiberPair(
    currentFiber,
    quantifier.greedy ? 'greedy' : 'lazy',
    quantifier,
    followUpFirstChar,
  );

  const countParams = generateCountParams(quantifier);
  quantifierHandler.minCount = countParams.minCount;
  quantifierHandler.maxCount = countParams.maxCount;
  quantifierHandler.maxOrMinCount = countParams.maxOrMinCount;

  if (countParams.maxOrMinCount) {
    quantifierHandler.quantifierCounterIndex = collector.addQuantifierCounter(
      quantifier,
    );
  }

  const wrappedHandler = handleElement(
    quantifier.element,
    collector,
    quantifierFinalFiber,
    flags,
  );

  quantifierHandler.meta.groups = mergeGroupsOfFibers([
    wrappedHandler,
    currentFiber,
  ]);
  quantifierHandler.wrappedHandler = wrappedHandler;

  const minCharLength =
    currentFiber.meta.minCharLength +
    quantifier.min * wrappedHandler.meta.minCharLength;

  const maxCharLength =
    currentFiber.meta.maxCharLength +
    quantifier.max * wrappedHandler.meta.maxCharLength;

  return collector.addAtom(
    collector.createForkingFiber(
      quantifierHandler,
      quantifierHandler.meta.groups,
    ),
    {
      type: 'quantifierStarter',
      data: {
        maxOrMinCount: quantifierHandler.maxOrMinCount,
        functionName: quantifierHandler.functionName,
        quantifierCounterIndex: quantifierHandler.quantifierCounterIndex,
      },
      ast: quantifier,
    },
    firstCharAfterQuantifier,
    minCharLength,
    maxCharLength,
  );
};

const generateBacktrackingFixedLengthQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  firstCharAfterQuantifier: CharRange,
  followUpFirstChar: CharRange,
  fixedLength: number,
) => {
  const wrappedHandler = handleElement(
    quantifier.element,
    collector,
    collector.createFinalFiber(followUpFirstChar),
    flags,
  );

  const countParams = generateCountParams(quantifier);
  const minCharLength = quantifier.min * wrappedHandler.meta.minCharLength;
  const maxCharLength = quantifier.max * wrappedHandler.meta.maxCharLength;

  return collector.addAtom(
    collector.createForkingFiber(currentFiber, currentFiber.meta.groups),
    {
      type: 'backtrackingFixedLengthQuantifier',
      data: {
        ...countParams,
        fixedLength,
        wrappedHandler,
        followUp: currentFiber,
      },
      ast: quantifier,
    },
    firstCharAfterQuantifier,
    minCharLength,
    maxCharLength,
  );
};

const generateCountParams = (quantifier: AST.Quantifier) => {
  const minCount = quantifier.min === 0 ? undefined : quantifier.min;
  const maxCount = quantifier.max === Infinity ? undefined : quantifier.max;
  const maxOrMinCount = minCount !== undefined || maxCount !== undefined;

  return { minCount, maxCount, maxOrMinCount };
};

const generateNonBacktrackingQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  firstCharAfterQuantifier: CharRange,
  followUpFirstChar: CharRange,
) => {
  const wrappedHandler = handleElement(
    quantifier.element,
    collector,
    collector.createFinalFiber(followUpFirstChar),
    flags,
  );

  const countParams = generateCountParams(quantifier);
  const minCharLength = quantifier.min * wrappedHandler.meta.minCharLength;
  const maxCharLength = quantifier.max * wrappedHandler.meta.maxCharLength;

  return collector.addAtom(
    currentFiber,
    {
      type: 'nonBacktrackingQuantifier',
      data: {
        ...countParams,
        wrappedHandler,
      },
      ast: quantifier,
    },
    firstCharAfterQuantifier,
    minCharLength,
    maxCharLength,
  );
};

export const handleQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  if (quantifier.min === quantifier.max && quantifier.max < 10) {
    let currentAppendableFiber = currentFiber;
    for (let i = 0; i < quantifier.max; i++) {
      currentAppendableFiber = handleElement(
        quantifier.element,
        collector,
        currentAppendableFiber,
        flags,
      );
    }

    return currentAppendableFiber;
  }

  const {
    firstCharAfterQuantifier,
    needsBacktracking,
    followUpFirstChar,
    fixedLengthOptimizable,
    fixedLength,
  } = analyzeQuantifier(quantifier, collector, currentFiber, flags);

  if (needsBacktracking) {
    if (flags.INTERNAL_no_backtracking) {
      throw new BacktrackingError();
    }
    if (fixedLengthOptimizable && fixedLength) {
      // TODO: make it work for non greedy
      return generateBacktrackingFixedLengthQuantifier(
        quantifier,
        collector,
        currentFiber,
        flags,
        firstCharAfterQuantifier,
        followUpFirstChar,
        fixedLength,
      );
    } else {
      return generateBacktrackingQuantifier(
        quantifier,
        collector,
        currentFiber,
        flags,
        firstCharAfterQuantifier,
        followUpFirstChar,
      );
    }
  } else {
    return generateNonBacktrackingQuantifier(
      quantifier,
      collector,
      currentFiber,
      flags,
      firstCharAfterQuantifier,
      followUpFirstChar,
    );
  }
};
