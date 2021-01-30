// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/'
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

// Regex optimized to: /(?:[01]\d|2[0123]):[012345]\d:[012345]\d/

export function generatedRegexMatcher(str: string) {
  const context: Context = {};

  // minCharsLeft
  const min = 0;
  const max = str.length - 8;

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
   * nonBacktrackingDisjunction
   * /(?:[01]\d|2[0123]):[012345]\...
   *  ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0002(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0003(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  /*
   * charSequence
   * ...d|2[0123]):[012345]\d...
   *              ^
   */
  const iAfterMatch1 = i + 6;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 3);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    result1 = charCode1 === 58;

    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 5);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }
    const charCode3 = str.charCodeAt(i + 4);

    let result3: boolean;

    if (charCode3 <= 53) {
      result3 = charCode3 >= 48;
    } else {
      result3 = false;
    }
    if (!result3) {
      return -1;
    }
    const charCode4 = str.charCodeAt(i + 2);

    let result4: boolean;

    if (charCode4 <= 57) {
      result4 = charCode4 >= 48;
    } else {
      result4 = false;
    }
    if (!result4) {
      return -1;
    }
    const charCode5 = str.charCodeAt(i + 1);

    let result5: boolean;

    if (charCode5 <= 53) {
      result5 = charCode5 >= 48;
    } else {
      result5 = false;
    }
    if (!result5) {
      return -1;
    }

    i = iAfterMatch1;
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * /(?:[01]\d|2[0123]...
   *     ^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    if (charCode1 <= 49) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * /(?:[01]\d|2[0123]):[0...
   *            ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 50;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 51) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
