import { AST } from 'regexpp';
import { handleCapturingGroup } from './CapturingGroup';
import { handleGroup } from './Group';
import { handleQuantifier } from './Quantifier';
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
    case 'Backreference':
      return element.raw;
    case 'Group':
      return handleGroup(element, options);
    case 'CapturingGroup':
      return handleCapturingGroup(element, options);
    case 'Quantifier':
      return handleQuantifier(element, options);
  }
};
