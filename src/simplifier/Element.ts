import { AST } from 'regexpp';
import { handleSetOrCharacter } from './Character';
import { SimplifierHandler } from './types';

export const handleElement: SimplifierHandler<AST.Element> = (
  element,
  options,
) => {
  switch (element.type) {
    case 'Character':
    case 'CharacterSet':
    case 'CharacterClass':
      return handleSetOrCharacter(element, options);
    // case 'Group':
    // case 'CapturingGroup':
    //   return handleDisjunction(element.alternatives, options);
    // case 'Assertion':
    //   return handleAssertion(element, options);
    // case 'MaxCountASTElement':
    //   return handleMaxCountASTElement(element, options);
    // case 'InfiniteASTElement':
    //   return handleInfiniteASTElement(element, options);
    // case 'Quantifier':
    //   return handleQuantifier(element, options);
    // case 'Backreference':
    //   return handleBackReference(element, options);
    // case 'Pattern':
    //   return handleDisjunction(element.alternatives, options);
    // case 'Alternative':
    //   return handleDisjunction([element], options);
    default:
      throw new Error(`Can't handle ${element.type}`);
  }
};
