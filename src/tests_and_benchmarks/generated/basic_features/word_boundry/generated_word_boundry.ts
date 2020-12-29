// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/\bfoo/'
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

type GroupMarkers = [];

type TempGroupMarkers = [];

type QuantifierCounters = [];

export function generatedRegexMatcher(str: string) {
  const groupMarkers: GroupMarkers = [];
  const tempGroupStartMarkers: TempGroupMarkers = [];
  const quantifierCounters: QuantifierCounters = [];

  for (let i = 0; i < str.length; i++) {
    const posAfterMatch = fiber0001(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [str.substring(i, posAfterMatch)],
      };
    }
  }

  return null;
}

const fiber0001 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * wordBoundary
   * /\bfoo/
   *  ^^
   */
  if (i !== 0 && i !== str.length) {
    // TODO: find way to generate these trees
    const charCodeBefore0 = str.charCodeAt(i - 1);
    let isBeforeWord0 = false;
    if (charCodeBefore0 <= 90) {
      if (charCodeBefore0 <= 57) {
        isBeforeWord0 = charCodeBefore0 >= 48;
      } else {
        isBeforeWord0 = charCodeBefore0 >= 65;
      }
    } else {
      if (charCodeBefore0 === 95) {
        isBeforeWord0 = true;
      } else {
        if (charCodeBefore0 <= 122) {
          isBeforeWord0 = charCodeBefore0 >= 97;
        }
      }
    }

    const charCodeAfter0 = str.charCodeAt(i);
    let isAfterWord0 = false;
    if (charCodeAfter0 <= 90) {
      if (charCodeAfter0 <= 57) {
        isAfterWord0 = charCodeAfter0 >= 48;
      } else {
        isAfterWord0 = charCodeAfter0 >= 65;
      }
    } else {
      if (charCodeAfter0 === 95) {
        isAfterWord0 = true;
      } else {
        if (charCodeAfter0 <= 122) {
          isAfterWord0 = charCodeAfter0 >= 97;
        }
      }
    }

    if (isBeforeWord0 === isAfterWord0) {
      return -1;
    }
  }
  /*
   * charOrSet
   * /\bfoo/
   *    ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 102;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /\bfoo/
   *     ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 111;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /\bfoo/
   *      ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  result3 = charCode3 === 111;

  if (!result3) {
    return -1;
  }
  i++;
  return i;
};
