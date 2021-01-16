import { handleAlternative } from '../Alternative';
import { CharRange } from '../../generator/CharRange';
import { RegExpParser } from 'regexpp';

describe('handleAlternative', () => {
  test('can handle a simple lookahead', () => {
    const expected = [
      CharRange.create(['a'], {
        negate: true,
        ignoreCase: false,
      }),
      CharRange.create(['b'], {
        negate: true,
        ignoreCase: false,
      }),
    ].map((element) => element.toJSON());

    const literal = new RegExpParser().parseLiteral('/(?!ab)[^]{2}/');
    const result = handleAlternative(
      literal.pattern.alternatives[0],
      literal.flags,
      0,
      10,
      [],
    );
    const resultSerialized = result.map((element) => {
      return element.toJSON();
    });

    expect(resultSerialized).toEqual(expected);
  });
});
