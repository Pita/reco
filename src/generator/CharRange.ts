import * as _ from 'lodash/fp';
import { Flags } from 'regexpp/ast';
import { options } from 'yargs';

const normalizeUpperLowerCase = (
  char: number,
  ignoreCase: boolean,
): readonly number[] => {
  if (!ignoreCase) {
    return [char];
  }

  const str = String.fromCharCode(char);
  return _.uniq([
    str.toLowerCase().charCodeAt(0),
    str.toUpperCase().charCodeAt(0),
  ]);
};

const toCharCode = (element: string | number) => {
  if (typeof element === 'number') {
    return element;
  }
  if (element.length > 1) {
    throw new Error(`Invalid char length: ${element.length}: '${element}'`);
  }
  return element.charCodeAt(0);
};

class NumericSet {
  private readonly set: ReadonlySet<number>;

  private constructor(set: readonly number[]) {
    this.set = new Set(set);
  }

  static from(chars: readonly number[] | NumericSet): NumericSet {
    if (chars instanceof NumericSet) {
      return chars;
    }

    return new NumericSet(chars);
  }

  difference(other: NumericSet) {
    return new NumericSet(this.toArray().filter((num) => !other.set.has(num)));
  }

  union(other: NumericSet) {
    return new NumericSet([...this.set, ...other.set]);
  }

  intersection(other: NumericSet) {
    return new NumericSet(this.toArray().filter((num) => other.set.has(num)));
  }

  toArray(): readonly number[] {
    return Array.from(this.set);
  }

  size() {
    return this.set.size;
  }
}

export type UTF16UnitsCount = '1' | '2' | 'variable';

export class CharRange {
  private readonly chars: NumericSet;
  private readonly negate: boolean;

  constructor(options: {
    readonly chars: readonly number[] | NumericSet;
    readonly negate: boolean;
  }) {
    this.chars = NumericSet.from(options.chars);
    this.negate = options.negate;
  }

  static create(
    definitions: readonly (
      | number
      | string
      | { readonly from: string; readonly to: string }
      | { readonly from: number; readonly to: number }
    )[],
    options: { readonly ignoreCase: boolean; readonly negate: boolean },
  ): CharRange {
    const { ignoreCase, negate } = options;
    const chars = definitions.reduce((acc, definition) => {
      if (typeof definition === 'string' || typeof definition === 'number') {
        return [
          ...acc,
          ...normalizeUpperLowerCase(toCharCode(definition), ignoreCase),
        ];
      } else {
        const from = toCharCode(definition.from);
        const to = toCharCode(definition.to);

        return _.range(from, to + 1).reduce((acc, char) => {
          return [...acc, ...normalizeUpperLowerCase(char, ignoreCase)];
        }, acc);
      }
    }, [] as readonly number[]);

    return new CharRange({
      negate,
      chars,
    });
  }

  static createFromUnicodeArray(
    chars: readonly number[],
    options: { readonly negate: boolean },
  ): CharRange {
    return new CharRange({
      negate: options.negate,
      chars,
    });
  }

  static createEmptyRange(): CharRange {
    return new CharRange({
      chars: [],
      negate: false,
    });
  }

  static createFullRange(): CharRange {
    return new CharRange({
      chars: [],
      negate: true,
    });
  }

  invert(): CharRange {
    return new CharRange({
      chars: this.chars,
      negate: !this.negate,
    });
  }

  hasOverlap(other: CharRange): boolean {
    if (this.negate && other.negate) {
      return true;
    }

    if (this.negate) {
      const onlyInOther = other.chars.difference(this.chars);
      return onlyInOther.size() !== 0;
    }
    if (other.negate) {
      const onlyInThis = this.chars.difference(other.chars);
      return onlyInThis.size() !== 0;
    }

    const inCommon = this.chars.intersection(other.chars);
    return inCommon.size() > 0;
  }

  smallestInCommon(other: CharRange): CharRange {
    if (this.negate && other.negate) {
      return new CharRange({
        negate: true,
        chars: this.chars.union(other.chars),
      });
    }
    if (this.negate) {
      return new CharRange({
        negate: false,
        chars: other.chars.difference(this.chars),
      });
    }
    if (other.negate) {
      return new CharRange({
        negate: false,
        chars: this.chars.difference(other.chars),
      });
    }

    return new CharRange({
      negate: false,
      chars: this.chars.intersection(other.chars),
    });
  }

  union(other: CharRange): CharRange {
    if (this.negate && other.negate) {
      return new CharRange({
        negate: true,
        chars: this.chars.intersection(other.chars),
      });
    }
    if (this.negate) {
      return new CharRange({
        negate: true,
        chars: this.chars.difference(other.chars),
      });
    }
    if (other.negate) {
      return new CharRange({
        negate: true,
        chars: other.chars.difference(this.chars),
      });
    }

    return new CharRange({
      negate: false,
      chars: this.chars.union(other.chars),
    });
  }

  toJSON(): {
    readonly negate: boolean;
    readonly chars: readonly number[];
  } {
    return {
      negate: this.negate,
      chars: _.sortBy((x) => x, this.chars.toArray()),
    };
  }

  getUTF16UnitsCount(flags: Flags): UTF16UnitsCount {
    if (flags.unicode === false) {
      return '1';
    }

    if (this.negate) {
      return 'variable';
    }

    const chars = this.chars.toArray();
    const charLengths = chars.map((char) => String.fromCodePoint(char).length);
    const canBeOne = charLengths.some((charLength) => charLength === 1);
    const canBeTwo = charLengths.some((charLength) => charLength === 2);

    if (canBeOne && !canBeTwo) {
      return '1';
    }
    if (!canBeOne && canBeTwo) {
      return '2';
    }
    return 'variable';
  }
}
