import { AST } from 'regexpp';
import { Collector, mergeGroupsOfFibers } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import { handleElement } from './Element';
import { BacktrackingError } from '../BacktrackingException';
import { CharRange } from '../CharRange';

const checkIfQuantifierHasInternalBacktracking = (
  quantifier: AST.Quantifier,
  collector: Collector,
  flags: Flags,
  literal: AST.RegExpLiteral,
) => {
  try {
    const fakeCollector = collector.fakeCollector();
    handleElement(
      quantifier.element,
      fakeCollector,
      fakeCollector.createFinalFiber(),
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

// const checkIfQuantifierHasFixedLength = (
//   quantifier: AST.Quantifier,
//   collector: Collector,
//   flags: Flags,
//   literal: AST.RegExpLiteral,
// ) => {
//   const fakeCollector = collector.fakeCollector();
//   const quantifierFiber = handleElement(
//     quantifier.element,
//     fakeCollector,
//     fakeCollector.createFinalFiber(),
//     flags,
//     literal,
//   );

//   const { minCharLength, maxCharLength } = quantifierFiber.meta;

//   if (
//     minCharLength === maxCharLength &&
//     quantifierFiber.meta.groups.length === 0 &&
//     quantifier.greedy
//   ) {
//     return {
//       fixedLengthOptimizable: true,
//       fixedLength: minCharLength,
//     };
//   } else {
//     return {
//       fixedLengthOptimizable: false,
//     };
//   }
// };

const analyzeGreedyQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
) => {};

const analyzeLazyQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
) => {
  const hasInternalBacktracking = checkIfQuantifierHasInternalBacktracking(
    quantifier,
    collector,
    flags,
    literal,
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
) => {
  const {
    quantifierFinalFiber,
    quantifierHandler,
  } = collector.createQuantifierFiberPair(
    currentFiber,
    quantifier.greedy ? 'greedy' : 'lazy',
    quantifier,
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
  );
};

// const generateBacktrackingFixedLengthQuantifier = (
//   quantifier: AST.Quantifier,
//   collector: Collector,
//   currentFiber: FiberTemplateDefinition,
//   flags: Flags,
//   fixedLength: number,
//   literal: AST.RegExpLiteral,
// ) => {
//   const wrappedHandler = handleElement(
//     quantifier.element,
//     collector,
//     collector.createFinalFiber(),
//     flags,
//     literal,
//   );

//   const countParams = generateCountParams(quantifier);
//   const minCharLength =
//     currentFiber.meta.minCharLength +
//     quantifier.min * wrappedHandler.meta.minCharLength;
//   const maxCharLength =
//     currentFiber.meta.maxCharLength +
//     quantifier.max * wrappedHandler.meta.maxCharLength;

//   return collector.addAtom(
//     collector.createForkingFiber(
//       currentFiber,
//       currentFiber.meta.groups,
//       false,
//       currentFiber.meta.anchorsAtEndOfLine,
//     ),
//     {
//       type: 'backtrackingFixedLengthQuantifier',
//       data: {
//         ...countParams,
//         fixedLength,
//         wrappedHandler,
//         followUp: currentFiber,
//       },
//       ast: quantifier,
//     },
//     minCharLength,
//     maxCharLength,
//   );
// };

const generateCountParams = (quantifier: AST.Quantifier) => {
  const minCount = quantifier.min === 0 ? undefined : quantifier.min;
  const maxCount = quantifier.max === Infinity ? undefined : quantifier.max;
  const maxOrMinCount = minCount !== undefined || maxCount !== undefined;

  return { minCount, maxCount, maxOrMinCount };
};

// const generateNonBacktrackingQuantifier = (
//   quantifier: AST.Quantifier,
//   collector: Collector,
//   currentFiber: FiberTemplateDefinition,
//   flags: Flags,
//   firstCharAfterQuantifier: CharRange,
//   followUpFirstChar: CharRange,
//   literal: AST.RegExpLiteral,
// ) => {
//   const wrappedHandler = handleElement(
//     quantifier.element,
//     collector,
//     collector.createFinalFiber(),
//     flags,
//     literal,
//   );

//   const countParams = generateCountParams(quantifier);
//   const minCharLength = quantifier.min * wrappedHandler.meta.minCharLength;
//   const maxCharLength = quantifier.max * wrappedHandler.meta.maxCharLength;

//   return collector.addAtom(
//     currentFiber,
//     {
//       type: 'nonBacktrackingQuantifier',
//       data: {
//         ...countParams,
//         wrappedHandler,
//       },
//       ast: quantifier,
//     },
//     minCharLength,
//     maxCharLength,
//   );
// };

const generateGreedyQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
) => {
  // const {
  //   firstCharAfterQuantifier,
  //   needsBacktracking,
  //   followUpFirstChar,
  //   fixedLengthOptimizable,
  //   fixedLength,
  // } = analyzeGreedyQuantifier(
  //   quantifier,
  //   collector,
  //   currentFiber,
  //   flags,
  //   literal,
  // );

  // if (needsBacktracking) {
  //   if (flags.INTERNAL_no_backtracking) {
  //     throw new BacktrackingError();
  //   }
  //   if (fixedLengthOptimizable && fixedLength) {
  //     return generateBacktrackingFixedLengthQuantifier(
  //       quantifier,
  //       collector,
  //       currentFiber,
  //       flags,
  //       firstCharAfterQuantifier,
  //       followUpFirstChar,
  //       fixedLength,
  //       literal,
  //     );
  //   } else {
  return generateBacktrackingQuantifier(
    quantifier,
    collector,
    currentFiber,
    flags,
    literal,
  );
  // }
  // } else {
  //   return generateNonBacktrackingQuantifier(
  //     quantifier,
  //     collector,
  //     currentFiber,
  //     flags,
  //     firstCharAfterQuantifier,
  //     followUpFirstChar,
  //     literal,
  //   );
  // }
};

const generateLazyQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
) => {
  // const { hasInternalBacktracking } = analyzeLazyQuantifier(
  //   quantifier,
  //   collector,
  //   currentFiber,
  //   flags,
  //   literal,
  // );

  // if (hasInternalBacktracking) {
  return generateBacktrackingQuantifier(
    quantifier,
    collector,
    currentFiber,
    flags,
    literal,
  );
  // } else {
  //   const wrappedHandler = handleElement(
  //     quantifier.element,
  //     collector,
  //     collector.createFinalFiber(),
  //     flags,
  //     literal,
  //   );

  //   const countParams = generateCountParams(quantifier);
  //   const minCharLength =
  //     currentFiber.meta.minCharLength +
  //     quantifier.min * wrappedHandler.meta.minCharLength;
  //   const maxCharLength =
  //     currentFiber.meta.maxCharLength +
  //     quantifier.max * wrappedHandler.meta.maxCharLength;

  //   return collector.addAtom(
  //     collector.createForkingFiber(
  //       currentFiber,
  //       currentFiber.meta.groups,
  //       false,
  //       currentFiber.meta.anchorsAtEndOfLine,
  //     ),
  //     {
  //       type: 'lazyQuantifier',
  //       data: {
  //         ...countParams,
  //         wrappedHandler,
  //         followUp: currentFiber,
  //       },
  //       ast: quantifier,
  //     },
  //     minCharLength,
  //     maxCharLength,
  //   );
  // }
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
