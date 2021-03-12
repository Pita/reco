import { AST } from 'regexpp';
import { ASTHandler } from '../generator';
import { Atom, GroupBackReferenceAtom } from '../templates/mainTemplate';

export const handleBackReference: ASTHandler<AST.Backreference> = (
  backreference,
  nextAtom,
  context,
) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const referencedGroup = context.groupIndex.get(backreference.resolved)!;

  const atom: GroupBackReferenceAtom<Atom> = {
    type: 'groupBackReference',
    astElement: backreference,
    data: {
      groupIndex: referencedGroup.idx,
    },
    references: {
      nextAtom,
    },
  };

  return atom;
};
