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
  quantifierCounter1: number;
  quantifierCounter2: number;
  quantifierCounter3: number;
  quantifierCounter4: number;
  quantifierCounter5: number;
  quantifierCounter6: number;
  quantifierCounter7: number;
  quantifierCounter8: number;
  quantifierCounter9: number;
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
    quantifierCounter1: -1,
    quantifierCounter2: -1,
    quantifierCounter3: -1,
    quantifierCounter4: -1,
    quantifierCounter5: -1,
    quantifierCounter6: -1,
    quantifierCounter7: -1,
    quantifierCounter8: -1,
    quantifierCounter9: -1,
  };

  // startAnchored
  const min = 0;
  const max = 0;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0040(i, str, context);
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
   * ...)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart4 = context.groupMarkerStartTemp4;
  context.groupMarkerEnd4 = i;
  /*
   * endAnchor
   * ...A-Z]{2,}))$/
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
   * ...[0-9]{1,3}])|(([a-zA-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 93;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart5 = context.groupMarkerStartTemp5;
  context.groupMarkerEnd5 = i;
  return fiber0001(i, str, context);
};
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-9]{1,3}\.[0-9]{1,3}])|((...
   *              ^^^^^
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
  return greedyQuantifier0004(i, str, context);
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...[0-9]{1,3}\.[0-9]{1,3}...
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
  /*
   * quantifierStarter
   * ...-9]{1,3}\.[0-9]{1,3}])|(([a-zA...
   *              ^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0004 = context.quantifierCounter0;
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = greedyQuantifier0004(i, str, context);
  context.quantifierCounter0 = matchCountCopygreedyQuantifier0004;

  return cursorAfterQuantifier;
};
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-9]{1,3}\.[0-9]{1,3}\.[0-...
   *              ^^^^^
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
  return greedyQuantifier0007(i, str, context);
};
const fiber0008 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...[0-9]{1,3}\.[0-9]{1,3}...
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
  /*
   * quantifierStarter
   * ...-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,...
   *              ^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0007 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0007(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0007;

  return cursorAfterQuantifier;
};
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-9]{1,3}\.[0-9]{1,3}\.[0-...
   *              ^^^^^
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
  return greedyQuantifier0010(i, str, context);
};
const fiber0011 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...[0-9]{1,3}\.[0-9]{1,3}...
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
  /*
   * quantifierStarter
   * ...-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,...
   *              ^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0010 = context.quantifierCounter2;
  context.quantifierCounter2 = -1;
  const cursorAfterQuantifier = greedyQuantifier0010(i, str, context);
  context.quantifierCounter2 = matchCountCopygreedyQuantifier0010;

  return cursorAfterQuantifier;
};
const fiber0012 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....+"))@((\[[0-9]{1,3}\.[0-...
   *              ^^^^^
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
  return greedyQuantifier0013(i, str, context);
};
const fiber0014 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp5 = i;
  /*
   * charOrSet
   * ...(".+"))@((\[[0-9]{1,3}...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 91;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * quantifierStarter
   * ....+"))@((\[[0-9]{1,3}\.[0-9]{1,...
   *              ^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0013 = context.quantifierCounter3;
  context.quantifierCounter3 = -1;
  const cursorAfterQuantifier = greedyQuantifier0013(i, str, context);
  context.quantifierCounter3 = matchCountCopygreedyQuantifier0013;

  return cursorAfterQuantifier;
};
const fiber0015 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart6 = context.groupMarkerStartTemp6;
  context.groupMarkerEnd6 = i;
  return fiber0001(i, str, context);
};
const fiber0016 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-0-9]+\.)+[a-zA-Z]{2,}))$/
   *              ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 90) {
    result0 = charCode0 >= 65;
  } else {
    if (charCode0 <= 122) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0017(i, str, context);
};
const fiber0018 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...-0-9]+\.)+[a-zA-Z]{2,}))$/
   *              ^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0017 = context.quantifierCounter4;
  context.quantifierCounter4 = -1;
  const cursorAfterQuantifier = greedyQuantifier0017(i, str, context);
  context.quantifierCounter4 = matchCountCopygreedyQuantifier0017;

  return cursorAfterQuantifier;
};
const fiber0019 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...A-Z\-0-9]+\.)+[a-zA-Z]...
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
  /*
   * groupEndMarker
   * ...]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{...
   *              ^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart7 = context.groupMarkerStartTemp7;
  context.groupMarkerEnd7 = i;
  return greedyQuantifier0020(i, str, context);
};
const fiber0021 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA...
   *              ^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

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
      }
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0022(i, str, context);
};
const fiber0023 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{...
   *              ^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp7 = i;
  /*
   * quantifierStarter
   * ...{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-...
   *              ^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0022 = context.quantifierCounter6;
  context.quantifierCounter6 = -1;
  const cursorAfterQuantifier = greedyQuantifier0022(i, str, context);
  context.quantifierCounter6 = matchCountCopygreedyQuantifier0022;

  return cursorAfterQuantifier;
};
const fiber0024 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp6 = i;
  /*
   * quantifierStarter
   * ...]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0020 = context.quantifierCounter5;
  context.quantifierCounter5 = -1;
  const cursorAfterQuantifier = greedyQuantifier0020(i, str, context);
  context.quantifierCounter5 = matchCountCopygreedyQuantifier0020;

  return cursorAfterQuantifier;
};
const fiber0025 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+"))@((\[[0-9]...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * charOrSet
   * ...✱)|(".+"))@((\[[0-9]{...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 64;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp4 = i;
  /*
   * disjunction
   * ...)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
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
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length1 = fiber0024(i, str, context);
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
const fiber0026 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+"))@(...
   *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  return fiber0025(i, str, context);
};
const fiber0027 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ....,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+"))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  return greedyQuantifier0028(i, str, context);
};
const fiber0029 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+"...
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

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
  return greedyQuantifier0030(i, str, context);
};
const fiber0031 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ....,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+"))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * charOrSet
   * ...,;:\s@"]+(\.[^<>()\[\]...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 46;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * quantifierStarter
   * ...:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+")...
   *              ^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0030 = context.quantifierCounter7;
  context.quantifierCounter7 = -1;
  const cursorAfterQuantifier = greedyQuantifier0030(i, str, context);
  context.quantifierCounter7 = matchCountCopygreedyQuantifier0030;

  return cursorAfterQuantifier;
};
const fiber0032 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ....,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+"))@...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const cursorAfterQuantifier = greedyQuantifier0028(i, str, context);

  return cursorAfterQuantifier;
};
const fiber0033 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()...
   *     ^^^^^^^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

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
  return greedyQuantifier0034(i, str, context);
};
const fiber0035 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+"))@(...
   *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * quantifierStarter
   * /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\...
   *     ^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0034 = context.quantifierCounter8;
  context.quantifierCounter8 = -1;
  const cursorAfterQuantifier = greedyQuantifier0034(i, str, context);
  context.quantifierCounter8 = matchCountCopygreedyQuantifier0034;

  return cursorAfterQuantifier;
};
const fiber0036 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]+)✱)|(".+"))@((\[[0-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 34;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...\s@"]+)✱)|(".+"))@((\[[0-9...
   *              ^^^^^^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  return fiber0025(i, str, context);
};
const fiber0037 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...@"]+)✱)|(".+"))@((\[[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 13) {
    result0 = charCode0 === 10 || charCode0 === 13;
  } else {
    if (charCode0 <= 8233) {
      result0 = charCode0 >= 8232;
    }
  }
  if (result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0038(i, str, context);
};
const fiber0039 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...\s@"]+)✱)|(".+"))@((\[[0-9...
   *              ^^^^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * charOrSet
   * ...s@"]+)✱)|(".+"))@((\[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 34;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * quantifierStarter
   * ...@"]+)✱)|(".+"))@((\[[0...
   *              ^^
   */
  let matchCountCopygreedyQuantifier0038 = context.quantifierCounter9;
  context.quantifierCounter9 = -1;
  const cursorAfterQuantifier = greedyQuantifier0038(i, str, context);
  context.quantifierCounter9 = matchCountCopygreedyQuantifier0038;

  return cursorAfterQuantifier;
};
const fiber0040 = (i: number, str: string, context: Context): number => {
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
   * /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+"))@((\[[0-9]...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * disjunction
   * /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+"))@((\[[0-9]...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;
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
  const length0 = fiber0035(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  const length1 = fiber0039(i, str, context);
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
 * ...-9]{1,3}\.[0-9]{1,3}])|(([a-zA...
 *              ^^^^^^^^^^
 */
const greedyQuantifier0004 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  if (context.quantifierCounter0 === 3) {
    return fiber0002(start, str, context);
  }

  const tryDeeperResult = fiber0003(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter0 < 1) {
    context.quantifierCounter0--;
    return -1;
  }

  const groupMarkerStartCopy4 = context.groupMarkerStart4;
  const groupMarkerEndCopy4 = context.groupMarkerEnd4;
  const groupMarkerStartCopy5 = context.groupMarkerStart5;
  const groupMarkerEndCopy5 = context.groupMarkerEnd5;

  const followUpResult = fiber0002(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart4 = groupMarkerStartCopy4;
    context.groupMarkerEnd4 = groupMarkerEndCopy4;
    context.groupMarkerStart5 = groupMarkerStartCopy5;
    context.groupMarkerEnd5 = groupMarkerEndCopy5;
    context.quantifierCounter0--;
  }
  return followUpResult;
};
/*
 * ...-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,...
 *              ^^^^^^^^^^
 */
const greedyQuantifier0007 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (context.quantifierCounter1 === 3) {
    return fiber0005(start, str, context);
  }

  const tryDeeperResult = fiber0006(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter1 < 1) {
    context.quantifierCounter1--;
    return -1;
  }

  const groupMarkerStartCopy4 = context.groupMarkerStart4;
  const groupMarkerEndCopy4 = context.groupMarkerEnd4;
  const groupMarkerStartCopy5 = context.groupMarkerStart5;
  const groupMarkerEndCopy5 = context.groupMarkerEnd5;

  const followUpResult = fiber0005(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart4 = groupMarkerStartCopy4;
    context.groupMarkerEnd4 = groupMarkerEndCopy4;
    context.groupMarkerStart5 = groupMarkerStartCopy5;
    context.groupMarkerEnd5 = groupMarkerEndCopy5;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * ...-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,...
 *              ^^^^^^^^^^
 */
const greedyQuantifier0010 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter2++;

  if (context.quantifierCounter2 === 3) {
    return fiber0008(start, str, context);
  }

  const tryDeeperResult = fiber0009(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter2 < 1) {
    context.quantifierCounter2--;
    return -1;
  }

  const groupMarkerStartCopy4 = context.groupMarkerStart4;
  const groupMarkerEndCopy4 = context.groupMarkerEnd4;
  const groupMarkerStartCopy5 = context.groupMarkerStart5;
  const groupMarkerEndCopy5 = context.groupMarkerEnd5;

  const followUpResult = fiber0008(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart4 = groupMarkerStartCopy4;
    context.groupMarkerEnd4 = groupMarkerEndCopy4;
    context.groupMarkerStart5 = groupMarkerStartCopy5;
    context.groupMarkerEnd5 = groupMarkerEndCopy5;
    context.quantifierCounter2--;
  }
  return followUpResult;
};
/*
 * ....+"))@((\[[0-9]{1,3}\.[0-9]{1,...
 *              ^^^^^^^^^^
 */
const greedyQuantifier0013 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter3++;

  if (context.quantifierCounter3 === 3) {
    return fiber0011(start, str, context);
  }

  const tryDeeperResult = fiber0012(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter3 < 1) {
    context.quantifierCounter3--;
    return -1;
  }

  const groupMarkerStartCopy4 = context.groupMarkerStart4;
  const groupMarkerEndCopy4 = context.groupMarkerEnd4;
  const groupMarkerStartCopy5 = context.groupMarkerStart5;
  const groupMarkerEndCopy5 = context.groupMarkerEnd5;

  const followUpResult = fiber0011(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart4 = groupMarkerStartCopy4;
    context.groupMarkerEnd4 = groupMarkerEndCopy4;
    context.groupMarkerStart5 = groupMarkerStartCopy5;
    context.groupMarkerEnd5 = groupMarkerEndCopy5;
    context.quantifierCounter3--;
  }
  return followUpResult;
};
/*
 * ...-0-9]+\.)+[a-zA-Z]{2,}))$/
 *              ^^^^^^^^^^^^
 */
const greedyQuantifier0017 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter4++;

  const tryDeeperResult = fiber0016(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter4 < 2) {
    context.quantifierCounter4--;
    return -1;
  }

  const groupMarkerStartCopy4 = context.groupMarkerStart4;
  const groupMarkerEndCopy4 = context.groupMarkerEnd4;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;

  const followUpResult = fiber0015(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart4 = groupMarkerStartCopy4;
    context.groupMarkerEnd4 = groupMarkerEndCopy4;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.quantifierCounter4--;
  }
  return followUpResult;
};
/*
 * ...]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2...
 *              ^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0020 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter5++;

  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const tryDeeperResult = fiber0023(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;

  if (context.quantifierCounter5 < 1) {
    context.quantifierCounter5--;
    return -1;
  }

  const groupMarkerStartCopy4 = context.groupMarkerStart4;
  const groupMarkerEndCopy4 = context.groupMarkerEnd4;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;

  const followUpResult = fiber0018(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart4 = groupMarkerStartCopy4;
    context.groupMarkerEnd4 = groupMarkerEndCopy4;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.quantifierCounter5--;
  }
  return followUpResult;
};
/*
 * ...{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-...
 *              ^^^^^^^^^^^^^^
 */
const greedyQuantifier0022 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter6++;

  const tryDeeperResult = fiber0021(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter6 < 1) {
    context.quantifierCounter6--;
    return -1;
  }

  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;

  const followUpResult = fiber0019(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.quantifierCounter6--;
  }
  return followUpResult;
};
/*
 * ....,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+"))@...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0028 = (
  start: number,
  str: string,
  context: Context
): number => {
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;
  const tryDeeperResult = fiber0031(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const groupMarkerStartCopy4 = context.groupMarkerStart4;
  const groupMarkerEndCopy4 = context.groupMarkerEnd4;
  const groupMarkerStartCopy5 = context.groupMarkerStart5;
  const groupMarkerEndCopy5 = context.groupMarkerEnd5;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;

  const followUpResult = fiber0026(start, str, context);

  if (followUpResult === -1) {
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
  }
  return followUpResult;
};
/*
 * ...:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+")...
 *              ^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0030 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter7++;

  const tryDeeperResult = fiber0029(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter7 < 1) {
    context.quantifierCounter7--;
    return -1;
  }

  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;

  const followUpResult = fiber0027(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
    context.quantifierCounter7--;
  }
  return followUpResult;
};
/*
 * /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\...
 *     ^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0034 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter8++;

  const tryDeeperResult = fiber0033(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter8 < 1) {
    context.quantifierCounter8--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;
  const groupMarkerStartCopy4 = context.groupMarkerStart4;
  const groupMarkerEndCopy4 = context.groupMarkerEnd4;
  const groupMarkerStartCopy5 = context.groupMarkerStart5;
  const groupMarkerEndCopy5 = context.groupMarkerEnd5;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;

  const followUpResult = fiber0032(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
    context.groupMarkerStart4 = groupMarkerStartCopy4;
    context.groupMarkerEnd4 = groupMarkerEndCopy4;
    context.groupMarkerStart5 = groupMarkerStartCopy5;
    context.groupMarkerEnd5 = groupMarkerEndCopy5;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.quantifierCounter8--;
  }
  return followUpResult;
};
/*
 * ...@"]+)✱)|(".+"))@((\[[0...
 *              ^^
 */
const greedyQuantifier0038 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter9++;

  const tryDeeperResult = fiber0037(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter9 < 1) {
    context.quantifierCounter9--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
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

  const followUpResult = fiber0036(start, str, context);

  if (followUpResult === -1) {
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
    context.quantifierCounter9--;
  }
  return followUpResult;
};
