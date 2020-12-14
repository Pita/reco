import { CharRange } from './CharRange';
import _ from 'lodash';

describe('CharRange', () => {
  describe('fromCharachter', () => {
    test('can add a single charachter', () => {
      const charRange = CharRange.create(['a'], {
        negate: false,
        ignoreCase: false,
      });

      expect(charRange.toJSON()).toEqual({ negate: false, chars: [97] });
    });

    test('adds two charachters when ignoreCase is set', () => {
      const charRange = CharRange.create(['a'], {
        negate: false,
        ignoreCase: true,
      });

      expect(charRange.toJSON()).toEqual({
        negate: false,
        chars: [65, 97],
      });
    });
  });

  describe('fromSet', () => {
    test('can take a single inclusive set', () => {
      const charRange = CharRange.create([{ from: '0', to: '9' }, 'a'], {
        negate: false,
        ignoreCase: false,
      });

      expect(charRange.toJSON()).toEqual({
        negate: false,
        chars: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97],
      });
    });

    test('can take a single inclusive set with ignoreCase', () => {
      const charRange = CharRange.create([{ from: '0', to: '9' }, 'a'], {
        negate: false,
        ignoreCase: true,
      });

      expect(charRange.toJSON()).toEqual({
        negate: false,
        chars: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 97],
      });
    });

    test('can take a single exclusive set', () => {
      const charRange = CharRange.create(
        [
          { from: '0', to: '9' },
          { from: 'a', to: 'c' },
        ],
        {
          negate: true,
          ignoreCase: false,
        },
      );

      expect(charRange.toJSON()).toEqual({
        negate: true,
        chars: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99],
      });
    });

    test('can take a single exclusive set with ignoreCase', () => {
      const charRange = CharRange.create(
        [
          { from: '0', to: '9' },
          { from: 'a', to: 'c' },
        ],
        {
          negate: true,
          ignoreCase: true,
        },
      );

      expect(charRange.toJSON()).toEqual({
        negate: true,
        chars: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 97, 98, 99],
      });
    });
  });

  describe('hasOverlap', () => {
    test('can recognize overlap between two inclusive', () => {
      const set1 = CharRange.create([{ from: 'a', to: 'c' }], {
        negate: false,
        ignoreCase: false,
      });
      const set2 = CharRange.create([{ from: 'a', to: 'z' }], {
        negate: false,
        ignoreCase: false,
      });

      expect(set1.hasOverlap(set2)).toBe(true);
      expect(set2.hasOverlap(set1)).toBe(true);
    });

    test('can recognize non overlap between two inclusive', () => {
      const set1 = CharRange.create([{ from: '0', to: '9' }], {
        negate: false,
        ignoreCase: false,
      });
      const set2 = CharRange.create([{ from: 'a', to: 'z' }], {
        negate: false,
        ignoreCase: false,
      });

      expect(set1.hasOverlap(set2)).toBe(false);
      expect(set2.hasOverlap(set1)).toBe(false);
    });

    test('can recognize non overlap between inclusive & exclusive', () => {
      const set1 = CharRange.create(['b'], {
        negate: true,
        ignoreCase: false,
      });
      const set2 = CharRange.create(['b'], {
        negate: false,
        ignoreCase: false,
      });

      expect(set1.hasOverlap(set2)).toBe(false);
      expect(set2.hasOverlap(set1)).toBe(false);
    });

    test('can recognize overlap between inclusive & exclusive', () => {
      const set1 = CharRange.create(['b'], {
        negate: true,
        ignoreCase: false,
      });
      const set2 = CharRange.create(['b', 'c'], {
        negate: false,
        ignoreCase: false,
      });

      expect(set1.hasOverlap(set2)).toBe(true);
      expect(set2.hasOverlap(set1)).toBe(true);
    });

    test('can recognize overlap between two exclusive', () => {
      const set1 = CharRange.create(['b'], {
        negate: true,
        ignoreCase: false,
      });
      const set2 = CharRange.create(['c'], {
        negate: true,
        ignoreCase: false,
      });

      expect(set1.hasOverlap(set2)).toBe(true);
      expect(set2.hasOverlap(set1)).toBe(true);
    });
  });

  describe('smallestInCommon', () => {
    test('can recognize smallest in common between two inclusive', () => {
      const set1 = CharRange.create(['a', 'c'], {
        negate: false,
        ignoreCase: false,
      });
      const set2 = CharRange.create([{ from: 'a', to: 'z' }], {
        negate: false,
        ignoreCase: false,
      });

      const result = {
        negate: false,
        chars: [97, 99],
      };

      expect(set1.smallestInCommon(set2).toJSON()).toStrictEqual(result);
      expect(set2.smallestInCommon(set1).toJSON()).toStrictEqual(result);
    });

    test('can recognize smallest in common between two inclusive', () => {
      const set1 = CharRange.create([{ from: '0', to: '9' }], {
        negate: false,
        ignoreCase: false,
      });
      const set2 = CharRange.create([{ from: 'a', to: 'z' }], {
        negate: false,
        ignoreCase: false,
      });

      const result = {
        negate: false,
        chars: [],
      };

      expect(set1.smallestInCommon(set2).toJSON()).toStrictEqual(result);
      expect(set2.smallestInCommon(set1).toJSON()).toStrictEqual(result);
    });

    test('can recognize smallest in common between inclusive & exclusive', () => {
      const set1 = CharRange.create(['b'], {
        negate: true,
        ignoreCase: false,
      });
      const set2 = CharRange.create(['b'], {
        negate: false,
        ignoreCase: false,
      });

      const result = {
        negate: false,
        chars: [],
      };

      expect(set1.smallestInCommon(set2).toJSON()).toStrictEqual(result);
      expect(set2.smallestInCommon(set1).toJSON()).toStrictEqual(result);
    });

    test('can recognize smallest in common between inclusive & exclusive', () => {
      const set1 = CharRange.create(['b'], {
        negate: true,
        ignoreCase: false,
      });
      const set2 = CharRange.create(['b', 'c'], {
        negate: false,
        ignoreCase: false,
      });

      const result = {
        negate: false,
        chars: [99],
      };

      expect(set1.smallestInCommon(set2).toJSON()).toStrictEqual(result);
      expect(set2.smallestInCommon(set1).toJSON()).toStrictEqual(result);
    });

    test('can recognize smallest in common between two exclusive', () => {
      const set1 = CharRange.create(['b'], {
        negate: true,
        ignoreCase: false,
      });
      const set2 = CharRange.create(['c'], {
        negate: true,
        ignoreCase: false,
      });

      const result = {
        negate: true,
        chars: [98, 99],
      };

      expect(set1.smallestInCommon(set2).toJSON()).toStrictEqual(result);
      expect(set2.smallestInCommon(set1).toJSON()).toStrictEqual(result);
    });
  });

  describe('union', () => {
    test('can create union between two inclusive', () => {
      const set1 = CharRange.create(['a', 'c'], {
        negate: false,
        ignoreCase: false,
      });
      const set2 = CharRange.create([{ from: 'a', to: 'z' }], {
        negate: false,
        ignoreCase: false,
      });

      // a - z
      const chars = [];
      for (let i = 97; i <= 122; i++) {
        chars.push(i);
      }

      const result = {
        negate: false,
        chars,
      };

      expect(set1.union(set2).toJSON()).toStrictEqual(result);
      expect(set2.union(set1).toJSON()).toStrictEqual(result);
    });

    test('can create union between two inclusive', () => {
      const set1 = CharRange.create([{ from: '0', to: '9' }], {
        negate: false,
        ignoreCase: false,
      });
      const set2 = CharRange.create([{ from: 'a', to: 'z' }], {
        negate: false,
        ignoreCase: false,
      });

      // a - z
      const chars = [];
      for (let i = 48; i <= 57; i++) {
        chars.push(i);
      }
      // 0-9
      for (let i = 97; i <= 122; i++) {
        chars.push(i);
      }

      const result = {
        negate: false,
        chars,
      };

      expect(set1.union(set2).toJSON()).toStrictEqual(result);
      expect(set2.union(set1).toJSON()).toStrictEqual(result);
    });

    test('can create union between inclusive & exclusive', () => {
      const set1 = CharRange.create(['b', 'c'], {
        negate: true,
        ignoreCase: false,
      });
      const set2 = CharRange.create(['b'], {
        negate: false,
        ignoreCase: false,
      });

      const result = {
        negate: true,
        chars: [99],
      };

      expect(set1.union(set2).toJSON()).toStrictEqual(result);
      expect(set2.union(set1).toJSON()).toStrictEqual(result);
    });

    test('can create union between inclusive & exclusive', () => {
      const set1 = CharRange.create(['b', 'd'], {
        negate: true,
        ignoreCase: false,
      });
      const set2 = CharRange.create(['b', 'c'], {
        negate: false,
        ignoreCase: false,
      });

      const result = {
        negate: true,
        chars: [100],
      };

      expect(set1.union(set2).toJSON()).toStrictEqual(result);
      expect(set2.union(set1).toJSON()).toStrictEqual(result);
    });

    test('can create union between two exclusive', () => {
      const set1 = CharRange.create(['b', 'c'], {
        negate: true,
        ignoreCase: false,
      });
      const set2 = CharRange.create(['c'], {
        negate: true,
        ignoreCase: false,
      });

      const result = {
        negate: true,
        chars: [99],
      };

      expect(set1.union(set2).toJSON()).toStrictEqual(result);
      expect(set2.union(set1).toJSON()).toStrictEqual(result);
    });
  });
});
