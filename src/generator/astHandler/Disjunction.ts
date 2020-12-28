import { AST } from 'regexpp';
import {
  Collector,
  mergeGroupsOfFibers,
  TriedToForkInlinedFiberError,
} from '../Collector';
import {
  FiberTemplateDefinition,
  GroupReference,
} from '../templates/mainTemplate';
import { Flags } from '../generator';
import { handleAlternative } from './Alternative';
import { CharRange } from '../CharRange';

const deriveMetaDataFromMappedAlternatives = (
  mappedAlternatives: FiberTemplateDefinition[],
) => {
  const groupsToRestore = mergeGroupsOfFibers(mappedAlternatives);
  const combinedCharRange = mappedAlternatives.reduce(
    (charRange, alternative) =>
      charRange.union(alternative.meta.firstCharRange),
    CharRange.createEmptyRange(),
  );
  let minLength = Infinity;
  let maxLength = -Infinity;
  mappedAlternatives.forEach((alternative) => {
    minLength = Math.min(minLength, alternative.meta.minCharLength);
    maxLength = Math.max(maxLength, alternative.meta.maxCharLength);
  });

  return { groupsToRestore, combinedCharRange, minLength, maxLength };
};

const handleForkingDisjunction = (
  alternatives: AST.Alternative[],
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  const mappedAlternatives = alternatives.map((alternative) =>
    handleAlternative(
      alternative,
      collector,
      collector.createConnectedFiber(currentFiber),
      flags,
    ),
  );

  const {
    groupsToRestore,
    combinedCharRange,
    minLength,
    maxLength,
  } = deriveMetaDataFromMappedAlternatives(mappedAlternatives);

  return collector.addAtom(
    collector.createForkingFiber(currentFiber, groupsToRestore),
    {
      type: 'disjunction',
      data: { alternatives: mappedAlternatives, groupsToRestore },
      ast: alternatives[0].parent,
    },
    combinedCharRange,
    minLength,
    maxLength,
  );
};

const attemptInlineDisjunction = (
  alternatives: AST.Alternative[],
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  const mappedAlternatives = alternatives.map((alternative) =>
    handleAlternative(
      alternative,
      collector,
      collector.createInlineFiber(currentFiber),
      flags,
    ),
  );

  const {
    groupsToRestore,
    combinedCharRange,
    minLength,
    maxLength,
  } = deriveMetaDataFromMappedAlternatives(mappedAlternatives);

  return collector.addAtom(
    currentFiber,
    {
      type: 'inlineDisjunction',
      data: { alternatives: mappedAlternatives, groupsToRestore },
      ast: alternatives[0].parent,
    },
    combinedCharRange,
    minLength,
    maxLength,
  );
};

export const handleDisjunction = (
  alternatives: AST.Alternative[],
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  if (alternatives.length === 1) {
    return handleAlternative(alternatives[0], collector, currentFiber, flags);
  }

  try {
    return attemptInlineDisjunction(
      alternatives,
      collector,
      currentFiber,
      flags,
    );
  } catch (e) {
    if (!(e instanceof TriedToForkInlinedFiberError)) {
      throw e;
    }

    return handleForkingDisjunction(
      alternatives,
      collector,
      currentFiber,
      flags,
    );
  }
};
