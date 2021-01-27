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
> = (element, options) => {
  if (options.currentLength >= options.maxLength) {
    return { before: [], after: [] };
  }

  const charRangesFromCache = options.cache.astToCharRange.get(element);
  let charRanges;
  if (charRangesFromCache) {
    charRanges = [charRangesFromCache];
  } else {
    const resolvedCharRanges = astToCharRange(element, options.literal.flags);
    charRanges = [resolvedCharRanges];
    options.cache.astToCharRange.set(element, resolvedCharRanges);
  }

  const followUpCharRanges = handleElement(options.path[0], {
    ...options,
    currentLength: options.currentLength + 1,
    path: options.path.slice(1),
  });

  const afterCharRanges = [
    ...combineCharRanges(
      [followUpCharRanges.before.slice(-1).reverse(), charRanges],
      options.currentLength,
      options.maxLength,
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
