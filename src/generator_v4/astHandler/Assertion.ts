import { AST } from 'regexpp';
import { Collector } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator_v4';

export const handleAssertion = (
  assertion: AST.Assertion,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  switch (assertion.kind) {
    case 'start':
      if (flags.multiline) {
        throw new Error(`Multiline is not supported yet`);
      }
      return collector.addAtom(currentFiber, {
        type: 'startAnchor',
        ast: assertion,
        data: {},
      });
    case 'end':
      if (flags.multiline) {
        throw new Error(`Multiline is not supported yet`);
      }
      return collector.addAtom(currentFiber, {
        type: 'endAnchor',
        ast: assertion,
        data: {},
      });
    default:
      throw new Error(`Unsupported Assertion kind: ${assertion.kind}`);
  }
};
