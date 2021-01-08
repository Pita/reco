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
    const posAfterMatch = fiber0071(i, str, context);
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

const fiber0002 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...|[2-9]\d)?\d{2})$|^(?:...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|[2-9]\d)?\d{2})$|^(?:...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * endAnchor
   * ...\d)?\d{2})$|^(?:29(\/...
   *              ^
   */
  if (i !== str.length) {
    return -1;
  }
  return i;
};
const fiber0004 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...\2))(?:(?:1[6-9]|[2-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...2))(?:(?:1[6-9]|[2-9]\d)?...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 54;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0005 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...(?:1[6-9]|[2-9]\d)?\d{2})...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 50;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...6-9]|[2-9]\d)?\d{2})$|...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0006 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * disjunction
   * ...2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0004(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0005(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0007 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0006(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches0++;

      if (i + 2 > str.length - 2 || matches0 === 1) {
        // if ((i + 2) > (str.length - 2)) {
        //   console.log('overstep backtrackingFixedLengthQuantifier', i, (str.length - 2));
        // }
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
const fiber0008 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupBackReference
   * ...8]|1[02]))\1|(?:(?:29|...
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
  return fiber0007(i, str, context);
};
const fiber0009 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * .../|-|\.)(?:0?[13578]|1[...
   *              ^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0010(i, str, context);

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
   * charOrSet
   * ...-|\.)(?:0?[13578]|1[02]))\1...
   *              ^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 51) {
    result1 = charCode1 === 49 || charCode1 === 51;
  } else {
    if (charCode1 === 53) {
      result1 = true;
    } else {
      if (charCode1 <= 56) {
        result1 = charCode1 >= 55;
      }
    }
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0008(i, str, context);
};
const fiber0010 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * .../|-|\.)(?:0?[13578]|1...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 48;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0011 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...0?[13578]|1[02]))\1|(...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...?[13578]|1[02]))\1|(?:(?...
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 48 || charCode1 === 50;

  if (!result1) {
    return -1;
  }
  i++;
  return fiber0008(i, str, context);
};
const fiber0012 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * /^(?:(?:31(\/|-|\.)(?:0?[1357...
   *           ^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * disjunction
   * ...1(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0009(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0011(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0013 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * /^(?:(?:31(\/|-|\.)(?:0...
   *            ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 47;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0012(i, str, context);
};
const fiber0014 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...:(?:31(\/|-|\.)(?:0?[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 45;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0012(i, str, context);
};
const fiber0015 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...?:31(\/|-|\.)(?:0?[135...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 46;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0012(i, str, context);
};
const fiber0016 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * /^(?:(?:31(\/|-|\.)...
   *         ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 51;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /^(?:(?:31(\/|-|\.)(...
   *          ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 49;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * /^(?:(?:31(\/|-|\.)(?:0?[1357...
   *           ^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * disjunction
   * /^(?:(?:31(\/|-|\.)(?:0?[1357...
   *           ^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const length0 = fiber0013(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  const length1 = fiber0014(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  const length2 = fiber0015(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  return -1;
};
const fiber0017 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupBackReference
   * ...9]|1[0-2])\2))(?:(?:1[...
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
  return fiber0007(i, str, context);
};
const fiber0018 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * .../|-|\.)(?:0?[1,3-9]|1[...
   *              ^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0019(i, str, context);

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
   * charOrSet
   * ...-|\.)(?:0?[1,3-9]|1[0-2])\2...
   *              ^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 49) {
    result1 = charCode1 === 44 || charCode1 === 49;
  } else {
    if (charCode1 <= 57) {
      result1 = charCode1 >= 51;
    }
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0017(i, str, context);
};
const fiber0019 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * .../|-|\.)(?:0?[1,3-9]|1...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 48;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0020 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...0?[1,3-9]|1[0-2])\2))...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...?[1,3-9]|1[0-2])\2))(?:(?...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 50) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0017(i, str, context);
};
const fiber0021 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * ...:(?:29|30)(\/|-|\.)(?:0?[1,3-...
   *              ^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * disjunction
   * ...)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0018(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0020(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0022 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...(?:29|30)(\/|-|\.)(?:0...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 47;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0021(i, str, context);
};
const fiber0023 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...29|30)(\/|-|\.)(?:0?[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 45;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0021(i, str, context);
};
const fiber0024 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...|30)(\/|-|\.)(?:0?[1,3...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 46;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0021(i, str, context);
};
const fiber0025 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...:(?:29|30)(\/|-|\.)(?:0?[1,3-...
   *              ^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * disjunction
   * ...:(?:29|30)(\/|-|\.)(?:0?[1,3-...
   *              ^^^^^^^^^
   */
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const length0 = fiber0022(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  const length1 = fiber0023(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  const length2 = fiber0024(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  return -1;
};
const fiber0026 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...)\1|(?:(?:29|30)(\/|-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...\1|(?:(?:29|30)(\/|-|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 57;

  if (!result1) {
    return -1;
  }
  i++;
  return fiber0025(i, str, context);
};
const fiber0027 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...|(?:(?:29|30)(\/|-|\....
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 51;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...(?:(?:29|30)(\/|-|\.)...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 48;

  if (!result1) {
    return -1;
  }
  i++;
  return fiber0025(i, str, context);
};
const fiber0028 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * disjunction
   * ...2]))\1|(?:(?:29|30)(\/|-|\.)(...
   *              ^^^^^^^^^
   */
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const length0 = fiber0026(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  const length1 = fiber0027(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  return -1;
};
const fiber0029 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * startAnchor
   * /^(?:(?:31(\...
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * disjunction
   * /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const length0 = fiber0016(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  const length1 = fiber0028(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  return -1;
};
const fiber0030 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * endAnchor
   * ...26])00))))$|^(?:0?[1-...
   *              ^
   */
  if (i !== str.length) {
    return -1;
  }
  return i;
};
const fiber0032 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...-9]\d)?(?:0[48]|[2468...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 48;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...9]\d)?(?:0[48]|[2468][04...
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 52 || charCode1 === 56;

  if (!result1) {
    return -1;
  }
  i++;
  return fiber0030(i, str, context);
};
const fiber0033 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...?(?:0[48]|[2468][048]|[135...
   *              ^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 52) {
    result0 = charCode0 === 50 || charCode0 === 52;
  } else {
    result0 = charCode0 === 54 || charCode0 === 56;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...48]|[2468][048]|[13579][2...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 52) {
    result1 = charCode1 === 48 || charCode1 === 52;
  } else {
    result1 = charCode1 === 56;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0030(i, str, context);
};
const fiber0034 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...468][048]|[13579][26])|(?:(...
   *              ^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 53) {
    if (charCode0 <= 51) {
      result0 = charCode0 === 49 || charCode0 === 51;
    } else {
      result0 = charCode0 === 53;
    }
  } else {
    result0 = charCode0 === 55 || charCode0 === 57;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...8]|[13579][26])|(?:(?:16...
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 50 || charCode1 === 54;

  if (!result1) {
    return -1;
  }
  i++;
  return fiber0030(i, str, context);
};
const fiber0035 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * disjunction
   * ...|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0032(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0033(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  const length2 = fiber0034(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  return -1;
};
const fiber0037 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...3(?:(?:(?:1[6-9]|[2-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...(?:(?:(?:1[6-9]|[2-9]\d)?...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 54;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0038 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...(?:1[6-9]|[2-9]\d)?(?:0[4...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 50;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...6-9]|[2-9]\d)?(?:0[48]...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0039 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * disjunction
   * ...?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0037(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0038(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0040 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0039(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches0++;

      if (i + 2 > str.length - 2 || matches0 === 1) {
        // if ((i + 2) > (str.length - 2)) {
        //   console.log('overstep backtrackingFixedLengthQuantifier', i, (str.length - 2));
        // }
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0035(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 2;
  }

  return -1;
};
const fiber0041 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...3579][26])00))))$|^(?...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 48;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...579][26])00))))$|^(?:...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 48;

  if (!result1) {
    return -1;
  }
  i++;
  return fiber0030(i, str, context);
};
const fiber0042 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...6])|(?:(?:16|[2468][0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...])|(?:(?:16|[2468][04...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 54;

  if (!result1) {
    return -1;
  }
  i++;
  return fiber0041(i, str, context);
};
const fiber0043 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...|(?:(?:16|[2468][048]|[357...
   *              ^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 52) {
    result0 = charCode0 === 50 || charCode0 === 52;
  } else {
    result0 = charCode0 === 54 || charCode0 === 56;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...:16|[2468][048]|[3579][26...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 52) {
    result1 = charCode1 === 48 || charCode1 === 52;
  } else {
    result1 = charCode1 === 56;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0041(i, str, context);
};
const fiber0044 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...468][048]|[3579][26])00)))...
   *              ^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 53) {
    result0 = charCode0 === 51 || charCode0 === 53;
  } else {
    result0 = charCode0 === 55 || charCode0 === 57;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...48]|[3579][26])00))))$|^...
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 50 || charCode1 === 54;

  if (!result1) {
    return -1;
  }
  i++;
  return fiber0041(i, str, context);
};
const fiber0045 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * disjunction
   * ...][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0042(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0043(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  const length2 = fiber0044(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  return -1;
};
const fiber0046 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * ...})$|^(?:29(\/|-|\.)0?2\3(?:(?...
   *              ^^^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  /*
   * nonBacktrackingQuantifier
   * ...9(\/|-|\.)0?2\3(?:(?:(...
   *              ^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0047(i, str, context);

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
  /*
   * charOrSet
   * ...\/|-|\.)0?2\3(?:(?:(?...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 50;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * groupBackReference
   * .../|-|\.)0?2\3(?:(?:(?:1...
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
   * ....)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0040(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0045(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0047 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...9(\/|-|\.)0?2\3(?:(?:...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 48;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0048 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...)$|^(?:29(\/|-|\.)0?2\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 47;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0046(i, str, context);
};
const fiber0049 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...^(?:29(\/|-|\.)0?2\3(...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 45;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0046(i, str, context);
};
const fiber0050 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...?:29(\/|-|\.)0?2\3(?:(...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 46;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0046(i, str, context);
};
const fiber0051 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * startAnchor
   * ...)?\d{2})$|^(?:29(\/|-...
   *              ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * charOrSet
   * ...{2})$|^(?:29(\/|-|\.)...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 50;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...2})$|^(?:29(\/|-|\.)0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 57;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...})$|^(?:29(\/|-|\.)0?2\3(?:(?...
   *              ^^^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * disjunction
   * ...})$|^(?:29(\/|-|\.)0?2\3(?:(?...
   *              ^^^^^^^^^
   */
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;
  const length0 = fiber0048(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  const length1 = fiber0049(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  const length2 = fiber0050(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  return -1;
};
const fiber0052 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...|[2-9]\d)?\d{2})$/
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|[2-9]\d)?\d{2})$/
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * endAnchor
   * ...\d)?\d{2})$/
   *              ^
   */
  if (i !== str.length) {
    return -1;
  }
  return i;
};
const fiber0054 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...))\4(?:(?:1[6-9]|[2-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...)\4(?:(?:1[6-9]|[2-9]\d)?...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 54;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0055 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...(?:1[6-9]|[2-9]\d)?\d{2})$/
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 50;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...6-9]|[2-9]\d)?\d{2})$/
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0056 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * disjunction
   * ...-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
   *              ^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0054(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0055(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0057 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupBackReference
   * ...?:1[0-2]))\4(?:(?:1[6-...
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
   * ...-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
   *              ^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;

  while (true) {
    const wrappedResult = fiber0056(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches1++;

      if (i + 2 > str.length - 2 || matches1 === 1) {
        // if ((i + 2) > (str.length - 2)) {
        //   console.log('overstep backtrackingFixedLengthQuantifier', i, (str.length - 2));
        // }
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches1 >= 0) {
    const directFollowUpResult1 = fiber0052(i, str, context);

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 2;
  }

  return -1;
};
const fiber0058 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * ...|\.)(?:(?:0?[1-9])|(?:...
   *              ^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0059(i, str, context);

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
   * charOrSet
   * ....)(?:(?:0?[1-9])|(?:1[0-2...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 49;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0057(i, str, context);
};
const fiber0059 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...|\.)(?:(?:0?[1-9])|(?...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 48;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0060 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...[1-9])|(?:1[0-2]))\4(...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...1-9])|(?:1[0-2]))\4(?:(?:...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 50) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0057(i, str, context);
};
const fiber0061 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * ...\d|2[0-8])(\/|-|\.)(?:(?:0?[1...
   *              ^^^^^^^^^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  /*
   * disjunction
   * ...)(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0058(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0060(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0062 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...d|2[0-8])(\/|-|\.)(?:(...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 47;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0061(i, str, context);
};
const fiber0063 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...[0-8])(\/|-|\.)(?:(?:...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 45;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0061(i, str, context);
};
const fiber0064 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...-8])(\/|-|\.)(?:(?:0?[...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 46;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0061(i, str, context);
};
const fiber0065 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...\d|2[0-8])(\/|-|\.)(?:(?:0?[1...
   *              ^^^^^^^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * disjunction
   * ...\d|2[0-8])(\/|-|\.)(?:(?:0?[1...
   *              ^^^^^^^^^
   */
  const groupMarkerStartCopy3 = context.groupMarkerStart3;
  const groupMarkerEndCopy3 = context.groupMarkerEnd3;
  const length0 = fiber0062(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  const length1 = fiber0063(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  const length2 = fiber0064(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  return -1;
};
const fiber0066 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * ...))))$|^(?:0?[1-9]|1\d|...
   *              ^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0067(i, str, context);

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
   * charOrSet
   * ...))$|^(?:0?[1-9]|1\d|2[0-8...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 49;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0065(i, str, context);
};
const fiber0067 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...))))$|^(?:0?[1-9]|1\d...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 48;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0068 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...?:0?[1-9]|1\d|2[0-8])...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...:0?[1-9]|1\d|2[0-8])(\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0065(i, str, context);
};
const fiber0069 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...[1-9]|1\d|2[0-8])(\/|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...1-9]|1\d|2[0-8])(\/|-|\.)...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 56) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0065(i, str, context);
};
const fiber0070 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * startAnchor
   * ...])00))))$|^(?:0?[1-9]...
   *              ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * disjunction
   * ...)00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(...
   *              ^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy3 = context.groupMarkerStart3;
  const groupMarkerEndCopy3 = context.groupMarkerEnd3;
  const length0 = fiber0066(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  const length1 = fiber0068(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  const length2 = fiber0069(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  return -1;
};
const fiber0071 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * disjunction
   * /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;
  const groupMarkerStartCopy3 = context.groupMarkerStart3;
  const groupMarkerEndCopy3 = context.groupMarkerEnd3;
  const length0 = fiber0029(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  const length1 = fiber0051(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  const length2 = fiber0070(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  return -1;
};
