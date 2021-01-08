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
    const posAfterMatch = fiber0116(i, str, context);
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
   * ...c))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^...
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
   * ...c))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(...
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
   * ...Oct|Dec)))\1|(?:(?:29|...
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
   * ...-|\.)(?:0?[13578]|1[02]|(?:...
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
   * ...0?[13578]|1[02]|(?:Ja...
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
   * ...?[13578]|1[02]|(?:Jan|Ma...
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
const fiber0013 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...|1[02]|(?:Jan|Mar|May...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 74;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...1[02]|(?:Jan|Mar|May|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...[02]|(?:Jan|Mar|May|J...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 110;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0008(i, str, context);
};
const fiber0014 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...2]|(?:Jan|Mar|May|Jul...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 77;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...]|(?:Jan|Mar|May|Jul|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|(?:Jan|Mar|May|Jul|A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 114;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0008(i, str, context);
};
const fiber0015 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...?:Jan|Mar|May|Jul|Aug...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 77;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...:Jan|Mar|May|Jul|Aug|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Jan|Mar|May|Jul|Aug|O...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 121;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0008(i, str, context);
};
const fiber0016 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...n|Mar|May|Jul|Aug|Oct...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 74;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Mar|May|Jul|Aug|Oct|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 117;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Mar|May|Jul|Aug|Oct|D...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 108;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0008(i, str, context);
};
const fiber0017 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...r|May|Jul|Aug|Oct|Dec...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 65;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|May|Jul|Aug|Oct|Dec)...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 117;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...May|Jul|Aug|Oct|Dec))...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 103;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0008(i, str, context);
};
const fiber0018 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...y|Jul|Aug|Oct|Dec)))\...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 79;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Jul|Aug|Oct|Dec)))\1...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 99;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Jul|Aug|Oct|Dec)))\1|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 116;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0008(i, str, context);
};
const fiber0019 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...l|Aug|Oct|Dec)))\1|(?...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 68;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Aug|Oct|Dec)))\1|(?:...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 101;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Aug|Oct|Dec)))\1|(?:(...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 99;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0008(i, str, context);
};
const fiber0020 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * disjunction
   * ...78]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0013(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0014(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  const length2 = fiber0015(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  const length3 = fiber0016(i, str, context);
  if (length3 !== -1) {
    return length3;
  }
  const length4 = fiber0017(i, str, context);
  if (length4 !== -1) {
    return length4;
  }
  const length5 = fiber0018(i, str, context);
  if (length5 !== -1) {
    return length5;
  }
  const length6 = fiber0019(i, str, context);
  if (length6 !== -1) {
    return length6;
  }
  return -1;
};
const fiber0021 = (start: number, str: string, context: Context): number => {
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
   * ...1(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0009(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0011(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  const length2 = fiber0020(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  return -1;
};
const fiber0022 = (start: number, str: string, context: Context): number => {
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
  return fiber0021(i, str, context);
};
const fiber0023 = (start: number, str: string, context: Context): number => {
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
  return fiber0021(i, str, context);
};
const fiber0024 = (start: number, str: string, context: Context): number => {
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
  return fiber0021(i, str, context);
};
const fiber0025 = (start: number, str: string, context: Context): number => {
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
  const length0 = fiber0022(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  const length1 = fiber0023(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  const length2 = fiber0024(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  return -1;
};
const fiber0026 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupBackReference
   * ...|Nov|Dec))\2))(?:(?:1[...
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
const fiber0027 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * .../|-|\.)(?:0?[1,3-9]|1[...
   *              ^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0028(i, str, context);

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
   * ...-|\.)(?:0?[1,3-9]|1[0-2]|(?...
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
  return fiber0026(i, str, context);
};
const fiber0028 = (start: number, str: string, context: Context): number => {
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
const fiber0029 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...0?[1,3-9]|1[0-2]|(?:J...
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
   * ...?[1,3-9]|1[0-2]|(?:Jan|Ma...
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
  return fiber0026(i, str, context);
};
const fiber0031 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...1[0-2]|(?:Jan|Mar|Apr...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 74;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...[0-2]|(?:Jan|Mar|Apr|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-2]|(?:Jan|Mar|Apr|M...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 110;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0026(i, str, context);
};
const fiber0032 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...2]|(?:Jan|Mar|Apr|May...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 77;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...]|(?:Jan|Mar|Apr|May|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|(?:Jan|Mar|Apr|May|J...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 114;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0026(i, str, context);
};
const fiber0033 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...?:Jan|Mar|Apr|May|Jun...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 65;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...:Jan|Mar|Apr|May|Jun|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 112;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Jan|Mar|Apr|May|Jun|J...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 114;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0026(i, str, context);
};
const fiber0034 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...n|Mar|Apr|May|Jun|Jul...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 77;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Mar|Apr|May|Jun|Jul|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Mar|Apr|May|Jun|Jul|A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 121;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0026(i, str, context);
};
const fiber0035 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...r|Apr|May|Jun|Jul|Aug...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 74;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Apr|May|Jun|Jul|Aug|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 117;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Apr|May|Jun|Jul|Aug|S...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 110;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0026(i, str, context);
};
const fiber0036 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...r|May|Jun|Jul|Aug|Sep...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 74;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|May|Jun|Jul|Aug|Sep|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 117;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...May|Jun|Jul|Aug|Sep|O...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 108;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0026(i, str, context);
};
const fiber0037 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...y|Jun|Jul|Aug|Sep|Oct...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 65;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Jun|Jul|Aug|Sep|Oct|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 117;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Jun|Jul|Aug|Sep|Oct|N...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 103;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0026(i, str, context);
};
const fiber0038 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...n|Jul|Aug|Sep|Oct|Nov...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 83;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Jul|Aug|Sep|Oct|Nov|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 101;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Jul|Aug|Sep|Oct|Nov|D...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 112;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0026(i, str, context);
};
const fiber0039 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...l|Aug|Sep|Oct|Nov|Dec...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

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
  let result1 = false;

  result1 = charCode1 === 99;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Aug|Sep|Oct|Nov|Dec))...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 116;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0026(i, str, context);
};
const fiber0040 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...g|Sep|Oct|Nov|Dec))\2...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 78;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Sep|Oct|Nov|Dec))\2)...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 111;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Sep|Oct|Nov|Dec))\2))...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 118;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0026(i, str, context);
};
const fiber0041 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...p|Oct|Nov|Dec))\2))(?...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 68;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Oct|Nov|Dec))\2))(?:...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 101;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Oct|Nov|Dec))\2))(?:(...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 99;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0026(i, str, context);
};
const fiber0042 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * disjunction
   * ...9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0031(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0032(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  const length2 = fiber0033(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  const length3 = fiber0034(i, str, context);
  if (length3 !== -1) {
    return length3;
  }
  const length4 = fiber0035(i, str, context);
  if (length4 !== -1) {
    return length4;
  }
  const length5 = fiber0036(i, str, context);
  if (length5 !== -1) {
    return length5;
  }
  const length6 = fiber0037(i, str, context);
  if (length6 !== -1) {
    return length6;
  }
  const length7 = fiber0038(i, str, context);
  if (length7 !== -1) {
    return length7;
  }
  const length8 = fiber0039(i, str, context);
  if (length8 !== -1) {
    return length8;
  }
  const length9 = fiber0040(i, str, context);
  if (length9 !== -1) {
    return length9;
  }
  const length10 = fiber0041(i, str, context);
  if (length10 !== -1) {
    return length10;
  }
  return -1;
};
const fiber0043 = (start: number, str: string, context: Context): number => {
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
   * ...)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0027(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0029(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  const length2 = fiber0042(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  return -1;
};
const fiber0044 = (start: number, str: string, context: Context): number => {
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
  return fiber0043(i, str, context);
};
const fiber0045 = (start: number, str: string, context: Context): number => {
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
  return fiber0043(i, str, context);
};
const fiber0046 = (start: number, str: string, context: Context): number => {
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
  return fiber0043(i, str, context);
};
const fiber0047 = (start: number, str: string, context: Context): number => {
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
  const length0 = fiber0044(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  const length1 = fiber0045(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  const length2 = fiber0046(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  return -1;
};
const fiber0048 = (start: number, str: string, context: Context): number => {
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
  return fiber0047(i, str, context);
};
const fiber0049 = (start: number, str: string, context: Context): number => {
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
  return fiber0047(i, str, context);
};
const fiber0050 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * disjunction
   * ...c)))\1|(?:(?:29|30)(\/|-|\.)(...
   *              ^^^^^^^^^
   */
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const length0 = fiber0048(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  const length1 = fiber0049(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  return -1;
};
const fiber0051 = (start: number, str: string, context: Context): number => {
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
   * /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const length0 = fiber0025(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  const length1 = fiber0050(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  return -1;
};
const fiber0052 = (start: number, str: string, context: Context): number => {
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
const fiber0054 = (start: number, str: string, context: Context): number => {
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
  return fiber0052(i, str, context);
};
const fiber0055 = (start: number, str: string, context: Context): number => {
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
  return fiber0052(i, str, context);
};
const fiber0056 = (start: number, str: string, context: Context): number => {
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
  return fiber0052(i, str, context);
};
const fiber0057 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * disjunction
   * ...|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0054(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0055(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  const length2 = fiber0056(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  return -1;
};
const fiber0059 = (start: number, str: string, context: Context): number => {
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
const fiber0060 = (start: number, str: string, context: Context): number => {
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
const fiber0061 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * disjunction
   * ...))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0059(i, str, context);
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
   * backtrackingFixedLengthQuantifier
   * ...))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0061(i, str, context);

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
    const directFollowUpResult0 = fiber0057(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 2;
  }

  return -1;
};
const fiber0063 = (start: number, str: string, context: Context): number => {
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
  return fiber0052(i, str, context);
};
const fiber0064 = (start: number, str: string, context: Context): number => {
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
  return fiber0063(i, str, context);
};
const fiber0065 = (start: number, str: string, context: Context): number => {
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
  return fiber0063(i, str, context);
};
const fiber0066 = (start: number, str: string, context: Context): number => {
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
  return fiber0063(i, str, context);
};
const fiber0067 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * disjunction
   * ...][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0064(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0065(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  const length2 = fiber0066(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  return -1;
};
const fiber0068 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupBackReference
   * ...2|(?:Feb))\3(?:(?:(?:1...
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
   * ...Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0062(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0067(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0069 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * .../|-|\.)(?:0?2|(?:Feb))...
   *              ^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0070(i, str, context);

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
   * ...-|\.)(?:0?2|(?:Feb))\...
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
  return fiber0068(i, str, context);
};
const fiber0070 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * .../|-|\.)(?:0?2|(?:Feb)...
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
const fiber0071 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...(?:0?2|(?:Feb))\3(?:(...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 70;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...?:0?2|(?:Feb))\3(?:(?...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 101;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...:0?2|(?:Feb))\3(?:(?:...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 98;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0068(i, str, context);
};
const fiber0072 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * ...})$|^(?:29(\/|-|\.)(?:0?2|(?:...
   *              ^^^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  /*
   * disjunction
   * ...9(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?...
   *              ^^^^^^^^^^^^^^^
   */
  const length0 = fiber0069(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0071(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0073 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...)$|^(?:29(\/|-|\.)(?:0...
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
  return fiber0072(i, str, context);
};
const fiber0074 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...^(?:29(\/|-|\.)(?:0?2...
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
  return fiber0072(i, str, context);
};
const fiber0075 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...?:29(\/|-|\.)(?:0?2|(?...
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
  return fiber0072(i, str, context);
};
const fiber0076 = (start: number, str: string, context: Context): number => {
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
   * ...2})$|^(?:29(\/|-|\.)(...
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
   * ...})$|^(?:29(\/|-|\.)(?:0?2|(?:...
   *              ^^^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * disjunction
   * ...})$|^(?:29(\/|-|\.)(?:0?2|(?:...
   *              ^^^^^^^^^
   */
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;
  const length0 = fiber0073(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  const length1 = fiber0074(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  const length2 = fiber0075(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  return -1;
};
const fiber0077 = (start: number, str: string, context: Context): number => {
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
const fiber0079 = (start: number, str: string, context: Context): number => {
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
const fiber0080 = (start: number, str: string, context: Context): number => {
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
const fiber0081 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * disjunction
   * ...ec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
   *              ^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0079(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0080(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0082 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupBackReference
   * ...Nov|Dec)))\4(?:(?:1[6-...
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
   * ...ec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
   *              ^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;

  while (true) {
    const wrappedResult = fiber0081(i, str, context);

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
    const directFollowUpResult1 = fiber0077(i, str, context);

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 2;
  }

  return -1;
};
const fiber0084 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * ...|\.)(?:(?:0?[1-9]|(?:J...
   *              ^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0085(i, str, context);

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
   * ....)(?:(?:0?[1-9]|(?:Jan|Fe...
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
  return fiber0082(i, str, context);
};
const fiber0085 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...|\.)(?:(?:0?[1-9]|(?:...
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
const fiber0087 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...?[1-9]|(?:Jan|Feb|Mar...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 74;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...[1-9]|(?:Jan|Feb|Mar|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...1-9]|(?:Jan|Feb|Mar|A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 110;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0082(i, str, context);
};
const fiber0088 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...9]|(?:Jan|Feb|Mar|Apr...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 70;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...]|(?:Jan|Feb|Mar|Apr|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 101;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|(?:Jan|Feb|Mar|Apr|M...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 98;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0082(i, str, context);
};
const fiber0089 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...?:Jan|Feb|Mar|Apr|May...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 77;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...:Jan|Feb|Mar|Apr|May|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Jan|Feb|Mar|Apr|May|J...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 114;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0082(i, str, context);
};
const fiber0090 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...n|Feb|Mar|Apr|May|Jun...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 65;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Feb|Mar|Apr|May|Jun|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 112;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Feb|Mar|Apr|May|Jun|J...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 114;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0082(i, str, context);
};
const fiber0091 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...b|Mar|Apr|May|Jun|Jul...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 77;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Mar|Apr|May|Jun|Jul|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Mar|Apr|May|Jun|Jul|A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 121;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0082(i, str, context);
};
const fiber0092 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...r|Apr|May|Jun|Jul|Aug...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 74;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Apr|May|Jun|Jul|Aug|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 117;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Apr|May|Jun|Jul|Aug|S...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 110;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0082(i, str, context);
};
const fiber0093 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...r|May|Jun|Jul|Aug|Sep...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 74;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|May|Jun|Jul|Aug|Sep)...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 117;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...May|Jun|Jul|Aug|Sep))...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 108;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0082(i, str, context);
};
const fiber0094 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...y|Jun|Jul|Aug|Sep))|(...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 65;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Jun|Jul|Aug|Sep))|(?...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 117;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Jun|Jul|Aug|Sep))|(?:...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 103;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0082(i, str, context);
};
const fiber0095 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...n|Jul|Aug|Sep))|(?:1[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 83;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|Jul|Aug|Sep))|(?:1[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 101;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Jul|Aug|Sep))|(?:1[0-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 112;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0082(i, str, context);
};
const fiber0096 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * disjunction
   * ...?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0087(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0088(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  const length2 = fiber0089(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  const length3 = fiber0090(i, str, context);
  if (length3 !== -1) {
    return length3;
  }
  const length4 = fiber0091(i, str, context);
  if (length4 !== -1) {
    return length4;
  }
  const length5 = fiber0092(i, str, context);
  if (length5 !== -1) {
    return length5;
  }
  const length6 = fiber0093(i, str, context);
  if (length6 !== -1) {
    return length6;
  }
  const length7 = fiber0094(i, str, context);
  if (length7 !== -1) {
    return length7;
  }
  const length8 = fiber0095(i, str, context);
  if (length8 !== -1) {
    return length8;
  }
  return -1;
};
const fiber0097 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * disjunction
   * .../|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0084(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0096(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0099 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...|Sep))|(?:1[0-2]|(?:O...
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
   * ...Sep))|(?:1[0-2]|(?:Oct|No...
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
  return fiber0082(i, str, context);
};
const fiber0101 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...1[0-2]|(?:Oct|Nov|Dec...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 79;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...[0-2]|(?:Oct|Nov|Dec)...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 99;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-2]|(?:Oct|Nov|Dec))...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 116;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0082(i, str, context);
};
const fiber0102 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...2]|(?:Oct|Nov|Dec)))\...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 78;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...]|(?:Oct|Nov|Dec)))\4...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 111;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|(?:Oct|Nov|Dec)))\4(...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 118;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0082(i, str, context);
};
const fiber0103 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * charOrSet
   * ...?:Oct|Nov|Dec)))\4(?:...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 68;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...:Oct|Nov|Dec)))\4(?:(...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 101;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...Oct|Nov|Dec)))\4(?:(?...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 99;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0082(i, str, context);
};
const fiber0104 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * disjunction
   * ...(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:...
   *              ^^^^^^^^^^^^^^^
   */
  const length0 = fiber0101(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0102(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  const length2 = fiber0103(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  return -1;
};
const fiber0105 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * disjunction
   * ...Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0099(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0104(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0106 = (start: number, str: string, context: Context): number => {
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
   * ...)(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0097(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0105(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0107 = (start: number, str: string, context: Context): number => {
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
  return fiber0106(i, str, context);
};
const fiber0108 = (start: number, str: string, context: Context): number => {
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
  return fiber0106(i, str, context);
};
const fiber0109 = (start: number, str: string, context: Context): number => {
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
  return fiber0106(i, str, context);
};
const fiber0110 = (start: number, str: string, context: Context): number => {
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
  const length0 = fiber0107(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  const length1 = fiber0108(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  const length2 = fiber0109(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  return -1;
};
const fiber0111 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * ...))))$|^(?:0?[1-9]|1\d|...
   *              ^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0112(i, str, context);

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
  return fiber0110(i, str, context);
};
const fiber0112 = (start: number, str: string, context: Context): number => {
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
const fiber0113 = (start: number, str: string, context: Context): number => {
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
  return fiber0110(i, str, context);
};
const fiber0114 = (start: number, str: string, context: Context): number => {
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
  return fiber0110(i, str, context);
};
const fiber0115 = (start: number, str: string, context: Context): number => {
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
  const length0 = fiber0111(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  const length1 = fiber0113(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  const length2 = fiber0114(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  return -1;
};
const fiber0116 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * disjunction
   * /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;
  const groupMarkerStartCopy3 = context.groupMarkerStart3;
  const groupMarkerEndCopy3 = context.groupMarkerEnd3;
  const length0 = fiber0051(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  const length1 = fiber0076(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  const length2 = fiber0115(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  return -1;
};
