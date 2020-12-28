// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(ab)k(123)/'
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

type GroupMarkers = [number, number, number, number];

type TempGroupMarkers = [number, number];

type QuantifierCounters = [];

export function generatedRegexMatcher(str: string) {
  const groupMarkers: GroupMarkers = [-1, -1, -1, -1];
  const tempGroupStartMarkers: TempGroupMarkers = [-1, -1];
  const quantifierCounters: QuantifierCounters = [];

  for (let i = 0; i < str.length; i++) {
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
        matches: [
          str.substring(i, posAfterMatch),
          groupMarkers[1] !== -1
            ? str.substring(groupMarkers[0], groupMarkers[1])
            : undefined,
          groupMarkers[3] !== -1
            ? str.substring(groupMarkers[2], groupMarkers[3])
            : undefined,
        ],
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
   * groupStartMarker
   * /(ab)k(123)/
   *  ^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * charOrSet
   * /(ab)k(123)/
   *   ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /(ab)k(123)/
   *    ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 98;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(ab)k(123)/
   *  ^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  /*
   * charOrSet
   * /(ab)k(123)/
   *      ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4 = false;

  result4 = charCode4 === 107;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * /(ab)k(123)/
   *       ^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * charOrSet
   * /(ab)k(123)/
   *        ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode6 = str.charCodeAt(i);
  let result6 = false;

  result6 = charCode6 === 49;

  if (!result6) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /(ab)k(123)/
   *         ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7 = false;

  result7 = charCode7 === 50;

  if (!result7) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /(ab)k(123)/
   *          ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode8 = str.charCodeAt(i);
  let result8 = false;

  result8 = charCode8 === 51;

  if (!result8) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(ab)k(123)/
   *       ^^^^^
   */
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  return i;
};
