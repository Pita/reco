import { RegExpParser } from 'regexpp';
import { handleDisjunction } from './Disjunction';

export const simplifyRegex = (originalRegex: string): string => {
  let previousRegex = originalRegex;
  let currentRegex = originalRegex;
  let firstPass = true;
  do {
    const literal = new RegExpParser().parseLiteral(currentRegex);
    const disjunction = handleDisjunction(literal.pattern.alternatives, {
      firstPass,
      literal,
    });
    previousRegex = currentRegex;
    currentRegex = `/${disjunction}/${literal.flags.raw}`;

    firstPass = false;
  } while (previousRegex !== currentRegex);

  return currentRegex;
};
