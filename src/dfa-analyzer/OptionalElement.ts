import {
  combineCharRanges,
  combineCharRangesBeforeAndAfter,
} from './combineCharRanges';
import { handleElement } from './Element';
import { DFAHandler, OptionalASTElement } from './types';

export const handleOptionalASTElement: DFAHandler<OptionalASTElement> = (
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
    path,
  );

  return combineCharRangesBeforeAndAfter(
    [withoutQuantifier, withQuantifier],
    currentLength,
    maxLength,
  );
};
