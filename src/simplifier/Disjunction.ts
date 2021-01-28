import { AST } from 'regexpp';
import { handleAlternative } from './Alternative';
import { removeFromSide } from './removeFromSide';
import { SimplifierHandler, SimplifierHandlerOptions } from './types';
import sortBy from 'lodash/sortBy';
import { computeExclusivityOfAlternatives } from '../dfa-analyzer/CharRangeSequencePossibilities';
import { countGroups } from './countGroups';

const CHAR_TYPES = ['Character', 'CharacterSet', 'CharacterClass'];
const ELEMENTS_TO_BE_REMOVED = [
  'Character',
  'CharacterSet',
  'CharacterClass',
  'Group',
  'Assertion',
  'Quantifier',
  'Backreference',
];

const handleDirectly: SimplifierHandler<AST.Alternative[]> = (
  alternatives: AST.Alternative[],
  options,
) => {
  return alternatives
    .map((alternative) => handleAlternative(alternative, options))
    .join('|');
};

const attemptSimplifyOneCharDisjunctions = (
  alternatives: AST.Alternative[],
) => {
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

const attemptSimplifyNestedDisjunctions = (
  alternatives: AST.Alternative[],
  options: SimplifierHandlerOptions,
) => {
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

  return isNested ? handleDirectly(nestedAlternatives, options) : null;
};

const attemptRemoveDuplicates = (
  alternatives: AST.Alternative[],
  options: SimplifierHandlerOptions,
) => {
  const keysSeen = new Set<string>();
  const deduplicatedAlternatives: AST.Alternative[] = [];
  let deduplicated = false;

  alternatives.forEach((alternative) => {
    if (keysSeen.has(alternative.raw) && countGroups(alternative) === 0) {
      deduplicated = true;
      return;
    }

    deduplicatedAlternatives.push(alternative);
  });

  if (!deduplicated) {
    return null;
  }

  return handleDirectly(deduplicatedAlternatives, options);
};

const attemptSideRemoval = (
  alternatives: AST.Alternative[],
  options: SimplifierHandlerOptions,
) => {
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

  if (removedFromStart !== '' || removedFromEnd !== '') {
    return `${removedFromStart}(?:${handleDirectly(
      alternatives,
      options,
    )})${removedFromEnd}`;
  }

  return null;
};

const attemptGrouping = (
  alternatives: AST.Alternative[],
  options: SimplifierHandlerOptions,
) => {
  let groupCount = 0;
  alternatives.forEach((alternative) => {
    groupCount += countGroups(alternative);
  });

  let proccessedAlternatives = alternatives;
  if (groupCount <= 1) {
    const isExclusive =
      computeExclusivityOfAlternatives(alternatives, options.literal) ===
      'Exlusive';

    if (isExclusive) {
      proccessedAlternatives = sortBy(
        alternatives,
        (alternative) => alternative.elements[0]?.raw || '',
      );
    }
  }

  const groups: AST.Alternative[][] = [];
  let previousRaw: string | null = null;
  let couldGroup = false;
  for (let i = 0; i < proccessedAlternatives.length; i++) {
    const currentAlternative = proccessedAlternatives[i];
    const currentRaw = currentAlternative.elements[0]?.raw || '';

    if (previousRaw === currentRaw) {
      groups[groups.length - 1].push(currentAlternative);
      couldGroup = true;
    } else {
      groups.push([currentAlternative]);
    }

    previousRaw = currentRaw;
  }

  if (!couldGroup) {
    return null;
  }

  return groups
    .map((group) => {
      if (group.length === 1) {
        return handleAlternative(group[0], options);
      }

      return `(?:${handleDisjunction(group, options)})`;
    })
    .join('|');
};

export const handleDisjunction: SimplifierHandler<AST.Alternative[]> = (
  alternatives,
  options,
) => {
  if (alternatives.length === 1) {
    return handleAlternative(alternatives[0], options);
  }

  const attemptedSideRemoval = attemptSideRemoval(alternatives, options);
  if (attemptedSideRemoval !== null) {
    return attemptedSideRemoval;
  }

  const attemptedOneCharSimplification = attemptSimplifyOneCharDisjunctions(
    alternatives,
  );
  if (attemptedOneCharSimplification !== null) {
    return attemptedOneCharSimplification;
  }

  const attemptedSimplifyNestedDisjunctions = attemptSimplifyNestedDisjunctions(
    alternatives,
    options,
  );
  if (attemptedSimplifyNestedDisjunctions !== null) {
    return attemptedSimplifyNestedDisjunctions;
  }

  const attemptedRemoveDuplicates = attemptRemoveDuplicates(
    alternatives,
    options,
  );
  if (attemptedRemoveDuplicates !== null) {
    return attemptedRemoveDuplicates;
  }

  const attemptedGrouping = attemptGrouping(alternatives, options);
  if (attemptedGrouping !== null) {
    return attemptedGrouping;
  }

  return handleDirectly(alternatives, options);
};
