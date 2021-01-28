import { RegExpParser } from 'regexpp';
import { handleDisjunction } from './Disjunction';

export const simplifyRegex = (originalRegex: string) => {
  let previousRegex = originalRegex;
  let currentRegex = originalRegex;
  do {
    const previousRegexParsed = new RegExpParser().parseLiteral(currentRegex);
    const disjunction = handleDisjunction(
      previousRegexParsed.pattern.alternatives,
      {
        literal: previousRegexParsed,
      },
    );
    previousRegex = currentRegex;
    currentRegex = `/${disjunction}/${previousRegexParsed.flags.raw}`;
  } while (previousRegex !== currentRegex);

  return currentRegex;
};
