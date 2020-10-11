import { AST } from 'regexpp';
import { Collector, mergeGroupsOfFibers } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator_v4';
import { handleElement } from './Element';

export const handleQuantifier = (
  quantifier: AST.Quantifier,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  const wrappedHandler = handleElement(
    quantifier.element,
    collector,
    collector.createCallbackFiber(),
    flags,
  );

  const minCount = quantifier.min === 0 ? undefined : quantifier.min;
  const maxCount = quantifier.max === Infinity ? undefined : quantifier.max;
  const maxOrMinCount = minCount !== undefined || maxCount !== undefined;

  return collector.addAtom(
    collector.createForkingFiber(
      currentFiber,
      mergeGroupsOfFibers([wrappedHandler, currentFiber]),
    ),
    {
      type: quantifier.greedy ? 'greedyQuantifier' : 'lazyQuantifier',
      data: {
        minCount,
        maxCount,
        maxOrMinCount,
        wrappedHandler,
        followUp: currentFiber,
      },
      ast: quantifier,
    },
  );
};
