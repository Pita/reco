// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(aa3)*(aa3a)/'
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

  // minCharsLeft
  const min = 0;
  const max = str.length - 4;

  for (let i = min; i <= max; i++) {
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
   * /(aa3)✱(aa3a)/
   *        ^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * charOrSet
   * /(aa3)✱(aa3a)/
   *         ^
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
   * /(aa3)✱(aa3a)/
   *          ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 97;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /(aa3)✱(aa3a)/
   *           ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  result3 = charCode3 === 51;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /(aa3)✱(aa3a)/
   *            ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4 = false;

  result4 = charCode4 === 97;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(aa3)✱(aa3a)/
   *        ^^^^^^
   */
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
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
   * groupStartMarker
   * /(aa3)✱(aa3a)/
   *  ^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * charOrSet
   * /(aa3)✱(aa3a)/
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
   * /(aa3)✱(aa3a)/
   *    ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 97;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /(aa3)✱(aa3a)/
   *     ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  result3 = charCode3 === 51;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(aa3)✱(aa3a)/
   *  ^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  return greedyQuantifier0003(
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
   * quantifierStarter
   * /(aa3)✱(aa3a)/
   *  ^^^^^^
   */
  const cursorAfterQuantifier = greedyQuantifier0003(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  return cursorAfterQuantifier;
};

/*
 * /(aa3)✱(aa3a)/
 *  ^^^^^^
 */
const greedyQuantifier0003 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const tryDeeperResult = fiber0002(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;

  const groupMarkerCopy2 = groupMarkers[2];
  const groupMarkerCopy3 = groupMarkers[3];

  const followUpResult = fiber0001(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[2] = groupMarkerCopy2;
    groupMarkers[3] = groupMarkerCopy3;
  }
  return followUpResult;
};
