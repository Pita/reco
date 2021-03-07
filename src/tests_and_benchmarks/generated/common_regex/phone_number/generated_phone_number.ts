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
  };

  // startAnchored
  const min = 0;
  const max = 0;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0036(i, str, context);
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

const fiber0036 = (i: number, str: string, context: Context): number => {
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
  context.quantifierCounter0 = -1;
  return greedyQuantifier0022(i, str, context);
};
const fiber0035 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\...
   *      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.quantifierCounter1 = -1;
  return greedyQuantifier0026(i, str, context);
};
const fiber0034 = (i: number, str: string, context: Context): number => {
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
const fiber0033 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...:\(?(?:00|\+)([1-4]\d\...
   *              ^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 43;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0032 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...:(?:\(?(?:00|\+)([1-4]...
   *              ^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
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

    i = iAfterMatch0;
  }
  return i;
};
const fiber0031 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...[1-4]\d\d|[1-9]\d?)\)?)?[...
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
      result0 = charCode0 >= 49;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d\d|[1-9]\d?)\)?)?[\-\...
   *              ^^^
   */
  let matches1 = 0;

  while (true) {
    const wrappedResult = fiber0030(i, str, context);

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
    const directFollowUpResult1 = fiber0029(i, str, context);

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 1;
  }

  return -1;
};
const fiber0030 = (i: number, str: string, context: Context): number => {
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
const fiber0029 = (i: number, str: string, context: Context): number => {
  return i;
};
const fiber0028 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:00|\+)([1-4]\d\d|[1-9]\d?)...
   *              ^^^^^^^^^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 2);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
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
    const charCode2 = str.charCodeAt(i + 0);

    let result2: boolean;

    if (charCode2 <= 52) {
      result2 = charCode2 >= 49;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0027 = (i: number, str: string, context: Context): number => {
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
const fiber0025 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * /^(?:(?:\(?(?:00|\+)(...
   *         ^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0034(i, str, context);

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
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450879) === 3145776) {
      const length0 = fiber0032(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2147450864) === 2818096) {
      const length1 = fiber0033(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  /*
   * groupStartMarker
   * ...?(?:00|\+)([1-4]\d\d|...
   *              ^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * nonBacktrackingDisjunction
   * ...?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\....
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  nonBacktrackingDisjunction3: {
    if ((quickCheckValue3 & 2146992112) === 3145776) {
      const length0 = fiber0028(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction3;
      }
    }
    if ((quickCheckValue3 & 2146435072) === 3145728) {
      const length1 = fiber0031(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction3;
      }
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...d|[1-9]\d?)\)?)?[\-\....
   *              ^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * nonBacktrackingQuantifier
   * ...|[1-9]\d?)\)?)?[\-\.\ \...
   *              ^^^
   */
  let matches5 = 0;
  while (true) {
    const wrappedResult = fiber0027(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches5++;

      if (matches5 === 1) {
        break;
      }
    }
  }
  return greedyQuantifier0026(i, str, context);
};
const fiber0024 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\...
   *              ^^^^^^^^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0023(i, str, context);

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
    i -= 1;
  }

  return -1;
};
const fiber0023 = (i: number, str: string, context: Context): number => {
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
const fiber0021 = (i: number, str: string, context: Context): number => {
  return greedyQuantifier0022(i, str, context);
};
const fiber0020 = (i: number, str: string, context: Context): number => {
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
const fiber0019 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...\/]?)?((?:\(?\d\d✱\)?[\...
   *              ^^^
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
   * charSequence
   * ...?)?((?:\(?\d\d✱\)?[\-\...
   *              ^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
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

    i = iAfterMatch1;
  }
  /*
   * backtrackingFixedLengthQuantifier
   * ...?((?:\(?\d\d✱\)?[\-\.\ ...
   *              ^^^
   */
  let matches2 = 0;

  while (true) {
    const wrappedResult = fiber0018(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches2++;
    }
  }

  // needs followUp & forkingFiber
  while (matches2 >= 0) {
    const directFollowUpResult2 = fiber0016(i, str, context);

    if (directFollowUpResult2 !== -1) {
      return directFollowUpResult2;
    }

    matches2--;
    i -= 1;
  }

  return -1;
};
const fiber0018 = (i: number, str: string, context: Context): number => {
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
const fiber0017 = (i: number, str: string, context: Context): number => {
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
const fiber0016 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...?:\(?\d\d✱\)?[\-\.\ \\\...
   *              ^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0017(i, str, context);

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
    const wrappedResult = fiber0015(i, str, context);

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
    const directFollowUpResult1 = fiber0014(i, str, context);

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 1;
  }

  return -1;
};
const fiber0015 = (i: number, str: string, context: Context): number => {
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
const fiber0014 = (i: number, str: string, context: Context): number => {
  return i;
};
const fiber0013 = (i: number, str: string, context: Context): number => {
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
const fiber0012 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...?|ension)|x)[\-\.\ \\...
   *              ^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 120;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0011 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...\\/]?(?:#|ext(?:\.?|ens...
   *              ^^^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 2);

    let result0: boolean;

    result0 = charCode0 === 116;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * disjunction
   * ...]?(?:#|ext(?:\.?|ension)|x)[\-\.\ ...
   *              ^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  if ((quickCheckValue1 & 2139095040) === 0) {
    const length0 = fiber0009(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
  }
  if ((quickCheckValue1 & 2147450879) === 6619246) {
    const length1 = fiber0010(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
  }
  return -1;
};
const fiber0010 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...ext(?:\.?|ension)|x)[\-\.\...
   *              ^^^^^^
   */
  const iAfterMatch0 = i + 6;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 5);

    let result0: boolean;

    result0 = charCode0 === 110;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 4);

    let result1: boolean;

    result1 = charCode1 === 111;

    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 3);

    let result2: boolean;

    result2 = charCode2 === 105;

    if (!result2) {
      return -1;
    }
    const charCode3 = str.charCodeAt(i + 2);

    let result3: boolean;

    result3 = charCode3 === 115;

    if (!result3) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...?:#|ext(?:\.?|ension)|x...
   *              ^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0008(i, str, context);

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
    const directFollowUpResult0 = fiber0007(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0008 = (i: number, str: string, context: Context): number => {
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
const fiber0007 = (i: number, str: string, context: Context): number => {
  return i;
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ... \\\/]?(?:#|ext(?:\.?...
   *              ^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 35;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0004 = (i: number, str: string, context: Context): number => {
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
const fiber0003 = (i: number, str: string, context: Context): number => {
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
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...\/]?)✱)(?:[\-\.\ \\\/]?(?:#|ext(?...
   *              ^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0013(i, str, context);

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
   * ...\.\ \\\/]?(?:#|ext(?:\.?|ension)|x)[\-\.\ \\\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450752) === 2293760) {
      const length0 = fiber0005(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2147450879) === 6619256) {
      const length1 = fiber0011(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2147450752) === 7864320) {
      const length2 = fiber0012(i, str, context);
      if (length2 !== -1) {
        i = length2;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...ension)|x)[\-\.\ \\\/]?(\d\d✱))?$/
   *              ^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0004(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 1) {
        break;
      }
    }
  }
  /*
   * groupStartMarker
   * ...\.\ \\\/]?(\d\d✱))?$/
   *              ^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * charSequence
   * ....\ \\\/]?(\d\d✱))?$/
   *              ^^
   */
  const iAfterMatch4 = i + 1;
  if (iAfterMatch4 > str.length) {
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

    i = iAfterMatch4;
  }
  /*
   * nonBacktrackingQuantifier
   * ... \\\/]?(\d\d✱))?$/
   *              ^^^
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
   * ...\/]?(\d\d✱))?$/
   *              ^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  return i;
};
const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...\ \\\/]?)?((?:\(?\d\d...
   *              ^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * nonBacktrackingQuantifier
   * ... \\\/]?)?((?:\(?\d\d✱\)?[\-\.\ \\\/]?)✱)(?:[\-\.\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0019(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupEndMarker
   * ...\ \\\/]?)✱)(?:[\-\.\ ...
   *              ^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * nonBacktrackingQuantifier
   * ... \\\/]?)✱)(?:[\-\.\ \\\/]?(?:#|ext(?:\.?|ension)|x)[\-\.\ \\\/]?(\d\d✱))?$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches3 = 0;
  while (true) {
    const wrappedResult = fiber0002(i, str, context);

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
   * endAnchor
   * ...?(\d\d✱))?$/
   *              ^
   */
  if (i !== str.length) {
    return -1;
  }
  return i;
};

/*
 * /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d\...
 *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0022 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  if (context.quantifierCounter0 !== 1) {
    const groupMarkerStartCopy0 = context.groupMarkerStart0;
    const groupMarkerEndCopy0 = context.groupMarkerEnd0;
    const tryDeeperResult = fiber0035(start, str, context);
    if (tryDeeperResult !== -1) {
      // we actually were able to go deeper, nice!
      return tryDeeperResult;
    }

    // recursion failed, reset groups
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
  }

  return fiber0001(start, str, context);
};
/*
 * /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\...
 *      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0026 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (context.quantifierCounter1 !== 1) {
    const groupMarkerStartCopy0 = context.groupMarkerStart0;
    const groupMarkerEndCopy0 = context.groupMarkerEnd0;
    const tryDeeperResult = fiber0025(start, str, context);
    if (tryDeeperResult !== -1) {
      // we actually were able to go deeper, nice!
      return tryDeeperResult;
    }

    // recursion failed, reset groups
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
  }

  return fiber0024(start, str, context);
};
