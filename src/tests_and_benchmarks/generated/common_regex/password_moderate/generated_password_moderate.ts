// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/'
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
  const max = str.length - 8;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0004(i, str, context);
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
   * endAnchor
   * ...z]))^.{8,}$/
   *              ^
   */
  if (i !== str.length) {
    return -1;
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....✱[a-z]))^.{8,}$/
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
  return greedyQuantifier0003(i, str, context);
};
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * lookaround
   * /(?=(.✱[0-9]))((?=.✱[A-Z...
   *  ^^^^^^^^^^^^^
   */
  const lookaroundResult0 = fiber0020(i, str, context);
  if (lookaroundResult0 === -1) {
    return -1;
  }
  /*
   * groupStartMarker
   * ...(.✱[0-9]))((?=.✱[A-Za-z0-9])(?=.✱[A-Z])(?=.✱[a-z]))^.{8,}$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * lookaround
   * ....✱[0-9]))((?=.✱[A-Za-z0-9])(?=.✱[A-Z]...
   *              ^^^^^^^^^^^^^^^^^
   */
  const lookaroundResult2 = fiber0016(i, str, context);
  if (lookaroundResult2 === -1) {
    return -1;
  }
  /*
   * lookaround
   * ...-Za-z0-9])(?=.✱[A-Z])(?=.✱[a-z]...
   *              ^^^^^^^^^^^
   */
  const lookaroundResult3 = fiber0012(i, str, context);
  if (lookaroundResult3 === -1) {
    return -1;
  }
  /*
   * lookaround
   * ...?=.✱[A-Z])(?=.✱[a-z]))^.{8,}$/
   *              ^^^^^^^^^^^
   */
  const lookaroundResult4 = fiber0008(i, str, context);
  if (lookaroundResult4 === -1) {
    return -1;
  }
  /*
   * groupEndMarker
   * ...(.✱[0-9]))((?=.✱[A-Za-z0-9])(?=.✱[A-Z])(?=.✱[a-z]))^.{8,}$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * startAnchor
   * ...=.✱[a-z]))^.{8,}$/
   *              ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * quantifierStarter
   * ....✱[a-z]))^.{8,}$/
   *              ^^^^^
   */
  let matchCountCopygreedyQuantifier0003 = context.quantifierCounter0;
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = greedyQuantifier0003(i, str, context);
  context.quantifierCounter0 = matchCountCopygreedyQuantifier0003;

  return cursorAfterQuantifier;
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...A-Z])(?=.✱[a-z]))^.{8,}$/
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
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...✱[A-Z])(?=.✱[a-z]))^....
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
  return greedyQuantifier0007(i, str, context);
};
const fiber0008 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...✱[A-Z])(?=.✱[a-z]))^.{...
   *              ^^
   */
  const cursorAfterQuantifier = greedyQuantifier0007(i, str, context);

  return cursorAfterQuantifier;
};
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9])(?=.✱[A-Z])(?=.✱[a-z...
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
  return i;
};
const fiber0010 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-z0-9])(?=.✱[A-Z])(?=...
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
  return greedyQuantifier0011(i, str, context);
};
const fiber0012 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...-z0-9])(?=.✱[A-Z])(?=....
   *              ^^
   */
  const cursorAfterQuantifier = greedyQuantifier0011(i, str, context);

  return cursorAfterQuantifier;
};
const fiber0013 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]))((?=.✱[A-Za-z0-9])(?=.✱[A-Z...
   *              ^^^^^^^^^^^
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
const fiber0014 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9]))((?=.✱[A-Za-z0-...
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
  return greedyQuantifier0015(i, str, context);
};
const fiber0016 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...0-9]))((?=.✱[A-Za-z0-9...
   *              ^^
   */
  const cursorAfterQuantifier = greedyQuantifier0015(i, str, context);

  return cursorAfterQuantifier;
};
const fiber0017 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /(?=(.✱[0-9]))((?=.✱[A...
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
   * /(?=(.✱[0-9]))((?=.✱[A-...
   *     ^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return i;
};
const fiber0018 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /(?=(.✱[0-9]))((...
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
  return greedyQuantifier0019(i, str, context);
};
const fiber0020 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /(?=(.✱[0-9]))((?=.✱[A-...
   *     ^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * quantifierStarter
   * /(?=(.✱[0-9]))((?...
   *      ^^
   */
  const cursorAfterQuantifier = greedyQuantifier0019(i, str, context);

  return cursorAfterQuantifier;
};

/*
 * ....✱[a-z]))^.{8,}$/
 *              ^^^^^
 */
const greedyQuantifier0003 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  const tryDeeperResult = fiber0002(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter0 < 8) {
    context.quantifierCounter0--;
    return -1;
  }

  const followUpResult = fiber0001(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter0--;
  }
  return followUpResult;
};
/*
 * ...✱[A-Z])(?=.✱[a-z]))^.{...
 *              ^^
 */
const greedyQuantifier0007 = (
  start: number,
  str: string,
  context: Context
): number => {
  const tryDeeperResult = fiber0006(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0005(start, str, context);

  if (followUpResult === -1) {
  }
  return followUpResult;
};
/*
 * ...-z0-9])(?=.✱[A-Z])(?=....
 *              ^^
 */
const greedyQuantifier0011 = (
  start: number,
  str: string,
  context: Context
): number => {
  const tryDeeperResult = fiber0010(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0009(start, str, context);

  if (followUpResult === -1) {
  }
  return followUpResult;
};
/*
 * ...0-9]))((?=.✱[A-Za-z0-9...
 *              ^^
 */
const greedyQuantifier0015 = (
  start: number,
  str: string,
  context: Context
): number => {
  const tryDeeperResult = fiber0014(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0013(start, str, context);

  if (followUpResult === -1) {
  }
  return followUpResult;
};
/*
 * /(?=(.✱[0-9]))((?...
 *      ^^
 */
const greedyQuantifier0019 = (
  start: number,
  str: string,
  context: Context
): number => {
  const tryDeeperResult = fiber0018(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0017(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
  }
  return followUpResult;
};
