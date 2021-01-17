import { AST } from 'regexpp';
import { handleElement } from './Element';
import { DFAHandler } from './types';

export const handleBackReference: DFAHandler<AST.Backreference> = (
  backreference,
  literal,
  flags,
  currentLength,
  maxLength,
  path,
) => {
  return handleElement(
    backreference.resolved,
    literal,
    flags,
    currentLength,
    maxLength,
    path,
  );
};
