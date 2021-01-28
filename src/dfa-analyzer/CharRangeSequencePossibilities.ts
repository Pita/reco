import { AST } from 'regexpp';
import { RegExpLiteral } from 'regexpp/ast';
import { CharRangeSequence } from './CharRangeSequence';
import { dfaAnalyzeElement } from './dfaAnalyze';
import { ExlusiveState } from './types';

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
