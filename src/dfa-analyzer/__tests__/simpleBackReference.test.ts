import { CharRange } from '../../generator/CharRange';
import { RegExpParser } from 'regexpp';
import { dfaAnalyzeElement } from '../dfaAnalyze';

describe('handleAlternative', () => {
  test('can handle a very simple regex', () => {
    const expected = [
      {
        charRanges: [
          CharRange.create(['a'], {
            negate: false,
            ignoreCase: false,
          }).toJSON(),
          CharRange.create(['b'], {
            negate: false,
            ignoreCase: false,
          }).toJSON(),
          CharRange.create(['c'], {
            negate: false,
            ignoreCase: false,
          }).toJSON(),
          CharRange.create(['b'], {
            negate: false,
            ignoreCase: false,
          }).toJSON(),
        ],
      },
    ];

    const literal = new RegExpParser().parseLiteral('/a(b)c\\1/');
    const result = dfaAnalyzeElement(
      [literal.pattern.alternatives[0]],
      literal,
      10,
    );
    const resultSerialized = result?.toJSON().map((result) => ({
      charRanges: result.charRanges,
    }));

    expect(resultSerialized).toEqual(expected);
  });
});
