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
}

// Regex optimized to: /<[^>][^>]*\s(on\S\S*)=["']?(.(?!["']?\s+(?:\S+)=|[>"'])(?:.(?!["']?\s+(?:\S+)=|[>"']))*.)["']?/

export function generatedRegexMatcher(str: string) {
  const context: Context = {
    groupMarkerStart0: -1,
    groupMarkerStartTemp0: -1,
    groupMarkerEnd0: -1,
    groupMarkerStart1: -1,
    groupMarkerStartTemp1: -1,
    groupMarkerEnd1: -1,
  };

  // minCharsLeft
  const min = 0;
  const max = str.length - 9;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0024(i, str, context);
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
  /*
   * charOrSet
   * ...=|[>"']))✱.)["']?/
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
   * ...\S✱)=["']?(.(?!["']?\s+(?:\S+)=|[>"'])(?:.(?!["']?\s+(?:\S+)=|[>"']))✱.)["']?/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * nonBacktrackingQuantifier
   * ...[>"']))✱.)["']?/
   *              ^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0002(i, str, context);

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
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...[>"']))✱.)["']?/
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
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|[>"'])(?:.(?!["']?\s...
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
   * ...[>"'])(?:.(?!["']?\s+(?:\S+)=|[>"']))✱.)["']?/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const lookaroundResult1 = fiber0004(i, str, context);
  if (lookaroundResult1 !== -1) {
    return -1;
  }
  return i;
};
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...[>"'])(?:.(?!["']?\s+(?:\S+)=|[>"']))✱.)["']?/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0007(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0010(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  return i;
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\s+(?:\S+)=|[>"']))✱....
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
const fiber0006 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0007 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...'])(?:.(?!["']?\s+(?:\S+)...
   *              ^^^^^
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
  /*
   * nonBacktrackingQuantifier
   * ...:.(?!["']?\s+(?:\S+)=|[...
   *              ^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0008(i, str, context);

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
    const wrappedResult = fiber0006(i, str, context);

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
    const directFollowUpResult2 = fiber0005(i, str, context);

    if (directFollowUpResult2 !== -1) {
      return directFollowUpResult2;
    }

    matches2--;
    i -= 1;
  }

  return -1;
};
const fiber0008 = (i: number, str: string, context: Context): number => {
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
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...'])(?:.(?!["']?\s+(?:\S+...
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
const fiber0010 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...+(?:\S+)=|[>"']))✱.)["']?/
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
const fiber0011 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...\S✱)=["']?(.(?!["']?\s+(?:\S+)=|[>"'])(?:.(?!["']?\s+(?:\S+)=|[>"']))✱.)["']?/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * charOrSet
   * ...S✱)=["']?(.(?!["']?\s...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 13) {
    result1 = charCode1 === 10 || charCode1 === 13;
  } else {
    if (charCode1 <= 8233) {
      result1 = charCode1 >= 8232;
    }
  }
  if (result1) {
    return -1;
  }
  i++;
  /*
   * lookaround
   * ...✱)=["']?(.(?!["']?\s+(?:\S+)=|[>"'])(?:.(?!["'...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const lookaroundResult2 = fiber0012(i, str, context);
  if (lookaroundResult2 !== -1) {
    return -1;
  }
  /*
   * backtrackingFixedLengthQuantifier
   * ...+)=|[>"'])(?:.(?!["']?\s+(?:\S+)=|[>"']))✱.)["']?/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches3 = 0;

  while (true) {
    const wrappedResult = fiber0003(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches3++;
    }
  }

  // needs followUp & forkingFiber
  while (matches3 >= 0) {
    const directFollowUpResult3 = fiber0001(i, str, context);

    if (directFollowUpResult3 !== -1) {
      return directFollowUpResult3;
    }

    matches3--;
    i -= 1;
  }

  return -1;
};
const fiber0012 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...✱)=["']?(.(?!["']?\s+(?:\S+)=|[>"'])(?:.(?!["'...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0015(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0018(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  return i;
};
const fiber0013 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\s+(?:\S+)=|[>"'])(?:...
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
const fiber0014 = (i: number, str: string, context: Context): number => {
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
  return i;
};
const fiber0015 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...["']?(.(?!["']?\s+(?:\S+)...
   *              ^^^^^
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
   * nonBacktrackingQuantifier
   * ...(.(?!["']?\s+(?:\S+)=|[...
   *              ^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0016(i, str, context);

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
   * ..."']?\s+(?:\S+)=|[>"'])(...
   *              ^^^
   */
  let matches2 = 0;

  while (true) {
    const wrappedResult = fiber0014(i, str, context);

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
    const directFollowUpResult2 = fiber0013(i, str, context);

    if (directFollowUpResult2 !== -1) {
      return directFollowUpResult2;
    }

    matches2--;
    i -= 1;
  }

  return -1;
};
const fiber0016 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(.(?!["']?\s+(?:\S+)=|...
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
const fiber0017 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...["']?(.(?!["']?\s+(?:\S+...
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
const fiber0018 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...+(?:\S+)=|[>"'])(?:.(?!["...
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
   * charOrSet
   * ...(on\S\S✱)=["']?(.(?!["']...
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
const fiber0020 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * /<[^>][^>]✱\s(on\S\S✱)=["']?(.(?...
   *              ^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * charOrSet
   * ...s(on\S\S✱)=["']?(.(?!...
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
   * ...(on\S\S✱)=["']?(.(?!["']?...
   *              ^^^^^
   */
  let matches2 = 0;

  while (true) {
    const wrappedResult = fiber0019(i, str, context);

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
    const directFollowUpResult2 = fiber0011(i, str, context);

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
   * charOrSet
   * ...>]✱\s(on\S\S✱)=["']?(....
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
  return i;
};
const fiber0022 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /<[^>][^>]✱\s(on\S\S✱)=...
   *            ^^
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
   * /<[^>][^>]✱\s(on\S\S✱)=["']?(.(?...
   *              ^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charOrSet
   * ...>][^>]✱\s(on\S\S✱)=["...
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
   * ...][^>]✱\s(on\S\S✱)=["'...
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
   * charOrSet
   * ...[^>]✱\s(on\S\S✱)=["']?...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4 = false;

  if (charCode4 <= 8202) {
    if (charCode4 <= 160) {
      if (charCode4 <= 32) {
        if (charCode4 <= 13) {
          result4 = charCode4 >= 9;
        } else {
          result4 = charCode4 === 32;
        }
      } else {
        result4 = charCode4 === 160;
      }
    } else {
      if (charCode4 === 5760) {
        result4 = true;
      } else {
        result4 = charCode4 >= 8192;
      }
    }
  } else {
    if (charCode4 <= 8287) {
      if (charCode4 <= 8239) {
        if (charCode4 <= 8233) {
          result4 = charCode4 >= 8232;
        } else {
          result4 = charCode4 === 8239;
        }
      } else {
        result4 = charCode4 === 8287;
      }
    } else {
      result4 = charCode4 === 12288 || charCode4 === 65279;
    }
  }
  if (result4) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * ...>]✱\s(on\S\S✱)=["']?(.(...
   *              ^^^
   */
  let matches5 = 0;

  while (true) {
    const wrappedResult = fiber0021(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches5++;
    }
  }

  // needs followUp & forkingFiber
  while (matches5 >= 0) {
    const directFollowUpResult5 = fiber0020(i, str, context);

    if (directFollowUpResult5 !== -1) {
      return directFollowUpResult5;
    }

    matches5--;
    i -= 1;
  }

  return -1;
};
const fiber0023 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /<[^>][^>]✱\s(on\S\S...
   *       ^^^^
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
  return i;
};
const fiber0024 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /<[^>][^>]✱\...
   *  ^
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
   * charOrSet
   * /<[^>][^>]✱\s(on...
   *   ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 62;

  if (result1) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * /<[^>][^>]✱\s(on\S\S✱...
   *       ^^^^^
   */
  let matches2 = 0;

  while (true) {
    const wrappedResult = fiber0023(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches2++;
    }
  }

  // needs followUp & forkingFiber
  while (matches2 >= 0) {
    const directFollowUpResult2 = fiber0022(i, str, context);

    if (directFollowUpResult2 !== -1) {
      return directFollowUpResult2;
    }

    matches2--;
    i -= 1;
  }

  return -1;
};
