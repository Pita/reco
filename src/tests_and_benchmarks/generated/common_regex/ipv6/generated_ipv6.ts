// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/'
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
  groupMarkerStart8: number;
  groupMarkerStartTemp8: number;
  groupMarkerEnd8: number;
  groupMarkerStart9: number;
  groupMarkerStartTemp9: number;
  groupMarkerEnd9: number;
  groupMarkerStart10: number;
  groupMarkerStartTemp10: number;
  groupMarkerEnd10: number;
  groupMarkerStart11: number;
  groupMarkerStartTemp11: number;
  groupMarkerEnd11: number;
  groupMarkerStart12: number;
  groupMarkerStartTemp12: number;
  groupMarkerEnd12: number;
  groupMarkerStart13: number;
  groupMarkerStartTemp13: number;
  groupMarkerEnd13: number;
  groupMarkerStart14: number;
  groupMarkerStartTemp14: number;
  groupMarkerEnd14: number;
  groupMarkerStart15: number;
  groupMarkerStartTemp15: number;
  groupMarkerEnd15: number;
  groupMarkerStart16: number;
  groupMarkerStartTemp16: number;
  groupMarkerEnd16: number;
  groupMarkerStart17: number;
  groupMarkerStartTemp17: number;
  groupMarkerEnd17: number;
  groupMarkerStart18: number;
  groupMarkerStartTemp18: number;
  groupMarkerEnd18: number;
  groupMarkerStart19: number;
  groupMarkerStartTemp19: number;
  groupMarkerEnd19: number;
  groupMarkerStart20: number;
  groupMarkerStartTemp20: number;
  groupMarkerEnd20: number;
  groupMarkerStart21: number;
  groupMarkerStartTemp21: number;
  groupMarkerEnd21: number;
  groupMarkerStart22: number;
  groupMarkerStartTemp22: number;
  groupMarkerEnd22: number;
  groupMarkerStart23: number;
  groupMarkerStartTemp23: number;
  groupMarkerEnd23: number;
  groupMarkerStart24: number;
  groupMarkerStartTemp24: number;
  groupMarkerEnd24: number;
  groupMarkerStart25: number;
  groupMarkerStartTemp25: number;
  groupMarkerEnd25: number;
  groupMarkerStart26: number;
  groupMarkerStartTemp26: number;
  groupMarkerEnd26: number;
  groupMarkerStart27: number;
  groupMarkerStartTemp27: number;
  groupMarkerEnd27: number;
  groupMarkerStart28: number;
  groupMarkerStartTemp28: number;
  groupMarkerEnd28: number;
  groupMarkerStart29: number;
  groupMarkerStartTemp29: number;
  groupMarkerEnd29: number;
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

// Regex optimized to: /([0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9a-fA-F][0-9a-fA-F]{0,3}:([0-9a-fA-F][0-9a-fA-F]{0,3}:)[0-9a-fA-F][0-9a-fA-F]{0,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,7}:|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,6}:[0-9a-fA-F][0-9a-fA-F]{0,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,5}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,2}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,3}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,4}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,2}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,5}|[0-9a-fA-F][0-9a-fA-F]{0,3}:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,6})|:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z][0-9a-zA-Z]*|::(ffff(:00{0,3})?:)?(?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.(?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}:(?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.(?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))/

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
    groupMarkerStart8: -1,
    groupMarkerStartTemp8: -1,
    groupMarkerEnd8: -1,
    groupMarkerStart9: -1,
    groupMarkerStartTemp9: -1,
    groupMarkerEnd9: -1,
    groupMarkerStart10: -1,
    groupMarkerStartTemp10: -1,
    groupMarkerEnd10: -1,
    groupMarkerStart11: -1,
    groupMarkerStartTemp11: -1,
    groupMarkerEnd11: -1,
    groupMarkerStart12: -1,
    groupMarkerStartTemp12: -1,
    groupMarkerEnd12: -1,
    groupMarkerStart13: -1,
    groupMarkerStartTemp13: -1,
    groupMarkerEnd13: -1,
    groupMarkerStart14: -1,
    groupMarkerStartTemp14: -1,
    groupMarkerEnd14: -1,
    groupMarkerStart15: -1,
    groupMarkerStartTemp15: -1,
    groupMarkerEnd15: -1,
    groupMarkerStart16: -1,
    groupMarkerStartTemp16: -1,
    groupMarkerEnd16: -1,
    groupMarkerStart17: -1,
    groupMarkerStartTemp17: -1,
    groupMarkerEnd17: -1,
    groupMarkerStart18: -1,
    groupMarkerStartTemp18: -1,
    groupMarkerEnd18: -1,
    groupMarkerStart19: -1,
    groupMarkerStartTemp19: -1,
    groupMarkerEnd19: -1,
    groupMarkerStart20: -1,
    groupMarkerStartTemp20: -1,
    groupMarkerEnd20: -1,
    groupMarkerStart21: -1,
    groupMarkerStartTemp21: -1,
    groupMarkerEnd21: -1,
    groupMarkerStart22: -1,
    groupMarkerStartTemp22: -1,
    groupMarkerEnd22: -1,
    groupMarkerStart23: -1,
    groupMarkerStartTemp23: -1,
    groupMarkerEnd23: -1,
    groupMarkerStart24: -1,
    groupMarkerStartTemp24: -1,
    groupMarkerEnd24: -1,
    groupMarkerStart25: -1,
    groupMarkerStartTemp25: -1,
    groupMarkerEnd25: -1,
    groupMarkerStart26: -1,
    groupMarkerStartTemp26: -1,
    groupMarkerEnd26: -1,
    groupMarkerStart27: -1,
    groupMarkerStartTemp27: -1,
    groupMarkerEnd27: -1,
    groupMarkerStart28: -1,
    groupMarkerStartTemp28: -1,
    groupMarkerEnd28: -1,
    groupMarkerStart29: -1,
    groupMarkerStartTemp29: -1,
    groupMarkerEnd29: -1,
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

  // minCharsLeft
  const min = 0;
  const max = str.length - 2;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0001(i, str, context);
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
          context.groupMarkerEnd8 !== -1
            ? str.substring(context.groupMarkerStart8, context.groupMarkerEnd8)
            : undefined,
          context.groupMarkerEnd9 !== -1
            ? str.substring(context.groupMarkerStart9, context.groupMarkerEnd9)
            : undefined,
          context.groupMarkerEnd10 !== -1
            ? str.substring(
                context.groupMarkerStart10,
                context.groupMarkerEnd10
              )
            : undefined,
          context.groupMarkerEnd11 !== -1
            ? str.substring(
                context.groupMarkerStart11,
                context.groupMarkerEnd11
              )
            : undefined,
          context.groupMarkerEnd12 !== -1
            ? str.substring(
                context.groupMarkerStart12,
                context.groupMarkerEnd12
              )
            : undefined,
          context.groupMarkerEnd13 !== -1
            ? str.substring(
                context.groupMarkerStart13,
                context.groupMarkerEnd13
              )
            : undefined,
          context.groupMarkerEnd14 !== -1
            ? str.substring(
                context.groupMarkerStart14,
                context.groupMarkerEnd14
              )
            : undefined,
          context.groupMarkerEnd15 !== -1
            ? str.substring(
                context.groupMarkerStart15,
                context.groupMarkerEnd15
              )
            : undefined,
          context.groupMarkerEnd16 !== -1
            ? str.substring(
                context.groupMarkerStart16,
                context.groupMarkerEnd16
              )
            : undefined,
          context.groupMarkerEnd17 !== -1
            ? str.substring(
                context.groupMarkerStart17,
                context.groupMarkerEnd17
              )
            : undefined,
          context.groupMarkerEnd18 !== -1
            ? str.substring(
                context.groupMarkerStart18,
                context.groupMarkerEnd18
              )
            : undefined,
          context.groupMarkerEnd19 !== -1
            ? str.substring(
                context.groupMarkerStart19,
                context.groupMarkerEnd19
              )
            : undefined,
          context.groupMarkerEnd20 !== -1
            ? str.substring(
                context.groupMarkerStart20,
                context.groupMarkerEnd20
              )
            : undefined,
          context.groupMarkerEnd21 !== -1
            ? str.substring(
                context.groupMarkerStart21,
                context.groupMarkerEnd21
              )
            : undefined,
          context.groupMarkerEnd22 !== -1
            ? str.substring(
                context.groupMarkerStart22,
                context.groupMarkerEnd22
              )
            : undefined,
          context.groupMarkerEnd23 !== -1
            ? str.substring(
                context.groupMarkerStart23,
                context.groupMarkerEnd23
              )
            : undefined,
          context.groupMarkerEnd24 !== -1
            ? str.substring(
                context.groupMarkerStart24,
                context.groupMarkerEnd24
              )
            : undefined,
          context.groupMarkerEnd25 !== -1
            ? str.substring(
                context.groupMarkerStart25,
                context.groupMarkerEnd25
              )
            : undefined,
          context.groupMarkerEnd26 !== -1
            ? str.substring(
                context.groupMarkerStart26,
                context.groupMarkerEnd26
              )
            : undefined,
          context.groupMarkerEnd27 !== -1
            ? str.substring(
                context.groupMarkerStart27,
                context.groupMarkerEnd27
              )
            : undefined,
          context.groupMarkerEnd28 !== -1
            ? str.substring(
                context.groupMarkerStart28,
                context.groupMarkerEnd28
              )
            : undefined,
          context.groupMarkerEnd29 !== -1
            ? str.substring(
                context.groupMarkerStart29,
                context.groupMarkerEnd29
              )
            : undefined,
        ],
      };
    }
  }

  return null;
}

const fiber0133 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){1,...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0132 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...])?[0-9])|([0-9a-fA-F...
   *              ^
   */
  context.groupMarkerStartTemp24 = i;
  /*
   * charSequence
   * ...)?[0-9])|([0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 70) {
      if (charCode0 <= 57) {
        result0 = charCode0 >= 48;
      } else {
        result0 = charCode0 >= 65;
      }
    } else {
      if (charCode0 <= 102) {
        result0 = charCode0 >= 97;
      } else {
        result0 = false;
      }
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}:(?...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0133(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...fA-F]{0,3}:){1,4}:(?:...
   *              ^
   */
  const iAfterMatch3 = i + 1;
  if (iAfterMatch3 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch3;
  }
  /*
   * groupEndMarker
   * ...A-F]{0,3}:){1,4}:(?:2...
   *              ^
   */
  context.groupMarkerStart24 = context.groupMarkerStartTemp24;
  context.groupMarkerEnd24 = i;
  return i;
};
const fiber0131 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.(?...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.quantifierCounter9 = -1;
  return greedyQuantifier0126(i, str, context);
};
const fiber0130 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...(?:2[0-4]|1?[0-9])?[0-...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0129(i, str, context);

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
    const directFollowUpResult0 = fiber0128(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0129 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(?:2[0-4]|1?[0-9])?[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0128 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...:2[0-4]|1?[0-9])?[0-9])\....
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
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0127 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...5[0-5]|(?:2[0-4]|1?[0-9])?...
   *              ^^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 52) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0125 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.(...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck0 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck0 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue0 = (firstCharQuickCheck0 << 16) ^ secondCharQuickCheck0;

  nonBacktrackingDisjunction0: {
    if ((quickCheckValue0 & 2147450872) === 3276848) {
      const length0 = fiber0127(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction0;
      }
    }
    if ((quickCheckValue0 & 2146467824) === 3145776) {
      const length1 = fiber0130(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction0;
      }
    }
    return -1;
  }
  return greedyQuantifier0126(i, str, context);
};
const fiber0124 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|1?[0-9])?[0-9])\.(?:25[0...
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
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0123 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...){1,4}:(?:25[0-5]|(?:2[0-4]...
   *              ^^^^^^^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode2 = str.charCodeAt(i + 2);

    let result2: boolean;

    if (charCode2 <= 53) {
      result2 = charCode2 >= 48;
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
const fiber0122 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.((...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.quantifierCounter8 = -1;
  return greedyQuantifier0117(i, str, context);
};
const fiber0121 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...(?:2[0-4]|1?[0-9])?[0-...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0120(i, str, context);

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
    const directFollowUpResult0 = fiber0119(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0120 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(?:2[0-4]|1?[0-9])?[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0119 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...:2[0-4]|1?[0-9])?[0-9])\....
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
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0118 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...5[0-5]|(?:2[0-4]|1?[0-9])?...
   *              ^^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 52) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0116 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.(...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck0 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck0 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue0 = (firstCharQuickCheck0 << 16) ^ secondCharQuickCheck0;

  nonBacktrackingDisjunction0: {
    if ((quickCheckValue0 & 2147450872) === 3276848) {
      const length0 = fiber0118(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction0;
      }
    }
    if ((quickCheckValue0 & 2146467824) === 3145776) {
      const length1 = fiber0121(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction0;
      }
    }
    return -1;
  }
  return greedyQuantifier0117(i, str, context);
};
const fiber0115 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|1?[0-9])?[0-9])\.((25[0-...
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
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0114 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0-9])\.(?:25[0-5]|(?:2[0-4]...
   *              ^^^^^^^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode2 = str.charCodeAt(i + 2);

    let result2: boolean;

    if (charCode2 <= 53) {
      result2 = charCode2 >= 48;
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
const fiber0113 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)(...
   *              ^^^^^^^^^^^^^^^^^
   */
  context.quantifierCounter7 = -1;
  return greedyQuantifier0108(i, str, context);
};
const fiber0112 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1?[0-9])?[0-...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0111(i, str, context);

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
    const directFollowUpResult0 = fiber0110(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0111 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]|(2[0-4]|1?[0-9])?[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0110 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(2[0-4]|1?[0-9])?[0-9])\....
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
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0109 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(25[0-5]|(2[0-4]|1?[0-9])?...
   *              ^^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 52) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0107 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1?[...
   *              ^
   */
  context.groupMarkerStartTemp27 = i;
  /*
   * nonBacktrackingDisjunction
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3276848) {
      const length0 = fiber0109(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146467824) === 3145776) {
      const length1 = fiber0112(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...4]|1?[0-9])?[0-9])\.)...
   *              ^
   */
  context.groupMarkerStart27 = context.groupMarkerStartTemp27;
  context.groupMarkerEnd27 = i;
  return greedyQuantifier0108(i, str, context);
};
const fiber0106 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|1?[0-9])?[0-9])\.)(25[0-...
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
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0105 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...[0-9])\.((25[0-5]|(2[0-4]|1...
   *              ^^^^^^^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode2 = str.charCodeAt(i + 2);

    let result2: boolean;

    if (charCode2 <= 53) {
      result2 = charCode2 >= 48;
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
const fiber0104 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...)(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))/
   *              ^^^^^^^^^^^^^^^^^
   */
  context.quantifierCounter6 = -1;
  return greedyQuantifier0099(i, str, context);
};
const fiber0103 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1?[0-9])?[0-...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0102(i, str, context);

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
    const directFollowUpResult0 = fiber0101(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0102 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]|(2[0-4]|1?[0-9])?[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0101 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(2[0-4]|1?[0-9])?[0-9]))/
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
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0100 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(25[0-5]|(2[0-4]|1?[0-9])?...
   *              ^^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 52) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0098 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...)(25[0-5]|(2[0-4]|1?[...
   *              ^
   */
  context.groupMarkerStartTemp29 = i;
  /*
   * nonBacktrackingDisjunction
   * ...)(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))/
   *              ^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3276848) {
      const length0 = fiber0100(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146467824) === 3145776) {
      const length1 = fiber0103(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...4]|1?[0-9])?[0-9]))/
   *              ^
   */
  context.groupMarkerStart29 = context.groupMarkerStartTemp29;
  context.groupMarkerEnd29 = i;
  return greedyQuantifier0099(i, str, context);
};
const fiber0097 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|1?[0-9])?[0-9]))/
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
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0096 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...[0-9])\.)(25[0-5]|(2[0-4]|1...
   *              ^^^^^^^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode2 = str.charCodeAt(i + 2);

    let result2: boolean;

    if (charCode2 <= 53) {
      result2 = charCode2 >= 48;
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
const fiber0095 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...])?[0-9])|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}:(?:25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0132(i, str, context);

    if (wrappedResult === -1) {
      if (matches0 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches0++;

      if (matches0 === 4) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...,3}:){1,4}:(?:25[0-5]...
   *              ^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingDisjunction
   * ...3}:){1,4}:(?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.(?:25[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck2 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck2 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue2 = (firstCharQuickCheck2 << 16) ^ secondCharQuickCheck2;

  nonBacktrackingDisjunction2: {
    if ((quickCheckValue2 & 2147450879) === 3276853) {
      const length0 = fiber0123(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction2;
      }
    }
    if ((quickCheckValue2 & 2146467808) === 3145760) {
      const length1 = fiber0131(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction2;
      }
    }
    return -1;
  }
  /*
   * charSequence
   * ...9])?[0-9])\.(?:25[0-5]...
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
   * nonBacktrackingDisjunction
   * ...)?[0-9])\.(?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.((25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck4 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck4 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue4 = (firstCharQuickCheck4 << 16) ^ secondCharQuickCheck4;

  nonBacktrackingDisjunction4: {
    if ((quickCheckValue4 & 2147450879) === 3276853) {
      const length0 = fiber0114(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction4;
      }
    }
    if ((quickCheckValue4 & 2146467808) === 3145760) {
      const length1 = fiber0122(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction4;
      }
    }
    return -1;
  }
  /*
   * charSequence
   * ...9])?[0-9])\.((25[0-5]|...
   *              ^^
   */
  const iAfterMatch5 = i + 1;
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

    i = iAfterMatch5;
  }
  /*
   * groupStartMarker
   * ...)?[0-9])\.((25[0-5]|(...
   *              ^
   */
  context.groupMarkerStartTemp25 = i;
  /*
   * groupStartMarker
   * ...?[0-9])\.((25[0-5]|(2...
   *              ^
   */
  context.groupMarkerStartTemp26 = i;
  /*
   * nonBacktrackingDisjunction
   * ...?[0-9])\.((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck8 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck8 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue8 = (firstCharQuickCheck8 << 16) ^ secondCharQuickCheck8;

  nonBacktrackingDisjunction8: {
    if ((quickCheckValue8 & 2147450879) === 3276853) {
      const length0 = fiber0105(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction8;
      }
    }
    if ((quickCheckValue8 & 2146467808) === 3145760) {
      const length1 = fiber0113(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction8;
      }
      context.groupMarkerStart27 = -1;
      context.groupMarkerEnd27 = -1;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9])?[0-9])\.)(25[0-5...
   *              ^
   */
  context.groupMarkerStart26 = context.groupMarkerStartTemp26;
  context.groupMarkerEnd26 = i;
  /*
   * charSequence
   * ...9])?[0-9])\.)(25[0-5]|...
   *              ^^
   */
  const iAfterMatch10 = i + 1;
  if (iAfterMatch10 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 46;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch10;
  }
  /*
   * groupEndMarker
   * ...)?[0-9])\.)(25[0-5]|(...
   *              ^
   */
  context.groupMarkerStart25 = context.groupMarkerStartTemp25;
  context.groupMarkerEnd25 = i;
  /*
   * groupStartMarker
   * ...?[0-9])\.)(25[0-5]|(2...
   *              ^
   */
  context.groupMarkerStartTemp28 = i;
  /*
   * nonBacktrackingDisjunction
   * ...?[0-9])\.)(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck13 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck13 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue13 =
    (firstCharQuickCheck13 << 16) ^ secondCharQuickCheck13;

  nonBacktrackingDisjunction13: {
    if ((quickCheckValue13 & 2147450879) === 3276853) {
      const length0 = fiber0096(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction13;
      }
    }
    if ((quickCheckValue13 & 2146435072) === 3145728) {
      const length1 = fiber0104(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction13;
      }
      context.groupMarkerStart29 = -1;
      context.groupMarkerEnd29 = -1;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9])?[0-9]))/
   *              ^
   */
  context.groupMarkerStart28 = context.groupMarkerStartTemp28;
  context.groupMarkerEnd28 = i;
  return i;
};
const fiber0094 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...9a-zA-Z]✱|::(ffff(:00{...
   *              ^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    result1 = charCode1 === 58;

    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * quantifierStarter
   * ...-zA-Z]✱|::(ffff(:00{0,3})?:)?(?:25[0-5]...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.quantifierCounter4 = -1;
  return greedyQuantifier0089(i, str, context);
};
const fiber0093 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...-zA-Z]✱|::(ffff(:00{0...
   *              ^
   */
  context.groupMarkerStartTemp17 = i;
  /*
   * charSequence
   * ...zA-Z]✱|::(ffff(:00{0,3})...
   *              ^^^^
   */
  const iAfterMatch1 = i + 4;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 3);

    let result0: boolean;

    result0 = charCode0 === 102;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    result1 = charCode1 === 102;

    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    result2 = charCode2 === 102;

    if (!result2) {
      return -1;
    }
    const charCode3 = str.charCodeAt(i + 0);

    let result3: boolean;

    result3 = charCode3 === 102;

    if (!result3) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * quantifierStarter
   * ...]✱|::(ffff(:00{0,3})?:)?(?:25[0...
   *              ^^^^^^^^^^^
   */
  context.quantifierCounter5 = -1;
  return greedyQuantifier0091(i, str, context);
};
const fiber0092 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...::(ffff(:00{0,3})?:)?...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 48;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0090 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...]✱|::(ffff(:00{0,3})?...
   *              ^
   */
  context.groupMarkerStartTemp18 = i;
  /*
   * charSequence
   * ...✱|::(ffff(:00{0,3})?:)...
   *              ^^
   */
  const iAfterMatch1 = i + 2;
  if (iAfterMatch1 > str.length) {
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

    result1 = charCode1 === 58;

    if (!result1) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...::(ffff(:00{0,3})?:)?(?:25...
   *              ^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0092(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 3) {
        break;
      }
    }
  }
  /*
   * groupEndMarker
   * ...f(:00{0,3})?:)?(?:25[...
   *              ^
   */
  context.groupMarkerStart18 = context.groupMarkerStartTemp18;
  context.groupMarkerEnd18 = i;
  return greedyQuantifier0091(i, str, context);
};
const fiber0088 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...:00{0,3})?:)?(?:25[0-...
   *              ^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * groupEndMarker
   * ...00{0,3})?:)?(?:25[0-5...
   *              ^
   */
  context.groupMarkerStart17 = context.groupMarkerStartTemp17;
  context.groupMarkerEnd17 = i;
  return greedyQuantifier0089(i, str, context);
};
const fiber0087 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.(?...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.quantifierCounter3 = -1;
  return greedyQuantifier0082(i, str, context);
};
const fiber0086 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...(?:2[0-4]|1?[0-9])?[0-...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0085(i, str, context);

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
    const directFollowUpResult0 = fiber0084(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0085 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(?:2[0-4]|1?[0-9])?[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0084 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...:2[0-4]|1?[0-9])?[0-9])\....
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
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0083 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...5[0-5]|(?:2[0-4]|1?[0-9])?...
   *              ^^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 52) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0081 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.(...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck0 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck0 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue0 = (firstCharQuickCheck0 << 16) ^ secondCharQuickCheck0;

  nonBacktrackingDisjunction0: {
    if ((quickCheckValue0 & 2147450872) === 3276848) {
      const length0 = fiber0083(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction0;
      }
    }
    if ((quickCheckValue0 & 2146467824) === 3145776) {
      const length1 = fiber0086(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction0;
      }
    }
    return -1;
  }
  return greedyQuantifier0082(i, str, context);
};
const fiber0080 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|1?[0-9])?[0-9])\.(?:25[0...
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
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0079 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...3})?:)?(?:25[0-5]|(?:2[0-4]...
   *              ^^^^^^^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode2 = str.charCodeAt(i + 2);

    let result2: boolean;

    if (charCode2 <= 53) {
      result2 = charCode2 >= 48;
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
const fiber0078 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.((...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.quantifierCounter2 = -1;
  return greedyQuantifier0073(i, str, context);
};
const fiber0077 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...(?:2[0-4]|1?[0-9])?[0-...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0076(i, str, context);

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
    const directFollowUpResult0 = fiber0075(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0076 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(?:2[0-4]|1?[0-9])?[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0075 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...:2[0-4]|1?[0-9])?[0-9])\....
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
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0074 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...5[0-5]|(?:2[0-4]|1?[0-9])?...
   *              ^^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 52) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0072 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.(...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck0 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck0 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue0 = (firstCharQuickCheck0 << 16) ^ secondCharQuickCheck0;

  nonBacktrackingDisjunction0: {
    if ((quickCheckValue0 & 2147450872) === 3276848) {
      const length0 = fiber0074(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction0;
      }
    }
    if ((quickCheckValue0 & 2146467824) === 3145776) {
      const length1 = fiber0077(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction0;
      }
    }
    return -1;
  }
  return greedyQuantifier0073(i, str, context);
};
const fiber0071 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|1?[0-9])?[0-9])\.((25[0-...
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
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0070 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0-9])\.(?:25[0-5]|(?:2[0-4]...
   *              ^^^^^^^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode2 = str.charCodeAt(i + 2);

    let result2: boolean;

    if (charCode2 <= 53) {
      result2 = charCode2 >= 48;
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
const fiber0069 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)(...
   *              ^^^^^^^^^^^^^^^^^
   */
  context.quantifierCounter1 = -1;
  return greedyQuantifier0064(i, str, context);
};
const fiber0068 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1?[0-9])?[0-...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0067(i, str, context);

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
    const directFollowUpResult0 = fiber0066(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0067 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]|(2[0-4]|1?[0-9])?[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0066 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(2[0-4]|1?[0-9])?[0-9])\....
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
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0065 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(25[0-5]|(2[0-4]|1?[0-9])?...
   *              ^^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 52) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0063 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1?[...
   *              ^
   */
  context.groupMarkerStartTemp21 = i;
  /*
   * nonBacktrackingDisjunction
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3276848) {
      const length0 = fiber0065(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146467824) === 3145776) {
      const length1 = fiber0068(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...4]|1?[0-9])?[0-9])\.)...
   *              ^
   */
  context.groupMarkerStart21 = context.groupMarkerStartTemp21;
  context.groupMarkerEnd21 = i;
  return greedyQuantifier0064(i, str, context);
};
const fiber0062 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|1?[0-9])?[0-9])\.)(25[0-...
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
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0061 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...[0-9])\.((25[0-5]|(2[0-4]|1...
   *              ^^^^^^^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode2 = str.charCodeAt(i + 2);

    let result2: boolean;

    if (charCode2 <= 53) {
      result2 = charCode2 >= 48;
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
const fiber0060 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...)(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([0...
   *              ^^^^^^^^^^^^^^^^^
   */
  context.quantifierCounter0 = -1;
  return greedyQuantifier0055(i, str, context);
};
const fiber0059 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1?[0-9])?[0-...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0058(i, str, context);

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
    const directFollowUpResult0 = fiber0057(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0058 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]|(2[0-4]|1?[0-9])?[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0057 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(2[0-4]|1?[0-9])?[0-9])|(...
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
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0056 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(25[0-5]|(2[0-4]|1?[0-9])?...
   *              ^^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 52) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0054 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...)(25[0-5]|(2[0-4]|1?[...
   *              ^
   */
  context.groupMarkerStartTemp23 = i;
  /*
   * nonBacktrackingDisjunction
   * ...)(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([...
   *              ^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3276848) {
      const length0 = fiber0056(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146467824) === 3145776) {
      const length1 = fiber0059(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...4]|1?[0-9])?[0-9])|([...
   *              ^
   */
  context.groupMarkerStart23 = context.groupMarkerStartTemp23;
  context.groupMarkerEnd23 = i;
  return greedyQuantifier0055(i, str, context);
};
const fiber0053 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|1?[0-9])?[0-9])|([0-9a-f...
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
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0052 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...[0-9])\.)(25[0-5]|(2[0-4]|1...
   *              ^^^^^^^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode2 = str.charCodeAt(i + 2);

    let result2: boolean;

    if (charCode2 <= 53) {
      result2 = charCode2 >= 48;
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
const fiber0051 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingDisjunction
   * ...{0,3})?:)?(?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.(?:25[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck0 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck0 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue0 = (firstCharQuickCheck0 << 16) ^ secondCharQuickCheck0;

  nonBacktrackingDisjunction0: {
    if ((quickCheckValue0 & 2147450879) === 3276853) {
      const length0 = fiber0079(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction0;
      }
    }
    if ((quickCheckValue0 & 2146467808) === 3145760) {
      const length1 = fiber0087(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction0;
      }
    }
    return -1;
  }
  /*
   * charSequence
   * ...9])?[0-9])\.(?:25[0-5]...
   *              ^^
   */
  const iAfterMatch1 = i + 1;
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

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingDisjunction
   * ...)?[0-9])\.(?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.((25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck2 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck2 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue2 = (firstCharQuickCheck2 << 16) ^ secondCharQuickCheck2;

  nonBacktrackingDisjunction2: {
    if ((quickCheckValue2 & 2147450879) === 3276853) {
      const length0 = fiber0070(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction2;
      }
    }
    if ((quickCheckValue2 & 2146467808) === 3145760) {
      const length1 = fiber0078(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction2;
      }
    }
    return -1;
  }
  /*
   * charSequence
   * ...9])?[0-9])\.((25[0-5]|...
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
   * groupStartMarker
   * ...)?[0-9])\.((25[0-5]|(...
   *              ^
   */
  context.groupMarkerStartTemp19 = i;
  /*
   * groupStartMarker
   * ...?[0-9])\.((25[0-5]|(2...
   *              ^
   */
  context.groupMarkerStartTemp20 = i;
  /*
   * nonBacktrackingDisjunction
   * ...?[0-9])\.((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck6 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck6 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue6 = (firstCharQuickCheck6 << 16) ^ secondCharQuickCheck6;

  nonBacktrackingDisjunction6: {
    if ((quickCheckValue6 & 2147450879) === 3276853) {
      const length0 = fiber0061(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction6;
      }
    }
    if ((quickCheckValue6 & 2146467808) === 3145760) {
      const length1 = fiber0069(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction6;
      }
      context.groupMarkerStart21 = -1;
      context.groupMarkerEnd21 = -1;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9])?[0-9])\.)(25[0-5...
   *              ^
   */
  context.groupMarkerStart20 = context.groupMarkerStartTemp20;
  context.groupMarkerEnd20 = i;
  /*
   * charSequence
   * ...9])?[0-9])\.)(25[0-5]|...
   *              ^^
   */
  const iAfterMatch8 = i + 1;
  if (iAfterMatch8 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 46;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch8;
  }
  /*
   * groupEndMarker
   * ...)?[0-9])\.)(25[0-5]|(...
   *              ^
   */
  context.groupMarkerStart19 = context.groupMarkerStartTemp19;
  context.groupMarkerEnd19 = i;
  /*
   * groupStartMarker
   * ...?[0-9])\.)(25[0-5]|(2...
   *              ^
   */
  context.groupMarkerStartTemp22 = i;
  /*
   * nonBacktrackingDisjunction
   * ...?[0-9])\.)(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck11 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck11 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue11 =
    (firstCharQuickCheck11 << 16) ^ secondCharQuickCheck11;

  nonBacktrackingDisjunction11: {
    if ((quickCheckValue11 & 2147450879) === 3276853) {
      const length0 = fiber0052(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction11;
      }
    }
    if ((quickCheckValue11 & 2146435072) === 3145728) {
      const length1 = fiber0060(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction11;
      }
      context.groupMarkerStart23 = -1;
      context.groupMarkerEnd23 = -1;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9])?[0-9])|([0-9a-fA...
   *              ^
   */
  context.groupMarkerStart22 = context.groupMarkerStartTemp22;
  context.groupMarkerEnd22 = i;
  return i;
};
const fiber0050 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...:)|fe80:(:[0-9a-fA-F]{0,4}){0,4...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0049 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...}|:)|fe80:(:[0-9a-fA-...
   *              ^
   */
  context.groupMarkerStartTemp16 = i;
  /*
   * charSequence
   * ...|:)|fe80:(:[0-9a-fA-F...
   *              ^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0050(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 4) {
        break;
      }
    }
  }
  /*
   * groupEndMarker
   * ...fA-F]{0,4}){0,4}%[0-9...
   *              ^
   */
  context.groupMarkerStart16 = context.groupMarkerStartTemp16;
  context.groupMarkerEnd16 = i;
  return i;
};
const fiber0048 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-zA-Z][0-9a-zA-Z]✱|::(ffff(...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 90) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
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
const fiber0047 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...){1,7}|:)|fe80:(:[0-9a-fA...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 5;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 4);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 3);

    let result1: boolean;

    result1 = charCode1 === 48;

    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 2);

    let result2: boolean;

    result2 = charCode2 === 56;

    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingQuantifier
   * ...}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0049(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches1++;

      if (matches1 === 4) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...0,4}){0,4}%[0-9a-zA-Z][0-9a-zA-Z...
   *              ^^^^^^^^^^^^
   */
  const iAfterMatch2 = i + 2;
  if (iAfterMatch2 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 37;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 90) {
      if (charCode1 <= 57) {
        result1 = charCode1 >= 48;
      } else {
        result1 = charCode1 >= 65;
      }
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

    i = iAfterMatch2;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-zA-Z][0-9a-zA-Z]✱|::(ffff(:...
   *              ^^^^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0048(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  return i;
};
const fiber0046 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...,3}){1,7}|:)|fe80:(:[...
   *              ^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    i = iAfterMatch0;
  }
  return i;
};
const fiber0045 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}){1,7...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0044 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...){1,6})|:((:[0-9a-fA-...
   *              ^
   */
  context.groupMarkerStartTemp15 = i;
  /*
   * charSequence
   * ...{1,6})|:((:[0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^^
   */
  const iAfterMatch1 = i + 2;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 70) {
      if (charCode1 <= 57) {
        result1 = charCode1 >= 48;
      } else {
        result1 = charCode1 >= 65;
      }
    } else {
      if (charCode1 <= 102) {
        result1 = charCode1 >= 97;
      } else {
        result1 = false;
      }
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}){1,7}|:)|...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0045(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 3) {
        break;
      }
    }
  }
  /*
   * groupEndMarker
   * ...fA-F]{0,3}){1,7}|:)|f...
   *              ^
   */
  context.groupMarkerStart15 = context.groupMarkerStartTemp15;
  context.groupMarkerEnd15 = i;
  return i;
};
const fiber0043 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...){1,6})|:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,7}|:)|fe80:(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0044(i, str, context);

    if (wrappedResult === -1) {
      if (matches0 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches0++;

      if (matches0 === 7) {
        break;
      }
    }
  }
  return i;
};
const fiber0042 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...3}){1,6})|:((:[0-9a-f...
   *              ^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * groupStartMarker
   * ...}){1,6})|:((:[0-9a-fA...
   *              ^
   */
  context.groupMarkerStartTemp14 = i;
  /*
   * nonBacktrackingDisjunction
   * ...}){1,6})|:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,7}|:)|fe80:(:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck2 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck2 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue2 = (firstCharQuickCheck2 << 16) ^ secondCharQuickCheck2;

  nonBacktrackingDisjunction2: {
    if ((quickCheckValue2 & 2147450752) === 3801088) {
      const length0 = fiber0043(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction2;
      }
    }
    if ((quickCheckValue2 & 2147418112) === 3801088) {
      const length1 = fiber0046(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction2;
      }
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...3}){1,7}|:)|fe80:(:[0...
   *              ^
   */
  context.groupMarkerStart14 = context.groupMarkerStartTemp14;
  context.groupMarkerEnd14 = i;
  return i;
};
const fiber0041 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:((:[...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0040 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}){1,6...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0039 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...-F]{0,3}:((:[0-9a-fA-...
   *              ^
   */
  context.groupMarkerStartTemp13 = i;
  /*
   * charSequence
   * ...F]{0,3}:((:[0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^^
   */
  const iAfterMatch1 = i + 2;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 70) {
      if (charCode1 <= 57) {
        result1 = charCode1 >= 48;
      } else {
        result1 = charCode1 >= 65;
      }
    } else {
      if (charCode1 <= 102) {
        result1 = charCode1 >= 97;
      } else {
        result1 = false;
      }
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}){1,6})|:(...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0040(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 3) {
        break;
      }
    }
  }
  /*
   * groupEndMarker
   * ...fA-F]{0,3}){1,6})|:((...
   *              ^
   */
  context.groupMarkerStart13 = context.groupMarkerStartTemp13;
  context.groupMarkerEnd13 = i;
  return i;
};
const fiber0038 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...,3}){1,5}|[0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 70) {
      if (charCode0 <= 57) {
        result0 = charCode0 >= 48;
      } else {
        result0 = charCode0 >= 65;
      }
    } else {
      if (charCode0 <= 102) {
        result0 = charCode0 >= 97;
      } else {
        result0 = false;
      }
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:((:[0-9a-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0041(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches1++;

      if (matches1 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...fA-F]{0,3}:((:[0-9a-f...
   *              ^
   */
  const iAfterMatch2 = i + 1;
  if (iAfterMatch2 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch2;
  }
  /*
   * groupStartMarker
   * ...A-F]{0,3}:((:[0-9a-fA...
   *              ^
   */
  context.groupMarkerStartTemp12 = i;
  /*
   * nonBacktrackingQuantifier
   * ...-F]{0,3}:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,6})|:((:[0-9...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches4 = 0;
  while (true) {
    const wrappedResult = fiber0039(i, str, context);

    if (wrappedResult === -1) {
      if (matches4 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches4++;

      if (matches4 === 6) {
        break;
      }
    }
  }
  /*
   * groupEndMarker
   * ...0,3}){1,6})|:((:[0-9a...
   *              ^
   */
  context.groupMarkerStart12 = context.groupMarkerStartTemp12;
  context.groupMarkerEnd12 = i;
  return i;
};
const fiber0037 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){1,...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0036 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,3}){1,4}|([0-9a-fA-F...
   *              ^
   */
  context.groupMarkerStartTemp10 = i;
  /*
   * charSequence
   * ...3}){1,4}|([0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 70) {
      if (charCode0 <= 57) {
        result0 = charCode0 >= 48;
      } else {
        result0 = charCode0 >= 65;
      }
    } else {
      if (charCode0 <= 102) {
        result0 = charCode0 >= 97;
      } else {
        result0 = false;
      }
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){1,2}(:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0037(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...fA-F]{0,3}:){1,2}(:[0...
   *              ^
   */
  const iAfterMatch3 = i + 1;
  if (iAfterMatch3 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch3;
  }
  /*
   * groupEndMarker
   * ...A-F]{0,3}:){1,2}(:[0-...
   *              ^
   */
  context.groupMarkerStart10 = context.groupMarkerStartTemp10;
  context.groupMarkerEnd10 = i;
  return i;
};
const fiber0035 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}){1,5...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0034 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,3}:){1,2}(:[0-9a-fA-...
   *              ^
   */
  context.groupMarkerStartTemp11 = i;
  /*
   * charSequence
   * ...3}:){1,2}(:[0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^^
   */
  const iAfterMatch1 = i + 2;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 70) {
      if (charCode1 <= 57) {
        result1 = charCode1 >= 48;
      } else {
        result1 = charCode1 >= 65;
      }
    } else {
      if (charCode1 <= 102) {
        result1 = charCode1 >= 97;
      } else {
        result1 = false;
      }
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}){1,5}|[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0035(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 3) {
        break;
      }
    }
  }
  /*
   * groupEndMarker
   * ...fA-F]{0,3}){1,5}|[0-9...
   *              ^
   */
  context.groupMarkerStart11 = context.groupMarkerStartTemp11;
  context.groupMarkerEnd11 = i;
  return i;
};
const fiber0033 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...,3}){1,4}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,2}(:[0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0036(i, str, context);

    if (wrappedResult === -1) {
      if (matches0 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches0++;

      if (matches0 === 2) {
        break;
      }
    }
  }
  /*
   * nonBacktrackingQuantifier
   * ...,3}:){1,2}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,5}|[0-9a-fA-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0034(i, str, context);

    if (wrappedResult === -1) {
      if (matches1 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches1++;

      if (matches1 === 5) {
        break;
      }
    }
  }
  return i;
};
const fiber0032 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){1,...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0031 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,3}){1,3}|([0-9a-fA-F...
   *              ^
   */
  context.groupMarkerStartTemp8 = i;
  /*
   * charSequence
   * ...3}){1,3}|([0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 70) {
      if (charCode0 <= 57) {
        result0 = charCode0 >= 48;
      } else {
        result0 = charCode0 >= 65;
      }
    } else {
      if (charCode0 <= 102) {
        result0 = charCode0 >= 97;
      } else {
        result0 = false;
      }
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){1,3}(:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0032(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...fA-F]{0,3}:){1,3}(:[0...
   *              ^
   */
  const iAfterMatch3 = i + 1;
  if (iAfterMatch3 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch3;
  }
  /*
   * groupEndMarker
   * ...A-F]{0,3}:){1,3}(:[0-...
   *              ^
   */
  context.groupMarkerStart8 = context.groupMarkerStartTemp8;
  context.groupMarkerEnd8 = i;
  return i;
};
const fiber0030 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}){1,4...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0029 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,3}:){1,3}(:[0-9a-fA-...
   *              ^
   */
  context.groupMarkerStartTemp9 = i;
  /*
   * charSequence
   * ...3}:){1,3}(:[0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^^
   */
  const iAfterMatch1 = i + 2;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 70) {
      if (charCode1 <= 57) {
        result1 = charCode1 >= 48;
      } else {
        result1 = charCode1 >= 65;
      }
    } else {
      if (charCode1 <= 102) {
        result1 = charCode1 >= 97;
      } else {
        result1 = false;
      }
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}){1,4}|([0...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0030(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 3) {
        break;
      }
    }
  }
  /*
   * groupEndMarker
   * ...fA-F]{0,3}){1,4}|([0-...
   *              ^
   */
  context.groupMarkerStart9 = context.groupMarkerStartTemp9;
  context.groupMarkerEnd9 = i;
  return i;
};
const fiber0028 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...,3}){1,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,3}(:[0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0031(i, str, context);

    if (wrappedResult === -1) {
      if (matches0 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches0++;

      if (matches0 === 3) {
        break;
      }
    }
  }
  /*
   * nonBacktrackingQuantifier
   * ...,3}:){1,3}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,4}|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0029(i, str, context);

    if (wrappedResult === -1) {
      if (matches1 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches1++;

      if (matches1 === 4) {
        break;
      }
    }
  }
  return i;
};
const fiber0027 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){1,...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0026 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,3}){1,2}|([0-9a-fA-F...
   *              ^
   */
  context.groupMarkerStartTemp6 = i;
  /*
   * charSequence
   * ...3}){1,2}|([0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 70) {
      if (charCode0 <= 57) {
        result0 = charCode0 >= 48;
      } else {
        result0 = charCode0 >= 65;
      }
    } else {
      if (charCode0 <= 102) {
        result0 = charCode0 >= 97;
      } else {
        result0 = false;
      }
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}(:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0027(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...fA-F]{0,3}:){1,4}(:[0...
   *              ^
   */
  const iAfterMatch3 = i + 1;
  if (iAfterMatch3 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch3;
  }
  /*
   * groupEndMarker
   * ...A-F]{0,3}:){1,4}(:[0-...
   *              ^
   */
  context.groupMarkerStart6 = context.groupMarkerStartTemp6;
  context.groupMarkerEnd6 = i;
  return i;
};
const fiber0025 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}){1,3...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0024 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,3}:){1,4}(:[0-9a-fA-...
   *              ^
   */
  context.groupMarkerStartTemp7 = i;
  /*
   * charSequence
   * ...3}:){1,4}(:[0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^^
   */
  const iAfterMatch1 = i + 2;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 70) {
      if (charCode1 <= 57) {
        result1 = charCode1 >= 48;
      } else {
        result1 = charCode1 >= 65;
      }
    } else {
      if (charCode1 <= 102) {
        result1 = charCode1 >= 97;
      } else {
        result1 = false;
      }
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}){1,3}|([0...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0025(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 3) {
        break;
      }
    }
  }
  /*
   * groupEndMarker
   * ...fA-F]{0,3}){1,3}|([0-...
   *              ^
   */
  context.groupMarkerStart7 = context.groupMarkerStartTemp7;
  context.groupMarkerEnd7 = i;
  return i;
};
const fiber0023 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...,3}){1,2}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}(:[0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0026(i, str, context);

    if (wrappedResult === -1) {
      if (matches0 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches0++;

      if (matches0 === 4) {
        break;
      }
    }
  }
  /*
   * nonBacktrackingQuantifier
   * ...,3}:){1,4}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,3}|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0024(i, str, context);

    if (wrappedResult === -1) {
      if (matches1 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches1++;

      if (matches1 === 3) {
        break;
      }
    }
  }
  return i;
};
const fiber0022 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){1,...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0021 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...A-F]{0,3}|([0-9a-fA-F...
   *              ^
   */
  context.groupMarkerStartTemp4 = i;
  /*
   * charSequence
   * ...-F]{0,3}|([0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 70) {
      if (charCode0 <= 57) {
        result0 = charCode0 >= 48;
      } else {
        result0 = charCode0 >= 65;
      }
    } else {
      if (charCode0 <= 102) {
        result0 = charCode0 >= 97;
      } else {
        result0 = false;
      }
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){1,5}(:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0022(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...fA-F]{0,3}:){1,5}(:[0...
   *              ^
   */
  const iAfterMatch3 = i + 1;
  if (iAfterMatch3 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch3;
  }
  /*
   * groupEndMarker
   * ...A-F]{0,3}:){1,5}(:[0-...
   *              ^
   */
  context.groupMarkerStart4 = context.groupMarkerStartTemp4;
  context.groupMarkerEnd4 = i;
  return i;
};
const fiber0020 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}){1,2...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0019 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,3}:){1,5}(:[0-9a-fA-...
   *              ^
   */
  context.groupMarkerStartTemp5 = i;
  /*
   * charSequence
   * ...3}:){1,5}(:[0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^^
   */
  const iAfterMatch1 = i + 2;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 70) {
      if (charCode1 <= 57) {
        result1 = charCode1 >= 48;
      } else {
        result1 = charCode1 >= 65;
      }
    } else {
      if (charCode1 <= 102) {
        result1 = charCode1 >= 97;
      } else {
        result1 = false;
      }
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}){1,2}|([0...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0020(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 3) {
        break;
      }
    }
  }
  /*
   * groupEndMarker
   * ...fA-F]{0,3}){1,2}|([0-...
   *              ^
   */
  context.groupMarkerStart5 = context.groupMarkerStartTemp5;
  context.groupMarkerEnd5 = i;
  return i;
};
const fiber0018 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...A-F]{0,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,5}(:[0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0021(i, str, context);

    if (wrappedResult === -1) {
      if (matches0 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches0++;

      if (matches0 === 5) {
        break;
      }
    }
  }
  /*
   * nonBacktrackingQuantifier
   * ...,3}:){1,5}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,2}|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0019(i, str, context);

    if (wrappedResult === -1) {
      if (matches1 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches1++;

      if (matches1 === 2) {
        break;
      }
    }
  }
  return i;
};
const fiber0017 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){1,...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0016 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...}:){1,7}:|([0-9a-fA-F...
   *              ^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * charSequence
   * ...:){1,7}:|([0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 70) {
      if (charCode0 <= 57) {
        result0 = charCode0 >= 48;
      } else {
        result0 = charCode0 >= 65;
      }
    } else {
      if (charCode0 <= 102) {
        result0 = charCode0 >= 97;
      } else {
        result0 = false;
      }
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){1,6}:[0...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0017(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...fA-F]{0,3}:){1,6}:[0-...
   *              ^
   */
  const iAfterMatch3 = i + 1;
  if (iAfterMatch3 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch3;
  }
  /*
   * groupEndMarker
   * ...A-F]{0,3}:){1,6}:[0-9...
   *              ^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  return i;
};
const fiber0015 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}|([0-...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0014 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...}:){1,7}:|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,6}:[0-9a-fA-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0016(i, str, context);

    if (wrappedResult === -1) {
      if (matches0 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches0++;

      if (matches0 === 6) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...,3}:){1,6}:[0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^^
   */
  const iAfterMatch1 = i + 2;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 70) {
      if (charCode1 <= 57) {
        result1 = charCode1 >= 48;
      } else {
        result1 = charCode1 >= 65;
      }
    } else {
      if (charCode1 <= 102) {
        result1 = charCode1 >= 97;
      } else {
        result1 = false;
      }
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0015(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 3) {
        break;
      }
    }
  }
  return i;
};
const fiber0013 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){1,...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0012 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...A-F]{0,3}|([0-9a-fA-F...
   *              ^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * charSequence
   * ...-F]{0,3}|([0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 70) {
      if (charCode0 <= 57) {
        result0 = charCode0 >= 48;
      } else {
        result0 = charCode0 >= 65;
      }
    } else {
      if (charCode0 <= 102) {
        result0 = charCode0 >= 97;
      } else {
        result0 = false;
      }
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){1,7}:|(...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0013(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...fA-F]{0,3}:){1,7}:|([...
   *              ^
   */
  const iAfterMatch3 = i + 1;
  if (iAfterMatch3 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch3;
  }
  /*
   * groupEndMarker
   * ...A-F]{0,3}:){1,7}:|([0...
   *              ^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  return i;
};
const fiber0011 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...A-F]{0,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,7}:|([0-9a-f...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0012(i, str, context);

    if (wrappedResult === -1) {
      if (matches0 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches0++;

      if (matches0 === 7) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...,3}:){1,7}:|([0-9a-fA...
   *              ^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  return i;
};
const fiber0010 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /([0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0008 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0007 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:([0-...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:)[0-...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}|([0-...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
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
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * /([0-9a-fA-F][0-9a-fA-F...
   *   ^^^^^^^^^^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 70) {
      if (charCode0 <= 57) {
        result0 = charCode0 >= 48;
      } else {
        result0 = charCode0 >= 65;
      }
    } else {
      if (charCode0 <= 102) {
        result0 = charCode0 >= 97;
      } else {
        result0 = false;
      }
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingQuantifier
   * /([0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9a-fA-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0010(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches1++;

      if (matches1 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...fA-F]{0,3}:[0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^^
   */
  const iAfterMatch2 = i + 2;
  if (iAfterMatch2 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 70) {
      if (charCode1 <= 57) {
        result1 = charCode1 >= 48;
      } else {
        result1 = charCode1 >= 65;
      }
    } else {
      if (charCode1 <= 102) {
        result1 = charCode1 >= 97;
      } else {
        result1 = false;
      }
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch2;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9a-fA-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches3 = 0;
  while (true) {
    const wrappedResult = fiber0009(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches3++;

      if (matches3 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...fA-F]{0,3}:[0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^^
   */
  const iAfterMatch4 = i + 2;
  if (iAfterMatch4 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 70) {
      if (charCode1 <= 57) {
        result1 = charCode1 >= 48;
      } else {
        result1 = charCode1 >= 65;
      }
    } else {
      if (charCode1 <= 102) {
        result1 = charCode1 >= 97;
      } else {
        result1 = false;
      }
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch4;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9a-fA-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches5 = 0;
  while (true) {
    const wrappedResult = fiber0008(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches5++;

      if (matches5 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...fA-F]{0,3}:[0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^^
   */
  const iAfterMatch6 = i + 2;
  if (iAfterMatch6 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 70) {
      if (charCode1 <= 57) {
        result1 = charCode1 >= 48;
      } else {
        result1 = charCode1 >= 65;
      }
    } else {
      if (charCode1 <= 102) {
        result1 = charCode1 >= 97;
      } else {
        result1 = false;
      }
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch6;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9a-fA-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches7 = 0;
  while (true) {
    const wrappedResult = fiber0007(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches7++;

      if (matches7 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...fA-F]{0,3}:[0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^^
   */
  const iAfterMatch8 = i + 2;
  if (iAfterMatch8 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 70) {
      if (charCode1 <= 57) {
        result1 = charCode1 >= 48;
      } else {
        result1 = charCode1 >= 65;
      }
    } else {
      if (charCode1 <= 102) {
        result1 = charCode1 >= 97;
      } else {
        result1 = false;
      }
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch8;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9a-fA-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches9 = 0;
  while (true) {
    const wrappedResult = fiber0006(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches9++;

      if (matches9 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...fA-F]{0,3}:[0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^^
   */
  const iAfterMatch10 = i + 2;
  if (iAfterMatch10 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 70) {
      if (charCode1 <= 57) {
        result1 = charCode1 >= 48;
      } else {
        result1 = charCode1 >= 65;
      }
    } else {
      if (charCode1 <= 102) {
        result1 = charCode1 >= 97;
      } else {
        result1 = false;
      }
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch10;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches11 = 0;
  while (true) {
    const wrappedResult = fiber0005(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches11++;

      if (matches11 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...fA-F]{0,3}:([0-9a-fA-...
   *              ^
   */
  const iAfterMatch12 = i + 1;
  if (iAfterMatch12 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch12;
  }
  /*
   * groupStartMarker
   * ...A-F]{0,3}:([0-9a-fA-F...
   *              ^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * charSequence
   * ...-F]{0,3}:([0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^
   */
  const iAfterMatch14 = i + 1;
  if (iAfterMatch14 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 70) {
      if (charCode0 <= 57) {
        result0 = charCode0 >= 48;
      } else {
        result0 = charCode0 >= 65;
      }
    } else {
      if (charCode0 <= 102) {
        result0 = charCode0 >= 97;
      } else {
        result0 = false;
      }
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch14;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:)[0-9a-fA...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches15 = 0;
  while (true) {
    const wrappedResult = fiber0004(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches15++;

      if (matches15 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...fA-F]{0,3}:)[0-9a-fA-...
   *              ^
   */
  const iAfterMatch16 = i + 1;
  if (iAfterMatch16 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch16;
  }
  /*
   * groupEndMarker
   * ...A-F]{0,3}:)[0-9a-fA-F...
   *              ^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * charSequence
   * ...-F]{0,3}:)[0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^
   */
  const iAfterMatch18 = i + 1;
  if (iAfterMatch18 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 70) {
      if (charCode0 <= 57) {
        result0 = charCode0 >= 48;
      } else {
        result0 = charCode0 >= 65;
      }
    } else {
      if (charCode0 <= 102) {
        result0 = charCode0 >= 97;
      } else {
        result0 = false;
      }
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch18;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches19 = 0;
  while (true) {
    const wrappedResult = fiber0003(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches19++;

      if (matches19 === 3) {
        break;
      }
    }
  }
  return i;
};
const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /([0-9a-fA-F...
   *  ^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * nonBacktrackingDisjunction
   * /([0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9a-fA-F][0-9a-fA-F]{0,3}:[0-9a-fA-F][0-9a-fA-F]{0,3}:([0-9a-fA-F][0-9a-fA-F]{0,3}:)[0-9a-fA-F][0-9a-fA-F]{0,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,7}:|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,6}:[0-9a-fA-F][0-9a-fA-F]{0,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,5}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,2}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,3}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,4}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,2}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,5}|[0-9a-fA-F][0-9a-fA-F]{0,3}:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,6})|:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z][0-9a-zA-Z]✱|::(ffff(:00{0,3})?:)?(?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.(?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}:(?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.(?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2139127680) === 0) {
      const length0 = fiber0002(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
      context.groupMarkerStart1 = -1;
      context.groupMarkerEnd1 = -1;
    }
    if ((quickCheckValue1 & 2139127680) === 0) {
      const length1 = fiber0011(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2139127680) === 0) {
      const length2 = fiber0014(i, str, context);
      if (length2 !== -1) {
        i = length2;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2139127680) === 0) {
      const length3 = fiber0018(i, str, context);
      if (length3 !== -1) {
        i = length3;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2139127680) === 0) {
      const length4 = fiber0023(i, str, context);
      if (length4 !== -1) {
        i = length4;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2139127680) === 0) {
      const length5 = fiber0028(i, str, context);
      if (length5 !== -1) {
        i = length5;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2139127680) === 0) {
      const length6 = fiber0033(i, str, context);
      if (length6 !== -1) {
        i = length6;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2139127680) === 0) {
      const length7 = fiber0038(i, str, context);
      if (length7 !== -1) {
        i = length7;
        break nonBacktrackingDisjunction1;
      }
      context.groupMarkerStart12 = -1;
      context.groupMarkerEnd12 = -1;
    }
    if ((quickCheckValue1 & 2147450879) === 3801146) {
      const length8 = fiber0042(i, str, context);
      if (length8 !== -1) {
        i = length8;
        break nonBacktrackingDisjunction1;
      }
      context.groupMarkerStart14 = -1;
      context.groupMarkerEnd14 = -1;
    }
    if ((quickCheckValue1 & 2147450879) === 6684773) {
      const length9 = fiber0047(i, str, context);
      if (length9 !== -1) {
        i = length9;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2147450879) === 3801146) {
      const length10 = fiber0094(i, str, context);
      if (length10 !== -1) {
        i = length10;
        break nonBacktrackingDisjunction1;
      }
      context.groupMarkerStart17 = -1;
      context.groupMarkerEnd17 = -1;
      context.groupMarkerStart18 = -1;
      context.groupMarkerEnd18 = -1;
      context.groupMarkerStart19 = -1;
      context.groupMarkerEnd19 = -1;
      context.groupMarkerStart20 = -1;
      context.groupMarkerEnd20 = -1;
      context.groupMarkerStart22 = -1;
      context.groupMarkerEnd22 = -1;
    }
    if ((quickCheckValue1 & 2139127680) === 0) {
      const length11 = fiber0095(i, str, context);
      if (length11 !== -1) {
        i = length11;
        break nonBacktrackingDisjunction1;
      }
      context.groupMarkerStart25 = -1;
      context.groupMarkerEnd25 = -1;
      context.groupMarkerStart26 = -1;
      context.groupMarkerEnd26 = -1;
      context.groupMarkerStart28 = -1;
      context.groupMarkerEnd28 = -1;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...9])?[0-9]))/
   *              ^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return i;
};

/*
 * ...)(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([0...
 *              ^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0055 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  if (context.quantifierCounter0 !== 1) {
    const groupMarkerStartCopy23 = context.groupMarkerStart23;
    const groupMarkerEndCopy23 = context.groupMarkerEnd23;
    const tryDeeperResult = fiber0054(start, str, context);
    if (tryDeeperResult !== -1) {
      // we actually were able to go deeper, nice!
      return tryDeeperResult;
    }

    // recursion failed, reset groups
    context.groupMarkerStart23 = groupMarkerStartCopy23;
    context.groupMarkerEnd23 = groupMarkerEndCopy23;
  }

  return fiber0053(start, str, context);
};
/*
 * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)(...
 *              ^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0064 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (context.quantifierCounter1 !== 1) {
    const groupMarkerStartCopy21 = context.groupMarkerStart21;
    const groupMarkerEndCopy21 = context.groupMarkerEnd21;
    const tryDeeperResult = fiber0063(start, str, context);
    if (tryDeeperResult !== -1) {
      // we actually were able to go deeper, nice!
      return tryDeeperResult;
    }

    // recursion failed, reset groups
    context.groupMarkerStart21 = groupMarkerStartCopy21;
    context.groupMarkerEnd21 = groupMarkerEndCopy21;
  }

  return fiber0062(start, str, context);
};
/*
 * ...?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.((...
 *              ^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0073 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter2++;

  if (context.quantifierCounter2 !== 1) {
    const tryDeeperResult = fiber0072(start, str, context);
    if (tryDeeperResult !== -1) {
      // we actually were able to go deeper, nice!
      return tryDeeperResult;
    }

    // recursion failed, reset groups
  }

  return fiber0071(start, str, context);
};
/*
 * ...?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.(?...
 *              ^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0082 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter3++;

  if (context.quantifierCounter3 !== 1) {
    const tryDeeperResult = fiber0081(start, str, context);
    if (tryDeeperResult !== -1) {
      // we actually were able to go deeper, nice!
      return tryDeeperResult;
    }

    // recursion failed, reset groups
  }

  return fiber0080(start, str, context);
};
/*
 * ...-zA-Z]✱|::(ffff(:00{0,3})?:)?(?:25[0-5]...
 *              ^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0089 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter4++;

  if (context.quantifierCounter4 !== 1) {
    const groupMarkerStartCopy17 = context.groupMarkerStart17;
    const groupMarkerEndCopy17 = context.groupMarkerEnd17;
    const groupMarkerStartCopy18 = context.groupMarkerStart18;
    const groupMarkerEndCopy18 = context.groupMarkerEnd18;
    const tryDeeperResult = fiber0093(start, str, context);
    if (tryDeeperResult !== -1) {
      // we actually were able to go deeper, nice!
      return tryDeeperResult;
    }

    // recursion failed, reset groups
    context.groupMarkerStart17 = groupMarkerStartCopy17;
    context.groupMarkerEnd17 = groupMarkerEndCopy17;
    context.groupMarkerStart18 = groupMarkerStartCopy18;
    context.groupMarkerEnd18 = groupMarkerEndCopy18;
  }

  return fiber0051(start, str, context);
};
/*
 * ...]✱|::(ffff(:00{0,3})?:)?(?:25[0...
 *              ^^^^^^^^^^^
 */
const greedyQuantifier0091 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter5++;

  if (context.quantifierCounter5 !== 1) {
    const groupMarkerStartCopy18 = context.groupMarkerStart18;
    const groupMarkerEndCopy18 = context.groupMarkerEnd18;
    const tryDeeperResult = fiber0090(start, str, context);
    if (tryDeeperResult !== -1) {
      // we actually were able to go deeper, nice!
      return tryDeeperResult;
    }

    // recursion failed, reset groups
    context.groupMarkerStart18 = groupMarkerStartCopy18;
    context.groupMarkerEnd18 = groupMarkerEndCopy18;
  }

  return fiber0088(start, str, context);
};
/*
 * ...)(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))/
 *              ^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0099 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter6++;

  if (context.quantifierCounter6 !== 1) {
    const groupMarkerStartCopy29 = context.groupMarkerStart29;
    const groupMarkerEndCopy29 = context.groupMarkerEnd29;
    const tryDeeperResult = fiber0098(start, str, context);
    if (tryDeeperResult !== -1) {
      // we actually were able to go deeper, nice!
      return tryDeeperResult;
    }

    // recursion failed, reset groups
    context.groupMarkerStart29 = groupMarkerStartCopy29;
    context.groupMarkerEnd29 = groupMarkerEndCopy29;
  }

  return fiber0097(start, str, context);
};
/*
 * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)(...
 *              ^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0108 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter7++;

  if (context.quantifierCounter7 !== 1) {
    const groupMarkerStartCopy27 = context.groupMarkerStart27;
    const groupMarkerEndCopy27 = context.groupMarkerEnd27;
    const tryDeeperResult = fiber0107(start, str, context);
    if (tryDeeperResult !== -1) {
      // we actually were able to go deeper, nice!
      return tryDeeperResult;
    }

    // recursion failed, reset groups
    context.groupMarkerStart27 = groupMarkerStartCopy27;
    context.groupMarkerEnd27 = groupMarkerEndCopy27;
  }

  return fiber0106(start, str, context);
};
/*
 * ...?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.((...
 *              ^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0117 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter8++;

  if (context.quantifierCounter8 !== 1) {
    const tryDeeperResult = fiber0116(start, str, context);
    if (tryDeeperResult !== -1) {
      // we actually were able to go deeper, nice!
      return tryDeeperResult;
    }

    // recursion failed, reset groups
  }

  return fiber0115(start, str, context);
};
/*
 * ...?:25[0-5]|(?:2[0-4]|1?[0-9])?[0-9])\.(?...
 *              ^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0126 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter9++;

  if (context.quantifierCounter9 !== 1) {
    const tryDeeperResult = fiber0125(start, str, context);
    if (tryDeeperResult !== -1) {
      // we actually were able to go deeper, nice!
      return tryDeeperResult;
    }

    // recursion failed, reset groups
  }

  return fiber0124(start, str, context);
};
