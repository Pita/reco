// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/'
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
  quantifierCounter0: number;
  quantifierCounter1: number;
  quantifierCounter2: number;
  quantifierCounter3: number;
  quantifierCounter4: number;
  quantifierCounter5: number;
  quantifierCounter6: number;
  quantifierCounter7: number;
  quantifierCounter8: number;
  quantifierCounter9: number;
  quantifierCounter10: number;
  quantifierCounter11: number;
  quantifierCounter12: number;
  quantifierCounter13: number;
  quantifierCounter14: number;
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
    quantifierCounter0: -1,
    quantifierCounter1: -1,
    quantifierCounter2: -1,
    quantifierCounter3: -1,
    quantifierCounter4: -1,
    quantifierCounter5: -1,
    quantifierCounter6: -1,
    quantifierCounter7: -1,
    quantifierCounter8: -1,
    quantifierCounter9: -1,
    quantifierCounter10: -1,
    quantifierCounter11: -1,
    quantifierCounter12: -1,
    quantifierCounter13: -1,
    quantifierCounter14: -1,
  };

  // startAnchored
  const min = 0;
  const max = 0;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0058(i, str, context);
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
   * endAnchor
   * .../]?(\d+))?$/
   *              ^
   */
  if (i !== str.length) {
    return -1;
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...\.\ \\\/]?(\d+))?$/
   *              ^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  return greedyQuantifier0003(i, str, context);
};
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....\ \\\/]?(\d+))?$/
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
  return greedyQuantifier0005(i, str, context);
};
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...\.\ \\\/]?(\d+))?$/
   *              ^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * quantifierStarter
   * ....\ \\\/]?(\d+))?$/
   *              ^^^
   */
  let matchCountCopygreedyQuantifier0005 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0005(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0005;

  return cursorAfterQuantifier;
};
const fiber0007 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...tension|x)[\-\.\ \\\/]?(\d+))?$/
   *              ^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 47) {
    if (charCode0 === 32) {
      result0 = true;
    } else {
      result0 = charCode0 >= 45;
    }
  } else {
    result0 = charCode0 === 92;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0008(i, str, context);
};
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...tension|x)[\-\.\ \\\/]?(\d+))?$/
   *              ^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0008 = context.quantifierCounter2;
  context.quantifierCounter2 = -1;
  const cursorAfterQuantifier = greedyQuantifier0008(i, str, context);
  context.quantifierCounter2 = matchCountCopygreedyQuantifier0008;

  return cursorAfterQuantifier;
};
const fiber0010 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ... \\\/]?(?:#|ext\.?|ex...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 35;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0009(i, str, context);
};
const fiber0011 = (i: number, str: string, context: Context): number => {
  return fiber0009(i, str, context);
};
const fiber0012 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]?(?:#|ext\.?|extensio...
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
  return greedyQuantifier0013(i, str, context);
};
const fiber0014 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\\/]?(?:#|ext\.?|exte...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 101;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...\/]?(?:#|ext\.?|exten...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 120;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * .../]?(?:#|ext\.?|extens...
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
  /*
   * quantifierStarter
   * ...]?(?:#|ext\.?|extension...
   *              ^^^
   */
  let matchCountCopygreedyQuantifier0013 = context.quantifierCounter3;
  context.quantifierCounter3 = -1;
  const cursorAfterQuantifier = greedyQuantifier0013(i, str, context);
  context.quantifierCounter3 = matchCountCopygreedyQuantifier0013;

  return cursorAfterQuantifier;
};
const fiber0015 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...:#|ext\.?|extension|x...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 101;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...#|ext\.?|extension|x)...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 120;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|ext\.?|extension|x)[...
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
  /*
   * charOrSet
   * ...ext\.?|extension|x)[\...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  result3 = charCode3 === 101;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...xt\.?|extension|x)[\-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4 = false;

  result4 = charCode4 === 110;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...t\.?|extension|x)[\-\...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode5 = str.charCodeAt(i);
  let result5 = false;

  result5 = charCode5 === 115;

  if (!result5) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...\.?|extension|x)[\-\....
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode6 = str.charCodeAt(i);
  let result6 = false;

  result6 = charCode6 === 105;

  if (!result6) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ....?|extension|x)[\-\.\...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7 = false;

  result7 = charCode7 === 111;

  if (!result7) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...?|extension|x)[\-\.\ ...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode8 = str.charCodeAt(i);
  let result8 = false;

  result8 = charCode8 === 110;

  if (!result8) {
    return -1;
  }
  i++;
  return fiber0009(i, str, context);
};
const fiber0016 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...extension|x)[\-\.\ \\...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 120;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0009(i, str, context);
};
const fiber0017 = (i: number, str: string, context: Context): number => {
  /*
   * disjunction
   * ...\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;
  const length0 = fiber0010(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  const length1 = fiber0014(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  const length2 = fiber0015(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  const length3 = fiber0016(i, str, context);
  if (length3 !== -1) {
    return length3;
  }
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  return -1;
};
const fiber0018 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...?){0,})(?:[\-\.\ \\\/]?(?:#|ext\...
   *              ^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 47) {
    if (charCode0 === 32) {
      result0 = true;
    } else {
      result0 = charCode0 >= 45;
    }
  } else {
    result0 = charCode0 === 92;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0019(i, str, context);
};
const fiber0020 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...?){0,})(?:[\-\.\ \\\/]?(?:#|ext\....
   *              ^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0019 = context.quantifierCounter4;
  context.quantifierCounter4 = -1;
  const cursorAfterQuantifier = greedyQuantifier0019(i, str, context);
  context.quantifierCounter4 = matchCountCopygreedyQuantifier0019;

  return cursorAfterQuantifier;
};
const fiber0021 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ ...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * quantifierStarter
   * ...\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0003 = context.quantifierCounter0;
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = greedyQuantifier0003(i, str, context);
  context.quantifierCounter0 = matchCountCopygreedyQuantifier0003;

  return cursorAfterQuantifier;
};
const fiber0022 = (i: number, str: string, context: Context): number => {
  return greedyQuantifier0023(i, str, context);
};
const fiber0024 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:...
   *              ^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 47) {
    if (charCode0 === 32) {
      result0 = true;
    } else {
      result0 = charCode0 >= 45;
    }
  } else {
    result0 = charCode0 === 92;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0025(i, str, context);
};
const fiber0026 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[...
   *              ^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0025 = context.quantifierCounter5;
  context.quantifierCounter5 = -1;
  const cursorAfterQuantifier = greedyQuantifier0025(i, str, context);
  context.quantifierCounter5 = matchCountCopygreedyQuantifier0025;

  return cursorAfterQuantifier;
};
const fiber0027 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...:\(?\d{1,}\)?[\-\.\ \\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 41;

  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0028(i, str, context);
};
const fiber0029 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...:\(?\d{1,}\)?[\-\.\ \\\...
   *              ^^^
   */
  let matchCountCopygreedyQuantifier0028 = context.quantifierCounter6;
  context.quantifierCounter6 = -1;
  const cursorAfterQuantifier = greedyQuantifier0028(i, str, context);
  context.quantifierCounter6 = matchCountCopygreedyQuantifier0028;

  return cursorAfterQuantifier;
};
const fiber0030 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...?)?((?:\(?\d{1,}\)?[\-...
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
  return greedyQuantifier0031(i, str, context);
};
const fiber0032 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...?)?((?:\(?\d{1,}\)?[\-\.\ ...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0031 = context.quantifierCounter7;
  context.quantifierCounter7 = -1;
  const cursorAfterQuantifier = greedyQuantifier0031(i, str, context);
  context.quantifierCounter7 = matchCountCopygreedyQuantifier0031;

  return cursorAfterQuantifier;
};
const fiber0033 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\/]?)?((?:\(?\d{1,}\)?...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 40;

  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0034(i, str, context);
};
const fiber0035 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...\/]?)?((?:\(?\d{1,}\)?[...
   *              ^^^
   */
  let matchCountCopygreedyQuantifier0034 = context.quantifierCounter8;
  context.quantifierCounter8 = -1;
  const cursorAfterQuantifier = greedyQuantifier0034(i, str, context);
  context.quantifierCounter8 = matchCountCopygreedyQuantifier0034;

  return cursorAfterQuantifier;
};
const fiber0036 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ ...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * quantifierStarter
   * ... \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const cursorAfterQuantifier = greedyQuantifier0023(i, str, context);

  return cursorAfterQuantifier;
};
const fiber0037 = (i: number, str: string, context: Context): number => {
  return greedyQuantifier0038(i, str, context);
};
const fiber0039 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?...
   *              ^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 47) {
    if (charCode0 === 32) {
      result0 = true;
    } else {
      result0 = charCode0 >= 45;
    }
  } else {
    result0 = charCode0 === 92;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0040(i, str, context);
};
const fiber0041 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\...
   *              ^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0040 = context.quantifierCounter10;
  context.quantifierCounter10 = -1;
  const cursorAfterQuantifier = greedyQuantifier0040(i, str, context);
  context.quantifierCounter10 = matchCountCopygreedyQuantifier0040;

  return cursorAfterQuantifier;
};
const fiber0042 = (i: number, str: string, context: Context): number => {
  return greedyQuantifier0043(i, str, context);
};
const fiber0044 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|[1-9]\d?)\)?)?[\-\.\ ...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 41;

  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0045(i, str, context);
};
const fiber0046 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * /^(?:(?:\(?(?:00|\+)([1-4]\d\d...
   *            ^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0052(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0053(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  /*
   * groupStartMarker
   * ...?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\....
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * nonBacktrackingDisjunction
   * ...?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\....
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction2: {
    const length0 = fiber0047(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction2;
    }
    const length1 = fiber0051(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction2;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\....
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * quantifierStarter
   * ...|[1-9]\d?)\)?)?[\-\.\ \...
   *              ^^^
   */
  let matchCountCopygreedyQuantifier0045 = context.quantifierCounter12;
  context.quantifierCounter12 = -1;
  const cursorAfterQuantifier = greedyQuantifier0045(i, str, context);
  context.quantifierCounter12 = matchCountCopygreedyQuantifier0045;

  return cursorAfterQuantifier;
};
const fiber0047 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(?:00|\+)([1-4]\d\d|[1-9]...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 52) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|\+)([1-4]\d\d|[1-9]\d...
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
   * charOrSet
   * ...+)([1-4]\d\d|[1-9]\d?)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0048 = (i: number, str: string, context: Context): number => {
  return i;
};
const fiber0049 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d\d|[1-9]\d?)\)?)?[\-...
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
  return greedyQuantifier0050(i, str, context);
};
const fiber0051 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...[1-4]\d\d|[1-9]\d?)\)?)?[...
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
  /*
   * quantifierStarter
   * ...\d\d|[1-9]\d?)\)?)?[\-\...
   *              ^^^
   */
  let matchCountCopygreedyQuantifier0050 = context.quantifierCounter13;
  context.quantifierCounter13 = -1;
  const cursorAfterQuantifier = greedyQuantifier0050(i, str, context);
  context.quantifierCounter13 = matchCountCopygreedyQuantifier0050;

  return cursorAfterQuantifier;
};
const fiber0052 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...:(?:\(?(?:00|\+)([1-4...
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
   * ...(?:\(?(?:00|\+)([1-4]...
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
const fiber0053 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...:\(?(?:00|\+)([1-4]\d\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 43;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0054 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /^(?:(?:\(?(?:00|\+)...
   *         ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 40;

  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0055(i, str, context);
};
const fiber0056 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * /^(?:(?:\(?(?:00|\+)(...
   *         ^^^
   */
  let matchCountCopygreedyQuantifier0055 = context.quantifierCounter14;
  context.quantifierCounter14 = -1;
  const cursorAfterQuantifier = greedyQuantifier0055(i, str, context);
  context.quantifierCounter14 = matchCountCopygreedyQuantifier0055;

  return cursorAfterQuantifier;
};
const fiber0057 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\...
   *      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0043 = context.quantifierCounter11;
  context.quantifierCounter11 = -1;
  const cursorAfterQuantifier = greedyQuantifier0043(i, str, context);
  context.quantifierCounter11 = matchCountCopygreedyQuantifier0043;

  return cursorAfterQuantifier;
};
const fiber0058 = (i: number, str: string, context: Context): number => {
  /*
   * startAnchor
   * /^(?:(?:\(?(...
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * quantifierStarter
   * /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0038 = context.quantifierCounter9;
  context.quantifierCounter9 = -1;
  const cursorAfterQuantifier = greedyQuantifier0038(i, str, context);
  context.quantifierCounter9 = matchCountCopygreedyQuantifier0038;

  return cursorAfterQuantifier;
};

/*
 * ...\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0003 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  if (context.quantifierCounter0 === 1) {
    return fiber0001(start, str, context);
  }

  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;
  const tryDeeperResult = fiber0020(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;

  const followUpResult = fiber0001(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter0--;
  }
  return followUpResult;
};
/*
 * ....\ \\\/]?(\d+))?$/
 *              ^^^
 */
const greedyQuantifier0005 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  const tryDeeperResult = fiber0004(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter1 < 1) {
    context.quantifierCounter1--;
    return -1;
  }

  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;

  const followUpResult = fiber0002(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * ...tension|x)[\-\.\ \\\/]?(\d+))?$/
 *              ^^^^^^^^^^^^^
 */
const greedyQuantifier0008 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter2++;

  if (context.quantifierCounter2 === 1) {
    return fiber0006(start, str, context);
  }

  const tryDeeperResult = fiber0007(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;

  const followUpResult = fiber0006(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
    context.quantifierCounter2--;
  }
  return followUpResult;
};
/*
 * ...]?(?:#|ext\.?|extension...
 *              ^^^
 */
const greedyQuantifier0013 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter3++;

  if (context.quantifierCounter3 === 1) {
    return fiber0011(start, str, context);
  }

  const tryDeeperResult = fiber0012(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;

  const followUpResult = fiber0011(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
    context.quantifierCounter3--;
  }
  return followUpResult;
};
/*
 * ...?){0,})(?:[\-\.\ \\\/]?(?:#|ext\....
 *              ^^^^^^^^^^^^^
 */
const greedyQuantifier0019 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter4++;

  if (context.quantifierCounter4 === 1) {
    return fiber0017(start, str, context);
  }

  const tryDeeperResult = fiber0018(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;

  const followUpResult = fiber0017(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
    context.quantifierCounter4--;
  }
  return followUpResult;
};
/*
 * ... \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0023 = (
  start: number,
  str: string,
  context: Context
): number => {
  const tryDeeperResult = fiber0035(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;

  const followUpResult = fiber0021(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
  }
  return followUpResult;
};
/*
 * ...?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[...
 *              ^^^^^^^^^^^^^
 */
const greedyQuantifier0025 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter5++;

  if (context.quantifierCounter5 === 1) {
    return fiber0022(start, str, context);
  }

  const tryDeeperResult = fiber0024(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0022(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter5--;
  }
  return followUpResult;
};
/*
 * ...:\(?\d{1,}\)?[\-\.\ \\\...
 *              ^^^
 */
const greedyQuantifier0028 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter6++;

  if (context.quantifierCounter6 === 1) {
    return fiber0026(start, str, context);
  }

  const tryDeeperResult = fiber0027(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0026(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter6--;
  }
  return followUpResult;
};
/*
 * ...?)?((?:\(?\d{1,}\)?[\-\.\ ...
 *              ^^^^^^
 */
const greedyQuantifier0031 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter7++;

  const tryDeeperResult = fiber0030(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter7 < 1) {
    context.quantifierCounter7--;
    return -1;
  }

  const followUpResult = fiber0029(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter7--;
  }
  return followUpResult;
};
/*
 * ...\/]?)?((?:\(?\d{1,}\)?[...
 *              ^^^
 */
const greedyQuantifier0034 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter8++;

  if (context.quantifierCounter8 === 1) {
    return fiber0032(start, str, context);
  }

  const tryDeeperResult = fiber0033(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0032(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter8--;
  }
  return followUpResult;
};
/*
 * /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{...
 *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0038 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter9++;

  if (context.quantifierCounter9 === 1) {
    return fiber0036(start, str, context);
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const tryDeeperResult = fiber0057(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;

  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;

  const followUpResult = fiber0036(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
    context.quantifierCounter9--;
  }
  return followUpResult;
};
/*
 * ...]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\...
 *              ^^^^^^^^^^^^^
 */
const greedyQuantifier0040 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter10++;

  if (context.quantifierCounter10 === 1) {
    return fiber0037(start, str, context);
  }

  const tryDeeperResult = fiber0039(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0037(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter10--;
  }
  return followUpResult;
};
/*
 * /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\...
 *      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0043 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter11++;

  if (context.quantifierCounter11 === 1) {
    return fiber0041(start, str, context);
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const tryDeeperResult = fiber0056(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;

  const followUpResult = fiber0041(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter11--;
  }
  return followUpResult;
};
/*
 * ...|[1-9]\d?)\)?)?[\-\.\ \...
 *              ^^^
 */
const greedyQuantifier0045 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter12++;

  if (context.quantifierCounter12 === 1) {
    return fiber0042(start, str, context);
  }

  const tryDeeperResult = fiber0044(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0042(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter12--;
  }
  return followUpResult;
};
/*
 * ...\d\d|[1-9]\d?)\)?)?[\-\...
 *              ^^^
 */
const greedyQuantifier0050 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter13++;

  if (context.quantifierCounter13 === 1) {
    return fiber0048(start, str, context);
  }

  const tryDeeperResult = fiber0049(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0048(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter13--;
  }
  return followUpResult;
};
/*
 * /^(?:(?:\(?(?:00|\+)(...
 *         ^^^
 */
const greedyQuantifier0055 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter14++;

  if (context.quantifierCounter14 === 1) {
    return fiber0046(start, str, context);
  }

  const tryDeeperResult = fiber0054(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0046(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.quantifierCounter14--;
  }
  return followUpResult;
};
