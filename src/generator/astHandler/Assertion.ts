import { AST } from 'regexpp';
import { ASTHandler } from '../generator';
import {
  Atom,
  EndAnchorAtom,
  MultiLineEndAnchorAtom,
  MultiLineStartAnchorAtom,
  StartAnchorAtom,
  WordBoundaryAtom,
} from '../templates/mainTemplate';
import { handleLookaroundAssertion } from './LookaroundAssertion';

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
      return handleLookaroundAssertion(assertion, nextAtom, context);
  }
};
