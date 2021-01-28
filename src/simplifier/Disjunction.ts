import { AST } from 'regexpp';
import { handleAlternative } from './Alternative';
import { removeFromSide } from './removeFromSide';
import { SimplifierHandler } from './types';

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

const ELEMENTS_TO_BE_REMOVED = [
  'Character',
  'CharacterSet',
  'CharacterClass',
  'Group',
  'Assertion',
  'Quantifier',
  'Backreference',
];

export const handleDisjunction: SimplifierHandler<AST.Alternative[]> = (
  alternatives,
  options,
) => {
  if (alternatives.length === 1) {
    return handleAlternative(alternatives[0], options);
  }

  const removedFromStart = removeFromSide(
    alternatives,
    'start',
    ELEMENTS_TO_BE_REMOVED,
  );
  const removedFromEnd = removeFromSide(
    alternatives,
    'end',
    ELEMENTS_TO_BE_REMOVED,
  );

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
