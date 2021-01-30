import { RegExpLiteral } from 'regexpp/ast';

export type SimplifierHandlerOptions = {
  firstPass: boolean;
  literal: RegExpLiteral;
  removeCapturingGroups?: boolean;
};

export type SimplifierHandler<T> = (
  element: T,
  options: SimplifierHandlerOptions,
) => string;
