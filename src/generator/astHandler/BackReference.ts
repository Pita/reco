import { AST } from 'regexpp';
import { Collector } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from 'regexpp/ast';

export const handleBackReference = (
  backreference: AST.Backreference,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  const backReferenceRef = backreference.ref;
  if (typeof backReferenceRef === 'string') {
    throw new Error('No supported for named backreferences yet');
  }

  return collector.addAtom(currentFiber, {
    type: 'groupBackReference',
    ast: backreference,
    data: {
      startGroupMarkerIndex: (backReferenceRef - 1) * 2,
      endGroupMarkerIndex: (backReferenceRef - 1) * 2 + 1,
    },
  });
};
