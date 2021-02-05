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
}

// Regex optimized to: /\b(\w\w*)\b(?=.*\b\1\b)/

export function generatedRegexMatcher(str: string) {
  const context: Context = {
    groupMarkerStart0: -1,
    groupMarkerStartTemp0: -1,
    groupMarkerEnd0: -1,
  };

  // minCharsLeft
  const min = 0;
  const max = str.length - 1;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0001(i, str, context);
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
   * /\b(\w\w✱)\b(...
   *  ^^
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
   * /\b(\w\w✱)\b(?=.✱\b\...
   *    ^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charSequence
   * /\b(\w\w✱)\b(?=....
   *     ^^
   */
  const iAfterMatch2 = i + 1;
  if (iAfterMatch2 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

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
        } else {
          result0 = false;
        }
      }
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch2;
  }
  /*
   * nonBacktrackingQuantifier
   * /\b(\w\w✱)\b(?=.✱\b...
   *       ^^^
   */
  while (true) {
    const wrappedResult = fiber0005(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupEndMarker
   * /\b(\w\w✱)\b(?=.✱\b\...
   *    ^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * wordBoundary
   * /\b(\w\w✱)\b(?=.✱\b\1\b)/
   *           ^^
   */
  if (i !== 0 && i !== str.length) {
    // TODO: find way to generate these trees
    const charCodeBefore5 = str.charCodeAt(i - 1);
    let isBeforeWord5 = false;
    if (charCodeBefore5 <= 90) {
      if (charCodeBefore5 <= 57) {
        isBeforeWord5 = charCodeBefore5 >= 48;
      } else {
        isBeforeWord5 = charCodeBefore5 >= 65;
      }
    } else {
      if (charCodeBefore5 === 95) {
        isBeforeWord5 = true;
      } else {
        if (charCodeBefore5 <= 122) {
          isBeforeWord5 = charCodeBefore5 >= 97;
        }
      }
    }

    const charCodeAfter5 = str.charCodeAt(i);
    let isAfterWord5 = false;
    if (charCodeAfter5 <= 90) {
      if (charCodeAfter5 <= 57) {
        isAfterWord5 = charCodeAfter5 >= 48;
      } else {
        isAfterWord5 = charCodeAfter5 >= 65;
      }
    } else {
      if (charCodeAfter5 === 95) {
        isAfterWord5 = true;
      } else {
        if (charCodeAfter5 <= 122) {
          isAfterWord5 = charCodeAfter5 >= 97;
        }
      }
    }

    if (isBeforeWord5 === isAfterWord5) {
      return -1;
    }
  }
  /*
   * lookaround
   * /\b(\w\w✱)\b(?=.✱\b\1\b)/
   *             ^^^^^^^^^^^^
   */
  const lookaroundResult6 = fiber0004(i, str, context);
  if (lookaroundResult6 === -1) {
    return -1;
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * wordBoundary
   * ...w✱)\b(?=.✱\b\1\b)/
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
   * ...)\b(?=.✱\b\1\b)/
   *              ^^
   */
  let backReferenceI1 = context.groupMarkerStart0;
  const backReferenceEnd1 = context.groupMarkerEnd0;
  while (backReferenceI1 < backReferenceEnd1) {
    if (i >= str.length) {
      return -1;
    }

    const backReferenceCharCode = str.charCodeAt(backReferenceI1);
    const currentCharCode = str.charCodeAt(i);

    if (backReferenceCharCode !== currentCharCode) {
      return -1;
    }

    backReferenceI1++;
    i++;
  }
  /*
   * wordBoundary
   * ...b(?=.✱\b\1\b)/
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
   * ...w\w✱)\b(?=.✱\b\1\b)/
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 13) {
    result0 = charCode0 === 10 || charCode0 === 13;
  } else {
    if (charCode0 <= 8233) {
      result0 = charCode0 >= 8232;
    } else {
      result0 = false;
    }
  }
  if (result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...w\w✱)\b(?=.✱\b\1\b)/
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0003(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches0++;
    }
  }

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0002(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /\b(\w\w✱)\b(?=.✱\...
   *       ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

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
      } else {
        result0 = false;
      }
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
