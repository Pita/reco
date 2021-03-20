import { AST } from 'regexpp';
import { CharASTElement } from '../astHandler/CharacterSequence';
import * as _ from 'lodash/fp';
import { dfaAnalyzeElement } from '../../dfa-analyzer/dfaAnalyze';
import { CharRangeSequencePossibilities } from '../../dfa-analyzer/CharRangeSequencePossibilities';
import { followUpPathASTReducer } from './followUpPathASTReducer';
import { containsCharASTReducer } from './containsCharASTReducer';

type InfiniteBacktrackingReason =
  | 'child_has_infinite_backtracking'
  | 'handler_not_analyzable'
  | 'followUp_not_analyzable'
  | 'not_exclusive_in_reduced_analysis';

type QuantifierBacktrackingInfo =
  | {
      readonly type: 'possessive';
    }
  | {
      readonly type: 'limitedBacktracking';
      readonly canNotBacktrackAfter: readonly CharASTElement[];
    }
  | {
      readonly type: 'infiniteBacktracking';
      readonly reason: InfiniteBacktrackingReason;
    };

type QuantifierBacktrackingInfoAccElement = readonly [
  AST.Quantifier,
  QuantifierBacktrackingInfo,
];

type QuantifierBacktrackingInfoAcc = readonly QuantifierBacktrackingInfoAccElement[];

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
    readonly acc: QuantifierBacktrackingInfoAcc;
    readonly childQuantifiers: QuantifierBacktrackingInfoAcc;
    readonly quantifier: AST.Quantifier;
  },
  info: QuantifierBacktrackingInfo,
): QuantifierBacktrackingInfoAcc {
  const { acc, childQuantifiers, quantifier } = options;
  return [...acc, ...childQuantifiers, [quantifier, info]];
}

// TODO: refactor with reducing exclusivity detection
function reduceQuantifier(
  acc: QuantifierBacktrackingInfoAcc,
  quantifier: AST.Quantifier,
  literal: AST.RegExpLiteral,
): QuantifierBacktrackingInfoAcc {
  const childQuantifiers = reduceNode([], quantifier.element, literal);

  // check if there is any child quantifier with infinte backtracking,
  // if so, all optimization attempts are futile and we need to bail to
  // infinite backtracking as well
  const hasInfiniteBacktrackingChild = _.any((childQuantifierEntry) => {
    childQuantifierEntry[1].type === 'infiniteBacktracking';
  }, childQuantifiers);
  if (hasInfiniteBacktrackingChild) {
    return assembleReturnAcc(
      { acc, childQuantifiers, quantifier },
      {
        type: 'infiniteBacktracking',
        reason: 'child_has_infinite_backtracking',
      },
    );
  }

  // check if there is any child quantifier with limited backtracking
  // if so, we need to carry over the elements that reach to outside of
  // ourselves
  const limitedBacktrackingCharsOfInnerQuantifiers = _.reduce(
    (acc, childQuantifierEntry) => {
      const quantifierInfo = childQuantifierEntry[1];
      if (quantifierInfo.type !== 'limitedBacktracking') {
        return acc;
      }

      return [...acc, ...quantifierInfo.canNotBacktrackAfter];
    },
    [] as readonly CharASTElement[],
    childQuantifiers,
  );
  const {
    notContained: carryOverCanNotBacktrackAfter,
  } = containsCharASTReducer(
    quantifier.element,
    limitedBacktrackingCharsOfInnerQuantifiers,
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
      { acc, childQuantifiers, quantifier },
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
      { acc, childQuantifiers, quantifier },
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
        { acc, childQuantifiers, quantifier },
        { type: 'possessive' },
      );
    }
  }

  // the exclusive check was not performed completly because of strong complexity
  // it failed and we need to bail to infinite backtracking
  if (!isComplete) {
    return assembleReturnAcc(
      { acc, childQuantifiers, quantifier },
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
    { acc, childQuantifiers, quantifier },
    { type: 'limitedBacktracking', canNotBacktrackAfter },
  );
}

function reduceNode(
  acc: QuantifierBacktrackingInfoAcc,
  node: AST.Node,
  literal: AST.RegExpLiteral,
): QuantifierBacktrackingInfoAcc {
  switch (node.type) {
    case 'RegExpLiteral':
      return reduceNode(acc, node.pattern, literal);
    case 'Pattern':
    case 'Group':
    case 'CapturingGroup':
      return _.reduce(
        (acc, node) => reduceNode(acc, node, literal),
        acc,
        node.alternatives,
      );
    case 'Assertion':
      if (node.kind === 'lookahead' || node.kind === 'lookbehind') {
        return _.reduce(
          (acc, node) => reduceNode(acc, node, literal),
          acc,
          node.alternatives,
        );
      }
      return acc;
    case 'Alternative':
      return _.reduce(
        (acc, node) => reduceNode(acc, node, literal),
        acc,
        node.elements,
      );
    case 'CharacterClass':
    case 'CharacterClassRange':
    case 'CharacterSet':
    case 'Character':
    case 'Flags':
      return acc;
    case 'Backreference':
      return reduceNode(acc, node.resolved, literal);
    case 'Quantifier':
      return reduceQuantifier(acc, node, literal);
  }
}

export function quantifierBacktrackingInfoASTReducer(
  literal: AST.RegExpLiteral,
): ReadonlyMap<AST.Quantifier, QuantifierBacktrackingInfo> {
  return new Map(reduceNode([], literal, literal));
}
