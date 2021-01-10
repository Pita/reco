import * as _ from 'lodash';

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

export class CharRange {
  private chars: number[];
  private negate: boolean;

  constructor(options: { chars: number[]; negate: boolean }) {
    this.chars = _.sortedUniq(_.sortBy(options.chars));
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
      const onlyInOther = _.difference(other.chars, this.chars);
      return onlyInOther.length !== 0;
    }
    if (other.negate) {
      const onlyInThis = _.difference(this.chars, other.chars);
      return onlyInThis.length !== 0;
    }

    const inCommon = _.intersection(this.chars, other.chars);
    return inCommon.length > 0;
  }

  smallestInCommon(other: CharRange): CharRange {
    if (this.negate && other.negate) {
      return new CharRange({
        negate: true,
        chars: _.union(this.chars, other.chars),
      });
    }
    if (this.negate) {
      return new CharRange({
        negate: false,
        chars: _.difference(other.chars, this.chars),
      });
    }
    if (other.negate) {
      return new CharRange({
        negate: false,
        chars: _.difference(this.chars, other.chars),
      });
    }

    return new CharRange({
      negate: false,
      chars: _.intersection(this.chars, other.chars),
    });
  }

  union(other: CharRange): CharRange {
    if (this.negate && other.negate) {
      return new CharRange({
        negate: true,
        chars: _.intersection(this.chars, other.chars),
      });
    }
    if (this.negate) {
      return new CharRange({
        negate: true,
        chars: _.difference(this.chars, other.chars),
      });
    }
    if (other.negate) {
      return new CharRange({
        negate: true,
        chars: _.difference(other.chars, this.chars),
      });
    }

    return new CharRange({
      negate: false,
      chars: _.union(this.chars, other.chars),
    });
  }

  toJSON() {
    return {
      negate: this.negate,
      chars: this.chars.slice(),
    };
  }
}
