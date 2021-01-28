// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/\u{1f604}/u'
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

// Regex optimized to: /\u{1f604}/u

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
   * charOrSet
   * /\u{1f604}/u
   *  ^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.codePointAt(i)!;
  let result0 = false;

  result0 = charCode0 === 128516;

  if (!result0) {
    return -1;
  }
  // surrogate pair might require moving 2 chars ahead
  i += charCode0 >= 0x10000 ? 2 : 1;
  return i;
};
