import { AST } from 'regexpp';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { handleSetOrCharacter } from './Character';
import { Flags } from '../generator';
import { handleDisjunction } from './Disjunction';
import { handleQuantifier } from './Quantifier';
import { handleAssertion } from './Assertion';
import { handleCapturingGroup } from './CapturingGroup';
import { handleBackReference } from './BackReference';
import { CollectedTemplateValues } from '../CollectedTemplateValues';

export const handleElement = (
  element: AST.Element,
  templateValues: CollectedTemplateValues,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
): CollectedTemplateValues => {
  switch (element.type) {
    case 'Character':
    case 'CharacterSet':
    case 'CharacterClass':
      return handleSetOrCharacter(
        element,
        templateValues,
        currentFiber,
        flags,
        literal,
      );
    case 'Group':
      return handleDisjunction(
        element.alternatives,
        templateValues,
        currentFiber,
        flags,
        literal,
      );
    case 'Quantifier':
      return handleQuantifier(
        element,
        templateValues,
        currentFiber,
        flags,
        literal,
      );
    case 'Assertion':
      return handleAssertion(
        element,
        templateValues,
        currentFiber,
        flags,
        literal,
      );
    case 'CapturingGroup':
      return handleCapturingGroup(
        element,
        templateValues,
        currentFiber,
        flags,
        literal,
      );
    case 'Backreference':
      return handleBackReference(
        element,
        templateValues,
        currentFiber,
        flags,
        literal,
      );
  }
};
