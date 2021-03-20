import { AST, visitRegExpAST } from 'regexpp';

export const countGroups = (element: AST.Node): number => {
  let groupCount = 0;
  visitRegExpAST(element, {
    onCapturingGroupEnter: () => {
      groupCount++;
    },
  });

  return groupCount;
};
