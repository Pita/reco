import { handleAssertion } from './Assertion';
import { handleBackReference } from './BackReference';
import { handleSetOrCharacter } from './Character';
import { handleDisjunction } from './Disjunction';
import { handleInfiniteASTElement } from './InfiniteElement';
import { handleMaxCountASTElement } from './MaxCountElement';
import { handleQuantifier } from './Quantifier';
import { AstElementOrQuantifierElement, DFAHandler } from './types';

export const handleElement: DFAHandler<
  AstElementOrQuantifierElement | undefined
> = (element, options) => {
  if (element == null) {
    return options.currentSequences;
  }

  switch (element.type) {
    case 'Character':
    case 'CharacterSet':
    case 'CharacterClass':
      return handleSetOrCharacter(element, options);
    case 'Group':
    case 'CapturingGroup':
      return handleDisjunction(element.alternatives, options);
    case 'Assertion':
      return handleAssertion(element, options);
    case 'MaxCountASTElement':
      return handleMaxCountASTElement(element, options);
    case 'InfiniteASTElement':
      return handleInfiniteASTElement(element, options);
    case 'Quantifier':
      return handleQuantifier(element, options);
    case 'Backreference':
      return handleBackReference(element, options);
  }
};
