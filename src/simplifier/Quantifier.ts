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

  if (quantifier.min > 0 && options.firstPass) {
    // TODO: only quantifable element group should be ok
    if (countGroups(quantifier) === 0) {
      let unrolledCount = 0;
      for (let i = 0; i < Math.min(quantifier.min, UNROLL_MIN); i++) {
        unrolledQuantifiers += quantifier.element.raw;
        unrolledCount++;
      }

      quantifier.min = quantifier.min - unrolledCount;
      quantifier.max = quantifier.max - unrolledCount;
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
    } else if (quantifier.min === quantifier.max) {
      quantifierStr = `{${quantifier.min}}`;
    } else {
      quantifierStr = `{${quantifier.min},${
        quantifier.max === Infinity ? '' : quantifier.max
      }}`;
    }
    if (!quantifier.greedy) {
      quantifierStr += '?';
    }
  }

  return `${unrolledQuantifiers}${quantifiableElement}${quantifierStr}`;
};
