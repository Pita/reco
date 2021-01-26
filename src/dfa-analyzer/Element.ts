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
> = (element, options) => {
  if (element == null) {
    return { before: [], after: [] };
  }

  switch (element.type) {
    case 'Character':
    case 'CharacterSet':
    case 'CharacterClass':
      return handleSetOrCharacter(element, options);
    case 'Group':
    case 'CapturingGroup':
      return handleDisjunction(element.alternatives, options);
    case 'OptionalASTElement':
      return handleOptionalASTElement(element, options);
    case 'InfiniteASTElement':
      return handleInfiniteASTElement(element, options);
    case 'Quantifier':
      return handleQuantifier(element, options);
    case 'Assertion':
      return handleAssertion(element, options);
    case 'Backreference':
      return handleBackReference(element, options);
  }
};
