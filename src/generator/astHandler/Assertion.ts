import { AST } from 'regexpp';
import { Collector } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import { handleLookaroundAssertion } from './LookaroundAssertion';

export const handleAssertion = (
  assertion: AST.Assertion,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  switch (assertion.kind) {
    case 'start':
      return collector.addAtom(currentFiber, {
        type: flags.multiline ? 'multiLineStartAnchor' : 'startAnchor',
        ast: assertion,
        data: {},
      });
    case 'end':
      return collector.addAtom(currentFiber, {
        type: flags.multiline ? 'multiLineEndAnchor' : 'endAnchor',
        ast: assertion,
        data: {},
      });
    case 'lookahead':
    case 'lookbehind':
      return handleLookaroundAssertion(
        assertion,
        collector,
        currentFiber,
        flags,
      );
    case 'word':
      return collector.addAtom(currentFiber, {
        type: 'wordBoundary',
        ast: assertion,
        data: {
          negate: assertion.negate,
        },
      });
      break;
  }
};
