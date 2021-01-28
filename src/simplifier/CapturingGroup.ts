import { AST } from 'regexpp';
import { handleDisjunction } from './Disjunction';
import { removeFromSide } from './removeFromSide';
import { SimplifierHandler } from './types';

const ELEMENTS_TO_BE_REMOVED = ['Assertion'];

export const handleCapturingGroup: SimplifierHandler<AST.CapturingGroup> = (
  group,
  options,
) => {
  if (group.name) {
    throw new Error('No support for named groups yet');
  }

  const removedFromStart = removeFromSide(
    group.alternatives,
    'start',
    ELEMENTS_TO_BE_REMOVED,
  );
  const removedFromEnd = removeFromSide(
    group.alternatives,
    'end',
    ELEMENTS_TO_BE_REMOVED,
  );

  const alternativesString = handleDisjunction(group.alternatives, options);

  if (removedFromStart !== '' || removedFromEnd !== '') {
    return `${removedFromStart}(${alternativesString})${removedFromEnd}`;
  } else {
    return `(${alternativesString})`;
  }
};
