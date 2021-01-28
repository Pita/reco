import { CharRange } from '../generator/CharRange';
import flatten from 'lodash/flatten';
import { ExlusiveState } from './types';

export class CharRangeSequence {
  private charRanges: CharRange[];

  constructor(charRanges: CharRange[] = []) {
    this.charRanges = charRanges;
  }

  push(charRange: CharRange) {
    return new CharRangeSequence([...this.charRanges, charRange]);
  }

  toJSON() {
    return this.charRanges.map((charRange) => charRange.toJSON());
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
