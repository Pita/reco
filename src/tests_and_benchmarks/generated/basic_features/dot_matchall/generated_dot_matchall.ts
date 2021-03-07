// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/.x/s'
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

// Regex optimized to: /.x/s

export function generatedRegexMatcher(str: string) {
  const context: Context = {};

  // minCharsLeft
  const min = 0;
  const max = str.length - 2;

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
   * /.x/s
   *  ^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = false;

    if (result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    result1 = charCode1 === 120;

    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
