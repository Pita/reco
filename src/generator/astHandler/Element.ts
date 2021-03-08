import { AST } from 'regexpp';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { handleSetOrCharacter } from './Character';
import { Flags, GeneratorContext } from '../generator';
import { handleDisjunction } from './Disjunction';
import { handleQuantifier } from './Quantifier';
import { handleAssertion } from './Assertion';
import { handleCapturingGroup } from './CapturingGroup';
import { handleBackReference } from './BackReference';
import { CollectedTemplateValues } from '../CollectedTemplateValues';

export const handleElement = (
  element: AST.Element,
  templateValues: CollectedTemplateValues,
  context: GeneratorContext,
): CollectedTemplateValues => {
  switch (element.type) {
    case 'Character':
    case 'CharacterSet':
    case 'CharacterClass':
      throw new Error('Should be unreachable');
    // return handleSetOrCharacter(
    //   element,
    //   templateValues,
    //   currentFiber,
    //   flags,
    //   literal,
    // );
    case 'Group':
      return handleDisjunction(element.alternatives, templateValues, context);
    case 'Quantifier':
      throw new Error('Quantifier not yet supported');
    // return handleQuantifier(
    //   element,
    //   templateValues,
    //   currentFiber,
    //   flags,
    //   literal,
    // );
    case 'Assertion':
      return handleAssertion(element, templateValues, context);
    case 'CapturingGroup':
      return handleCapturingGroup(element, templateValues, context);
    case 'Backreference':
      throw new Error('Assertion not yet supported');

    // return handleBackReference(
    //   element,
    //   templateValues,
    //   currentFiber,
    //   flags,
    //   literal,
    // );
  }
};
