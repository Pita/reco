import { AST } from 'regexpp';
import { Collector } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from 'regexpp/ast';
import { handleDisjunction } from './Disjunction';

export const handleCapturingGroup = (
  capturingGroup: AST.CapturingGroup,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
): FiberTemplateDefinition => {
  if (capturingGroup.name) {
    throw new Error('No supported for named capturing groups yet');
  }

  const groupReference = collector.addCapturingGroup(
    currentFiber,
    capturingGroup,
  );
  const groupEndMarker = collector.addAtom(
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
    collector,
    groupEndMarker,
    flags,
    literal,
  );

  const groupStartMarker = collector.addAtom(
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
