import { CharRange } from '../generator/CharRange';

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
