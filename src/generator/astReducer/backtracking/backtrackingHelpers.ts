import * as _ from 'lodash/fp';
import { CharASTElement } from '../../astHandler/CharacterSequence';
import { containsCharASTReducer } from '../containsCharASTReducer';
import { BacktrackingInfoAcc } from './backtrackingASTReducer';
import { AST } from 'regexpp';

export const containsInfiniteBacktrackingQuantifiers = (
  childrenAcc: BacktrackingInfoAcc,
): boolean => {
  return _.any((childQuantifierEntry) => {
    childQuantifierEntry[1].type === 'infiniteBacktracking';
  }, childrenAcc.quantifiers);
};

export const findNotContainedBacktrackingChars = (
  childrenAcc: BacktrackingInfoAcc,
  container: AST.Node,
): readonly CharASTElement[] => {
  const limitedBacktrackingCharsOfInnerQuantifiers = childrenAcc.quantifiers.reduce(
    (acc, childQuantifierEntry) => {
      const quantifierInfo = childQuantifierEntry[1];
      if (quantifierInfo.type !== 'limitedBacktracking') {
        return acc;
      }

      return [...acc, ...quantifierInfo.canNotBacktrackAfter];
    },
    [] as readonly CharASTElement[],
  );
  const { notContained } = containsCharASTReducer(
    container,
    limitedBacktrackingCharsOfInnerQuantifiers,
  );

  return notContained;
};
