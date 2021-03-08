import { AST } from 'regexpp';
import { CollectedTemplateValues } from '../CollectedTemplateValues';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from 'regexpp/ast';
import { handleDisjunction } from './Disjunction';

export const handleCapturingGroup = (
  capturingGroup: AST.CapturingGroup,
  templateValues: CollectedTemplateValues,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
): FiberTemplateDefinition => {
  if (capturingGroup.name) {
    throw new Error('No supported for named capturing groups yet');
  }

  const groupReference = templateValues.addCapturingGroup(
    currentFiber,
    capturingGroup,
  );
  const groupEndMarker = templateValues.addAtom(
    currentFiber,
    {
      type: 'groupEndMarker',
      astLocation: { start: capturingGroup.end - 1, end: capturingGroup.end },
      data: {
        groupReference,
      },
    },
    0,
    0,
    'noAstElement',
  );

  const disjunction = handleDisjunction(
    capturingGroup.alternatives,
    templateValues,
    groupEndMarker,
    flags,
    literal,
  );

  const groupStartMarker = templateValues.addAtom(
    disjunction,
    {
      type: 'groupStartMarker',
      astLocation: {
        start: capturingGroup.start,
        end: capturingGroup.start + 1,
      },
      data: {
        groupReference,
      },
    },
    0,
    0,
    'noAstElement',
  );

  return groupStartMarker;
};
