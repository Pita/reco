import { AST } from 'regexpp';
import { handleDisjunction } from './Disjunction';
import { SimplifierHandler } from './types';

export const handleCapturingGroup: SimplifierHandler<AST.CapturingGroup> = (
  group,
  options,
) => {
  const disjunction = handleDisjunction(group.alternatives, options);
  if (group.name) {
    throw new Error('No support for named groups yet');
  }
  return `(${disjunction})`;
};
