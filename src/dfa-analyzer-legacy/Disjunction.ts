import { AST } from 'regexpp';
import { handleAlternative } from './Alternative';
import { DFAHandler } from './types';
import { combineCharRangesBeforeAndAfter } from './combineCharRanges';

export const handleDisjunction: DFAHandler<AST.Alternative[]> = (
  alternatives,
  options,
) => {
  if (alternatives.length === 1) {
    return handleAlternative(alternatives[0], options);
  }

  const alternativesResolved = alternatives.map((alternative) =>
    handleAlternative(alternative, options),
  );

  return combineCharRangesBeforeAndAfter(
    alternativesResolved,
    options.currentLength,
    options.maxLength,
  );
};
