import { AST } from 'regexpp';
import { countGroups } from './countGroups';
import { handleElement } from './Element';
import { SimplifierHandler } from './types';

const UNROLL_MIN = 10;

export const handleQuantifier: SimplifierHandler<AST.Quantifier> = (
  quantifier,
  options,
) => {
  let unrolledQuantifiers = '';
  let unrolled = false;

  if (options.firstPass) {
    const containsGroups = countGroups(quantifier) > 0;

    if (quantifier.min > 1 || (quantifier.min > 0 && !containsGroups)) {
      const unrolledCount = Math.min(
        containsGroups ? quantifier.min - 1 : quantifier.min,
        UNROLL_MIN,
      );

      for (let i = 0; i < unrolledCount; i++) {
        unrolled = containsGroups;
        unrolledQuantifiers += handleElement(quantifier.element, {
          ...options,
          removeCapturingGroups: true,
        });
      }

      quantifier.min = quantifier.min - unrolledCount;
      quantifier.max = quantifier.max - unrolledCount;

      if (containsGroups) {
        console.log(quantifier.start, 'quantifier.min', quantifier.min);
      }
    }
  }

  let quantifiableElement = '';
  let quantifierStr = '';

  if (quantifier.max !== 0) {
    quantifiableElement = handleElement(quantifier.element, options);
    if (quantifier.min === 0 && quantifier.max === Infinity) {
      quantifierStr = '*';
    } else if (quantifier.min === 1 && quantifier.max === Infinity) {
      quantifierStr = '+';
    } else if (quantifier.min === 0 && quantifier.max === 1) {
      quantifierStr = '?';
    } else if (quantifier.min === 1 && quantifier.max === 1) {
      quantifierStr = '';
    } else if (quantifier.min === quantifier.max) {
      quantifierStr = `{${quantifier.min}}`;
    } else {
      quantifierStr = `{${quantifier.min},${
        quantifier.max === Infinity ? '' : quantifier.max
      }}`;
    }
    if (!quantifier.greedy && quantifierStr !== '') {
      quantifierStr += '?';
    }
  }

  if (unrolled) {
    console.log(
      quantifier.start,
      quantifier.raw,
      '->',
      `${unrolledQuantifiers}${quantifiableElement}${quantifierStr}`,
    );
  }

  return `${unrolledQuantifiers}${quantifiableElement}${quantifierStr}`;
};
