// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/'
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

  // minCharsLeft
  const min = 0;
  const max = str.length - 1;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0012(i, str, context);
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

const fiber0001 = (start: number, str: string, context: Context): number => {
  let i = start;
  return i;
};
const fiber0002 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * ...[\/][0-9]+[,.]?[0-9]✱)✱/
   *              ^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0005(i, str, context);

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
   * nonBacktrackingQuantifier
   * ...0-9]+[,.]?[0-9]✱)✱/
   *              ^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0004(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupEndMarker
   * ...,.]?[0-9]✱([\/][0-9]+[,.]?[0-9]✱)✱/
   *              ^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return greedyQuantifier0003(i, str, context);
};
const fiber0004 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...0-9]+[,.]?[0-9]✱)✱/
   *              ^^^^^
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
  return i;
};
const fiber0005 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...[\/][0-9]+[,.]?[0-9]✱)✱/
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 44 || charCode0 === 46;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0006 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...0-9]✱([\/][0-9]+[,.]?[0-9...
   *              ^^^^^
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
  return i;
};
const fiber0007 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...,.]?[0-9]✱([\/][0-9]+[,.]?[0-9]✱)✱/
   *              ^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charOrSet
   * ....]?[0-9]✱([\/][0-9]+[,.]...
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 47;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * ...0-9]✱([\/][0-9]+[,.]?[0-9]...
   *              ^^^^^^
   */
  let matches2 = 0;

  while (true) {
    const wrappedResult = fiber0006(i, str, context);

    if (wrappedResult === -1) {
      if (matches2 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;
      matches2++;

      if (i >= str.length - 0) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches2 >= 1) {
    const directFollowUpResult2 = fiber0002(i, str, context);

    if (directFollowUpResult2 !== -1) {
      return directFollowUpResult2;
    }

    matches2--;
    i -= 1;
  }

  return -1;
};
const fiber0008 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * /[-]?[0-9]+[,.]?[0-9]✱([\/...
   *            ^^^^^
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
   * nonBacktrackingQuantifier
   * ...0-9]+[,.]?[0-9]✱([\/][0-9]...
   *              ^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0009(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * quantifierStarter
   * ...,.]?[0-9]✱([\/][0-9]+[,.]?[0-9]✱)✱/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const cursorAfterQuantifier = greedyQuantifier0003(i, str, context);

  return cursorAfterQuantifier;
};
const fiber0009 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...0-9]+[,.]?[0-9]✱([\/][0-9...
   *              ^^^^^
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
  return i;
};
const fiber0010 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * /[-]?[0-9]+[,.]?[0-9]✱([\...
   *            ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 44 || charCode0 === 46;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0011 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * /[-]?[0-9]+[,.]?[0-9...
   *      ^^^^^
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
  return i;
};
const fiber0012 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * /[-]?[0-9]+[,.]...
   *  ^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0013(i, str, context);

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
   * backtrackingFixedLengthQuantifier
   * /[-]?[0-9]+[,.]?[0-9]...
   *      ^^^^^^
   */
  let matches1 = 0;

  while (true) {
    const wrappedResult = fiber0011(i, str, context);

    if (wrappedResult === -1) {
      if (matches1 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;
      matches1++;

      if (i >= str.length - 0) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches1 >= 1) {
    const directFollowUpResult1 = fiber0008(i, str, context);

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 1;
  }

  return -1;
};
const fiber0013 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * /[-]?[0-9]+[,....
   *  ^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 45;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};

/*
 * ...,.]?[0-9]✱([\/][0-9]+[,.]?[0-9]✱)✱/
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0003 = (
  start: number,
  str: string,
  context: Context
): number => {
  if (start >= str.length - 0) {
    return fiber0001(start, str, context);
  }

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
