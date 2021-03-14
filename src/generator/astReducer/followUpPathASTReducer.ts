import { AST } from 'regexpp';
import { ASTPath } from '../../dfa-analyzer/types';

function reduceRoot(
  acc: ASTPath,
  root: AST.Pattern | AST.LookaroundAssertion | AST.RegExpLiteral,
) {
  return acc;
}

function reduceQuantifier(acc: ASTPath, quantifier: AST.Quantifier): ASTPath {
  const decrementedQuantifier: AST.Quantifier = {
    ...quantifier,
    min: Math.max(quantifier.min - 1, 0),
    max: quantifier.max - 1,
  };
  const newAcc = [...acc, decrementedQuantifier];

  return reduceAlternative(newAcc, quantifier.parent, quantifier);
}

function reduceAlternative(
  acc: ASTPath,
  alternative: AST.Alternative,
  child: AST.Alternative['elements'][number],
): ASTPath {
  const indexOfChild = alternative.elements.indexOf(child);
  const remainingChildren = alternative.elements.slice(indexOfChild + 1);
  const newAcc = [...acc, ...remainingChildren];

  switch (alternative.parent.type) {
    case 'Group':
    case 'CapturingGroup':
      return reduceGroup(newAcc, alternative.parent);
    case 'Assertion':
    case 'Pattern':
      return reduceRoot(newAcc, alternative.parent);
  }
}

function reduceGroup(
  acc: ASTPath,
  group: AST.Group | AST.CapturingGroup,
): ASTPath {
  switch (group.parent.type) {
    case 'Alternative':
      return reduceAlternative(acc, group.parent, group);
    case 'Quantifier':
      return reduceQuantifier(acc, group.parent);
  }
}

export function followUpPathASTReducer(origin: AST.Node): ASTPath {
  const originParent = origin.parent;
  if (originParent === null) {
    return [];
  }

  switch (originParent.type) {
    case 'RegExpLiteral':
    case 'Pattern':
    case 'Assertion':
      return reduceRoot([], originParent);
    case 'Group':
    case 'CapturingGroup':
      return reduceGroup([], originParent);
    case 'Alternative':
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return reduceAlternative([], originParent, origin as any);
    case 'Quantifier':
      return reduceQuantifier([], originParent);
    case 'CharacterClass':
    case 'CharacterClassRange':
      throw new Error("Can't reduce sub char ast elements");
  }
}
