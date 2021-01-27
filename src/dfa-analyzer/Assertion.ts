import { AST } from 'regexpp';
import { handleElement } from './Element';
import { DFAHandler } from './types';

/*
  Assertions gets skipped
*/
export const handleAssertion: DFAHandler<AST.Assertion> = (
  assertion,
  options,
) => {
  if (options.currentLength >= options.maxLength) {
    return options.currentSequences;
  }

  return handleElement(options.path[0], {
    ...options,
    currentLength: options.currentLength,
    path: options.path.slice(1),
  });
};
