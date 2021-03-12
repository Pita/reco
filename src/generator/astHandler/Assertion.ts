import { AST } from 'regexpp';
import { ASTHandler } from '../generator';
import { NotSupportedException } from '../NotSupportedException';
import {
  Atom,
  EndAnchorAtom,
  MultiLineEndAnchorAtom,
  MultiLineStartAnchorAtom,
  StartAnchorAtom,
  WordBoundaryAtom,
} from '../templates/mainTemplate';

export const handleAssertion: ASTHandler<AST.Assertion> = (
  assertion,
  nextAtom,
  context,
) => {
  switch (assertion.kind) {
    case 'start': {
      const startAnchor:
        | StartAnchorAtom<Atom>
        | MultiLineStartAnchorAtom<Atom> = {
        type: context.flags.multiline ? 'multiLineStartAnchor' : 'startAnchor',
        astElement: assertion,
        data: {},
        references: {
          nextAtom,
        },
      };

      return startAnchor;
    }
    case 'end': {
      const endAnchor: EndAnchorAtom<Atom> | MultiLineEndAnchorAtom<Atom> = {
        type: context.flags.multiline ? 'multiLineEndAnchor' : 'endAnchor',
        astElement: assertion,
        data: {},
        references: {
          nextAtom,
        },
      };

      return endAnchor;
    }
    case 'word': {
      const wordBoundary: WordBoundaryAtom<Atom> = {
        type: 'wordBoundary',
        astElement: assertion,
        data: {
          negate: assertion.negate,
        },
        references: {
          nextAtom,
        },
      };

      return wordBoundary;
    }
    case 'lookahead':
    case 'lookbehind':
      throw new NotSupportedException('Does not support lookarounds yet');
    // return handleLookaroundAssertion(
    //   assertion,
    //   templateValues,
    //   currentFiber,
    //   flags,
    //   literal,
    // );
  }
};
