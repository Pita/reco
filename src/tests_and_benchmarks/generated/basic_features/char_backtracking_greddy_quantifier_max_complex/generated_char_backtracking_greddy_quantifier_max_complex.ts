// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(aa?){0,3}/'
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

// Regex optimized to: /(aa?){0,3}/

export function generatedRegexMatcher(str: string) {
  const context: Context = {
    groupMarkerStart0: -1,
    groupMarkerStartTemp0: -1,
    groupMarkerEnd0: -1,
    quantifierCounter0: -1,
  };

  // fullScan
  const min = 0;
  const max = str.length;

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

const fiber0001 = (i: number, str: string, context: Context): number => {
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * /(aa?){0,3}/
   *  ^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return greedyQuantifier0003(i, str, context);
};
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /(aa?){0,3}/
   *    ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 97;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /(aa?){0,3}/
   *  ^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charSequence
   * /(aa?){0,3}/
   *   ^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 97;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * backtrackingFixedLengthQuantifier
   * /(aa?){0,3}/
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

      if (matches2 === 1) {
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
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * /(aa?){0,3}/
   *  ^^^^^^^^^^
   */
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = greedyQuantifier0003(i, str, context);
  context.quantifierCounter0 = -1;

  return cursorAfterQuantifier;
};

/*
 * /(aa?){0,3}/
 *  ^^^^^^^^^^
 */
const greedyQuantifier0003 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  // TODO: could be an if over the next block
  if (context.quantifierCounter0 === 3) {
    return fiber0001(start, str, context);
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const tryDeeperResult = fiber0005(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;

  return fiber0001(start, str, context);
};
