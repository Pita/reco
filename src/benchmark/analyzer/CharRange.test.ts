import { RegExpParser, Character, Set } from 'regexp-to-ast';
import { CharRange } from './CharRange';

const createRegexRange = (regex: string) => {
  const regexpParser = new RegExpParser();
  const pattern = regexpParser.pattern(regex);
  return pattern.value.value[0].value[0];
};

describe('CharRange', () => {
  describe('fromCharachter', () => {
    test('can add a single charachter', () => {
      const char = createRegexRange('/a/') as Character;
      const charRange = CharRange.fromCharachter(char);

      expect(charRange.toJSON()).toEqual({ complement: false, chars: [97] });
    });
  });

  describe('fromSet', () => {
    test('can take a single inclusive set', () => {
      const set = createRegexRange('/[0-9a]/') as Set;
      const charRange = CharRange.fromSet(set);

      expect(charRange.toJSON()).toEqual({
        complement: false,
        chars: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97],
      });
    });

    test('can take a single exclusive set', () => {
      const set = createRegexRange('/[^0-9a-c]/') as Set;
      const charRange = CharRange.fromSet(set);

      expect(charRange.toJSON()).toEqual({
        complement: true,
        chars: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99],
      });
    });
  });

  describe('hasOverlap', () => {
    test('can recognize overlap between two inclusive', () => {
      const set1 = CharRange.fromSet(createRegexRange('/[ac]/') as Set);
      const set2 = CharRange.fromSet(createRegexRange('/[a-z]/') as Set);

      expect(set1.hasOverlap(set2)).toBe(true);
      expect(set2.hasOverlap(set1)).toBe(true);
    });

    test('can recognize non overlap between two inclusive', () => {
      const set1 = CharRange.fromSet(createRegexRange('/[0-9]/') as Set);
      const set2 = CharRange.fromSet(createRegexRange('/[a-z]/') as Set);

      expect(set1.hasOverlap(set2)).toBe(false);
      expect(set2.hasOverlap(set1)).toBe(false);
    });

    test('can recognize non overlap between inclusive & exclusive', () => {
      const set1 = CharRange.fromSet(createRegexRange('/[^b]/') as Set);
      const set2 = CharRange.fromSet(createRegexRange('/[b]/') as Set);

      expect(set1.hasOverlap(set2)).toBe(false);
      expect(set2.hasOverlap(set1)).toBe(false);
    });

    test('can recognize overlap between inclusive & exclusive', () => {
      const set1 = CharRange.fromSet(createRegexRange('/[^b]/') as Set);
      const set2 = CharRange.fromSet(createRegexRange('/[bc]/') as Set);

      expect(set1.hasOverlap(set2)).toBe(true);
      expect(set2.hasOverlap(set1)).toBe(true);
    });

    test('can recognize overlap between two exclusive', () => {
      const set1 = CharRange.fromSet(createRegexRange('/[^b]/') as Set);
      const set2 = CharRange.fromSet(createRegexRange('/[^c]/') as Set);

      expect(set1.hasOverlap(set2)).toBe(true);
      expect(set2.hasOverlap(set1)).toBe(true);
    });
  });

  describe('smallestInCommon', () => {
    test('can recognize overlap between two inclusive', () => {
      const set1 = CharRange.fromSet(createRegexRange('/[ac]/') as Set);
      const set2 = CharRange.fromSet(createRegexRange('/[a-z]/') as Set);

      const result = {
        complement: false,
        chars: [97, 99],
      };

      expect(set1.smallestInCommon(set2).toJSON()).toStrictEqual(result);
      expect(set2.smallestInCommon(set1).toJSON()).toStrictEqual(result);
    });

    test('can recognize non overlap between two inclusive', () => {
      const set1 = CharRange.fromSet(createRegexRange('/[0-9]/') as Set);
      const set2 = CharRange.fromSet(createRegexRange('/[a-z]/') as Set);

      const result = {
        complement: false,
        chars: [],
      };

      expect(set1.smallestInCommon(set2).toJSON()).toStrictEqual(result);
      expect(set2.smallestInCommon(set1).toJSON()).toStrictEqual(result);
    });

    test('can recognize non overlap between inclusive & exclusive', () => {
      const set1 = CharRange.fromSet(createRegexRange('/[^b]/') as Set);
      const set2 = CharRange.fromSet(createRegexRange('/[b]/') as Set);

      const result = {
        complement: false,
        chars: [],
      };

      expect(set1.smallestInCommon(set2).toJSON()).toStrictEqual(result);
      expect(set2.smallestInCommon(set1).toJSON()).toStrictEqual(result);
    });

    test('can recognize overlap between inclusive & exclusive', () => {
      const set1 = CharRange.fromSet(createRegexRange('/[^b]/') as Set);
      const set2 = CharRange.fromSet(createRegexRange('/[bc]/') as Set);

      const result = {
        complement: false,
        chars: [99],
      };

      expect(set1.smallestInCommon(set2).toJSON()).toStrictEqual(result);
      expect(set2.smallestInCommon(set1).toJSON()).toStrictEqual(result);
    });

    test('can recognize overlap between two exclusive', () => {
      const set1 = CharRange.fromSet(createRegexRange('/[^b]/') as Set);
      const set2 = CharRange.fromSet(createRegexRange('/[^c]/') as Set);

      const result = {
        complement: true,
        chars: [98, 99],
      };

      expect(set1.smallestInCommon(set2).toJSON()).toStrictEqual(result);
      expect(set2.smallestInCommon(set1).toJSON()).toStrictEqual(result);
    });
  });

  // smallest in common
  // ab <-> [a-z] -> ab
  // ^b <-> b -> nada
  // ^b <-> ^c -> everything except b & c
});
