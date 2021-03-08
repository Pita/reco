import { AST } from 'regexpp';
import { CollectedTemplateValues } from '../CollectedTemplateValues';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from 'regexpp/ast';
import { handleCapturingGroup } from './CapturingGroup';

const analyzeReferencedGroupAST = (
  templateValues: CollectedTemplateValues,
  capturingGroup: AST.CapturingGroup,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
) => {
  const fakeCollector = fakeCollector(templateValues);
  const groupFiber = handleCapturingGroup(
    capturingGroup,
    fakeCollector,
    fakeCollector.createFinalFiber(currentFiber.meta.path),
    flags,
    literal,
  );

  const { minCharLength, maxCharLength } = groupFiber.meta;

  return { minCharLength, maxCharLength };
};

export const handleBackReference = (
  backreference: AST.Backreference,
  templateValues: CollectedTemplateValues,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
): FiberTemplateDefinition => {
  const backReferenceRef = backreference.ref;
  if (typeof backReferenceRef === 'string') {
    throw new Error('No supported for named backreferences yet');
  }

  const { minCharLength, maxCharLength } = analyzeReferencedGroupAST(
    templateValues,
    backreference.resolved,
    currentFiber,
    flags,
    literal,
  );

  return templateValues.addAtom(
    currentFiber,
    {
      type: 'groupBackReference',
      astLocation: backreference,
      data: {
        groupIndex: backReferenceRef - 1,
      },
    },
    minCharLength,
    maxCharLength,
    backreference.resolved,
  );
};
