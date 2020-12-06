import { AST } from 'regexpp';
import { Collector, mergeGroupsOfFibers } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import { handleElement } from './Element';

const canQuantifierBacktrack = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
) => {
  const fakeCollector = collector.fakeCollector();
  const wrappedHandler = handleElement(
    quantifier.element,
    fakeCollector,
    fakeCollector.createFinalFiber(),
    flags,
  );

  return wrappedHandler.meta.combinedCharRange.hasOverlap(
    currentFiber.meta.firstCharRange,
  );
};

const generateBacktrackingQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
) => {
  const {
    quantifierFinalFiber,
    quantifierHandler,
  } = collector.createQuantifierFiberPair(
    currentFiber,
    quantifier.greedy ? 'greedy' : 'lazy',
    quantifier,
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
    quantifierHandler.meta.firstCharRange,
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
) => {
  const wrappedHandler = handleElement(
    quantifier.element,
    collector,
    collector.createFinalFiber(),
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
    wrappedHandler.meta.firstCharRange,
  );
};

export const handleQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  const canBacktrack = canQuantifierBacktrack(
    quantifier,
    collector,
    currentFiber,
    flags,
  );
  // console.log('canBacktrack', canBacktrack);

  if (canBacktrack) {
    return generateBacktrackingQuantifier(
      quantifier,
      collector,
      currentFiber,
      flags,
    );
  } else {
    return generateNonBacktrackingQuantifier(
      quantifier,
      collector,
      currentFiber,
      flags,
    );
  }
};
