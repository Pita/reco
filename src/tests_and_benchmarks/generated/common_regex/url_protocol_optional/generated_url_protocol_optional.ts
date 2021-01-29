// This code was generated with RECO vDEV
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

interface Context {
  groupMarkerStart0: number;
  groupMarkerStartTemp0: number;
  groupMarkerEnd0: number;
  groupMarkerStart1: number;
  groupMarkerStartTemp1: number;
  groupMarkerEnd1: number;
  groupMarkerStart2: number;
  groupMarkerStartTemp2: number;
  groupMarkerEnd2: number;
  quantifierCounter0: number;
}

// Regex optimized to: /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=][-a-zA-Z0-9@:%._\+~#=][-a-zA-Z0-9@:%._\+~#=]{0,254}\.[a-z][a-z][a-z]{0,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/

export function generatedRegexMatcher(str: string) {
  const context: Context = {
    groupMarkerStart0: -1,
    groupMarkerStartTemp0: -1,
    groupMarkerEnd0: -1,
    groupMarkerStart1: -1,
    groupMarkerStartTemp1: -1,
    groupMarkerEnd1: -1,
    groupMarkerStart2: -1,
    groupMarkerStartTemp2: -1,
    groupMarkerEnd2: -1,
    quantifierCounter0: -1,
  };

  // minCharsLeft
  const min = 0;
  const max = str.length - 5;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0009(i, str, context);
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [
          str.substring(i, posAfterMatch),
          context.groupMarkerEnd0 !== -1
            ? str.substring(context.groupMarkerStart0, context.groupMarkerEnd0)
            : undefined,
          context.groupMarkerEnd1 !== -1
            ? str.substring(context.groupMarkerStart1, context.groupMarkerEnd1)
            : undefined,
          context.groupMarkerEnd2 !== -1
            ? str.substring(context.groupMarkerStart2, context.groupMarkerEnd2)
            : undefined,
        ],
      };
    }
  }

  return null;
}

const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * wordBoundary
   * ...[a-z]{0,4}\b([-a-zA-Z0...
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
   * ...-z]{0,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]✱)/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * nonBacktrackingQuantifier
   * ...z]{0,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]✱)/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0002(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupEndMarker
   * ...-z]{0,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]✱)/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...z]{0,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]✱)/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

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
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...[a-z][a-z][a-z]{0,4}\b([-...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 122) {
    result0 = charCode0 >= 97;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...#=]{0,254}\.[a-z][a-z]...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 46;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...]{0,254}\.[a-z][a-z][a-z]...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 122) {
    result1 = charCode1 >= 97;
  } else {
    result1 = false;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...54}\.[a-z][a-z][a-z]{0,4}...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  if (charCode2 <= 122) {
    result2 = charCode2 >= 97;
  } else {
    result2 = false;
  }
  if (!result2) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * ...[a-z][a-z][a-z]{0,4}\b([-a-zA-...
   *              ^^^^^^^^^^
   */
  let matches3 = 0;

  while (true) {
    const wrappedResult = fiber0003(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches3++;

      if (matches3 === 4) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches3 >= 0) {
    const directFollowUpResult3 = fiber0001(i, str, context);

    if (directFollowUpResult3 !== -1) {
      return directFollowUpResult3;
    }

    matches3--;
    i -= 1;
  }

  return -1;
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...:%._\+~#=][-a-zA-Z0-9@:%._\+~#=]{0,254}\.[...
   *              ^^^^^^^^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

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
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...)?(www\.)?[-a-zA-Z0-9@:%._\+~#=][-a-zA-Z0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

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
  /*
   * charOrSet
   * ...:%._\+~#=][-a-zA-Z0-9@:%._\+~#=][-a-zA-Z0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 58) {
    if (charCode1 <= 43) {
      if (charCode1 <= 37) {
        result1 = charCode1 === 35 || charCode1 === 37;
      } else {
        result1 = charCode1 === 43;
      }
    } else {
      if (charCode1 <= 46) {
        result1 = charCode1 >= 45;
      } else {
        result1 = charCode1 >= 48;
      }
    }
  } else {
    if (charCode1 <= 95) {
      if (charCode1 <= 90) {
        if (charCode1 === 61) {
          result1 = true;
        } else {
          result1 = charCode1 >= 64;
        }
      } else {
        result1 = charCode1 === 95;
      }
    } else {
      if (charCode1 <= 122) {
        result1 = charCode1 >= 97;
      } else {
        result1 = charCode1 === 126;
      }
    }
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * ...:%._\+~#=][-a-zA-Z0-9@:%._\+~#=]{0,254}\.[a-z][a-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;

  while (true) {
    const wrappedResult = fiber0005(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches2++;

      if (matches2 === 254) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches2 >= 0) {
    const directFollowUpResult2 = fiber0004(i, str, context);

    if (directFollowUpResult2 !== -1) {
      return directFollowUpResult2;
    }

    matches2--;
    i -= 1;
  }

  return -1;
};
const fiber0007 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...ps?:\/\/)?(www\.)?[-a-zA-Z0...
   *              ^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * charOrSet
   * ...s?:\/\/)?(www\.)?[-a-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

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
  let result2: boolean;

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
  let result3: boolean;

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
  let result4: boolean;

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
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  return greedyQuantifier0008(i, str, context);
};
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * /(https?:\/\/)?(www\.)?[-...
   *  ^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0010(i, str, context);

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
   * quantifierStarter
   * ...ps?:\/\/)?(www\.)?[-a-zA-Z0-...
   *              ^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0008 = context.quantifierCounter0;
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = greedyQuantifier0008(i, str, context);
  context.quantifierCounter0 = matchCountCopygreedyQuantifier0008;

  return cursorAfterQuantifier;
};
const fiber0010 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /(https?:\/\/)?(www\.)?[...
   *  ^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charOrSet
   * /(https?:\/\/...
   *   ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

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
  let result2: boolean;

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
  let result3: boolean;

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
  let result4: boolean;

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
    const wrappedResult = fiber0011(i, str, context);

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
  let result6: boolean;

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
  let result7: boolean;

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
  let result8: boolean;

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
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return i;
};
const fiber0011 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /(https?:\/\/)?(w...
   *       ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 115;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};

/*
 * ...ps?:\/\/)?(www\.)?[-a-zA-Z0-...
 *              ^^^^^^^^
 */
const greedyQuantifier0008 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  if (context.quantifierCounter0 === 1) {
    return fiber0006(start, str, context);
  }

  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const tryDeeperResult = fiber0007(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;

  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;

  const followUpResult = fiber0006(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
    context.quantifierCounter0--;
  }
  return followUpResult;
};
