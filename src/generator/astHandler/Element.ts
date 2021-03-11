import { AST } from 'regexpp';
import { ASTHandler } from '../generator';
import { NotSupportedException } from '../NotSupportedException';
import { handleCapturingGroup } from './CapturingGroup';
import { handleCharSequence } from './CharacterSequence';

export const handleElement: ASTHandler<AST.Element> = (
  element,
  nextAtom,
  context,
) => {
  switch (element.type) {
    case 'Character':
    case 'CharacterSet':
    case 'CharacterClass':
      return handleCharSequence([element], nextAtom, context);
    case 'CapturingGroup':
      return handleCapturingGroup(element, nextAtom, context);
    default:
      throw new NotSupportedException(`${element.type} not yet supported`);

    // case 'Quantifier':
    //   return handleQuantifier(element, templateValues, context);
    // case 'Assertion':
    //   return handleAssertion(element, templateValues, context);
    // case 'CapturingGroup':
    //   return handleCapturingGroup(element, templateValues, context);
    // case 'Backreference':
    //   throw new Error('Assertion not yet supported');

    // return handleBackReference(
    //   element,
    //   templateValues,
    //   currentFiber,
    //   flags,
    //   literal,
    // );
  }
};
