import { AST } from 'regexpp';
import { handleAlternative } from './Alternative';
import { SimplifierHandler } from './types';

const removeFromSide = (
  alternatives: AST.Alternative[],
  side: 'start' | 'end',
) => {
  let removed = '';

  while (true) {
    const needleIndex =
      side === 'start' ? 0 : alternatives[0].elements.length - 1;
    const needle = alternatives[0].elements[needleIndex];

    if (!needle || needle.type === 'CapturingGroup') {
      break;
    }

    const allAlternativesHaveNeedle = alternatives.every((alternative) => {
      const elementIndex =
        side === 'start' ? 0 : alternative.elements.length - 1;
      const element = alternative.elements[elementIndex];
      if (!element) {
        return false;
      }

      return element.raw === needle.raw && element.type === needle.type;
    });

    if (allAlternativesHaveNeedle) {
      alternatives.forEach((alternative) =>
        side === 'start'
          ? alternative.elements.shift()
          : alternative.elements.pop(),
      );

      removed =
        side === 'start'
          ? `${removed}${needle.raw}`
          : `${needle.raw}${removed}`;
    } else {
      break;
    }
  }

  return removed;
};

const CHAR_TYPES = ['Character', 'CharacterSet', 'CharacterClass'];

const tryToSimplifyOneCharDisjunctions = (alternatives: AST.Alternative[]) => {
  const canBeTransformed = alternatives.every((alternative) => {
    if (alternative.elements.length !== 1) {
      return false;
    }

    return CHAR_TYPES.includes(alternative.elements[0].type);
  });

  if (!canBeTransformed) {
    return null;
  }

  const charsJoined = alternatives
    .map((alternative) => alternative.elements[0].raw)
    .join('');
  return `[${charsJoined}]`;
};

const tryToSimplifyNestedDisjunctions = (alternatives: AST.Alternative[]) => {
  const nestedAlternatives: AST.Alternative[] = [];
  let isNested = true;

  alternatives.forEach((alternative) => {
    alternative.elements.forEach((alternativeElement) => {
      if (alternativeElement.type !== 'Group') {
        isNested = false;
        return;
      }

      alternativeElement.alternatives.forEach((subAlternative) =>
        nestedAlternatives.push(subAlternative),
      );
    });
  });

  return isNested ? nestedAlternatives : alternatives;
};

export const handleDisjunction: SimplifierHandler<AST.Alternative[]> = (
  alternatives,
  options,
) => {
  if (alternatives.length === 1) {
    return handleAlternative(alternatives[0], options);
  }

  const removedFromStart = removeFromSide(alternatives, 'start');
  const removedFromEnd = removeFromSide(alternatives, 'end');

  const attemptedOneCharSimplification = tryToSimplifyOneCharDisjunctions(
    alternatives,
  );

  const alternativesString =
    attemptedOneCharSimplification ??
    tryToSimplifyNestedDisjunctions(alternatives)
      .map((alternative) => handleAlternative(alternative, options))
      .join('|');

  if (removedFromStart !== '' || removedFromEnd !== '') {
    return `${removedFromStart}(?:${alternativesString})${removedFromEnd}`;
  } else {
    return alternativesString;
  }
};
