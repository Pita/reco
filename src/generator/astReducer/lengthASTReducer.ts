import { AST } from 'regexpp';
import { Flags } from 'regexpp/ast';
import { utf16UnitsCountToMinAndMax } from '../astHandlerLegacy/Character';
import { astToCharRange } from '../astToCharRange';

interface MinAndMaxCharLength {
  readonly minCharLength: number;
  readonly maxCharLength: number;
}

export function lengthASTReducer(
  root: AST.Node,
  flags: Flags,
): MinAndMaxCharLength {
  const startAcc: MinAndMaxCharLength = {
    minCharLength: 0,
    maxCharLength: 0,
  };

  const reducer = (
    acc: MinAndMaxCharLength,
    ast: AST.Node,
  ): MinAndMaxCharLength => {
    switch (ast.type) {
      case 'RegExpLiteral':
        return reducer(acc, ast.pattern);
      case 'Pattern':
      case 'Group':
      case 'CapturingGroup':
        return ast.alternatives
          .map((alternative) => reducer(startAcc, alternative))
          .reduce((acc, alternativeMinMax) => {
            return {
              minCharLength: Math.min(
                acc.minCharLength,
                alternativeMinMax.minCharLength,
              ),
              maxCharLength: Math.max(
                acc.maxCharLength,
                alternativeMinMax.maxCharLength,
              ),
            };
          });
      case 'Alternative': {
        return ast.elements.reduce((acc, element) => {
          const lengthElement = reducer(startAcc, element);
          return {
            minCharLength: acc.minCharLength + lengthElement.minCharLength,
            maxCharLength: acc.maxCharLength + lengthElement.maxCharLength,
          };
        }, acc);
      }
      case 'Quantifier': {
        const lengthElement = reducer(startAcc, ast);
        return {
          minCharLength:
            acc.minCharLength + lengthElement.minCharLength * ast.min,
          maxCharLength:
            acc.maxCharLength + lengthElement.maxCharLength * ast.max,
        };
      }
      case 'Character':
      case 'CharacterSet':
      case 'CharacterClass': {
        const charRange = astToCharRange(ast, flags);
        const unitsCount = charRange.getUTF16UnitsCount(flags);
        const { min, max } = utf16UnitsCountToMinAndMax(unitsCount);
        return {
          minCharLength: acc.minCharLength + min,
          maxCharLength: acc.maxCharLength + max,
        };
      }
      case 'CharacterClassRange':
        throw new Error('Should not be reachable');
      case 'Assertion':
      case 'Flags':
        return acc;
      case 'Backreference':
        return reducer(acc, ast.resolved);
    }
  };

  return reducer(startAcc, root);
}
