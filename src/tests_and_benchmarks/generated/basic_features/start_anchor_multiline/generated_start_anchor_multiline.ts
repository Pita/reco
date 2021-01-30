// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/^def/m'
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

interface Context {}

// Regex optimized to: /^def/m

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
   * multiLineStartAnchor
   * /^def/m
   *  ^
   */
  if (i !== 0) {
    const charCodeMultiLineStartAnchor = str.charCodeAt(i - 1);
    let isNewLineChar = false;
    // TODO: find way to generate these trees
    if (charCodeMultiLineStartAnchor <= 13) {
      isNewLineChar =
        charCodeMultiLineStartAnchor === 10 ||
        charCodeMultiLineStartAnchor === 13;
    } else {
      if (charCodeMultiLineStartAnchor <= 8233) {
        isNewLineChar = charCodeMultiLineStartAnchor >= 8232;
      }
    }
    if (!isNewLineChar) {
      return -1;
    }
  }

  /*
   * charSequence
   * /^def/m
   *   ^
   */
  const iAfterMatch1 = i + 3;
  if (iAfterMatch1 > str.length) {
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

    i = iAfterMatch1;
  }
  return i;
};
