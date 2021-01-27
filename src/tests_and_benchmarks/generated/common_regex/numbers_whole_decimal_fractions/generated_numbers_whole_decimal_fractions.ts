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
  quantifierCounter0: number;
  quantifierCounter1: number;
  quantifierCounter2: number;
  quantifierCounter3: number;
  quantifierCounter4: number;
}

export function generatedRegexMatcher(str: string) {
  const context: Context = {
    groupMarkerStart0: -1,
    groupMarkerStartTemp0: -1,
    groupMarkerEnd0: -1,
    quantifierCounter0: -1,
    quantifierCounter1: -1,
    quantifierCounter2: -1,
    quantifierCounter3: -1,
    quantifierCounter4: -1,
  };

  // minCharsLeft
  const min = 0;
  const max = str.length - 1;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0025(i, str, context);
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
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...,.]?[0-9]✱([\/][0-9]+[,.]?[0-9]✱)✱/
   *              ^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return greedyQuantifier0003(i, str, context);
};
const fiber0004 = (i: number, str: string, context: Context): number => {
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
  return greedyQuantifier0005(i, str, context);
};
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...0-9]+[,.]?[0-9]✱)✱/
   *              ^^^^^^
   */
  const cursorAfterQuantifier = greedyQuantifier0005(i, str, context);

  return cursorAfterQuantifier;
};
const fiber0007 = (i: number, str: string, context: Context): number => {
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
  return greedyQuantifier0008(i, str, context);
};
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...[\/][0-9]+[,.]?[0-9]✱)✱/
   *              ^^^^^
   */
  let matchCountCopygreedyQuantifier0008 = context.quantifierCounter0;
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = greedyQuantifier0008(i, str, context);
  context.quantifierCounter0 = matchCountCopygreedyQuantifier0008;

  return cursorAfterQuantifier;
};
const fiber0010 = (i: number, str: string, context: Context): number => {
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
  return greedyQuantifier0011(i, str, context);
};
const fiber0012 = (i: number, str: string, context: Context): number => {
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
   * quantifierStarter
   * ...0-9]✱([\/][0-9]+[,.]?[0-9]...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0011 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0011(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0011;

  return cursorAfterQuantifier;
};
const fiber0013 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...,.]?[0-9]✱([\/][0-9]+[,.]?[0-9]✱)✱/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const cursorAfterQuantifier = greedyQuantifier0003(i, str, context);

  return cursorAfterQuantifier;
};
const fiber0014 = (i: number, str: string, context: Context): number => {
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
  return greedyQuantifier0015(i, str, context);
};
const fiber0016 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...0-9]+[,.]?[0-9]✱([\/][0-9]...
   *              ^^^^^^
   */
  const cursorAfterQuantifier = greedyQuantifier0015(i, str, context);

  return cursorAfterQuantifier;
};
const fiber0017 = (i: number, str: string, context: Context): number => {
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
  return greedyQuantifier0018(i, str, context);
};
const fiber0019 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * /[-]?[0-9]+[,.]?[0-9]✱([\/...
   *            ^^^^^
   */
  let matchCountCopygreedyQuantifier0018 = context.quantifierCounter2;
  context.quantifierCounter2 = -1;
  const cursorAfterQuantifier = greedyQuantifier0018(i, str, context);
  context.quantifierCounter2 = matchCountCopygreedyQuantifier0018;

  return cursorAfterQuantifier;
};
const fiber0020 = (i: number, str: string, context: Context): number => {
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
  return greedyQuantifier0021(i, str, context);
};
const fiber0022 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * /[-]?[0-9]+[,.]?[0-9]...
   *      ^^^^^^
   */
  let matchCountCopygreedyQuantifier0021 = context.quantifierCounter3;
  context.quantifierCounter3 = -1;
  const cursorAfterQuantifier = greedyQuantifier0021(i, str, context);
  context.quantifierCounter3 = matchCountCopygreedyQuantifier0021;

  return cursorAfterQuantifier;
};
const fiber0023 = (i: number, str: string, context: Context): number => {
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
  return greedyQuantifier0024(i, str, context);
};
const fiber0025 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * /[-]?[0-9]+[,.]...
   *  ^^^^
   */
  let matchCountCopygreedyQuantifier0024 = context.quantifierCounter4;
  context.quantifierCounter4 = -1;
  const cursorAfterQuantifier = greedyQuantifier0024(i, str, context);
  context.quantifierCounter4 = matchCountCopygreedyQuantifier0024;

  return cursorAfterQuantifier;
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
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const tryDeeperResult = fiber0012(start, str, context);
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
/*
 * ...0-9]+[,.]?[0-9]✱)✱/
 *              ^^^^^^
 */
const greedyQuantifier0005 = (
  start: number,
  str: string,
  context: Context
): number => {
  const tryDeeperResult = fiber0004(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0002(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
  }
  return followUpResult;
};
/*
 * ...[\/][0-9]+[,.]?[0-9]✱)✱/
 *              ^^^^^
 */
const greedyQuantifier0008 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  if (context.quantifierCounter0 === 1) {
    return fiber0006(start, str, context);
  }

  const tryDeeperResult = fiber0007(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0006(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.quantifierCounter0--;
  }
  return followUpResult;
};
/*
 * ...0-9]✱([\/][0-9]+[,.]?[0-9]...
 *              ^^^^^^
 */
const greedyQuantifier0011 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  const tryDeeperResult = fiber0010(start, str, context);
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

  const followUpResult = fiber0009(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * ...0-9]+[,.]?[0-9]✱([\/][0-9]...
 *              ^^^^^^
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

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0013(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
  }
  return followUpResult;
};
/*
 * /[-]?[0-9]+[,.]?[0-9]✱([\/...
 *            ^^^^^
 */
const greedyQuantifier0018 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter2++;

  if (context.quantifierCounter2 === 1) {
    return fiber0016(start, str, context);
  }

  const tryDeeperResult = fiber0017(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0016(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.quantifierCounter2--;
  }
  return followUpResult;
};
/*
 * /[-]?[0-9]+[,.]?[0-9]...
 *      ^^^^^^
 */
const greedyQuantifier0021 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter3++;

  const tryDeeperResult = fiber0020(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter3 < 1) {
    context.quantifierCounter3--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0019(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.quantifierCounter3--;
  }
  return followUpResult;
};
/*
 * /[-]?[0-9]+[,.]...
 *  ^^^^
 */
const greedyQuantifier0024 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter4++;

  if (context.quantifierCounter4 === 1) {
    return fiber0022(start, str, context);
  }

  const tryDeeperResult = fiber0023(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0022(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.quantifierCounter4--;
  }
  return followUpResult;
};
