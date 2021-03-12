import { AST } from 'regexpp';
import { Flags } from 'regexpp/ast';

interface Anchoring {
  readonly anchorsAtStartOfLine: boolean;
  readonly anchorsAtEndOfLine: boolean;
}

interface AnchoringAcc extends Anchoring {
  readonly hadElementsBefore: boolean;
}

export function anchoringASTReducer(root: AST.Node, flags: Flags): Anchoring {
  if (flags.multiline) {
    return {
      anchorsAtStartOfLine: false,
      anchorsAtEndOfLine: false,
    };
  }

  const startAcc: AnchoringAcc = {
    anchorsAtStartOfLine: false,
    anchorsAtEndOfLine: false,
    hadElementsBefore: false,
  };

  const reducer = (acc: AnchoringAcc, ast: AST.Node): AnchoringAcc => {
    switch (ast.type) {
      case 'Assertion': {
        if (ast.kind === 'end' && acc.hadElementsBefore === false) {
          return {
            ...acc,
            anchorsAtEndOfLine: true,
            hadElementsBefore: true,
          };
        }

        if (ast.kind === 'start') {
          return {
            ...acc,
            anchorsAtStartOfLine: true,
          };
        }

        return acc;
      }
      case 'RegExpLiteral':
        return reducer(acc, ast.pattern);
      case 'Pattern':
      case 'Group':
      case 'CapturingGroup':
        return ast.alternatives
          .map((alternative) => reducer(acc, alternative))
          .reduce(
            (acc, alternativeAnchoring) => {
              return {
                hadElementsBefore: true,
                anchorsAtStartOfLine:
                  acc.anchorsAtStartOfLine &&
                  alternativeAnchoring.anchorsAtStartOfLine,
                anchorsAtEndOfLine:
                  acc.anchorsAtEndOfLine &&
                  alternativeAnchoring.anchorsAtEndOfLine,
              };
            },
            {
              anchorsAtStartOfLine: true,
              anchorsAtEndOfLine: true,
              hadElementsBefore: false,
            },
          );
      case 'Alternative':
        return ast.elements.reduceRight((acc, element) => {
          return reducer(acc, element);
        }, startAcc);
      case 'Quantifier':
      case 'Character':
      case 'CharacterSet':
      case 'CharacterClass':
      case 'CharacterClassRange':
      case 'Backreference':
        return {
          ...acc,
          hadElementsBefore: true,
          anchorsAtStartOfLine: false,
        };
      case 'Flags':
        return acc;
    }
  };

  const finalAcc = reducer(startAcc, root);
  return {
    anchorsAtStartOfLine: finalAcc.anchorsAtStartOfLine,
    anchorsAtEndOfLine: finalAcc.anchorsAtEndOfLine,
  };
}
