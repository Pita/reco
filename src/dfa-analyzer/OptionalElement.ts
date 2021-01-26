import {
  combineCharRanges,
  combineCharRangesBeforeAndAfter,
} from './combineCharRanges';
import { handleElement } from './Element';
import { DFAHandler, OptionalASTElement } from './types';

export const handleOptionalASTElement: DFAHandler<OptionalASTElement> = (
  element,
  options,
) => {
  const withoutQuantifier = handleElement(options.path[0], {
    ...options,
    path: options.path.slice(1),
  });

  const withQuantifier = handleElement(element.element, options);

  return combineCharRangesBeforeAndAfter(
    [withoutQuantifier, withQuantifier],
    options.currentLength,
    options.maxLength,
  );
};
