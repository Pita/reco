import { AST } from 'regexpp';
import { Collector } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import { charRangeToLeafValues } from '../CharRangeBTreeMatcher';
import { astToCharRange } from '../astToCharRange';

export const handleSetOrCharacter = (
  element:
    | AST.CharacterClass
    | AST.AnyCharacterSet
    | AST.EscapeCharacterSet
    | AST.UnicodePropertyCharacterSet
    | AST.Character,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
): FiberTemplateDefinition => {
  const newCharRange = astToCharRange(element, flags);

  if (flags.INTERNAL_backwards) {
    return collector.addAtom(
      currentFiber,
      {
        type: 'charOrSetBackward',
        data: {
          tree: charRangeToLeafValues(newCharRange),
          negate: newCharRange.toJSON().negate,
          unicode: flags.unicode,
        },
        ast: element,
      },
      1,
      newCharRange.getUTF16UnitsCount(flags),
      element,
    );
  } else {
    return collector.addAtom(
      currentFiber,
      {
        type: 'charOrSet',
        data: {
          tree: charRangeToLeafValues(newCharRange),
          negate: newCharRange.toJSON().negate,
          unicode: flags.unicode,
        },
        ast: element,
      },
      1,
      newCharRange.getUTF16UnitsCount(flags),
      element,
    );
  }
};
