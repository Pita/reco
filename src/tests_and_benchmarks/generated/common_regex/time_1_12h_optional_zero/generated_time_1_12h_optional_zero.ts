// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/'
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
  const max = str.length - 6;

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

const fiber0001 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * /((1[0-2]|0?[1-9]):([0-5][0-...
   *   ^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * charOrSet
   * ...]|0?[1-9]):([0-5][0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 58;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...|0?[1-9]):([0-5][0-9]) ?([AaPp][...
   *              ^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * charOrSet
   * ...0?[1-9]):([0-5][0-9]) ?([...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  if (charCode3 <= 53) {
    result3 = charCode3 >= 48;
  }
  if (!result3) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...9]):([0-5][0-9]) ?([AaPp]...
   *              ^^^^^
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
   * groupEndMarker
   * ...|0?[1-9]):([0-5][0-9]) ?([AaPp][...
   *              ^^^^^^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  /*
   * nonBacktrackingQuantifier
   * ...0-5][0-9]) ?([AaPp][Mm...
   *              ^^
   */
  let matches6 = 0;
  while (true) {
    const wrappedResult = fiber0002(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches6++;

      if (matches6 === 1) {
        break;
      }
    }
  }
  /*
   * groupStartMarker
   * ...5][0-9]) ?([AaPp][Mm]))/
   *              ^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * charOrSet
   * ...][0-9]) ?([AaPp][Mm]))/
   *              ^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode8 = str.charCodeAt(i);
  let result8 = false;

  if (charCode8 <= 80) {
    result8 = charCode8 === 65 || charCode8 === 80;
  } else {
    result8 = charCode8 === 97 || charCode8 === 112;
  }
  if (!result8) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...) ?([AaPp][Mm]))/
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode9 = str.charCodeAt(i);
  let result9 = false;

  result9 = charCode9 === 77 || charCode9 === 109;

  if (!result9) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...5][0-9]) ?([AaPp][Mm]))/
   *              ^^^^^^^^^^^^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  /*
   * groupEndMarker
   * /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return i;
};
const fiber0002 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...0-5][0-9]) ?([AaPp][M...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 32;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0003 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * /((1[0-2]|0?[1...
   *    ^
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
   * /((1[0-2]|0?[1-9]):...
   *     ^^^^^
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
  return fiber0001(i, str, context);
};
const fiber0004 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * /((1[0-2]|0?[1-9]):([0...
   *           ^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0005(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches0++;

      if (matches0 === 1) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * /((1[0-2]|0?[1-9]):([0-5][0...
   *             ^^^^^
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
  return fiber0001(i, str, context);
};
const fiber0005 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * /((1[0-2]|0?[1-9]):([...
   *           ^
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
  return i;
};
const fiber0006 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * groupStartMarker
   * /((1[0-2]|0?[1-9]):([0-5][0-...
   *   ^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * disjunction
   * /((1[0-2]|0?[1-9]):([0-5][0-...
   *   ^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;
  const groupMarkerStartCopy3 = context.groupMarkerStart3;
  const groupMarkerEndCopy3 = context.groupMarkerEnd3;
  const length0 = fiber0003(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  const length1 = fiber0004(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  return -1;
};
