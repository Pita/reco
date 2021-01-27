// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/^\d*(\.\d+)?$/'
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
  quantifierCounter0: number;
  quantifierCounter1: number;
}

export function generatedRegexMatcher(str: string) {
  const context: Context = {
    groupMarkerStart0: -1,
    groupMarkerStartTemp0: -1,
    groupMarkerEnd0: -1,
    quantifierCounter0: -1,
    quantifierCounter1: -1,
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
        ],
      };
    }
  }

  return null;
}

const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * endAnchor
   * /^\d✱(\.\d+)?$/
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
   * /^\d✱(\.\d+)?$/
   *      ^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return greedyQuantifier0003(i, str, context);
};
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /^\d✱(\.\d+)?$/
   *         ^^
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
  return greedyQuantifier0005(i, str, context);
};
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /^\d✱(\.\d+)?$/
   *      ^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charOrSet
   * /^\d✱(\.\d+)?$/
   *       ^^
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
   * quantifierStarter
   * /^\d✱(\.\d+)?$/
   *         ^^^
   */
  let matchCountCopygreedyQuantifier0005 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0005(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0005;

  return cursorAfterQuantifier;
};
const fiber0007 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * /^\d✱(\.\d+)?$/
   *      ^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0003 = context.quantifierCounter0;
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = greedyQuantifier0003(i, str, context);
  context.quantifierCounter0 = matchCountCopygreedyQuantifier0003;

  return cursorAfterQuantifier;
};
const fiber0008 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /^\d✱(\.\d+)?$/
   *   ^^
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
  return greedyQuantifier0009(i, str, context);
};
const fiber0010 = (i: number, str: string, context: Context): number => {
  /*
   * startAnchor
   * /^\d✱(\.\d+)?$/
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * quantifierStarter
   * /^\d✱(\.\d+)?$/
   *   ^^^
   */
  const cursorAfterQuantifier = greedyQuantifier0009(i, str, context);

  return cursorAfterQuantifier;
};

/*
 * /^\d✱(\.\d+)?$/
 *      ^^^^^^^^
 */
const greedyQuantifier0003 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  if (context.quantifierCounter0 === 1) {
    return fiber0001(start, str, context);
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const tryDeeperResult = fiber0006(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;

  const followUpResult = fiber0001(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter0--;
  }
  return followUpResult;
};
/*
 * /^\d✱(\.\d+)?$/
 *         ^^^
 */
const greedyQuantifier0005 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  const tryDeeperResult = fiber0004(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter1 < 1) {
    context.quantifierCounter1--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0002(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * /^\d✱(\.\d+)?$/
 *   ^^^
 */
const greedyQuantifier0009 = (
  start: number,
  str: string,
  context: Context
): number => {
  const tryDeeperResult = fiber0008(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0007(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
  }
  return followUpResult;
};
