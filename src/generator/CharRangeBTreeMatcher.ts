import * as _ from 'lodash';
import { CharRange } from './CharRange';
import { ComparsionTemplate } from './templates/comparison';
import { LeafTemplate } from './templates/leaf';

interface Leaf {
  min: number;
  max: number;
  maxChecked?: boolean;
}

const processLeafs = (leafs: Leaf[]): LeafTemplate => {
  if (leafs.length === 0) {
    return {
      type: 'lastComparison',
      comparison: { type: 'false' },
    };
  }
  if (leafs.length === 1) {
    if (leafs[0].min === leafs[0].max) {
      return {
        type: 'lastComparison',
        comparison: {
          type: 'equal',
          comparisonValue: leafs[0].min,
        },
      };
    }
    if (leafs[0].maxChecked) {
      return {
        type: 'lastComparison',
        comparison: {
          type: 'moreOrEqual',
          comparisonValue: leafs[0].min,
        },
      };
    }
  }
  if (leafs.length === 2) {
    if (leafs[0].min === leafs[0].max && leafs[1].min === leafs[1].max) {
      return {
        type: 'lastComparison',
        comparison: {
          type: 'equalOneOfTwo',
          comparisonValue1: leafs[0].min,
          comparisonValue2: leafs[1].min,
        },
      };
    }
    if (leafs[0].min === leafs[0].max) {
      return {
        type: 'comparison',
        comparison: {
          type: 'equal',
          comparisonValue: leafs[0].min,
        },
        comparisonTrue: {
          type: 'lastComparison',
          comparison: { type: 'true' },
        },
        comparisonFalse: processLeafs(leafs.slice(1)),
      };
    }
  }

  const slicePoint = Math.ceil(leafs.length / 2);
  leafs[slicePoint - 1].maxChecked = true;

  const lowerHalf = processLeafs(leafs.slice(0, slicePoint));
  const upperHalf = processLeafs(leafs.slice(slicePoint));

  const comparison: ComparsionTemplate = {
    type: 'lessOrEqual',
    comparisonValue: leafs[slicePoint - 1].max,
  };

  return {
    type: 'comparison',
    comparison,
    comparisonTrue: lowerHalf,
    comparisonFalse: upperHalf,
  };
};

export const charRangeToLeafValues = (
  charRange: CharRange,
): LeafTemplate | undefined => {
  const chars = charRange.toJSON().chars;
  const leafs: Leaf[] = [];

  let rangeLeafStart = null;
  for (let i = 0; i < chars.length; i++) {
    const currentChar = chars[i];
    const nextCharIsFollowUp = currentChar + 1 === chars[i + 1];

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

  return processLeafs(leafs);
};
