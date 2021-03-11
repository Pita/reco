import { AST } from 'regexpp';
import { CollectedTemplateValues } from '../CollectedTemplateValues';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import { charRangeToLeafValues } from '../CharRangeBTreeMatcher';
import { astToCharRange } from '../astToCharRange';
import { UTF16UnitsCount } from '../CharRange';

export function utf16UnitsCountToMinAndMax(unitsCount: UTF16UnitsCount) {
  const min = unitsCount === '2' ? 2 : 1;
  const max = unitsCount !== '1' ? 2 : 1;
  return { min, max };
}

export const handleSetOrCharacter = (
  char:
    | AST.CharacterClass
    | AST.AnyCharacterSet
    | AST.EscapeCharacterSet
    | AST.UnicodePropertyCharacterSet
    | AST.Character,
  templateValues: CollectedTemplateValues,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
): FiberTemplateDefinition => {
  const charRange = astToCharRange(char, flags);
  const unitsCount = charRange.getUTF16UnitsCount(flags);
  const { min, max } = utf16UnitsCountToMinAndMax(unitsCount);

  return templateValues.addAtom(
    currentFiber,
    {
      type: flags.INTERNAL_backwards ? 'charOrSetBackward' : 'charOrSet',
      data: {
        tree: charRangeToLeafValues(charRange),
        negate: charRange.toJSON().negate,
        unitsCount,
        unicode: flags.unicode === true,
      },
      astLocation: char,
    },
    min,
    max,
    char,
  );
};
