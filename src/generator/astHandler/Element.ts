import { AST } from 'regexpp';
import { ASTHandler } from '../generator';
import { NotSupportedException } from '../NotSupportedException';
import { handleAssertion } from './Assertion';
import { handleBackReference } from './BackReference';
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
    case 'Assertion':
      return handleAssertion(element, nextAtom, context);
    case 'Backreference':
      return handleBackReference(element, nextAtom, context);
    default:
      throw new NotSupportedException(`${element.type} not yet supported`);

    // case 'Quantifier':
    //   return handleQuantifier(element, templateValues, context);

    // case 'CapturingGroup':
    //   return handleCapturingGroup(element, templateValues, context);

    // return handleBackReference(
    //   element,
    //   templateValues,
    //   currentFiber,
    //   flags,
    //   literal,
    // );
  }
};
