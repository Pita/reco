// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/'
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
}

// Regex optimized to: /^([a-z0-9_\.\+-][a-z0-9_\.\+-]*)@([\da-z\.-][\da-z\.-]*)\.([a-z\.][a-z\.][a-z\.]{0,4})$/

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
  };

  // startAnchored
  const min = 0;
  const max = 0;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0004(i, str, context);
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
   * groupEndMarker
   * ..._\.\+-]✱)@([\da-z\.-][\da-z\.-]✱)\.([a-z\.]...
   *              ^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * charOrSet
   * ...da-z\.-]✱)\.([a-z\.][a...
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
   * groupStartMarker
   * ...-z\.-]✱)\.([a-z\.][a-z\.][a-z\.]{0,4})$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * charSequence
   * ...z\.-]✱)\.([a-z\.][a-z\.][a-...
   *              ^^^^^^^
   */
  const iAfterMatch3 = i + 2;
  if (iAfterMatch3 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 === 46) {
      result0 = true;
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

    if (charCode1 === 46) {
      result1 = true;
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

    i = iAfterMatch3;
  }
  /*
   * nonBacktrackingQuantifier
   * ...\.][a-z\.][a-z\.]{0,4})$/
   *              ^^^^^^^^^^^^
   */
  let matches4 = 0;
  while (true) {
    const wrappedResult = fiber0002(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches4++;

      if (matches4 === 4) {
        break;
      }
    }
  }
  /*
   * groupEndMarker
   * ...-z\.-]✱)\.([a-z\.][a-z\.][a-z\.]{0,4})$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  /*
   * endAnchor
   * ...z\.]{0,4})$/
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
   * ...\.][a-z\.][a-z\.]{0,4})$/
   *              ^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 === 46) {
    result0 = true;
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
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...[\da-z\.-][\da-z\.-]✱)\.([a-z\...
   *              ^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    if (charCode0 <= 46) {
      result0 = charCode0 >= 45;
    } else {
      result0 = charCode0 >= 48;
    }
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
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * startAnchor
   * /^([a-z0-9_\...
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * groupStartMarker
   * /^([a-z0-9_\.\+-][a-z0-9_\.\+-]✱)@([\da-z\....
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * charOrSet
   * /^([a-z0-9_\.\+-][a-z0-9_\....
   *    ^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  if (charCode2 <= 57) {
    if (charCode2 <= 46) {
      if (charCode2 === 43) {
        result2 = true;
      } else {
        result2 = charCode2 >= 45;
      }
    } else {
      result2 = charCode2 >= 48;
    }
  } else {
    if (charCode2 === 95) {
      result2 = true;
    } else {
      if (charCode2 <= 122) {
        result2 = charCode2 >= 97;
      } else {
        result2 = false;
      }
    }
  }
  if (!result2) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9_\.\+-][a-z0-9_\.\+-]✱)@([\da-z\...
   *              ^^^^^^^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0005(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupEndMarker
   * /^([a-z0-9_\.\+-][a-z0-9_\.\+-]✱)@([\da-z\....
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * charOrSet
   * ...9_\.\+-]✱)@([\da-z\.-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode5 = str.charCodeAt(i);
  let result5: boolean;

  result5 = charCode5 === 64;

  if (!result5) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ..._\.\+-]✱)@([\da-z\.-][\da-z\.-]✱)\.([a-z\.]...
   *              ^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * charOrSet
   * ...\.\+-]✱)@([\da-z\.-][\da-z\.-]...
   *              ^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7: boolean;

  if (charCode7 <= 57) {
    if (charCode7 <= 46) {
      result7 = charCode7 >= 45;
    } else {
      result7 = charCode7 >= 48;
    }
  } else {
    if (charCode7 <= 122) {
      result7 = charCode7 >= 97;
    } else {
      result7 = false;
    }
  }
  if (!result7) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * ...[\da-z\.-][\da-z\.-]✱)\.([a-z\....
   *              ^^^^^^^^^^^
   */
  let matches8 = 0;

  while (true) {
    const wrappedResult = fiber0003(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches8++;
    }
  }

  // needs followUp & forkingFiber
  while (matches8 >= 0) {
    const directFollowUpResult8 = fiber0001(i, str, context);

    if (directFollowUpResult8 !== -1) {
      return directFollowUpResult8;
    }

    matches8--;
    i -= 1;
  }

  return -1;
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9_\.\+-][a-z0-9_\.\+-]✱)@([\da-z...
   *              ^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    if (charCode0 <= 46) {
      if (charCode0 === 43) {
        result0 = true;
      } else {
        result0 = charCode0 >= 45;
      }
    } else {
      result0 = charCode0 >= 48;
    }
  } else {
    if (charCode0 === 95) {
      result0 = true;
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
