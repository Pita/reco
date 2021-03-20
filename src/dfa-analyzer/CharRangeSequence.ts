import { CharRange } from '../generator/CharRange';
import { ExclusiveState } from './types';
import { CharASTElement } from '../generator/astHandler/CharacterSequence';
import _ from 'lodash/fp';

export class CharRangeSequence {
  private readonly charRanges: ReadonlyArray<CharRange>;
  private readonly astElements: ReadonlyArray<CharASTElement>;

  constructor(
    options: {
      readonly charRanges: ReadonlyArray<CharRange>;
      readonly astElements: ReadonlyArray<CharASTElement>;
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

  push(charRange: CharRange, astElement: CharASTElement): CharRangeSequence {
    return new CharRangeSequence({
      charRanges: [...this.charRanges, charRange],
      astElements: [...this.astElements, astElement],
    });
  }

  toJSON(): {
    readonly charRanges: ReadonlyArray<{
      readonly negate: boolean;
      readonly chars: ReadonlyArray<number>;
    }>;
    readonly astElements: ReadonlyArray<CharASTElement>;
  } {
    return {
      charRanges: this.charRanges.map((charRange) => charRange.toJSON()),
      astElements: this.astElements.slice(),
    };
  }

  isExclusive(other: CharRangeSequence): ExclusiveState {
    const minLengthInCommon = Math.min(
      this.charRanges.length,
      other.charRanges.length,
    );

    const isExclusive = _.any((i) => {
      return !this.charRanges[i].hasOverlap(other.charRanges[i]);
    }, _.range(0, minLengthInCommon));

    if (isExclusive) {
      return 'Exclusive';
    }

    return this.charRanges.length > other.charRanges.length
      ? 'OrderExclusive'
      : 'NotExclusive';
  }

  get(
    index: number,
  ):
    | {
        readonly charRange: CharRange;
        readonly astElement: CharASTElement;
      }
    | undefined {
    if (!this.charRanges[index]) {
      return undefined;
    }
    return {
      charRange: this.charRanges[index],
      astElement: this.astElements[index],
    };
  }

  length(): number {
    return this.charRanges.length;
  }
}

export class OverlyComplexBranchingError extends Error {
  readonly type = 'OverlyComplexBranchingError';
}

export function flattenSequences(
  seqs: ReadonlyArray<ReadonlyArray<CharRangeSequence>>,
): ReadonlyArray<CharRangeSequence> {
  const flattend = _.flatten(seqs);
  if (flattend.length > 100) {
    throw new OverlyComplexBranchingError();
  }

  return flattend;
}
