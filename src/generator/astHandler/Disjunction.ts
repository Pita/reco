import { AST } from 'regexpp';
import { Collector, mergeGroupsOfFibers } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import { handleAlternative } from './Alternative';
import { BacktrackingError } from '../BacktrackingException';
import { dfaAnalyzeElement } from '../../dfa-analyzer/dfaAnalyze';
import { CharRangeSequencePossibilities } from '../../dfa-analyzer/CharRangeSequencePossibilities';

const handleBacktrackingDisjunction = (
  alternatives: AST.Alternative[],
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
): FiberTemplateDefinition => {
  const mappedAlternatives = alternatives.map((alternative) =>
    handleAlternative(
      alternative,
      collector,
      collector.createConnectedFiber(currentFiber),
      flags,
      literal,
    ),
  );

  const groupsToRestore = mergeGroupsOfFibers(mappedAlternatives);
  let minLength = Infinity;
  let maxLength = -Infinity;
  mappedAlternatives.forEach((alternative) => {
    minLength = Math.min(minLength, alternative.meta.minCharLength);
    maxLength = Math.max(maxLength, alternative.meta.maxCharLength);
  });

  const anchorsAtStartOfLine = mappedAlternatives.every(
    (mappedAlternative) => mappedAlternative.meta.anchorsAtStartOfLine,
  );

  const anchorsAtEndOfLine = mappedAlternatives.every(
    (mappedAlternative) => mappedAlternative.meta.anchorsAtEndOfLine,
  );

  return collector.addAtom(
    collector.createForkingFiber(
      currentFiber,
      groupsToRestore,
      anchorsAtStartOfLine,
      anchorsAtEndOfLine,
    ),
    {
      type: 'disjunction',
      data: { alternatives: mappedAlternatives, groupsToRestore },
      ast: alternatives[0].parent,
    },
    minLength,
    maxLength,
    alternatives[0].parent,
  );
};

const checkIfAlternativesHaveInternalBacktracking = (
  alternatives: AST.Alternative[],
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
) => {
  try {
    alternatives.forEach((alternative) => {
      const fakeCollector = collector.fakeCollector();
      handleAlternative(
        alternative,
        fakeCollector,
        fakeCollector.createFinalFiber(currentFiber.meta.path),
        {
          ...flags,
          INTERNAL_no_backtracking: true,
        },
        literal,
      );
    });
  } catch (e) {
    if (e instanceof BacktrackingError) {
      return true;
    }

    throw e;
  }

  return false;
};

const isANonBacktrackingDisjunction = (
  alternatives: AST.Alternative[],
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
) => {
  if (alternatives[0].parent.type === 'Pattern') {
    return true;
  }

  // impossible to backtrack if there is nothing coming afterwards
  if (currentFiber.meta.path.length === 0) {
    return true;
  }

  if (
    checkIfAlternativesHaveInternalBacktracking(
      alternatives,
      collector,
      currentFiber,
      flags,
      literal,
    )
  ) {
    return false;
  }

  let completlyExclusive = (() => {
    const mappedDFAs: CharRangeSequencePossibilities[] = [];
    let complexity = 1;
    for (let i = 0; i < alternatives.length; i++) {
      const possibilities = dfaAnalyzeElement([alternatives[i]], literal, 20);

      if (possibilities === null) {
        return false;
      }
      mappedDFAs.push(possibilities);

      complexity *= possibilities.size();
      if (complexity > 1000) {
        return false;
      }
    }

    for (let i = 0; i < mappedDFAs.length - 1; i++) {
      const a = mappedDFAs[i];

      for (let j = i + 1; j < mappedDFAs.length; j++) {
        const b = mappedDFAs[j];

        const isExclusive = a.isExclusive(b);

        if (!isExclusive) {
          return false;
        }
      }
    }

    return true;
  })();

  return completlyExclusive;
};

const handleNonBacktrackingDisjunction = (
  alternatives: AST.Alternative[],
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
): FiberTemplateDefinition => {
  const mappedAlternatives = alternatives.map((alternative) =>
    handleAlternative(
      alternative,
      collector,
      collector.createFinalFiber(currentFiber.meta.path),
      flags,
      literal,
    ),
  );

  const groupsToRestore = mergeGroupsOfFibers(mappedAlternatives);
  let minLength = Infinity;
  let maxLength = -Infinity;
  mappedAlternatives.forEach((alternative) => {
    minLength = Math.min(minLength, alternative.meta.minCharLength);
    maxLength = Math.max(maxLength, alternative.meta.maxCharLength);
  });

  const anchorsAtStartOfLine = mappedAlternatives.every(
    (mappedAlternative) => mappedAlternative.meta.anchorsAtStartOfLine,
  );
  const anchorsAtEndOfLine = mappedAlternatives.every(
    (mappedAlternative) => mappedAlternative.meta.anchorsAtEndOfLine,
  );
  if (anchorsAtStartOfLine) {
    currentFiber.meta.anchorsAtStartOfLine = true;
  }
  if (anchorsAtEndOfLine) {
    currentFiber.meta.anchorsAtEndOfLine = true;
  }

  return collector.addAtom(
    currentFiber,
    {
      type: 'nonBacktrackingDisjunction',
      data: { alternatives: mappedAlternatives, groupsToRestore },
      ast: alternatives[0].parent,
    },
    minLength,
    maxLength,
    alternatives[0].parent,
  );
};

export const handleDisjunction = (
  alternatives: AST.Alternative[],
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
): FiberTemplateDefinition => {
  if (alternatives.length === 1) {
    return handleAlternative(
      alternatives[0],
      collector,
      currentFiber,
      flags,
      literal,
    );
  }

  if (
    isANonBacktrackingDisjunction(
      alternatives,
      collector,
      currentFiber,
      flags,
      literal,
    )
  ) {
    return handleNonBacktrackingDisjunction(
      alternatives,
      collector,
      currentFiber,
      flags,
      literal,
    );
  } else {
    if (flags.INTERNAL_no_backtracking) {
      throw new BacktrackingError();
    }

    return handleBacktrackingDisjunction(
      alternatives,
      collector,
      currentFiber,
      flags,
      literal,
    );
  }
};
