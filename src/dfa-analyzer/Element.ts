import { handleAssertion } from './Assertion';
import { handleSetOrCharacter } from './Character';
import { handleDisjunction } from './Disjunction';
import { handleInfiniteASTElement } from './InfiniteElement';
import { handleOptionalASTElement } from './OptionalElement';
import { handleQuantifier } from './Quantifier';
import { AstElementOrQuantifierElement, DFAHandler } from './types';

export const handleElement: DFAHandler<
  AstElementOrQuantifierElement | undefined
> = (element, flags, currentLength, maxLength, path) => {
  if (element == null || currentLength >= maxLength) {
    return { before: [], after: [] };
  }

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
    case 'OptionalASTElement':
      return handleOptionalASTElement(
        element,
        flags,
        currentLength,
        maxLength,
        path,
      );
    case 'InfiniteASTElement':
      return handleInfiniteASTElement(
        element,
        flags,
        currentLength,
        maxLength,
        path,
      );
    case 'Quantifier':
      return handleQuantifier(element, flags, currentLength, maxLength, path);
    case 'Assertion':
      return handleAssertion(element, flags, currentLength, maxLength, path);
    default:
      throw new Error(`${element.type} not handled yet`);
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
