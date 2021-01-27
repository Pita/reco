import { CharRange } from '../../generator/CharRange';
import { RegExpParser } from 'regexpp';
import { dfaAnalyzeElement } from '../dfaAnalyze';
import { CharRangeSequence } from '../CharRangeSequence';

describe('handleAlternative', () => {
  test('can handle a simle assertion', () => {
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

    const literal = new RegExpParser().parseLiteral('/ab\\bc/');
    const result = dfaAnalyzeElement(
      [literal.pattern.alternatives[0]],
      literal,
      10,
    );
    const resultSerialized = result!.toJSON();

    expect(resultSerialized).toEqual(expected);
  });
});
