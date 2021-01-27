import { AST } from 'regexpp';
import { DFAHandler } from './types';
import { combineCharRanges } from './combineCharRanges';
import { handleElement } from './Element';
import { handleDisjunction } from './Disjunction';

const handleLookaround: DFAHandler<AST.LookaroundAssertion> = (
  lookaround,
  options,
) => {
  let lookaroundCharRanges = handleDisjunction(lookaround.alternatives, {
    ...options,
    path: [],
  });
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

  const followUp = handleElement(options.path[0], {
    ...options,
    path: options.path.slice(1),
  });

  const afterCharRanges = combineCharRanges(
    [lookaroundCharRanges.after, followUp.after],
    options.currentLength,
    options.maxLength,
    'smallestInCommon',
  );
  const beforeCharRanges = combineCharRanges(
    [lookaroundCharRanges.before, followUp.before],
    options.currentLength,
    options.maxLength,
    'smallestInCommon',
  );

  return {
    before: beforeCharRanges,
    after: afterCharRanges,
  };
};

export const handleAssertion: DFAHandler<AST.Assertion> = (
  assertion,
  options,
) => {
  switch (assertion.kind) {
    case 'end':
    case 'start':
    case 'word':
      return handleElement(options.path[0], {
        ...options,
        path: options.path.slice(1),
      });
    case 'lookahead':
    case 'lookbehind':
      return handleLookaround(assertion, options);
  }
};
