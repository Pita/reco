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
  literal: AST.RegExpLiteral,
) => {
  const firstCharFakeCollector = collector.fakeCollector();
  const firstCharFiber = handleElement(
    quantifier.element,
    firstCharFakeCollector,
    firstCharFakeCollector.createFinalFiber(CharRange.createEmptyRange()),
    {
      ...flags,
    },
    literal,
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
  literal: AST.RegExpLiteral,
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
      literal,
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
  literal: AST.RegExpLiteral,
) => {
  const fakeCollector = collector.fakeCollector();
  const quantifierFiber = handleElement(
    quantifier.element,
    fakeCollector,
    fakeCollector.createFinalFiber(followUpFirstChar),
    {
      ...flags,
    },
    literal,
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
  literal: AST.RegExpLiteral,
) => {
  const fakeCollector = collector.fakeCollector();
  const quantifierFiber = handleElement(
    quantifier.element,
    fakeCollector,
    fakeCollector.createFinalFiber(followUpFirstChar),
    flags,
    literal,
  );

  const { minCharLength, maxCharLength } = quantifierFiber.meta;

  if (
    minCharLength === maxCharLength &&
    quantifierFiber.meta.groups.length === 0 &&
    quantifier.greedy
  ) {
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
  literal: AST.RegExpLiteral,
) => {
  const firstCharOfQuantifierIsolated = deriveFirstCharOfQuantifierIsolated(
    quantifier,
    collector,
    flags,
    literal,
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
    literal,
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
    literal,
  );

  const {
    fixedLengthOptimizable,
    fixedLength,
  } = checkIfQuantifierHasFixedLength(
    quantifier,
    collector,
    flags,
    followUpFirstChar,
    literal,
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
  literal: AST.RegExpLiteral,
) => {
  let willUnroll = false;
  if (quantifier.min > 0 && quantifier.min < 10) {
    willUnroll = true;
  }

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
  quantifierHandler.minCount = willUnroll ? 0 : countParams.minCount;
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
    literal,
  );

  quantifierHandler.meta.groups = mergeGroupsOfFibers([
    wrappedHandler,
    currentFiber,
  ]);
  quantifierHandler.wrappedHandler = wrappedHandler;

  const minCharLength =
    currentFiber.meta.minCharLength +
    (willUnroll ? 0 : quantifier.min * wrappedHandler.meta.minCharLength);

  const maxCharLength =
    currentFiber.meta.maxCharLength +
    quantifier.max * wrappedHandler.meta.maxCharLength;

  const recursionQuantifier = collector.addAtom(
    collector.createForkingFiber(
      quantifierHandler,
      quantifierHandler.meta.groups,
      false,
      currentFiber.meta.anchorsAtEndOfLine,
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

  if (!willUnroll) {
    return recursionQuantifier;
  }

  return unrollQuantifier(
    quantifier,
    collector,
    recursionQuantifier,
    flags,
    literal,
    quantifier.min,
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
  literal: AST.RegExpLiteral,
) => {
  const wrappedHandler = handleElement(
    quantifier.element,
    collector,
    collector.createFinalFiber(followUpFirstChar),
    flags,
    literal,
  );

  const countParams = generateCountParams(quantifier);
  const minCharLength = quantifier.min * wrappedHandler.meta.minCharLength;
  const maxCharLength = quantifier.max * wrappedHandler.meta.maxCharLength;

  return collector.addAtom(
    collector.createForkingFiber(
      currentFiber,
      currentFiber.meta.groups,
      false,
      currentFiber.meta.anchorsAtEndOfLine,
    ),
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
  literal: AST.RegExpLiteral,
) => {
  const wrappedHandler = handleElement(
    quantifier.element,
    collector,
    collector.createFinalFiber(followUpFirstChar),
    flags,
    literal,
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

const unrollQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
  count: number,
) => {
  let currentAppendableFiber = currentFiber;
  // TODO: can be optimized with less code waste
  for (let i = 0; i < count; i++) {
    currentAppendableFiber = handleElement(
      quantifier.element,
      collector,
      currentAppendableFiber,
      flags,
      literal,
    );
  }

  return currentAppendableFiber;
};

export const handleQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
): FiberTemplateDefinition => {
  if (quantifier.min === quantifier.max && quantifier.max < 10) {
    return unrollQuantifier(
      quantifier,
      collector,
      currentFiber,
      flags,
      literal,
      quantifier.max,
    );
  }

  const {
    firstCharAfterQuantifier,
    needsBacktracking,
    followUpFirstChar,
    fixedLengthOptimizable,
    fixedLength,
  } = analyzeQuantifier(quantifier, collector, currentFiber, flags, literal);

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
        literal,
      );
    } else {
      return generateBacktrackingQuantifier(
        quantifier,
        collector,
        currentFiber,
        flags,
        firstCharAfterQuantifier,
        followUpFirstChar,
        literal,
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
      literal,
    );
  }
};
