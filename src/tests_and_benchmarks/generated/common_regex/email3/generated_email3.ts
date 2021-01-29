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
   * charOrSet
   * ..."..✱"))@((\[[0-9][0-9]...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 91;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ....✱"))@((\[[0-9][0-9]{0,2}...
   *              ^^^^^
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
   * ...@((\[[0-9][0-9]{0,2}\.[0-9][0-...
   *              ^^^^^^^^^^
   */
  let matches3 = 0;
  while (true) {
    const wrappedResult = fiber0006(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches3++;

      if (matches3 === 2) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...[0-9]{0,2}\.[0-9][0-9]...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4: boolean;

  result4 = charCode4 === 46;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...-9]{0,2}\.[0-9][0-9]{0,2}...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode5 = str.charCodeAt(i);
  let result5: boolean;

  if (charCode5 <= 57) {
    result5 = charCode5 >= 48;
  } else {
    result5 = false;
  }
  if (!result5) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...,2}\.[0-9][0-9]{0,2}\.[0-9][0-...
   *              ^^^^^^^^^^
   */
  let matches6 = 0;
  while (true) {
    const wrappedResult = fiber0005(i, str, context);

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
   * charOrSet
   * ...[0-9]{0,2}\.[0-9][0-9]...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7: boolean;

  result7 = charCode7 === 46;

  if (!result7) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...-9]{0,2}\.[0-9][0-9]{0,2}...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode8 = str.charCodeAt(i);
  let result8: boolean;

  if (charCode8 <= 57) {
    result8 = charCode8 >= 48;
  } else {
    result8 = false;
  }
  if (!result8) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...,2}\.[0-9][0-9]{0,2}\.[0-9][0-...
   *              ^^^^^^^^^^
   */
  let matches9 = 0;
  while (true) {
    const wrappedResult = fiber0004(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches9++;

      if (matches9 === 2) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...[0-9]{0,2}\.[0-9][0-9]...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode10 = str.charCodeAt(i);
  let result10: boolean;

  result10 = charCode10 === 46;

  if (!result10) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...-9]{0,2}\.[0-9][0-9]{0,2}...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode11 = str.charCodeAt(i);
  let result11: boolean;

  if (charCode11 <= 57) {
    result11 = charCode11 >= 48;
  } else {
    result11 = false;
  }
  if (!result11) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...,2}\.[0-9][0-9]{0,2}])|(([a-zA...
   *              ^^^^^^^^^^
   */
  let matches12 = 0;
  while (true) {
    const wrappedResult = fiber0003(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches12++;

      if (matches12 === 2) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...[0-9]{0,2}])|(([a-zA-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode13 = str.charCodeAt(i);
  let result13: boolean;

  result13 = charCode13 === 93;

  if (!result13) {
    return -1;
  }
  i++;
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
   * charOrSet
   * ...-0-9]✱\.)+[a-zA-Z][a-zA-Z][a...
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
  /*
   * charOrSet
   * ...)+[a-zA-Z][a-zA-Z][a-zA-Z]✱))$/
   *              ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
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
  i++;
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
   * charOrSet
   * ...{0,2}])|(([a-zA-Z\-0-9][a-zA-Z\-0...
   *              ^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  if (charCode1 <= 57) {
    if (charCode1 === 45) {
      result1 = true;
    } else {
      result1 = charCode1 >= 48;
    }
  } else {
    if (charCode1 <= 90) {
      result1 = charCode1 >= 65;
    } else {
      if (charCode1 <= 122) {
        result1 = charCode1 >= 97;
      } else {
        result1 = false;
      }
    }
  }
  if (!result1) {
    return -1;
  }
  i++;
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
   * charOrSet
   * ...A-Z\-0-9]✱\.)+[a-zA-Z]...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 46;

  if (!result3) {
    return -1;
  }
  i++;
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
  let matchCountCopygreedyQuantifier0010 = context.quantifierCounter0;
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = greedyQuantifier0010(i, str, context);
  context.quantifierCounter0 = matchCountCopygreedyQuantifier0010;

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
   * charOrSet
   * ...)|("..✱"))@((\[[0-9][...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 64;

  if (!result1) {
    return -1;
  }
  i++;
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
  const groupMarkerStartCopy4 = context.groupMarkerStart4;
  const groupMarkerEndCopy4 = context.groupMarkerEnd4;
  const groupMarkerStartCopy5 = context.groupMarkerStart5;
  const groupMarkerEndCopy5 = context.groupMarkerEnd5;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const length0 = fiber0002(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length1 = fiber0012(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
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
   * charOrSet
   * /^(([^<>()\[\]\\.,;:\s@"][^<>()\[\]...
   *     ^^^^^^^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
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
  i++;
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
   * charOrSet
   * ...,;:\s@"]✱(\.[^<>()\[\]...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 46;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...:\s@"]✱(\.[^<>()\[\]\\.,;:\s@"][^<>()\[\]...
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  if (charCode2 <= 64) {
    if (charCode2 <= 44) {
      if (charCode2 <= 34) {
        if (charCode2 <= 32) {
          if (charCode2 <= 13) {
            result2 = charCode2 >= 9;
          } else {
            result2 = charCode2 === 32;
          }
        } else {
          result2 = charCode2 === 34;
        }
      } else {
        if (charCode2 <= 41) {
          result2 = charCode2 >= 40;
        } else {
          result2 = charCode2 === 44;
        }
      }
    } else {
      if (charCode2 <= 60) {
        if (charCode2 === 46) {
          result2 = true;
        } else {
          result2 = charCode2 >= 58;
        }
      } else {
        result2 = charCode2 === 62 || charCode2 === 64;
      }
    }
  } else {
    if (charCode2 <= 8233) {
      if (charCode2 <= 5760) {
        if (charCode2 <= 160) {
          if (charCode2 <= 93) {
            result2 = charCode2 >= 91;
          } else {
            result2 = charCode2 === 160;
          }
        } else {
          result2 = charCode2 === 5760;
        }
      } else {
        if (charCode2 <= 8202) {
          result2 = charCode2 >= 8192;
        } else {
          result2 = charCode2 >= 8232;
        }
      }
    } else {
      if (charCode2 <= 8287) {
        result2 = charCode2 === 8239 || charCode2 === 8287;
      } else {
        result2 = charCode2 === 12288 || charCode2 === 65279;
      }
    }
  }
  if (result2) {
    return -1;
  }
  i++;
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
   * charOrSet
   * ...✱)✱)|("..✱"))@((\[[0-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 34;

  if (!result0) {
    return -1;
  }
  i++;
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
   * charOrSet
   * ...s@"]✱)✱)|("..✱"))@((\...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 34;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...@"]✱)✱)|("..✱"))@((\[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  if (charCode2 <= 13) {
    result2 = charCode2 === 10 || charCode2 === 13;
  } else {
    if (charCode2 <= 8233) {
      result2 = charCode2 >= 8232;
    } else {
      result2 = false;
    }
  }
  if (result2) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * ..."]✱)✱)|("..✱"))@((\[[0...
   *              ^^
   */
  let matches3 = 0;

  while (true) {
    const wrappedResult = fiber0019(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches3++;
    }
  }

  // needs followUp & forkingFiber
  while (matches3 >= 0) {
    const directFollowUpResult3 = fiber0018(i, str, context);

    if (directFollowUpResult3 !== -1) {
      return directFollowUpResult3;
    }

    matches3--;
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
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const groupMarkerStartCopy3 = context.groupMarkerStart3;
  const groupMarkerEndCopy3 = context.groupMarkerEnd3;
  const groupMarkerStartCopy4 = context.groupMarkerStart4;
  const groupMarkerEndCopy4 = context.groupMarkerEnd4;
  const groupMarkerStartCopy5 = context.groupMarkerStart5;
  const groupMarkerEndCopy5 = context.groupMarkerEnd5;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const length0 = fiber0014(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  const length1 = fiber0020(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
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

  const groupMarkerStartCopy4 = context.groupMarkerStart4;
  const groupMarkerEndCopy4 = context.groupMarkerEnd4;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;

  const followUpResult = fiber0007(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart4 = groupMarkerStartCopy4;
    context.groupMarkerEnd4 = groupMarkerEndCopy4;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.quantifierCounter0--;
  }
  return followUpResult;
};
