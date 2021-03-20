import _ from 'lodash/fp';
import { AST } from 'regexpp';
import { Flags, RegExpLiteral } from 'regexpp/ast';
import { CharASTElement } from '../generator/astHandler/CharacterSequence';
import { CharRange } from '../generator/CharRange';
import { CharRangeSequence } from './CharRangeSequence';
import { dfaAnalyzeElement } from './dfaAnalyze';
import { ExclusiveState } from './types';

export type QuickCheckDetails = {
  readonly determinesPerfectlyAstElements: readonly CharASTElement[];
  readonly mask: number;
  readonly value: number;
};

// keep this function around for debugging
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function debugToBinary(n: number) {
  // eslint-disable-next-line functional/no-let
  let binary = '';
  while (Math.ceil(n / 2) > 0) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
  }
  return binary.padStart(16, '0');
}
export class CharRangeSequencePossibilities {
  readonly possibilities: readonly CharRangeSequence[];

  constructor(possibilities: readonly CharRangeSequence[]) {
    this.possibilities = possibilities;
  }

  isExclusive(other: CharRangeSequencePossibilities): ExclusiveState {
    // let isOrderExclusive = false;
    // for (let i = 0; i < this.possibilities.length; i++) {
    //   const a = this.possibilities[i];

    //   for (let j = 0; j < other.possibilities.length; j++) {
    //     const b = other.possibilities[j];

    //     const exclusiveState = a.isExclusive(b);
    //     if (exclusiveState === 'NotExclusive') {
    //       return 'NotExclusive';
    //     } else if (exclusiveState === 'OrderExclusive') {
    //       isOrderExclusive = true;
    //     }
    //   }
    // }

    // return isOrderExclusive ? 'OrderExclusive' : 'Exclusive';

    return this.possibilities.reduce((acc, ownPossiblity) => {
      return other.possibilities.reduce((acc, otherPossiblity) => {
        if (acc === 'NotExclusive') {
          return acc;
        }

        const exclusiveState = ownPossiblity.isExclusive(otherPossiblity);
        if (exclusiveState !== 'Exclusive') {
          return exclusiveState;
        }

        return acc;
      }, acc);
    }, 'Exclusive' as ExclusiveState);
  }

  get(
    index: number,
  ): readonly {
    readonly charRange: CharRange;
    readonly astElement: CharASTElement;
  }[] {
    return this.possibilities
      .map((possiblity) => possiblity.get(index))
      .filter((char): char is NonNullable<typeof char> => char !== undefined);
  }

  toJSON(): readonly {
    readonly charRanges: readonly {
      readonly negate: boolean;
      readonly chars: readonly number[];
    }[];
    readonly astElements: readonly CharASTElement[];
  }[] {
    return this.possibilities.map((possiblity) => possiblity.toJSON());
  }

  size(): number {
    return this.possibilities.length;
  }

  maxLengthOfPossibilities(): number {
    return this.possibilities.reduce((acc, charRange) => {
      return Math.max(acc, charRange.length());
    }, 0);
  }

  private getFirstTwoCharRangesForQuickCheck(flags: Flags) {
    const charUnions: readonly ({
      readonly charRange: CharRange;
      readonly astElement: CharASTElement | null | 'moreThanOne';
    } | null)[] = [
      { charRange: CharRange.createEmptyRange(), astElement: null },
      { charRange: CharRange.createEmptyRange(), astElement: null },
    ];

    // TODO: FUNC: convert to reduce

    this.possibilities.forEach((charRangeSeq) => {
      for (let i = 0; i < 2; i++) {
        const currentCharUnion = charUnions[i];
        if (currentCharUnion) {
          const seqElement = charRangeSeq.get(i);
          if (seqElement) {
            const { charRange, astElement } = seqElement;
            const newCharRange = currentCharUnion.charRange.union(charRange);

            let newAstElement: CharASTElement | null | 'moreThanOne' =
              'moreThanOne';
            if (currentCharUnion.astElement === null) {
              newAstElement = astElement;
            } else if (
              astElement !== null &&
              // check if its different to what was there before
              currentCharUnion.astElement !== astElement
            ) {
              newAstElement = 'moreThanOne';
            }
            charUnions[i] = {
              charRange: newCharRange,
              astElement: newAstElement,
            };
          } else {
            charUnions[i] = null;
          }
        }
      }
    });

    if (charUnions[0] === null) {
      return null;
    }

    const hasVariableLength = charUnions.some((charUnion) => {
      if (charUnion) {
        return charUnion.charRange.getUTF16UnitsCount(flags) !== '1';
      }
      return false;
    });
    if (hasVariableLength) {
      return null;
    }

    return charUnions;
  }

  computeQuickCheck(flags: Flags): null | QuickCheckDetails {
    const charUnions = this.getFirstTwoCharRangesForQuickCheck(flags);
    if (!charUnions) {
      return null;
    }

    const determinesPerfectlyAstElements: readonly CharASTElement[] = [];

    const masksAndValues = charUnions.map((charUnion) => {
      if (!charUnion) {
        return { mask: 0, value: 0 };
      }

      const { chars, negate } = charUnion.charRange.toJSON();
      if (negate) {
        return { mask: 0, value: 0 };
      }

      if (
        chars.length === 1 &&
        charUnion.astElement !== null &&
        charUnion.astElement !== 'moreThanOne'
      ) {
        determinesPerfectlyAstElements.push(charUnion.astElement);
      }

      let common_bits = 0b111111111111111;
      let bits = chars[0];
      for (let j = 1; j < chars.length; j++) {
        const differing_bits = (chars[j] & common_bits) ^ bits;
        common_bits ^= differing_bits;
        bits &= common_bits;
      }

      return { mask: common_bits, value: bits };
    });

    return {
      determinesPerfectlyAstElements,
      mask: (masksAndValues[0].mask << 16) + masksAndValues[1].mask,
      value: (masksAndValues[0].value << 16) + masksAndValues[1].value,
    };
  }
}

// TODO: make me functional
export function computeExclusivityOfAlternatives(
  alternatives: readonly AST.Alternative[],
  literal: RegExpLiteral,
): ExclusiveState {
  const mappedDFAs: readonly CharRangeSequencePossibilities[] = [];
  let complexity = 1;
  for (let i = 0; i < alternatives.length; i++) {
    const possibilities = dfaAnalyzeElement([alternatives[i]], literal, 20);

    if (possibilities === null) {
      return 'NotExclusive';
    }
    mappedDFAs.push(possibilities);

    complexity *= possibilities.size();
    if (complexity > 1000) {
      return 'NotExclusive';
    }
  }

  let isOrderExclusive = false;
  for (let i = 0; i < mappedDFAs.length - 1; i++) {
    const a = mappedDFAs[i];

    for (let j = i + 1; j < mappedDFAs.length; j++) {
      const b = mappedDFAs[j];

      const exclusiveState = a.isExclusive(b);

      if (exclusiveState === 'NotExclusive') {
        return 'NotExclusive';
      } else if (exclusiveState === 'OrderExclusive') {
        isOrderExclusive = true;
      }
    }
  }

  return isOrderExclusive ? 'OrderExclusive' : 'Exclusive';
}
