import { AST } from 'regexpp';
import {
  CollectedTemplateValues,
  createFinalFiber,
  createQuantifierFiberPair,
  findEntryHandler,
  mergeGroupsOfFibers,
} from '../CollectedTemplateValues';
import { Flags, GeneratorContext } from '../generator';
import { handleElement } from './Element';
import { BacktrackingError } from '../BacktrackingException';
import { ASTPath } from '../../dfa-analyzer/types';
import { dfaAnalyzeElement } from '../../dfa-analyzer/dfaAnalyze';
import { hasInsideOutBacktracking } from '../checkForInsideOutBacktracking';
import _ from 'lodash/fp';

const checkIfQuantifierHasInsideOutBacktracking = (
  quantifier: AST.Quantifier,
  templateValues: CollectedTemplateValues,
  context: GeneratorContext,
  pathForHandler: ASTPath,
) => {
  return hasInsideOutBacktracking(
    quantifier.element,
    templateValues,
    context,
    pathForHandler,
  );
};

const createPathForQuantifierHandler = (
  quantifier: AST.Quantifier,
  templateValues: CollectedTemplateValues,
) => {
  const decrementedQuantifier = {
    ...quantifier,
    min: Math.max(quantifier.min - 1, 0),
    max: quantifier.max - 1,
  };

  return [decrementedQuantifier, ...findEntryHandler(templateValues).meta.path];
};

const checkIfQuantifierHasFixedLength = (
  quantifier: AST.Quantifier,
  templateValues: CollectedTemplateValues,
  context: GeneratorContext,
  pathForHandler: ASTPath,
) => {
  const quantifierFiber = handleElement(
    quantifier.element,
    createFinalFiber(templateValues, pathForHandler),
    context,
  );

  const { minCharLength, maxCharLength, groups } = findEntryHandler(
    quantifierFiber,
  ).meta;

  if (
    minCharLength === maxCharLength &&
    groups.length === 0 &&
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
  templateValues: CollectedTemplateValues,
  context: GeneratorContext,
) => {
  const handlerPossibilities =
    dfaAnalyzeElement([quantifier.element], context.literal, Infinity) ??
    dfaAnalyzeElement([quantifier.element], context.literal, 3);

  if (handlerPossibilities === null) {
    if (context.flags.INTERNAL_no_inside_out_backtracking) {
      throw new BacktrackingError();
    }
    return true;
  }

  const followupPossibilties = dfaAnalyzeElement(
    findEntryHandler(templateValues).meta.path,
    context.literal,
    handlerPossibilities.maxLengthOfPossibilities(),
  );

  if (followupPossibilties === null) {
    if (context.flags.INTERNAL_no_inside_out_backtracking) {
      throw new BacktrackingError();
    }
    return true;
  }

  const notExclusive =
    handlerPossibilities.isExclusive(followupPossibilties) === 'NotExclusive';
  if (notExclusive && context.flags.INTERNAL_no_inside_out_backtracking) {
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
  context: GeneratorContext,
  pathForHandler: ASTPath,
) => {
  const hasInsideOutBacktracking = checkIfQuantifierHasInsideOutBacktracking(
    quantifier,
    templateValues,
    context,
    pathForHandler,
  );

  const hasExternalBackTracking = checkIfQuantifierHasExternalBacktracking(
    quantifier,
    templateValues,
    context,
  );

  const {
    fixedLengthOptimizable,
    fixedLength,
  } = checkIfQuantifierHasFixedLength(
    quantifier,
    templateValues,
    context,
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
  templateValues: CollectedTemplateValues,
  context: GeneratorContext,
  pathForHandler: ASTPath,
) => {
  const hasInternalBacktracking = checkIfQuantifierHasInsideOutBacktracking(
    quantifier,
    templateValues,
    context,
    pathForHandler,
  );

  return {
    hasInternalBacktracking: hasInternalBacktracking,
  };
};

const generateBacktrackingQuantifier = (
  quantifier: AST.Quantifier,
  templateValues: CollectedTemplateValues,
  context: GeneratorContext,
  pathForHandler: ASTPath,
) => {
  const countParams = generateCountParams(quantifier);

  const {
    quantifierFinalFiber,
    quantifierHandler,
    templateValues: templateValues1,
  } = createQuantifierFiberPair(
    templateValues,
    quantifier.greedy ? 'greedy' : 'lazy',
    quantifier,
    pathForHandler,
    countParams,
  );

  // const countParams = generateCountParams(quantifier);
  // quantifierHandler.minCount = countParams.minCount;
  // quantifierHandler.maxCount = countParams.maxCount;
  // quantifierHandler.maxOrMinCount = countParams.maxOrMinCount;

  // if (countParams.maxOrMinCount) {
  //   quantifierHandler.quantifierCounterIndex = templateValues.addQuantifierCounter(
  //     quantifier,
  //   );
  // }

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
  context: GeneratorContext,
  fixedLength: number,
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

export interface QuantifierCountParams {
  readonly minCount?: number;
  readonly maxCount?: number;
  readonly maxOrMinCount: boolean;
}

const generateCountParams = (
  quantifier: AST.Quantifier,
): QuantifierCountParams => {
  const minCount = quantifier.min === 0 ? undefined : quantifier.min;
  const maxCount = quantifier.max === Infinity ? undefined : quantifier.max;
  const maxOrMinCount = minCount !== undefined || maxCount !== undefined;

  return { minCount, maxCount, maxOrMinCount };
};

const generateNonBacktrackingQuantifier = (
  quantifier: AST.Quantifier,
  templateValues: CollectedTemplateValues,
  context: GeneratorContext,
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
  context: GeneratorContext,
  pathForHandler: ASTPath,
) => {
  const {
    needsBacktracking,
    fixedLengthOptimizable,
    fixedLength,
  } = analyzeGreedyQuantifier(
    quantifier,
    templateValues,
    context,
    pathForHandler,
  );

  if (needsBacktracking) {
    if (fixedLengthOptimizable && fixedLength) {
      return generateBacktrackingFixedLengthQuantifier(
        quantifier,
        templateValues,
        context,
        fixedLength,
        pathForHandler,
      );
    } else {
      return generateBacktrackingQuantifier(
        quantifier,
        templateValues,
        context,
        pathForHandler,
      );
    }
  } else {
    return generateNonBacktrackingQuantifier(
      quantifier,
      templateValues,
      context,
      pathForHandler,
    );
  }
};

const generateLazyQuantifier = (
  quantifier: AST.Quantifier,
  templateValues: CollectedTemplateValues,
  context: GeneratorContext,
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
  context: GeneratorContext,
): CollectedTemplateValues => {
  if (quantifier.min === quantifier.max && quantifier.max < 10) {
    return _.reduce(
      (templateValues) => {
        return handleElement(quantifier.element, templateValues, context);
      },
      templateValues,
      _.range(1, quantifier.max),
    );
  }

  const pathForHandler = createPathForQuantifierHandler(
    quantifier,
    templateValues,
  );

  if (quantifier.greedy) {
    return generateGreedyQuantifier(
      quantifier,
      templateValues,
      context,
      pathForHandler,
    );
  } else {
    return generateLazyQuantifier(
      quantifier,
      templateValues,
      context,
      pathForHandler,
    );
  }
};
