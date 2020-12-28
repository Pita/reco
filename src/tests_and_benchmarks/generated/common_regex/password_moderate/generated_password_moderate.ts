// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/'
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
   * lookaround
   * /(?=(.✱[0-9]))((?=.✱[A-Z...
   *  ^^^^^^^^^^^^^
   */
  const lookaroundResult0 = fiber0014(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (lookaroundResult0 === -1) {
    return -1;
  }
  /*
   * groupStartMarker
   * ...(.✱[0-9]))((?=.✱[A-Za-z0-9])(?=.✱[A-Z])(?=.✱[a-z]))^.{8,}$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * lookaround
   * ....✱[0-9]))((?=.✱[A-Za-z0-9])(?=.✱[A-Z]...
   *              ^^^^^^^^^^^^^^^^^
   */
  const lookaroundResult2 = fiber0011(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (lookaroundResult2 === -1) {
    return -1;
  }
  /*
   * lookaround
   * ...-Za-z0-9])(?=.✱[A-Z])(?=.✱[a-z]...
   *              ^^^^^^^^^^^
   */
  const lookaroundResult3 = fiber0008(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (lookaroundResult3 === -1) {
    return -1;
  }
  /*
   * lookaround
   * ...?=.✱[A-Z])(?=.✱[a-z]))^.{8,}$/
   *              ^^^^^^^^^^^
   */
  const lookaroundResult4 = fiber0005(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (lookaroundResult4 === -1) {
    return -1;
  }
  /*
   * groupEndMarker
   * ...(.✱[0-9]))((?=.✱[A-Za-z0-9])(?=.✱[A-Z])(?=.✱[a-z]))^.{8,}$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  /*
   * startAnchor
   * ...=.✱[a-z]))^.{8,}$/
   *              ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * nonBacktrackingQuantifier
   * ....✱[a-z]))^.{8,}$/
   *              ^^^^^
   */
  let matches7 = 0;
  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0002 = i;
    inlineFiber0002: {
      let i = startinlineFiber0002;

      /*
       * charOrSet
       * ....✱[a-z]))^.{8,}$/
       *              ^
       */
      if (i >= str.length) {
        break inlineFiber0002;
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
        break inlineFiber0002;
      }
      i++;
      wrappedResult = i;
    }

    if (wrappedResult === -1) {
      if (matches7 < 8) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches7++;
    }
  }
  /*
   * endAnchor
   * ...z]))^.{8,}$/
   *              ^
   */
  if (i !== str.length) {
    return -1;
  }
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
   * ...A-Z])(?=.✱[a-z]))^.{8,}$/
   *              ^^^^^
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
const fiber0005 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * backtrackingFixedLengthQuantifier
   * ...✱[A-Z])(?=.✱[a-z]))^.{...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0004 = i;
    inlineFiber0004: {
      let i = startinlineFiber0004;

      /*
       * charOrSet
       * ...✱[A-Z])(?=.✱[a-z]))^....
       *              ^
       */
      if (i >= str.length) {
        break inlineFiber0004;
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
        break inlineFiber0004;
      }
      i++;
      wrappedResult = i;
    }

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches0++;
    }
  }

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0003(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
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
   * charOrSet
   * ...0-9])(?=.✱[A-Z])(?=.✱[a-z...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 90) {
    result0 = charCode0 >= 65;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0008 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * backtrackingFixedLengthQuantifier
   * ...-z0-9])(?=.✱[A-Z])(?=....
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0007 = i;
    inlineFiber0007: {
      let i = startinlineFiber0007;

      /*
       * charOrSet
       * ...-z0-9])(?=.✱[A-Z])(?=...
       *              ^
       */
      if (i >= str.length) {
        break inlineFiber0007;
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
        break inlineFiber0007;
      }
      i++;
      wrappedResult = i;
    }

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches0++;
    }
  }

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0006(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0009 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * charOrSet
   * ...9]))((?=.✱[A-Za-z0-9])(?=.✱[A-Z...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 90) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
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
const fiber0011 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * backtrackingFixedLengthQuantifier
   * ...0-9]))((?=.✱[A-Za-z0-9...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0010 = i;
    inlineFiber0010: {
      let i = startinlineFiber0010;

      /*
       * charOrSet
       * ...0-9]))((?=.✱[A-Za-z0-...
       *              ^
       */
      if (i >= str.length) {
        break inlineFiber0010;
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
        break inlineFiber0010;
      }
      i++;
      wrappedResult = i;
    }

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches0++;
    }
  }

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0009(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0012 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * charOrSet
   * /(?=(.✱[0-9]))((?=.✱[A...
   *        ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(?=(.✱[0-9]))((?=.✱[A-...
   *     ^^^^^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  return i;
};
const fiber0014 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupStartMarker
   * /(?=(.✱[0-9]))((?=.✱[A-...
   *     ^^^^^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * backtrackingFixedLengthQuantifier
   * /(?=(.✱[0-9]))((?...
   *      ^^
   */
  let matches1 = 0;

  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0013 = i;
    inlineFiber0013: {
      let i = startinlineFiber0013;

      /*
       * charOrSet
       * /(?=(.✱[0-9]))((...
       *      ^
       */
      if (i >= str.length) {
        break inlineFiber0013;
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
        break inlineFiber0013;
      }
      i++;
      wrappedResult = i;
    }

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches1++;
    }
  }

  // needs followUp & forkingFiber
  while (matches1 >= 0) {
    const directFollowUpResult1 = fiber0012(
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
