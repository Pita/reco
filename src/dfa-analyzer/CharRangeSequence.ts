import { CharRange } from '../generator/CharRange';
import flatten from 'lodash/flatten';
import { ExlusiveState } from './types';
import { CharASTElement } from '../generator/astHandler/CharacterSequence';

export class CharRangeSequence {
  private charRanges: CharRange[];
  private astStarts: number[];

  constructor(
    options: {
      charRanges: CharRange[];
      astStarts: number[];
    } = { charRanges: [], astStarts: [] },
  ) {
    const { charRanges, astStarts } = options;
    if (charRanges.length !== astStarts.length) {
      throw new Error(
        `charRanges and astElements have different lengths: ${charRanges.length} & ${astStarts.length}`,
      );
    }
    this.charRanges = charRanges;
    this.astStarts = astStarts;
  }

  push(charRange: CharRange, astElement: CharASTElement) {
    return new CharRangeSequence({
      charRanges: [...this.charRanges, charRange],
      astStarts: [...this.astStarts, astElement.start],
    });
  }

  toJSON() {
    return {
      charRanges: this.charRanges.map((charRange) => charRange.toJSON()),
      astStarts: this.astStarts.slice(),
    };
  }

  isExclusive(other: CharRangeSequence): ExlusiveState {
    const length = Math.min(this.charRanges.length, other.charRanges.length);

    for (let i = 0; i < length; i++) {
      const hasOverlap = this.charRanges[i].hasOverlap(other.charRanges[i]);
      if (!hasOverlap) {
        return 'Exlusive';
      }
    }

    return this.charRanges.length > other.charRanges.length
      ? 'OrderExclusive'
      : 'NotExclusive';
  }

  get(index: number) {
    if (!this.charRanges[index]) {
      return undefined;
    }
    return {
      charRange: this.charRanges[index],
      astStart: this.astStarts[index],
    };
  }

  length() {
    return this.charRanges.length;
  }
}

export class OverlyComplexBranchingError extends Error {
  type = 'OverlyComplexBranchingError';
}

export function flattenSequences(seqs: CharRangeSequence[][]) {
  const flattend = flatten(seqs);
  if (flattend.length > 100) {
    throw new OverlyComplexBranchingError();
  }

  return flattend;
}
