// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(\b\w+\b)(?=.*\b\1\b)/'
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

  // fullScan
  const min = 0;
  const max = str.length - 1;

  for (let i = min; i <= max; i++) {
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
   * groupStartMarker
   * /(\b\w+\b)(?=.✱\b\1\b)/
   *  ^^^^^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * wordBoundary
   * /(\b\w+\b)(?=....
   *   ^^
   */
  if (i !== 0 && i !== str.length) {
    // TODO: find way to generate these trees
    const charCodeBefore1 = str.charCodeAt(i - 1);
    let isBeforeWord1 = false;
    if (charCodeBefore1 <= 90) {
      if (charCodeBefore1 <= 57) {
        isBeforeWord1 = charCodeBefore1 >= 48;
      } else {
        isBeforeWord1 = charCodeBefore1 >= 65;
      }
    } else {
      if (charCodeBefore1 === 95) {
        isBeforeWord1 = true;
      } else {
        if (charCodeBefore1 <= 122) {
          isBeforeWord1 = charCodeBefore1 >= 97;
        }
      }
    }

    const charCodeAfter1 = str.charCodeAt(i);
    let isAfterWord1 = false;
    if (charCodeAfter1 <= 90) {
      if (charCodeAfter1 <= 57) {
        isAfterWord1 = charCodeAfter1 >= 48;
      } else {
        isAfterWord1 = charCodeAfter1 >= 65;
      }
    } else {
      if (charCodeAfter1 === 95) {
        isAfterWord1 = true;
      } else {
        if (charCodeAfter1 <= 122) {
          isAfterWord1 = charCodeAfter1 >= 97;
        }
      }
    }

    if (isBeforeWord1 === isAfterWord1) {
      return -1;
    }
  }
  /*
   * nonBacktrackingQuantifier
   * /(\b\w+\b)(?=.✱\b...
   *     ^^^
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
   * wordBoundary
   * /(\b\w+\b)(?=.✱\b\1...
   *        ^^
   */
  if (i !== 0 && i !== str.length) {
    // TODO: find way to generate these trees
    const charCodeBefore3 = str.charCodeAt(i - 1);
    let isBeforeWord3 = false;
    if (charCodeBefore3 <= 90) {
      if (charCodeBefore3 <= 57) {
        isBeforeWord3 = charCodeBefore3 >= 48;
      } else {
        isBeforeWord3 = charCodeBefore3 >= 65;
      }
    } else {
      if (charCodeBefore3 === 95) {
        isBeforeWord3 = true;
      } else {
        if (charCodeBefore3 <= 122) {
          isBeforeWord3 = charCodeBefore3 >= 97;
        }
      }
    }

    const charCodeAfter3 = str.charCodeAt(i);
    let isAfterWord3 = false;
    if (charCodeAfter3 <= 90) {
      if (charCodeAfter3 <= 57) {
        isAfterWord3 = charCodeAfter3 >= 48;
      } else {
        isAfterWord3 = charCodeAfter3 >= 65;
      }
    } else {
      if (charCodeAfter3 === 95) {
        isAfterWord3 = true;
      } else {
        if (charCodeAfter3 <= 122) {
          isAfterWord3 = charCodeAfter3 >= 97;
        }
      }
    }

    if (isBeforeWord3 === isAfterWord3) {
      return -1;
    }
  }
  /*
   * groupEndMarker
   * /(\b\w+\b)(?=.✱\b\1\b)/
   *  ^^^^^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  /*
   * lookaround
   * /(\b\w+\b)(?=.✱\b\1\b)/
   *           ^^^^^^^^^^^^
   */
  const lookaroundResult5 = fiber0004(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (lookaroundResult5 === -1) {
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
   * wordBoundary
   * ...w+\b)(?=.✱\b\1\b)/
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
   * groupBackReference
   * ...\b)(?=.✱\b\1\b)/
   *              ^^
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
  /*
   * wordBoundary
   * ...)(?=.✱\b\1\b)/
   *              ^^
   */
  if (i !== 0 && i !== str.length) {
    // TODO: find way to generate these trees
    const charCodeBefore2 = str.charCodeAt(i - 1);
    let isBeforeWord2 = false;
    if (charCodeBefore2 <= 90) {
      if (charCodeBefore2 <= 57) {
        isBeforeWord2 = charCodeBefore2 >= 48;
      } else {
        isBeforeWord2 = charCodeBefore2 >= 65;
      }
    } else {
      if (charCodeBefore2 === 95) {
        isBeforeWord2 = true;
      } else {
        if (charCodeBefore2 <= 122) {
          isBeforeWord2 = charCodeBefore2 >= 97;
        }
      }
    }

    const charCodeAfter2 = str.charCodeAt(i);
    let isAfterWord2 = false;
    if (charCodeAfter2 <= 90) {
      if (charCodeAfter2 <= 57) {
        isAfterWord2 = charCodeAfter2 >= 48;
      } else {
        isAfterWord2 = charCodeAfter2 >= 65;
      }
    } else {
      if (charCodeAfter2 === 95) {
        isAfterWord2 = true;
      } else {
        if (charCodeAfter2 <= 122) {
          isAfterWord2 = charCodeAfter2 >= 97;
        }
      }
    }

    if (isBeforeWord2 === isAfterWord2) {
      return -1;
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
   * charOrSet
   * /(\b\w+\b)(?=.✱\b\1\b)/
   *              ^
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
   * backtrackingFixedLengthQuantifier
   * /(\b\w+\b)(?=.✱\b\1\b)/
   *              ^^
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
    }
  }

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0002(
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
   * /(\b\w+\b)(?=.✱\...
   *     ^^
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
