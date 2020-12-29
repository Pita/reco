// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/^(0?[1-9]|1[0-2]):[0-5][0-9]$/'
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

type GroupMarkers = [number, number];

type TempGroupMarkers = [number];

type QuantifierCounters = [];

export function generatedRegexMatcher(str: string) {
  const groupMarkers: GroupMarkers = [-1, -1];
  const tempGroupStartMarkers: TempGroupMarkers = [-1];
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
   * startAnchor
   * /^(0?[1-9]|1...
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * groupStartMarker
   * /^(0?[1-9]|1[0-2]):[0-5][0-9]$/
   *   ^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * nonBacktrackingDisjunction
   * /^(0?[1-9]|1[0-2]):[0-5][0-9]$/
   *   ^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction2: {
    const length0 = fiber0002(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction2;
    }

    const length1 = fiber0004(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction2;
    }

    return -1;
  }
  /*
   * groupEndMarker
   * /^(0?[1-9]|1[0-2]):[0-5][0-9]$/
   *   ^^^^^^^^^^^^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  /*
   * charOrSet
   * ...9]|1[0-2]):[0-5][0-9]$/
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4 = false;

  result4 = charCode4 === 58;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...]|1[0-2]):[0-5][0-9]$/
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode5 = str.charCodeAt(i);
  let result5 = false;

  if (charCode5 <= 53) {
    result5 = charCode5 >= 48;
  }
  if (!result5) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...-2]):[0-5][0-9]$/
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode6 = str.charCodeAt(i);
  let result6 = false;

  if (charCode6 <= 57) {
    result6 = charCode6 >= 48;
  }
  if (!result6) {
    return -1;
  }
  i++;
  /*
   * endAnchor
   * ...[0-5][0-9]$/
   *              ^
   */
  if (i !== str.length) {
    return -1;
  }
  return i;
};
const fiber0002 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * /^(0?[1-9]|1[0-...
   *    ^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0003(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches0++;

      if (matches0 === 1) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * /^(0?[1-9]|1[0-2]):[...
   *      ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 49;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0003 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * charOrSet
   * /^(0?[1-9]|1[0...
   *    ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 48;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0004 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * charOrSet
   * /^(0?[1-9]|1[0-2]):[0-...
   *            ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /^(0?[1-9]|1[0-2]):[0-5][0-...
   *             ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 50) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
