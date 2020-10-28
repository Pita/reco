import { AST } from 'regexpp';
import { Collector, mergeGroupsOfFibers } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import { handleElement } from './Element';

export const handleQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  const {
    quantifierFinalFiber,
    quantifierHandler,
  } = collector.createQuantifierFiberPair(
    currentFiber,
    quantifier.greedy ? 'greedy' : 'lazy',
    quantifier,
  );

  quantifierHandler.minCount =
    quantifier.min === 0 ? undefined : quantifier.min;
  quantifierHandler.maxCount =
    quantifier.max === Infinity ? undefined : quantifier.max;
  quantifierHandler.maxOrMinCount =
    quantifierHandler.minCount !== undefined ||
    quantifierHandler.maxCount !== undefined;

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
  );
};
