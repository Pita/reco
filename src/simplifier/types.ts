import { RegExpLiteral } from 'regexpp/ast';

export type SimplifierHandlerOptions = {
  readonly firstPass: boolean;
  readonly literal: RegExpLiteral;
  readonly removeCapturingGroups?: boolean;
};

export type SimplifierHandler<T> = (
  element: T,
  options: SimplifierHandlerOptions,
) => string;
