import { handleElement } from './Element';
import { DFAHandler, MaxCountASTElement } from './types';
import { CharRangeSequence, flattenSequences } from './CharRangeSequence';

export const handleMaxCountASTElement: DFAHandler<MaxCountASTElement> = (
  element,
  options,
) => {
  const withoutQuantifier = handleElement(options.path[0], {
    ...options,
    path: options.path.slice(1),
  });

  let withQuantifier: CharRangeSequence[] = [];
  if (element.count > 0) {
    const newPathWithReducedCounter = [
      {
        ...element,
        count: element.count - 1,
      },
      ...options.path,
    ];
    withQuantifier = handleElement(element.element, {
      ...options,
      path: newPathWithReducedCounter,
    });
  }

  return flattenSequences([withoutQuantifier, withQuantifier]);
};
