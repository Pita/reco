// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(['"])(.*?)\1/'
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
}

export function generatedRegexMatcher(str: string) {
  const context: Context = {
    groupMarkerStart0: -1,
    groupMarkerStartTemp0: -1,
    groupMarkerEnd0: -1,
    groupMarkerStart1: -1,
    groupMarkerStartTemp1: -1,
    groupMarkerEnd1: -1,
  };

  // minCharsLeft
  const min = 0;
  const max = str.length - 2;

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

const fiber0001 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * /(['"])(.✱?)\1/
   *        ^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * groupBackReference
   * /(['"])(.✱?)\1/
   *             ^^
   */
  let backReferenceI = context.groupMarkerStart0;
  const backReferenceEnd = context.groupMarkerEnd0;
  while (backReferenceI < backReferenceEnd) {
    if (i >= str.length) {
      return -1;
    }

    const backReferenceCharCode = str.charCodeAt(backReferenceI);
    const currentCharCode = str.charCodeAt(i);

    if (backReferenceCharCode !== currentCharCode) {
      return -1;
    }

    backReferenceI++;
    i++;
  }
  return i;
};
const fiber0002 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * /(['"])(.✱?)\1/
   *         ^
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
  return lazyQuantifier0003(i, str, context);
};
const fiber0004 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * /(['"])(.✱?)\1/
   *  ^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charOrSet
   * /(['"])(.✱?)\1/
   *   ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 34 || charCode1 === 39;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(['"])(.✱?)\1/
   *  ^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * groupStartMarker
   * /(['"])(.✱?)\1/
   *        ^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * quantifierStarter
   * /(['"])(.✱?)\1/
   *         ^^^
   */
  const cursorAfterQuantifier = lazyQuantifier0003(i, str, context);

  return cursorAfterQuantifier;
};

/*
 * /(['"])(.✱?)\1/
 *         ^^^
 */
const lazyQuantifier0003 = (
  start: number,
  str: string,
  context: Context
): number => {
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const followUpResult = fiber0001(start, str, context);
  if (followUpResult === -1) {
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
  } else {
    return followUpResult;
  }

  const tryDeeperResult = fiber0002(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  return -1;
};
