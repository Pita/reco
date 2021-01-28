import { RegExpParser } from 'regexpp';
import { handleDisjunction } from './Disjunction';

export const simplifyRegex = (originalRegex: string) => {
  console.log('originalRegex', originalRegex);
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
    console.log('simplified', currentRegex);

    firstPass = false;
  } while (previousRegex !== currentRegex);

  console.log();

  return currentRegex;
};
