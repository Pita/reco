import { combineCharRanges } from './combineCharRanges';
import { handleElement } from './Element';
import { DFAHandler, InfiniteASTElement, OptionalASTElement } from './types';

export const handleInfiniteASTElement: DFAHandler<InfiniteASTElement> = (
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
    [element, ...path],
  );

  return combineCharRanges(
    [withoutQuantifier, withQuantifier],
    currentLength,
    maxLength,
  );
};
