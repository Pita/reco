// This code was generated with RECO vDEV
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

interface Context {
  groupMarkerStart0: number;
  groupMarkerStartTemp0: number;
  groupMarkerEnd0: number;
  quantifierCounter0: number;
}

export function generatedRegexMatcher(str: string) {
  const context: Context = {
    groupMarkerStart0: -1,
    groupMarkerStartTemp0: -1,
    groupMarkerEnd0: -1,
    quantifierCounter0: -1,
  };

  // minCharsLeft
  const min = 0;
  const max = str.length - 1;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0008(i, str, context);
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [
          str.substring(i, posAfterMatch),
          context.groupMarkerEnd0 !== -1
            ? str.substring(context.groupMarkerStart0, context.groupMarkerEnd0)
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
   * /(\b\w+\b)(?=.✱\b\1...
   *        ^^
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
   * groupEndMarker
   * /(\b\w+\b)(?=.✱\b\1\b)/
   *  ^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * lookaround
   * /(\b\w+\b)(?=.✱\b\1\b)/
   *           ^^^^^^^^^^^^
   */
  const lookaroundResult2 = fiber0005(i, str, context);
  if (lookaroundResult2 === -1) {
    return -1;
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
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
  let backReferenceI = context.groupMarkerStart0;
  const backReferenceEnd = context.groupMarkerEnd0;
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
const fiber0003 = (i: number, str: string, context: Context): number => {
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
  return greedyQuantifier0004(i, str, context);
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * /(\b\w+\b)(?=.✱\b\1\b)/
   *              ^^
   */
  const cursorAfterQuantifier = greedyQuantifier0004(i, str, context);

  return cursorAfterQuantifier;
};
const fiber0006 = (i: number, str: string, context: Context): number => {
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
  return greedyQuantifier0007(i, str, context);
};
const fiber0008 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /(\b\w+\b)(?=.✱\b\1\b)/
   *  ^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
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
   * quantifierStarter
   * /(\b\w+\b)(?=.✱\b...
   *     ^^^
   */
  let matchCountCopygreedyQuantifier0007 = context.quantifierCounter0;
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = greedyQuantifier0007(i, str, context);
  context.quantifierCounter0 = matchCountCopygreedyQuantifier0007;

  return cursorAfterQuantifier;
};

/*
 * /(\b\w+\b)(?=.✱\b\1\b)/
 *              ^^
 */
const greedyQuantifier0004 = (
  start: number,
  str: string,
  context: Context
): number => {
  const tryDeeperResult = fiber0003(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0002(start, str, context);

  if (followUpResult === -1) {
  }
  return followUpResult;
};
/*
 * /(\b\w+\b)(?=.✱\b...
 *     ^^^
 */
const greedyQuantifier0007 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  const tryDeeperResult = fiber0006(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter0 < 1) {
    context.quantifierCounter0--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0001(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.quantifierCounter0--;
  }
  return followUpResult;
};
