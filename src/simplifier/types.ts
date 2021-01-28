import { RegExpLiteral } from 'regexpp/ast';

export type SimplifierHandlerOptions = {
  firstPass: boolean;
  literal: RegExpLiteral;
};

export type SimplifierHandler<T> = (
  element: T,
  options: SimplifierHandlerOptions,
) => string;
