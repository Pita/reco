import {
  combineCharRanges,
  combineCharRangesBeforeAndAfter,
} from './combineCharRanges';
import { handleElement } from './Element';
import { DFAHandler, InfiniteASTElement, OptionalASTElement } from './types';

export const handleInfiniteASTElement: DFAHandler<InfiniteASTElement> = (
  element,
  options,
) => {
  const withoutQuantifier = handleElement(options.path[0], {
    ...options,
    path: options.path.slice(1),
  });

  const withQuantifier = handleElement(element.element, {
    ...options,
    path: [element, ...options.path],
  });

  return combineCharRangesBeforeAndAfter(
    [withoutQuantifier, withQuantifier],
    options.currentLength,
    options.maxLength,
  );
};
