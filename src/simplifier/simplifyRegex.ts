import { RegExpParser } from 'regexpp';
import { handleDisjunction } from './Disjunction';

export const simplifyRegex = (originalRegex: string) => {
  let previousRegex = originalRegex;
  let currentRegex = originalRegex;
  let firstPass = true;
  do {
    const previousRegexParsed = new RegExpParser().parseLiteral(currentRegex);
    const disjunction = handleDisjunction(
      previousRegexParsed.pattern.alternatives,
      { firstPass },
    );
    previousRegex = currentRegex;
    currentRegex = `/${disjunction}/${previousRegexParsed.flags.raw}`;
    firstPass = false;
  } while (previousRegex !== currentRegex);

  return currentRegex;
};
