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

// Regex optimized to: /^[a-z0-9_-][a-z0-9_-][a-z0-9_-][a-z0-9_-]{0,13}$/

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
   * charSequence
   * /^[a-z0-9_-][a-z0-9_-]...
   *   ^^^^^^^^^^
   */
  const iAfterMatch1 = i + 3;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 2);

    let result0: boolean;

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
        } else {
          result0 = false;
        }
      }
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 57) {
      if (charCode1 === 45) {
        result1 = true;
      } else {
        result1 = charCode1 >= 48;
      }
    } else {
      if (charCode1 === 95) {
        result1 = true;
      } else {
        if (charCode1 <= 122) {
          result1 = charCode1 >= 97;
        } else {
          result1 = false;
        }
      }
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 0);

    let result2: boolean;

    if (charCode2 <= 57) {
      if (charCode2 === 45) {
        result2 = true;
      } else {
        result2 = charCode2 >= 48;
      }
    } else {
      if (charCode2 === 95) {
        result2 = true;
      } else {
        if (charCode2 <= 122) {
          result2 = charCode2 >= 97;
        } else {
          result2 = false;
        }
      }
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...[a-z0-9_-][a-z0-9_-]{0,13}$/
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0002(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 13) {
        break;
      }
    }
  }
  /*
   * endAnchor
   * ...9_-]{0,13}$/
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
   * ...[a-z0-9_-][a-z0-9_-]{0,13}$/
   *              ^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

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
      } else {
        result0 = false;
      }
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
