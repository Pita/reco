// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/$/'
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

// Regex optimized to: /$/

export function generatedRegexMatcher(str: string) {
  const context: Context = {};

  // endAnchored
  const min = Math.max(str.length - 0, 0);
  const max = str.length - 0;

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
   * endAnchor
   * /$/
   *  ^
   */
  if (i !== str.length) {
    return -1;
  }
  return i;
};
