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
): FiberTemplateDefinition => {
  const groupReference = collector.addCapturingGroup(
    currentFiber,
    capturingGroup,
  );
  const groupEndMarker = collector.addAtom(currentFiber, {
    type: 'groupEndMarker',
    ast: capturingGroup,
    data: {
      groupReference,
    },
  });

  const disjunction = handleDisjunction(
    capturingGroup.alternatives,
    collector,
    groupEndMarker,
    flags,
  );

  const groupStartMarker = collector.addAtom(disjunction, {
    type: 'groupStartMarker',
    ast: capturingGroup,
    data: {
      groupReference,
    },
  });

  return groupStartMarker;
};
