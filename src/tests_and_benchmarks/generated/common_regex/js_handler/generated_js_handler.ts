// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/\bon\w+=\S+(?=.*>)/'
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

type GroupMarkers = [];

type TempGroupMarkers = [];

type QuantifierCounters = [];

export function generatedRegexMatcher(str: string) {
  const groupMarkers: GroupMarkers = [];
  const tempGroupStartMarkers: TempGroupMarkers = [];
  const quantifierCounters: QuantifierCounters = [];

  for (let i = 0; i < str.length; i++) {
    const posAfterMatch = fiber0001(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [str.substring(i, posAfterMatch)],
      };
    }
  }

  return null;
}

const fiber0001 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * wordBoundary
   * /\bon\w+=\S+(...
   *  ^^
   */
  if (i !== 0 && i !== str.length) {
    // TODO: find way to generate these trees
    const charCodeBefore0 = str.charCodeAt(i - 1);
    let isBeforeWord0 = false;
    if (charCodeBefore0 <= 90) {
      if (charCodeBefore0 <= 57) {
        isBeforeWord0 = charCodeBefore0 >= 48;
      } else {
        isBeforeWord0 = charCodeBefore0 >= 65;
      }
    } else {
      if (charCodeBefore0 === 95) {
        isBeforeWord0 = true;
      } else {
        if (charCodeBefore0 <= 122) {
          isBeforeWord0 = charCodeBefore0 >= 97;
        }
      }
    }

    const charCodeAfter0 = str.charCodeAt(i);
    let isAfterWord0 = false;
    if (charCodeAfter0 <= 90) {
      if (charCodeAfter0 <= 57) {
        isAfterWord0 = charCodeAfter0 >= 48;
      } else {
        isAfterWord0 = charCodeAfter0 >= 65;
      }
    } else {
      if (charCodeAfter0 === 95) {
        isAfterWord0 = true;
      } else {
        if (charCodeAfter0 <= 122) {
          isAfterWord0 = charCodeAfter0 >= 97;
        }
      }
    }

    if (isBeforeWord0 === isAfterWord0) {
      return -1;
    }
  }
  /*
   * charOrSet
   * /\bon\w+=\S+(?...
   *    ^
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
   * /\bon\w+=\S+(?=...
   *     ^
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
  /*
   * nonBacktrackingQuantifier
   * /\bon\w+=\S+(?=.✱>)/
   *      ^^^
   */
  let matches3 = 0;
  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0006 = i;
    inlineFiber0006: {
      let i = startinlineFiber0006;

      /*
       * charOrSet
       * /\bon\w+=\S+(?=.✱>)/
       *      ^^
       */
      if (i >= str.length) {
        break inlineFiber0006;
      }
      const charCode0 = str.charCodeAt(i);
      let result0 = false;

      if (charCode0 <= 90) {
        if (charCode0 <= 57) {
          result0 = charCode0 >= 48;
        } else {
          result0 = charCode0 >= 65;
        }
      } else {
        if (charCode0 === 95) {
          result0 = true;
        } else {
          if (charCode0 <= 122) {
            result0 = charCode0 >= 97;
          }
        }
      }
      if (!result0) {
        break inlineFiber0006;
      }
      i++;
      wrappedResult = i;
    }

    if (wrappedResult === -1) {
      if (matches3 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches3++;
    }
  }
  /*
   * charOrSet
   * /\bon\w+=\S+(?=.✱>)/
   *         ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4 = false;

  result4 = charCode4 === 61;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * /\bon\w+=\S+(?=.✱>)/
   *          ^^^
   */
  let matches5 = 0;
  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0005 = i;
    inlineFiber0005: {
      let i = startinlineFiber0005;

      /*
       * charOrSet
       * /\bon\w+=\S+(?=.✱>)/
       *          ^^
       */
      if (i >= str.length) {
        break inlineFiber0005;
      }
      const charCode0 = str.charCodeAt(i);
      let result0 = false;

      if (charCode0 <= 8202) {
        if (charCode0 <= 160) {
          if (charCode0 <= 32) {
            if (charCode0 <= 13) {
              result0 = charCode0 >= 9;
            } else {
              result0 = charCode0 === 32;
            }
          } else {
            result0 = charCode0 === 160;
          }
        } else {
          if (charCode0 === 5760) {
            result0 = true;
          } else {
            result0 = charCode0 >= 8192;
          }
        }
      } else {
        if (charCode0 <= 8287) {
          if (charCode0 <= 8239) {
            if (charCode0 <= 8233) {
              result0 = charCode0 >= 8232;
            } else {
              result0 = charCode0 === 8239;
            }
          } else {
            result0 = charCode0 === 8287;
          }
        } else {
          result0 = charCode0 === 12288 || charCode0 === 65279;
        }
      }
      if (result0) {
        break inlineFiber0005;
      }
      i++;
      wrappedResult = i;
    }

    if (wrappedResult === -1) {
      if (matches5 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches5++;
    }
  }
  /*
   * lookaround
   * /\bon\w+=\S+(?=.✱>)/
   *             ^^^^^^^
   */
  const lookaroundResult6 = fiber0004(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (lookaroundResult6 === -1) {
    return -1;
  }
  return i;
};
const fiber0002 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * charOrSet
   * ...+=\S+(?=.✱>)/
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 62;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0004 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * backtrackingFixedLengthQuantifier
   * ...\w+=\S+(?=.✱>)/
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0003 = i;
    inlineFiber0003: {
      let i = startinlineFiber0003;

      /*
       * charOrSet
       * ...\w+=\S+(?=.✱>)/
       *              ^
       */
      if (i >= str.length) {
        break inlineFiber0003;
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
        break inlineFiber0003;
      }
      i++;
      wrappedResult = i;
    }

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches0++;
    }
  }

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0002(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
