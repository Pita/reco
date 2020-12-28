// This code was generated with RECO v0.2.4
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
    const posAfterMatch = fiber0006(
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
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 58;

  if (!result1) {
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
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  if (charCode3 <= 53) {
    result3 = charCode3 >= 48;
  }
  if (!result3) {
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
  const charCode4 = str.charCodeAt(i);
  let result4 = false;

  if (charCode4 <= 57) {
    result4 = charCode4 >= 48;
  }
  if (!result4) {
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
  let matches6 = 0;
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

      matches6++;

      if (matches6 === 1) {
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
  const charCode8 = str.charCodeAt(i);
  let result8 = false;

  if (charCode8 <= 80) {
    result8 = charCode8 === 65 || charCode8 === 80;
  } else {
    result8 = charCode8 === 97 || charCode8 === 112;
  }
  if (!result8) {
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
  const charCode9 = str.charCodeAt(i);
  let result9 = false;

  result9 = charCode9 === 77 || charCode9 === 109;

  if (!result9) {
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
  return fiber0001(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0001(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
const fiber0006 = (
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
   * disjunction
   * /((1[0-2]|0?[1-9]):([0-5][0-...
   *   ^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy2 = groupMarkers[2];
  const groupMarkerCopy3 = groupMarkers[3];
  const groupMarkerCopy4 = groupMarkers[4];
  const groupMarkerCopy5 = groupMarkers[5];
  const groupMarkerCopy6 = groupMarkers[6];
  const groupMarkerCopy7 = groupMarkers[7];
  const length0 = fiber0003(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[2] = groupMarkerCopy2;
  groupMarkers[3] = groupMarkerCopy3;
  groupMarkers[4] = groupMarkerCopy4;
  groupMarkers[5] = groupMarkerCopy5;
  groupMarkers[6] = groupMarkerCopy6;
  groupMarkers[7] = groupMarkerCopy7;
  const length1 = fiber0004(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[2] = groupMarkerCopy2;
  groupMarkers[3] = groupMarkerCopy3;
  groupMarkers[4] = groupMarkerCopy4;
  groupMarkers[5] = groupMarkerCopy5;
  groupMarkers[6] = groupMarkerCopy6;
  groupMarkers[7] = groupMarkerCopy7;
  return -1;
};
