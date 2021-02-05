// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/'
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

// Regex optimized to: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/

export function generatedRegexMatcher(str: string) {
  const context: Context = {
    groupMarkerStart0: -1,
    groupMarkerStartTemp0: -1,
    groupMarkerEnd0: -1,
  };

  // startAnchored
  const min = 0;
  const max = 0;

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
        ],
      };
    }
  }

  return null;
}

const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * startAnchor
   * /^(0[0-9]|1[...
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * groupStartMarker
   * /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
   *   ^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * nonBacktrackingDisjunction
   * /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
   *   ^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck2 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck2 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue2 = (firstCharQuickCheck2 << 16) ^ secondCharQuickCheck2;

  nonBacktrackingDisjunction2: {
    if ((quickCheckValue2 & 2147450864) === 3145776) {
      const length0 = fiber0002(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction2;
      }
    }
    if ((quickCheckValue2 & 2147450864) === 3211312) {
      const length1 = fiber0003(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction2;
      }
    }
    if ((quickCheckValue2 & 2147450876) === 3276848) {
      const length2 = fiber0004(i, str, context);
      if (length2 !== -1) {
        i = length2;
        break nonBacktrackingDisjunction2;
      }
    }
    return -1;
  }
  /*
   * groupEndMarker
   * /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
   *   ^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * charSequence
   * ...9]|2[0-3]):[0-5][0-9]$/
   *              ^
   */
  const iAfterMatch4 = i + 3;
  if (iAfterMatch4 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }
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

    if (charCode2 <= 53) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch4;
  }
  /*
   * endAnchor
   * ...[0-5][0-9]$/
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
   * /^(0[0-9]|1[0-...
   *    ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 48;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 57) {
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
   * /^(0[0-9]|1[0-9]|2[0-...
   *           ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 57) {
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
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...9]|1[0-9]|2[0-3]):[0-...
   *              ^
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
