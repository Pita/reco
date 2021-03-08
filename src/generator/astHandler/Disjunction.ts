import { AST } from 'regexpp';
import {
  CollectedTemplateValues,
  mergeGroupsOfFibers,
} from '../CollectedTemplateValues';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import { handleAlternative } from './Alternative';
import { BacktrackingError } from '../BacktrackingException';
import { computeExclusivityOfAlternatives } from '../../dfa-analyzer/CharRangeSequencePossibilities';
import { dfaAnalyzeElement } from '../../dfa-analyzer/dfaAnalyze';
import { hasInsideOutBacktracking } from '../checkForInsideOutBacktracking';

// TODO: there is a lot of code duplicated between this method and its non backtracking variant
// const handleBacktrackingDisjunction = (
//   alternatives: AST.Alternative[],
//   templateValues: CollectedTemplateValues,
//   currentFiber: FiberTemplateDefinition,
//   flags: Flags,
//   literal: AST.RegExpLiteral,
// ): CollectedTemplateValues => {
//   const quickChecks = computeQuickChecks(
//     alternatives,
//     currentFiber,
//     flags,
//     literal,
//   );
//   const mappedAlternatives = alternatives.map((alternative, i) =>
//     handleAlternative(
//       alternative,
//       templateValues,
//       templateValues.createConnectedFiber(currentFiber),
//       flags,
//       literal,
//       quickChecks ? quickChecks[i] : null,
//     ),
//   );

//   let minLength = Infinity;
//   let maxLength = -Infinity;
//   mappedAlternatives.forEach((alternative) => {
//     minLength = Math.min(minLength, alternative.meta.minCharLength);
//     maxLength = Math.max(maxLength, alternative.meta.maxCharLength);
//   });

//   const anchorsAtStartOfLine = mappedAlternatives.every(
//     (mappedAlternative) => mappedAlternative.meta.anchorsAtStartOfLine,
//   );

//   const anchorsAtEndOfLine = mappedAlternatives.every(
//     (mappedAlternative) => mappedAlternative.meta.anchorsAtEndOfLine,
//   );

//   const alternativesWithQuickChecks = mappedAlternatives.map(
//     (alternative, i) => {
//       const quickCheck = quickChecks ? quickChecks[i] : null;
//       return {
//         alternative,
//         quickCheck,
//       };
//     },
//   );
//   const hasQuickCheck = !!quickChecks;

//   return templateValues.addAtom(
//     templateValues.createForkingFiber(
//       currentFiber,
//       mergeGroupsOfFibers(mappedAlternatives),
//       anchorsAtStartOfLine,
//       anchorsAtEndOfLine,
//     ),
//     {
//       type: 'disjunction',
//       data: { hasQuickCheck, alternativesWithQuickChecks },
//       astLocation: alternatives[0].parent,
//     },
//     minLength,
//     maxLength,
//     alternatives[0].parent,
//   );
// };

// const checkIfAlternativesHaveInsideOutBacktracking = (
//   alternatives: AST.Alternative[],
//   templateValues: CollectedTemplateValues,
//   currentFiber: FiberTemplateDefinition,
//   flags: Flags,
//   literal: AST.RegExpLiteral,
// ) => {
//   return alternatives.some((alternative) =>
//     hasInsideOutBacktracking(
//       alternative,
//       currentFiber.meta.path,
//       templateValues,
//       currentFiber,
//       flags,
//       literal,
//     ),
//   );
// };

// const isANonBacktrackingDisjunction = (
//   alternatives: AST.Alternative[],
//   templateValues: CollectedTemplateValues,
//   currentFiber: FiberTemplateDefinition,
//   flags: Flags,
//   literal: AST.RegExpLiteral,
// ) => {
//   if (alternatives[0].parent.type === 'Pattern') {
//     return true;
//   }

//   // impossible to backtrack if there is nothing coming afterwards
//   if (currentFiber.meta.path.length === 0) {
//     return true;
//   }

//   if (
//     checkIfAlternativesHaveInsideOutBacktracking(
//       alternatives,
//       templateValues,
//       currentFiber,
//       flags,
//       literal,
//     )
//   ) {
//     return false;
//   }

//   return (
//     computeExclusivityOfAlternatives(alternatives, literal) !== 'NotExclusive'
//   );
// };

// const handleNonBacktrackingDisjunction = (
//   alternatives: AST.Alternative[],
//   templateValues: CollectedTemplateValues,
//   currentFiber: FiberTemplateDefinition,
//   flags: Flags,
//   literal: AST.RegExpLiteral,
// ): CollectedTemplateValues => {
//   const quickChecks = computeQuickChecks(
//     alternatives,
//     currentFiber,
//     flags,
//     literal,
//   );

//   const mappedAlternatives = alternatives.map((alternative, i) =>
//     handleAlternative(
//       alternative,
//       templateValues,
//       templateValues.createFinalFiber(currentFiber.meta.path),
//       flags,
//       literal,
//       quickChecks ? quickChecks[i] : null,
//     ),
//   );

//   let minLength = Infinity;
//   let maxLength = -Infinity;
//   mappedAlternatives.forEach((alternative) => {
//     minLength = Math.min(minLength, alternative.meta.minCharLength);
//     maxLength = Math.max(maxLength, alternative.meta.maxCharLength);
//   });

//   const anchorsAtStartOfLine = mappedAlternatives.every(
//     (mappedAlternative) => mappedAlternative.meta.anchorsAtStartOfLine,
//   );
//   const anchorsAtEndOfLine = mappedAlternatives.every(
//     (mappedAlternative) => mappedAlternative.meta.anchorsAtEndOfLine,
//   );
//   if (anchorsAtStartOfLine) {
//     currentFiber.meta.anchorsAtStartOfLine = true;
//   }
//   if (anchorsAtEndOfLine) {
//     currentFiber.meta.anchorsAtEndOfLine = true;
//   }

//   const alternativesWithQuickChecks = mappedAlternatives.map(
//     (alternative, i) => {
//       const quickCheck = quickChecks ? quickChecks[i] : null;
//       return {
//         alternative,
//         quickCheck,
//       };
//     },
//   );
//   const hasQuickCheck = !!quickChecks;

//   return templateValues.addAtom(
//     currentFiber,
//     {
//       type: 'nonBacktrackingDisjunction',
//       data: {
//         hasQuickCheck,
//         alternativesWithQuickChecks,
//       },
//       astLocation: alternatives[0].parent,
//     },
//     minLength,
//     maxLength,
//     alternatives[0].parent,
//   );
// };

// const computeQuickChecks = (
//   alternatives: AST.Alternative[],
//   currentFiber: FiberTemplateDefinition,
//   flags: Flags,
//   literal: AST.RegExpLiteral,
// ) => {
//   let isQuickCheckable = false;
//   const quickChecks = alternatives.map((alternative) => {
//     const analyzed = dfaAnalyzeElement(
//       [alternative, ...currentFiber.meta.path],
//       literal,
//       2,
//     );
//     if (!analyzed) {
//       return null;
//     }

//     const quickCheck = analyzed.computeQuickCheck(flags);
//     if (!quickCheck) {
//       return null;
//     }

//     isQuickCheckable = true;
//     return quickCheck;
//   });

//   return isQuickCheckable ? quickChecks : null;
// };

export const handleDisjunction = (
  alternatives: ReadonlyArray<AST.Alternative>,
  templateValues: CollectedTemplateValues,
  flags: Flags,
  literal: AST.RegExpLiteral,
): CollectedTemplateValues => {
  if (alternatives.length === 1) {
    return handleAlternative(alternatives[0], templateValues, flags, literal);
  }

  throw new Error('More than one alternative not supported yet');

  // if (
  //   isANonBacktrackingDisjunction(alternatives, templateValues, flags, literal)
  // ) {
  //   return handleNonBacktrackingDisjunction(
  //     alternatives,
  //     templateValues,
  //     flags,
  //     literal,
  //   );
  // } else {
  //   if (flags.INTERNAL_no_inside_out_backtracking) {
  //     throw new BacktrackingError();
  //   }

  //   return handleBacktrackingDisjunction(
  //     alternatives,
  //     templateValues,
  //     flags,
  //     literal,
  //   );
  // }
};
