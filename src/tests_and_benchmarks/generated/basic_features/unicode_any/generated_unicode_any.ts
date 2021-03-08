// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/.a/u'
//
// Use like this:
//
// import { generatedRegexMatcher } from './THIS_FILE';
// const result = generatedRegexMatcher(str);
// console.log(result);
//
// Outputs:
// {
//   index: 0, // position of the string that matched
//   matches: [ 'foo', 'bar'] // groups that matched
// }
// or null in case there is no match

/* eslint prefer-const: 0, functional/prefer-readonly-type: 0, functional/no-let: 0, functional/immutable-data: 0 */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Context {}

// Regex optimized to: /.a/u

export function generatedRegexMatcher(str: string) {
  const context: Context = {};

  // minCharsLeft
  const min = 0;
  const max = str.length - 2;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = tailFiber(i, str, context);
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [str.substring(i, posAfterMatch)],
      };
    }
  }

  return null;
}

const tailFiber = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * /.a/u
   *
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    if (i >= str.length) {
      return -1;
    }

    const charCode0 = str.codePointAt(i)!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

    i++;
    if (i >= str.length) {
      return -1;
    }

    const charCode1 = str.codePointAt(i)!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

    i += charCode1 >= 0x10000 ? 2 : 1;

    let result0: boolean;

    result0 = charCode0 === 97;

    if (!result0) {
      return -1;
    }
    let result1: boolean;

    if (charCode1 <= 13) {
      result1 = charCode1 === 10 || charCode1 === 13;
    } else {
      if (charCode1 <= 8233) {
        result1 = charCode1 >= 8232;
      } else {
        result1 = false;
      }
    }
    if (result1) {
      return -1;
    }
  }
  return i;
};
