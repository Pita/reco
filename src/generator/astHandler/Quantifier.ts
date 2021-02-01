import { AST } from 'regexpp';
import { Collector, mergeGroupsOfFibers } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import { handleElement } from './Element';
import { BacktrackingError } from '../BacktrackingException';
import { ASTPath } from '../../dfa-analyzer/types';
import { dfaAnalyzeElement } from '../../dfa-analyzer/dfaAnalyze';

const checkIfQuantifierHasInternalBacktracking = (
  quantifier: AST.Quantifier,
  collector: Collector,
  flags: Flags,
  literal: AST.RegExpLiteral,
  pathForHandler: ASTPath,
) => {
  try {
    const fakeCollector = collector.fakeCollector();
    handleElement(
      quantifier.element,
      fakeCollector,
      fakeCollector.createFinalFiber(pathForHandler),
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

const createPathForQuantifierHandler = (
  quantifier: AST.Quantifier,
  currentFiber: FiberTemplateDefinition,
) => {
  const decrementedQuantifier = {
    ...quantifier,
    min: Math.max(quantifier.min - 1, 0),
    max: quantifier.max - 1,
  };

  return [decrementedQuantifier, ...currentFiber.meta.path];
};

const checkIfQuantifierHasFixedLength = (
  quantifier: AST.Quantifier,
  collector: Collector,
  flags: Flags,
  literal: AST.RegExpLiteral,
  pathForHandler: ASTPath,
) => {
  const fakeCollector = collector.fakeCollector();
  const quantifierFiber = handleElement(
    quantifier.element,
    fakeCollector,
    fakeCollector.createFinalFiber(pathForHandler),
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

const checkIfQuantifierHasExternalBacktracking = (
  quantifier: AST.Quantifier,
  currentFiber: FiberTemplateDefinition,
  literal: AST.RegExpLiteral,
) => {
  let handlerPossibilities = dfaAnalyzeElement(
    [quantifier.element],
    literal,
    Infinity,
  );

  if (handlerPossibilities === null) {
    handlerPossibilities = dfaAnalyzeElement([quantifier.element], literal, 3);
  }

  if (handlerPossibilities === null) {
    return true;
  }

  const followupPossibilties = dfaAnalyzeElement(
    currentFiber.meta.path,
    literal,
    handlerPossibilities.maxLengthOfPossibilities(),
  );

  if (followupPossibilties === null) {
    return true;
  }

  return (
    handlerPossibilities.isExclusive(followupPossibilties) === 'NotExclusive'
  );
};

const analyzeGreedyQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
  pathForHandler: ASTPath,
) => {
  const hasInternalBacktracking = checkIfQuantifierHasInternalBacktracking(
    quantifier,
    collector,
    flags,
    literal,
    pathForHandler,
  );

  const hasExternalBackTracking = checkIfQuantifierHasExternalBacktracking(
    quantifier,
    currentFiber,
    literal,
  );

  const {
    fixedLengthOptimizable,
    fixedLength,
  } = checkIfQuantifierHasFixedLength(
    quantifier,
    collector,
    flags,
    literal,
    pathForHandler,
  );

  return {
    needsBacktracking: hasInternalBacktracking || hasExternalBackTracking,
    fixedLengthOptimizable,
    fixedLength,
  };
};

const analyzeLazyQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  flags: Flags,
  literal: AST.RegExpLiteral,
  pathForHandler: ASTPath,
) => {
  const hasInternalBacktracking = checkIfQuantifierHasInternalBacktracking(
    quantifier,
    collector,
    flags,
    literal,
    pathForHandler,
  );

  return {
    hasInternalBacktracking: hasInternalBacktracking,
  };
};

const generateBacktrackingQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
  pathForHandler: ASTPath,
) => {
  const {
    quantifierFinalFiber,
    quantifierHandler,
  } = collector.createQuantifierFiberPair(
    currentFiber,
    quantifier.greedy ? 'greedy' : 'lazy',
    quantifier,
    pathForHandler,
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
    minCharLength,
    maxCharLength,
    quantifier,
  );
};

const generateBacktrackingFixedLengthQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  fixedLength: number,
  literal: AST.RegExpLiteral,
  pathForHandler: ASTPath,
) => {
  const wrappedHandler = handleElement(
    quantifier.element,
    collector,
    collector.createFinalFiber(pathForHandler),
    flags,
    literal,
  );

  const countParams = generateCountParams(quantifier);
  const minCharLength =
    currentFiber.meta.minCharLength +
    quantifier.min * wrappedHandler.meta.minCharLength;
  const maxCharLength =
    currentFiber.meta.maxCharLength +
    quantifier.max * wrappedHandler.meta.maxCharLength;

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
    minCharLength,
    maxCharLength,
    quantifier,
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
  literal: AST.RegExpLiteral,
  pathForHandler: ASTPath,
) => {
  const wrappedHandler = handleElement(
    quantifier.element,
    collector,
    collector.createFinalFiber(pathForHandler),
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
    minCharLength,
    maxCharLength,
    quantifier,
  );
};

const generateGreedyQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
  pathForHandler: ASTPath,
) => {
  const {
    needsBacktracking,
    fixedLengthOptimizable,
    fixedLength,
  } = analyzeGreedyQuantifier(
    quantifier,
    collector,
    currentFiber,
    flags,
    literal,
    pathForHandler,
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
        fixedLength,
        literal,
        pathForHandler,
      );
    } else {
      return generateBacktrackingQuantifier(
        quantifier,
        collector,
        currentFiber,
        flags,
        literal,
        pathForHandler,
      );
    }
  } else {
    return generateNonBacktrackingQuantifier(
      quantifier,
      collector,
      currentFiber,
      flags,
      literal,
      pathForHandler,
    );
  }
};

const generateLazyQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
  pathForHandler: ASTPath,
) => {
  const { hasInternalBacktracking } = analyzeLazyQuantifier(
    quantifier,
    collector,
    flags,
    literal,
    pathForHandler,
  );

  if (hasInternalBacktracking) {
    return generateBacktrackingQuantifier(
      quantifier,
      collector,
      currentFiber,
      flags,
      literal,
      pathForHandler,
    );
  } else {
    const wrappedHandler = handleElement(
      quantifier.element,
      collector,
      collector.createFinalFiber(pathForHandler),
      flags,
      literal,
    );

    const countParams = generateCountParams(quantifier);
    const minCharLength =
      currentFiber.meta.minCharLength +
      quantifier.min * wrappedHandler.meta.minCharLength;
    const maxCharLength =
      currentFiber.meta.maxCharLength +
      quantifier.max * wrappedHandler.meta.maxCharLength;

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
      minCharLength,
      maxCharLength,
      quantifier,
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

  const pathForHandler = createPathForQuantifierHandler(
    quantifier,
    currentFiber,
  );

  if (quantifier.greedy) {
    return generateGreedyQuantifier(
      quantifier,
      collector,
      currentFiber,
      flags,
      literal,
      pathForHandler,
    );
  } else {
    return generateLazyQuantifier(
      quantifier,
      collector,
      currentFiber,
      flags,
      literal,
      pathForHandler,
    );
  }
};
