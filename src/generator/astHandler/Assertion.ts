import { AST } from 'regexpp';
import { CollectedTemplateValues } from '../CollectedTemplateValues';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import { handleLookaroundAssertion } from './LookaroundAssertion';

export const handleAssertion = (
  assertion: AST.Assertion,
  templateValues: CollectedTemplateValues,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
): FiberTemplateDefinition => {
  switch (assertion.kind) {
    case 'start':
      return templateValues.addAtom(
        currentFiber,
        {
          type: flags.multiline ? 'multiLineStartAnchor' : 'startAnchor',
          astLocation: assertion,
          data: {},
        },
        0,
        0,
        assertion,
      );
    case 'end':
      return templateValues.addAtom(
        currentFiber,
        {
          type: flags.multiline ? 'multiLineEndAnchor' : 'endAnchor',
          astLocation: assertion,
          data: {},
        },
        0,
        0,
        assertion,
      );
    case 'lookahead':
    case 'lookbehind':
      return handleLookaroundAssertion(
        assertion,
        templateValues,
        currentFiber,
        flags,
        literal,
      );
    case 'word':
      return templateValues.addAtom(
        currentFiber,
        {
          type: 'wordBoundary',
          astLocation: assertion,
          data: {
            negate: assertion.negate,
          },
        },
        0,
        0,
        assertion,
      );
      break;
  }
};
