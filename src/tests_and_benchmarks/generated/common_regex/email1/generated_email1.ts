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
   * ...-Z]{2,6})✱$/
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
   * /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})✱$/
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return greedyQuantifier0003(i, str, context);
};
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Z0-9.-]+\.[a-zA-Z]{2,6})✱$/
   *              ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 90) {
    result0 = charCode0 >= 65;
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
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...A-Z0-9.-]+\.[a-zA-Z]{2...
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
   * ...Z0-9.-]+\.[a-zA-Z]{2,6})✱$/
   *              ^^^^^^^^^^^^^
   */
  let matches1 = 0;

  while (true) {
    const wrappedResult = fiber0004(i, str, context);

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
    const directFollowUpResult1 = fiber0002(i, str, context);

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 1;
  }

  return -1;
};
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z...
   *              ^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

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
   * /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})✱$/
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * nonBacktrackingQuantifier
   * /^([a-zA-Z0-9._%-]+@[a-zA-Z0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0008(i, str, context);

    if (wrappedResult === -1) {
      if (matches1 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches1++;
    }
  }
  /*
   * charOrSet
   * ...Z0-9._%-]+@[a-zA-Z0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 64;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * ...0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]...
   *              ^^^^^^^^^^^^^^
   */
  let matches3 = 0;

  while (true) {
    const wrappedResult = fiber0006(i, str, context);

    if (wrappedResult === -1) {
      if (matches3 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;
      matches3++;
    }
  }

  // needs followUp & forkingFiber
  while (matches3 >= 1) {
    const directFollowUpResult3 = fiber0005(i, str, context);

    if (directFollowUpResult3 !== -1) {
      return directFollowUpResult3;
    }

    matches3--;
    i -= 1;
  }

  return -1;
};
const fiber0008 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /^([a-zA-Z0-9._%-]+@[a-zA-Z0...
   *    ^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

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
   * /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})✱$/
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const cursorAfterQuantifier = greedyQuantifier0003(i, str, context);

  return cursorAfterQuantifier;
};

/*
 * /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})✱$/
 *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
