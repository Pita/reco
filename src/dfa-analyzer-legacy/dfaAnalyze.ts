import { AST } from 'regexpp';
import { handleAlternative } from './Alternative';
import { DFACache } from './types';

export const dfaAnalyzeAlternative = (
  element: AST.Alternative,
  literal: AST.RegExpLiteral,
  maxLength: number,
) => {
  const cache: DFACache = {
    astToCharRange: new Map(),
  };

  return handleAlternative(element, {
    cache,
    literal,
    currentLength: 0,
    maxLength,
    path: [],
  });
};
