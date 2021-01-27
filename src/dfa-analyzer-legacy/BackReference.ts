import { AST } from 'regexpp';
import { handleElement } from './Element';
import { DFAHandler } from './types';

export const handleBackReference: DFAHandler<AST.Backreference> = (
  backreference,
  options,
) => {
  return handleElement(backreference.resolved, options);
};
