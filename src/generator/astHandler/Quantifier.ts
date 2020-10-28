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
  if (!quantifier.greedy) {
    throw new Error('Lazy quantifiers are temporarly not supported anymore');
  }

  // TODO: clean this mess up
  const {
    quantifierFinalFiber,
    greedyQuantifier,
  } = collector.createQuantifierFiberPair(currentFiber, quantifier);

  greedyQuantifier.minCount = quantifier.min === 0 ? undefined : quantifier.min;
  greedyQuantifier.maxCount =
    quantifier.max === Infinity ? undefined : quantifier.max;
  greedyQuantifier.maxOrMinCount =
    greedyQuantifier.minCount !== undefined ||
    greedyQuantifier.maxCount !== undefined;

  const wrappedHandler = handleElement(
    quantifier.element,
    collector,
    quantifierFinalFiber,
    flags,
  );
  greedyQuantifier.meta.groups = wrappedHandler.meta.groups.slice();
  greedyQuantifier.wrappedHandler = wrappedHandler;

  return collector.addAtom(
    collector.createForkingFiber(
      greedyQuantifier,
      greedyQuantifier.meta.groups,
    ),
    {
      type: 'greedyQuantifierStarter',
      data: {
        maxOrMinCount: greedyQuantifier.maxOrMinCount,
        functionName: greedyQuantifier.functionName,
      },
      ast: quantifier,
    },
  );
};
