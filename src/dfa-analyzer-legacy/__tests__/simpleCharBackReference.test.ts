import { handleAlternative } from '../Alternative';
import { CharRange } from '../../generator/CharRange';
import { RegExpParser } from 'regexpp';
import { dfaAnalyzeAlternative } from '../dfaAnalyze';

describe('handleAlternative', () => {
  test('can handle a very simple regex', () => {
    const expected = [
      CharRange.create(['a', 'b'], {
        negate: false,
        ignoreCase: false,
      }),
      CharRange.create(['-'], {
        negate: false,
        ignoreCase: false,
      }),
      CharRange.create(['a', 'b'], {
        negate: false,
        ignoreCase: false,
      }),
    ].map((element) => element.toJSON());

    const literal = new RegExpParser().parseLiteral('/(a|b)-\\1/');
    const result = dfaAnalyzeAlternative(
      literal.pattern.alternatives[0],
      literal,
      10,
    );

    const resultSerialized = result.after.map((element) => {
      return element.toJSON();
    });

    expect(resultSerialized).toEqual(expected);
  });
});
