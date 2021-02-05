// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/'
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
}

// Regex optimized to: /([12]\d\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/

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
  };

  // minCharsLeft
  const min = 0;
  const max = str.length - 10;

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
          context.groupMarkerEnd2 !== -1
            ? str.substring(context.groupMarkerStart2, context.groupMarkerEnd2)
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
   * /([12]\d\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charSequence
   * /([12]\d\d\d-(0[...
   *   ^^^^
   */
  const iAfterMatch1 = i + 5;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 4);

    let result0: boolean;

    result0 = charCode0 === 45;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 3);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 2);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }
    const charCode3 = str.charCodeAt(i + 1);

    let result3: boolean;

    if (charCode3 <= 57) {
      result3 = charCode3 >= 48;
    } else {
      result3 = false;
    }
    if (!result3) {
      return -1;
    }
    const charCode4 = str.charCodeAt(i + 0);

    let result4: boolean;

    if (charCode4 <= 50) {
      result4 = charCode4 >= 49;
    } else {
      result4 = false;
    }
    if (!result4) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * groupStartMarker
   * /([12]\d\d\d-(0[1-9]|1[0-2])-(0[1-9]|[...
   *              ^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * nonBacktrackingDisjunction
   * /([12]\d\d\d-(0[1-9]|1[0-2])-(0[1-9]|[...
   *              ^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  nonBacktrackingDisjunction3: {
    if ((quickCheckValue3 & 2147450864) === 3145776) {
      const length0 = fiber0005(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction3;
      }
    }
    if ((quickCheckValue3 & 2147450876) === 3211312) {
      const length1 = fiber0006(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction3;
      }
    }
    return -1;
  }
  /*
   * groupEndMarker
   * /([12]\d\d\d-(0[1-9]|1[0-2])-(0[1-9]|[...
   *              ^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * charSequence
   * ...9]|1[0-2])-(0[1-9]|[1...
   *              ^
   */
  const iAfterMatch5 = i + 1;
  if (iAfterMatch5 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 45;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch5;
  }
  /*
   * groupStartMarker
   * ...]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * nonBacktrackingDisjunction
   * ...]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck7 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck7 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue7 = (firstCharQuickCheck7 << 16) ^ secondCharQuickCheck7;

  nonBacktrackingDisjunction7: {
    if ((quickCheckValue7 & 2147450864) === 3145776) {
      const length0 = fiber0002(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction7;
      }
    }
    if ((quickCheckValue7 & 2147254256) === 3145776) {
      const length1 = fiber0003(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction7;
      }
    }
    if ((quickCheckValue7 & 2147450878) === 3342384) {
      const length2 = fiber0004(i, str, context);
      if (length2 !== -1) {
        i = length2;
        break nonBacktrackingDisjunction7;
      }
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  /*
   * groupEndMarker
   * /([12]\d\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|1[0-2])-(0[1-9]|[12]...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 49;
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
   * ...)-(0[1-9]|[12]\d|3[01]))/
   *              ^^^^
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

    if (charCode1 <= 50) {
      result1 = charCode1 >= 49;
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
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...9]|[12]\d|3[01]))/
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

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
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...2]\d\d\d-(0[1-9]|1[0-...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 49;
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
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d-(0[1-9]|1[0-2])-(0[...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 50) {
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
