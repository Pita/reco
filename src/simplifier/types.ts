import { AST } from 'regexpp';

export type SimplifierHandler<T> = (
  element: T,
  options: {
    literal: AST.RegExpLiteral;
  },
) => string;
