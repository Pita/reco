import { handleAssertion } from './Assertion';
import { handleBackReference } from './BackReference';
import { handleSetOrCharacter } from './Character';
import { handleDisjunction } from './Disjunction';
import { handleInfiniteASTElement } from './InfiniteElement';
import { handleOptionalASTElement } from './OptionalElement';
import { handleQuantifier } from './Quantifier';
import { AstElementOrQuantifierElement, DFAHandler } from './types';

export const handleElement: DFAHandler<
  AstElementOrQuantifierElement | undefined
> = (element, literal, flags, currentLength, maxLength, path) => {
  if (element == null || currentLength >= maxLength) {
    return { before: [], after: [] };
  }

  switch (element.type) {
    case 'Character':
    case 'CharacterSet':
    case 'CharacterClass':
      return handleSetOrCharacter(
        element,
        literal,
        flags,
        currentLength,
        maxLength,
        path,
      );
    case 'Group':
    case 'CapturingGroup':
      return handleDisjunction(
        element.alternatives,
        literal,
        flags,
        currentLength,
        maxLength,
        path,
      );
    case 'OptionalASTElement':
      return handleOptionalASTElement(
        element,
        literal,
        flags,
        currentLength,
        maxLength,
        path,
      );
    case 'InfiniteASTElement':
      return handleInfiniteASTElement(
        element,
        literal,
        flags,
        currentLength,
        maxLength,
        path,
      );
    case 'Quantifier':
      return handleQuantifier(
        element,
        literal,
        flags,
        currentLength,
        maxLength,
        path,
      );
    case 'Assertion':
      return handleAssertion(
        element,
        literal,
        flags,
        currentLength,
        maxLength,
        path,
      );
    case 'Backreference':
      return handleBackReference(
        element,
        literal,
        flags,
        currentLength,
        maxLength,
        path,
      );
  }
};
