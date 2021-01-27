// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/<\/?[\w\s]*>|<.+[\W]>/'
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
  quantifierCounter0: number;
  quantifierCounter1: number;
}

export function generatedRegexMatcher(str: string) {
  const context: Context = {
    quantifierCounter0: -1,
    quantifierCounter1: -1,
  };

  // minCharsLeft
  const min = 0;
  const max = str.length - 2;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0001(i, str, context);
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [str.substring(i, posAfterMatch)],
      };
    }
  }

  return null;
}

const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * /<\/?[\w\s]✱>|<.+[\W]>/
   *  ^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction0: {
    const length0 = fiber0008(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction0;
    }
    const length1 = fiber0012(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction0;
    }
    return -1;
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /<\/?[\w\s]✱>|<.+[\W]>/
   *             ^
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
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /<\/?[\w\s]✱>|<.+[\W]>/
   *      ^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 160) {
    if (charCode0 <= 90) {
      if (charCode0 <= 32) {
        if (charCode0 <= 13) {
          result0 = charCode0 >= 9;
        } else {
          result0 = charCode0 === 32;
        }
      } else {
        if (charCode0 <= 57) {
          result0 = charCode0 >= 48;
        } else {
          result0 = charCode0 >= 65;
        }
      }
    } else {
      if (charCode0 <= 122) {
        if (charCode0 === 95) {
          result0 = true;
        } else {
          result0 = charCode0 >= 97;
        }
      } else {
        result0 = charCode0 === 160;
      }
    }
  } else {
    if (charCode0 <= 8239) {
      if (charCode0 <= 8202) {
        if (charCode0 === 5760) {
          result0 = true;
        } else {
          result0 = charCode0 >= 8192;
        }
      } else {
        if (charCode0 <= 8233) {
          result0 = charCode0 >= 8232;
        } else {
          result0 = charCode0 === 8239;
        }
      }
    } else {
      if (charCode0 <= 12288) {
        result0 = charCode0 === 8287 || charCode0 === 12288;
      } else {
        result0 = charCode0 === 65279;
      }
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0004(i, str, context);
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * /<\/?[\w\s]✱>|<.+[\W]>/
   *      ^^^^^^^
   */
  const cursorAfterQuantifier = greedyQuantifier0004(i, str, context);

  return cursorAfterQuantifier;
};
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /<\/?[\w\s]✱>|...
   *   ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 47;

  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0007(i, str, context);
};
const fiber0008 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /<\/?[\w\s]✱...
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
   * quantifierStarter
   * /<\/?[\w\s]✱>|<...
   *   ^^^
   */
  let matchCountCopygreedyQuantifier0007 = context.quantifierCounter0;
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = greedyQuantifier0007(i, str, context);
  context.quantifierCounter0 = matchCountCopygreedyQuantifier0007;

  return cursorAfterQuantifier;
};
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...w\s]✱>|<.+[\W]>/
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
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
  if (result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...✱>|<.+[\W]>/
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 62;

  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0010 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...[\w\s]✱>|<.+[\W]>/
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
  return greedyQuantifier0011(i, str, context);
};
const fiber0012 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...?[\w\s]✱>|<.+[\W]>/
   *              ^
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
   * ...[\w\s]✱>|<.+[\W]>/
   *              ^^
   */
  let matchCountCopygreedyQuantifier0011 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0011(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0011;

  return cursorAfterQuantifier;
};

/*
 * /<\/?[\w\s]✱>|<.+[\W]>/
 *      ^^^^^^^
 */
const greedyQuantifier0004 = (
  start: number,
  str: string,
  context: Context
): number => {
  const tryDeeperResult = fiber0003(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0002(start, str, context);

  if (followUpResult === -1) {
  }
  return followUpResult;
};
/*
 * /<\/?[\w\s]✱>|<...
 *   ^^^
 */
const greedyQuantifier0007 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  if (context.quantifierCounter0 === 1) {
    return fiber0005(start, str, context);
  }

  const tryDeeperResult = fiber0006(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0005(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter0--;
  }
  return followUpResult;
};
/*
 * ...[\w\s]✱>|<.+[\W]>/
 *              ^^
 */
const greedyQuantifier0011 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  const tryDeeperResult = fiber0010(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter1 < 1) {
    context.quantifierCounter1--;
    return -1;
  }

  const followUpResult = fiber0009(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter1--;
  }
  return followUpResult;
};
