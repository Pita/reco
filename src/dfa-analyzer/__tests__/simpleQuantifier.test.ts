import { handleAlternative } from '../Alternative';
import { CharRange } from '../../generator/CharRange';
import { RegExpParser } from 'regexpp';
import { dfaAnalyzeAlternative } from '../dfaAnalyze';
import { CharRangeSequence } from '../CharRangeSequence';

describe('handleAlternative', () => {
  test('can handle a simple quantifier', () => {
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
      new CharRangeSequence([
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
      ]),
      new CharRangeSequence([
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
      ]),
    ].map((element) => element.toJSON());

    const literal = new RegExpParser().parseLiteral('/a{1,3}bc/');
    const result = dfaAnalyzeAlternative(
      literal.pattern.alternatives[0],
      literal,
      10,
    );
    const resultSerialized = result.map((element) => {
      return element.toJSON();
    });

    console.log('length', resultSerialized.length);
    console.log(JSON.stringify(resultSerialized, null, 2));

    expect(resultSerialized).toEqual(expected);
  });
});
