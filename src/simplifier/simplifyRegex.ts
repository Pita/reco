import { RegExpLiteral } from 'regexpp/ast';
import { handleDisjunction } from './Disjunction';

export const simplifyRegex = (literal: RegExpLiteral) => {
  const disjunction = handleDisjunction(literal.pattern.alternatives, {
    literal,
  });

  return `/${disjunction}/${literal.flags.raw}`;
};
