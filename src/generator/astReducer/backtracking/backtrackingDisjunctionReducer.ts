import { AST } from 'regexpp';
import * as _ from 'lodash/fp';
import {
  BacktrackingInfoAcc,
  emptyBacktrackingInfoAcc,
  reduceNode,
} from './backtrackingASTReducer';
import { followUpPathASTReducer } from '../followUpPathASTReducer';
import {
  containsInfiniteBacktrackingQuantifiers,
  findNotContainedBacktrackingChars,
} from './backtrackingHelpers';
import { computeExclusivityOfAlternatives } from '../../../dfa-analyzer/CharRangeSequencePossibilities';

type BacktrackingReason =
  | 'has_quantifier_child_with_not_contained_backtracking'
  | 'has_infinite_backtracking_quantifier_child'
  | 'alternatives_are_not_exclusive';

type PossessiveReason =
  | 'is_pattern'
  | 'has_no_followUp'
  | 'no_quantifiers_escape_and_exclusive';

export type DisjunctionBacktrackingInfo =
  | {
      readonly type: 'singleAlternative';
    }
  | {
      readonly type: 'possessive';
      readonly reason: PossessiveReason;
    }
  | {
      readonly type: 'backtracking';
      readonly reason: BacktrackingReason;
    };

export type DisjunctionASTElement =
  | AST.Group
  | AST.CapturingGroup
  | AST.Pattern;

type DisjunctionBacktrackingInfoAccElement = readonly [
  DisjunctionASTElement,
  DisjunctionBacktrackingInfo,
];

export type DisjunctionBacktrackingInfoAcc = readonly DisjunctionBacktrackingInfoAccElement[];

function assembleReturnAcc(
  options: {
    readonly acc: BacktrackingInfoAcc;
    readonly childrenAcc: BacktrackingInfoAcc;
    readonly disjunction: DisjunctionASTElement;
  },
  info: DisjunctionBacktrackingInfo,
): BacktrackingInfoAcc {
  const { acc, childrenAcc, disjunction } = options;
  return {
    disjunctions: [
      ...acc.disjunctions,
      ...childrenAcc.disjunctions,
      [disjunction, info],
    ],
    quantifiers: [...acc.quantifiers, ...childrenAcc.quantifiers],
  };
}

export function reduceDisjunction(
  acc: BacktrackingInfoAcc,
  disjunction: DisjunctionASTElement,
  literal: AST.RegExpLiteral,
): BacktrackingInfoAcc {
  const childrenAcc = disjunction.alternatives.reduce(
    (acc, node) => reduceNode(acc, node, literal),
    emptyBacktrackingInfoAcc,
  );

  // not really a disjunction as there is only one element
  if (disjunction.alternatives.length === 1) {
    assembleReturnAcc(
      { acc, childrenAcc, disjunction },
      {
        type: 'singleAlternative',
      },
    );
  }

  // root disjunction, nothing can follow afterwards, so clearly possessive
  if (disjunction.type === 'Pattern') {
    assembleReturnAcc(
      { acc, childrenAcc, disjunction },
      {
        type: 'possessive',
        reason: 'is_pattern',
      },
    );
  }

  // if there is nothing following this disjunction, its clearly possesive
  const followUpElements = followUpPathASTReducer(disjunction);
  if (followUpElements.length === 0) {
    assembleReturnAcc(
      { acc, childrenAcc, disjunction },
      {
        type: 'possessive',
        reason: 'has_no_followUp',
      },
    );
  }

  // check if there is any child quantifier with infinte backtracking,
  // if so, all optimization attempts are futile and we need to bail to
  // infinite backtracking as well
  const hasInfiniteBacktrackingChild = containsInfiniteBacktrackingQuantifiers(
    childrenAcc,
  );
  if (hasInfiniteBacktrackingChild) {
    return assembleReturnAcc(
      { acc, childrenAcc, disjunction },
      {
        type: 'backtracking',
        reason: 'has_infinite_backtracking_quantifier_child',
      },
    );
  }

  // check if there is any child quantifier with limited backtracking
  // if so, we need to be able to backtrack as well
  const notContainedAstChars = findNotContainedBacktrackingChars(
    childrenAcc,
    disjunction,
  );
  if (notContainedAstChars.length > 0) {
    return assembleReturnAcc(
      { acc, childrenAcc, disjunction },
      {
        type: 'backtracking',
        reason: 'has_quantifier_child_with_not_contained_backtracking',
      },
    );
  }

  const exclusivityOfAlternatives = computeExclusivityOfAlternatives(
    disjunction.alternatives,
    literal,
  );
  if (exclusivityOfAlternatives === 'NotExclusive') {
    return assembleReturnAcc(
      { acc, childrenAcc, disjunction },
      {
        type: 'backtracking',
        reason: 'alternatives_are_not_exclusive',
      },
    );
  } else {
    return assembleReturnAcc(
      { acc, childrenAcc, disjunction },
      {
        type: 'possessive',
        reason: 'no_quantifiers_escape_and_exclusive',
      },
    );
  }
}
