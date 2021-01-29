// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(ab)k(123)/'
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

// Regex optimized to: /(ab)k(123)/

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
        ],
      };
    }
  }

  return null;
}

const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /(ab)k(123)/
   *  ^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charOrSet
   * /(ab)k(123)/
   *   ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /(ab)k(123)/
   *    ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 98;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(ab)k(123)/
   *  ^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * charOrSet
   * /(ab)k(123)/
   *      ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4: boolean;

  result4 = charCode4 === 107;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * /(ab)k(123)/
   *       ^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * charOrSet
   * /(ab)k(123)/
   *        ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode6 = str.charCodeAt(i);
  let result6: boolean;

  result6 = charCode6 === 49;

  if (!result6) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /(ab)k(123)/
   *         ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7: boolean;

  result7 = charCode7 === 50;

  if (!result7) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /(ab)k(123)/
   *          ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode8 = str.charCodeAt(i);
  let result8: boolean;

  result8 = charCode8 === 51;

  if (!result8) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(ab)k(123)/
   *       ^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  return i;
};
