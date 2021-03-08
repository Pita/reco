import { AST } from 'regexpp';
import { CollectedTemplateValues } from '../CollectedTemplateValues';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import { handleDisjunction } from './Disjunction';

export const handleLookaroundAssertion = (
  lookaroundAssertion: AST.LookaroundAssertion,
  templateValues: CollectedTemplateValues,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
): FiberTemplateDefinition => {
  const newFlags: Flags = {
    ...flags,
    INTERNAL_backwards: lookaroundAssertion.kind === 'lookbehind',
  };
  const lookaroundFiber = handleDisjunction(
    lookaroundAssertion.alternatives,
    templateValues,
    createFinalFiber(templateValues, []),
    newFlags,
    literal,
  );

  return templateValues.addAtom(
    currentFiber,
    {
      type: 'lookaround',
      astLocation: lookaroundAssertion,
      data: {
        lookaroundFiber,
        negate: lookaroundAssertion.negate,
      },
    },
    0,
    0,
    lookaroundAssertion,
  );
};
