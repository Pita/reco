import { AST } from 'regexpp';
import { CharASTElement } from '../astHandler/CharacterSequence';
import * as _ from 'lodash/fp';

type ContainsCharAcc = {
  readonly contained: readonly CharASTElement[];
  readonly notContained: readonly CharASTElement[];
};

function reduceCharASTNode(
  acc: ContainsCharAcc,
  searchedChar: CharASTElement,
): ContainsCharAcc {
  const isSearched = acc.notContained.includes(searchedChar);

  if (!isSearched) {
    return acc;
  }

  return {
    contained: [...acc.contained, searchedChar],
    notContained: acc.notContained.filter(
      (currentChar) => currentChar !== searchedChar,
    ),
  };
}

function reduceNode(acc: ContainsCharAcc, node: AST.Node): ContainsCharAcc {
  if (acc.notContained.length === 0) {
    return acc;
  }

  switch (node.type) {
    case 'RegExpLiteral':
      return reduceNode(acc, node.pattern);
    case 'Pattern':
    case 'Group':
    case 'CapturingGroup':
      return node.alternatives.reduce(
        (acc, node) => reduceNode(acc, node),
        acc,
      );
    case 'Assertion':
      if (node.kind === 'lookahead' || node.kind === 'lookbehind') {
        return node.alternatives.reduce(
          (acc, node) => reduceNode(acc, node),
          acc,
        );
      }
      return acc;
    case 'Alternative':
      return node.elements.reduce((acc, node) => reduceNode(acc, node), acc);
    case 'Quantifier':
      return reduceNode(acc, node.element);
    case 'CharacterClass':
    case 'CharacterClassRange':
    case 'CharacterSet':
    case 'Character':
      return reduceCharASTNode(acc, node);
    case 'Backreference':
    case 'Flags':
      return acc;
  }
}

export function containsCharASTReducer(
  node: AST.Node,
  chars: readonly CharASTElement[],
): ContainsCharAcc {
  const startAcc: ContainsCharAcc = {
    contained: [],
    notContained: chars,
  };

  return reduceNode(startAcc, node);
}
