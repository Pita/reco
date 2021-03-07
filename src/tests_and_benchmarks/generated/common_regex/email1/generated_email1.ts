// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/'
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

// Regex optimized to: /^([a-zA-Z0-9._%-][a-zA-Z0-9._%-]*@[a-zA-Z0-9.-][a-zA-Z0-9.-]*\.[a-zA-Z][a-zA-Z][a-zA-Z]{0,4})*$/

export function generatedRegexMatcher(str: string) {
  const context: Context = {
    groupMarkerStart0: -1,
    groupMarkerStartTemp0: -1,
    groupMarkerEnd0: -1,
  };

  // startAnchored
  const min = 0;
  const max = 0;

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

const fiber0007 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-Z0-9._%-][a-zA-Z0-9._%-]✱@[a-zA-Z0...
   *              ^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    if (charCode0 <= 46) {
      if (charCode0 === 37) {
        result0 = true;
      } else {
        result0 = charCode0 >= 45;
      }
    } else {
      result0 = charCode0 >= 48;
    }
  } else {
    if (charCode0 <= 95) {
      if (charCode0 <= 90) {
        result0 = charCode0 >= 65;
      } else {
        result0 = charCode0 === 95;
      }
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
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /^([a-zA-Z0-9...
   *   ^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charSequence
   * /^([a-zA-Z0-9._%-][a-zA-Z0-9...
   *    ^^^^^^^^^^^^^^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 57) {
      if (charCode0 <= 46) {
        if (charCode0 === 37) {
          result0 = true;
        } else {
          result0 = charCode0 >= 45;
        }
      } else {
        result0 = charCode0 >= 48;
      }
    } else {
      if (charCode0 <= 95) {
        if (charCode0 <= 90) {
          result0 = charCode0 >= 65;
        } else {
          result0 = charCode0 === 95;
        }
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

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...-Z0-9._%-][a-zA-Z0-9._%-]✱@[a-zA-Z0-...
   *              ^^^^^^^^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0007(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * charSequence
   * ...Z0-9._%-]✱@[a-zA-Z0-9.-][a-zA-Z0-9...
   *              ^^^^^^^^^^^^^^
   */
  const iAfterMatch3 = i + 2;
  if (iAfterMatch3 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 64;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 57) {
      if (charCode1 <= 46) {
        result1 = charCode1 >= 45;
      } else {
        result1 = charCode1 >= 48;
      }
    } else {
      if (charCode1 <= 90) {
        result1 = charCode1 >= 65;
      } else {
        if (charCode1 <= 122) {
          result1 = charCode1 >= 97;
        } else {
          result1 = false;
        }
      }
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch3;
  }
  /*
   * backtrackingFixedLengthQuantifier
   * ...zA-Z0-9.-][a-zA-Z0-9.-]✱\.[a-zA-Z]...
   *              ^^^^^^^^^^^^^^
   */
  let matches4 = 0;

  while (true) {
    const wrappedResult = fiber0005(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches4++;
    }
  }

  // needs followUp & forkingFiber
  while (matches4 >= 0) {
    const directFollowUpResult4 = fiber0004(i, str, context);

    if (directFollowUpResult4 !== -1) {
      return directFollowUpResult4;
    }

    matches4--;
    i -= 1;
  }

  return -1;
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...zA-Z0-9.-][a-zA-Z0-9.-]✱\.[a-zA-Z...
   *              ^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    if (charCode0 <= 46) {
      result0 = charCode0 >= 45;
    } else {
      result0 = charCode0 >= 48;
    }
  } else {
    if (charCode0 <= 90) {
      result0 = charCode0 >= 65;
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
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...A-Z0-9.-]✱\.[a-zA-Z][a-zA-Z][a-zA-Z]{0...
   *              ^^^^^^^^^^^^^^^^^^
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

    if (charCode1 <= 90) {
      result1 = charCode1 >= 65;
    } else {
      if (charCode1 <= 122) {
        result1 = charCode1 >= 97;
      } else {
        result1 = false;
      }
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 90) {
      result2 = charCode2 >= 65;
    } else {
      if (charCode2 <= 122) {
        result2 = charCode2 >= 97;
      } else {
        result2 = false;
      }
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * backtrackingFixedLengthQuantifier
   * ...Z][a-zA-Z][a-zA-Z]{0,4})✱$/
   *              ^^^^^^^^^^^^^
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
    const directFollowUpResult1 = fiber0002(i, str, context);

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 1;
  }

  return -1;
};
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Z][a-zA-Z][a-zA-Z]{0,4})✱$/
   *              ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 90) {
    result0 = charCode0 >= 65;
  } else {
    if (charCode0 <= 122) {
      result0 = charCode0 >= 97;
    } else {
      result0 = false;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...zA-Z]{0,4})✱$/
   *              ^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return i;
};
const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * startAnchor
   * /^([a-zA-Z0-...
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * nonBacktrackingQuantifier
   * /^([a-zA-Z0-9._%-][a-zA-Z0-9._%-]✱@[a-zA-Z0-9.-][a-zA-Z0-9.-]✱\.[a-zA-Z][a-zA-Z][a-zA-Z]{0,4})✱$/
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0006(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * endAnchor
   * ...-Z]{0,4})✱$/
   *              ^
   */
  if (i !== str.length) {
    return -1;
  }
  return i;
};
