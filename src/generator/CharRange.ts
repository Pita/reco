import * as _ from 'lodash/fp';
import { Flags } from 'regexpp/ast';

const normalizeUpperLowerCase = (
  char: number,
  ignoreCase: boolean,
): number[] => {
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

class NumericSet extends Set<number> {
  difference(other: NumericSet) {
    const difference = new NumericSet();

    this.forEach((char) => {
      if (!other.has(char)) {
        difference.add(char);
      }
    });

    return difference;
  }

  union(other: NumericSet) {
    const union = new NumericSet();

    this.forEach((char) => {
      union.add(char);
    });

    other.forEach((char) => {
      union.add(char);
    });

    return union;
  }

  intersection(other: NumericSet) {
    const intersection = new NumericSet();

    this.forEach((char) => {
      if (other.has(char)) {
        intersection.add(char);
      }
    });

    return intersection;
  }

  toArray() {
    const array: number[] = [];
    this.forEach((char) => array.push(char));
    return _.sortBy((char) => char, array);
  }
}

export type UTF16UnitsCount = '1' | '2' | 'variable';

export class CharRange {
  private chars: NumericSet;
  private negate: boolean;

  constructor(options: { chars: number[] | NumericSet; negate: boolean }) {
    this.chars = new NumericSet(options.chars);
    this.negate = options.negate;
  }

  static create(
    definitions: Array<
      | number
      | string
      | { from: string; to: string }
      | { from: number; to: number }
    >,
    options: { ignoreCase: boolean; negate: boolean },
  ) {
    const { ignoreCase, negate } = options;
    const chars: number[] = [];

    definitions.forEach((definition) => {
      if (typeof definition === 'string' || typeof definition === 'number') {
        normalizeUpperLowerCase(
          toCharCode(definition),
          ignoreCase,
        ).forEach((char) => chars.push(char));
      } else {
        const from = toCharCode(definition.from);
        const to = toCharCode(definition.to);

        for (let i = from; i <= to; i++) {
          normalizeUpperLowerCase(i, ignoreCase).forEach((char) =>
            chars.push(char),
          );
        }
      }
    });

    return new CharRange({
      negate,
      chars,
    });
  }

  static createEmptyRange() {
    return new CharRange({
      chars: [],
      negate: false,
    });
  }

  static createFullRange() {
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
      return onlyInOther.size !== 0;
    }
    if (other.negate) {
      const onlyInThis = this.chars.difference(other.chars);
      return onlyInThis.size !== 0;
    }

    const inCommon = this.chars.intersection(other.chars);
    return inCommon.size > 0;
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

  toJSON() {
    return {
      negate: this.negate,
      chars: this.chars.toArray(),
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
    let canBeTwo = false;
    let canBeOne = false;
    chars.forEach((char) => {
      const charLength = String.fromCodePoint(char).length;
      if (charLength === 1) {
        canBeOne = true;
      } else if (charLength === 2) {
        canBeTwo = true;
      }
    });

    if (canBeOne && !canBeTwo) {
      return '1';
    }
    if (!canBeOne && canBeTwo) {
      return '2';
    }
    return 'variable';
  }
}
