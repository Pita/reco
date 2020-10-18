import { AST } from 'regexpp';
import { Collector } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from 'regexpp/ast';
import { handleElement } from './Element';

export const handleAlternative = (
  alternative: AST.Alternative,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  let lastFiber = currentFiber;
  for (let i = alternative.elements.length - 1; i >= 0; i--) {
    lastFiber = handleElement(
      alternative.elements[i],
      collector,
      lastFiber,
      flags,
    );
  }

  return lastFiber;
};
