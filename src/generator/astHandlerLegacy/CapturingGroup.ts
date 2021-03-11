import { AST } from 'regexpp';
import {
  addAtom,
  addCapturingGroup,
  CollectedTemplateValues,
} from '../CollectedTemplateValues';
import { handleDisjunction } from './Disjunction';
import { GeneratorContext } from '../generator';

export const handleCapturingGroup = (
  capturingGroup: AST.CapturingGroup,
  templateValues: CollectedTemplateValues,
  context: GeneratorContext,
): CollectedTemplateValues => {
  if (capturingGroup.name) {
    throw new Error('No support for named capturing groups yet');
  }

  const { group: groupReference, values: templateValues1 } = addCapturingGroup(
    templateValues,
    capturingGroup,
    context,
  );
  const templateValues2 = addAtom(
    templateValues1,
    {
      type: 'groupEndMarker',
      data: {
        groupReference,
      },
    },
    { start: capturingGroup.end - 1, end: capturingGroup.end },
    0,
    0,
    'noAstElement',
  );

  const templateValues3 = handleDisjunction(
    capturingGroup.alternatives,
    templateValues2,
    context,
  );

  const templateValues4 = addAtom(
    templateValues3,
    {
      type: 'groupStartMarker',
      data: {
        groupReference,
      },
    },
    {
      start: capturingGroup.start,
      end: capturingGroup.start + 1,
    },
    0,
    0,
    'noAstElement',
  );

  return templateValues4;
};
