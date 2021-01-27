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
  quantifierCounter0: number;
  quantifierCounter1: number;
  quantifierCounter2: number;
  quantifierCounter3: number;
  quantifierCounter4: number;
  quantifierCounter5: number;
  quantifierCounter6: number;
  quantifierCounter7: number;
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
    quantifierCounter0: -1,
    quantifierCounter1: -1,
    quantifierCounter2: -1,
    quantifierCounter3: -1,
    quantifierCounter4: -1,
    quantifierCounter5: -1,
    quantifierCounter6: -1,
    quantifierCounter7: -1,
  };

  // endAnchored
  const min = Math.max(str.length - 11, 0);
  const max = str.length - 6;

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
   * /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const groupMarkerStartCopy0 = context.groupMarkerStart0;
    const groupMarkerEndCopy0 = context.groupMarkerEnd0;
    const groupMarkerStartCopy1 = context.groupMarkerStart1;
    const groupMarkerEndCopy1 = context.groupMarkerEnd1;
    const groupMarkerStartCopy2 = context.groupMarkerStart2;
    const groupMarkerEndCopy2 = context.groupMarkerEnd2;
    const groupMarkerStartCopy3 = context.groupMarkerStart3;
    const groupMarkerEndCopy3 = context.groupMarkerEnd3;
    const length0 = fiber0050(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    const length1 = fiber0065(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
    const length2 = fiber0111(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction0;
    }
    context.groupMarkerStart3 = groupMarkerStartCopy3;
    context.groupMarkerEnd3 = groupMarkerEndCopy3;
    return -1;
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
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
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...c))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0005(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0006(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  return greedyQuantifier0004(i, str, context);
};
const fiber0005 = (i: number, str: string, context: Context): number => {
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
const fiber0006 = (i: number, str: string, context: Context): number => {
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
const fiber0007 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...c))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0004 = context.quantifierCounter0;
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = greedyQuantifier0004(i, str, context);
  context.quantifierCounter0 = matchCountCopygreedyQuantifier0004;

  return cursorAfterQuantifier;
};
const fiber0008 = (i: number, str: string, context: Context): number => {
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
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-|\.)(?:0?[13578]|1[02]|(?:...
   *              ^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 51) {
    result0 = charCode0 === 49 || charCode0 === 51;
  } else {
    if (charCode0 === 53) {
      result0 = true;
    } else {
      if (charCode0 <= 56) {
        result0 = charCode0 >= 55;
      }
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return fiber0008(i, str, context);
};
const fiber0010 = (i: number, str: string, context: Context): number => {
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
  return greedyQuantifier0011(i, str, context);
};
const fiber0012 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * .../|-|\.)(?:0?[13578]|1[...
   *              ^^
   */
  let matchCountCopygreedyQuantifier0011 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0011(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0011;

  return cursorAfterQuantifier;
};
const fiber0013 = (i: number, str: string, context: Context): number => {
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
const fiber0014 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...78]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0015(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0016(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    const length2 = fiber0017(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction0;
    }
    const length3 = fiber0018(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction0;
    }
    const length4 = fiber0019(i, str, context);
    if (length4 !== -1) {
      i = length4;
      break nonBacktrackingDisjunction0;
    }
    const length5 = fiber0020(i, str, context);
    if (length5 !== -1) {
      i = length5;
      break nonBacktrackingDisjunction0;
    }
    const length6 = fiber0021(i, str, context);
    if (length6 !== -1) {
      i = length6;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  return fiber0008(i, str, context);
};
const fiber0015 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0016 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0017 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0018 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0019 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0020 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0021 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0022 = (i: number, str: string, context: Context): number => {
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
   * nonBacktrackingDisjunction
   * /^(?:(?:31(\/|-|\.)(?:0?[1357...
   *           ^^^^^^^^^
   */
  nonBacktrackingDisjunction3: {
    const length0 = fiber0023(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction3;
    }
    const length1 = fiber0024(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction3;
    }
    const length2 = fiber0025(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction3;
    }
    return -1;
  }
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
  const length0 = fiber0012(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0013(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  const length2 = fiber0014(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  return -1;
};
const fiber0023 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0024 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0025 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0026 = (i: number, str: string, context: Context): number => {
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
const fiber0027 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-|\.)(?:0?[1,3-9]|1[0-2]|(?...
   *              ^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 49) {
    result0 = charCode0 === 44 || charCode0 === 49;
  } else {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 51;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return fiber0026(i, str, context);
};
const fiber0028 = (i: number, str: string, context: Context): number => {
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
  return greedyQuantifier0029(i, str, context);
};
const fiber0030 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * .../|-|\.)(?:0?[1,3-9]|1[...
   *              ^^
   */
  let matchCountCopygreedyQuantifier0029 = context.quantifierCounter2;
  context.quantifierCounter2 = -1;
  const cursorAfterQuantifier = greedyQuantifier0029(i, str, context);
  context.quantifierCounter2 = matchCountCopygreedyQuantifier0029;

  return cursorAfterQuantifier;
};
const fiber0031 = (i: number, str: string, context: Context): number => {
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
const fiber0032 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
    const length2 = fiber0035(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction0;
    }
    const length3 = fiber0036(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction0;
    }
    const length4 = fiber0037(i, str, context);
    if (length4 !== -1) {
      i = length4;
      break nonBacktrackingDisjunction0;
    }
    const length5 = fiber0038(i, str, context);
    if (length5 !== -1) {
      i = length5;
      break nonBacktrackingDisjunction0;
    }
    const length6 = fiber0039(i, str, context);
    if (length6 !== -1) {
      i = length6;
      break nonBacktrackingDisjunction0;
    }
    const length7 = fiber0040(i, str, context);
    if (length7 !== -1) {
      i = length7;
      break nonBacktrackingDisjunction0;
    }
    const length8 = fiber0041(i, str, context);
    if (length8 !== -1) {
      i = length8;
      break nonBacktrackingDisjunction0;
    }
    const length9 = fiber0042(i, str, context);
    if (length9 !== -1) {
      i = length9;
      break nonBacktrackingDisjunction0;
    }
    const length10 = fiber0043(i, str, context);
    if (length10 !== -1) {
      i = length10;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  return fiber0026(i, str, context);
};
const fiber0033 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0034 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0035 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0036 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0037 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0038 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0039 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0040 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0041 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0042 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0043 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0044 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...c)))\1|(?:(?:29|30)(\/|-|\.)(...
   *              ^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0048(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0049(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  /*
   * groupStartMarker
   * ...:(?:29|30)(\/|-|\.)(?:0?[1,3-...
   *              ^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * nonBacktrackingDisjunction
   * ...:(?:29|30)(\/|-|\.)(?:0?[1,3-...
   *              ^^^^^^^^^
   */
  nonBacktrackingDisjunction2: {
    const length0 = fiber0045(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction2;
    }
    const length1 = fiber0046(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction2;
    }
    const length2 = fiber0047(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction2;
    }
    return -1;
  }
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
  const length0 = fiber0030(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0031(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  const length2 = fiber0032(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  return -1;
};
const fiber0045 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0046 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0047 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0048 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0049 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0050 = (i: number, str: string, context: Context): number => {
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
  const length0 = fiber0022(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  const length1 = fiber0044(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  return -1;
};
const fiber0051 = (i: number, str: string, context: Context): number => {
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
const fiber0052 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0053(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0054(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    const length2 = fiber0055(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  return fiber0051(i, str, context);
};
const fiber0053 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0054 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0055 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0056 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0058(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0059(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  return greedyQuantifier0057(i, str, context);
};
const fiber0058 = (i: number, str: string, context: Context): number => {
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
const fiber0059 = (i: number, str: string, context: Context): number => {
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
const fiber0060 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0057 = context.quantifierCounter3;
  context.quantifierCounter3 = -1;
  const cursorAfterQuantifier = greedyQuantifier0057(i, str, context);
  context.quantifierCounter3 = matchCountCopygreedyQuantifier0057;

  return cursorAfterQuantifier;
};
const fiber0061 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0062(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0063(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    const length2 = fiber0064(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  /*
   * charOrSet
   * ...3579][26])00))))$|^(?...
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
  /*
   * charOrSet
   * ...579][26])00))))$|^(?:...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 48;

  if (!result2) {
    return -1;
  }
  i++;
  return fiber0051(i, str, context);
};
const fiber0062 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0063 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0064 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0065 = (i: number, str: string, context: Context): number => {
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
   * nonBacktrackingDisjunction
   * ...})$|^(?:29(\/|-|\.)(?:0?2|(?:...
   *              ^^^^^^^^^
   */
  nonBacktrackingDisjunction4: {
    const length0 = fiber0071(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction4;
    }
    const length1 = fiber0072(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction4;
    }
    const length2 = fiber0073(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction4;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...})$|^(?:29(\/|-|\.)(?:0?2|(?:...
   *              ^^^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  /*
   * nonBacktrackingDisjunction
   * ...9(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?...
   *              ^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction6: {
    const length0 = fiber0069(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction6;
    }
    const length1 = fiber0070(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction6;
    }
    return -1;
  }
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
  const length0 = fiber0060(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0061(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0066 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-|\.)(?:0?2|(?:Feb))\...
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
  return i;
};
const fiber0067 = (i: number, str: string, context: Context): number => {
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
  return greedyQuantifier0068(i, str, context);
};
const fiber0069 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * .../|-|\.)(?:0?2|(?:Feb))...
   *              ^^
   */
  let matchCountCopygreedyQuantifier0068 = context.quantifierCounter4;
  context.quantifierCounter4 = -1;
  const cursorAfterQuantifier = greedyQuantifier0068(i, str, context);
  context.quantifierCounter4 = matchCountCopygreedyQuantifier0068;

  return cursorAfterQuantifier;
};
const fiber0070 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0071 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0072 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0073 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0074 = (i: number, str: string, context: Context): number => {
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
const fiber0075 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...ec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0077(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0078(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  return greedyQuantifier0076(i, str, context);
};
const fiber0077 = (i: number, str: string, context: Context): number => {
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
const fiber0078 = (i: number, str: string, context: Context): number => {
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
const fiber0079 = (i: number, str: string, context: Context): number => {
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
   * quantifierStarter
   * ...ec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
   *              ^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0076 = context.quantifierCounter5;
  context.quantifierCounter5 = -1;
  const cursorAfterQuantifier = greedyQuantifier0076(i, str, context);
  context.quantifierCounter5 = matchCountCopygreedyQuantifier0076;

  return cursorAfterQuantifier;
};
const fiber0080 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * .../|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0084(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0085(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  return fiber0079(i, str, context);
};
const fiber0081 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....)(?:(?:0?[1-9]|(?:Jan|Fe...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0082 = (i: number, str: string, context: Context): number => {
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
  return greedyQuantifier0083(i, str, context);
};
const fiber0084 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...|\.)(?:(?:0?[1-9]|(?:J...
   *              ^^
   */
  let matchCountCopygreedyQuantifier0083 = context.quantifierCounter6;
  context.quantifierCounter6 = -1;
  const cursorAfterQuantifier = greedyQuantifier0083(i, str, context);
  context.quantifierCounter6 = matchCountCopygreedyQuantifier0083;

  return cursorAfterQuantifier;
};
const fiber0085 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0086(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0087(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    const length2 = fiber0088(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction0;
    }
    const length3 = fiber0089(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction0;
    }
    const length4 = fiber0090(i, str, context);
    if (length4 !== -1) {
      i = length4;
      break nonBacktrackingDisjunction0;
    }
    const length5 = fiber0091(i, str, context);
    if (length5 !== -1) {
      i = length5;
      break nonBacktrackingDisjunction0;
    }
    const length6 = fiber0092(i, str, context);
    if (length6 !== -1) {
      i = length6;
      break nonBacktrackingDisjunction0;
    }
    const length7 = fiber0093(i, str, context);
    if (length7 !== -1) {
      i = length7;
      break nonBacktrackingDisjunction0;
    }
    const length8 = fiber0094(i, str, context);
    if (length8 !== -1) {
      i = length8;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  return i;
};
const fiber0086 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0087 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0088 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0089 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0090 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0091 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0092 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0093 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0094 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0095 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0096(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0097(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  return fiber0079(i, str, context);
};
const fiber0096 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0097 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:...
   *              ^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0098(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0099(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    const length2 = fiber0100(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  return i;
};
const fiber0098 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0099 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0100 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0101 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...\d|2[0-8])(\/|-|\.)(?:(?:0?[1...
   *              ^^^^^^^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * nonBacktrackingDisjunction
   * ...\d|2[0-8])(\/|-|\.)(?:(?:0?[1...
   *              ^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0102(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0103(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    const length2 = fiber0104(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
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
  const length0 = fiber0080(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0095(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0102 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0103 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0104 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0105 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...))$|^(?:0?[1-9]|1\d|2[0-8...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return fiber0101(i, str, context);
};
const fiber0106 = (i: number, str: string, context: Context): number => {
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
  return greedyQuantifier0107(i, str, context);
};
const fiber0108 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...))))$|^(?:0?[1-9]|1\d|...
   *              ^^
   */
  let matchCountCopygreedyQuantifier0107 = context.quantifierCounter7;
  context.quantifierCounter7 = -1;
  const cursorAfterQuantifier = greedyQuantifier0107(i, str, context);
  context.quantifierCounter7 = matchCountCopygreedyQuantifier0107;

  return cursorAfterQuantifier;
};
const fiber0109 = (i: number, str: string, context: Context): number => {
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
  return fiber0101(i, str, context);
};
const fiber0110 = (i: number, str: string, context: Context): number => {
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
  return fiber0101(i, str, context);
};
const fiber0111 = (i: number, str: string, context: Context): number => {
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
  const length0 = fiber0108(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  const length1 = fiber0109(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  const length2 = fiber0110(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  return -1;
};

/*
 * ...c))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(...
 *              ^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0004 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  if (context.quantifierCounter0 === 1) {
    return fiber0002(start, str, context);
  }

  const tryDeeperResult = fiber0003(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0002(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter0--;
  }
  return followUpResult;
};
/*
 * .../|-|\.)(?:0?[13578]|1[...
 *              ^^
 */
const greedyQuantifier0011 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (context.quantifierCounter1 === 1) {
    return fiber0009(start, str, context);
  }

  const tryDeeperResult = fiber0010(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0009(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * .../|-|\.)(?:0?[1,3-9]|1[...
 *              ^^
 */
const greedyQuantifier0029 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter2++;

  if (context.quantifierCounter2 === 1) {
    return fiber0027(start, str, context);
  }

  const tryDeeperResult = fiber0028(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0027(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter2--;
  }
  return followUpResult;
};
/*
 * ...))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[...
 *              ^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0057 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter3++;

  if (context.quantifierCounter3 === 1) {
    return fiber0052(start, str, context);
  }

  const tryDeeperResult = fiber0056(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0052(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter3--;
  }
  return followUpResult;
};
/*
 * .../|-|\.)(?:0?2|(?:Feb))...
 *              ^^
 */
const greedyQuantifier0068 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter4++;

  if (context.quantifierCounter4 === 1) {
    return fiber0066(start, str, context);
  }

  const tryDeeperResult = fiber0067(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0066(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter4--;
  }
  return followUpResult;
};
/*
 * ...ec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
 *              ^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0076 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter5++;

  if (context.quantifierCounter5 === 1) {
    return fiber0074(start, str, context);
  }

  const tryDeeperResult = fiber0075(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0074(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter5--;
  }
  return followUpResult;
};
/*
 * ...|\.)(?:(?:0?[1-9]|(?:J...
 *              ^^
 */
const greedyQuantifier0083 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter6++;

  if (context.quantifierCounter6 === 1) {
    return fiber0081(start, str, context);
  }

  const tryDeeperResult = fiber0082(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0081(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter6--;
  }
  return followUpResult;
};
/*
 * ...))))$|^(?:0?[1-9]|1\d|...
 *              ^^
 */
const greedyQuantifier0107 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter7++;

  if (context.quantifierCounter7 === 1) {
    return fiber0105(start, str, context);
  }

  const tryDeeperResult = fiber0106(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy3 = context.groupMarkerStart3;
  const groupMarkerEndCopy3 = context.groupMarkerEnd3;

  const followUpResult = fiber0105(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart3 = groupMarkerStartCopy3;
    context.groupMarkerEnd3 = groupMarkerEndCopy3;
    context.quantifierCounter7--;
  }
  return followUpResult;
};
