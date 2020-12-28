// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(['"])(.*?)\1/'
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
   * groupEndMarker
   * /(['"])(.✱?)\1/
   *        ^^^^^
   */
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  /*
   * groupBackReference
   * /(['"])(.✱?)\1/
   *             ^^
   */
  if (1 < groupMarkers.length) {
    let backReferenceI = groupMarkers[0];
    const backReferenceEnd = groupMarkers[1];
    while (backReferenceI < backReferenceEnd) {
      if (i >= str.length) {
        return -1;
      }

      const backReferenceCharCode = str.charCodeAt(backReferenceI);
      const currentCharCode = str.charCodeAt(i);

      if (backReferenceCharCode !== currentCharCode) {
        return -1;
      }

      backReferenceI++;
      i++;
    }
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
   * charOrSet
   * /(['"])(.✱?)\1/
   *         ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 13) {
    result0 = charCode0 === 10 || charCode0 === 13;
  } else {
    if (charCode0 <= 8233) {
      result0 = charCode0 >= 8232;
    }
  }
  if (result0) {
    return -1;
  }
  i++;
  return lazyQuantifier0003(
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
   * groupStartMarker
   * /(['"])(.✱?)\1/
   *  ^^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * charOrSet
   * /(['"])(.✱?)\1/
   *   ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 34 || charCode1 === 39;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(['"])(.✱?)\1/
   *  ^^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  /*
   * groupStartMarker
   * /(['"])(.✱?)\1/
   *        ^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * quantifierStarter
   * /(['"])(.✱?)\1/
   *         ^^^
   */
  const cursorAfterQuantifier = lazyQuantifier0003(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  return cursorAfterQuantifier;
};

/*
 * /(['"])(.✱?)\1/
 *         ^^^
 */
const lazyQuantifier0003 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
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
  } else {
    return followUpResult;
  }

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

  return -1;
};
