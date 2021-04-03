import { AST } from 'regexpp';
import { CharASTElement } from '../../astHandler/CharacterSequence';
import * as _ from 'lodash/fp';
import { dfaAnalyzeElement } from '../../../dfa-analyzer/dfaAnalyze';
import { CharRangeSequencePossibilities } from '../../../dfa-analyzer/CharRangeSequencePossibilities';
import { followUpPathASTReducer } from '../followUpPathASTReducer';
import {
  BacktrackingInfoAcc,
  emptyBacktrackingInfoAcc,
  reduceNode,
} from './backtrackingASTReducer';
import {
  containsInfiniteBacktrackingQuantifiers,
  findNotContainedBacktrackingChars,
} from './backtrackingHelpers';

type QuantifierInfiniteBacktrackingReason =
  | 'child_has_infinite_backtracking'
  | 'handler_not_analyzable'
  | 'followUp_not_analyzable'
  | 'not_exclusive_in_reduced_analysis';

export type QuantifierBacktrackingInfo =
  | {
      readonly type: 'possessive';
    }
  | {
      readonly type: 'limitedBacktracking';
      readonly canNotBacktrackAfter: readonly CharASTElement[];
    }
  | {
      readonly type: 'infiniteBacktracking';
      readonly reason: QuantifierInfiniteBacktrackingReason;
    };

type QuantifierBacktrackingInfoAccElement = readonly [
  AST.Quantifier,
  QuantifierBacktrackingInfo,
];

export type QuantifierBacktrackingInfoAcc = readonly QuantifierBacktrackingInfoAccElement[];

function getQuantifierHandlerPossibilities(
  quantifier: AST.Quantifier,
  literal: AST.RegExpLiteral,
): {
  readonly isComplete: boolean;
  readonly handlerPossibilities: CharRangeSequencePossibilities | null;
} {
  const handlerCompletePossibilities = dfaAnalyzeElement(
    [quantifier.element],
    literal,
    Infinity,
  );

  if (handlerCompletePossibilities !== null) {
    return {
      handlerPossibilities: handlerCompletePossibilities,
      isComplete: true,
    };
  }

  const firstThreeCharPossibilities = dfaAnalyzeElement(
    [quantifier.element],
    literal,
    3,
  );

  return {
    handlerPossibilities: firstThreeCharPossibilities,
    isComplete: false,
  };
}

function assembleReturnAcc(
  options: {
    readonly acc: BacktrackingInfoAcc;
    readonly childrenAcc: BacktrackingInfoAcc;
    readonly quantifier: AST.Quantifier;
  },
  info: QuantifierBacktrackingInfo,
): BacktrackingInfoAcc {
  const { acc, childrenAcc, quantifier } = options;
  return {
    disjunctions: [...acc.disjunctions, ...childrenAcc.disjunctions],
    quantifiers: [
      ...acc.quantifiers,
      ...childrenAcc.quantifiers,
      [quantifier, info],
    ],
  };
}

// TODO: refactor with reducing exclusivity detection
export function reduceQuantifier(
  acc: BacktrackingInfoAcc,
  quantifier: AST.Quantifier,
  literal: AST.RegExpLiteral,
): BacktrackingInfoAcc {
  const childrenAcc = reduceNode(
    emptyBacktrackingInfoAcc,
    quantifier.element,
    literal,
  );

  // check if there is any child quantifier with infinte backtracking,
  // if so, all optimization attempts are futile and we need to bail to
  // infinite backtracking as well
  const hasInfiniteBacktrackingChild = containsInfiniteBacktrackingQuantifiers(
    childrenAcc,
  );
  if (hasInfiniteBacktrackingChild) {
    return assembleReturnAcc(
      { acc, childrenAcc, quantifier },
      {
        type: 'infiniteBacktracking',
        reason: 'child_has_infinite_backtracking',
      },
    );
  }

  // check if there is any child quantifier with limited backtracking
  // if so, we need to carry over the elements that reach to outside of
  // ourselves
  const carryOverCanNotBacktrackAfter = findNotContainedBacktrackingChars(
    childrenAcc,
    quantifier.element,
  );

  // try to analyze the possiblities of the handler, this might fail as the
  // possibilites of the handler might be too complex to be analyzed.
  // if so, we need to bail to infinite backtracking
  const {
    isComplete,
    handlerPossibilities,
  } = getQuantifierHandlerPossibilities(quantifier, literal);
  if (handlerPossibilities === null) {
    return assembleReturnAcc(
      { acc, childrenAcc, quantifier },
      { type: 'infiniteBacktracking', reason: 'handler_not_analyzable' },
    );
  }

  // try to analyze the followupPath, this might fail as well and we need to bail
  const followUpPath = followUpPathASTReducer(quantifier);
  const followupPossibilties = dfaAnalyzeElement(
    followUpPath,
    literal,
    handlerPossibilities.maxLengthOfPossibilities(),
  );
  if (followupPossibilties === null) {
    return assembleReturnAcc(
      { acc, childrenAcc, quantifier },
      { type: 'infiniteBacktracking', reason: 'followUp_not_analyzable' },
    );
  }

  // if there is no carry over from a child quantifier, this quantifier could be
  // exclusive and with that we can mark it as possessive, best case!
  if (carryOverCanNotBacktrackAfter.length === 0) {
    const exclusivityState = handlerPossibilities.isExclusive(
      followupPossibilties,
    );
    if (
      exclusivityState === 'Exclusive' ||
      exclusivityState === 'OrderExclusive'
    ) {
      return assembleReturnAcc(
        { acc, childrenAcc, quantifier },
        { type: 'possessive' },
      );
    }
  }

  // the exclusive check was not performed completly because of strong complexity
  // it failed and we need to bail to infinite backtracking
  if (!isComplete) {
    return assembleReturnAcc(
      { acc, childrenAcc, quantifier },
      {
        type: 'infiniteBacktracking',
        reason: 'not_exclusive_in_reduced_analysis',
      },
    );
  }

  // No we can say that there will be backtracking, but it can be
  // elimiated after a certain char element
  const canNotBacktrackAfter = followupPossibilties
    .get(handlerPossibilities.maxLengthOfPossibilities())
    .map((char) => char.astElement)
    .concat(carryOverCanNotBacktrackAfter);

  return assembleReturnAcc(
    { acc, childrenAcc, quantifier },
    { type: 'limitedBacktracking', canNotBacktrackAfter },
  );
}

export type QuantifierBacktrackingInfoMap = ReadonlyMap<
  AST.Quantifier,
  QuantifierBacktrackingInfo
>;
