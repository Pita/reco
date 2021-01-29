// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/'
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

// Regex optimized to: /^(?:(?:31([\/\-\.])(?:0?[13578]|1[02]|Jan|Ma[ry]|Jul|Aug|Oct|Dec)\1|(?:29|30)([\/\-\.])(?:0?[1,3-9]|1[0-2]|Jan|Mar|Apr|May|Ju[nl]|Aug|Sep|Oct|Nov|Dec)\2)(?:1[6-9]|[2-9]\d)?\d\d|29([\/\-\.])(?:0?2|Feb)\3(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:16|[2468][048]|[3579][26])00)|(?:0?[1-9]|1\d|2[0-8])([\/\-\.])(?:0?[1-9]|A(?:pr|ug)|Feb|J(?:an|u[nl])|Ma[ry]|Sep|1[0-2]|Oct|Nov|Dec)\4(?:1[6-9]|[2-9]\d)?\d\d)$/

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
    const posAfterMatch = fiber0079(i, str, context);
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
   * charOrSet
   * ...|[2-9]\d)?\d\d|29([\/\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...2-9]\d)?\d\d|29([\/\-\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  } else {
    result1 = false;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0001(i, str, context);
};
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...ov|Dec)\2)(?:1[6-9]|[2-9]\d)?\d\d|29([...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0004(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0005(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  return i;
};
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Dec)\2)(?:1[6-9]|[2-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...ec)\2)(?:1[6-9]|[2-9]\d)?...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 54;
  } else {
    result1 = false;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(?:1[6-9]|[2-9]\d)?\d\d|2...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 50;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...6-9]|[2-9]\d)?\d\d|29(...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  } else {
    result1 = false;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...ov|Dec)\2)(?:1[6-9]|[2-9]\d)?\d\d|29([\...
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
   * ...g|Oct|Dec)\1|(?:29|30)...
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
   * charOrSet
   * ...-\.])(?:0?[13578]|1[02]|Jan...
   *              ^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 51) {
    result1 = charCode1 === 49 || charCode1 === 51;
  } else {
    if (charCode1 === 53) {
      result1 = true;
    } else {
      if (charCode1 <= 56) {
        result1 = charCode1 >= 55;
      } else {
        result1 = false;
      }
    }
  }
  if (!result1) {
    return -1;
  }
  i++;
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
   * charOrSet
   * ...0?[13578]|1[02]|Jan|M...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...?[13578]|1[02]|Jan|Ma[ry...
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 48 || charCode1 === 50;

  if (!result1) {
    return -1;
  }
  i++;
  return fiber0007(i, str, context);
};
const fiber0011 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...78]|1[02]|Jan|Ma[ry]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 74;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...8]|1[02]|Jan|Ma[ry]|J...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...]|1[02]|Jan|Ma[ry]|Ju...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 110;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0007(i, str, context);
};
const fiber0012 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...1[02]|Jan|Ma[ry]|Jul|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 77;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...[02]|Jan|Ma[ry]|Jul|A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...02]|Jan|Ma[ry]|Jul|Aug|O...
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 114 || charCode2 === 121;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0007(i, str, context);
};
const fiber0013 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...an|Ma[ry]|Jul|Aug|Oct...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 74;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...n|Ma[ry]|Jul|Aug|Oct|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 117;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Ma[ry]|Jul|Aug|Oct|D...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 108;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0007(i, str, context);
};
const fiber0014 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...a[ry]|Jul|Aug|Oct|Dec...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 65;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...[ry]|Jul|Aug|Oct|Dec)...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 117;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...ry]|Jul|Aug|Oct|Dec)\...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 103;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0007(i, str, context);
};
const fiber0015 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]|Jul|Aug|Oct|Dec)\1|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 79;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Jul|Aug|Oct|Dec)\1|(...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 99;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Jul|Aug|Oct|Dec)\1|(?...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 116;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0007(i, str, context);
};
const fiber0016 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...l|Aug|Oct|Dec)\1|(?:2...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 68;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Aug|Oct|Dec)\1|(?:29...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 101;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Aug|Oct|Dec)\1|(?:29|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 99;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0007(i, str, context);
};
const fiber0017 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /^(?:(?:31([\/\-\.]...
   *         ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 51;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * /^(?:(?:31([\/\-\.])...
   *          ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 49;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * /^(?:(?:31([\/\-\.])(?:0?[1357...
   *           ^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charOrSet
   * /^(?:(?:31([\/\-\.])(?:0?[135...
   *            ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  if (charCode3 <= 47) {
    result3 = charCode3 >= 45;
  } else {
    result3 = false;
  }
  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /^(?:(?:31([\/\-\.])(?:0?[1357...
   *           ^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * disjunction
   * ...([\/\-\.])(?:0?[13578]|1[02]|Jan|Ma[ry]|Jul|Aug|Oct|Dec)\1|(?:29|3...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0008(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0010(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  const length2 = fiber0011(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  const length3 = fiber0012(i, str, context);
  if (length3 !== -1) {
    return length3;
  }
  const length4 = fiber0013(i, str, context);
  if (length4 !== -1) {
    return length4;
  }
  const length5 = fiber0014(i, str, context);
  if (length5 !== -1) {
    return length5;
  }
  const length6 = fiber0015(i, str, context);
  if (length6 !== -1) {
    return length6;
  }
  const length7 = fiber0016(i, str, context);
  if (length7 !== -1) {
    return length7;
  }
  return -1;
};
const fiber0018 = (i: number, str: string, context: Context): number => {
  /*
   * groupBackReference
   * ...t|Nov|Dec)\2)(?:1[6-9]...
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
const fiber0019 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * .../\-\.])(?:0?[1,3-9]|1[...
   *              ^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0020(i, str, context);

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
   * ...-\.])(?:0?[1,3-9]|1[0-2]|Ja...
   *              ^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 49) {
    result1 = charCode1 === 44 || charCode1 === 49;
  } else {
    if (charCode1 <= 57) {
      result1 = charCode1 >= 51;
    } else {
      result1 = false;
    }
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0018(i, str, context);
};
const fiber0020 = (i: number, str: string, context: Context): number => {
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
const fiber0021 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0?[1,3-9]|1[0-2]|Jan|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...?[1,3-9]|1[0-2]|Jan|Mar|A...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 50) {
    result1 = charCode1 >= 48;
  } else {
    result1 = false;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0018(i, str, context);
};
const fiber0022 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]|1[0-2]|Jan|Mar|Apr...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 74;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...]|1[0-2]|Jan|Mar|Apr|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|1[0-2]|Jan|Mar|Apr|M...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 110;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0018(i, str, context);
};
const fiber0023 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...[0-2]|Jan|Mar|Apr|May...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 77;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-2]|Jan|Mar|Apr|May|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...-2]|Jan|Mar|Apr|May|J...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 114;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0018(i, str, context);
};
const fiber0024 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]|Jan|Mar|Apr|May|Ju[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 65;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Jan|Mar|Apr|May|Ju[n...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 112;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Jan|Mar|Apr|May|Ju[nl...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 114;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0018(i, str, context);
};
const fiber0025 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...n|Mar|Apr|May|Ju[nl]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 77;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Mar|Apr|May|Ju[nl]|A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Mar|Apr|May|Ju[nl]|Au...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 121;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0018(i, str, context);
};
const fiber0026 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...r|Apr|May|Ju[nl]|Aug|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 74;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Apr|May|Ju[nl]|Aug|S...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 117;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Apr|May|Ju[nl]|Aug|Sep|O...
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 108 || charCode2 === 110;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0018(i, str, context);
};
const fiber0027 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...ay|Ju[nl]|Aug|Sep|Oct...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 65;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...y|Ju[nl]|Aug|Sep|Oct|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 117;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Ju[nl]|Aug|Sep|Oct|N...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 103;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0018(i, str, context);
};
const fiber0028 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...u[nl]|Aug|Sep|Oct|Nov...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 83;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...[nl]|Aug|Sep|Oct|Nov|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 101;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...nl]|Aug|Sep|Oct|Nov|D...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 112;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0018(i, str, context);
};
const fiber0029 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]|Aug|Sep|Oct|Nov|Dec...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 79;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Aug|Sep|Oct|Nov|Dec)...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 99;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Aug|Sep|Oct|Nov|Dec)\...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 116;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0018(i, str, context);
};
const fiber0030 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...g|Sep|Oct|Nov|Dec)\2)...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 78;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Sep|Oct|Nov|Dec)\2)(...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 111;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Sep|Oct|Nov|Dec)\2)(?...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 118;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0018(i, str, context);
};
const fiber0031 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...p|Oct|Nov|Dec)\2)(?:1...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 68;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Oct|Nov|Dec)\2)(?:1[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 101;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Oct|Nov|Dec)\2)(?:1[6...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 99;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0018(i, str, context);
};
const fiber0032 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...ct|Dec)\1|(?:29|30)([\/\-\.])...
   *              ^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0033(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0034(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
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
   * charOrSet
   * ...(?:29|30)([\/\-\.])(?:0?[1,3...
   *              ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  if (charCode2 <= 47) {
    result2 = charCode2 >= 45;
  } else {
    result2 = false;
  }
  if (!result2) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...|(?:29|30)([\/\-\.])(?:0?[1,3-...
   *              ^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * disjunction
   * ...([\/\-\.])(?:0?[1,3-9]|1[0-2]|Jan|Mar|Apr|May|Ju[nl]|Aug|Sep|Oct|Nov|Dec)\2)(?:1[6-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0019(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0021(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  const length2 = fiber0022(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  const length3 = fiber0023(i, str, context);
  if (length3 !== -1) {
    return length3;
  }
  const length4 = fiber0024(i, str, context);
  if (length4 !== -1) {
    return length4;
  }
  const length5 = fiber0025(i, str, context);
  if (length5 !== -1) {
    return length5;
  }
  const length6 = fiber0026(i, str, context);
  if (length6 !== -1) {
    return length6;
  }
  const length7 = fiber0027(i, str, context);
  if (length7 !== -1) {
    return length7;
  }
  const length8 = fiber0028(i, str, context);
  if (length8 !== -1) {
    return length8;
  }
  const length9 = fiber0029(i, str, context);
  if (length9 !== -1) {
    return length9;
  }
  const length10 = fiber0030(i, str, context);
  if (length10 !== -1) {
    return length10;
  }
  const length11 = fiber0031(i, str, context);
  if (length11 !== -1) {
    return length11;
  }
  return -1;
};
const fiber0033 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Dec)\1|(?:29|30)([\/\...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...ec)\1|(?:29|30)([\/\-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 57;

  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0034 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...)\1|(?:29|30)([\/\-\....
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 51;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...\1|(?:29|30)([\/\-\.]...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 48;

  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0035 = (i: number, str: string, context: Context): number => {
  /*
   * disjunction
   * /^(?:(?:31([\/\-\.])(?:0?[13578]|1[02]|Jan|Ma[ry]|Jul|Aug|Oct|Dec)\1|(?:29|30)([\/\-\.])(?:0?[1,3-9]|1[0-2]|Jan|Mar|Apr|May|Ju[nl]|Aug|Sep|Oct|Nov|Dec)\2)(?:1[6-9]|...
   *      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const length0 = fiber0017(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  const length1 = fiber0032(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  return -1;
};
const fiber0037 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:16|[24...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0038(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0039(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    const length2 = fiber0040(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  return fiber0001(i, str, context);
};
const fiber0038 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-9]\d)?(?:0[48]|[2468...
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
  /*
   * charOrSet
   * ...9]\d)?(?:0[48]|[2468][04...
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 52 || charCode1 === 56;

  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0039 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...?(?:0[48]|[2468][048]|[135...
   *              ^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

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
  let result1: boolean;

  if (charCode1 <= 52) {
    result1 = charCode1 === 48 || charCode1 === 52;
  } else {
    result1 = charCode1 === 56;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0040 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...468][048]|[13579][26])|(?:1...
   *              ^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

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
   * ...8]|[13579][26])|(?:16|[2...
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 50 || charCode1 === 54;

  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0041 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...|Feb)\3(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0042(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0043(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  return i;
};
const fiber0042 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...b)\3(?:(?:1[6-9]|[2-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...)\3(?:(?:1[6-9]|[2-9]\d)?...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 54;
  } else {
    result1 = false;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0043 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(?:1[6-9]|[2-9]\d)?(?:0[4...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 50;
  } else {
    result0 = false;
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
  let result1: boolean;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  } else {
    result1 = false;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0044 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...|Feb)\3(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[...
   *              ^^^^^^^^^^^^^^^^^^^
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

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0037(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 2;
  }

  return -1;
};
const fiber0045 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...579][26])|(?:16|[2468][048]|[3579][26])00)|(?:0?[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0046(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0047(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    const length2 = fiber0048(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  /*
   * charOrSet
   * ...3579][26])00)|(?:0?[1...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 48;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...579][26])00)|(?:0?[1-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 48;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0001(i, str, context);
};
const fiber0046 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...][26])|(?:16|[2468][0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...[26])|(?:16|[2468][04...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 54;

  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0047 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...6])|(?:16|[2468][048]|[357...
   *              ^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

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
  let result1: boolean;

  if (charCode1 <= 52) {
    result1 = charCode1 === 48 || charCode1 === 52;
  } else {
    result1 = charCode1 === 56;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0048 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...468][048]|[3579][26])00)|(...
   *              ^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

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
   * ...48]|[3579][26])00)|(?:0?...
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 50 || charCode1 === 54;

  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0049 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d)?\d\d|29([\/\-\.]...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...\d)?\d\d|29([\/\-\.])...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 57;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...d)?\d\d|29([\/\-\.])(?:0?2|Feb...
   *              ^^^^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * charOrSet
   * ...)?\d\d|29([\/\-\.])(?:0?2|Fe...
   *              ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  if (charCode3 <= 47) {
    result3 = charCode3 >= 45;
  } else {
    result3 = false;
  }
  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...d)?\d\d|29([\/\-\.])(?:0?2|Feb...
   *              ^^^^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  /*
   * nonBacktrackingDisjunction
   * ...([\/\-\.])(?:0?2|Feb)\3(?:(?:1[...
   *              ^^^^^^^^^^^
   */
  nonBacktrackingDisjunction5: {
    const length0 = fiber0050(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction5;
    }
    const length1 = fiber0052(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction5;
    }
    return -1;
  }
  /*
   * groupBackReference
   * ...?:0?2|Feb)\3(?:(?:1[6-...
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
   * ...0?2|Feb)\3(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:16|[2468][048]|[3579][26])00)|(?:0?[1-9...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0044(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0045(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0050 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * .../\-\.])(?:0?2|Feb)\3(?...
   *              ^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0051(i, str, context);

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
   * ...-\.])(?:0?2|Feb)\3(?:...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 50;

  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0051 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * .../\-\.])(?:0?2|Feb)\3(...
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
const fiber0052 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....])(?:0?2|Feb)\3(?:(?...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 70;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...])(?:0?2|Feb)\3(?:(?:...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 101;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...)(?:0?2|Feb)\3(?:(?:1...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 98;

  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0053 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|[2-9]\d)?\d\d)$/
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...2-9]\d)?\d\d)$/
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  } else {
    result1 = false;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0001(i, str, context);
};
const fiber0054 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...Nov|Dec)\4(?:1[6-9]|[2-9]\d)?\d\d)$/
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0055(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0056(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  return i;
};
const fiber0055 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|Dec)\4(?:1[6-9]|[2-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Dec)\4(?:1[6-9]|[2-9]\d)?...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 54;
  } else {
    result1 = false;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0056 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(?:1[6-9]|[2-9]\d)?\d\d)$/
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 50;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...6-9]|[2-9]\d)?\d\d)$/
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  } else {
    result1 = false;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0057 = (i: number, str: string, context: Context): number => {
  /*
   * groupBackReference
   * ...t|Nov|Dec)\4(?:1[6-9]|...
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
   * ...Nov|Dec)\4(?:1[6-9]|[2-9]\d)?\d\d)$/
   *              ^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;

  while (true) {
    const wrappedResult = fiber0054(i, str, context);

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
    const directFollowUpResult1 = fiber0053(i, str, context);

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 2;
  }

  return -1;
};
const fiber0058 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * .../\-\.])(?:0?[1-9]|A(?:...
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
   * ...-\.])(?:0?[1-9]|A(?:pr|ug...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 49;
  } else {
    result1 = false;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0057(i, str, context);
};
const fiber0059 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * .../\-\.])(?:0?[1-9]|A(?...
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
const fiber0060 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...?:0?[1-9]|A(?:pr|ug)|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 65;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...:0?[1-9]|A(?:pr|ug)|Feb|J(?:a...
   *              ^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0061(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0062(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0057(i, str, context);
};
const fiber0061 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...[1-9]|A(?:pr|ug)|Feb|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 112;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...1-9]|A(?:pr|ug)|Feb|J...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 114;

  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0062 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]|A(?:pr|ug)|Feb|J(?...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 117;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...]|A(?:pr|ug)|Feb|J(?:...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 103;

  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0063 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(?:pr|ug)|Feb|J(?:an|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 70;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...?:pr|ug)|Feb|J(?:an|u...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 101;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...:pr|ug)|Feb|J(?:an|u[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 98;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0057(i, str, context);
};
const fiber0064 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...r|ug)|Feb|J(?:an|u[nl...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 74;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...|ug)|Feb|J(?:an|u[nl])|Ma[ry]|Se...
   *              ^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0065(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0066(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0057(i, str, context);
};
const fiber0065 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...)|Feb|J(?:an|u[nl])|M...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 97;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Feb|J(?:an|u[nl])|Ma...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 110;

  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0066 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...eb|J(?:an|u[nl])|Ma[r...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 117;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...b|J(?:an|u[nl])|Ma[ry]|S...
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 108 || charCode1 === 110;

  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0067 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...an|u[nl])|Ma[ry]|Sep|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 77;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...n|u[nl])|Ma[ry]|Sep|1...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|u[nl])|Ma[ry]|Sep|1[0-2...
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 114 || charCode2 === 121;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0057(i, str, context);
};
const fiber0068 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...])|Ma[ry]|Sep|1[0-2]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 83;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...)|Ma[ry]|Sep|1[0-2]|O...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 101;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Ma[ry]|Sep|1[0-2]|Oc...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 112;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0057(i, str, context);
};
const fiber0069 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...a[ry]|Sep|1[0-2]|Oct|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...[ry]|Sep|1[0-2]|Oct|Nov|D...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 50) {
    result1 = charCode1 >= 48;
  } else {
    result1 = false;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0057(i, str, context);
};
const fiber0070 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...ep|1[0-2]|Oct|Nov|Dec...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 79;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...p|1[0-2]|Oct|Nov|Dec)...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 99;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|1[0-2]|Oct|Nov|Dec)\...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 116;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0057(i, str, context);
};
const fiber0071 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...[0-2]|Oct|Nov|Dec)\4(...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 78;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-2]|Oct|Nov|Dec)\4(?...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 111;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...-2]|Oct|Nov|Dec)\4(?:...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 118;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0057(i, str, context);
};
const fiber0072 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]|Oct|Nov|Dec)\4(?:1[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 68;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Oct|Nov|Dec)\4(?:1[6...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 101;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Oct|Nov|Dec)\4(?:1[6-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 99;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0057(i, str, context);
};
const fiber0073 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...\d|2[0-8])([\/\-\.])(?:0?[1-9]...
   *              ^^^^^^^^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * charOrSet
   * ...d|2[0-8])([\/\-\.])(?:0?[1-9...
   *              ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 47) {
    result1 = charCode1 >= 45;
  } else {
    result1 = false;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...\d|2[0-8])([\/\-\.])(?:0?[1-9]...
   *              ^^^^^^^^^^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  /*
   * disjunction
   * ...([\/\-\.])(?:0?[1-9]|A(?:pr|ug)|Feb|J(?:an|u[nl])|Ma[ry]|Sep|1[0-2]|Oct|Nov|Dec)\4(?:1[6-9...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0058(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0060(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  const length2 = fiber0063(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  const length3 = fiber0064(i, str, context);
  if (length3 !== -1) {
    return length3;
  }
  const length4 = fiber0067(i, str, context);
  if (length4 !== -1) {
    return length4;
  }
  const length5 = fiber0068(i, str, context);
  if (length5 !== -1) {
    return length5;
  }
  const length6 = fiber0069(i, str, context);
  if (length6 !== -1) {
    return length6;
  }
  const length7 = fiber0070(i, str, context);
  if (length7 !== -1) {
    return length7;
  }
  const length8 = fiber0071(i, str, context);
  if (length8 !== -1) {
    return length8;
  }
  const length9 = fiber0072(i, str, context);
  if (length9 !== -1) {
    return length9;
  }
  return -1;
};
const fiber0074 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...6])00)|(?:0?[1-9]|1\d|...
   *              ^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0075(i, str, context);

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
   * ...)00)|(?:0?[1-9]|1\d|2[0-8...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 49;
  } else {
    result1 = false;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0073(i, str, context);
};
const fiber0075 = (i: number, str: string, context: Context): number => {
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
const fiber0076 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...?:0?[1-9]|1\d|2[0-8])...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...:0?[1-9]|1\d|2[0-8])([...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  } else {
    result1 = false;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0073(i, str, context);
};
const fiber0077 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...[1-9]|1\d|2[0-8])([\/...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...1-9]|1\d|2[0-8])([\/\-\.]...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 56) {
    result1 = charCode1 >= 48;
  } else {
    result1 = false;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0073(i, str, context);
};
const fiber0078 = (i: number, str: string, context: Context): number => {
  /*
   * disjunction
   * ...][26])00)|(?:0?[1-9]|1\d|2[0-8])([\/\-\.])...
   *              ^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy3 = context.groupMarkerStart3;
  const groupMarkerEndCopy3 = context.groupMarkerEnd3;
  const length0 = fiber0074(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  const length1 = fiber0076(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  const length2 = fiber0077(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  return -1;
};
const fiber0079 = (i: number, str: string, context: Context): number => {
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
   * /^(?:(?:31([\/\-\.])(?:0?[13578]|1[02]|Jan|Ma[ry]|Jul|Aug|Oct|Dec)\1|(?:29|30)([\/\-\.])(?:0?[1,3-9]|1[0-2]|Jan|Mar|Apr|May|Ju[nl]|Aug|Sep|Oct|Nov|Dec)\2)(?:1[6-9]|[2-9]\d)?\d\d|29([\/\-\.])(?:0?2|Feb)\3(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:16|[2468][048]|[3579][26])00)|(?:0?[1-9]|1\d|2[0-8])([\/\-\.])(?:0?[1-9]|A(?:pr|ug)|Feb|J(?:an|u[nl])|Ma[ry]|Sep|1[0-2]|Oct|Nov|Dec)\4(?:1[6-9]|[2-9]\d)?\d\d)$/
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;
  const groupMarkerStartCopy3 = context.groupMarkerStart3;
  const groupMarkerEndCopy3 = context.groupMarkerEnd3;
  const length0 = fiber0035(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  const length1 = fiber0049(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  const length2 = fiber0078(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  return -1;
};
