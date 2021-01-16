import { handleAlternative } from '../Alternative';
import { CharRange } from '../../generator/CharRange';
import { RegExpParser } from 'regexpp';

describe('handleAlternative', () => {
  test('can handle a very simple regex', () => {
    const expected = [
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
    ].map((element) => element.toJSON());

    const literal = new RegExpParser().parseLiteral('/abc$/m');
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
