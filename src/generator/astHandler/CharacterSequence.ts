import { AST } from 'regexpp';
import { addAtom, CollectedTemplateValues } from '../CollectedTemplateValues';
import { Flags } from '../generator';
import {
  charRangeToLeafValues,
  computeAverageLeafComplexity,
} from '../CharRangeBTreeMatcher';
import { astToCharRange } from '../astToCharRange';
import { handleSetOrCharacter, utf16UnitsCountToMinAndMax } from './Character';
import { QuickCheckDetails } from '../../dfa-analyzer/CharRangeSequencePossibilities';
import * as _ from 'lodash/fp';

export type CharASTElement =
  | AST.CharacterClass
  | AST.AnyCharacterSet
  | AST.EscapeCharacterSet
  | AST.UnicodePropertyCharacterSet
  | AST.Character;

// const handleBackwardsChars = (
//   charASTElements: ReadonlyArray<CharASTElement>,
//   templateValues: CollectedTemplateValues,
//   currentFiber: FiberTemplateDefinition,
//   flags: Flags,
//   literal: AST.RegExpLiteral,
// ) => {
//   // TODO: convert to mass matching like the forward matching

//   let lastFiber = currentFiber;
//   for (let i = charASTElements.length - 1; i >= 0; i--) {
//     lastFiber = handleSetOrCharacter(
//       charASTElements[i],
//       templateValues,
//       lastFiber,
//       flags,
//       literal,
//     );
//   }

//   return lastFiber;
// };

export const handleCharSequence = (
  charASTElements: ReadonlyArray<CharASTElement>,
  templateValues: CollectedTemplateValues,
  flags: Flags,
  literal: AST.RegExpLiteral,
  quickCheck: QuickCheckDetails | null = null,
): CollectedTemplateValues => {
  if (flags.INTERNAL_backwards) {
    throw new Error('Does not support reverse matching yet');
    // return handleBackwardsChars(
    //   charASTElements,
    //   templateValues,
    //   currentFiber,
    //   flags,
    //   literal,
    // );
  }

  const chars = charASTElements
    .map((char, offset) => {
      const charRange = astToCharRange(char, flags);
      const tree = charRangeToLeafValues(charRange);
      const averageComplexity = computeAverageLeafComplexity(tree);
      const negate = charRange.toJSON().negate;
      const unicode = flags.unicode === true;
      const unitsCount = charRange.getUTF16UnitsCount(flags);

      const canBeSkipped =
        quickCheck?.determinesPerfectlyAstElements.includes(char) ?? false;

      return {
        tree,
        negate,
        unicode,
        unitsCount,
        averageComplexity,
        offset,
        canBeSkipped,
      };
    })
    .sort((a, b) => {
      const complexityDiff = a.averageComplexity - b.averageComplexity;

      if (Math.abs(complexityDiff) < 0.5) {
        return b.offset - a.offset;
      }

      return complexityDiff;
    });

  const { minSum, maxSum } = _.reduce(
    ({ minSum, maxSum }, { unitsCount }) => {
      const { min, max } = utf16UnitsCountToMinAndMax(unitsCount);

      return {
        minSum: min + minSum,
        maxSum: max + maxSum,
      };
    },
    { minSum: 0, maxSum: 0 },
    chars,
  );

  const length = chars.length;
  const orderedLoading =
    maxSum === length
      ? null
      : chars
          .sort((a, b) => {
            return a.offset - b.offset;
          })
          .map((char) => ({
            unitsCount: char.unitsCount,
            unicode: flags.unicode === true,
          }));

  return addAtom(
    templateValues,
    {
      type: 'charSequence',
      data: {
        orderedLoading,
        length,
        chars,
      },
    },
    {
      start: charASTElements[0].start,
      end: charASTElements[charASTElements.length - 1].end,
    },
    minSum,
    maxSum,
    charASTElements,
  );
};
