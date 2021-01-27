import { handleElement } from './Element';
import { DFAHandler, InfiniteASTElement } from './types';
import * as _ from 'lodash';

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

  return _.flatten([withQuantifier, withoutQuantifier]);
};
