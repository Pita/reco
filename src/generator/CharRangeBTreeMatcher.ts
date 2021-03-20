import { CharRange } from './CharRange';
import { ComparsionTemplate } from './templates/comparison';
import { LeafTemplate } from './templates/leaf';
import * as _ from 'lodash/fp';

interface Leaf {
  readonly min: number;
  readonly max: number;
  readonly maxChecked?: boolean;
}

type LeafComplexityAcc = {
  readonly complexitySum: number;
  readonly complexityCount: number;
};

export const computeAverageLeafComplexity = (
  rootLeaf: LeafTemplate,
): number => {
  const processLeaf = (
    acc: LeafComplexityAcc,
    leaf: LeafTemplate,
    depth: number,
  ): LeafComplexityAcc => {
    switch (leaf.type) {
      case 'comparison':
        return [leaf.comparisonTrue, leaf.comparisonFalse].reduce(
          (acc, leaf) => {
            return processLeaf(acc, leaf, depth + 1);
          },
          acc,
        );
      case 'lastComparison':
        switch (leaf.comparison.type) {
          case 'lessOrEqual':
          case 'moreOrEqual':
          case 'equal':
            return {
              complexityCount: acc.complexityCount + 1,
              complexitySum: acc.complexitySum + 1 + depth,
            };
          case 'equalOneOfTwo':
            return {
              complexityCount: acc.complexityCount + 2,
              complexitySum: acc.complexitySum + 3 + depth,
            };
          case 'false':
          case 'true':
            return {
              complexityCount: acc.complexityCount + 1,
              complexitySum: acc.complexitySum + depth,
            };
        }
    }
  };

  const { complexitySum, complexityCount } = processLeaf(
    { complexitySum: 0, complexityCount: 0 },
    rootLeaf,
    0,
  );

  const averageComplexity = complexitySum / complexityCount;
  return averageComplexity;
};

const processLeafs = (leafs: readonly Leaf[]): LeafTemplate => {
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
  const markedLeafs = leafs.map((leaf, i) => {
    if (i === slicePoint - 1) {
      return {
        ...leaf,
        maxChecked: true,
      };
    }

    return leaf;
  });

  const lowerHalf = processLeafs(markedLeafs.slice(0, slicePoint));
  const upperHalf = processLeafs(markedLeafs.slice(slicePoint));

  const comparison: ComparsionTemplate = {
    type: 'lessOrEqual',
    comparisonValue: markedLeafs[slicePoint - 1].max,
  };

  return {
    type: 'comparison',
    comparison,
    comparisonTrue: lowerHalf,
    comparisonFalse: upperHalf,
  };
};

export const charRangeToLeafValues = (charRange: CharRange): LeafTemplate => {
  const chars = charRange.toJSON().chars;

  const charGroups = chars.reduce((acc, currentChar) => {
    const lastGroup = _.last(acc) ?? [];
    const lastChar = _.last(lastGroup);

    const charIsFollowUp = lastChar ? lastChar + 1 === currentChar : true;
    if (charIsFollowUp) {
      return [...acc.slice(0, -1), [...lastGroup, currentChar]];
    } else {
      return [...acc, [currentChar]];
    }
  }, [] as readonly (readonly number[])[]);

  const leafs: readonly Leaf[] = charGroups.map((charGroup) => {
    const min = _.first(charGroup);
    const max = _.last(charGroup);

    if (min === undefined || max === undefined) {
      throw new Error('Invalid empty char group');
    }

    return {
      min,
      max,
    };
  });

  return processLeafs(leafs);
};
