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
}

// Regex optimized to: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d\d*\)?[\-\.\ \\\/]?)*)(?:[\-\.\ \\\/]?(?:#|ext(?:\.?|ension)|x)[\-\.\ \\\/]?(\d\d*))?$/

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
  };

  // startAnchored
  const min = 0;
  const max = 0;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0042(i, str, context);
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
   * ...?(\d\d✱))?$/
   *              ^
   */
  if (i !== str.length) {
    return -1;
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...ension)|x)[\-\.\ \\\/]?(\d\d✱))?$/
   *              ^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0005(i, str, context);

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
   * groupStartMarker
   * ...\.\ \\\/]?(\d\d✱))?$/
   *              ^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * charOrSet
   * ....\ \\\/]?(\d\d✱))?$/
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  } else {
    result2 = false;
  }
  if (!result2) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ... \\\/]?(\d\d✱))?$/
   *              ^^^
   */
  while (true) {
    const wrappedResult = fiber0004(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupEndMarker
   * ...\.\ \\\/]?(\d\d✱))?$/
   *              ^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  return greedyQuantifier0003(i, str, context);
};
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ... \\\/]?(\d\d✱))?$/
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
  return i;
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...ension)|x)[\-\.\ \\\/]?(\d\d✱))?$/
   *              ^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

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
  return i;
};
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ... \\\/]?(?:#|ext(?:\.?...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 35;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0002(i, str, context);
};
const fiber0008 = (i: number, str: string, context: Context): number => {
  return fiber0002(i, str, context);
};
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...?:#|ext(?:\.?|ension)|...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 46;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0010 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...?:#|ext(?:\.?|ension)|x...
   *              ^^^
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

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0008(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0011 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...ext(?:\.?|ension)|x)[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 101;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...xt(?:\.?|ension)|x)[\...
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
  /*
   * charOrSet
   * ...t(?:\.?|ension)|x)[\-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 115;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...(?:\.?|ension)|x)[\-\...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 105;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...?:\.?|ension)|x)[\-\....
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4: boolean;

  result4 = charCode4 === 111;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...:\.?|ension)|x)[\-\.\...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode5 = str.charCodeAt(i);
  let result5: boolean;

  result5 = charCode5 === 110;

  if (!result5) {
    return -1;
  }
  i++;
  return fiber0002(i, str, context);
};
const fiber0012 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\\/]?(?:#|ext(?:\.?|e...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 101;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...\/]?(?:#|ext(?:\.?|en...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 120;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * .../]?(?:#|ext(?:\.?|ens...
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
  /*
   * disjunction
   * ...]?(?:#|ext(?:\.?|ension)|x)[\-\.\ ...
   *              ^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;
  const length0 = fiber0010(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  const length1 = fiber0011(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  return -1;
};
const fiber0013 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...?|ension)|x)[\-\.\ \\...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 120;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0002(i, str, context);
};
const fiber0014 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...\/]?)✱)(?:[\-\.\ \\\/]?(?:#|ext(?...
   *              ^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0015(i, str, context);

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
   * disjunction
   * ...\.\ \\\/]?(?:#|ext(?:\.?|ension)|x)[\-\.\ \\\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;
  const length0 = fiber0006(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  const length1 = fiber0012(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  const length2 = fiber0013(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  return -1;
};
const fiber0015 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\/]?)✱)(?:[\-\.\ \\\/]?(?:#|ext(...
   *              ^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

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
  return i;
};
const fiber0016 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...\ \\\/]?)?((?:\(?\d\d✱\)?[\-\.\ \\\/]?)✱)(?:[\-\.\ ...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * quantifierStarter
   * ... \\\/]?)✱)(?:[\-\.\ \\\/]?(?:#|ext(?:\.?|ension)|x)[\-\.\ \\\/]?(\d\d✱))?$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0003 = context.quantifierCounter0;
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = greedyQuantifier0003(i, str, context);
  context.quantifierCounter0 = matchCountCopygreedyQuantifier0003;

  return cursorAfterQuantifier;
};
const fiber0017 = (i: number, str: string, context: Context): number => {
  return greedyQuantifier0018(i, str, context);
};
const fiber0019 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(?\d\d✱\)?[\-\.\ \\\/]?)✱)(?:[\-...
   *              ^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

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
  return i;
};
const fiber0020 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...?:\(?\d\d✱\)?[\-\.\ \\\...
   *              ^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0021(i, str, context);

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
   * backtrackingFixedLengthQuantifier
   * ...(?\d\d✱\)?[\-\.\ \\\/]?)✱)(?:[\-\...
   *              ^^^^^^^^^^^^^
   */
  let matches1 = 0;

  while (true) {
    const wrappedResult = fiber0019(i, str, context);

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
    const directFollowUpResult1 = fiber0017(i, str, context);

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 1;
  }

  return -1;
};
const fiber0021 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...?:\(?\d\d✱\)?[\-\.\ \\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 41;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0022 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...?((?:\(?\d\d✱\)?[\-\.\...
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
  return i;
};
const fiber0023 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...\/]?)?((?:\(?\d\d✱\)?[\...
   *              ^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0024(i, str, context);

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
   * ...?)?((?:\(?\d\d✱\)?[\-\...
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
  /*
   * backtrackingFixedLengthQuantifier
   * ...?((?:\(?\d\d✱\)?[\-\.\ ...
   *              ^^^
   */
  let matches2 = 0;

  while (true) {
    const wrappedResult = fiber0022(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches2++;
    }
  }

  // needs followUp & forkingFiber
  while (matches2 >= 0) {
    const directFollowUpResult2 = fiber0020(i, str, context);

    if (directFollowUpResult2 !== -1) {
      return directFollowUpResult2;
    }

    matches2--;
    i -= 1;
  }

  return -1;
};
const fiber0024 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\/]?)?((?:\(?\d\d✱\)?[...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 40;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0025 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...\ \\\/]?)?((?:\(?\d\d✱\)?[\-\.\ \\\/]?)✱)(?:[\-\.\ ...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * quantifierStarter
   * ... \\\/]?)?((?:\(?\d\d✱\)?[\-\.\ \\\/]?)✱)(?:[\-\.\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const cursorAfterQuantifier = greedyQuantifier0018(i, str, context);

  return cursorAfterQuantifier;
};
const fiber0026 = (i: number, str: string, context: Context): number => {
  return greedyQuantifier0027(i, str, context);
};
const fiber0028 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?...
   *              ^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

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
  return i;
};
const fiber0029 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\...
   *              ^^^^^^^^^^^^^
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

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0026(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0030 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\....
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * nonBacktrackingQuantifier
   * ...|[1-9]\d?)\)?)?[\-\.\ \...
   *              ^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0032(i, str, context);

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
  return greedyQuantifier0031(i, str, context);
};
const fiber0032 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|[1-9]\d?)\)?)?[\-\.\ ...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 41;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0033 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(?:00|\+)([1-4]\d\d|[1-9]...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 52) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
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
  /*
   * charOrSet
   * ...+)([1-4]\d\d|[1-9]\d?)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  } else {
    result2 = false;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return fiber0030(i, str, context);
};
const fiber0034 = (i: number, str: string, context: Context): number => {
  return fiber0030(i, str, context);
};
const fiber0035 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d\d|[1-9]\d?)\)?)?[\-...
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
  return i;
};
const fiber0036 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...[1-4]\d\d|[1-9]\d?)\)?)?[...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d\d|[1-9]\d?)\)?)?[\-\...
   *              ^^^
   */
  let matches1 = 0;

  while (true) {
    const wrappedResult = fiber0035(i, str, context);

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
    const directFollowUpResult1 = fiber0034(i, str, context);

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 1;
  }

  return -1;
};
const fiber0037 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * /^(?:(?:\(?(?:00|\+)(...
   *         ^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0040(i, str, context);

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
   * nonBacktrackingDisjunction
   * /^(?:(?:\(?(?:00|\+)([1-4]\d\d...
   *            ^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0038(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0039(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
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
   * disjunction
   * ...?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\....
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const length0 = fiber0033(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  const length1 = fiber0036(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  return -1;
};
const fiber0038 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...:(?:\(?(?:00|\+)([1-4...
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
   * ...(?:\(?(?:00|\+)([1-4]...
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
const fiber0039 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...:\(?(?:00|\+)([1-4]\d\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 43;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0040 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /^(?:(?:\(?(?:00|\+)...
   *         ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 40;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0041 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\...
   *      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0031 = context.quantifierCounter2;
  context.quantifierCounter2 = -1;
  const cursorAfterQuantifier = greedyQuantifier0031(i, str, context);
  context.quantifierCounter2 = matchCountCopygreedyQuantifier0031;

  return cursorAfterQuantifier;
};
const fiber0042 = (i: number, str: string, context: Context): number => {
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
   * /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d\...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0027 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0027(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0027;

  return cursorAfterQuantifier;
};

/*
 * ... \\\/]?)✱)(?:[\-\.\ \\\/]?(?:#|ext(?:\.?|ension)|x)[\-\.\ \\\/]?(\d\d✱))?$/
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const tryDeeperResult = fiber0014(start, str, context);
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
 * ... \\\/]?)?((?:\(?\d\d✱\)?[\-\.\ \\\/]?)✱)(?:[\-\.\...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0018 = (
  start: number,
  str: string,
  context: Context
): number => {
  const tryDeeperResult = fiber0023(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;

  const followUpResult = fiber0016(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
  }
  return followUpResult;
};
/*
 * /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d\...
 *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0027 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (context.quantifierCounter1 === 1) {
    return fiber0025(start, str, context);
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const tryDeeperResult = fiber0041(start, str, context);
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

  const followUpResult = fiber0025(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\...
 *      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0031 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter2++;

  if (context.quantifierCounter2 === 1) {
    return fiber0029(start, str, context);
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const tryDeeperResult = fiber0037(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;

  const followUpResult = fiber0029(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter2--;
  }
  return followUpResult;
};
