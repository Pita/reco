// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(?:<[^>]+\s)(on\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/'
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

type GroupMarkers = [number, number, number, number];

type TempGroupMarkers = [number, number];

type QuantifierCounters = [];

export function generatedRegexMatcher(str: string) {
  const groupMarkers: GroupMarkers = [-1, -1, -1, -1];
  const tempGroupStartMarkers: TempGroupMarkers = [-1, -1];
  const quantifierCounters: QuantifierCounters = [];

  for (let i = 0; i < str.length; i++) {
    const posAfterMatch = fiber0018(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [
          str.substring(i, posAfterMatch),
          groupMarkers[1] !== -1
            ? str.substring(groupMarkers[0], groupMarkers[1])
            : undefined,
          groupMarkers[3] !== -1
            ? str.substring(groupMarkers[2], groupMarkers[3])
            : undefined,
        ],
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
   * charOrSet
   * ...=|[>"']))+.)["']?/
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
  /*
   * groupEndMarker
   * ...\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  /*
   * nonBacktrackingQuantifier
   * ...[>"']))+.)["']?/
   *              ^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0002(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * ...[>"']))+.)["']?/
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 34 || charCode0 === 39;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0005 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * charOrSet
   * ...\s+(?:\S+)=|[>"']))+....
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 61;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0007 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * nonBacktrackingQuantifier
   * ...]?((?:.(?!["']?\s+(?:\S+)...
   *              ^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0009(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * nonBacktrackingQuantifier
   * ...:.(?!["']?\s+(?:\S+)=|[...
   *              ^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0008(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches1 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches1++;
    }
  }
  /*
   * backtrackingFixedLengthQuantifier
   * ..."']?\s+(?:\S+)=|[>"']))...
   *              ^^^
   */
  let matches2 = 0;

  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0006 = i;
    inlineFiber0006: {
      let i = startinlineFiber0006;

      /*
       * charOrSet
       * ..."']?\s+(?:\S+)=|[>"'])...
       *              ^^
       */
      if (i >= str.length) {
        break inlineFiber0006;
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
        break inlineFiber0006;
      }
      i++;
      wrappedResult = i;
    }

    if (wrappedResult === -1) {
      if (matches2 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;
      matches2++;
    }
  }

  // needs followUp & forkingFiber
  while (matches2 >= 1) {
    const directFollowUpResult2 = fiber0005(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult2 !== -1) {
      return directFollowUpResult2;
    }

    matches2--;
    i -= 1;
  }

  return -1;
};
const fiber0008 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * charOrSet
   * ...:.(?!["']?\s+(?:\S+)=|...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
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
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0009 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * charOrSet
   * ...]?((?:.(?!["']?\s+(?:\S+...
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 34 || charCode0 === 39;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0010 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * charOrSet
   * ...+(?:\S+)=|[>"']))+.)["']?/
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 39) {
    result0 = charCode0 === 34 || charCode0 === 39;
  } else {
    result0 = charCode0 === 62;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0011 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * disjunction
   * ...["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0007(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0010(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }

  return -1;
};
const fiber0012 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupStartMarker
   * ...\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * backtrackingFixedLengthQuantifier
   * ...S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;

  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0003 = i;
    inlineFiber0003: {
      let i = startinlineFiber0003;

      /*
       * charOrSet
       * ...=["']?((?:.(?!["']?\s...
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
      /*
       * lookaround
       * ...["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/
       *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
       */
      const lookaroundResult1 = fiber0011(
        i,
        str,
        groupMarkers,
        tempGroupStartMarkers,
        quantifierCounters
      );
      if (lookaroundResult1 !== -1) {
        break inlineFiber0003;
      }
      wrappedResult = i;
    }

    if (wrappedResult === -1) {
      if (matches1 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;
      matches1++;
    }
  }

  // needs followUp & forkingFiber
  while (matches1 >= 1) {
    const directFollowUpResult1 = fiber0001(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 1;
  }

  return -1;
};
const fiber0014 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupEndMarker
   * /(?:<[^>]+\s)(on\S+)=["']?((?:...
   *              ^^^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  /*
   * charOrSet
   * ...\s)(on\S+)=["']?((?:....
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 61;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * ...s)(on\S+)=["']?((?:.(?!["...
   *              ^^^^^
   */
  let matches2 = 0;

  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0013 = i;
    inlineFiber0013: {
      let i = startinlineFiber0013;

      /*
       * charOrSet
       * ...s)(on\S+)=["']?((?:.(?![...
       *              ^^^^
       */
      if (i >= str.length) {
        break inlineFiber0013;
      }
      const charCode0 = str.charCodeAt(i);
      let result0 = false;

      result0 = charCode0 === 34 || charCode0 === 39;

      if (!result0) {
        break inlineFiber0013;
      }
      i++;
      wrappedResult = i;
    }

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

  // needs followUp & forkingFiber
  while (matches2 >= 0) {
    const directFollowUpResult2 = fiber0012(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult2 !== -1) {
      return directFollowUpResult2;
    }

    matches2--;
    i -= 1;
  }

  return -1;
};
const fiber0016 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * charOrSet
   * /(?:<[^>]+\s)(on\S+)=[...
   *           ^^
   */
  if (i >= str.length) {
    return -1;
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
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * /(?:<[^>]+\s)(on\S+)=["']?((?:...
   *              ^^^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * charOrSet
   * ...<[^>]+\s)(on\S+)=["']...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 111;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...[^>]+\s)(on\S+)=["']?...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  result3 = charCode3 === 110;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * ...^>]+\s)(on\S+)=["']?((?...
   *              ^^^
   */
  let matches4 = 0;

  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0015 = i;
    inlineFiber0015: {
      let i = startinlineFiber0015;

      /*
       * charOrSet
       * ...^>]+\s)(on\S+)=["']?((...
       *              ^^
       */
      if (i >= str.length) {
        break inlineFiber0015;
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
        break inlineFiber0015;
      }
      i++;
      wrappedResult = i;
    }

    if (wrappedResult === -1) {
      if (matches4 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;
      matches4++;
    }
  }

  // needs followUp & forkingFiber
  while (matches4 >= 1) {
    const directFollowUpResult4 = fiber0014(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult4 !== -1) {
      return directFollowUpResult4;
    }

    matches4--;
    i -= 1;
  }

  return -1;
};
const fiber0018 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * charOrSet
   * /(?:<[^>]+\s)(o...
   *     ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 60;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * /(?:<[^>]+\s)(on\S+)...
   *      ^^^^^
   */
  let matches1 = 0;

  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0017 = i;
    inlineFiber0017: {
      let i = startinlineFiber0017;

      /*
       * charOrSet
       * /(?:<[^>]+\s)(on\S+...
       *      ^^^^
       */
      if (i >= str.length) {
        break inlineFiber0017;
      }
      const charCode0 = str.charCodeAt(i);
      let result0 = false;

      result0 = charCode0 === 62;

      if (result0) {
        break inlineFiber0017;
      }
      i++;
      wrappedResult = i;
    }

    if (wrappedResult === -1) {
      if (matches1 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;
      matches1++;
    }
  }

  // needs followUp & forkingFiber
  while (matches1 >= 1) {
    const directFollowUpResult1 = fiber0016(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 1;
  }

  return -1;
};
