import { AST } from 'regexpp';
import { handleAlternative } from './Alternative';
import { DFAHandler } from './types';
import {
  combineCharRanges,
  combineCharRangesBeforeAndAfter,
} from './combineCharRanges';

export const handleDisjunction: DFAHandler<AST.Alternative[]> = (
  alternatives,
  flags,
  currentLength,
  maxLength,
  path,
) => {
  if (alternatives.length === 1) {
    return handleAlternative(
      alternatives[0],
      flags,
      currentLength,
      maxLength,
      path,
    );
  }

  const alternativesResolved = alternatives.map((alternative) =>
    handleAlternative(alternative, flags, currentLength, maxLength, path),
  );

  return combineCharRangesBeforeAndAfter(
    alternativesResolved,
    currentLength,
    maxLength,
  );
};
