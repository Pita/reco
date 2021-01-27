// This code was generated with RECO vDEV
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

interface Context {
  groupMarkerStart0: number;
  groupMarkerStartTemp0: number;
  groupMarkerEnd0: number;
  groupMarkerStart1: number;
  groupMarkerStartTemp1: number;
  groupMarkerEnd1: number;
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
    quantifierCounter0: -1,
    quantifierCounter1: -1,
    quantifierCounter2: -1,
    quantifierCounter3: -1,
    quantifierCounter4: -1,
    quantifierCounter5: -1,
    quantifierCounter6: -1,
    quantifierCounter7: -1,
  };

  // minCharsLeft
  const min = 0;
  const max = str.length - 9;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0029(i, str, context);
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
        ],
      };
    }
  }

  return null;
}

const fiber0001 = (i: number, str: string, context: Context): number => {
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
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
  return greedyQuantifier0003(i, str, context);
};
const fiber0004 = (i: number, str: string, context: Context): number => {
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
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * quantifierStarter
   * ...[>"']))+.)["']?/
   *              ^^^^^
   */
  let matchCountCopygreedyQuantifier0003 = context.quantifierCounter0;
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = greedyQuantifier0003(i, str, context);
  context.quantifierCounter0 = matchCountCopygreedyQuantifier0003;

  return cursorAfterQuantifier;
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...=["']?((?:.(?!["']?\s...
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
   * lookaround
   * ...["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const lookaroundResult1 = fiber0019(i, str, context);
  if (lookaroundResult1 !== -1) {
    return -1;
  }
  return greedyQuantifier0006(i, str, context);
};
const fiber0008 = (i: number, str: string, context: Context): number => {
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
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ..."']?\s+(?:\S+)=|[>"'])...
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
  if (result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0010(i, str, context);
};
const fiber0011 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ..."']?\s+(?:\S+)=|[>"']))...
   *              ^^^
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
  return greedyQuantifier0013(i, str, context);
};
const fiber0014 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...:.(?!["']?\s+(?:\S+)=|[...
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
  return greedyQuantifier0016(i, str, context);
};
const fiber0017 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]?((?:.(?!["']?\s+(?:\S+)...
   *              ^^^^^
   */
  let matchCountCopygreedyQuantifier0016 = context.quantifierCounter4;
  context.quantifierCounter4 = -1;
  const cursorAfterQuantifier = greedyQuantifier0016(i, str, context);
  context.quantifierCounter4 = matchCountCopygreedyQuantifier0016;

  return cursorAfterQuantifier;
};
const fiber0018 = (i: number, str: string, context: Context): number => {
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
const fiber0019 = (i: number, str: string, context: Context): number => {
  /*
   * disjunction
   * ...["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0017(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0018(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0020 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * quantifierStarter
   * ...S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0006 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0006(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0006;

  return cursorAfterQuantifier;
};
const fiber0021 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...s)(on\S+)=["']?((?:.(?![...
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
  return greedyQuantifier0022(i, str, context);
};
const fiber0023 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * /(?:<[^>]+\s)(on\S+)=["']?((?:...
   *              ^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
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
   * quantifierStarter
   * ...s)(on\S+)=["']?((?:.(?!["...
   *              ^^^^^
   */
  let matchCountCopygreedyQuantifier0022 = context.quantifierCounter5;
  context.quantifierCounter5 = -1;
  const cursorAfterQuantifier = greedyQuantifier0022(i, str, context);
  context.quantifierCounter5 = matchCountCopygreedyQuantifier0022;

  return cursorAfterQuantifier;
};
const fiber0024 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...^>]+\s)(on\S+)=["']?((...
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
  if (result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0025(i, str, context);
};
const fiber0026 = (i: number, str: string, context: Context): number => {
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
  context.groupMarkerStartTemp0 = i;
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
   * quantifierStarter
   * ...^>]+\s)(on\S+)=["']?((?...
   *              ^^^
   */
  let matchCountCopygreedyQuantifier0025 = context.quantifierCounter6;
  context.quantifierCounter6 = -1;
  const cursorAfterQuantifier = greedyQuantifier0025(i, str, context);
  context.quantifierCounter6 = matchCountCopygreedyQuantifier0025;

  return cursorAfterQuantifier;
};
const fiber0027 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /(?:<[^>]+\s)(on\S+...
   *      ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 62;

  if (result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0028(i, str, context);
};
const fiber0029 = (i: number, str: string, context: Context): number => {
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
   * quantifierStarter
   * /(?:<[^>]+\s)(on\S+)...
   *      ^^^^^
   */
  let matchCountCopygreedyQuantifier0028 = context.quantifierCounter7;
  context.quantifierCounter7 = -1;
  const cursorAfterQuantifier = greedyQuantifier0028(i, str, context);
  context.quantifierCounter7 = matchCountCopygreedyQuantifier0028;

  return cursorAfterQuantifier;
};

/*
 * ...[>"']))+.)["']?/
 *              ^^^^^
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

  const tryDeeperResult = fiber0002(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0001(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter0--;
  }
  return followUpResult;
};
/*
 * ...S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0006 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  const tryDeeperResult = fiber0005(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter1 < 1) {
    context.quantifierCounter1--;
    return -1;
  }

  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;

  const followUpResult = fiber0004(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * ..."']?\s+(?:\S+)=|[>"']))...
 *              ^^^
 */
const greedyQuantifier0010 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter2++;

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

  const followUpResult = fiber0008(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter2--;
  }
  return followUpResult;
};
/*
 * ...:.(?!["']?\s+(?:\S+)=|[...
 *              ^^^
 */
const greedyQuantifier0013 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter3++;

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

  const followUpResult = fiber0011(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter3--;
  }
  return followUpResult;
};
/*
 * ...]?((?:.(?!["']?\s+(?:\S+)...
 *              ^^^^^
 */
const greedyQuantifier0016 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter4++;

  if (context.quantifierCounter4 === 1) {
    return fiber0014(start, str, context);
  }

  const tryDeeperResult = fiber0015(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0014(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter4--;
  }
  return followUpResult;
};
/*
 * ...s)(on\S+)=["']?((?:.(?!["...
 *              ^^^^^
 */
const greedyQuantifier0022 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter5++;

  if (context.quantifierCounter5 === 1) {
    return fiber0020(start, str, context);
  }

  const tryDeeperResult = fiber0021(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;

  const followUpResult = fiber0020(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.quantifierCounter5--;
  }
  return followUpResult;
};
/*
 * ...^>]+\s)(on\S+)=["']?((?...
 *              ^^^
 */
const greedyQuantifier0025 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter6++;

  const tryDeeperResult = fiber0024(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter6 < 1) {
    context.quantifierCounter6--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;

  const followUpResult = fiber0023(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.quantifierCounter6--;
  }
  return followUpResult;
};
/*
 * /(?:<[^>]+\s)(on\S+)...
 *      ^^^^^
 */
const greedyQuantifier0028 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter7++;

  const tryDeeperResult = fiber0027(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter7 < 1) {
    context.quantifierCounter7--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;

  const followUpResult = fiber0026(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.quantifierCounter7--;
  }
  return followUpResult;
};
