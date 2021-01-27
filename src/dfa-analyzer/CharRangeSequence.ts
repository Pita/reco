import { CharRange } from '../generator/CharRange';
import flatten from 'lodash/flatten';

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
