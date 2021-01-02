// This code was generated with RECO v0.3.0
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

type GroupMarkers = [];

type TempGroupMarkers = [];

type QuantifierCounters = [];

export function generatedRegexMatcher(str: string) {
  const groupMarkers: GroupMarkers = [];
  const tempGroupStartMarkers: TempGroupMarkers = [];
  const quantifierCounters: QuantifierCounters = [];

  const max = str.length - 2;
  for (let i = 0; i < max; i++) {
    const posAfterMatch = fiber0001(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [str.substring(i, posAfterMatch)],
      };
    }
  }

  return null;
}

const fiber0001 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * charOrSet
   * /def$/m
   *  ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 100;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /def$/m
   *   ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 101;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /def$/m
   *    ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 102;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * multiLineEndAnchor
   * /def$/m
   *     ^
   */
  if (i !== str.length) {
    const charCodeMultiLineEndAnchor = str.charCodeAt(i);
    let isNewLineChar = false;
    // TODO: find way to generate these trees
    if (charCodeMultiLineEndAnchor <= 13) {
      isNewLineChar =
        charCodeMultiLineEndAnchor === 10 || charCodeMultiLineEndAnchor === 13;
    } else {
      if (charCodeMultiLineEndAnchor <= 8233) {
        isNewLineChar = charCodeMultiLineEndAnchor >= 8232;
      }
    }
    if (!isNewLineChar) {
      return -1;
    }
  }
  return i;
};
