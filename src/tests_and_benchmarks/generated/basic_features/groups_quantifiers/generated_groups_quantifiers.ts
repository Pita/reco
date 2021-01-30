// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/([a-y]){2}k(123)+/'
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

// Regex optimized to: /([a-y]){2}k(123)+/

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
   * /([a-y]){2}k(123)+/
   *  ^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charOrSet
   * /([a-y]){2}k(123)+/
   *   ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 121) {
    result1 = charCode1 >= 97;
  } else {
    result1 = false;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /([a-y]){2}k(123)+/
   *  ^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * groupStartMarker
   * /([a-y]){2}k(123)+/
   *  ^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charOrSet
   * /([a-y]){2}k(123)+/
   *   ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4: boolean;

  if (charCode4 <= 121) {
    result4 = charCode4 >= 97;
  } else {
    result4 = false;
  }
  if (!result4) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /([a-y]){2}k(123)+/
   *  ^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * charOrSet
   * /([a-y]){2}k(123)+/
   *            ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode6 = str.charCodeAt(i);
  let result6: boolean;

  result6 = charCode6 === 107;

  if (!result6) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * /([a-y]){2}k(123)+/
   *             ^^^^^^
   */
  let matches7 = 0;
  while (true) {
    const wrappedResult = fiber0002(i, str, context);

    if (wrappedResult === -1) {
      if (matches7 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches7++;
    }
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /([a-y]){2}k(123)+/
   *             ^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * charSequence
   * /([a-y]){2}k(123)+/
   *              ^
   */
  const iAfterMatch1 = i + 3;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 2);

    let result0: boolean;

    result0 = charCode0 === 51;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    result1 = charCode1 === 50;

    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 0);

    let result2: boolean;

    result2 = charCode2 === 49;

    if (!result2) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * groupEndMarker
   * /([a-y]){2}k(123)+/
   *             ^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  return i;
};
