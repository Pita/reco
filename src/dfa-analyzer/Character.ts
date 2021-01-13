import { AST } from 'regexpp';
import { Flags } from 'regexpp/ast';
import { astToCharRange } from '../generator/astToCharRange';
import { CharRange } from '../generator/CharRange';
import { handleElement } from './Element';
import { DFAHandler } from './types';

export const handleSetOrCharacter: DFAHandler<
  | AST.CharacterClass
  | AST.AnyCharacterSet
  | AST.EscapeCharacterSet
  | AST.UnicodePropertyCharacterSet
  | AST.Character
> = (element, flags, currentLength, maxLength, path) => {
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
