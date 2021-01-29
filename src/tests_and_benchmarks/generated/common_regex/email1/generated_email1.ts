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
    const posAfterMatch = fiber0009(i, str, context);
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
   * endAnchor
   * ...-Z]{0,4})✱$/
   *              ^
   */
  if (i !== str.length) {
    return -1;
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * /^([a-zA-Z0-9._%-][a-zA-Z0-9._%-]✱@[a-zA-Z0-9.-][a-zA-Z0-9.-]✱\.[a-zA-Z][a-zA-Z][a-zA-Z]{0,4})✱$/
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return greedyQuantifier0003(i, str, context);
};
const fiber0004 = (i: number, str: string, context: Context): number => {
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
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...A-Z0-9.-]✱\.[a-zA-Z][a...
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
   * ...Z0-9.-]✱\.[a-zA-Z][a-zA-Z][a...
   *              ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
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
  i++;
  /*
   * charOrSet
   * ...\.[a-zA-Z][a-zA-Z][a-zA-Z]{0...
   *              ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
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
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * ...Z][a-zA-Z][a-zA-Z]{0,4})✱$/
   *              ^^^^^^^^^^^^^
   */
  let matches3 = 0;

  while (true) {
    const wrappedResult = fiber0004(i, str, context);

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
    const directFollowUpResult3 = fiber0002(i, str, context);

    if (directFollowUpResult3 !== -1) {
      return directFollowUpResult3;
    }

    matches3--;
    i -= 1;
  }

  return -1;
};
const fiber0006 = (i: number, str: string, context: Context): number => {
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
const fiber0007 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /^([a-zA-Z0-9._%-][a-zA-Z0-9._%-]✱@[a-zA-Z0-9.-][a-zA-Z0-9.-]✱\.[a-zA-Z][a-zA-Z][a-zA-Z]{0,4})✱$/
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charOrSet
   * /^([a-zA-Z0-9._%-][a-zA-Z0-9...
   *    ^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 57) {
    if (charCode1 <= 46) {
      if (charCode1 === 37) {
        result1 = true;
      } else {
        result1 = charCode1 >= 45;
      }
    } else {
      result1 = charCode1 >= 48;
    }
  } else {
    if (charCode1 <= 95) {
      if (charCode1 <= 90) {
        result1 = charCode1 >= 65;
      } else {
        result1 = charCode1 === 95;
      }
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
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...-Z0-9._%-][a-zA-Z0-9._%-]✱@[a-zA-Z0-...
   *              ^^^^^^^^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0008(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * charOrSet
   * ...Z0-9._%-]✱@[a-zA-Z0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 64;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-9._%-]✱@[a-zA-Z0-9.-][a-zA-Z0-9...
   *              ^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4: boolean;

  if (charCode4 <= 57) {
    if (charCode4 <= 46) {
      result4 = charCode4 >= 45;
    } else {
      result4 = charCode4 >= 48;
    }
  } else {
    if (charCode4 <= 90) {
      result4 = charCode4 >= 65;
    } else {
      if (charCode4 <= 122) {
        result4 = charCode4 >= 97;
      } else {
        result4 = false;
      }
    }
  }
  if (!result4) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * ...zA-Z0-9.-][a-zA-Z0-9.-]✱\.[a-zA-Z]...
   *              ^^^^^^^^^^^^^^
   */
  let matches5 = 0;

  while (true) {
    const wrappedResult = fiber0006(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches5++;
    }
  }

  // needs followUp & forkingFiber
  while (matches5 >= 0) {
    const directFollowUpResult5 = fiber0005(i, str, context);

    if (directFollowUpResult5 !== -1) {
      return directFollowUpResult5;
    }

    matches5--;
    i -= 1;
  }

  return -1;
};
const fiber0008 = (i: number, str: string, context: Context): number => {
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
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * startAnchor
   * /^([a-zA-Z0-...
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * quantifierStarter
   * /^([a-zA-Z0-9._%-][a-zA-Z0-9._%-]✱@[a-zA-Z0-9.-][a-zA-Z0-9.-]✱\.[a-zA-Z][a-zA-Z][a-zA-Z]{0,4})✱$/
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const cursorAfterQuantifier = greedyQuantifier0003(i, str, context);

  return cursorAfterQuantifier;
};

/*
 * /^([a-zA-Z0-9._%-][a-zA-Z0-9._%-]✱@[a-zA-Z0-9.-][a-zA-Z0-9.-]✱\.[a-zA-Z][a-zA-Z][a-zA-Z]{0,4})✱$/
 *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0003 = (
  start: number,
  str: string,
  context: Context
): number => {
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

  const followUpResult = fiber0001(start, str, context);

  if (followUpResult === -1) {
  }
  return followUpResult;
};
