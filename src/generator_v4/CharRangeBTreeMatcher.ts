import * as _ from 'lodash';
import { normalizeUpperLowerCase } from '../normalize_upper_lower_case';
import { LeafTemplate } from './templates/leaf';

interface Leaf {
  min: number;
  max: number;
  maxChecked?: boolean;
}

export class CharRangeBTreeMatcher {
  private chars: number[] = [];
  private ignoreCase: boolean;

  constructor(ignoreCase: boolean) {
    this.ignoreCase = ignoreCase;
  }

  addChar(char: number) {
    normalizeUpperLowerCase(char, this.ignoreCase).forEach((char) =>
      this.chars.push(char),
    );
  }

  addRange(min: number, max: number) {
    for (let char = min; char <= max; char++) {
      this.addChar(char);
    }
  }

  private processLeafs(leafs: Leaf[]): LeafTemplate | undefined {
    if (leafs.length === 0) {
      return undefined;
    }
    if (leafs.length === 1) {
      if (leafs[0].min === leafs[0].max) {
        return {
          lastComparison: true,
          comparison: {
            equal: true,
            comparisonValue: leafs[0].min,
          },
        };
      }
      if (leafs[0].maxChecked) {
        return {
          lastComparison: true,
          comparison: {
            moreOrEqual: true,
            comparisonValue: leafs[0].min,
          },
        };
      }
    }
    if (leafs.length === 2) {
      if (leafs[0].min === leafs[0].max && leafs[1].min === leafs[1].max) {
        return {
          lastComparison: true,
          comparison: {
            equalOneOfTwo: true,
            comparisonValue1: leafs[0].min,
            comparisonValue2: leafs[1].min,
          },
        };
      }
      if (leafs[0].min === leafs[0].max) {
        return {
          lastComparison: false,
          comparison: {
            equal: true,
            comparisonValue: leafs[0].min,
          },
          comparisonTrue: {
            lastComparison: true,
            comparison: { isTrue: true },
          },
          comparisonFalse: this.processLeafs(leafs.slice(1)),
        };
      }
    }

    const slicePoint = Math.ceil(leafs.length / 2);
    leafs[slicePoint - 1].maxChecked = true;

    const lowerHalf = this.processLeafs(leafs.slice(0, slicePoint));
    const upperHalf = this.processLeafs(leafs.slice(slicePoint));

    const comparison = {
      lessOrEqual: true,
      comparisonValue: leafs[slicePoint - 1].max,
    };

    return {
      lastComparison: false,
      comparison,
      comparisonTrue: lowerHalf,
      comparisonFalse: upperHalf,
    };
  }

  toLeafValues(): LeafTemplate | undefined {
    const sortedChars = _.sortedUniq(_.sortBy(this.chars));
    const leafs: Leaf[] = [];

    let rangeLeafStart = null;
    for (let i = 0; i < sortedChars.length; i++) {
      const currentChar = sortedChars[i];
      const nextCharIsFollowUp = currentChar + 1 === sortedChars[i + 1];

      if (rangeLeafStart === null) {
        if (nextCharIsFollowUp) {
          rangeLeafStart = currentChar;
        } else {
          leafs.push({ min: currentChar, max: currentChar });
        }
      } else if (!nextCharIsFollowUp) {
        leafs.push({
          min: rangeLeafStart,
          max: currentChar,
        });
        rangeLeafStart = null;
      }
    }

    if (leafs.length === 0) {
      // no op
      return {
        noop: true,
        lastComparison: true,
        comparison: {},
      };
    }

    return this.processLeafs(leafs);
  }
}
