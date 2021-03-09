import { ASTPath } from '../dfa-analyzer/types';
import cloneDeep from 'lodash/cloneDeep';
import { AST, visitRegExpAST } from 'regexpp';
import { CharASTElement } from './astHandler/CharacterSequence';
import { BacktrackingError } from './BacktrackingException';
import { handleElement } from './astHandler/Element';
import { GeneratorContext } from './generator';
import { handleAlternative } from './astHandler/Alternative';
import { CollectedTemplateValues } from './CollectedTemplateValues';

function markChar(char: CharASTElement): void {
  // eslint-disable-next-line functional/immutable-data, @typescript-eslint/no-explicit-any
  (markChar as any)._inside_ = true;
}

// should probably be: contains outside element
export function isInsideElement(char: CharASTElement): boolean {
  // eslint-disable-next-line functional/immutable-data, @typescript-eslint/no-explicit-any
  return (char as any)._inside_ === true;
}

/*
  TODO: Test cover throughly, evaluate usefulness vs complexity
*/
export function hasInsideOutBacktracking(
  inside: AST.QuantifiableElement | AST.Alternative,
  templateValues: CollectedTemplateValues,
  context: GeneratorContext,
  outsidePath: ASTPath,
): boolean {
  const newFibers = templateValues.fiberHandlers.map((fiberHandler) => {
    if (fiberHandler.functionName !== templateValues.entryFunctionName) {
      return fiberHandler;
    }

    return {
      ...fiberHandler,
      meta: {
        ...fiberHandler.meta,
        path: outsidePath,
      },
    };
  });

  const newTemplateValues = {
    ...templateValues,
    fiberHandlers: newFibers,
  };

  const insideClone = cloneDeep(inside);

  visitRegExpAST(insideClone, {
    onCharacterEnter: markChar,
    onCharacterClassEnter: markChar,
    onCharacterSetEnter: markChar,
  });

  try {
    if (insideClone.type === 'Alternative') {
      handleAlternative(insideClone, newTemplateValues, context);
    } else {
      handleElement(insideClone, newTemplateValues, context);
    }
  } catch (e) {
    if (!(e instanceof BacktrackingError)) {
      throw e;
    }
    return true;
  }

  return false;
}
