// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/([a-c]{2}|[d-f]{2})(a)/'
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
  const max = str.length - 3;

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
   * /([a-c]{2}|[d-f]{2})(a)/
   *  ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * groupStartMarker
   * ...|[d-f]{2})(a)/
   *              ^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * charOrSet
   * ...[d-f]{2})(a)/
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 97;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...|[d-f]{2})(a)/
   *              ^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  return i;
};
const fiber0002 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * /([a-c]{2}|[d-f]{...
   *   ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 99) {
    result0 = charCode0 >= 97;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /([a-c]{2}|[d-f]{...
   *   ^^^^^
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
  return fiber0001(i, str, context);
};
const fiber0003 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * /([a-c]{2}|[d-f]{2})(a)/
   *            ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 102) {
    result0 = charCode0 >= 100;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /([a-c]{2}|[d-f]{2})(a)/
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
  return fiber0001(i, str, context);
};
const fiber0004 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * /([a-c]{2}|[d-f]{2})(a)/
   *  ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * disjunction
   * /([a-c]{2}|[d-f]{2})(a)/
   *  ^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const length0 = fiber0002(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  const length1 = fiber0003(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  return -1;
};
