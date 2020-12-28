// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/'
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
   * /(?=(.✱[0-9]))(?=.✱[\!@#...
   *  ^^^^^^^^^^^^^
   */
  const lookaroundResult0 = fiber0016(
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
   * lookaround
   * ...(.✱[0-9]))(?=.✱[\!@#$%^&✱()\[\]{}\-_+=~`|:;"'<>,./?])(?=.✱[a-z]...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const lookaroundResult1 = fiber0013(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (lookaroundResult1 === -1) {
    return -1;
  }
  /*
   * lookaround
   * ..."'<>,./?])(?=.✱[a-z])(?=(.✱[A-Z...
   *              ^^^^^^^^^^^
   */
  const lookaroundResult2 = fiber0010(
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
   * ...?=.✱[a-z])(?=(.✱[A-Z]))(?=(.✱)).{...
   *              ^^^^^^^^^^^^^
   */
  const lookaroundResult3 = fiber0007(
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
   * ...(.✱[A-Z]))(?=(.✱)).{8,}/
   *              ^^^^^^^^
   */
  const lookaroundResult4 = fiber0003(
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
   * nonBacktrackingQuantifier
   * ...))(?=(.✱)).{8,}/
   *              ^^^^^
   */
  let matches5 = 0;
  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0002 = i;
    inlineFiber0002: {
      let i = startinlineFiber0002;

      /*
       * charOrSet
       * ...))(?=(.✱)).{8,}/
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
      if (matches5 < 8) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches5++;
    }
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
   * groupStartMarker
   * ...[A-Z]))(?=(.✱)).{8,}/
   *              ^^^^
   */
  tempGroupStartMarkers[2] = i;
  /*
   * nonBacktrackingQuantifier
   * ...A-Z]))(?=(.✱)).{8,}/
   *              ^^
   */
  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0004 = i;
    inlineFiber0004: {
      let i = startinlineFiber0004;

      /*
       * charOrSet
       * ...A-Z]))(?=(.✱)).{8,}/
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
    }
  }
  /*
   * groupEndMarker
   * ...[A-Z]))(?=(.✱)).{8,}/
   *              ^^^^
   */
  groupMarkers[4] = tempGroupStartMarkers[2];
  groupMarkers[5] = i;
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
   * ...-z])(?=(.✱[A-Z]))(?=(.✱))...
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
  /*
   * groupEndMarker
   * ...✱[a-z])(?=(.✱[A-Z]))(?=(.✱))....
   *              ^^^^^^^^^
   */
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  return i;
};
const fiber0007 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupStartMarker
   * ...✱[a-z])(?=(.✱[A-Z]))(?=(.✱))....
   *              ^^^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * backtrackingFixedLengthQuantifier
   * ...[a-z])(?=(.✱[A-Z]))(?=...
   *              ^^
   */
  let matches1 = 0;

  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0006 = i;
    inlineFiber0006: {
      let i = startinlineFiber0006;

      /*
       * charOrSet
       * ...[a-z])(?=(.✱[A-Z]))(?...
       *              ^
       */
      if (i >= str.length) {
        break inlineFiber0006;
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
        break inlineFiber0006;
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
    const directFollowUpResult1 = fiber0005(
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
const fiber0008 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * charOrSet
   * ..../?])(?=.✱[a-z])(?=(.✱[A-...
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
const fiber0010 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * backtrackingFixedLengthQuantifier
   * ...>,./?])(?=.✱[a-z])(?=(...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0009 = i;
    inlineFiber0009: {
      let i = startinlineFiber0009;

      /*
       * charOrSet
       * ...>,./?])(?=.✱[a-z])(?=...
       *              ^
       */
      if (i >= str.length) {
        break inlineFiber0009;
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
        break inlineFiber0009;
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
    const directFollowUpResult0 = fiber0008(
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
const fiber0011 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * charOrSet
   * ...-9]))(?=.✱[\!@#$%^&✱()\[\]{}\-_+=~`|:;"'<>,./?])(?=.✱[a-z...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 91) {
    if (charCode0 <= 64) {
      if (charCode0 <= 47) {
        result0 = charCode0 >= 33;
      } else {
        result0 = charCode0 >= 58;
      }
    } else {
      result0 = charCode0 === 91;
    }
  } else {
    if (charCode0 <= 96) {
      result0 = charCode0 >= 93;
    } else {
      if (charCode0 <= 126) {
        result0 = charCode0 >= 123;
      }
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0013 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * backtrackingFixedLengthQuantifier
   * ...[0-9]))(?=.✱[\!@#$%^&✱...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0012 = i;
    inlineFiber0012: {
      let i = startinlineFiber0012;

      /*
       * charOrSet
       * ...[0-9]))(?=.✱[\!@#$%^&...
       *              ^
       */
      if (i >= str.length) {
        break inlineFiber0012;
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
        break inlineFiber0012;
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
    const directFollowUpResult0 = fiber0011(
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
const fiber0014 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * charOrSet
   * /(?=(.✱[0-9]))(?=.✱[\!...
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
   * /(?=(.✱[0-9]))(?=.✱[\!@...
   *     ^^^^^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  return i;
};
const fiber0016 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupStartMarker
   * /(?=(.✱[0-9]))(?=.✱[\!@...
   *     ^^^^^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * backtrackingFixedLengthQuantifier
   * /(?=(.✱[0-9]))(?=...
   *      ^^
   */
  let matches1 = 0;

  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0015 = i;
    inlineFiber0015: {
      let i = startinlineFiber0015;

      /*
       * charOrSet
       * /(?=(.✱[0-9]))(?...
       *      ^
       */
      if (i >= str.length) {
        break inlineFiber0015;
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
        break inlineFiber0015;
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
    const directFollowUpResult1 = fiber0014(
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
