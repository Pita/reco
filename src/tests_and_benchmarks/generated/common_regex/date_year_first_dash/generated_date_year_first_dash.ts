// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/'
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
  };

  // minCharsLeft
  const min = 0;
  const max = str.length - 10;

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
        ],
      };
    }
  }

  return null;
}

const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charOrSet
   * /([12]\d{3}-(0[1...
   *   ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 50) {
    result1 = charCode1 >= 49;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /([12]\d{3}-(0[1-9...
   *       ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /([12]\d{3}-(0[1-9...
   *       ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  if (charCode3 <= 57) {
    result3 = charCode3 >= 48;
  }
  if (!result3) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /([12]\d{3}-(0[1-9...
   *       ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4 = false;

  if (charCode4 <= 57) {
    result4 = charCode4 >= 48;
  }
  if (!result4) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /([12]\d{3}-(0[1-9]|1[...
   *            ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode5 = str.charCodeAt(i);
  let result5 = false;

  result5 = charCode5 === 45;

  if (!result5) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[...
   *             ^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * nonBacktrackingDisjunction
   * /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[...
   *             ^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction7: {
    const length0 = fiber0005(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction7;
    }
    const length1 = fiber0006(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction7;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[...
   *             ^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * charOrSet
   * ...9]|1[0-2])-(0[1-9]|[1...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode9 = str.charCodeAt(i);
  let result9 = false;

  result9 = charCode9 === 45;

  if (!result9) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * nonBacktrackingDisjunction
   * ...]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction11: {
    const length0 = fiber0002(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction11;
    }
    const length1 = fiber0003(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction11;
    }
    const length2 = fiber0004(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction11;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  /*
   * groupEndMarker
   * /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|1[0-2])-(0[1-9]|[12]...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 48;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...1[0-2])-(0[1-9]|[12]\d|3[...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 49;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...)-(0[1-9]|[12]\d|3[01]))/
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 50) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...[1-9]|[12]\d|3[01]))/
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]|[12]\d|3[01]))/
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 51;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...]|[12]\d|3[01]))/
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 49) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /([12]\d{3}-(0[1-9]|1[0-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 48;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...2]\d{3}-(0[1-9]|1[0-2])-(...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 49;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}-(0[1-9]|1[0-2])-(0[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...-(0[1-9]|1[0-2])-(0[1-9]|...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 50) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
