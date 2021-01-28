// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(['"])(.*?)\1/'
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

// Regex optimized to: /(['"])(.*?)\1/

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
  const max = str.length - 2;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0003(i, str, context);
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
   * groupEndMarker
   * /(['"])(.✱?)\1/
   *        ^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * groupBackReference
   * /(['"])(.✱?)\1/
   *             ^^
   */
  let backReferenceI = context.groupMarkerStart0;
  const backReferenceEnd = context.groupMarkerEnd0;
  while (backReferenceI < backReferenceEnd) {
    if (i >= str.length) {
      return -1;
    }

    const backReferenceCharCode = str.charCodeAt(backReferenceI);
    const currentCharCode = str.charCodeAt(i);

    if (backReferenceCharCode !== currentCharCode) {
      return -1;
    }

    backReferenceI++;
    i++;
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /(['"])(.✱?)\1/
   *         ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 13) {
    result0 = charCode0 === 10 || charCode0 === 13;
  } else {
    if (charCode0 <= 8233) {
      result0 = charCode0 >= 8232;
    }
  }
  if (result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /(['"])(.✱?)\1/
   *  ^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charOrSet
   * /(['"])(.✱?)\1/
   *   ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 34 || charCode1 === 39;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(['"])(.✱?)\1/
   *  ^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * groupStartMarker
   * /(['"])(.✱?)\1/
   *        ^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * lazyQuantifier
   * /(['"])(.✱?)\1/
   *         ^^^
   */
  while (true) {
    const directFollowUpResult4 = fiber0001(i, str, context);

    if (directFollowUpResult4 !== -1) {
      return directFollowUpResult4;
    }

    const wrappedResult = fiber0002(i, str, context);
    if (wrappedResult === -1) {
      return -1;
    }
    i = wrappedResult;
  }
};
