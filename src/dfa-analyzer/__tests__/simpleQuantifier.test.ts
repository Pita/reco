import { CharRange } from '../../generator/CharRange';
import { RegExpParser } from 'regexpp';
import { dfaAnalyzeElement } from '../dfaAnalyze';
import { CharRangeSequence } from '../CharRangeSequence';

describe('handleAlternative', () => {
  test('can handle a simple quantifier', () => {
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
          CharRange.create(['c'], {
            negate: false,
            ignoreCase: false,
          }),
        ],
        astStarts: [1, 7, 8],
      }),
      new CharRangeSequence({
        charRanges: [
          CharRange.create(['a'], {
            negate: false,
            ignoreCase: false,
          }),
          CharRange.create(['a'], {
            negate: false,
            ignoreCase: false,
          }),
          CharRange.create(['b'], {
            negate: false,
            ignoreCase: false,
          }),
          CharRange.create(['c'], {
            negate: false,
            ignoreCase: false,
          }),
        ],
        astStarts: [1, 1, 7, 8],
      }),
      new CharRangeSequence({
        charRanges: [
          CharRange.create(['a'], {
            negate: false,
            ignoreCase: false,
          }),
          CharRange.create(['a'], {
            negate: false,
            ignoreCase: false,
          }),
          CharRange.create(['a'], {
            negate: false,
            ignoreCase: false,
          }),
          CharRange.create(['b'], {
            negate: false,
            ignoreCase: false,
          }),
          CharRange.create(['c'], {
            negate: false,
            ignoreCase: false,
          }),
        ],
        astStarts: [1, 1, 1, 7, 8],
      }),
    ].map((element) => element.toJSON());

    const literal = new RegExpParser().parseLiteral('/a{1,3}bc/');
    const result = dfaAnalyzeElement(
      [literal.pattern.alternatives[0]],
      literal,
      10,
    );
    const resultSerialized = result!.toJSON();

    expect(resultSerialized).toEqual(expected);
  });
});
