import { AST } from 'regexpp';
import { countGroups } from './countGroups';
import { handleElement } from './Element';
import { SimplifierHandler } from './types';

const UNROLL_MIN = 10;

export const handleQuantifier: SimplifierHandler<AST.Quantifier> = (
  quantifier,
  options,
) => {
  if (quantifier.max === 0) {
    return '';
  }

  let unrolledQuantifiers = '';

  if (quantifier.min > 0 && options.firstPass) {
    // TODO: only quantifable element group should be ok
    if (countGroups(quantifier) === 0) {
      for (let i = 0; i < Math.min(quantifier.min, UNROLL_MIN); i++) {
        unrolledQuantifiers += quantifier.element.raw;
      }

      quantifier.min = Math.max(0, quantifier.min - UNROLL_MIN);
    }
  }

  const quantifiableElement = handleElement(quantifier.element, options);

  let quantifierStr;
  if (quantifier.min === 0 && quantifier.max === Infinity) {
    quantifierStr = '*';
  } else if (quantifier.min === 1 && quantifier.max === Infinity) {
    quantifierStr = '+';
  } else if (quantifier.min === 0 && quantifier.max === 1) {
    quantifierStr = '?';
  } else {
    quantifierStr = `{${quantifier.min}, ${
      quantifier.max === Infinity ? '' : quantifier.max
    }}`;
  }

  return `${unrolledQuantifiers}${quantifiableElement}${quantifierStr}`;
};
