import { AST } from 'regexpp';
import { handleDisjunction } from './Disjunction';
import { SimplifierHandler } from './types';

export const handleGroup: SimplifierHandler<AST.Group> = (group, options) => {
  const disjunction = handleDisjunction(group.alternatives, options);

  const canBeResolved =
    group.parent.type === 'Alternative' && group.alternatives.length === 1;
  return canBeResolved ? disjunction : `(?:${disjunction})`;
};
