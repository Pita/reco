// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/'
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

// Regex optimized to: /^(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))$/

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

  // startAnchored
  const min = 0;
  const max = 0;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0029(i, str, context);
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
   * groupEndMarker
   * ...[0-5]))\.)([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  /*
   * endAnchor
   * ...]|5[0-5]))$/
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
   * ...0-5]))\.)([0-9]|[1-9][0-9...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0001(i, str, context);
};
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...\.)([0-9]|[1-9][0-9]|1[0-...
   *              ^^^^^
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
  return fiber0001(i, str, context);
};
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...1-9][0-9]|1[0-9][0-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0001(i, str, context);
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0-9][0-9]|2(?:[0-4][0...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...-9][0-9]|2(?:[0-4][0-9]|5[0-5]))$/
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length0 = fiber0006(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length1 = fiber0007(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  return fiber0001(i, str, context);
};
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...[0-9]|2(?:[0-4][0-9]|5[0-...
   *              ^^^^^
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

    if (charCode1 <= 52) {
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
const fiber0007 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0-4][0-9]|5[0-5]))$/
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0008 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...[0-5]))\.(([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * charSequence
   * ...]|5[0-5]))\.)([0-9]|[1...
   *              ^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 46;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * groupEndMarker
   * ...5[0-5]))\.(([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]|[1-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * groupStartMarker
   * ...[0-5]))\.)([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * disjunction
   * ...[0-5]))\.)([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck4 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck4 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue4 = (firstCharQuickCheck4 << 16) ^ secondCharQuickCheck4;

  if ((quickCheckValue4 & 2146435072) === 3145728) {
    const length0 = fiber0002(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
  }
  if ((quickCheckValue4 & 2146467824) === 3145776) {
    const length1 = fiber0003(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
  }
  if ((quickCheckValue4 & 2147450864) === 3211312) {
    const length2 = fiber0004(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
  }
  if ((quickCheckValue4 & 2147450872) === 3276848) {
    const length3 = fiber0005(i, str, context);
    if (length3 !== -1) {
      return length3;
    }
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
  }
  return -1;
};
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0-5]))\.(([0-9]|[1-9][0-9...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0008(i, str, context);
};
const fiber0010 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...\.(([0-9]|[1-9][0-9]|1[0-...
   *              ^^^^^
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
  return fiber0008(i, str, context);
};
const fiber0011 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...1-9][0-9]|1[0-9][0-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0008(i, str, context);
};
const fiber0012 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0-9][0-9]|2(?:[0-4][0...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length0 = fiber0013(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length1 = fiber0014(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  return fiber0008(i, str, context);
};
const fiber0013 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...[0-9]|2(?:[0-4][0-9]|5[0-...
   *              ^^^^^
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

    if (charCode1 <= 52) {
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
const fiber0014 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0-4][0-9]|5[0-5]))\.)...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0015 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...]|5[0-5]))\.(([0-9]|[1...
   *              ^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 46;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * groupStartMarker
   * ...5[0-5]))\.(([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]|[1-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * groupStartMarker
   * ...[0-5]))\.(([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * disjunction
   * ...[0-5]))\.(([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  if ((quickCheckValue3 & 2146467839) === 3145774) {
    const length0 = fiber0009(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
  }
  if ((quickCheckValue3 & 2146467824) === 3145776) {
    const length1 = fiber0010(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
  }
  if ((quickCheckValue3 & 2147450864) === 3211312) {
    const length2 = fiber0011(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
  }
  if ((quickCheckValue3 & 2147450872) === 3276848) {
    const length3 = fiber0012(i, str, context);
    if (length3 !== -1) {
      return length3;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
  }
  return -1;
};
const fiber0016 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...-5]))\.(?:[0-9]|[1-9][0-9...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0015(i, str, context);
};
const fiber0017 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ....(?:[0-9]|[1-9][0-9]|1[0-...
   *              ^^^^^
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
  return fiber0015(i, str, context);
};
const fiber0018 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...1-9][0-9]|1[0-9][0-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0015(i, str, context);
};
const fiber0019 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0-9][0-9]|2(?:[0-4][0...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(([0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length0 = fiber0020(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length1 = fiber0021(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  return fiber0015(i, str, context);
};
const fiber0020 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...[0-9]|2(?:[0-4][0-9]|5[0-...
   *              ^^^^^
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

    if (charCode1 <= 52) {
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
const fiber0021 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0-4][0-9]|5[0-5]))\.(...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0022 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...]|5[0-5]))\.(?:[0-9]|[...
   *              ^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 46;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * disjunction
   * ...5[0-5]))\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(([0-9]|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  if ((quickCheckValue1 & 2146467839) === 3145774) {
    const length0 = fiber0016(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
  }
  if ((quickCheckValue1 & 2146467824) === 3145776) {
    const length1 = fiber0017(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
  }
  if ((quickCheckValue1 & 2147450864) === 3211312) {
    const length2 = fiber0018(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
  }
  if ((quickCheckValue1 & 2147450872) === 3276848) {
    const length3 = fiber0019(i, str, context);
    if (length3 !== -1) {
      return length3;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
  }
  return -1;
};
const fiber0023 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * /^(?:[0-9]|[1-9][0-9...
   *      ^^^^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0022(i, str, context);
};
const fiber0024 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * /^(?:[0-9]|[1-9][0-9]|1[0-...
   *            ^^^^^
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
  return fiber0022(i, str, context);
};
const fiber0025 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...1-9][0-9]|1[0-9][0-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0022(i, str, context);
};
const fiber0026 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0-9][0-9]|2(?:[0-4][0...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(?:[0-9...
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length0 = fiber0027(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length1 = fiber0028(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  return fiber0022(i, str, context);
};
const fiber0027 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...[0-9]|2(?:[0-4][0-9]|5[0-...
   *              ^^^^^
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

    if (charCode1 <= 52) {
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
const fiber0028 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0-4][0-9]|5[0-5]))\.(...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0029 = (i: number, str: string, context: Context): number => {
  /*
   * startAnchor
   * /^(?:[0-9]|[...
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * disjunction
   * /^(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(?:[0-9]...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  if ((quickCheckValue1 & 2146467839) === 3145774) {
    const length0 = fiber0023(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
  }
  if ((quickCheckValue1 & 2146467824) === 3145776) {
    const length1 = fiber0024(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
  }
  if ((quickCheckValue1 & 2147450864) === 3211312) {
    const length2 = fiber0025(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
  }
  if ((quickCheckValue1 & 2147450872) === 3276848) {
    const length3 = fiber0026(i, str, context);
    if (length3 !== -1) {
      return length3;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
  }
  return -1;
};
