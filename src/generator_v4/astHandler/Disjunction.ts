import { AST } from 'regexpp';
import { Collector } from '../Collector';
import {
  FiberTemplateDefinition,
  GroupReference,
} from '../templates/mainTemplate';
import { Flags } from '../generator_v4';
import { handleAlternative } from './Alternative';

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

  const groupsToRestore: GroupReference[] = [];
  mappedAlternatives.forEach((alternative) => {
    alternative.meta.groups.forEach((group) => {
      if (groupsToRestore.indexOf(group) === -1) {
        groupsToRestore.push(group);
      }
    });
  });
  groupsToRestore.sort((a, b) => a.idx - b.idx);

  return collector.addAtom(
    collector.createForkingFiber(currentFiber, mappedAlternatives),
    {
      type: 'disjunction',
      data: { alternatives: mappedAlternatives, groupsToRestore },
      ast: alternatives[0].parent,
    },
  );
};
