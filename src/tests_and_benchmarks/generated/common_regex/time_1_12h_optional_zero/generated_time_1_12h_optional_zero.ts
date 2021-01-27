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
   * nonBacktrackingDisjunction
   * /((1[0-2]|0?[1-9]):([0-5][0-...
   *   ^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction2: {
    const length0 = fiber0003(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction2;
    }
    const length1 = fiber0004(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction2;
    }
    return -1;
  }
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
  const charCode4 = str.charCodeAt(i);
  let result4 = false;

  result4 = charCode4 === 58;

  if (!result4) {
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
  const charCode6 = str.charCodeAt(i);
  let result6 = false;

  if (charCode6 <= 53) {
    result6 = charCode6 >= 48;
  }
  if (!result6) {
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
  const charCode7 = str.charCodeAt(i);
  let result7 = false;

  if (charCode7 <= 57) {
    result7 = charCode7 >= 48;
  }
  if (!result7) {
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
  let matches9 = 0;
  while (true) {
    const wrappedResult = fiber0002(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches9++;

      if (matches9 === 1) {
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
  const charCode11 = str.charCodeAt(i);
  let result11 = false;

  if (charCode11 <= 80) {
    result11 = charCode11 === 65 || charCode11 === 80;
  } else {
    result11 = charCode11 === 97 || charCode11 === 112;
  }
  if (!result11) {
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
  const charCode12 = str.charCodeAt(i);
  let result12 = false;

  result12 = charCode12 === 77 || charCode12 === 109;

  if (!result12) {
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
const fiber0002 = (i: number, str: string, context: Context): number => {
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
const fiber0003 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0004 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0005 = (i: number, str: string, context: Context): number => {
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
