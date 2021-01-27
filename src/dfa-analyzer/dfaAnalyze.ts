import { AST } from 'regexpp';
import {
  CharRangeSequence,
  OverlyComplexBranchingError,
} from './CharRangeSequence';
import { CharRangeSequencePossibilities } from './CharRangeSequencePossibilities';
import { handleElement } from './Element';
import { ASTPath, DFACache } from './types';

export const dfaAnalyzeElement = (
  path: ASTPath,
  literal: AST.RegExpLiteral,
  maxLength: number,
) => {
  const cache: DFACache = {
    astToCharRange: new Map(),
  };

  try {
    const possibilities = handleElement(path[0], {
      cache,
      literal,
      currentLength: 0,
      maxLength,
      path: path.slice(1),
      currentSequences: [new CharRangeSequence()],
    });
    return new CharRangeSequencePossibilities(possibilities);
  } catch (e) {
    if (e instanceof OverlyComplexBranchingError || e instanceof RangeError) {
      return null;
    }

    throw e;
  }
};
