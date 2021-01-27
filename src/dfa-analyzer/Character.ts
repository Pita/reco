import { AST } from 'regexpp';
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
> = (element, options) => {
  if (options.currentLength >= options.maxLength) {
    return options.currentSequences;
  }

  const charRangeFromCache = options.cache.astToCharRange.get(element);
  let newCharRange: CharRange;
  if (charRangeFromCache) {
    newCharRange = charRangeFromCache;
  } else {
    const resolvedCharRanges = astToCharRange(element, options.literal.flags);
    newCharRange = resolvedCharRanges;
    options.cache.astToCharRange.set(element, resolvedCharRanges);
  }

  const newSequences = options.currentSequences.map((sequence) =>
    sequence.push(newCharRange),
  );

  return handleElement(options.path[0], {
    ...options,
    currentLength: options.currentLength + 1,
    path: options.path.slice(1),
    currentSequences: newSequences,
  });
};
