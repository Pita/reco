// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/^[a-z0-9_-]{3,16}$/'
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
   * /^[a-z0-9_-]...
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * nonBacktrackingQuantifier
   * /^[a-z0-9_-]{3,16}$/
   *   ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0002(i, str, context);

    if (wrappedResult === -1) {
      if (matches1 < 3) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches1++;

      if (matches1 === 16) {
        break;
      }
    }
  }
  /*
   * endAnchor
   * ...9_-]{3,16}$/
   *              ^
   */
  if (i !== str.length) {
    return -1;
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /^[a-z0-9_-]{3,16}$/
   *   ^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    if (charCode0 === 45) {
      result0 = true;
    } else {
      result0 = charCode0 >= 48;
    }
  } else {
    if (charCode0 === 95) {
      result0 = true;
    } else {
      if (charCode0 <= 122) {
        result0 = charCode0 >= 97;
      }
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
