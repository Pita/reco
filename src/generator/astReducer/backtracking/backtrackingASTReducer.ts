import { AST } from 'regexpp';
import {
  DisjunctionBacktrackingInfoAcc,
  DisjunctionASTElement,
  DisjunctionBacktrackingInfo,
  reduceDisjunction,
} from './backtrackingDisjunctionReducer';
import {
  reduceQuantifier,
  QuantifierBacktrackingInfoAcc,
  QuantifierBacktrackingInfo,
} from './backtrackingQuantifierReducer';

export type BacktrackingInfoAcc = {
  readonly quantifiers: QuantifierBacktrackingInfoAcc;
  readonly disjunctions: DisjunctionBacktrackingInfoAcc;
};

export const emptyBacktrackingInfoAcc: BacktrackingInfoAcc = {
  quantifiers: [],
  disjunctions: [],
};

export function reduceNode(
  acc: BacktrackingInfoAcc,
  node: AST.Node,
  literal: AST.RegExpLiteral,
): BacktrackingInfoAcc {
  switch (node.type) {
    case 'RegExpLiteral':
      return reduceNode(acc, node.pattern, literal);
    case 'Pattern':
    case 'Group':
    case 'CapturingGroup':
      return reduceDisjunction(acc, node, literal);
    case 'Assertion':
      if (node.kind === 'lookahead' || node.kind === 'lookbehind') {
        return node.alternatives.reduce(
          (acc, node) => reduceNode(acc, node, literal),
          acc,
        );
      }
      return acc;
    case 'Alternative':
      return node.elements.reduce(
        (acc, node) => reduceNode(acc, node, literal),
        acc,
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

type BacktrackingInfoMaps = {
  readonly quantifier: ReadonlyMap<AST.Quantifier, QuantifierBacktrackingInfo>;
  readonly disjunctions: ReadonlyMap<
    DisjunctionASTElement,
    DisjunctionBacktrackingInfo
  >;
};

export function backtrackingInfoASTReducer(
  literal: AST.RegExpLiteral,
): BacktrackingInfoMaps {
  const result = reduceNode(emptyBacktrackingInfoAcc, literal, literal);
  return {
    quantifier: new Map(result.quantifiers),
    disjunctions: new Map(result.disjunctions),
  };
}
