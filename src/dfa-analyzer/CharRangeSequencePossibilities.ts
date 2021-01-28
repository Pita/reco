import { CharRangeSequence } from './CharRangeSequence';
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
