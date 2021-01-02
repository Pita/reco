// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/'
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
}

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
  };

  // minCharsLeft
  const min = 0;
  const max = str.length - 8;

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

const fiber0001 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * lookaround
   * /(?=(.✱[0-9]))(?=.✱[\!@#...
   *  ^^^^^^^^^^^^^
   */
  const lookaroundResult0 = fiber0016(i, str, context);
  if (lookaroundResult0 === -1) {
    return -1;
  }
  /*
   * lookaround
   * ...(.✱[0-9]))(?=.✱[\!@#$%^&✱()\[\]{}\-_+=~`|:;"'<>,./?])(?=.✱[a-z]...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const lookaroundResult1 = fiber0013(i, str, context);
  if (lookaroundResult1 === -1) {
    return -1;
  }
  /*
   * lookaround
   * ..."'<>,./?])(?=.✱[a-z])(?=(.✱[A-Z...
   *              ^^^^^^^^^^^
   */
  const lookaroundResult2 = fiber0010(i, str, context);
  if (lookaroundResult2 === -1) {
    return -1;
  }
  /*
   * lookaround
   * ...?=.✱[a-z])(?=(.✱[A-Z]))(?=(.✱)).{...
   *              ^^^^^^^^^^^^^
   */
  const lookaroundResult3 = fiber0007(i, str, context);
  if (lookaroundResult3 === -1) {
    return -1;
  }
  /*
   * lookaround
   * ...(.✱[A-Z]))(?=(.✱)).{8,}/
   *              ^^^^^^^^
   */
  const lookaroundResult4 = fiber0003(i, str, context);
  if (lookaroundResult4 === -1) {
    return -1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...))(?=(.✱)).{8,}/
   *              ^^^^^
   */
  let matches5 = 0;
  while (true) {
    const wrappedResult = fiber0002(i, str, context);

    if (wrappedResult === -1) {
      if (matches5 < 8) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches5++;
    }
  }
  return i;
};
const fiber0002 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...))(?=(.✱)).{8,}/
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
const fiber0003 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...[A-Z]))(?=(.✱)).{8,}/
   *              ^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * nonBacktrackingQuantifier
   * ...A-Z]))(?=(.✱)).{8,}/
   *              ^^
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
   * ...[A-Z]))(?=(.✱)).{8,}/
   *              ^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  return i;
};
const fiber0004 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...A-Z]))(?=(.✱)).{8,}/
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
const fiber0005 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...-z])(?=(.✱[A-Z]))(?=(.✱))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 90) {
    result0 = charCode0 >= 65;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...✱[a-z])(?=(.✱[A-Z]))(?=(.✱))....
   *              ^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  return i;
};
const fiber0006 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...[a-z])(?=(.✱[A-Z]))(?...
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
const fiber0007 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...✱[a-z])(?=(.✱[A-Z]))(?=(.✱))....
   *              ^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * backtrackingFixedLengthQuantifier
   * ...[a-z])(?=(.✱[A-Z]))(?=...
   *              ^^
   */
  let matches1 = 0;

  while (true) {
    const wrappedResult = fiber0006(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches1++;
    }
  }

  // needs followUp & forkingFiber
  while (matches1 >= 0) {
    const directFollowUpResult1 = fiber0005(i, str, context);

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 1;
  }

  return -1;
};
const fiber0008 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ..../?])(?=.✱[a-z])(?=(.✱[A-...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 122) {
    result0 = charCode0 >= 97;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0009 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...>,./?])(?=.✱[a-z])(?=...
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
const fiber0010 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...>,./?])(?=.✱[a-z])(?=(...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0009(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches0++;
    }
  }

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0008(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0011 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...-9]))(?=.✱[\!@#$%^&✱()\[\]{}\-_+=~`|:;"'<>,./?])(?=.✱[a-z...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 91) {
    if (charCode0 <= 64) {
      if (charCode0 <= 47) {
        result0 = charCode0 >= 33;
      } else {
        result0 = charCode0 >= 58;
      }
    } else {
      result0 = charCode0 === 91;
    }
  } else {
    if (charCode0 <= 96) {
      result0 = charCode0 >= 93;
    } else {
      if (charCode0 <= 126) {
        result0 = charCode0 >= 123;
      }
    }
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
   * charOrSet
   * ...[0-9]))(?=.✱[\!@#$%^&...
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
const fiber0013 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...[0-9]))(?=.✱[\!@#$%^&✱...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0012(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches0++;
    }
  }

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0011(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0014 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * /(?=(.✱[0-9]))(?=.✱[\!...
   *        ^^^^^
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
  /*
   * groupEndMarker
   * /(?=(.✱[0-9]))(?=.✱[\!@...
   *     ^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return i;
};
const fiber0015 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * /(?=(.✱[0-9]))(?...
   *      ^
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
const fiber0016 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * /(?=(.✱[0-9]))(?=.✱[\!@...
   *     ^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * backtrackingFixedLengthQuantifier
   * /(?=(.✱[0-9]))(?=...
   *      ^^
   */
  let matches1 = 0;

  while (true) {
    const wrappedResult = fiber0015(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches1++;
    }
  }

  // needs followUp & forkingFiber
  while (matches1 >= 0) {
    const directFollowUpResult1 = fiber0014(i, str, context);

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 1;
  }

  return -1;
};
