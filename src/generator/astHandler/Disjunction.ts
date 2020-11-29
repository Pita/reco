import { AST } from 'regexpp';
import { Collector, mergeGroupsOfFibers } from '../Collector';
import {
  FiberTemplateDefinition,
  GroupReference,
} from '../templates/mainTemplate';
import { Flags } from '../generator';
import { handleAlternative } from './Alternative';
import { CharRange } from '../CharRange';

export const handleDisjunction = (
  alternatives: AST.Alternative[],
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  if (alternatives.length === 1) {
    return handleAlternative(alternatives[0], collector, currentFiber, flags);
  }

  const mappedAlternatives = alternatives.map((alternative) =>
    handleAlternative(
      alternative,
      collector,
      collector.createConnectedFiber(currentFiber),
      flags,
    ),
  );

  const groupsToRestore = mergeGroupsOfFibers(mappedAlternatives);
  const firstCharRangesCombined = mappedAlternatives.reduce(
    (charRange, alternative) =>
      charRange.union(alternative.meta.firstCharRange),
    CharRange.createEmptyRange(),
  );

  return collector.addAtom(
    collector.createForkingFiber(currentFiber, groupsToRestore),
    {
      type: 'disjunction',
      data: { alternatives: mappedAlternatives, groupsToRestore },
      ast: alternatives[0].parent,
    },
    firstCharRangesCombined,
  );
};
