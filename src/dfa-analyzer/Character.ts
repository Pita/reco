import { AST } from 'regexpp';
import { Flags } from 'regexpp/ast';
import { astToCharRange } from '../generator/astToCharRange';
import { CharRange } from '../generator/CharRange';
import { handleElement } from './Element';

export const handleSetOrCharacter = (
  element:
    | AST.CharacterClass
    | AST.AnyCharacterSet
    | AST.EscapeCharacterSet
    | AST.UnicodePropertyCharacterSet
    | AST.Character,
  flags: Flags,
  currentLength: number,
  maxLength: number,
  path: AST.Element[],
): CharRange[] => {
  const charRanges = [astToCharRange(element, flags)];

  const nextElement = path[0];
  const newCurrentLength = currentLength + charRanges.length;
  let followUpCharRanges: CharRange[] = [];
  if (nextElement != null && newCurrentLength < maxLength) {
    followUpCharRanges = handleElement(
      nextElement,
      flags,
      newCurrentLength,
      maxLength,
      path.slice(1),
    );
  }
  return [...charRanges, ...followUpCharRanges];
};
