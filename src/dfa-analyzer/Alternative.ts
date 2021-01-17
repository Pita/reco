import { AST } from 'regexpp';
import { handleElement } from './Element';
import { ASTPath, DFAHandler } from './types';

export const handleAlternative: DFAHandler<AST.Alternative> = (
  alternative,
  literal,
  flags,
  currentLength,
  maxLength,
  path,
) => {
  if (alternative.elements.length === 0) {
    return { before: [], after: [] };
  }

  const newPath: ASTPath = [...alternative.elements.slice(1), ...path];
  return handleElement(
    alternative.elements[0],
    literal,
    flags,
    currentLength,
    maxLength,
    newPath,
  );
};
