import { combineCharRanges } from './combineCharRanges';
import { handleElement } from './Element';
import { DFAHandler, OptionalASTElement } from './types';

export const handleOptionalASTElement: DFAHandler<OptionalASTElement> = (
  element,
  flags,
  currentLength,
  maxLength,
  path,
) => {
  const withoutQuantifier = handleElement(
    path[0],
    flags,
    currentLength,
    maxLength,
    path.slice(1),
  );

  const withQuantifier = handleElement(
    element.element,
    flags,
    currentLength,
    maxLength,
    path,
  );

  return combineCharRanges(
    [withoutQuantifier, withQuantifier],
    currentLength,
    maxLength,
  );
};
