// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(aa?){0,3}?b/'
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
}

export function generatedRegexMatcher(str: string) {
  const context: Context = {
    groupMarkerStart0: -1,
    groupMarkerStartTemp0: -1,
    groupMarkerEnd0: -1,
    quantifierCounter0: -1,
  };

  // minCharsLeft
  const min = 0;
  const max = str.length - 1;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0006(i, str, context);
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
  /*
   * charOrSet
   * /(aa?){0,3}?b/
   *             ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 98;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0002 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * /(aa?){0,3}?b/
   *  ^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return lazyQuantifier0003(i, str, context);
};
const fiber0004 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * /(aa?){0,3}?b/
   *    ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 97;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0005 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * /(aa?){0,3}?b/
   *  ^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charOrSet
   * /(aa?){0,3}?b/
   *   ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * /(aa?){0,3}?b/
   *    ^^
   */
  let matches2 = 0;

  while (true) {
    const wrappedResult = fiber0004(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches2++;

      if (i + 1 > str.length - 0 || matches2 === 1) {
        // if ((i + 1) > (str.length - 0)) {
        //   console.log('overstep backtrackingFixedLengthQuantifier', i, (str.length - 0));
        // }
        break;
      }
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
const fiber0006 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * quantifierStarter
   * /(aa?){0,3}?b/
   *  ^^^^^^^^^^^
   */
  let matchCountCopylazyQuantifier0003 = context.quantifierCounter0;
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = lazyQuantifier0003(i, str, context);
  context.quantifierCounter0 = matchCountCopylazyQuantifier0003;

  return cursorAfterQuantifier;
};

/*
 * /(aa?){0,3}?b/
 *  ^^^^^^^^^^^
 */
const lazyQuantifier0003 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  const followUpResult = fiber0001(start, str, context);
  if (followUpResult === -1) {
  } else {
    return followUpResult;
  }

  if (start + 1 <= str.length - 1 && context.quantifierCounter0 < 3) {
    // if ((start + 1) < (str.length - 1)) {
    //   console.log('overstep lazyQuantifierHandlers', start, (str.length - 1));
    // }

    const groupMarkerStartCopy0 = context.groupMarkerStart0;
    const groupMarkerEndCopy0 = context.groupMarkerEnd0;
    const tryDeeperResult = fiber0005(start, str, context);
    if (tryDeeperResult !== -1) {
      // we actually were able to go deeper, nice!
      return tryDeeperResult;
    }
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
  }

  context.quantifierCounter0--;
  return -1;
};
