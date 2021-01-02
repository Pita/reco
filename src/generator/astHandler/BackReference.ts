import { AST, visitRegExpAST } from 'regexpp';
import { Collector } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from 'regexpp/ast';
import { CharRange } from '../CharRange';
import { handleCapturingGroup } from './CapturingGroup';

const findReferencedGroupAST = (
  groupIndex: number,
  literal: AST.RegExpLiteral,
) => {
  let groups: AST.CapturingGroup[] = [];
  visitRegExpAST(literal, {
    onCapturingGroupEnter: (group) => {
      groups.push(group);
    },
  });

  groups = groups.sort((a, b) => a.start - b.start);
  return groups[groupIndex - 1];
};

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

  const capturingGroup = findReferencedGroupAST(backReferenceRef, literal);
  const {
    firstCharRange,
    minCharLength,
    maxCharLength,
  } = analyzeReferencedGroupAST(
    collector,
    capturingGroup,
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
