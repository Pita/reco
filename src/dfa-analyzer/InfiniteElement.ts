import {
  combineCharRanges,
  combineCharRangesBeforeAndAfter,
} from './combineCharRanges';
import { handleElement } from './Element';
import { DFAHandler, InfiniteASTElement, OptionalASTElement } from './types';

export const handleInfiniteASTElement: DFAHandler<InfiniteASTElement> = (
  element,
  literal,
  flags,
  currentLength,
  maxLength,
  path,
) => {
  const withoutQuantifier = handleElement(
    path[0],
    literal,
    flags,
    currentLength,
    maxLength,
    path.slice(1),
  );

  const withQuantifier = handleElement(
    element.element,
    literal,
    flags,
    currentLength,
    maxLength,
    [element, ...path],
  );

  return combineCharRangesBeforeAndAfter(
    [withoutQuantifier, withQuantifier],
    currentLength,
    maxLength,
  );
};
