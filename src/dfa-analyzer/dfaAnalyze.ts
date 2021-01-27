import { AST } from 'regexpp';
import { handleAlternative } from './Alternative';
import {
  CharRangeSequence,
  OverlyComplexBranchingError,
} from './CharRangeSequence';
import { CharRangeSequencePossibilities } from './CharRangeSequencePossibilities';
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
    const possibilities = handleAlternative(element, {
      cache,
      literal,
      currentLength: 0,
      maxLength,
      path: [],
      currentSequences: [new CharRangeSequence()],
    });
    return new CharRangeSequencePossibilities(possibilities);
  } catch (e) {
    if (e instanceof OverlyComplexBranchingError) {
      return null;
    }

    throw e;
  }
};
