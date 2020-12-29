// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/'
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

type GroupMarkers = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

type TempGroupMarkers = [number, number, number, number];

type QuantifierCounters = [];

export function generatedRegexMatcher(str: string) {
  const groupMarkers: GroupMarkers = [-1, -1, -1, -1, -1, -1, -1, -1];
  const tempGroupStartMarkers: TempGroupMarkers = [-1, -1, -1, -1];
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
          groupMarkers[5] !== -1
            ? str.substring(groupMarkers[4], groupMarkers[5])
            : undefined,
          groupMarkers[7] !== -1
            ? str.substring(groupMarkers[6], groupMarkers[7])
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
   * /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * groupStartMarker
   * /((1[0-2]|0?[1-9]):([0-5][0-...
   *   ^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * nonBacktrackingDisjunction
   * /((1[0-2]|0?[1-9]):([0-5][0-...
   *   ^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction2: {
    const length0 = fiber0003(
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
   * /((1[0-2]|0?[1-9]):([0-5][0-...
   *   ^^^^^^^^^^^^^^^^
   */
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  /*
   * charOrSet
   * ...]|0?[1-9]):([0-5][0-9...
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
   * groupStartMarker
   * ...|0?[1-9]):([0-5][0-9]) ?([AaPp][...
   *              ^^^^^^^^^^^^
   */
  tempGroupStartMarkers[2] = i;
  /*
   * charOrSet
   * ...0?[1-9]):([0-5][0-9]) ?([...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode6 = str.charCodeAt(i);
  let result6 = false;

  if (charCode6 <= 53) {
    result6 = charCode6 >= 48;
  }
  if (!result6) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...9]):([0-5][0-9]) ?([AaPp]...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7 = false;

  if (charCode7 <= 57) {
    result7 = charCode7 >= 48;
  }
  if (!result7) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...|0?[1-9]):([0-5][0-9]) ?([AaPp][...
   *              ^^^^^^^^^^^^
   */
  groupMarkers[4] = tempGroupStartMarkers[2];
  groupMarkers[5] = i;
  /*
   * nonBacktrackingQuantifier
   * ...0-5][0-9]) ?([AaPp][Mm...
   *              ^^
   */
  let matches9 = 0;
  while (true) {
    const wrappedResult = fiber0002(
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

      matches9++;

      if (matches9 === 1) {
        break;
      }
    }
  }
  /*
   * groupStartMarker
   * ...5][0-9]) ?([AaPp][Mm]))/
   *              ^^^^^^^^^^^^
   */
  tempGroupStartMarkers[3] = i;
  /*
   * charOrSet
   * ...][0-9]) ?([AaPp][Mm]))/
   *              ^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode11 = str.charCodeAt(i);
  let result11 = false;

  if (charCode11 <= 80) {
    result11 = charCode11 === 65 || charCode11 === 80;
  } else {
    result11 = charCode11 === 97 || charCode11 === 112;
  }
  if (!result11) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...) ?([AaPp][Mm]))/
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode12 = str.charCodeAt(i);
  let result12 = false;

  result12 = charCode12 === 77 || charCode12 === 109;

  if (!result12) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...5][0-9]) ?([AaPp][Mm]))/
   *              ^^^^^^^^^^^^
   */
  groupMarkers[6] = tempGroupStartMarkers[3];
  groupMarkers[7] = i;
  /*
   * groupEndMarker
   * /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
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
   * charOrSet
   * ...0-5][0-9]) ?([AaPp][M...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 32;

  if (!result0) {
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
   * /((1[0-2]|0?[1...
   *    ^
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
   * /((1[0-2]|0?[1-9]):...
   *     ^^^^^
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
const fiber0004 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * /((1[0-2]|0?[1-9]):([0...
   *           ^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0005(
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
   * /((1[0-2]|0?[1-9]):([0-5][0...
   *             ^^^^^
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
const fiber0005 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * charOrSet
   * /((1[0-2]|0?[1-9]):([...
   *           ^
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
