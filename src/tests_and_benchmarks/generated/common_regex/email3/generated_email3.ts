// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
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
  groupMarkerStart4: number;
  groupMarkerStartTemp4: number;
  groupMarkerEnd4: number;
  groupMarkerStart5: number;
  groupMarkerStartTemp5: number;
  groupMarkerEnd5: number;
  groupMarkerStart6: number;
  groupMarkerStartTemp6: number;
  groupMarkerEnd6: number;
  groupMarkerStart7: number;
  groupMarkerStartTemp7: number;
  groupMarkerEnd7: number;
  quantifierCounter0: number;
}

// Regex optimized to: /^(([^<>()\[\]\\.,;:\s@"][^<>()\[\]\\.,;:\s@"]*(\.[^<>()\[\]\\.,;:\s@"][^<>()\[\]\\.,;:\s@"]*)*)|("..*"))@((\[[0-9][0-9]{0,2}\.[0-9][0-9]{0,2}\.[0-9][0-9]{0,2}\.[0-9][0-9]{0,2}])|(([a-zA-Z\-0-9][a-zA-Z\-0-9]*\.)+[a-zA-Z][a-zA-Z][a-zA-Z]*))$/

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
    groupMarkerStart4: -1,
    groupMarkerStartTemp4: -1,
    groupMarkerEnd4: -1,
    groupMarkerStart5: -1,
    groupMarkerStartTemp5: -1,
    groupMarkerEnd5: -1,
    groupMarkerStart6: -1,
    groupMarkerStartTemp6: -1,
    groupMarkerEnd6: -1,
    groupMarkerStart7: -1,
    groupMarkerStartTemp7: -1,
    groupMarkerEnd7: -1,
    quantifierCounter0: -1,
  };

  // startAnchored
  const min = 0;
  const max = 0;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0021(i, str, context);
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
          context.groupMarkerEnd4 !== -1
            ? str.substring(context.groupMarkerStart4, context.groupMarkerEnd4)
            : undefined,
          context.groupMarkerEnd5 !== -1
            ? str.substring(context.groupMarkerStart5, context.groupMarkerEnd5)
            : undefined,
          context.groupMarkerEnd6 !== -1
            ? str.substring(context.groupMarkerStart6, context.groupMarkerEnd6)
            : undefined,
          context.groupMarkerEnd7 !== -1
            ? str.substring(context.groupMarkerStart7, context.groupMarkerEnd7)
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
   * ...|("..✱"))@((\[[0-9][0-9]{0,2}\.[0-9][0-9]{0,2}\.[0-9][0-9]{0,2}\.[0-9][0-9]{0,2}])|(([a-zA-Z\-0-9][a-zA-Z\-0-9]✱\.)+[a-zA-Z][a-zA-Z][a-zA-Z]✱))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart4 = context.groupMarkerStartTemp4;
  context.groupMarkerEnd4 = i;
  /*
   * endAnchor
   * ...a-zA-Z]✱))$/
   *              ^
   */
  if (i !== str.length) {
    return -1;
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...("..✱"))@((\[[0-9][0-9]{0,2}\.[0-9][0-9]{0,2}\.[0-9][0-9]{0,2}\.[0-9][0-9]{0,2}])|(([a-zA-Z...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp5 = i;
  /*
   * charSequence
   * ..."..✱"))@((\[[0-9][0-9]...
   *              ^^
   */
  const iAfterMatch1 = i + 2;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 91;

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

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...@((\[[0-9][0-9]{0,2}\.[0-9][0-...
   *              ^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0006(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 2) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...[0-9]{0,2}\.[0-9][0-9]...
   *              ^^
   */
  const iAfterMatch3 = i + 2;
  if (iAfterMatch3 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 46;

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

    i = iAfterMatch3;
  }
  /*
   * nonBacktrackingQuantifier
   * ...,2}\.[0-9][0-9]{0,2}\.[0-9][0-...
   *              ^^^^^^^^^^
   */
  let matches4 = 0;
  while (true) {
    const wrappedResult = fiber0005(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches4++;

      if (matches4 === 2) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...[0-9]{0,2}\.[0-9][0-9]...
   *              ^^
   */
  const iAfterMatch5 = i + 2;
  if (iAfterMatch5 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 46;

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

    i = iAfterMatch5;
  }
  /*
   * nonBacktrackingQuantifier
   * ...,2}\.[0-9][0-9]{0,2}\.[0-9][0-...
   *              ^^^^^^^^^^
   */
  let matches6 = 0;
  while (true) {
    const wrappedResult = fiber0004(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches6++;

      if (matches6 === 2) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...[0-9]{0,2}\.[0-9][0-9]...
   *              ^^
   */
  const iAfterMatch7 = i + 2;
  if (iAfterMatch7 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 46;

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

    i = iAfterMatch7;
  }
  /*
   * nonBacktrackingQuantifier
   * ...,2}\.[0-9][0-9]{0,2}])|(([a-zA...
   *              ^^^^^^^^^^
   */
  let matches8 = 0;
  while (true) {
    const wrappedResult = fiber0003(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches8++;

      if (matches8 === 2) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...[0-9]{0,2}])|(([a-zA-...
   *              ^
   */
  const iAfterMatch9 = i + 1;
  if (iAfterMatch9 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 93;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch9;
  }
  /*
   * groupEndMarker
   * ...("..✱"))@((\[[0-9][0-9]{0,2}\.[0-9][0-9]{0,2}\.[0-9][0-9]{0,2}\.[0-9][0-9]{0,2}])|(([a-zA-Z...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart5 = context.groupMarkerStartTemp5;
  context.groupMarkerEnd5 = i;
  return fiber0001(i, str, context);
};
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...,2}\.[0-9][0-9]{0,2}])|((...
   *              ^^^^^
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
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...,2}\.[0-9][0-9]{0,2}\.[0-...
   *              ^^^^^
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
   * ...,2}\.[0-9][0-9]{0,2}\.[0-...
   *              ^^^^^
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
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...@((\[[0-9][0-9]{0,2}\.[0-...
   *              ^^^^^
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
const fiber0007 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...-0-9]✱\.)+[a-zA-Z][a-zA-Z][a...
   *              ^^^^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 90) {
      result0 = charCode0 >= 65;
    } else {
      if (charCode0 <= 122) {
        result0 = charCode0 >= 97;
      } else {
        result0 = false;
      }
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    if (charCode1 <= 90) {
      result1 = charCode1 >= 65;
    } else {
      if (charCode1 <= 122) {
        result1 = charCode1 >= 97;
      } else {
        result1 = false;
      }
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingQuantifier
   * ...Z][a-zA-Z][a-zA-Z]✱))$/
   *              ^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0008(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupEndMarker
   * ...9]{0,2}])|(([a-zA-Z\-0-9][a-zA-Z\-0-9]✱\.)+[a-zA-Z][a-zA-Z][a-zA-Z]✱))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart6 = context.groupMarkerStartTemp6;
  context.groupMarkerEnd6 = i;
  return fiber0001(i, str, context);
};
const fiber0008 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Z][a-zA-Z][a-zA-Z]✱))$/
   *              ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 90) {
    result0 = charCode0 >= 65;
  } else {
    if (charCode0 <= 122) {
      result0 = charCode0 >= 97;
    } else {
      result0 = false;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...]{0,2}])|(([a-zA-Z\-0-9][a-zA-Z\-0-9]✱\.)+[a-zA-Z][...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp7 = i;
  /*
   * charSequence
   * ...{0,2}])|(([a-zA-Z\-0-9][a-zA-Z\-0...
   *              ^^^^^^^^^^^^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 57) {
      if (charCode0 === 45) {
        result0 = true;
      } else {
        result0 = charCode0 >= 48;
      }
    } else {
      if (charCode0 <= 90) {
        result0 = charCode0 >= 65;
      } else {
        if (charCode0 <= 122) {
          result0 = charCode0 >= 97;
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
  /*
   * nonBacktrackingQuantifier
   * ...zA-Z\-0-9][a-zA-Z\-0-9]✱\.)+[a-zA-...
   *              ^^^^^^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0011(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * charSequence
   * ...A-Z\-0-9]✱\.)+[a-zA-Z]...
   *              ^^
   */
  const iAfterMatch3 = i + 1;
  if (iAfterMatch3 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 46;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch3;
  }
  /*
   * groupEndMarker
   * ...]{0,2}])|(([a-zA-Z\-0-9][a-zA-Z\-0-9]✱\.)+[a-zA-Z][...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart7 = context.groupMarkerStartTemp7;
  context.groupMarkerEnd7 = i;
  return greedyQuantifier0010(i, str, context);
};
const fiber0011 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...zA-Z\-0-9][a-zA-Z\-0-9]✱\.)+[a-zA...
   *              ^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    if (charCode0 === 45) {
      result0 = true;
    } else {
      result0 = charCode0 >= 48;
    }
  } else {
    if (charCode0 <= 90) {
      result0 = charCode0 >= 65;
    } else {
      if (charCode0 <= 122) {
        result0 = charCode0 >= 97;
      } else {
        result0 = false;
      }
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0012 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...9]{0,2}])|(([a-zA-Z\-0-9][a-zA-Z\-0-9]✱\.)+[a-zA-Z][a-zA-Z][a-zA-Z]✱))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp6 = i;
  /*
   * quantifierStarter
   * ...]{0,2}])|(([a-zA-Z\-0-9][a-zA-Z\-0-9]✱\.)+[a-zA-Z][a...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = greedyQuantifier0010(i, str, context);
  context.quantifierCounter0 = -1;

  return cursorAfterQuantifier;
};
const fiber0013 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * /^(([^<>()\[\]\\.,;:\s@"][^<>()\[\]\\.,;:\s@"]✱(\.[^<>()\[\]\\.,;:\s@"][^<>()\[\]\\.,;:\s@"]✱)✱)|("..✱"))@((\[[0-9]...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * charSequence
   * ...)|("..✱"))@((\[[0-9][...
   *              ^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 64;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * groupStartMarker
   * ...|("..✱"))@((\[[0-9][0-9]{0,2}\.[0-9][0-9]{0,2}\.[0-9][0-9]{0,2}\.[0-9][0-9]{0,2}])|(([a-zA-Z\-0-9][a-zA-Z\-0-9]✱\.)+[a-zA-Z][a-zA-Z][a-zA-Z]✱))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp4 = i;
  /*
   * disjunction
   * ...|("..✱"))@((\[[0-9][0-9]{0,2}\.[0-9][0-9]{0,2}\.[0-9][0-9]{0,2}\.[0-9][0-9]{0,2}])|(([a-zA-Z\-0-9][a-zA-Z\-0-9]✱\.)+[a-zA-Z][a-zA-Z][a-zA-Z]✱))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  if ((quickCheckValue3 & 2147450864) === 5963824) {
    const length0 = fiber0002(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart4 = -1;
    context.groupMarkerEnd4 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
  }
  if ((quickCheckValue3 & 2139127680) === 0) {
    const length1 = fiber0012(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart4 = -1;
    context.groupMarkerEnd4 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
  }
  return -1;
};
const fiber0014 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /^(([^<>()\[\]\\.,;:\s@"][^<>()\[\]\\.,;:\s@"]✱(\.[^<>()\[\]\\.,;:\s@"][^<>()\[\]\\.,;:\s@"]✱)✱)|("..✱"))@...
   *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * charSequence
   * /^(([^<>()\[\]\\.,;:\s@"][^<>()\[\]...
   *     ^^^^^^^^^^^^^^^^^^^^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 64) {
      if (charCode0 <= 44) {
        if (charCode0 <= 34) {
          if (charCode0 <= 32) {
            if (charCode0 <= 13) {
              result0 = charCode0 >= 9;
            } else {
              result0 = charCode0 === 32;
            }
          } else {
            result0 = charCode0 === 34;
          }
        } else {
          if (charCode0 <= 41) {
            result0 = charCode0 >= 40;
          } else {
            result0 = charCode0 === 44;
          }
        }
      } else {
        if (charCode0 <= 60) {
          if (charCode0 === 46) {
            result0 = true;
          } else {
            result0 = charCode0 >= 58;
          }
        } else {
          result0 = charCode0 === 62 || charCode0 === 64;
        }
      }
    } else {
      if (charCode0 <= 8233) {
        if (charCode0 <= 5760) {
          if (charCode0 <= 160) {
            if (charCode0 <= 93) {
              result0 = charCode0 >= 91;
            } else {
              result0 = charCode0 === 160;
            }
          } else {
            result0 = charCode0 === 5760;
          }
        } else {
          if (charCode0 <= 8202) {
            result0 = charCode0 >= 8192;
          } else {
            result0 = charCode0 >= 8232;
          }
        }
      } else {
        if (charCode0 <= 8287) {
          result0 = charCode0 === 8239 || charCode0 === 8287;
        } else {
          result0 = charCode0 === 12288 || charCode0 === 65279;
        }
      }
    }
    if (result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...\.,;:\s@"][^<>()\[\]\\.,;:\s@"]✱(\.[^<>()\...
   *              ^^^^^^^^^^^^^^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0017(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * nonBacktrackingQuantifier
   * ....,;:\s@"]✱(\.[^<>()\[\]\\.,;:\s@"][^<>()\[\]\\.,;:\s@"]✱)✱)|("..✱"))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0015(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupEndMarker
   * /^(([^<>()\[\]\\.,;:\s@"][^<>()\[\]\\.,;:\s@"]✱(\.[^<>()\[\]\\.,;:\s@"][^<>()\[\]\\.,;:\s@"]✱)✱)|("..✱"))@...
   *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  return fiber0013(i, str, context);
};
const fiber0015 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ....,;:\s@"]✱(\.[^<>()\[\]\\.,;:\s@"][^<>()\[\]\\.,;:\s@"]✱)✱)|("..✱")...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * charSequence
   * ...,;:\s@"]✱(\.[^<>()\[\]...
   *              ^^
   */
  const iAfterMatch1 = i + 2;
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
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 64) {
      if (charCode1 <= 44) {
        if (charCode1 <= 34) {
          if (charCode1 <= 32) {
            if (charCode1 <= 13) {
              result1 = charCode1 >= 9;
            } else {
              result1 = charCode1 === 32;
            }
          } else {
            result1 = charCode1 === 34;
          }
        } else {
          if (charCode1 <= 41) {
            result1 = charCode1 >= 40;
          } else {
            result1 = charCode1 === 44;
          }
        }
      } else {
        if (charCode1 <= 60) {
          if (charCode1 === 46) {
            result1 = true;
          } else {
            result1 = charCode1 >= 58;
          }
        } else {
          result1 = charCode1 === 62 || charCode1 === 64;
        }
      }
    } else {
      if (charCode1 <= 8233) {
        if (charCode1 <= 5760) {
          if (charCode1 <= 160) {
            if (charCode1 <= 93) {
              result1 = charCode1 >= 91;
            } else {
              result1 = charCode1 === 160;
            }
          } else {
            result1 = charCode1 === 5760;
          }
        } else {
          if (charCode1 <= 8202) {
            result1 = charCode1 >= 8192;
          } else {
            result1 = charCode1 >= 8232;
          }
        }
      } else {
        if (charCode1 <= 8287) {
          result1 = charCode1 === 8239 || charCode1 === 8287;
        } else {
          result1 = charCode1 === 12288 || charCode1 === 65279;
        }
      }
    }
    if (result1) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...\.,;:\s@"][^<>()\[\]\\.,;:\s@"]✱)✱)|("..✱"...
   *              ^^^^^^^^^^^^^^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0016(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupEndMarker
   * ....,;:\s@"]✱(\.[^<>()\[\]\\.,;:\s@"][^<>()\[\]\\.,;:\s@"]✱)✱)|("..✱")...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  return i;
};
const fiber0016 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\.,;:\s@"][^<>()\[\]\\.,;:\s@"]✱)✱)|("..✱...
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 64) {
    if (charCode0 <= 44) {
      if (charCode0 <= 34) {
        if (charCode0 <= 32) {
          if (charCode0 <= 13) {
            result0 = charCode0 >= 9;
          } else {
            result0 = charCode0 === 32;
          }
        } else {
          result0 = charCode0 === 34;
        }
      } else {
        if (charCode0 <= 41) {
          result0 = charCode0 >= 40;
        } else {
          result0 = charCode0 === 44;
        }
      }
    } else {
      if (charCode0 <= 60) {
        if (charCode0 === 46) {
          result0 = true;
        } else {
          result0 = charCode0 >= 58;
        }
      } else {
        result0 = charCode0 === 62 || charCode0 === 64;
      }
    }
  } else {
    if (charCode0 <= 8233) {
      if (charCode0 <= 5760) {
        if (charCode0 <= 160) {
          if (charCode0 <= 93) {
            result0 = charCode0 >= 91;
          } else {
            result0 = charCode0 === 160;
          }
        } else {
          result0 = charCode0 === 5760;
        }
      } else {
        if (charCode0 <= 8202) {
          result0 = charCode0 >= 8192;
        } else {
          result0 = charCode0 >= 8232;
        }
      }
    } else {
      if (charCode0 <= 8287) {
        result0 = charCode0 === 8239 || charCode0 === 8287;
      } else {
        result0 = charCode0 === 12288 || charCode0 === 65279;
      }
    }
  }
  if (result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0017 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\.,;:\s@"][^<>()\[\]\\.,;:\s@"]✱(\.[^<>()...
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 64) {
    if (charCode0 <= 44) {
      if (charCode0 <= 34) {
        if (charCode0 <= 32) {
          if (charCode0 <= 13) {
            result0 = charCode0 >= 9;
          } else {
            result0 = charCode0 === 32;
          }
        } else {
          result0 = charCode0 === 34;
        }
      } else {
        if (charCode0 <= 41) {
          result0 = charCode0 >= 40;
        } else {
          result0 = charCode0 === 44;
        }
      }
    } else {
      if (charCode0 <= 60) {
        if (charCode0 === 46) {
          result0 = true;
        } else {
          result0 = charCode0 >= 58;
        }
      } else {
        result0 = charCode0 === 62 || charCode0 === 64;
      }
    }
  } else {
    if (charCode0 <= 8233) {
      if (charCode0 <= 5760) {
        if (charCode0 <= 160) {
          if (charCode0 <= 93) {
            result0 = charCode0 >= 91;
          } else {
            result0 = charCode0 === 160;
          }
        } else {
          result0 = charCode0 === 5760;
        }
      } else {
        if (charCode0 <= 8202) {
          result0 = charCode0 >= 8192;
        } else {
          result0 = charCode0 >= 8232;
        }
      }
    } else {
      if (charCode0 <= 8287) {
        result0 = charCode0 === 8239 || charCode0 === 8287;
      } else {
        result0 = charCode0 === 12288 || charCode0 === 65279;
      }
    }
  }
  if (result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0018 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...✱)✱)|("..✱"))@((\[[0-...
   *              ^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 34;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * groupEndMarker
   * ...\s@"]✱)✱)|("..✱"))@((\[[0-9...
   *              ^^^^^^^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  return fiber0013(i, str, context);
};
const fiber0019 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ..."]✱)✱)|("..✱"))@((\[[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 13) {
    result0 = charCode0 === 10 || charCode0 === 13;
  } else {
    if (charCode0 <= 8233) {
      result0 = charCode0 >= 8232;
    } else {
      result0 = false;
    }
  }
  if (result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0020 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...\s@"]✱)✱)|("..✱"))@((\[[0-9...
   *              ^^^^^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * charSequence
   * ...s@"]✱)✱)|("..✱"))@((\...
   *              ^
   */
  const iAfterMatch1 = i + 2;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 34;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 13) {
      result1 = charCode1 === 10 || charCode1 === 13;
    } else {
      if (charCode1 <= 8233) {
        result1 = charCode1 >= 8232;
      } else {
        result1 = false;
      }
    }
    if (result1) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * backtrackingFixedLengthQuantifier
   * ..."]✱)✱)|("..✱"))@((\[[0...
   *              ^^
   */
  let matches2 = 0;

  while (true) {
    const wrappedResult = fiber0019(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches2++;
    }
  }

  // needs followUp & forkingFiber
  while (matches2 >= 0) {
    const directFollowUpResult2 = fiber0018(i, str, context);

    if (directFollowUpResult2 !== -1) {
      return directFollowUpResult2;
    }

    matches2--;
    i -= 1;
  }

  return -1;
};
const fiber0021 = (i: number, str: string, context: Context): number => {
  /*
   * startAnchor
   * /^(([^<>()\[...
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * groupStartMarker
   * /^(([^<>()\[\]\\.,;:\s@"][^<>()\[\]\\.,;:\s@"]✱(\.[^<>()\[\]\\.,;:\s@"][^<>()\[\]\\.,;:\s@"]✱)✱)|("..✱"))@((\[[0-9]...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * disjunction
   * /^(([^<>()\[\]\\.,;:\s@"][^<>()\[\]\\.,;:\s@"]✱(\.[^<>()\[\]\\.,;:\s@"][^<>()\[\]\\.,;:\s@"]✱)✱)|("..✱"))@((\[[0-9]...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck2 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck2 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue2 = (firstCharQuickCheck2 << 16) ^ secondCharQuickCheck2;

  if ((quickCheckValue2 & 0) === 0) {
    const length0 = fiber0014(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart4 = -1;
    context.groupMarkerEnd4 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
  }
  if ((quickCheckValue2 & 2147418112) === 2228224) {
    const length1 = fiber0020(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart3 = -1;
    context.groupMarkerEnd3 = -1;
    context.groupMarkerStart4 = -1;
    context.groupMarkerEnd4 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
  }
  return -1;
};

/*
 * ...]{0,2}])|(([a-zA-Z\-0-9][a-zA-Z\-0-9]✱\.)+[a-zA-Z][a...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0010 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const tryDeeperResult = fiber0009(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;

  if (context.quantifierCounter0 < 1) {
    context.quantifierCounter0--;
    return -1;
  }

  return fiber0007(start, str, context);
};
