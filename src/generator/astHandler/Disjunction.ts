import { AST } from 'regexpp';
import { Collector, mergeGroupsOfFibers } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import { handleAlternative } from './Alternative';
import { CharRange } from '../CharRange';
import { BacktrackingError } from '../BacktrackingException';

export const handleDisjunction = (
  alternatives: AST.Alternative[],
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
): FiberTemplateDefinition => {
  if (alternatives.length === 1) {
    return handleAlternative(
      alternatives[0],
      collector,
      currentFiber,
      flags,
      literal,
    );
  }

  if (flags.INTERNAL_no_backtracking) {
    throw new BacktrackingError();
  }

  const mappedAlternatives = alternatives.map((alternative) =>
    handleAlternative(
      alternative,
      collector,
      collector.createConnectedFiber(currentFiber),
      flags,
      literal,
    ),
  );

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

  const anchorsAtStartOfLine = mappedAlternatives.every(
    (mappedAlternative) => mappedAlternative.meta.anchorsAtStartOfLine,
  );

  const anchorsAtEndOfLine = mappedAlternatives.every(
    (mappedAlternative) => mappedAlternative.meta.anchorsAtEndOfLine,
  );

  return collector.addAtom(
    collector.createForkingFiber(
      currentFiber,
      groupsToRestore,
      anchorsAtStartOfLine,
      anchorsAtEndOfLine,
    ),
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
