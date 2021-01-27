import { AST } from 'regexpp';
import { handleAlternative } from './Alternative';
import { DFAHandler } from './types';
import * as _ from 'lodash';

export const handleDisjunction: DFAHandler<AST.Alternative[]> = (
  alternatives,
  options,
) => {
  if (alternatives.length === 1) {
    return handleAlternative(alternatives[0], options);
  }

  return _.flatten(
    alternatives.map((alternative) => handleAlternative(alternative, options)),
  );
};
