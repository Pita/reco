// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(aa){3,}?b/'
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

// Regex optimized to: /aaaa(aa)+?b/

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
    const posAfterMatch = fiber0003(i, str, context);
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

const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * /aaaa(aa)+?b/
   *  ^^^^
   */
  const iAfterMatch0 = i + 4;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 3);

    let result0: boolean;

    result0 = charCode0 === 97;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    result1 = charCode1 === 97;

    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    result2 = charCode2 === 97;

    if (!result2) {
      return -1;
    }
    const charCode3 = str.charCodeAt(i + 0);

    let result3: boolean;

    result3 = charCode3 === 97;

    if (!result3) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * lazyQuantifier
   * /aaaa(aa)+?b/
   *      ^^^^^^
   */
  let matches1 = 0;
  while (true) {
    if (matches1 >= 1) {
      const directFollowUpResult1 = fiber0001(i, str, context);

      if (directFollowUpResult1 !== -1) {
        return directFollowUpResult1;
      }
    }

    const wrappedResult = fiber0002(i, str, context);
    if (wrappedResult === -1) {
      return -1;
    }
    i = wrappedResult;
    matches1++;
  }
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /aaaa(aa)+?b/
   *      ^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charSequence
   * /aaaa(aa)+?b/
   *       ^^
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
   * /aaaa(aa)+?b/
   *         ^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return i;
};
const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * /aaaa(aa)+?b/
   *            ^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 98;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
