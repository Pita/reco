import { RegExpParser, Character, Set } from 'regexp-to-ast';
import { CharRange } from './CharRange';

const createFromSet = (regex: string) => {
  const regexpParser = new RegExpParser();
  const pattern = regexpParser.pattern(regex);
  const regexSet = pattern.value.value[0].value[0] as Set;
  return CharRange.fromSet(regexSet, pattern.flags.ignoreCase);
};

const createFromChar = (regex: string) => {
  const regexpParser = new RegExpParser();
  const pattern = regexpParser.pattern(regex);
  const regexSet = pattern.value.value[0].value[0] as Character;
  return CharRange.fromCharachter(regexSet, pattern.flags.ignoreCase);
};

describe('CharRange', () => {
  describe('fromCharachter', () => {
    test('can add a single charachter', () => {
      const charRange = createFromChar('/a/');

      expect(charRange.toJSON()).toEqual({ complement: false, chars: [97] });
    });

    test('adds two charachters when ignoreCase is set', () => {
      const charRange = createFromChar('/a/i');

      expect(charRange.toJSON()).toEqual({
        complement: false,
        chars: [65, 97],
      });
    });
  });

  describe('fromSet', () => {
    test('can take a single inclusive set', () => {
      const charRange = createFromSet('/[0-9a]/');

      expect(charRange.toJSON()).toEqual({
        complement: false,
        chars: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97],
      });
    });

    test('can take a single inclusive set with ignoreCase', () => {
      const charRange = createFromSet('/[0-9a]/i');

      expect(charRange.toJSON()).toEqual({
        complement: false,
        chars: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 97],
      });
    });

    test('can take a single exclusive set', () => {
      const charRange = createFromSet('/[^0-9a-c]/');

      expect(charRange.toJSON()).toEqual({
        complement: true,
        chars: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99],
      });
    });

    test('can take a single exclusive set with ignoreCase', () => {
      const charRange = createFromSet('/[^0-9a-c]/i');

      expect(charRange.toJSON()).toEqual({
        complement: true,
        chars: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 97, 98, 99],
      });
    });
  });

  describe('hasOverlap', () => {
    test('can recognize overlap between two inclusive', () => {
      const set1 = createFromSet('/[ac]/');
      const set2 = createFromSet('/[a-z]/');

      expect(set1.hasOverlap(set2)).toBe(true);
      expect(set2.hasOverlap(set1)).toBe(true);
    });

    test('can recognize non overlap between two inclusive', () => {
      const set1 = createFromSet('/[0-9]/');
      const set2 = createFromSet('/[a-z]/');

      expect(set1.hasOverlap(set2)).toBe(false);
      expect(set2.hasOverlap(set1)).toBe(false);
    });

    test('can recognize non overlap between inclusive & exclusive', () => {
      const set1 = createFromSet('/[^b]/');
      const set2 = createFromSet('/[b]/');

      expect(set1.hasOverlap(set2)).toBe(false);
      expect(set2.hasOverlap(set1)).toBe(false);
    });

    test('can recognize overlap between inclusive & exclusive', () => {
      const set1 = createFromSet('/[^b]/');
      const set2 = createFromSet('/[bc]/');

      expect(set1.hasOverlap(set2)).toBe(true);
      expect(set2.hasOverlap(set1)).toBe(true);
    });

    test('can recognize overlap between two exclusive', () => {
      const set1 = createFromSet('/[^b]/');
      const set2 = createFromSet('/[^c]/');

      expect(set1.hasOverlap(set2)).toBe(true);
      expect(set2.hasOverlap(set1)).toBe(true);
    });
  });

  describe('smallestInCommon', () => {
    test('can recognize smallest in common between two inclusive', () => {
      const set1 = createFromSet('/[ac]/');
      const set2 = createFromSet('/[a-z]/');

      const result = {
        complement: false,
        chars: [97, 99],
      };

      expect(set1.smallestInCommon(set2).toJSON()).toStrictEqual(result);
      expect(set2.smallestInCommon(set1).toJSON()).toStrictEqual(result);
    });

    test('can recognize smallest in common between two inclusive', () => {
      const set1 = createFromSet('/[0-9]/');
      const set2 = createFromSet('/[a-z]/');

      const result = {
        complement: false,
        chars: [],
      };

      expect(set1.smallestInCommon(set2).toJSON()).toStrictEqual(result);
      expect(set2.smallestInCommon(set1).toJSON()).toStrictEqual(result);
    });

    test('can recognize smallest in common between inclusive & exclusive', () => {
      const set1 = createFromSet('/[^b]/');
      const set2 = createFromSet('/[b]/');

      const result = {
        complement: false,
        chars: [],
      };

      expect(set1.smallestInCommon(set2).toJSON()).toStrictEqual(result);
      expect(set2.smallestInCommon(set1).toJSON()).toStrictEqual(result);
    });

    test('can recognize smallest in common between inclusive & exclusive', () => {
      const set1 = createFromSet('/[^b]/');
      const set2 = createFromSet('/[bc]/');

      const result = {
        complement: false,
        chars: [99],
      };

      expect(set1.smallestInCommon(set2).toJSON()).toStrictEqual(result);
      expect(set2.smallestInCommon(set1).toJSON()).toStrictEqual(result);
    });

    test('can recognize smallest in common between two exclusive', () => {
      const set1 = createFromSet('/[^b]/');
      const set2 = createFromSet('/[^c]/');

      const result = {
        complement: true,
        chars: [98, 99],
      };

      expect(set1.smallestInCommon(set2).toJSON()).toStrictEqual(result);
      expect(set2.smallestInCommon(set1).toJSON()).toStrictEqual(result);
    });
  });

  describe('union', () => {
    test('can create union between two inclusive', () => {
      const set1 = createFromSet('/[ac]/');
      const set2 = createFromSet('/[a-z]/');

      // a - z
      let chars = [];
      for (let i = 97; i <= 122; i++) {
        chars.push(i);
      }
      chars = chars.sort();

      const result = {
        complement: false,
        chars,
      };

      expect(set1.union(set2).toJSON()).toStrictEqual(result);
      expect(set2.union(set1).toJSON()).toStrictEqual(result);
    });

    test('can create union between two inclusive', () => {
      const set1 = createFromSet('/[0-9]/');
      const set2 = createFromSet('/[a-z]/');

      // a - z
      let chars = [];
      for (let i = 48; i <= 57; i++) {
        chars.push(i);
      }
      // 0-9
      for (let i = 97; i <= 122; i++) {
        chars.push(i);
      }
      chars = chars.sort();

      const result = {
        complement: false,
        chars,
      };

      expect(set1.union(set2).toJSON()).toStrictEqual(result);
      expect(set2.union(set1).toJSON()).toStrictEqual(result);
    });

    test('can create union between inclusive & exclusive', () => {
      const set1 = createFromSet('/[^bc]/');
      const set2 = createFromSet('/[b]/');

      const result = {
        complement: true,
        chars: [99],
      };

      expect(set1.union(set2).toJSON()).toStrictEqual(result);
      expect(set2.union(set1).toJSON()).toStrictEqual(result);
    });

    test('can create union between inclusive & exclusive', () => {
      const set1 = createFromSet('/[^bd]/');
      const set2 = createFromSet('/[bc]/');

      const result = {
        complement: true,
        chars: [100],
      };

      expect(set1.union(set2).toJSON()).toStrictEqual(result);
      expect(set2.union(set1).toJSON()).toStrictEqual(result);
    });

    test('can create union between two exclusive', () => {
      const set1 = createFromSet('/[^bc]/');
      const set2 = createFromSet('/[^c]/');

      const result = {
        complement: true,
        chars: [99],
      };

      expect(set1.union(set2).toJSON()).toStrictEqual(result);
      expect(set2.union(set1).toJSON()).toStrictEqual(result);
    });
  });
});
