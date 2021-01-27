import { CharRange } from '../../generator/CharRange';
import { RegExpParser } from 'regexpp';
import { dfaAnalyzeAlternative } from '../dfaAnalyze';
import { CharRangeSequence } from '../CharRangeSequence';

describe('handleAlternative', () => {
  test('can handle a very simple regex', () => {
    const expected = [
      new CharRangeSequence([
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
      ]),
    ].map((element) => element.toJSON());

    const literal = new RegExpParser().parseLiteral('/abc/');
    const result = dfaAnalyzeAlternative(
      literal.pattern.alternatives[0],
      literal,
      10,
    );
    const resultSerialized = result!.map((element) => {
      return element.toJSON();
    });

    expect(resultSerialized).toEqual(expected);
  });
});
