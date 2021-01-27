// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(([a-c])|([d-f]))(a)/'
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
  };

  // minCharsLeft
  const min = 0;
  const max = str.length - 2;

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
   * groupStartMarker
   * /(([a-c])|([d-f]))(a)/
   *  ^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * nonBacktrackingDisjunction
   * /(([a-c])|([d-f]))(a)/
   *  ^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const groupMarkerStartCopy1 = context.groupMarkerStart1;
    const groupMarkerEndCopy1 = context.groupMarkerEnd1;
    const groupMarkerStartCopy2 = context.groupMarkerStart2;
    const groupMarkerEndCopy2 = context.groupMarkerEnd2;
    const length0 = fiber0002(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    const length1 = fiber0003(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
    return -1;
  }
  /*
   * groupEndMarker
   * /(([a-c])|([d-f]))(a)/
   *  ^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * groupStartMarker
   * ...)|([d-f]))(a)/
   *              ^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * charOrSet
   * ...|([d-f]))(a)/
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4 = false;

  result4 = charCode4 === 97;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...)|([d-f]))(a)/
   *              ^^^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /(([a-c])|([d-f]))(a)/
   *   ^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * charOrSet
   * /(([a-c])|([d-f]))...
   *    ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 99) {
    result1 = charCode1 >= 97;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(([a-c])|([d-f]))(a)/
   *   ^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  return i;
};
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /(([a-c])|([d-f]))(a)/
   *           ^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * charOrSet
   * /(([a-c])|([d-f]))(a)/
   *            ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 102) {
    result1 = charCode1 >= 100;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(([a-c])|([d-f]))(a)/
   *           ^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  return i;
};
