// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/((?:\*[0-9a-z]+)*)(?:\|([0-9a-z]+))?([-+=])([0-9a-z]+)|\?/'
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
  groupMarkerStart3: number;
  groupMarkerStartTemp3: number;
  groupMarkerEnd3: number;
  quantifierCounter0: number;
  quantifierCounter1: number;
  quantifierCounter2: number;
  quantifierCounter3: number;
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
    groupMarkerStart3: -1,
    groupMarkerStartTemp3: -1,
    groupMarkerEnd3: -1,
    quantifierCounter0: -1,
    quantifierCounter1: -1,
    quantifierCounter2: -1,
    quantifierCounter3: -1,
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
          context.groupMarkerEnd1 !== -1
            ? str.substring(context.groupMarkerStart1, context.groupMarkerEnd1)
            : undefined,
          context.groupMarkerEnd2 !== -1
            ? str.substring(context.groupMarkerStart2, context.groupMarkerEnd2)
            : undefined,
          context.groupMarkerEnd3 !== -1
            ? str.substring(context.groupMarkerStart3, context.groupMarkerEnd3)
            : undefined,
        ],
      };
    }
  }

  return null;
}

const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * /((?:\✱[0-9a-z]+)✱)(?:\|([0-9a-z]+))?([-+=])([0-9a-z]+)|\?/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const groupMarkerStartCopy0 = context.groupMarkerStart0;
    const groupMarkerEndCopy0 = context.groupMarkerEnd0;
    const groupMarkerStartCopy1 = context.groupMarkerStart1;
    const groupMarkerEndCopy1 = context.groupMarkerEnd1;
    const groupMarkerStartCopy2 = context.groupMarkerStart2;
    const groupMarkerEndCopy2 = context.groupMarkerEnd2;
    const groupMarkerStartCopy3 = context.groupMarkerStart3;
    const groupMarkerEndCopy3 = context.groupMarkerEnd3;
    const length0 = fiber0017(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
    context.groupMarkerStart3 = groupMarkerStartCopy3;
    context.groupMarkerEnd3 = groupMarkerEndCopy3;
    const length1 = fiber0018(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...))?([-+=])([0-9a-z]+)|\?/
   *              ^^^^^^^^^^^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  return i;
};
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...)?([-+=])([0-9a-z]+)|\?/
   *              ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    if (charCode0 <= 122) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0004(i, str, context);
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...-9a-z]+))?([-+=])([0-9a-z]+...
   *              ^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * charOrSet
   * ...9a-z]+))?([-+=])([0-9a-z]...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 45) {
    result1 = charCode1 === 43 || charCode1 === 45;
  } else {
    result1 = charCode1 === 61;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...-9a-z]+))?([-+=])([0-9a-z]+...
   *              ^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  /*
   * groupStartMarker
   * ...))?([-+=])([0-9a-z]+)|\?/
   *              ^^^^^^^^^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * quantifierStarter
   * ...)?([-+=])([0-9a-z]+)|\?/
   *              ^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0004 = context.quantifierCounter0;
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = greedyQuantifier0004(i, str, context);
  context.quantifierCounter0 = matchCountCopygreedyQuantifier0004;

  return cursorAfterQuantifier;
};
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...]+)✱)(?:\|([0-9a-z]+))?([-+=])(...
   *              ^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  return greedyQuantifier0007(i, str, context);
};
const fiber0008 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...+)✱)(?:\|([0-9a-z]+))?([-+=]...
   *              ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    if (charCode0 <= 122) {
      result0 = charCode0 >= 97;
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
   * charOrSet
   * ...-z]+)✱)(?:\|([0-9a-z]+...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 124;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...]+)✱)(?:\|([0-9a-z]+))?([-+=])(...
   *              ^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * quantifierStarter
   * ...+)✱)(?:\|([0-9a-z]+))?([-+=])...
   *              ^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0009 = context.quantifierCounter2;
  context.quantifierCounter2 = -1;
  const cursorAfterQuantifier = greedyQuantifier0009(i, str, context);
  context.quantifierCounter2 = matchCountCopygreedyQuantifier0009;

  return cursorAfterQuantifier;
};
const fiber0011 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * /((?:\✱[0-9a-z]+)✱)(?:\|([0-9...
   *  ^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * quantifierStarter
   * ...-9a-z]+)✱)(?:\|([0-9a-z]+))?([-+=])([0...
   *              ^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0007 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0007(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0007;

  return cursorAfterQuantifier;
};
const fiber0012 = (i: number, str: string, context: Context): number => {
  return greedyQuantifier0013(i, str, context);
};
const fiber0014 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /((?:\✱[0-9a-z]+)✱)(?:\|(...
   *        ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    if (charCode0 <= 122) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0015(i, str, context);
};
const fiber0016 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /((?:\✱[0-9a-z]+)...
   *      ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 42;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * quantifierStarter
   * /((?:\✱[0-9a-z]+)✱)(?:\|([...
   *        ^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0015 = context.quantifierCounter3;
  context.quantifierCounter3 = -1;
  const cursorAfterQuantifier = greedyQuantifier0015(i, str, context);
  context.quantifierCounter3 = matchCountCopygreedyQuantifier0015;

  return cursorAfterQuantifier;
};
const fiber0017 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /((?:\✱[0-9a-z]+)✱)(?:\|([0-9...
   *  ^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * quantifierStarter
   * /((?:\✱[0-9a-z]+)✱)(?:\|([0-...
   *   ^^^^^^^^^^^^^^^^
   */
  const cursorAfterQuantifier = greedyQuantifier0013(i, str, context);

  return cursorAfterQuantifier;
};
const fiber0018 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-z]+)|\?/
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 63;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};

/*
 * ...)?([-+=])([0-9a-z]+)|\?/
 *              ^^^^^^^^^
 */
const greedyQuantifier0004 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  const tryDeeperResult = fiber0003(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter0 < 1) {
    context.quantifierCounter0--;
    return -1;
  }

  const groupMarkerStartCopy3 = context.groupMarkerStart3;
  const groupMarkerEndCopy3 = context.groupMarkerEnd3;

  const followUpResult = fiber0002(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart3 = groupMarkerStartCopy3;
    context.groupMarkerEnd3 = groupMarkerEndCopy3;
    context.quantifierCounter0--;
  }
  return followUpResult;
};
/*
 * ...-9a-z]+)✱)(?:\|([0-9a-z]+))?([-+=])([0...
 *              ^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0007 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (context.quantifierCounter1 === 1) {
    return fiber0005(start, str, context);
  }

  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const tryDeeperResult = fiber0010(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;

  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;
  const groupMarkerStartCopy3 = context.groupMarkerStart3;
  const groupMarkerEndCopy3 = context.groupMarkerEnd3;

  const followUpResult = fiber0005(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
    context.groupMarkerStart3 = groupMarkerStartCopy3;
    context.groupMarkerEnd3 = groupMarkerEndCopy3;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * ...+)✱)(?:\|([0-9a-z]+))?([-+=])...
 *              ^^^^^^^^^
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

  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;

  const followUpResult = fiber0006(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.quantifierCounter2--;
  }
  return followUpResult;
};
/*
 * /((?:\✱[0-9a-z]+)✱)(?:\|([0-...
 *   ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0013 = (
  start: number,
  str: string,
  context: Context
): number => {
  const tryDeeperResult = fiber0016(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;
  const groupMarkerStartCopy3 = context.groupMarkerStart3;
  const groupMarkerEndCopy3 = context.groupMarkerEnd3;

  const followUpResult = fiber0011(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
    context.groupMarkerStart3 = groupMarkerStartCopy3;
    context.groupMarkerEnd3 = groupMarkerEndCopy3;
  }
  return followUpResult;
};
/*
 * /((?:\✱[0-9a-z]+)✱)(?:\|([...
 *        ^^^^^^^^^
 */
const greedyQuantifier0015 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter3++;

  const tryDeeperResult = fiber0014(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter3 < 1) {
    context.quantifierCounter3--;
    return -1;
  }

  const followUpResult = fiber0012(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter3--;
  }
  return followUpResult;
};
