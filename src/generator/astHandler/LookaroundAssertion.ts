import { AST } from 'regexpp';
import { Collector } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import { handleDisjunction } from './Disjunction';

export const handleLookaroundAssertion = (
  lookaroundAssertion: AST.LookaroundAssertion,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  const newFlags: Flags = {
    ...flags,
    INTERNAL_backwards: lookaroundAssertion.kind === 'lookbehind',
  };
  const lookaroundFiber = handleDisjunction(
    lookaroundAssertion.alternatives,
    collector,
    collector.createFinalFiber(),
    newFlags,
  );

  return collector.addAtom(currentFiber, {
    type: 'lookaround',
    ast: lookaroundAssertion,
    data: {
      lookaroundFiber,
      negate: lookaroundAssertion.negate,
    },
  });
};
