import { RegExpParser } from 'regexpp';
import { dfaAnalyzeElement } from '../dfaAnalyze';

describe('overlyComplexBranchingError', () => {
  test('gets thrown when branching is too hard', () => {
    const literal = new RegExpParser().parseLiteral('/a*(b|c|d|e)/');
    const result = dfaAnalyzeElement(
      [literal.pattern.alternatives[0]],
      literal,
      100,
    );

    expect(result).toEqual(null);
  });
});
