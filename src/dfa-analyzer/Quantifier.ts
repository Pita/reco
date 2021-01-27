import { AST } from 'regexpp';
import { handleElement } from './Element';
import { DFAHandler } from './types';

export const handleQuantifier: DFAHandler<AST.Quantifier> = (
  quantifier,
  options,
) => {
  const newPath = [...options.path];

  if (quantifier.max === Infinity) {
    newPath.unshift({
      type: 'InfiniteASTElement',
      element: quantifier.element,
    });
  } else {
    newPath.unshift({
      type: 'MaxCountASTElement',
      element: quantifier.element,
      count: quantifier.max - quantifier.min,
    });
  }

  for (let i = 0; i < quantifier.min; i++) {
    newPath.unshift(quantifier.element);
  }

  return handleElement(newPath[0], {
    ...options,
    path: newPath.slice(1),
  });
};
