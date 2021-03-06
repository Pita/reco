import { CharRange } from '../../generator/CharRange';
import { RegExpParser } from 'regexpp';
import { dfaAnalyzeElement } from '../dfaAnalyze';
import { CharRangeSequence } from '../CharRangeSequence';

describe('handleAlternative', () => {
  test('can handle a simple disjunction', () => {
    const expected = [
      new CharRangeSequence({
        charRanges: [
          CharRange.create(['a'], {
            negate: false,
            ignoreCase: false,
          }),
          CharRange.create(['b'], {
            negate: false,
            ignoreCase: false,
          }),
          CharRange.create(['e'], {
            negate: false,
            ignoreCase: false,
          }),
        ],
        astStarts: [1, 3, 8],
      }),
      new CharRangeSequence({
        charRanges: [
          CharRange.create(['a'], {
            negate: false,
            ignoreCase: false,
          }),
          CharRange.create(['c'], {
            negate: false,
            ignoreCase: false,
          }),
          CharRange.create(['d'], {
            negate: false,
            ignoreCase: false,
          }),
          CharRange.create(['e'], {
            negate: false,
            ignoreCase: false,
          }),
        ],
        astStarts: [1, 5, 6, 8],
      }),
    ].map((element) => element.toJSON());

    const literal = new RegExpParser().parseLiteral('/a(b|cd)e/');
    const result = dfaAnalyzeElement(
      [literal.pattern.alternatives[0]],
      literal,
      10,
    );
    const resultSerialized = result!.toJSON();

    expect(resultSerialized).toEqual(expected);
  });
});
