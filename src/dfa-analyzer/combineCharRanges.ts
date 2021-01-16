import { CharRange } from '../generator/CharRange';
import { CharRangesBeforeAndAfter } from './types';

export const combineCharRanges = (
  charRangesArray: CharRange[][],
  currentLength: number,
  maxLength: number,
  method: 'smallestInCommon' | 'union',
): CharRange[] => {
  const newCharRange: CharRange[] = [];
  const startRange =
    method === 'union'
      ? CharRange.createEmptyRange()
      : CharRange.createFullRange();
  for (let i = 0; i < maxLength - currentLength; i++) {
    let currentCharRange: CharRange | null = null;
    charRangesArray.forEach((charRanges) => {
      const charRangeOfAlternative = charRanges[i];
      if (charRangeOfAlternative) {
        currentCharRange = (currentCharRange ?? startRange)[method](
          charRangeOfAlternative,
        );
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

export const combineCharRangesBeforeAndAfter = (
  charRangesBeforeAndAfterArray: CharRangesBeforeAndAfter[],
  currentLength: number,
  maxLength: number,
): CharRangesBeforeAndAfter => {
  const charRangesArrayBefore: CharRange[][] = [],
    charRangesArrayAfter: CharRange[][] = [];

  charRangesBeforeAndAfterArray.forEach((charRangesBeforeAndAfter) => {
    charRangesArrayBefore.push(charRangesBeforeAndAfter.before);
    charRangesArrayAfter.push(charRangesBeforeAndAfter.after);
  });

  const charRangesBefore = combineCharRanges(
    charRangesArrayBefore,
    currentLength,
    maxLength,
    'union',
  );
  const charRangesAfter = combineCharRanges(
    charRangesArrayAfter,
    currentLength,
    maxLength,
    'union',
  );

  return {
    before: charRangesBefore,
    after: charRangesAfter,
  };
};
