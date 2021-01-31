// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/'
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

// Regex optimized to: /^(?:(?:31([\/\-\.])(?:0?[13578]|1[02])\1|(?:29|30)([\/\-\.])(?:0?[1,3-9]|1[0-2])\2)(?:1[6-9]|[2-9]\d)?\d\d|29([\/\-\.])0?2\3(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:16|[2468][048]|[3579][26])00)|(?:0?[1-9]|1\d|2[0-8])([\/\-\.])(?:0?[1-9]|1[0-2])\4(?:1[6-9]|[2-9]\d)?\d\d)$/

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

  // startAnchored
  const min = 0;
  const max = 0;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0049(i, str, context);
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
   * endAnchor
   * ...]\d)?\d\d)$/
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
   * ...|[2-9]\d)?\d\d|29([\/\...
   *              ^^
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
      result1 = charCode1 >= 48;
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
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...1[0-2])\2)(?:1[6-9]|[2-9]\d)?\d\d|29([...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck0 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck0 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue0 = (firstCharQuickCheck0 << 16) ^ secondCharQuickCheck0;

  nonBacktrackingDisjunction0: {
    if ((quickCheckValue0 & 2147450864) === 3211312) {
      const length0 = fiber0004(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction0;
      }
    }
    if ((quickCheckValue0 & 2146467824) === 3145776) {
      const length1 = fiber0005(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction0;
      }
    }
    return -1;
  }
  return i;
};
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...-2])\2)(?:1[6-9]|[2-9...
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
      result1 = charCode1 >= 54;
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
   * ...(?:1[6-9]|[2-9]\d)?\d\d|2...
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
      result1 = charCode1 >= 50;
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
   * backtrackingFixedLengthQuantifier
   * ...1[0-2])\2)(?:1[6-9]|[2-9]\d)?\d\d|29([\...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0003(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches0++;

      if (matches0 === 1) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0002(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 2;
  }

  return -1;
};
const fiber0007 = (i: number, str: string, context: Context): number => {
  /*
   * groupBackReference
   * ...78]|1[02])\1|(?:29|30)...
   *              ^^
   */
  let backReferenceI = context.groupMarkerStart0;
  const backReferenceEnd = context.groupMarkerEnd0;
  while (backReferenceI < backReferenceEnd) {
    if (i >= str.length) {
      return -1;
    }

    const backReferenceCharCode = str.charCodeAt(backReferenceI);
    const currentCharCode = str.charCodeAt(i);

    if (backReferenceCharCode !== currentCharCode) {
      return -1;
    }

    backReferenceI++;
    i++;
  }
  return fiber0006(i, str, context);
};
const fiber0008 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * .../\-\.])(?:0?[13578]|1[...
   *              ^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0009(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches0++;

      if (matches0 === 1) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...-\.])(?:0?[13578]|1[02])\1|...
   *              ^^^^^^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 51) {
      result0 = charCode0 === 49 || charCode0 === 51;
    } else {
      if (charCode0 === 53) {
        result0 = true;
      } else {
        if (charCode0 <= 56) {
          result0 = charCode0 >= 55;
        } else {
          result0 = false;
        }
      }
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  return fiber0007(i, str, context);
};
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * .../\-\.])(?:0?[13578]|1...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 48;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0010 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0?[13578]|1[02])\1|(?...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    result1 = charCode1 === 48 || charCode1 === 50;

    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0007(i, str, context);
};
const fiber0011 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * /^(?:(?:31([\/\-\.]...
   *         ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    result1 = charCode1 === 51;

    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * groupStartMarker
   * /^(?:(?:31([\/\-\.])(?:0?[1357...
   *           ^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charSequence
   * /^(?:(?:31([\/\-\.])(?:0?[135...
   *            ^^^^^^^^
   */
  const iAfterMatch2 = i + 1;
  if (iAfterMatch2 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 47) {
      result0 = charCode0 >= 45;
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
   * /^(?:(?:31([\/\-\.])(?:0?[1357...
   *           ^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * disjunction
   * ...([\/\-\.])(?:0?[13578]|1[02])\1|(?:29|3...
   *              ^^^^^^^^^^^^^^^^^^^
   */

  const firstCharQuickCheck4 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck4 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue4 = (firstCharQuickCheck4 << 16) ^ secondCharQuickCheck4;

  if ((quickCheckValue4 & 2146435072) === 3145728) {
    const length0 = fiber0008(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
  }
  if ((quickCheckValue4 & 2147450877) === 3211312) {
    const length1 = fiber0010(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
  }
  return -1;
};
const fiber0012 = (i: number, str: string, context: Context): number => {
  /*
   * groupBackReference
   * ...9]|1[0-2])\2)(?:1[6-9]...
   *              ^^
   */
  let backReferenceI = context.groupMarkerStart1;
  const backReferenceEnd = context.groupMarkerEnd1;
  while (backReferenceI < backReferenceEnd) {
    if (i >= str.length) {
      return -1;
    }

    const backReferenceCharCode = str.charCodeAt(backReferenceI);
    const currentCharCode = str.charCodeAt(i);

    if (backReferenceCharCode !== currentCharCode) {
      return -1;
    }

    backReferenceI++;
    i++;
  }
  return fiber0006(i, str, context);
};
const fiber0013 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * .../\-\.])(?:0?[1,3-9]|1[...
   *              ^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0014(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches0++;

      if (matches0 === 1) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...-\.])(?:0?[1,3-9]|1[0-2])\2...
   *              ^^^^^^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 49) {
      result0 = charCode0 === 44 || charCode0 === 49;
    } else {
      if (charCode0 <= 57) {
        result0 = charCode0 >= 51;
      } else {
        result0 = false;
      }
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  return fiber0012(i, str, context);
};
const fiber0014 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * .../\-\.])(?:0?[1,3-9]|1...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 48;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0015 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0?[1,3-9]|1[0-2])\2)(...
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
  return fiber0012(i, str, context);
};
const fiber0016 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...|1[02])\1|(?:29|30)([\/\-\.])...
   *              ^^^^^^^^^
   */
  const firstCharQuickCheck0 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck0 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue0 = (firstCharQuickCheck0 << 16) ^ secondCharQuickCheck0;

  nonBacktrackingDisjunction0: {
    if ((quickCheckValue0 & 2147450879) === 3276857) {
      const length0 = fiber0017(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction0;
      }
    }
    if ((quickCheckValue0 & 2147450879) === 3342384) {
      const length1 = fiber0018(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction0;
      }
    }
    return -1;
  }
  /*
   * groupStartMarker
   * ...|(?:29|30)([\/\-\.])(?:0?[1,3-...
   *              ^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * charSequence
   * ...(?:29|30)([\/\-\.])(?:0?[1,3...
   *              ^^^^^^^^
   */
  const iAfterMatch2 = i + 1;
  if (iAfterMatch2 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 47) {
      result0 = charCode0 >= 45;
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
   * ...|(?:29|30)([\/\-\.])(?:0?[1,3-...
   *              ^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * disjunction
   * ...([\/\-\.])(?:0?[1,3-9]|1[0-2])\2)(?:1[6-...
   *              ^^^^^^^^^^^^^^^^^^^^
   */

  const firstCharQuickCheck4 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck4 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue4 = (firstCharQuickCheck4 << 16) ^ secondCharQuickCheck4;

  if ((quickCheckValue4 & 2145386496) === 2097152) {
    const length0 = fiber0013(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
  }
  if ((quickCheckValue4 & 2147450876) === 3211312) {
    const length1 = fiber0015(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
  }
  return -1;
};
const fiber0017 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...02])\1|(?:29|30)([\/\...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    i = iAfterMatch0;
  }
  return i;
};
const fiber0018 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...)\1|(?:29|30)([\/\-\....
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    i = iAfterMatch0;
  }
  return i;
};
const fiber0019 = (i: number, str: string, context: Context): number => {
  /*
   * disjunction
   * /^(?:(?:31([\/\-\.])(?:0?[13578]|1[02])\1|(?:29|30)([\/\-\.])(?:0?[1,3-9]|1[0-2])\2)(?:1[6-9]|...
   *      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;

  const firstCharQuickCheck0 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck0 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue0 = (firstCharQuickCheck0 << 16) ^ secondCharQuickCheck0;

  if ((quickCheckValue0 & 2147450879) === 3342385) {
    const length0 = fiber0011(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
  }
  if ((quickCheckValue0 & 2147385334) === 3276848) {
    const length1 = fiber0016(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
  }
  return -1;
};
const fiber0021 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:16|[24...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck0 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck0 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue0 = (firstCharQuickCheck0 << 16) ^ secondCharQuickCheck0;

  nonBacktrackingDisjunction0: {
    if ((quickCheckValue0 & 2147450867) === 3145776) {
      const length0 = fiber0022(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction0;
      }
    }
    if ((quickCheckValue0 & 2146533363) === 3145776) {
      const length1 = fiber0023(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction0;
      }
    }
    if ((quickCheckValue0 & 2146533371) === 3211314) {
      const length2 = fiber0024(i, str, context);
      if (length2 !== -1) {
        i = length2;
        break nonBacktrackingDisjunction0;
      }
    }
    return -1;
  }
  return fiber0001(i, str, context);
};
const fiber0022 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...-9]\d)?(?:0[48]|[2468...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    result1 = charCode1 === 52 || charCode1 === 56;

    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0023 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...?(?:0[48]|[2468][048]|[135...
   *              ^^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 52) {
      result0 = charCode0 === 48 || charCode0 === 52;
    } else {
      result0 = charCode0 === 56;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    if (charCode1 <= 52) {
      result1 = charCode1 === 50 || charCode1 === 52;
    } else {
      result1 = charCode1 === 54 || charCode1 === 56;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0024 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...468][048]|[13579][26])|(?:1...
   *              ^^^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    result0 = charCode0 === 50 || charCode0 === 54;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    if (charCode1 <= 53) {
      if (charCode1 <= 51) {
        result1 = charCode1 === 49 || charCode1 === 51;
      } else {
        result1 = charCode1 === 53;
      }
    } else {
      result1 = charCode1 === 55 || charCode1 === 57;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0025 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...])0?2\3(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck0 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck0 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue0 = (firstCharQuickCheck0 << 16) ^ secondCharQuickCheck0;

  nonBacktrackingDisjunction0: {
    if ((quickCheckValue0 & 2147450864) === 3211312) {
      const length0 = fiber0026(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction0;
      }
    }
    if ((quickCheckValue0 & 2146467824) === 3145776) {
      const length1 = fiber0027(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction0;
      }
    }
    return -1;
  }
  return i;
};
const fiber0026 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...?2\3(?:(?:1[6-9]|[2-9...
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
      result1 = charCode1 >= 54;
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
const fiber0027 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:1[6-9]|[2-9]\d)?(?:0[4...
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
      result1 = charCode1 >= 50;
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
   * backtrackingFixedLengthQuantifier
   * ...])0?2\3(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0025(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches0++;

      if (matches0 === 1) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0021(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 2;
  }

  return -1;
};
const fiber0029 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...579][26])|(?:16|[2468][048]|[3579][26])00)|(?:0?[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck0 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck0 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue0 = (firstCharQuickCheck0 << 16) ^ secondCharQuickCheck0;

  nonBacktrackingDisjunction0: {
    if ((quickCheckValue0 & 2147450879) === 3211318) {
      const length0 = fiber0030(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction0;
      }
    }
    if ((quickCheckValue0 & 2146533363) === 3145776) {
      const length1 = fiber0031(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction0;
      }
    }
    if ((quickCheckValue0 & 2146533371) === 3211314) {
      const length2 = fiber0032(i, str, context);
      if (length2 !== -1) {
        i = length2;
        break nonBacktrackingDisjunction0;
      }
    }
    return -1;
  }
  /*
   * charSequence
   * ...3579][26])00)|(?:0?[1...
   *              ^
   */
  const iAfterMatch1 = i + 2;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    result0 = charCode0 === 48;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    result1 = charCode1 === 48;

    if (!result1) {
      return -1;
    }

    i = iAfterMatch1;
  }
  return fiber0001(i, str, context);
};
const fiber0030 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...][26])|(?:16|[2468][0...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    i = iAfterMatch0;
  }
  return i;
};
const fiber0031 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...6])|(?:16|[2468][048]|[357...
   *              ^^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 52) {
      result0 = charCode0 === 48 || charCode0 === 52;
    } else {
      result0 = charCode0 === 56;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    if (charCode1 <= 52) {
      result1 = charCode1 === 50 || charCode1 === 52;
    } else {
      result1 = charCode1 === 54 || charCode1 === 56;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0032 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...468][048]|[3579][26])00)|(...
   *              ^^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    result0 = charCode0 === 50 || charCode0 === 54;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    if (charCode1 <= 53) {
      result1 = charCode1 === 51 || charCode1 === 53;
    } else {
      result1 = charCode1 === 55 || charCode1 === 57;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0033 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...]\d)?\d\d|29([\/\-\.]...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    result0 = charCode0 === 57;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    result1 = charCode1 === 50;

    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * groupStartMarker
   * ...d)?\d\d|29([\/\-\.])0?2\3(?:(?...
   *              ^^^^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * charSequence
   * ...)?\d\d|29([\/\-\.])0?2\3(?:(...
   *              ^^^^^^^^
   */
  const iAfterMatch2 = i + 1;
  if (iAfterMatch2 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 47) {
      result0 = charCode0 >= 45;
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
   * ...d)?\d\d|29([\/\-\.])0?2\3(?:(?...
   *              ^^^^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  /*
   * nonBacktrackingQuantifier
   * ...([\/\-\.])0?2\3(?:(?:1...
   *              ^^
   */
  let matches4 = 0;
  while (true) {
    const wrappedResult = fiber0034(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches4++;

      if (matches4 === 1) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...\/\-\.])0?2\3(?:(?:1[...
   *              ^
   */
  const iAfterMatch5 = i + 1;
  if (iAfterMatch5 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 50;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch5;
  }
  /*
   * groupBackReference
   * .../\-\.])0?2\3(?:(?:1[6-...
   *              ^^
   */
  let backReferenceI = context.groupMarkerStart2;
  const backReferenceEnd = context.groupMarkerEnd2;
  while (backReferenceI < backReferenceEnd) {
    if (i >= str.length) {
      return -1;
    }

    const backReferenceCharCode = str.charCodeAt(backReferenceI);
    const currentCharCode = str.charCodeAt(i);

    if (backReferenceCharCode !== currentCharCode) {
      return -1;
    }

    backReferenceI++;
    i++;
  }
  /*
   * disjunction
   * ...-\.])0?2\3(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:16|[2468][048]|[3579][26])00)|(?:0?[1-9...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */

  const firstCharQuickCheck7 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck7 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue7 = (firstCharQuickCheck7 << 16) ^ secondCharQuickCheck7;

  if ((quickCheckValue7 & 2146467824) === 3145776) {
    const length0 = fiber0028(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
  }
  if ((quickCheckValue7 & 2146467825) === 3145776) {
    const length1 = fiber0029(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
  }
  return -1;
};
const fiber0034 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...([\/\-\.])0?2\3(?:(?:...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 48;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0035 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[2-9]\d)?\d\d)$/
   *              ^^
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
      result1 = charCode1 >= 48;
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
const fiber0036 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...|1[0-2])\4(?:1[6-9]|[2-9]\d)?\d\d)$/
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck0 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck0 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue0 = (firstCharQuickCheck0 << 16) ^ secondCharQuickCheck0;

  nonBacktrackingDisjunction0: {
    if ((quickCheckValue0 & 2147450864) === 3211312) {
      const length0 = fiber0037(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction0;
      }
    }
    if ((quickCheckValue0 & 2146467824) === 3145776) {
      const length1 = fiber0038(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction0;
      }
    }
    return -1;
  }
  return i;
};
const fiber0037 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0-2])\4(?:1[6-9]|[2-9...
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
      result1 = charCode1 >= 54;
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
const fiber0038 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:1[6-9]|[2-9]\d)?\d\d)$/
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
      result1 = charCode1 >= 50;
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
const fiber0039 = (i: number, str: string, context: Context): number => {
  /*
   * groupBackReference
   * ...9]|1[0-2])\4(?:1[6-9]|...
   *              ^^
   */
  let backReferenceI = context.groupMarkerStart3;
  const backReferenceEnd = context.groupMarkerEnd3;
  while (backReferenceI < backReferenceEnd) {
    if (i >= str.length) {
      return -1;
    }

    const backReferenceCharCode = str.charCodeAt(backReferenceI);
    const currentCharCode = str.charCodeAt(i);

    if (backReferenceCharCode !== currentCharCode) {
      return -1;
    }

    backReferenceI++;
    i++;
  }
  /*
   * backtrackingFixedLengthQuantifier
   * ...|1[0-2])\4(?:1[6-9]|[2-9]\d)?\d\d)$/
   *              ^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;

  while (true) {
    const wrappedResult = fiber0036(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches1++;

      if (matches1 === 1) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches1 >= 0) {
    const directFollowUpResult1 = fiber0035(i, str, context);

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 2;
  }

  return -1;
};
const fiber0040 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * .../\-\.])(?:0?[1-9]|1[0-...
   *              ^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0041(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches0++;

      if (matches0 === 1) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...-\.])(?:0?[1-9]|1[0-2])\4...
   *              ^^^^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 49;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  return fiber0039(i, str, context);
};
const fiber0041 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * .../\-\.])(?:0?[1-9]|1[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 48;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0042 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...?:0?[1-9]|1[0-2])\4(?...
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
  return fiber0039(i, str, context);
};
const fiber0043 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...\d|2[0-8])([\/\-\.])(?:0?[1-9]...
   *              ^^^^^^^^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * charSequence
   * ...d|2[0-8])([\/\-\.])(?:0?[1-9...
   *              ^^^^^^^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 47) {
      result0 = charCode0 >= 45;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * groupEndMarker
   * ...\d|2[0-8])([\/\-\.])(?:0?[1-9]...
   *              ^^^^^^^^^^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  /*
   * disjunction
   * ...([\/\-\.])(?:0?[1-9]|1[0-2])\4(?:1[6-9...
   *              ^^^^^^^^^^^^^^^^^^
   */

  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  if ((quickCheckValue3 & 2146435072) === 3145728) {
    const length0 = fiber0040(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
  }
  if ((quickCheckValue3 & 2147450876) === 3211312) {
    const length1 = fiber0042(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
  }
  return -1;
};
const fiber0044 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...6])00)|(?:0?[1-9]|1\d|...
   *              ^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0045(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches0++;

      if (matches0 === 1) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...)00)|(?:0?[1-9]|1\d|2[0-8...
   *              ^^^^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 49;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  return fiber0043(i, str, context);
};
const fiber0045 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...6])00)|(?:0?[1-9]|1\d...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 48;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0046 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...?:0?[1-9]|1\d|2[0-8])...
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
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0043(i, str, context);
};
const fiber0047 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...[1-9]|1\d|2[0-8])([\/...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 56) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0043(i, str, context);
};
const fiber0048 = (i: number, str: string, context: Context): number => {
  /*
   * disjunction
   * ...][26])00)|(?:0?[1-9]|1\d|2[0-8])([\/\-\.])...
   *              ^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy3 = context.groupMarkerStart3;
  const groupMarkerEndCopy3 = context.groupMarkerEnd3;

  const firstCharQuickCheck0 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck0 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue0 = (firstCharQuickCheck0 << 16) ^ secondCharQuickCheck0;

  if ((quickCheckValue0 & 2146435072) === 3145728) {
    const length0 = fiber0044(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart3 = groupMarkerStartCopy3;
    context.groupMarkerEnd3 = groupMarkerEndCopy3;
  }
  if ((quickCheckValue0 & 2147450864) === 3211312) {
    const length1 = fiber0046(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart3 = groupMarkerStartCopy3;
    context.groupMarkerEnd3 = groupMarkerEndCopy3;
  }
  if ((quickCheckValue0 & 2147450864) === 3276848) {
    const length2 = fiber0047(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart3 = groupMarkerStartCopy3;
    context.groupMarkerEnd3 = groupMarkerEndCopy3;
  }
  return -1;
};
const fiber0049 = (i: number, str: string, context: Context): number => {
  /*
   * startAnchor
   * /^(?:(?:31([...
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * disjunction
   * /^(?:(?:31([\/\-\.])(?:0?[13578]|1[02])\1|(?:29|30)([\/\-\.])(?:0?[1,3-9]|1[0-2])\2)(?:1[6-9]|[2-9]\d)?\d\d|29([\/\-\.])0?2\3(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:16|[2468][048]|[3579][26])00)|(?:0?[1-9]|1\d|2[0-8])([\/\-\.])(?:0?[1-9]|1[0-2])\4(?:1[6-9]|[2-9]\d)?\d\d)$/
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;
  const groupMarkerStartCopy3 = context.groupMarkerStart3;
  const groupMarkerEndCopy3 = context.groupMarkerEnd3;

  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  if ((quickCheckValue1 & 2147385334) === 3276848) {
    const length0 = fiber0019(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
  }
  if ((quickCheckValue1 & 2147450879) === 3276857) {
    const length1 = fiber0033(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
  }
  if ((quickCheckValue1 & 2146467808) === 3145760) {
    const length2 = fiber0048(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart3 = groupMarkerStartCopy3;
    context.groupMarkerEnd3 = groupMarkerEndCopy3;
  }
  return -1;
};
