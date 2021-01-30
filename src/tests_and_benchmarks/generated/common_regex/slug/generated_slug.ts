// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/^[a-z0-9]+(?:-[a-z0-9]+)*$/'
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

interface Context {}

// Regex optimized to: /^[a-z0-9][a-z0-9]*(?:-[a-z0-9][a-z0-9]*)*$/

export function generatedRegexMatcher(str: string) {
  const context: Context = {};

  // startAnchored
  const min = 0;
  const max = 0;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0001(i, str, context);
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [str.substring(i, posAfterMatch)],
      };
    }
  }

  return null;
}

const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * startAnchor
   * /^[a-z0-9][a...
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * charOrSet
   * /^[a-z0-9][a-z0-9]✱(...
   *   ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  } else {
    if (charCode1 <= 122) {
      result1 = charCode1 >= 97;
    } else {
      result1 = false;
    }
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * /^[a-z0-9][a-z0-9]✱(?:-[a-z0-...
   *           ^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0004(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * nonBacktrackingQuantifier
   * ...][a-z0-9]✱(?:-[a-z0-9][a-z0-9]✱)✱$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^
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
   * endAnchor
   * ...a-z0-9]✱)✱$/
   *              ^
   */
  if (i !== str.length) {
    return -1;
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...-z0-9]✱(?:-[a-z0-9][a...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 45;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      if (charCode1 <= 122) {
        result1 = charCode1 >= 97;
      } else {
        result1 = false;
      }
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingQuantifier
   * ...:-[a-z0-9][a-z0-9]✱)✱$/
   *              ^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0003(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  return i;
};
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...:-[a-z0-9][a-z0-9]✱)✱$/
   *              ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    if (charCode0 <= 122) {
      result0 = charCode0 >= 97;
    } else {
      result0 = false;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /^[a-z0-9][a-z0-9]✱(?:-[a-z0...
   *           ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    if (charCode0 <= 122) {
      result0 = charCode0 >= 97;
    } else {
      result0 = false;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
