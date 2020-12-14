import { AST } from 'regexpp';
import { Collector, mergeGroupsOfFibers } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import { handleElement } from './Element';
import { BacktrackingError } from '../BacktrackingException';
import { CharRange } from '../CharRange';

const deriveFirstCharOfQuantifierIsolated = (
  quantifier: AST.Quantifier,
  collector: Collector,
  flags: Flags,
) => {
  const firstCharFakeCollector = collector.fakeCollector();
  const firstCharFiber = handleElement(
    quantifier.element,
    firstCharFakeCollector,
    firstCharFakeCollector.createFinalFiber(CharRange.createEmptyRange()),
    {
      ...flags,
    },
  );
  return firstCharFiber.meta.firstCharRange;
};

const deriveFirstCharForQuantifierFollowUp = (
  quantifier: AST.Quantifier,
  currentFiber: FiberTemplateDefinition,
  firstCharOfQuantifierIsolated: CharRange,
) => {
  return quantifier.max > 1
    ? firstCharOfQuantifierIsolated.union(currentFiber.meta.firstCharRange)
    : currentFiber.meta.firstCharRange;
};

const checkIfQuantifierHasInternalBacktracking = (
  quantifier: AST.Quantifier,
  collector: Collector,
  flags: Flags,
  followUpFirstChar: CharRange,
) => {
  try {
    const fakeCollector = collector.fakeCollector();
    handleElement(
      quantifier.element,
      fakeCollector,
      fakeCollector.createFinalFiber(followUpFirstChar),
      {
        ...flags,
        INTERNAL_no_backtracking: true,
      },
    );
  } catch (e) {
    if (e instanceof BacktrackingError) {
      return true;
    }

    throw e;
  }

  return false;
};

const checkIfQuantifierHasExternalBacktracking = (
  firstCharOfQuantifierIsolated: CharRange,
  currentFiber: FiberTemplateDefinition,
) => {
  return firstCharOfQuantifierIsolated.hasOverlap(
    currentFiber.meta.firstCharRange,
  );
};

const deriveFirstCharAfterQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  followUpFirstChar: CharRange,
) => {
  const fakeCollector = collector.fakeCollector();
  const quantifierFiber = handleElement(
    quantifier.element,
    fakeCollector,
    fakeCollector.createFinalFiber(followUpFirstChar),
    {
      ...flags,
    },
  );

  return quantifier.min > 0
    ? quantifierFiber.meta.firstCharRange
    : quantifierFiber.meta.firstCharRange.union(
        currentFiber.meta.firstCharRange,
      );
};

const analyzeQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
) => {
  const firstCharOfQuantifierIsolated = deriveFirstCharOfQuantifierIsolated(
    quantifier,
    collector,
    flags,
  );
  const followUpFirstChar = deriveFirstCharForQuantifierFollowUp(
    quantifier,
    currentFiber,
    firstCharOfQuantifierIsolated,
  );
  const hasInternalBacktracking = checkIfQuantifierHasInternalBacktracking(
    quantifier,
    collector,
    flags,
    followUpFirstChar,
  );
  const hasExternalBackTracking = checkIfQuantifierHasExternalBacktracking(
    firstCharOfQuantifierIsolated,
    currentFiber,
  );
  const firstCharAfterQuantifier = deriveFirstCharAfterQuantifier(
    quantifier,
    collector,
    currentFiber,
    flags,
    followUpFirstChar,
  );

  return {
    firstCharAfterQuantifier,
    needsBacktracking: hasInternalBacktracking || hasExternalBackTracking,
    followUpFirstChar,
  };
};

const generateBacktrackingQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  firstCharAfterQuantifier: CharRange,
  followUpFirstChar: CharRange,
) => {
  const {
    quantifierFinalFiber,
    quantifierHandler,
  } = collector.createQuantifierFiberPair(
    currentFiber,
    quantifier.greedy ? 'greedy' : 'lazy',
    quantifier,
    followUpFirstChar,
  );

  const countParams = generateCountParams(quantifier);
  quantifierHandler.minCount = countParams.minCount;
  quantifierHandler.maxCount = countParams.maxCount;
  quantifierHandler.maxOrMinCount = countParams.maxOrMinCount;

  const wrappedHandler = handleElement(
    quantifier.element,
    collector,
    quantifierFinalFiber,
    flags,
  );

  quantifierHandler.meta.groups = mergeGroupsOfFibers([
    wrappedHandler,
    currentFiber,
  ]);
  quantifierHandler.wrappedHandler = wrappedHandler;

  return collector.addAtom(
    collector.createForkingFiber(
      quantifierHandler,
      quantifierHandler.meta.groups,
    ),
    {
      type: 'quantifierStarter',
      data: {
        maxOrMinCount: quantifierHandler.maxOrMinCount,
        functionName: quantifierHandler.functionName,
      },
      ast: quantifier,
    },
    firstCharAfterQuantifier,
  );
};

const generateCountParams = (quantifier: AST.Quantifier) => {
  const minCount = quantifier.min === 0 ? undefined : quantifier.min;
  const maxCount = quantifier.max === Infinity ? undefined : quantifier.max;
  const maxOrMinCount = minCount !== undefined || maxCount !== undefined;

  return { minCount, maxCount, maxOrMinCount };
};

const generateNonBacktrackingQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  firstCharAfterQuantifier: CharRange,
  followUpFirstChar: CharRange,
) => {
  const wrappedHandler = handleElement(
    quantifier.element,
    collector,
    collector.createFinalFiber(followUpFirstChar),
    flags,
  );

  const countParams = generateCountParams(quantifier);

  return collector.addAtom(
    currentFiber,
    {
      type: 'nonBacktrackingQuantifier',
      data: {
        ...countParams,
        wrappedHandler,
      },
      ast: quantifier,
    },
    firstCharAfterQuantifier,
  );
};

export const handleQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  const {
    firstCharAfterQuantifier,
    needsBacktracking,
    followUpFirstChar,
  } = analyzeQuantifier(quantifier, collector, currentFiber, flags);

  if (needsBacktracking) {
    if (flags.INTERNAL_no_backtracking) {
      throw new BacktrackingError();
    }
    return generateBacktrackingQuantifier(
      quantifier,
      collector,
      currentFiber,
      flags,
      firstCharAfterQuantifier,
      followUpFirstChar,
    );
  } else {
    return generateNonBacktrackingQuantifier(
      quantifier,
      collector,
      currentFiber,
      flags,
      firstCharAfterQuantifier,
      followUpFirstChar,
    );
  }
};
