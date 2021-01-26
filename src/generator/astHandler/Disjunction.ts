import { AST } from 'regexpp';
import { Collector, mergeGroupsOfFibers } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import { handleAlternative } from './Alternative';
import { CharRange } from '../CharRange';
import { BacktrackingError } from '../BacktrackingException';
import { dfaAnalyzeAlternative } from '../../dfa-analyzer/dfaAnalyze';

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
  const combinedCharRange = mappedAlternatives.reduce(
    (charRange, alternative) =>
      charRange.union(alternative.meta.firstCharRange),
    CharRange.createEmptyRange(),
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
    combinedCharRange,
    minLength,
    maxLength,
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
        fakeCollector.createFinalFiber(currentFiber.meta.firstCharRange),
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
  // const skipNumbers = [
  //   170,
  //   10,
  //   38,
  //   19,
  //   86,
  //   115,
  //   77,
  //   254,
  //   235,
  //   291,
  //   203,
  //   212,
  //   447,
  //   /*new*/
  //   // 351,
  //   // 374,
  //   // 363,
  //   // 374,
  // ];
  // if (skipNumbers.includes(alternatives[0].parent.start)) {
  //   return false;
  // }

  if (alternatives[0].parent.type === 'Pattern') {
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

  const mappedDFAs = alternatives.map((alternative) => {
    return dfaAnalyzeAlternative(alternative, literal, 20);
  });

  let completlyExclusive = (() => {
    for (let i = 0; i < mappedDFAs.length - 1; i++) {
      const a = mappedDFAs[i];

      for (let j = i + 1; j < mappedDFAs.length; j++) {
        const b = mappedDFAs[j];

        const isExclusive = a.after.some((charRangeA, k) => {
          const charRangeB = b.after[k];
          if (!charRangeB) {
            return true;
          }

          return !charRangeA.hasOverlap(charRangeB);
        });

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
      collector.createFinalFiber(currentFiber.meta.firstCharRange),
      flags,
      literal,
    ),
  );

  const groupsToRestore = mergeGroupsOfFibers(mappedAlternatives);
  const combinedCharRange = mappedAlternatives.reduce(
    (charRange, alternative) =>
      charRange.union(alternative.meta.firstCharRange),
    CharRange.createEmptyRange(),
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

  return collector.addAtom(
    currentFiber,
    {
      type: 'nonBacktrackingDisjunction',
      data: { alternatives: mappedAlternatives, groupsToRestore },
      ast: alternatives[0].parent,
    },
    combinedCharRange,
    minLength,
    maxLength,
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
    console.log(
      'non backtracking',
      alternatives[0].parent.start,
      alternatives[0].parent.raw,
    );
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

    console.log('backtracking', alternatives[0].parent.raw);

    return handleBacktrackingDisjunction(
      alternatives,
      collector,
      currentFiber,
      flags,
      literal,
    );
  }
};
