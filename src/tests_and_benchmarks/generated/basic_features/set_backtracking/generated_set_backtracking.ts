// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/([a-z]+)([h-o])([d-z]*)([1-3])/'
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

  const max = str.length - 0;
  for (let i = 0; i < max; i++) {
    const posAfterMatch = fiber0004(
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
   * /([a-z]+)([h-o])([d...
   *  ^^^^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  /*
   * groupStartMarker
   * /([a-z]+)([h-o])([d-z]✱)([...
   *          ^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * charOrSet
   * /([a-z]+)([h-o])([d-z]✱)(...
   *           ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 111) {
    result2 = charCode2 >= 104;
  }
  if (!result2) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /([a-z]+)([h-o])([d-z]✱)([...
   *          ^^^^^^^
   */
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  /*
   * groupStartMarker
   * ...]+)([h-o])([d-z]✱)([1-3])/
   *              ^^^^^^^^
   */
  tempGroupStartMarkers[2] = i;
  /*
   * nonBacktrackingQuantifier
   * ...+)([h-o])([d-z]✱)([1-3])/
   *              ^^^^^^
   */
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
    }
  }
  /*
   * groupEndMarker
   * ...]+)([h-o])([d-z]✱)([1-3])/
   *              ^^^^^^^^
   */
  groupMarkers[4] = tempGroupStartMarkers[2];
  groupMarkers[5] = i;
  /*
   * groupStartMarker
   * ...])([d-z]✱)([1-3])/
   *              ^^^^^^^
   */
  tempGroupStartMarkers[3] = i;
  /*
   * charOrSet
   * ...)([d-z]✱)([1-3])/
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode8 = str.charCodeAt(i);
  let result8 = false;

  if (charCode8 <= 51) {
    result8 = charCode8 >= 49;
  }
  if (!result8) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...])([d-z]✱)([1-3])/
   *              ^^^^^^^
   */
  groupMarkers[6] = tempGroupStartMarkers[3];
  groupMarkers[7] = i;
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
   * ...+)([h-o])([d-z]✱)([1-3])/
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 122) {
    result0 = charCode0 >= 100;
  }
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
   * /([a-z]+)([h-o])(...
   *   ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 122) {
    result0 = charCode0 >= 97;
  }
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
   * groupStartMarker
   * /([a-z]+)([h-o])([d...
   *  ^^^^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * backtrackingFixedLengthQuantifier
   * /([a-z]+)([h-o])([...
   *   ^^^^^^
   */
  let matches1 = 0;

  while (true) {
    const wrappedResult = fiber0003(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches1 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;
      matches1++;
    }
  }

  // needs followUp & forkingFiber
  while (matches1 >= 1) {
    const directFollowUpResult1 = fiber0001(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 1;
  }

  return -1;
};
