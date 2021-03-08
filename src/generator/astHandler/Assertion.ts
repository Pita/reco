import { AST } from 'regexpp';
import { addAtom, CollectedTemplateValues } from '../CollectedTemplateValues';
import { Flags } from '../generator';
import { handleLookaroundAssertion } from './LookaroundAssertion';

export const handleAssertion = (
  assertion: AST.Assertion,
  templateValues: CollectedTemplateValues,
  flags: Flags,
  literal: AST.RegExpLiteral,
): CollectedTemplateValues => {
  switch (assertion.kind) {
    case 'start':
      return addAtom(
        templateValues,
        {
          type: flags.multiline ? 'multiLineStartAnchor' : 'startAnchor',
          data: {},
        },
        assertion,
        0,
        0,
        assertion,
      );
    case 'end':
      return addAtom(
        templateValues,
        {
          type: flags.multiline ? 'multiLineEndAnchor' : 'endAnchor',
          data: {},
        },
        assertion,
        0,
        0,
        assertion,
      );
    case 'lookahead':
    case 'lookbehind':
      throw new Error('Does not support lookarounds yet');
    // return handleLookaroundAssertion(
    //   assertion,
    //   templateValues,
    //   currentFiber,
    //   flags,
    //   literal,
    // );
    case 'word':
      return addAtom(
        templateValues,
        {
          type: 'wordBoundary',
          data: {
            negate: assertion.negate,
          },
        },
        assertion,
        0,
        0,
        assertion,
      );
      break;
  }
};
