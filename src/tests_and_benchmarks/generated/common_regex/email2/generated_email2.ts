// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/'
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
  quantifierCounter0: number;
  quantifierCounter1: number;
  quantifierCounter2: number;
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
    quantifierCounter0: -1,
    quantifierCounter1: -1,
    quantifierCounter2: -1,
  };

  // startAnchored
  const min = 0;
  const max = 0;

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

const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-z\.-]+)\.([a-z\.]{2,6})$/
   *              ^^^^^^^^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  /*
   * endAnchor
   * ...z\.]{2,6})$/
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
   * ...z\.-]+)\.([a-z\.]{2,6})$/
   *              ^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 === 46) {
    result0 = true;
  } else {
    if (charCode0 <= 122) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0003(i, str, context);
};
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ..._\.\+-]+)@([\da-z\.-]+)\.([a-z\.]...
   *              ^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * charOrSet
   * ...da-z\.-]+)\.([a-z\.]{2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 46;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-z\.-]+)\.([a-z\.]{2,6})$/
   *              ^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * quantifierStarter
   * ...z\.-]+)\.([a-z\.]{2,6})$/
   *              ^^^^^^^^^^^^
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
   * ...\.\+-]+)@([\da-z\.-]+)\.([a-z\...
   *              ^^^^^^^^^^
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
    if (charCode0 <= 122) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0006(i, str, context);
};
const fiber0007 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * /^([a-z0-9_\.\+-]+)@([\da-z\....
   *   ^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * charOrSet
   * ...9_\.\+-]+)@([\da-z\.-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 64;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ..._\.\+-]+)@([\da-z\.-]+)\.([a-z\.]...
   *              ^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * quantifierStarter
   * ...\.\+-]+)@([\da-z\.-]+)\.([a-z\....
   *              ^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0006 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0006(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0006;

  return cursorAfterQuantifier;
};
const fiber0008 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /^([a-z0-9_\.\+-]+)@([\da-z...
   *    ^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    if (charCode0 <= 46) {
      if (charCode0 === 43) {
        result0 = true;
      } else {
        result0 = charCode0 >= 45;
      }
    } else {
      result0 = charCode0 >= 48;
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
  return greedyQuantifier0009(i, str, context);
};
const fiber0010 = (i: number, str: string, context: Context): number => {
  /*
   * startAnchor
   * /^([a-z0-9_\...
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * groupStartMarker
   * /^([a-z0-9_\.\+-]+)@([\da-z\....
   *   ^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * quantifierStarter
   * /^([a-z0-9_\.\+-]+)@([\da-z\...
   *    ^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0009 = context.quantifierCounter2;
  context.quantifierCounter2 = -1;
  const cursorAfterQuantifier = greedyQuantifier0009(i, str, context);
  context.quantifierCounter2 = matchCountCopygreedyQuantifier0009;

  return cursorAfterQuantifier;
};

/*
 * ...z\.-]+)\.([a-z\.]{2,6})$/
 *              ^^^^^^^^^^^^
 */
const greedyQuantifier0003 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  if (context.quantifierCounter0 === 6) {
    return fiber0001(start, str, context);
  }

  const tryDeeperResult = fiber0002(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter0 < 2) {
    context.quantifierCounter0--;
    return -1;
  }

  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;

  const followUpResult = fiber0001(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
    context.quantifierCounter0--;
  }
  return followUpResult;
};
/*
 * ...\.\+-]+)@([\da-z\.-]+)\.([a-z\....
 *              ^^^^^^^^^^^
 */
const greedyQuantifier0006 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  const tryDeeperResult = fiber0005(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter1 < 1) {
    context.quantifierCounter1--;
    return -1;
  }

  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;

  const followUpResult = fiber0004(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * /^([a-z0-9_\.\+-]+)@([\da-z\...
 *    ^^^^^^^^^^^^^^^
 */
const greedyQuantifier0009 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter2++;

  const tryDeeperResult = fiber0008(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter2 < 1) {
    context.quantifierCounter2--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;

  const followUpResult = fiber0007(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
    context.quantifierCounter2--;
  }
  return followUpResult;
};
