import { AST } from 'regexpp';
import { Flags } from 'regexpp/ast';
import { CharRange } from '../generator/CharRange';
import { handleAlternative } from './Alternative';
import * as util from 'util';

export const handleDisjunction = (
  alternatives: AST.Alternative[],
  flags: Flags,
  currentLength: number,
  maxLength: number,
  path: AST.Element[],
): CharRange[] => {
  if (alternatives.length === 1) {
    return handleAlternative(
      alternatives[0],
      flags,
      currentLength,
      maxLength,
      path,
    );
  }

  const alternativesResolved = alternatives.map((alternative) =>
    handleAlternative(alternative, flags, currentLength, maxLength, path),
  );

  const newCharRange: CharRange[] = [];
  for (let i = 0; i < maxLength - currentLength; i++) {
    let currentCharRange: CharRange | null = null;
    alternativesResolved.forEach((alternativeResolved) => {
      const charRangeOfAlternative = alternativeResolved[i];
      if (charRangeOfAlternative) {
        currentCharRange = (
          currentCharRange ?? CharRange.createEmptyRange()
        ).union(charRangeOfAlternative);
      }
    });

    if (currentCharRange) {
      newCharRange.push(currentCharRange);
    } else {
      break;
    }
  }

  return newCharRange;
};
