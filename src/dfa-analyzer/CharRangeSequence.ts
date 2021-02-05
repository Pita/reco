import { CharRange } from '../generator/CharRange';
import flatten from 'lodash/flatten';
import { ExlusiveState } from './types';
import { CharASTElement } from '../generator/astHandler/CharacterSequence';
import { isInsideElement } from '../generator/checkForInsideOutBacktracking';

export class CharRangeSequence {
  private charRanges: CharRange[];
  private astElements: CharASTElement[];

  constructor(
    options: {
      charRanges: CharRange[];
      astElements: CharASTElement[];
    } = { charRanges: [], astElements: [] },
  ) {
    const { charRanges, astElements } = options;
    if (charRanges.length !== astElements.length) {
      throw new Error(
        `charRanges and astElements have different lengths: ${charRanges.length} & ${astElements.length}`,
      );
    }
    this.charRanges = charRanges;
    this.astElements = astElements;
  }

  push(charRange: CharRange, astElement: CharASTElement) {
    return new CharRangeSequence({
      charRanges: [...this.charRanges, charRange],
      astElements: [...this.astElements, astElement],
    });
  }

  toJSON() {
    return {
      charRanges: this.charRanges.map((charRange) => charRange.toJSON()),
      astElements: this.astElements.slice(),
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

  doesBacktrackingStayInside(other: CharRangeSequence): boolean {
    const length = Math.min(this.charRanges.length, other.charRanges.length);

    for (let i = 0; i < length; i++) {
      const hasOverlap = this.charRanges[i].hasOverlap(other.charRanges[i]);
      if (!hasOverlap) {
        return true;
      }
    }

    return isInsideElement(other.astElements[length - 1]);
  }

  get(index: number) {
    if (!this.charRanges[index]) {
      return undefined;
    }
    return {
      charRange: this.charRanges[index],
      astElement: this.astElements[index],
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
