// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/'
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
  quantifierCounter0: number;
}

// Regex optimized to: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=][-a-zA-Z0-9@:%._\+~#=][-a-zA-Z0-9@:%._\+~#=]{0,254}\.[a-z][a-z][a-z]{0,4}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/

export function generatedRegexMatcher(str: string) {
  const context: Context = {
    groupMarkerStart0: -1,
    groupMarkerStartTemp0: -1,
    groupMarkerEnd0: -1,
    groupMarkerStart1: -1,
    groupMarkerStartTemp1: -1,
    groupMarkerEnd1: -1,
    quantifierCounter0: -1,
  };

  // minCharsLeft
  const min = 0;
  const max = str.length - 12;

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
   * ...-z]{0,4}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]✱)/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * nonBacktrackingQuantifier
   * ...z]{0,4}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]✱)/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
   * ...-z]{0,4}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]✱)/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...z]{0,4}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]✱)/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 58) {
    if (charCode0 <= 41) {
      if (charCode0 <= 38) {
        if (charCode0 === 35) {
          result0 = true;
        } else {
          result0 = charCode0 >= 37;
        }
      } else {
        result0 = charCode0 >= 40;
      }
    } else {
      if (charCode0 === 43) {
        result0 = true;
      } else {
        result0 = charCode0 >= 45;
      }
    }
  } else {
    if (charCode0 <= 95) {
      if (charCode0 <= 90) {
        if (charCode0 === 61) {
          result0 = true;
        } else {
          result0 = charCode0 >= 63;
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
   * charSequence
   * ...#=]{0,254}\.[a-z][a-z]...
   *              ^^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 46;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 122) {
      result1 = charCode1 >= 97;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 122) {
      result2 = charCode2 >= 97;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * backtrackingFixedLengthQuantifier
   * ...[a-z][a-z][a-z]{0,4}\b([-a-zA-...
   *              ^^^^^^^^^^
   */
  let matches1 = 0;

  while (true) {
    const wrappedResult = fiber0003(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches1++;

      if (matches1 === 4) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches1 >= 0) {
    const directFollowUpResult1 = fiber0001(i, str, context);

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
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
   * charSequence
   * ...\/(www\.)?[-a-zA-Z0-9@:%._\+~#=][-a-zA-Z0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

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
    const charCode1 = str.charCodeAt(i + 0);

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

    i = iAfterMatch0;
  }
  /*
   * backtrackingFixedLengthQuantifier
   * ...:%._\+~#=][-a-zA-Z0-9@:%._\+~#=]{0,254}\.[a-z][a-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;

  while (true) {
    const wrappedResult = fiber0005(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches1++;

      if (matches1 === 254) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches1 >= 0) {
    const directFollowUpResult1 = fiber0004(i, str, context);

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 1;
  }

  return -1;
};
const fiber0007 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /https?:\/\/(www\.)?[-a-zA-Z0...
   *             ^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charSequence
   * /https?:\/\/(www\.)?[-a-...
   *              ^
   */
  const iAfterMatch1 = i + 4;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 3);

    let result0: boolean;

    result0 = charCode0 === 46;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    result1 = charCode1 === 119;

    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    result2 = charCode2 === 119;

    if (!result2) {
      return -1;
    }
    const charCode3 = str.charCodeAt(i + 0);

    let result3: boolean;

    result3 = charCode3 === 119;

    if (!result3) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * groupEndMarker
   * /https?:\/\/(www\.)?[-a-zA-Z0...
   *             ^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return greedyQuantifier0008(i, str, context);
};
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * /https?:\/\/...
   *  ^
   */
  const iAfterMatch0 = i + 4;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 3);

    let result0: boolean;

    result0 = charCode0 === 112;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    result1 = charCode1 === 116;

    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    result2 = charCode2 === 116;

    if (!result2) {
      return -1;
    }
    const charCode3 = str.charCodeAt(i + 0);

    let result3: boolean;

    result3 = charCode3 === 104;

    if (!result3) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingQuantifier
   * /https?:\/\/(www\...
   *      ^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0010(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches1++;

      if (matches1 === 1) {
        break;
      }
    }
  }
  /*
   * charSequence
   * /https?:\/\/(www\....
   *        ^
   */
  const iAfterMatch2 = i + 3;
  if (iAfterMatch2 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 2);

    let result0: boolean;

    result0 = charCode0 === 47;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    result1 = charCode1 === 47;

    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 0);

    let result2: boolean;

    result2 = charCode2 === 58;

    if (!result2) {
      return -1;
    }

    i = iAfterMatch2;
  }
  /*
   * quantifierStarter
   * /https?:\/\/(www\.)?[-a-zA-Z0-...
   *             ^^^^^^^^
   */
  context.quantifierCounter0 = -1;
  return greedyQuantifier0008(i, str, context);
};
const fiber0010 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /https?:\/\/(www...
   *      ^
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
 * /https?:\/\/(www\.)?[-a-zA-Z0-...
 *             ^^^^^^^^
 */
const greedyQuantifier0008 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  if (context.quantifierCounter0 !== 1) {
    const groupMarkerStartCopy0 = context.groupMarkerStart0;
    const groupMarkerEndCopy0 = context.groupMarkerEnd0;
    const tryDeeperResult = fiber0007(start, str, context);
    if (tryDeeperResult !== -1) {
      // we actually were able to go deeper, nice!
      return tryDeeperResult;
    }

    // recursion failed, reset groups
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
  }

  return fiber0006(start, str, context);
};
