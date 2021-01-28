import { AST } from 'regexpp';

export const removeFromSide = (
  alternatives: AST.Alternative[],
  side: 'start' | 'end',
  typesAllowList: string[],
) => {
  let removed = '';

  while (true) {
    const needleIndex =
      side === 'start' ? 0 : alternatives[0].elements.length - 1;
    const needle = alternatives[0].elements[needleIndex];

    if (!needle || !typesAllowList.includes(needle.type)) {
      break;
    }

    const allAlternativesHaveNeedle = alternatives.every((alternative) => {
      const elementIndex =
        side === 'start' ? 0 : alternative.elements.length - 1;
      const element = alternative.elements[elementIndex];
      if (!element) {
        return false;
      }

      return element.raw === needle.raw && element.type === needle.type;
    });

    if (allAlternativesHaveNeedle) {
      alternatives.forEach((alternative) =>
        side === 'start'
          ? alternative.elements.shift()
          : alternative.elements.pop(),
      );

      removed =
        side === 'start'
          ? `${removed}${needle.raw}`
          : `${needle.raw}${removed}`;
    } else {
      break;
    }
  }

  return removed;
};
