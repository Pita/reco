import { AST } from 'regexpp';
import { handleAlternative } from './Alternative';
import { removeFromSide } from './removeFromSide';
import { SimplifierHandler, SimplifierHandlerOptions } from './types';
import sortBy from 'lodash/sortBy';
import { computeExclusivityOfAlternatives } from '../dfa-analyzer/CharRangeSequencePossibilities';
import { countGroups } from './countGroups';
import cloneDeep from 'lodash/cloneDeep';

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

const canRemove = (element: AST.Element) => {
  return (
    ELEMENTS_TO_BE_REMOVED.includes(element.type) && countGroups(element) === 0
  );
};

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
    .map((alternative) => {
      const raw = alternative.elements[0].raw;
      return raw === '-' ? '\\-' : raw;
    })
    .join('');
  return `[${charsJoined}]`;
};

const attemptInlineNestedDisjunctions = (
  alternatives: AST.Alternative[],
  options: SimplifierHandlerOptions,
) => {
  const inlinedAlternatives: AST.Alternative[] = [];
  let couldInline = false;

  alternatives.forEach((alternative) => {
    if (
      alternative.elements.length === 1 &&
      alternative.elements[0].type === 'Group'
    ) {
      couldInline = true;
      alternative.elements[0].alternatives.forEach((subAlternative) =>
        inlinedAlternatives.push(subAlternative),
      );
    } else {
      inlinedAlternatives.push(alternative);
    }
  });

  return couldInline ? handleDirectly(inlinedAlternatives, options) : null;
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
    keysSeen.add(alternative.raw);
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
  const removedFromStart = removeFromSide(alternatives, 'start', canRemove);
  const removedFromEnd = removeFromSide(alternatives, 'end', canRemove);

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
    const currentFirstElement = currentAlternative.elements[0];
    const currentRaw = currentFirstElement?.raw || '';

    if (
      previousRaw === currentRaw &&
      currentFirstElement.type !== 'CapturingGroup'
    ) {
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

  const attemptedRemoveDuplicates = attemptRemoveDuplicates(
    cloneDeep(alternatives),
    options,
  );
  if (attemptedRemoveDuplicates !== null) {
    return attemptedRemoveDuplicates;
  }

  const attemptedSideRemoval = attemptSideRemoval(
    cloneDeep(alternatives),
    options,
  );
  if (attemptedSideRemoval !== null) {
    return attemptedSideRemoval;
  }

  const attemptedOneCharSimplification = attemptSimplifyOneCharDisjunctions(
    cloneDeep(alternatives),
  );
  if (attemptedOneCharSimplification !== null) {
    return attemptedOneCharSimplification;
  }

  const attemptedInlineNestedDisjunctions = attemptInlineNestedDisjunctions(
    cloneDeep(alternatives),
    options,
  );
  if (attemptedInlineNestedDisjunctions !== null) {
    return attemptedInlineNestedDisjunctions;
  }

  const attemptedGrouping = attemptGrouping(cloneDeep(alternatives), options);
  if (attemptedGrouping !== null) {
    return attemptedGrouping;
  }

  return handleDirectly(cloneDeep(alternatives), options);
};
