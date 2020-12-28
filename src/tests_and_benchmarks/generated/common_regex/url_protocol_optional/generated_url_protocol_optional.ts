// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/'
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

type QuantifierCounters = [number, number];

export function generatedRegexMatcher(str: string) {
  const groupMarkers: GroupMarkers = [-1, -1, -1, -1, -1, -1];
  const tempGroupStartMarkers: TempGroupMarkers = [-1, -1, -1];
  const quantifierCounters: QuantifierCounters = [-1, -1];

  for (let i = 0; i < str.length; i++) {
    const posAfterMatch = fiber0013(
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
   * wordBoundary
   * ...[a-z]{2,6}\b([-a-zA-Z0...
   *              ^^
   */
  if (i !== 0 && i !== str.length) {
    // TODO: find way to generate these trees
    const charCodeBefore0 = str.charCodeAt(i - 1);
    let isBeforeWord0 = false;
    if (charCodeBefore0 <= 90) {
      if (charCodeBefore0 <= 57) {
        isBeforeWord0 = charCodeBefore0 >= 48;
      } else {
        isBeforeWord0 = charCodeBefore0 >= 65;
      }
    } else {
      if (charCodeBefore0 === 95) {
        isBeforeWord0 = true;
      } else {
        if (charCodeBefore0 <= 122) {
          isBeforeWord0 = charCodeBefore0 >= 97;
        }
      }
    }

    const charCodeAfter0 = str.charCodeAt(i);
    let isAfterWord0 = false;
    if (charCodeAfter0 <= 90) {
      if (charCodeAfter0 <= 57) {
        isAfterWord0 = charCodeAfter0 >= 48;
      } else {
        isAfterWord0 = charCodeAfter0 >= 65;
      }
    } else {
      if (charCodeAfter0 === 95) {
        isAfterWord0 = true;
      } else {
        if (charCodeAfter0 <= 122) {
          isAfterWord0 = charCodeAfter0 >= 97;
        }
      }
    }

    if (isBeforeWord0 === isAfterWord0) {
      return -1;
    }
  }
  /*
   * groupStartMarker
   * ...-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]✱)/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[2] = i;
  /*
   * nonBacktrackingQuantifier
   * ...z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]✱)/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
   * ...-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]✱)/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[4] = tempGroupStartMarkers[2];
  groupMarkers[5] = i;
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
   * ...z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]✱)/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 61) {
    if (charCode0 <= 43) {
      if (charCode0 <= 38) {
        if (charCode0 === 35) {
          result0 = true;
        } else {
          result0 = charCode0 >= 37;
        }
      } else {
        result0 = charCode0 === 43;
      }
    } else {
      if (charCode0 <= 58) {
        result0 = charCode0 >= 45;
      } else {
        result0 = charCode0 === 61;
      }
    }
  } else {
    if (charCode0 <= 95) {
      if (charCode0 <= 90) {
        result0 = charCode0 >= 63;
      } else {
        result0 = charCode0 === 95;
      }
    } else {
      if (charCode0 <= 122) {
        result0 = charCode0 >= 97;
      } else {
        result0 = charCode0 === 126;
      }
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
   * ...]{2,256}\.[a-z]{2,6}\b([-...
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
   * ...#=]{2,256}\.[a-z]{2,6}...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 46;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]{2,256}\.[a-z]{2,6}\b([-a-zA-...
   *              ^^^^^^^^^^
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
      if (matches1 < 2) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;
      matches1++;

      if (matches1 === 6) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches1 >= 2) {
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
   * ...)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[...
   *              ^^^^^^^^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 58) {
    if (charCode0 <= 43) {
      if (charCode0 <= 37) {
        result0 = charCode0 === 35 || charCode0 === 37;
      } else {
        result0 = charCode0 === 43;
      }
    } else {
      if (charCode0 <= 46) {
        result0 = charCode0 >= 45;
      } else {
        result0 = charCode0 >= 48;
      }
    }
  } else {
    if (charCode0 <= 95) {
      if (charCode0 <= 90) {
        if (charCode0 === 61) {
          result0 = true;
        } else {
          result0 = charCode0 >= 64;
        }
      } else {
        result0 = charCode0 === 95;
      }
    } else {
      if (charCode0 <= 122) {
        result0 = charCode0 >= 97;
      } else {
        result0 = charCode0 === 126;
      }
    }
  }
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
   * backtrackingFixedLengthQuantifier
   * ...)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
      if (matches0 < 2) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;
      matches0++;

      if (matches0 === 256) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches0 >= 2) {
    const directFollowUpResult0 = fiber0004(
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
   * ...ps?:\/\/)?(www\.)?[-a-zA-Z0...
   *              ^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * charOrSet
   * ...s?:\/\/)?(www\.)?[-a-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 119;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...?:\/\/)?(www\.)?[-a-z...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 119;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...:\/\/)?(www\.)?[-a-zA...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  result3 = charCode3 === 119;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...\/\/)?(www\.)?[-a-zA-Z...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4 = false;

  result4 = charCode4 === 46;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...ps?:\/\/)?(www\.)?[-a-zA-Z0...
   *              ^^^^^^^
   */
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  return greedyQuantifier0008(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * quantifierStarter
   * ...ps?:\/\/)?(www\.)?[-a-zA-Z0-...
   *              ^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0008 = quantifierCounters[0];
  quantifierCounters[0] = -1;
  const cursorAfterQuantifier = greedyQuantifier0008(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[0] = matchCountCopygreedyQuantifier0008;

  return cursorAfterQuantifier;
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
   * groupStartMarker
   * /(https?:\/\/)?(www\.)?[...
   *  ^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * charOrSet
   * /(https?:\/\/...
   *   ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 104;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /(https?:\/\/)...
   *    ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 116;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /(https?:\/\/)?...
   *     ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  result3 = charCode3 === 116;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /(https?:\/\/)?(...
   *      ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4 = false;

  result4 = charCode4 === 112;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * /(https?:\/\/)?(ww...
   *       ^^
   */
  let matches5 = 0;
  while (true) {
    const wrappedResult = fiber0012(
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

      matches5++;

      if (matches5 === 1) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * /(https?:\/\/)?(www...
   *         ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode6 = str.charCodeAt(i);
  let result6 = false;

  result6 = charCode6 === 58;

  if (!result6) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /(https?:\/\/)?(www\....
   *          ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7 = false;

  result7 = charCode7 === 47;

  if (!result7) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /(https?:\/\/)?(www\.)?...
   *            ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode8 = str.charCodeAt(i);
  let result8 = false;

  result8 = charCode8 === 47;

  if (!result8) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(https?:\/\/)?(www\.)?[...
   *  ^^^^^^^^^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  return greedyQuantifier0011(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * /(https?:\/\/)?(w...
   *       ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 115;

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
   * quantifierStarter
   * /(https?:\/\/)?(www\.)?[-...
   *  ^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0011 = quantifierCounters[1];
  quantifierCounters[1] = -1;
  const cursorAfterQuantifier = greedyQuantifier0011(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[1] = matchCountCopygreedyQuantifier0011;

  return cursorAfterQuantifier;
};

/*
 * ...ps?:\/\/)?(www\.)?[-a-zA-Z0-...
 *              ^^^^^^^^
 */
const greedyQuantifier0008 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[0]++;

  if (quantifierCounters[0] === 1) {
    return fiber0006(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const groupMarkerCopy2 = groupMarkers[2];
  const groupMarkerCopy3 = groupMarkers[3];
  const tryDeeperResult = fiber0007(
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
  groupMarkers[2] = groupMarkerCopy2;
  groupMarkers[3] = groupMarkerCopy3;

  const groupMarkerCopy4 = groupMarkers[4];
  const groupMarkerCopy5 = groupMarkers[5];

  const followUpResult = fiber0006(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[4] = groupMarkerCopy4;
    groupMarkers[5] = groupMarkerCopy5;
    quantifierCounters[0]--;
  }
  return followUpResult;
};
/*
 * /(https?:\/\/)?(www\.)?[-...
 *  ^^^^^^^^^^^^^^
 */
const greedyQuantifier0011 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[1]++;

  if (quantifierCounters[1] === 1) {
    return fiber0009(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const tryDeeperResult = fiber0010(
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
  const groupMarkerCopy4 = groupMarkers[4];
  const groupMarkerCopy5 = groupMarkers[5];

  const followUpResult = fiber0009(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[2] = groupMarkerCopy2;
    groupMarkers[3] = groupMarkerCopy3;
    groupMarkers[4] = groupMarkerCopy4;
    groupMarkers[5] = groupMarkerCopy5;
    quantifierCounters[1]--;
  }
  return followUpResult;
};
