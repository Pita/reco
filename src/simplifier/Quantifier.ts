import { AST } from 'regexpp';
import { SimplifierHandler } from './types';

export const handleQuantifier: SimplifierHandler<AST.Quantifier> = (
  quantifier,
  options,
) => {
  if (quantifier.max === 0) {
    return '';
  }

  return quantifier.raw;
};
