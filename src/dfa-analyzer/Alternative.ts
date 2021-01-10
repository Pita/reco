import { max } from 'lodash';
import { AST } from 'regexpp';
import { Flags } from 'regexpp/ast';
import { CharRange } from '../generator/CharRange';
import { handleElement } from './Element';

export const handleAlternative = (
  alternative: AST.Alternative,
  flags: Flags,
  currentLength: number,
  maxLength: number,
  path: AST.Element[],
): CharRange[] => {
  if (alternative.elements.length === 0) {
    return [];
  }

  const newPath = path.concat(alternative.elements.slice(1));
  return handleElement(
    alternative.elements[0],
    flags,
    currentLength,
    maxLength,
    newPath,
  );
};
