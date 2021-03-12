import { AST } from 'regexpp';
import { handleAlternative } from './Alternative';
import { DFAHandler } from './types';
import { flattenSequences } from './CharRangeSequence';

export const handleDisjunction: DFAHandler<ReadonlyArray<AST.Alternative>> = (
  alternatives,
  options,
) => {
  if (alternatives.length === 1) {
    return handleAlternative(alternatives[0], options);
  }

  return flattenSequences(
    alternatives.map((alternative) => handleAlternative(alternative, options)),
  );
};
