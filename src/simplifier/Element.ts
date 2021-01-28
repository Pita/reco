import { AST } from 'regexpp';
import { handleCapturingGroup } from './CapturingGroup';
import { handleGroup } from './Group';
import { SimplifierHandler } from './types';

export const handleElement: SimplifierHandler<AST.Element> = (
  element,
  options,
) => {
  switch (element.type) {
    case 'Character':
    case 'CharacterSet':
    case 'CharacterClass':
    case 'Assertion':
      return element.raw;
    case 'Group':
      return handleGroup(element, options);
    case 'CapturingGroup':
      return handleCapturingGroup(element, options);
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
