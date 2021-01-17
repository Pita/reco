import { AST } from 'regexpp';
import { Collector } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from 'regexpp/ast';
import { handleCapturingGroup } from './CapturingGroup';

const analyzeReferencedGroupAST = (
  collector: Collector,
  capturingGroup: AST.CapturingGroup,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
) => {
  const fakeCollector = collector.fakeCollector();
  const groupFiber = handleCapturingGroup(
    capturingGroup,
    fakeCollector,
    fakeCollector.createFinalFiber(currentFiber.meta.firstCharRange),
    flags,
    literal,
  );

  const { firstCharRange, minCharLength, maxCharLength } = groupFiber.meta;

  return { firstCharRange, minCharLength, maxCharLength };
};

export const handleBackReference = (
  backreference: AST.Backreference,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
): FiberTemplateDefinition => {
  const backReferenceRef = backreference.ref;
  if (typeof backReferenceRef === 'string') {
    throw new Error('No supported for named backreferences yet');
  }

  const {
    firstCharRange,
    minCharLength,
    maxCharLength,
  } = analyzeReferencedGroupAST(
    collector,
    backreference.resolved,
    currentFiber,
    flags,
    literal,
  );

  return collector.addAtom(
    currentFiber,
    {
      type: 'groupBackReference',
      ast: backreference,
      data: {
        groupIndex: backReferenceRef - 1,
      },
    },
    firstCharRange,
    minCharLength,
    maxCharLength,
  );
};
