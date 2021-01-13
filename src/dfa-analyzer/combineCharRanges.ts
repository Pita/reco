import { CharRange } from '../generator/CharRange';

export const combineCharRanges = (
  charRangesArray: CharRange[][],
  currentLength: number,
  maxLength: number,
): CharRange[] => {
  const newCharRange: CharRange[] = [];
  for (let i = 0; i < maxLength - currentLength; i++) {
    let currentCharRange: CharRange | null = null;
    charRangesArray.forEach((charRanges) => {
      const charRangeOfAlternative = charRanges[i];
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
