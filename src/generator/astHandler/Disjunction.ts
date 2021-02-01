import { AST } from 'regexpp';
import { Collector, mergeGroupsOfFibers } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import { handleAlternative } from './Alternative';
import { BacktrackingError } from '../BacktrackingException';
import {
  computeExclusivityOfAlternatives,
  QuickCheckDetails,
} from '../../dfa-analyzer/CharRangeSequencePossibilities';
import { dfaAnalyzeElement } from '../../dfa-analyzer/dfaAnalyze';

// TODO: there is a lot of code duplicated between this method and its non backtracking variant
const handleBacktrackingDisjunction = (
  alternatives: AST.Alternative[],
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
): FiberTemplateDefinition => {
  const quickChecks = computeQuickChecks(
    alternatives,
    currentFiber,
    flags,
    literal,
  );
  const mappedAlternatives = alternatives.map((alternative, i) =>
    handleAlternative(
      alternative,
      collector,
      collector.createConnectedFiber(currentFiber),
      flags,
      literal,
      quickChecks ? quickChecks[i] : null,
    ),
  );

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

  const alternativesWithQuickChecks = mappedAlternatives.map(
    (alternative, i) => {
      const quickCheck = quickChecks ? quickChecks[i] : null;
      return {
        alternative,
        quickCheck,
      };
    },
  );
  const hasQuickCheck = !!quickChecks;

  return collector.addAtom(
    collector.createForkingFiber(
      currentFiber,
      mergeGroupsOfFibers(mappedAlternatives),
      anchorsAtStartOfLine,
      anchorsAtEndOfLine,
    ),
    {
      type: 'disjunction',
      data: { hasQuickCheck, alternativesWithQuickChecks },
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

  return (
    computeExclusivityOfAlternatives(alternatives, literal) !== 'NotExclusive'
  );
};

const handleNonBacktrackingDisjunction = (
  alternatives: AST.Alternative[],
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
): FiberTemplateDefinition => {
  const quickChecks = computeQuickChecks(
    alternatives,
    currentFiber,
    flags,
    literal,
  );

  const mappedAlternatives = alternatives.map((alternative, i) =>
    handleAlternative(
      alternative,
      collector,
      collector.createFinalFiber(currentFiber.meta.path),
      flags,
      literal,
      quickChecks ? quickChecks[i] : null,
    ),
  );

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

  const alternativesWithQuickChecks = mappedAlternatives.map(
    (alternative, i) => {
      const quickCheck = quickChecks ? quickChecks[i] : null;
      return {
        alternative,
        quickCheck,
      };
    },
  );
  const hasQuickCheck = !!quickChecks;

  return collector.addAtom(
    currentFiber,
    {
      type: 'nonBacktrackingDisjunction',
      data: {
        hasQuickCheck,
        alternativesWithQuickChecks,
      },
      ast: alternatives[0].parent,
    },
    minLength,
    maxLength,
    alternatives[0].parent,
  );
};

const computeQuickChecks = (
  alternatives: AST.Alternative[],
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
) => {
  let isQuickCheckable = false;
  const quickChecks = alternatives.map((alternative) => {
    const analyzed = dfaAnalyzeElement(
      [alternative, ...currentFiber.meta.path],
      literal,
      2,
    );
    if (!analyzed) {
      return null;
    }

    const quickCheck = analyzed.computeQuickCheck(flags);
    if (!quickCheck) {
      return null;
    }

    isQuickCheckable = true;
    return quickCheck;
  });

  return isQuickCheckable ? quickChecks : null;
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
