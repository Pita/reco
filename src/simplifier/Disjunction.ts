import { AST } from 'regexpp';
import { handleAlternative } from './Alternative';
import { SimplifierHandler } from './types';

export const handleDisjunction: SimplifierHandler<AST.Alternative[]> = (
  alternatives,
  options,
) => {
  if (alternatives.length === 1) {
    return handleAlternative(alternatives[0], options);
  }

  let preAlternatives = '';

  while (true) {
    const needle = alternatives[0].elements[0];

    if (!needle || needle.type === 'CapturingGroup') {
      break;
    }

    const allAlternativesHaveNeedle = alternatives.every(
      (alternative) =>
        alternative.elements[0].raw === needle.raw &&
        alternative.elements[0].type === needle.type,
    );

    if (allAlternativesHaveNeedle) {
      alternatives.forEach((alternative) => alternative.elements.shift());

      preAlternatives += needle.raw;
    } else {
      break;
    }
  }

  const alternativesString = alternatives
    .map((alternative) => handleAlternative(alternative, options))
    .join('|');

  if (preAlternatives) {
    return `${preAlternatives}(?:${alternativesString})`;
  } else {
    return alternativesString;
  }
};
