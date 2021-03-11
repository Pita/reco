import { AST } from 'regexpp';
import { ASTHandler } from '../generator';
import {
  charRangeToLeafValues,
  computeAverageLeafComplexity,
} from '../CharRangeBTreeMatcher';
import { astToCharRange } from '../astToCharRange';
import { QuickCheckDetails } from '../../dfa-analyzer/CharRangeSequencePossibilities';
import * as _ from 'lodash/fp';
import { Atom, CharSequenceAtom } from '../templates/mainTemplate';

export type CharASTElement =
  | AST.CharacterClass
  | AST.AnyCharacterSet
  | AST.EscapeCharacterSet
  | AST.UnicodePropertyCharacterSet
  | AST.Character;

export const handleCharSequence: ASTHandler<
  ReadonlyArray<CharASTElement>,
  QuickCheckDetails | null
> = (charASTElements, nextAtom, context, quickCheck = null) => {
  if (context.flags.INTERNAL_backwards) {
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
      const charRange = astToCharRange(char, context.flags);
      const tree = charRangeToLeafValues(charRange);
      const averageComplexity = computeAverageLeafComplexity(tree);
      const negate = charRange.toJSON().negate;
      const unicode = context.flags.unicode === true;
      const unitsCount = charRange.getUTF16UnitsCount(context.flags);

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

  const hasVariableLengths =
    chars.findIndex((char) => char.unitsCount !== '1') !== -1;

  const length = chars.length;
  const orderedLoading = !hasVariableLengths
    ? null
    : chars
        .sort((a, b) => {
          return a.offset - b.offset;
        })
        .map((char) => ({
          unitsCount: char.unitsCount,
          unicode: context.flags.unicode === true,
        }));

  const atom: CharSequenceAtom<Atom> = {
    type: 'charSequence',
    astElements: charASTElements,
    data: {
      orderedLoading,
      length,
      chars,
    },
    references: {
      nextAtom,
    },
  };

  return atom;
};
