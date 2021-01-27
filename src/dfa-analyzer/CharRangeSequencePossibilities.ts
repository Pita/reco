import { CharRangeSequence } from './CharRangeSequence';

export class CharRangeSequencePossibilities {
  possibilities: CharRangeSequence[];

  constructor(possibilities: CharRangeSequence[]) {
    this.possibilities = possibilities;
  }

  isExclusive(other: CharRangeSequencePossibilities) {
    for (let i = 0; i < this.possibilities.length; i++) {
      const a = this.possibilities[i];

      for (let j = 0; j < other.possibilities.length; j++) {
        const b = other.possibilities[j];

        const isExclusive = a.isExclusive(b);
        if (!isExclusive) {
          return false;
        }
      }
    }

    return true;
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
