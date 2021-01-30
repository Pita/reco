// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(aa){3}?b/'
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

// Regex optimized to: /(aa){3}?b/

export function generatedRegexMatcher(str: string) {
  const context: Context = {
    groupMarkerStart0: -1,
    groupMarkerStartTemp0: -1,
    groupMarkerEnd0: -1,
  };

  // minCharsLeft
  const min = 0;
  const max = str.length - 7;

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
        ],
      };
    }
  }

  return null;
}

const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /(aa){3}?b/
   *  ^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charSequence
   * /(aa){3}?b/
   *   ^
   */
  const iAfterMatch1 = i + 2;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    result0 = charCode0 === 97;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    result1 = charCode1 === 97;

    if (!result1) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * groupEndMarker
   * /(aa){3}?b/
   *  ^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * groupStartMarker
   * /(aa){3}?b/
   *  ^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charSequence
   * /(aa){3}?b/
   *   ^
   */
  const iAfterMatch4 = i + 2;
  if (iAfterMatch4 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    result0 = charCode0 === 97;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    result1 = charCode1 === 97;

    if (!result1) {
      return -1;
    }

    i = iAfterMatch4;
  }
  /*
   * groupEndMarker
   * /(aa){3}?b/
   *  ^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * groupStartMarker
   * /(aa){3}?b/
   *  ^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charSequence
   * /(aa){3}?b/
   *   ^
   */
  const iAfterMatch7 = i + 2;
  if (iAfterMatch7 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    result0 = charCode0 === 97;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    result1 = charCode1 === 97;

    if (!result1) {
      return -1;
    }

    i = iAfterMatch7;
  }
  /*
   * groupEndMarker
   * /(aa){3}?b/
   *  ^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * charOrSet
   * /(aa){3}?b/
   *          ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode9 = str.charCodeAt(i);
  let result9: boolean;

  result9 = charCode9 === 98;

  if (!result9) {
    return -1;
  }
  i++;
  return i;
};
