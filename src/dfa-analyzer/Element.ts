import { AST } from 'regexpp';
import { Flags } from 'regexpp/ast';
import { CharRange } from '../generator/CharRange';
import { handleSetOrCharacter } from './Character';
import { handleDisjunction } from './Disjunction';

export const handleElement = (
  element: AST.Element,
  flags: Flags,
  currentLength: number,
  maxLength: number,
  path: AST.Element[],
): CharRange[] => {
  switch (element.type) {
    case 'Character':
    case 'CharacterSet':
    case 'CharacterClass':
      return handleSetOrCharacter(
        element,
        flags,
        currentLength,
        maxLength,
        path,
      );
    case 'Group':
    case 'CapturingGroup':
      return handleDisjunction(
        element.alternatives,
        flags,
        currentLength,
        maxLength,
        path,
      );
    default:
      throw new Error(`${element.type} not handled yet`);
    // case 'Quantifier':
    //   return handleQuantifier(element, collector, currentFiber, flags, literal);
    // case 'Assertion':
    //   return handleAssertion(element, collector, currentFiber, flags, literal);
    // case 'Backreference':
    //   return handleBackReference(
    //     element,
    //     collector,
    //     currentFiber,
    //     flags,
    //     literal,
    //   );
  }
};
