// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/'
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

type GroupMarkers = [number, number, number, number, number, number];

type TempGroupMarkers = [number, number, number];

type QuantifierCounters = [];

export function generatedRegexMatcher(str: string) {
  const groupMarkers: GroupMarkers = [-1, -1, -1, -1, -1, -1];
  const tempGroupStartMarkers: TempGroupMarkers = [-1, -1, -1];
  const quantifierCounters: QuantifierCounters = [];

  const max = str.length - 2;
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
   * ..._\.\+-]+)@([\da-z\.-]+)\.([a-z\.]...
   *              ^^^^^^^^^^^^^
   */
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  /*
   * charOrSet
   * ...da-z\.-]+)\.([a-z\.]{2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 46;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-z\.-]+)\.([a-z\.]{2,6})$/
   *              ^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[2] = i;
  /*
   * nonBacktrackingQuantifier
   * ...z\.-]+)\.([a-z\.]{2,6})$/
   *              ^^^^^^^^^^^^
   */
  let matches3 = 0;
  while (true) {
    const wrappedResult = fiber0002(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches3 < 2) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches3++;

      if (matches3 === 6) {
        break;
      }
    }
  }
  /*
   * groupEndMarker
   * ...-z\.-]+)\.([a-z\.]{2,6})$/
   *              ^^^^^^^^^^^^^^
   */
  groupMarkers[4] = tempGroupStartMarkers[2];
  groupMarkers[5] = i;
  /*
   * endAnchor
   * ...z\.]{2,6})$/
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
   * charOrSet
   * ...z\.-]+)\.([a-z\.]{2,6})$/
   *              ^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 === 46) {
    result0 = true;
  } else {
    if (charCode0 <= 122) {
      result0 = charCode0 >= 97;
    }
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
   * ...\.\+-]+)@([\da-z\.-]+)\.([a-z\...
   *              ^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    if (charCode0 <= 46) {
      result0 = charCode0 >= 45;
    } else {
      result0 = charCode0 >= 48;
    }
  } else {
    if (charCode0 <= 122) {
      result0 = charCode0 >= 97;
    }
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
   * startAnchor
   * /^([a-z0-9_\...
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * groupStartMarker
   * /^([a-z0-9_\.\+-]+)@([\da-z\....
   *   ^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * nonBacktrackingQuantifier
   * /^([a-z0-9_\.\+-]+)@([\da-z\...
   *    ^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0005(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches2 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches2++;
    }
  }
  /*
   * groupEndMarker
   * /^([a-z0-9_\.\+-]+)@([\da-z\....
   *   ^^^^^^^^^^^^^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  /*
   * charOrSet
   * ...9_\.\+-]+)@([\da-z\.-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4 = false;

  result4 = charCode4 === 64;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ..._\.\+-]+)@([\da-z\.-]+)\.([a-z\.]...
   *              ^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * backtrackingFixedLengthQuantifier
   * ...\.\+-]+)@([\da-z\.-]+)\.([a-z\....
   *              ^^^^^^^^^^^
   */
  let matches6 = 0;

  while (true) {
    const wrappedResult = fiber0003(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches6 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;
      matches6++;
    }
  }

  // needs followUp & forkingFiber
  while (matches6 >= 1) {
    const directFollowUpResult6 = fiber0001(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult6 !== -1) {
      return directFollowUpResult6;
    }

    matches6--;
    i -= 1;
  }

  return -1;
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
   * /^([a-z0-9_\.\+-]+)@([\da-z...
   *    ^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    if (charCode0 <= 46) {
      if (charCode0 === 43) {
        result0 = true;
      } else {
        result0 = charCode0 >= 45;
      }
    } else {
      result0 = charCode0 >= 48;
    }
  } else {
    if (charCode0 === 95) {
      result0 = true;
    } else {
      if (charCode0 <= 122) {
        result0 = charCode0 >= 97;
      }
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
