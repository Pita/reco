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

// Regex optimized to: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).........*/

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

const fiber0016 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /(?=(.✱[0-9]))(...
   *     ^
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
const fiber0015 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /(?=(.✱[0-9]))(?...
   *      ^
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
const fiber0014 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * /(?=(.✱[0-9]))(?=.✱[\!...
   *        ^^^^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
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

    i = iAfterMatch0;
  }
  /*
   * groupEndMarker
   * /(?=(.✱[0-9]))(?=.✱[\!@...
   *             ^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return i;
};
const fiber0013 = (i: number, str: string, context: Context): number => {
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
const fiber0012 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...[0-9]))(?=.✱[\!@#$%^&...
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
const fiber0011 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...-9]))(?=.✱[\!@#$%^&✱()\[\]{}\-_+=~`|:;"'<>,./?])(?=.✱[a-z...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

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
        } else {
          result0 = false;
        }
      }
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0010 = (i: number, str: string, context: Context): number => {
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
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...>,./?])(?=.✱[a-z])(?=...
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
const fiber0008 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ..../?])(?=.✱[a-z])(?=(.✱[A-...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 122) {
      result0 = charCode0 >= 97;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0007 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...✱[a-z])(?=(.✱[A-Z]))(...
   *              ^
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
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...[a-z])(?=(.✱[A-Z]))(?...
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
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...-z])(?=(.✱[A-Z]))(?=(.✱))...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 90) {
      result0 = charCode0 >= 65;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * groupEndMarker
   * ...?=(.✱[A-Z]))(?=(.✱))....
   *              ^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  return i;
};
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...A-Z]))(?=(.✱))..........
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
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...[A-Z]))(?=(.✱)).........
   *              ^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * nonBacktrackingQuantifier
   * ...A-Z]))(?=(.✱)).........✱/
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
   * ...Z]))(?=(.✱)).........✱/
   *              ^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...)).........✱/
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
const fiber0001 = (i: number, str: string, context: Context): number => {
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
   * ...?=.✱[a-z])(?=(.✱[A-Z]))(?=(.✱)).....
   *              ^^^^^^^^^^^^^
   */
  const lookaroundResult3 = fiber0007(i, str, context);
  if (lookaroundResult3 === -1) {
    return -1;
  }
  /*
   * lookaround
   * ...(.✱[A-Z]))(?=(.✱)).........✱/
   *              ^^^^^^^^
   */
  const lookaroundResult4 = fiber0003(i, str, context);
  if (lookaroundResult4 === -1) {
    return -1;
  }
  /*
   * charSequence
   * ...))(?=(.✱)).........✱/
   *              ^^^^^^^^
   */
  const iAfterMatch5 = i + 8;
  if (iAfterMatch5 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 7);

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
    const charCode1 = str.charCodeAt(i + 6);

    let result1: boolean;

    if (charCode1 <= 13) {
      result1 = charCode1 === 10 || charCode1 === 13;
    } else {
      if (charCode1 <= 8233) {
        result1 = charCode1 >= 8232;
      } else {
        result1 = false;
      }
    }
    if (result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 5);

    let result2: boolean;

    if (charCode2 <= 13) {
      result2 = charCode2 === 10 || charCode2 === 13;
    } else {
      if (charCode2 <= 8233) {
        result2 = charCode2 >= 8232;
      } else {
        result2 = false;
      }
    }
    if (result2) {
      return -1;
    }
    const charCode3 = str.charCodeAt(i + 4);

    let result3: boolean;

    if (charCode3 <= 13) {
      result3 = charCode3 === 10 || charCode3 === 13;
    } else {
      if (charCode3 <= 8233) {
        result3 = charCode3 >= 8232;
      } else {
        result3 = false;
      }
    }
    if (result3) {
      return -1;
    }
    const charCode4 = str.charCodeAt(i + 3);

    let result4: boolean;

    if (charCode4 <= 13) {
      result4 = charCode4 === 10 || charCode4 === 13;
    } else {
      if (charCode4 <= 8233) {
        result4 = charCode4 >= 8232;
      } else {
        result4 = false;
      }
    }
    if (result4) {
      return -1;
    }
    const charCode5 = str.charCodeAt(i + 2);

    let result5: boolean;

    if (charCode5 <= 13) {
      result5 = charCode5 === 10 || charCode5 === 13;
    } else {
      if (charCode5 <= 8233) {
        result5 = charCode5 >= 8232;
      } else {
        result5 = false;
      }
    }
    if (result5) {
      return -1;
    }
    const charCode6 = str.charCodeAt(i + 1);

    let result6: boolean;

    if (charCode6 <= 13) {
      result6 = charCode6 === 10 || charCode6 === 13;
    } else {
      if (charCode6 <= 8233) {
        result6 = charCode6 >= 8232;
      } else {
        result6 = false;
      }
    }
    if (result6) {
      return -1;
    }
    const charCode7 = str.charCodeAt(i + 0);

    let result7: boolean;

    if (charCode7 <= 13) {
      result7 = charCode7 === 10 || charCode7 === 13;
    } else {
      if (charCode7 <= 8233) {
        result7 = charCode7 >= 8232;
      } else {
        result7 = false;
      }
    }
    if (result7) {
      return -1;
    }

    i = iAfterMatch5;
  }
  /*
   * nonBacktrackingQuantifier
   * ...)).........✱/
   *              ^^
   */
  while (true) {
    const wrappedResult = fiber0002(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  return i;
};
