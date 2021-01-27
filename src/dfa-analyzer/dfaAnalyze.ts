import { AST } from 'regexpp';
import { handleAlternative } from './Alternative';
import {
  CharRangeSequence,
  OverlyComplexBranchingError,
} from './CharRangeSequence';
import { DFACache } from './types';

export const dfaAnalyzeAlternative = (
  element: AST.Alternative,
  literal: AST.RegExpLiteral,
  maxLength: number,
) => {
  const cache: DFACache = {
    astToCharRange: new Map(),
  };

  try {
    return handleAlternative(element, {
      cache,
      literal,
      currentLength: 0,
      maxLength,
      path: [],
      currentSequences: [new CharRangeSequence()],
    });
  } catch (e) {
    if (e instanceof OverlyComplexBranchingError) {
      return null;
    }

    throw e;
  }
};
