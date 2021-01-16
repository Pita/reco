import { AST } from 'regexpp';
import { DFAHandler } from './types';
import { combineCharRanges } from './combineCharRanges';
import { handleElement } from './Element';
import { handleDisjunction } from './Disjunction';

const handleLookahead: DFAHandler<AST.LookaheadAssertion> = (
  lookahead,
  flags,
  currentLength,
  maxLength,
  path,
) => {
  let lookaheadCharRanges = handleDisjunction(
    lookahead.alternatives,
    flags,
    currentLength,
    maxLength,
    [],
  );
  if (lookahead.negate) {
    lookaheadCharRanges = lookaheadCharRanges.map((charRange) =>
      charRange.invert(),
    );
  }

  const followUp = handleElement(
    path[0],
    flags,
    currentLength,
    maxLength,
    path.slice(1),
  );

  return combineCharRanges(
    [lookaheadCharRanges, followUp],
    currentLength,
    maxLength,
    'smallestInCommon',
  );
};

export const handleAssertion: DFAHandler<AST.Assertion> = (
  assertion,
  flags,
  currentLength,
  maxLength,
  path,
) => {
  switch (assertion.kind) {
    case 'lookahead':
      return handleLookahead(assertion, flags, currentLength, maxLength, path);
    // case 'word':
    // case 'end':
    // case 'start':
    // case 'lookbehind':
    default:
      throw new Error(`${assertion.kind} not supported yet`);
  }
};
