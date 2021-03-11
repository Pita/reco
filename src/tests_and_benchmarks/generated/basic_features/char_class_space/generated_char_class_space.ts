// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/\s/'
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
interface Context {
  /*
   */
}

// Regex optimized to: /\s/

export function generatedRegexMatcher(
  str: string
): {
  index: number;
  matches: [string | undefined];
} | null {
  const context: Context = {};

  // fullScan
  const min = 0;
  const max = str.length;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = atom0000(i, str, context);
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [str.substring(i, posAfterMatch)],
      };
    }
  }

  return null;
}

const atom0000 = (i: number, str: string, context: Context): number => {
  const iAfterMatch = i + 1;
  if (iAfterMatch > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 8202) {
      if (charCode0 <= 160) {
        if (charCode0 <= 32) {
          if (charCode0 <= 13) {
            result0 = charCode0 >= 9;
          } else {
            result0 = charCode0 === 32;
          }
        } else {
          result0 = charCode0 === 160;
        }
      } else {
        if (charCode0 === 5760) {
          result0 = true;
        } else {
          result0 = charCode0 >= 8192;
        }
      }
    } else {
      if (charCode0 <= 8287) {
        if (charCode0 <= 8239) {
          if (charCode0 <= 8233) {
            result0 = charCode0 >= 8232;
          } else {
            result0 = charCode0 === 8239;
          }
        } else {
          result0 = charCode0 === 8287;
        }
      } else {
        result0 = charCode0 === 12288 || charCode0 === 65279;
      }
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch;
  }

  return i;
};
