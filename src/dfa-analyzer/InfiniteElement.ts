import { handleElement } from './Element';
import { DFAHandler, InfiniteASTElement } from './types';
import { flattenSequences } from './CharRangeSequence';

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

  return flattenSequences([withoutQuantifier, withQuantifier]);
};
