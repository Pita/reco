import { AST } from 'regexpp';
import { countGroups } from './countGroups';
import { handleDisjunction } from './Disjunction';
import { removeFromSide } from './removeFromSide';
import { SimplifierHandler, SimplifierHandlerOptions } from './types';

const canRemove = (element: AST.Element) => {
  return element.type === 'Assertion' && countGroups(element) === 0;
};

export const attemptPullingOutAssertions = (
  group: AST.CapturingGroup,
  options: SimplifierHandlerOptions,
) => {
  const removedFromStart = removeFromSide(
    group.alternatives,
    'start',
    canRemove,
  );
  const removedFromEnd = removeFromSide(group.alternatives, 'end', canRemove);

  if (removedFromStart !== '' || removedFromEnd !== '') {
    const alternativesString = handleDisjunction(group.alternatives, options);

    return `${removedFromStart}(${alternativesString})${removedFromEnd}`;
  } else {
    return null;
  }
};

export const attemptRemovingCapturingGroups = (
  group: AST.CapturingGroup,
  options: SimplifierHandlerOptions,
) => {
  if (!options.removeCapturingGroups) {
    return null;
  }

  return `(?:${handleDisjunction(group.alternatives, options)})`;
};

export const handleCapturingGroup: SimplifierHandler<AST.CapturingGroup> = (
  group,
  options,
) => {
  if (group.name) {
    throw new Error('No support for named groups yet');
  }

  const attemptedPullingOutAssertions = attemptPullingOutAssertions(
    group,
    options,
  );
  if (attemptedPullingOutAssertions !== null) {
    return attemptedPullingOutAssertions;
  }

  const attemptedRemovingCapturingGroups = attemptRemovingCapturingGroups(
    group,
    options,
  );
  if (attemptedRemovingCapturingGroups !== null) {
    return attemptedRemovingCapturingGroups;
  }

  return `(${handleDisjunction(group.alternatives, options)})`;
};
