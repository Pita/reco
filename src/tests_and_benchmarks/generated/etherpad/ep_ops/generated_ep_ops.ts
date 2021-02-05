// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/((?:\*[0-9a-z]+)*)(?:\|([0-9a-z]+))?([-+=])([0-9a-z]+)|\?/'
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

// Regex optimized to: /((?:\*[0-9a-z][0-9a-z]*)*)(?:\|([0-9a-z][0-9a-z]*))?([-+=])([0-9a-z][0-9a-z]*)|\?/

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
  const max = str.length - 1;

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
          context.groupMarkerEnd3 !== -1
            ? str.substring(context.groupMarkerStart3, context.groupMarkerEnd3)
            : undefined,
        ],
      };
    }
  }

  return null;
}

const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * /((?:\✱[0-9a-z][0-9a-z]✱)✱)(?:\|([0-9a-z][0-9a-z]✱))?([-+=])([0-9a-z][0-9a-z]✱)|\?/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck0 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck0 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue0 = (firstCharQuickCheck0 << 16) ^ secondCharQuickCheck0;

  nonBacktrackingDisjunction0: {
    if ((quickCheckValue0 & 2141749152) === 2621472) {
      const length0 = fiber0002(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction0;
      }
      context.groupMarkerStart0 = -1;
      context.groupMarkerEnd0 = -1;
      context.groupMarkerStart2 = -1;
      context.groupMarkerEnd2 = -1;
      context.groupMarkerStart3 = -1;
      context.groupMarkerEnd3 = -1;
    }
    if ((quickCheckValue0 & 2147418112) === 4128768) {
      const length1 = fiber0008(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction0;
      }
    }
    return -1;
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /((?:\✱[0-9a-z][0-9a-z]✱)✱)(?:\|([0-9...
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * nonBacktrackingQuantifier
   * /((?:\✱[0-9a-z][0-9a-z]✱)✱)(?:\|([0-...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0006(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupEndMarker
   * /((?:\✱[0-9a-z][0-9a-z]✱)✱)(?:\|([0-9...
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * nonBacktrackingQuantifier
   * ...-9a-z]✱)✱)(?:\|([0-9a-z][0-9a-z]✱))?([-+=])([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches3 = 0;
  while (true) {
    const wrappedResult = fiber0004(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches3++;

      if (matches3 === 1) {
        break;
      }
    }
  }
  /*
   * groupStartMarker
   * ...-9a-z]✱))?([-+=])([0-9a-z][...
   *              ^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * charSequence
   * ...9a-z]✱))?([-+=])([0-9a-z]...
   *              ^^^^^
   */
  const iAfterMatch5 = i + 1;
  if (iAfterMatch5 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 45) {
      result0 = charCode0 === 43 || charCode0 === 45;
    } else {
      result0 = charCode0 === 61;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch5;
  }
  /*
   * groupEndMarker
   * ...-9a-z]✱))?([-+=])([0-9a-z][...
   *              ^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  /*
   * groupStartMarker
   * ...))?([-+=])([0-9a-z][0-9a-z]✱)|\?/
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * charSequence
   * ...)?([-+=])([0-9a-z][0-9a-z]✱)...
   *              ^^^^^^^^
   */
  const iAfterMatch8 = i + 1;
  if (iAfterMatch8 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

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

    i = iAfterMatch8;
  }
  /*
   * nonBacktrackingQuantifier
   * ...)([0-9a-z][0-9a-z]✱)|\?/
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
  /*
   * groupEndMarker
   * ...))?([-+=])([0-9a-z][0-9a-z]✱)|\?/
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  return i;
};
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...)([0-9a-z][0-9a-z]✱)|\?/
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
   * charSequence
   * ...-z]✱)✱)(?:\|([0-9a-z][...
   *              ^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 124;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * groupStartMarker
   * ...]✱)✱)(?:\|([0-9a-z][0-9a-z]✱))?([-+=])(...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * charSequence
   * ...✱)✱)(?:\|([0-9a-z][0-9a-z]✱)...
   *              ^^^^^^^^
   */
  const iAfterMatch2 = i + 1;
  if (iAfterMatch2 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

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

    i = iAfterMatch2;
  }
  /*
   * nonBacktrackingQuantifier
   * ...|([0-9a-z][0-9a-z]✱))?([-+=])...
   *              ^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0005(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupEndMarker
   * ...]✱)✱)(?:\|([0-9a-z][0-9a-z]✱))?([-+=])(...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  return i;
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|([0-9a-z][0-9a-z]✱))?([-+=]...
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
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * /((?:\✱[0-9a-z][0...
   *      ^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 42;

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
   * ...\✱[0-9a-z][0-9a-z]✱)✱)(?:\|([...
   *              ^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0007(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  return i;
};
const fiber0007 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\✱[0-9a-z][0-9a-z]✱)✱)(?:\|(...
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
const fiber0008 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0-9a-z]✱)|\?/
   *              ^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 63;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
