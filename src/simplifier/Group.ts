import { AST } from 'regexpp';
import { handleDisjunction } from './Disjunction';
import { SimplifierHandler } from './types';

export const handleGroup: SimplifierHandler<AST.Group> = (group, options) => {
  const disjunction = handleDisjunction(group.alternatives, options);
  return group.parent.type === 'Alternative'
    ? disjunction
    : `(?:${disjunction})`;
};
