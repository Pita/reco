import { AST } from 'regexpp';
import { Collector } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { handleSetOrCharacter } from './Character';
import { Flags } from '../generator';
import { handleDisjunction } from './Disjunction';
import { handleQuantifier } from './Quantifier';
import { handleAssertion } from './Assertion';
import { handleCapturingGroup } from './CapturingGroup';
import { handleBackReference } from './BackReference';

export const handleElement = (
  element: AST.Element,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  switch (element.type) {
    case 'Character':
    case 'CharacterSet':
    case 'CharacterClass':
      return handleSetOrCharacter(element, collector, currentFiber, flags);
    case 'Group':
      return handleDisjunction(
        element.alternatives,
        collector,
        currentFiber,
        flags,
      );
    case 'Quantifier':
      return handleQuantifier(element, collector, currentFiber, flags);
    case 'Assertion':
      return handleAssertion(element, collector, currentFiber, flags);
    case 'CapturingGroup':
      return handleCapturingGroup(element, collector, currentFiber, flags);
    case 'Backreference':
      return handleBackReference(element, collector, currentFiber, flags);
  }
};
