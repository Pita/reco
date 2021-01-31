import { CharRange } from '../../generator/CharRange';
import { RegExpParser } from 'regexpp';
import { dfaAnalyzeElement } from '../dfaAnalyze';
import { CharRangeSequence } from '../CharRangeSequence';

describe('handleAlternative', () => {
  test('can handle a very simple regex', () => {
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
        astStarts: [1, 2, 3],
      }),
    ].map((element) => element.toJSON());

    const literal = new RegExpParser().parseLiteral('/abc/');
    const result = dfaAnalyzeElement(
      [literal.pattern.alternatives[0]],
      literal,
      10,
    );
    const resultSerialized = result!.toJSON();

    expect(resultSerialized).toEqual(expected);
  });
});
