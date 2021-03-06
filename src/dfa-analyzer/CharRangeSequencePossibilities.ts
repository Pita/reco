import { AST } from 'regexpp';
import { Flags, RegExpLiteral } from 'regexpp/ast';
import { CharRange } from '../generator/CharRange';
import { CharRangeSequence } from './CharRangeSequence';
import { dfaAnalyzeElement } from './dfaAnalyze';
import { ExlusiveState } from './types';

export type QuickCheckDetails = {
  determinesPerfectlyAstStarts: number[];
  mask: number;
  value: number;
};

function debugToBinary(n: number) {
  let binary = '';
  while (Math.ceil(n / 2) > 0) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
  }
  return binary.padStart(16, '0');
}

export class CharRangeSequencePossibilities {
  possibilities: CharRangeSequence[];

  constructor(possibilities: CharRangeSequence[]) {
    this.possibilities = possibilities;
  }

  isExclusive(other: CharRangeSequencePossibilities): ExlusiveState {
    let isOrderExclusive = false;
    for (let i = 0; i < this.possibilities.length; i++) {
      const a = this.possibilities[i];

      for (let j = 0; j < other.possibilities.length; j++) {
        const b = other.possibilities[j];

        const exclusiveState = a.isExclusive(b);
        if (exclusiveState === 'NotExclusive') {
          return 'NotExclusive';
        } else if (exclusiveState === 'OrderExclusive') {
          isOrderExclusive = true;
        }
      }
    }

    return isOrderExclusive ? 'OrderExclusive' : 'Exlusive';
  }

  toJSON() {
    return this.possibilities.map((possiblity) => possiblity.toJSON());
  }

  size() {
    return this.possibilities.length;
  }

  maxLengthOfPossibilities() {
    let maxLength = 0;
    this.possibilities.forEach((charRange) => {
      maxLength = Math.max(maxLength, charRange.length());
    });

    return maxLength;
  }

  private getFirstTwoCharRangesForQuickCheck(flags: Flags) {
    const charUnions: ({
      charRange: CharRange;
      astStart: number | null;
    } | null)[] = [
      { charRange: CharRange.createEmptyRange(), astStart: null },
      { charRange: CharRange.createEmptyRange(), astStart: null },
    ];
    this.possibilities.forEach((charRangeSeq) => {
      for (let i = 0; i < 2; i++) {
        const currentCharUnion = charUnions[i];
        if (currentCharUnion) {
          const seqElement = charRangeSeq.get(i);
          if (seqElement) {
            const { charRange, astStart } = seqElement;
            const newCharRange = currentCharUnion.charRange.union(charRange);
            let newAstStart = -1;
            if (currentCharUnion.astStart === null) {
              newAstStart = astStart;
            } else if (currentCharUnion.astStart !== astStart) {
              newAstStart = -1;
            }
            charUnions[i] = {
              charRange: newCharRange,
              astStart: newAstStart,
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

    let hasVariableLength = charUnions.some((charUnion) => {
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

    const determinesPerfectlyAstStarts: number[] = [];

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
        charUnion.astStart !== null &&
        charUnion.astStart !== -1
      ) {
        determinesPerfectlyAstStarts.push(charUnion.astStart);
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
      determinesPerfectlyAstStarts,
      mask: (masksAndValues[0].mask << 16) + masksAndValues[1].mask,
      value: (masksAndValues[0].value << 16) + masksAndValues[1].value,
    };
  }
}

export function computeExclusivityOfAlternatives(
  alternatives: AST.Alternative[],
  literal: RegExpLiteral,
): ExlusiveState {
  const mappedDFAs: CharRangeSequencePossibilities[] = [];
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

  return isOrderExclusive ? 'OrderExclusive' : 'Exlusive';
}
