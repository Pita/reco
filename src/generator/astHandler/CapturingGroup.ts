import { AST } from 'regexpp';
import { handleDisjunction } from './Disjunction';
import { ASTHandler } from '../generator';
import {
  Atom,
  GroupEndMarkerAtom,
  GroupStartMarkerAtom,
} from '../templates/mainTemplate';

export const handleCapturingGroup: ASTHandler<AST.CapturingGroup> = (
  capturingGroup,
  nextAtom,
  context,
) => {
  if (capturingGroup.name) {
    throw new Error('No support for named capturing groups yet');
  }

  const groupReference = context.groupIndex.get(capturingGroup);
  if (groupReference === undefined) {
    throw new Error("Couldn't find group in index");
  }

  const withEndMarker: GroupEndMarkerAtom<Atom> = {
    type: 'groupEndMarker',
    astElement: capturingGroup,
    data: {
      groupReference,
    },
    references: {
      nextAtom,
    },
  };

  const withDisjunction = handleDisjunction(
    capturingGroup.alternatives,
    withEndMarker,
    context,
  );

  const withStartMarker: GroupStartMarkerAtom<Atom> = {
    type: 'groupStartMarker',
    astElement: capturingGroup,
    data: {
      groupReference,
    },
    references: {
      nextAtom: withDisjunction,
    },
  };

  return withStartMarker;
};
