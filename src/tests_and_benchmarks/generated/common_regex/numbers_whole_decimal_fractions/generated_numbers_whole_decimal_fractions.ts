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

// Regex optimized to: /[-]?[0-9][0-9]*[,.]?[0-9]*([\/][0-9][0-9]*[,.]?[0-9]*)*/

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
    const posAfterMatch = fiber0010(i, str, context);
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
   * nonBacktrackingQuantifier
   * ...0-9][0-9]✱[,.]?[0-9]✱([\/...
   *              ^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0008(i, str, context);

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
   * ...0-9]✱[,.]?[0-9]✱([\/][0-9]...
   *              ^^^^^^
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
   * nonBacktrackingQuantifier
   * ...,.]?[0-9]✱([\/][0-9][0-9]✱[,.]?[0-9]✱)✱/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0006(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...0-9][0-9]✱[,.]?[0-9]✱)✱/
   *              ^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0004(i, str, context);

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
   * ...0-9]✱[,.]?[0-9]✱)✱/
   *              ^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0003(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupEndMarker
   * ...,.]?[0-9]✱([\/][0-9][0-9]✱[,.]?[0-9]✱)✱/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return i;
};
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9]✱[,.]?[0-9]✱)✱/
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
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
   * ...0-9][0-9]✱[,.]?[0-9]✱)✱/
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 44 || charCode0 === 46;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...([\/][0-9][0-9]✱[,.]?[0-9...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
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
   * ...,.]?[0-9]✱([\/][0-9][0-9]✱[,.]?[0-9]✱)✱/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charSequence
   * ....]?[0-9]✱([\/][0-9][0-9]...
   *              ^^^^
   */
  const iAfterMatch1 = i + 2;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 47;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * backtrackingFixedLengthQuantifier
   * ...([\/][0-9][0-9]✱[,.]?[0-9]...
   *              ^^^^^^
   */
  let matches2 = 0;

  while (true) {
    const wrappedResult = fiber0005(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches2++;
    }
  }

  // needs followUp & forkingFiber
  while (matches2 >= 0) {
    const directFollowUpResult2 = fiber0002(i, str, context);

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
   * charOrSet
   * ...0-9]✱[,.]?[0-9]✱([\/][0-9...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0008 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9][0-9]✱[,.]?[0-9]✱([\...
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 44 || charCode0 === 46;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /[-]?[0-9][0-9]✱[,.]?[0-9...
   *           ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0010 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * /[-]?[0-9][0-9]...
   *  ^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0011(i, str, context);

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
   * charSequence
   * /[-]?[0-9][0-9]✱[,.]...
   *      ^^^^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * backtrackingFixedLengthQuantifier
   * /[-]?[0-9][0-9]✱[,.]?[0-9]...
   *           ^^^^^^
   */
  let matches2 = 0;

  while (true) {
    const wrappedResult = fiber0009(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches2++;
    }
  }

  // needs followUp & forkingFiber
  while (matches2 >= 0) {
    const directFollowUpResult2 = fiber0001(i, str, context);

    if (directFollowUpResult2 !== -1) {
      return directFollowUpResult2;
    }

    matches2--;
    i -= 1;
  }

  return -1;
};
const fiber0011 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /[-]?[0-9][0-9...
   *  ^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 45;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
