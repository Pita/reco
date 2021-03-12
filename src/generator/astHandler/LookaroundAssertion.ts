import { AST } from 'regexpp';
import { ASTHandler } from '../generator';
import { NotSupportedException } from '../NotSupportedException';
import { Atom, LookaroundAtom } from '../templates/mainTemplate';
import { handleDisjunction } from './Disjunction';

export const handleLookaroundAssertion: ASTHandler<AST.LookaroundAssertion> = (
  lookaroundAssertion,
  nextAtom,
  context,
) => {
  if (lookaroundAssertion.kind === 'lookbehind') {
    throw new NotSupportedException('Lookbehinds are not supported yet');
  }

  const lookaround = handleDisjunction(
    lookaroundAssertion.alternatives,
    null,
    context,
  );

  if (!lookaround) {
    throw new Error(
      `Lookaround did not resolve to anything: ${lookaroundAssertion.raw}`,
    );
  }

  const atom: LookaroundAtom<Atom> = {
    type: 'lookaround',
    astElement: lookaroundAssertion,
    data: {
      negate: lookaroundAssertion.negate,
    },
    references: {
      nextAtom,
      lookaround,
    },
  };

  return atom;
};
