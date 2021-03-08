import { AST } from 'regexpp';
import {
  CollectedTemplateValues,
  mergeGroupsOfFibers,
} from '../CollectedTemplateValues';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import { handleElement } from './Element';
import { BacktrackingError } from '../BacktrackingException';
import { ASTPath } from '../../dfa-analyzer/types';
import { dfaAnalyzeElement } from '../../dfa-analyzer/dfaAnalyze';
import { hasInsideOutBacktracking } from '../checkForInsideOutBacktracking';

const checkIfQuantifierHasInsideOutBacktracking = (
  quantifier: AST.Quantifier,
  currentFiber: FiberTemplateDefinition,
  templateValues: CollectedTemplateValues,
  flags: Flags,
  literal: AST.RegExpLiteral,
  pathForHandler: ASTPath,
) => {
  return hasInsideOutBacktracking(
    quantifier.element,
    pathForHandler,
    templateValues,
    currentFiber,
    flags,
    literal,
  );
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
  templateValues: CollectedTemplateValues,
  flags: Flags,
  literal: AST.RegExpLiteral,
  pathForHandler: ASTPath,
) => {
  const fakeCollector = fakeCollector(templateValues);
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
  flags: Flags,
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
    if (flags.INTERNAL_no_inside_out_backtracking) {
      throw new BacktrackingError();
    }
    return true;
  }

  const followupPossibilties = dfaAnalyzeElement(
    currentFiber.meta.path,
    literal,
    handlerPossibilities.maxLengthOfPossibilities(),
  );

  if (followupPossibilties === null) {
    if (flags.INTERNAL_no_inside_out_backtracking) {
      throw new BacktrackingError();
    }
    return true;
  }

  const notExclusive =
    handlerPossibilities.isExclusive(followupPossibilties) === 'NotExclusive';
  if (notExclusive && flags.INTERNAL_no_inside_out_backtracking) {
    if (
      !handlerPossibilities.doesBacktrackingStayInside(followupPossibilties)
    ) {
      throw new BacktrackingError();
    }
  }

  return notExclusive;
};

const analyzeGreedyQuantifier = (
  quantifier: AST.Quantifier,
  templateValues: CollectedTemplateValues,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
  pathForHandler: ASTPath,
) => {
  const hasInsideOutBacktracking = checkIfQuantifierHasInsideOutBacktracking(
    quantifier,
    currentFiber,
    templateValues,
    flags,
    literal,
    pathForHandler,
  );

  const hasExternalBackTracking = checkIfQuantifierHasExternalBacktracking(
    quantifier,
    currentFiber,
    literal,
    flags,
  );

  const {
    fixedLengthOptimizable,
    fixedLength,
  } = checkIfQuantifierHasFixedLength(
    quantifier,
    templateValues,
    flags,
    literal,
    pathForHandler,
  );

  return {
    needsBacktracking: hasInsideOutBacktracking || hasExternalBackTracking,
    fixedLengthOptimizable,
    fixedLength,
  };
};

const analyzeLazyQuantifier = (
  quantifier: AST.Quantifier,
  currentFiber: FiberTemplateDefinition,
  templateValues: CollectedTemplateValues,
  flags: Flags,
  literal: AST.RegExpLiteral,
  pathForHandler: ASTPath,
) => {
  const hasInternalBacktracking = checkIfQuantifierHasInsideOutBacktracking(
    quantifier,
    currentFiber,
    templateValues,
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
  templateValues: CollectedTemplateValues,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
  pathForHandler: ASTPath,
) => {
  const {
    quantifierFinalFiber,
    quantifierHandler,
  } = templateValues.createQuantifierFiberPair(
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
    quantifierHandler.quantifierCounterIndex = templateValues.addQuantifierCounter(
      quantifier,
    );
  }

  const wrappedHandler = handleElement(
    quantifier.element,
    templateValues,
    quantifierFinalFiber,
    generateHandlerFlags(quantifier, flags),
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

  return templateValues.addAtom(
    templateValues.createForkingFiber(
      quantifierHandler,
      quantifierHandler.meta.groups,
      false,
      currentFiber.meta.anchorsAtEndOfLine,
    ),
    {
      type: 'quantifierStarter',
      data: {
        maxOrMinCount: quantifierHandler.maxOrMinCount,
        shouldBackupPrevious: !!flags.INTERNAL_can_repeat,
        functionName: quantifierHandler.functionName,
        quantifierCounterIndex: quantifierHandler.quantifierCounterIndex,
      },
      astLocation: quantifier,
    },
    minCharLength,
    maxCharLength,
    quantifier,
  );
};

const generateHandlerFlags = (quantifier: AST.Quantifier, flags: Flags) => {
  return {
    ...flags,
    INTERNAL_can_repeat: flags.INTERNAL_can_repeat || quantifier.max > 1,
  };
};

const generateBacktrackingFixedLengthQuantifier = (
  quantifier: AST.Quantifier,
  templateValues: CollectedTemplateValues,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  fixedLength: number,
  literal: AST.RegExpLiteral,
  pathForHandler: ASTPath,
) => {
  const wrappedHandler = handleElement(
    quantifier.element,
    templateValues,
    createFinalFiber(templateValues, pathForHandler),
    generateHandlerFlags(quantifier, flags),
    literal,
  );

  const countParams = generateCountParams(quantifier);
  const minCharLength =
    currentFiber.meta.minCharLength +
    quantifier.min * wrappedHandler.meta.minCharLength;
  const maxCharLength =
    currentFiber.meta.maxCharLength +
    quantifier.max * wrappedHandler.meta.maxCharLength;

  return templateValues.addAtom(
    templateValues.createForkingFiber(
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
      astLocation: quantifier,
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
  templateValues: CollectedTemplateValues,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
  pathForHandler: ASTPath,
) => {
  const wrappedHandler = handleElement(
    quantifier.element,
    templateValues,
    createFinalFiber(templateValues, pathForHandler),
    generateHandlerFlags(quantifier, flags),
    literal,
  );

  const countParams = generateCountParams(quantifier);
  const minCharLength = quantifier.min * wrappedHandler.meta.minCharLength;
  const maxCharLength = quantifier.max * wrappedHandler.meta.maxCharLength;

  return templateValues.addAtom(
    currentFiber,
    {
      type: 'nonBacktrackingQuantifier',
      data: {
        ...countParams,
        wrappedHandler,
      },
      astLocation: quantifier,
    },
    minCharLength,
    maxCharLength,
    quantifier,
  );
};

const generateGreedyQuantifier = (
  quantifier: AST.Quantifier,
  templateValues: CollectedTemplateValues,
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
    templateValues,
    currentFiber,
    flags,
    literal,
    pathForHandler,
  );

  if (needsBacktracking) {
    if (fixedLengthOptimizable && fixedLength) {
      return generateBacktrackingFixedLengthQuantifier(
        quantifier,
        templateValues,
        currentFiber,
        flags,
        fixedLength,
        literal,
        pathForHandler,
      );
    } else {
      return generateBacktrackingQuantifier(
        quantifier,
        templateValues,
        currentFiber,
        flags,
        literal,
        pathForHandler,
      );
    }
  } else {
    return generateNonBacktrackingQuantifier(
      quantifier,
      templateValues,
      currentFiber,
      flags,
      literal,
      pathForHandler,
    );
  }
};

const generateLazyQuantifier = (
  quantifier: AST.Quantifier,
  templateValues: CollectedTemplateValues,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
  pathForHandler: ASTPath,
) => {
  const { hasInternalBacktracking } = analyzeLazyQuantifier(
    quantifier,
    currentFiber,
    templateValues,
    flags,
    literal,
    pathForHandler,
  );

  if (hasInternalBacktracking) {
    return generateBacktrackingQuantifier(
      quantifier,
      templateValues,
      currentFiber,
      flags,
      literal,
      pathForHandler,
    );
  } else {
    const wrappedHandler = handleElement(
      quantifier.element,
      templateValues,
      createFinalFiber(templateValues, pathForHandler),
      generateHandlerFlags(quantifier, flags),
      literal,
    );

    const countParams = generateCountParams(quantifier);
    const minCharLength =
      currentFiber.meta.minCharLength +
      quantifier.min * wrappedHandler.meta.minCharLength;
    const maxCharLength =
      currentFiber.meta.maxCharLength +
      quantifier.max * wrappedHandler.meta.maxCharLength;

    return templateValues.addAtom(
      templateValues.createForkingFiber(
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
        astLocation: quantifier,
      },
      minCharLength,
      maxCharLength,
      quantifier,
    );
  }
};

export const handleQuantifier = (
  quantifier: AST.Quantifier,
  templateValues: CollectedTemplateValues,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
): FiberTemplateDefinition => {
  if (quantifier.min === quantifier.max && quantifier.max < 10) {
    let currentAppendableFiber = currentFiber;
    for (let i = 0; i < quantifier.max; i++) {
      currentAppendableFiber = handleElement(
        quantifier.element,
        templateValues,
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
      templateValues,
      currentFiber,
      flags,
      literal,
      pathForHandler,
    );
  } else {
    return generateLazyQuantifier(
      quantifier,
      templateValues,
      currentFiber,
      flags,
      literal,
      pathForHandler,
    );
  }
};
