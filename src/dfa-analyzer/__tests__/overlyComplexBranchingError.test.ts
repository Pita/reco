import { RegExpParser } from 'regexpp';
import { dfaAnalyzeAlternative } from '../dfaAnalyze';

describe('overlyComplexBranchingError', () => {
  test('gets thrown when branching is too hard', () => {
    const literal = new RegExpParser().parseLiteral('/a*(b|c|d|e)/');
    const result = dfaAnalyzeAlternative(
      literal.pattern.alternatives[0],
      literal,
      100,
    );

    expect(result).toEqual(null);
  });
});
