import { AST } from 'regexpp';
import { astToCharRange } from '../generator/astToCharRange';
import { combineCharRanges } from './combineCharRanges';
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

  const followUpCharRanges = handleElement(
    path[0],
    flags,
    currentLength + charRanges.length,
    maxLength,
    path.slice(1),
  );

  const afterCharRanges = [
    ...combineCharRanges(
      [followUpCharRanges.before.slice(-1).reverse(), charRanges],
      currentLength,
      maxLength,
      'smallestInCommon',
    ),
    ...followUpCharRanges.after,
  ];
  const beforeCharRanges = followUpCharRanges.before.slice(0, -1);

  return {
    before: beforeCharRanges,
    after: afterCharRanges,
  };
};
