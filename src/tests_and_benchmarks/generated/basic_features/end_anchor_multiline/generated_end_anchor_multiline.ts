// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/def$/m'
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

/* eslint prefer-const: 0 */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Context {}

// Regex optimized to: /def$/m

export function generatedRegexMatcher(str: string) {
  const context: Context = {};

  // minCharsLeft
  const min = 0;
  const max = str.length - 3;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0001(i, str, context);
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [str.substring(i, posAfterMatch)],
      };
    }
  }

  return null;
}

const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * /def$/m
   *  ^^^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 2);

    let result0: boolean;

    result0 = charCode0 === 102;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    result1 = charCode1 === 101;

    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 0);

    let result2: boolean;

    result2 = charCode2 === 100;

    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * multiLineEndAnchor
   * /def$/m
   *     ^
   */
  if (i !== str.length) {
    const charCodeMultiLineEndAnchor1 = str.charCodeAt(i);
    let isNewLineChar1 = false;
    // TODO: find way to generate these trees
    if (charCodeMultiLineEndAnchor1 <= 13) {
      isNewLineChar1 =
        charCodeMultiLineEndAnchor1 === 10 ||
        charCodeMultiLineEndAnchor1 === 13;
    } else {
      if (charCodeMultiLineEndAnchor1 <= 8233) {
        isNewLineChar1 = charCodeMultiLineEndAnchor1 >= 8232;
      }
    }
    if (!isNewLineChar1) {
      return -1;
    }
  }
  return i;
};
