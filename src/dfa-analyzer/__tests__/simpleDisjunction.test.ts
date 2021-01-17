import { handleAlternative } from '../Alternative';
import { CharRange } from '../../generator/CharRange';
import { RegExpParser } from 'regexpp';

describe('handleAlternative', () => {
  test('can handle a simple disjunction', () => {
    const expected = [
      CharRange.create(['a'], {
        negate: false,
        ignoreCase: false,
      }),
      CharRange.create(['b', 'c'], {
        negate: false,
        ignoreCase: false,
      }),
      CharRange.create(['e', 'd'], {
        negate: false,
        ignoreCase: false,
      }),
      CharRange.create(['e'], {
        negate: false,
        ignoreCase: false,
      }),
    ].map((element) => element.toJSON());

    const literal = new RegExpParser().parseLiteral('/a(b|cd)e/');
    const result = handleAlternative(
      literal.pattern.alternatives[0],
      literal,
      literal.flags,
      0,
      10,
      [],
    );
    const resultSerialized = result.after.map((element) => {
      return element.toJSON();
    });

    expect(resultSerialized).toEqual(expected);
  });
});
