import { AST } from 'regexpp';
import { handleElement } from './Element';
import { DFAHandler } from './types';

export const handleQuantifier: DFAHandler<AST.Quantifier> = (
  quantifier,
  flags,
  currentLength,
  maxLength,
  path,
) => {
  const newPath = [...path];

  for (let i = 0; i < quantifier.min; i++) {
    newPath.unshift(quantifier.element);
  }

  if (quantifier.max === Infinity) {
    newPath.unshift({
      type: 'InfiniteASTElement',
      element: quantifier.element,
    });
  } else {
    for (let i = quantifier.min; i < quantifier.max; i++) {
      newPath.unshift({
        type: 'OptionalASTElement',
        element: quantifier.element,
      });
    }
  }

  return handleElement(
    newPath[0],
    flags,
    currentLength,
    maxLength,
    newPath.slice(1),
  );
};
