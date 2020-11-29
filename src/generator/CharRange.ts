import _ from 'lodash';
import { normalizeUpperLowerCase } from '../normalize_upper_lower_case';

const stringToCharCode = (str: string) => {
  if (str.length > 1) {
    throw new Error(`Invalid char length: ${str.length}: '${str}'`);
  }
  return str.charCodeAt(0);
};

export class CharRange {
  private chars: number[];
  private negate: boolean;

  constructor(options: { chars: number[]; negate: boolean }) {
    this.chars = options.chars;
    this.negate = options.negate;
  }

  static create(
    definitions: Array<string | { from: string; to: string }>,
    options: { ignoreCase: boolean; negate: boolean },
  ) {
    const { ignoreCase, negate } = options;
    const chars: number[] = [];

    definitions.forEach((definition) => {
      if (typeof definition === 'string') {
        normalizeUpperLowerCase(
          stringToCharCode(definition),
          ignoreCase,
        ).forEach((char) => chars.push(char));
      } else {
        const from = stringToCharCode(definition.from);
        const to = stringToCharCode(definition.to);

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
      chars: this.chars.sort(),
    };
  }
}
