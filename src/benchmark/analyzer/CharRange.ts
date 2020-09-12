import { Character, Set as RegexSet } from 'regexp-to-ast';
import _ from 'lodash';
import { normalizeUpperLowerCase } from '../../normalize_upper_lower_case';

export class CharRange {
  private chars: number[];
  // complement = true means all chars are included except the listed ones
  private complement: boolean;

  private constructor(options: { chars: number[]; complement: boolean }) {
    this.chars = options.chars;
    this.complement = options.complement;
  }

  static fromCharacter(char: Character, ignoreCase: boolean) {
    return new CharRange({
      complement: false,
      chars: normalizeUpperLowerCase(char.value, ignoreCase),
    });
  }

  static fromSet(set: RegexSet, ignoreCase: boolean) {
    const chars: number[] = [];
    set.value.forEach((setValue) => {
      if (typeof setValue === 'number') {
        normalizeUpperLowerCase(setValue, ignoreCase).forEach((char) =>
          chars.push(char),
        );
      } else {
        const { from, to } = setValue;
        for (let i = from; i <= to; i++) {
          normalizeUpperLowerCase(i, ignoreCase).forEach((char) =>
            chars.push(char),
          );
        }
      }
    });

    return new CharRange({
      chars,
      complement: set.complement,
    });
  }

  static createEmptyRange() {
    return new CharRange({
      chars: [],
      complement: false,
    });
  }

  hasOverlap(other: CharRange): boolean {
    if (this.complement && other.complement) {
      return true;
    }

    if (this.complement) {
      const onlyInOther = _.difference(other.chars, this.chars);
      return onlyInOther.length !== 0;
    }
    if (other.complement) {
      const onlyInThis = _.difference(this.chars, other.chars);
      return onlyInThis.length !== 0;
    }

    const inCommon = _.intersection(this.chars, other.chars);
    return inCommon.length > 0;
  }

  smallestInCommon(other: CharRange): CharRange {
    if (this.complement && other.complement) {
      return new CharRange({
        complement: true,
        chars: _.union(this.chars, other.chars),
      });
    }
    if (this.complement) {
      return new CharRange({
        complement: false,
        chars: _.difference(other.chars, this.chars),
      });
    }
    if (other.complement) {
      return new CharRange({
        complement: false,
        chars: _.difference(this.chars, other.chars),
      });
    }

    return new CharRange({
      complement: false,
      chars: _.intersection(this.chars, other.chars),
    });
  }

  union(other: CharRange): CharRange {
    if (this.complement && other.complement) {
      return new CharRange({
        complement: true,
        chars: _.intersection(this.chars, other.chars),
      });
    }
    if (this.complement) {
      return new CharRange({
        complement: true,
        chars: _.difference(this.chars, other.chars),
      });
    }
    if (other.complement) {
      return new CharRange({
        complement: true,
        chars: _.difference(other.chars, this.chars),
      });
    }

    return new CharRange({
      complement: false,
      chars: _.union(this.chars, other.chars),
    });
  }

  toJSON() {
    return {
      complement: this.complement,
      chars: this.chars.sort(),
    };
  }
}
