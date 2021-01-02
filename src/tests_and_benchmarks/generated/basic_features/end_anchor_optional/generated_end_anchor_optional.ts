// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(def$|deg)/'
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
}

export function generatedRegexMatcher(str: string) {
  const context: Context = {
    groupMarkerStart0: -1,
    groupMarkerStartTemp0: -1,
    groupMarkerEnd0: -1,
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
   * /(def$|deg)/
   *  ^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return i;
};
const fiber0002 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * /(def$|deg)/
   *   ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 100;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /(def$|deg)/
   *    ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 101;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /(def$|deg)/
   *     ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 102;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * endAnchor
   * /(def$|deg)/
   *      ^
   */
  if (i !== str.length) {
    return -1;
  }
  return fiber0001(i, str, context);
};
const fiber0003 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * /(def$|deg)/
   *        ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 100;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /(def$|deg)/
   *         ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 101;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /(def$|deg)/
   *          ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 103;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0001(i, str, context);
};
const fiber0004 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * /(def$|deg)/
   *  ^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * disjunction
   * /(def$|deg)/
   *  ^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const length0 = fiber0002(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  const length1 = fiber0003(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  return -1;
};
