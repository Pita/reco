import { AST } from 'regexpp';
import { SimplifierHandler } from './types';

export const handleSetOrCharacter: SimplifierHandler<
  | AST.CharacterClass
  | AST.AnyCharacterSet
  | AST.EscapeCharacterSet
  | AST.UnicodePropertyCharacterSet
  | AST.Character
> = (char, options) => {
  return char.raw;
};
