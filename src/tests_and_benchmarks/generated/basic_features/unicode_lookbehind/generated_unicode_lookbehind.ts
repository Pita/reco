// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(?<!𝒴)x/u'
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

// Regex optimized to: /(?<!𝒴)x/u

export function generatedRegexMatcher(str: string) {
  const context: Context = {};

  // minCharsLeft
  const min = 0;
  const max = str.length - 1;

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
   * lookaround
   * /(?<!𝒴)x/u
   *  ^^^^^^^
   */
  const lookaroundResult0 = fiber0002(i, str, context);
  if (lookaroundResult0 !== -1) {
    return -1;
  }
  /*
   * charSequence
   * /(?<!𝒴)x/u
   *         ^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 120;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSetBackward
   * /(?<!𝒴)x/u
   *      ^^
   */
  i -= 2;
  if (i < 0) {
    return -1;
  }
  const charCode0 = str.codePointAt(i);
  let result0 = false;

  result0 = charCode0 === 119988;

  if (!result0) {
    return -1;
  }
  return i;
};
