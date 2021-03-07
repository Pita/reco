// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/([a-z]+)([h-o])([d-z]*)([1-3])/'
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

// Regex optimized to: /([a-z][a-z]*)([h-o])([d-z]*)([1-3])/

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

const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /([a-z][a-z]...
   *  ^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charSequence
   * /([a-z][a-z]✱)([h...
   *   ^^^^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 122) {
      result0 = charCode0 >= 97;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * backtrackingFixedLengthQuantifier
   * /([a-z][a-z]✱)([h-o])([...
   *        ^^^^^^
   */
  let matches2 = 0;

  while (true) {
    const wrappedResult = fiber0003(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches2++;
    }
  }

  // needs followUp & forkingFiber
  while (matches2 >= 0) {
    const directFollowUpResult2 = fiber0001(i, str, context);

    if (directFollowUpResult2 !== -1) {
      return directFollowUpResult2;
    }

    matches2--;
    i -= 1;
  }

  return -1;
};
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /([a-z][a-z]✱)([h-o])(...
   *        ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 122) {
    result0 = charCode0 >= 97;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...✱)([h-o])([d-z]✱)([1-3])/
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 122) {
    result0 = charCode0 >= 100;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * /([a-z][a-z]✱)([h-o])([d...
   *              ^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * groupStartMarker
   * ...-z][a-z]✱)([h-o])([d-...
   *              ^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * charSequence
   * ...z][a-z]✱)([h-o])([d-z]✱)(...
   *              ^^^^^
   */
  const iAfterMatch2 = i + 1;
  if (iAfterMatch2 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 111) {
      result0 = charCode0 >= 104;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch2;
  }
  /*
   * groupEndMarker
   * ...z]✱)([h-o])([d-z]✱)([...
   *              ^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * groupStartMarker
   * ...]✱)([h-o])([d-z]✱)([1...
   *              ^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * nonBacktrackingQuantifier
   * ...✱)([h-o])([d-z]✱)([1-3])/
   *              ^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0002(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupEndMarker
   * ...o])([d-z]✱)([1-3])/
   *              ^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  /*
   * groupStartMarker
   * ...])([d-z]✱)([1-3])/
   *              ^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * charSequence
   * ...)([d-z]✱)([1-3])/
   *              ^^^^^
   */
  const iAfterMatch8 = i + 1;
  if (iAfterMatch8 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 51) {
      result0 = charCode0 >= 49;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch8;
  }
  /*
   * groupEndMarker
   * ...z]✱)([1-3])/
   *              ^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  return i;
};
