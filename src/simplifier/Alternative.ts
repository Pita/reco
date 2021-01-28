import { AST } from 'regexpp';
import { handleElement } from './Element';
import { SimplifierHandler } from './types';

export const handleAlternative: SimplifierHandler<AST.Alternative> = (
  alternative,
  options,
) => {
  return alternative.elements
    .map((element) => handleElement(element, options))
    .join('');
};
