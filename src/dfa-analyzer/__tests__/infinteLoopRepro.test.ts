import { RegExpParser } from 'regexpp';
import { dfaAnalyzeAlternative } from '../dfaAnalyze';

describe('handleAlternative', () => {
  test('doees not get caught in an infinite loop', () => {
    const literal = new RegExpParser().parseLiteral(
      '/(:[0-9a-fA-F]{1,4}){1,7}/',
    );
    dfaAnalyzeAlternative(literal.pattern.alternatives[0], literal, 10);
  });
});
