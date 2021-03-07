import { ASTPath } from '../dfa-analyzer/types';
import cloneDeep from 'lodash/cloneDeep';
import { AST, visitRegExpAST } from 'regexpp';
import { CharASTElement } from './astHandler/CharacterSequence';
import { BacktrackingError } from './BacktrackingException';
import { handleElement } from './astHandler/Element';
import { Collector } from './Collector';
import { FiberTemplateDefinition } from './templates/mainTemplate';
import { Flags } from './generator';
import { handleAlternative } from './astHandler/Alternative';

function markChar(char: CharASTElement) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (markChar as any)._inside_ = true;
}

// should probably be: contains outside element
export function isInsideElement(char: CharASTElement) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (char as any)._inside_ === true;
}

export function hasInsideOutBacktracking(
  inside: AST.QuantifiableElement | AST.Alternative,
  outsidePath: ASTPath,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
) {
  const fakeOutsideFiber: FiberTemplateDefinition = cloneDeep(currentFiber);
  fakeOutsideFiber.meta.path = outsidePath;
  const fakeCollector = collector.fakeCollector();
  const insideClone = cloneDeep(inside);

  visitRegExpAST(insideClone, {
    onCharacterEnter: markChar,
    onCharacterClassEnter: markChar,
    onCharacterSetEnter: markChar,
  });

  try {
    //TODO: make disjunction & quantifier allergic to non inside path elements

    if (insideClone.type === 'Alternative') {
      handleAlternative(
        insideClone,
        fakeCollector,
        fakeOutsideFiber,
        flags,
        literal,
      );
    } else {
      handleElement(
        insideClone,
        fakeCollector,
        fakeOutsideFiber,
        flags,
        literal,
      );
    }
  } catch (e) {
    if (!(e instanceof BacktrackingError)) {
      throw e;
    }
    return true;
  }
}
