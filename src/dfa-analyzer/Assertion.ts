import { AST } from 'regexpp';
import { DFAHandler } from './types';
import { combineCharRanges } from './combineCharRanges';
import { handleElement } from './Element';
import { handleDisjunction } from './Disjunction';

const handleLookaround: DFAHandler<AST.LookaroundAssertion> = (
  lookaround,
  literal,
  flags,
  currentLength,
  maxLength,
  path,
) => {
  let lookaroundCharRanges = handleDisjunction(
    lookaround.alternatives,
    literal,
    flags,
    currentLength,
    maxLength,
    [],
  );
  if (lookaround.kind === 'lookbehind') {
    const after = lookaroundCharRanges.after;
    const before = lookaroundCharRanges.before;

    lookaroundCharRanges.before = after;
    // TODO: this is only relevant if there is a lookahead encapsulation
    // not sure if this is correct
    lookaroundCharRanges.after = before;
  }
  if (lookaround.negate) {
    lookaroundCharRanges.after = lookaroundCharRanges.after.map((charRange) =>
      charRange.invert(),
    );
    lookaroundCharRanges.before = lookaroundCharRanges.before.map((charRange) =>
      charRange.invert(),
    );
  }

  const followUp = handleElement(
    path[0],
    literal,
    flags,
    currentLength,
    maxLength,
    path.slice(1),
  );

  const afterCharRanges = combineCharRanges(
    [lookaroundCharRanges.after, followUp.after],
    currentLength,
    maxLength,
    'smallestInCommon',
  );
  const beforeCharRanges = combineCharRanges(
    [lookaroundCharRanges.before, followUp.before],
    currentLength,
    maxLength,
    'smallestInCommon',
  );

  return {
    before: beforeCharRanges,
    after: afterCharRanges,
  };
};

export const handleAssertion: DFAHandler<AST.Assertion> = (
  assertion,
  literal,
  flags,
  currentLength,
  maxLength,
  path,
) => {
  switch (assertion.kind) {
    case 'end':
    case 'start':
    case 'word':
      return handleElement(
        path[0],
        literal,
        flags,
        currentLength,
        maxLength,
        path.slice(1),
      );
    case 'lookahead':
    case 'lookbehind':
      return handleLookaround(
        assertion,
        literal,
        flags,
        currentLength,
        maxLength,
        path,
      );
  }
};
