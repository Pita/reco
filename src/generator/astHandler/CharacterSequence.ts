import { AST } from 'regexpp';
import { Collector } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import {
  charRangeToLeafValues,
  computeAverageLeafComplexity,
} from '../CharRangeBTreeMatcher';
import { astToCharRange } from '../astToCharRange';
import { handleSetOrCharacter, utf16UnitsCountToMinAndMax } from './Character';
import { QuickCheckDetails } from '../../dfa-analyzer/CharRangeSequencePossibilities';

export type CharASTElement =
  | AST.CharacterClass
  | AST.AnyCharacterSet
  | AST.EscapeCharacterSet
  | AST.UnicodePropertyCharacterSet
  | AST.Character;

const handleBackwardsChars = (
  charASTElements: Array<CharASTElement>,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
) => {
  // TODO: convert to mass matching like the forward matching

  let lastFiber = currentFiber;
  for (let i = charASTElements.length - 1; i >= 0; i--) {
    lastFiber = handleSetOrCharacter(
      charASTElements[i],
      collector,
      lastFiber,
      flags,
      literal,
    );
  }

  return lastFiber;
};

export const handleCharSequence = (
  charASTElements: Array<CharASTElement>,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
  quickCheck: QuickCheckDetails | null = null,
): FiberTemplateDefinition => {
  if (flags.INTERNAL_backwards) {
    return handleBackwardsChars(
      charASTElements,
      collector,
      currentFiber,
      flags,
      literal,
    );
  }

  let minSum = 0;
  let maxSum = 0;

  const chars = charASTElements
    .map((char, offset) => {
      const charRange = astToCharRange(char, flags);
      const tree = charRangeToLeafValues(charRange);
      const averageComplexity = computeAverageLeafComplexity(tree);
      const negate = charRange.toJSON().negate;
      const unicode = flags.unicode === true;
      const unitsCount = charRange.getUTF16UnitsCount(flags);
      const { min, max } = utf16UnitsCountToMinAndMax(unitsCount);
      minSum += min;
      maxSum += max;
      const canBeSkipped =
        quickCheck?.determinesPerfectlyAstStarts.includes(char.start) ?? false;

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

  return collector.addAtom(
    currentFiber,
    {
      type: 'charSequence',
      data: {
        orderedLoading,
        length,
        chars,
      },
      ast: charASTElements[0], // TODO: collector should be able to take start & end
    },
    minSum,
    maxSum,
    charASTElements,
  );
};
