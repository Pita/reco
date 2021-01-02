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

const analyzeGreedyQuantifier = (
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

const analyzeLazyQuantifier = (
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
  const firstCharAfterQuantifier = deriveFirstCharAfterQuantifier(
    quantifier,
    collector,
    currentFiber,
    flags,
    followUpFirstChar,
    literal,
  );

  return {
    hasInternalBacktracking: hasInternalBacktracking,
    followUpFirstChar,
    firstCharAfterQuantifier,
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
    literal,
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

const generateGreedyQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
) => {
  const {
    firstCharAfterQuantifier,
    needsBacktracking,
    followUpFirstChar,
    fixedLengthOptimizable,
    fixedLength,
  } = analyzeGreedyQuantifier(
    quantifier,
    collector,
    currentFiber,
    flags,
    literal,
  );

  if (needsBacktracking) {
    if (flags.INTERNAL_no_backtracking) {
      throw new BacktrackingError();
    }
    if (fixedLengthOptimizable && fixedLength) {
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

const generateLazyQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
) => {
  const {
    hasInternalBacktracking,
    followUpFirstChar,
    firstCharAfterQuantifier,
  } = analyzeLazyQuantifier(
    quantifier,
    collector,
    currentFiber,
    flags,
    literal,
  );

  if (hasInternalBacktracking) {
    return generateBacktrackingQuantifier(
      quantifier,
      collector,
      currentFiber,
      flags,
      firstCharAfterQuantifier,
      followUpFirstChar,
      literal,
    );
  } else {
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
        type: 'lazyQuantifier',
        data: {
          ...countParams,
          wrappedHandler,
          followUp: currentFiber,
        },
        ast: quantifier,
      },
      firstCharAfterQuantifier,
      minCharLength,
      maxCharLength,
    );
  }
};

export const handleQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
): FiberTemplateDefinition => {
  if (quantifier.min === quantifier.max && quantifier.max < 10) {
    let currentAppendableFiber = currentFiber;
    for (let i = 0; i < quantifier.max; i++) {
      currentAppendableFiber = handleElement(
        quantifier.element,
        collector,
        currentAppendableFiber,
        flags,
        literal,
      );
    }

    return currentAppendableFiber;
  }

  if (quantifier.greedy) {
    return generateGreedyQuantifier(
      quantifier,
      collector,
      currentFiber,
      flags,
      literal,
    );
  } else {
    return generateLazyQuantifier(
      quantifier,
      collector,
      currentFiber,
      flags,
      literal,
    );
  }
};
