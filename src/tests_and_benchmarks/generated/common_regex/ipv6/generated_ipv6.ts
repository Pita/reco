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
  quantifierCounter10: number;
  quantifierCounter11: number;
  quantifierCounter12: number;
  quantifierCounter13: number;
  quantifierCounter14: number;
  quantifierCounter15: number;
  quantifierCounter16: number;
  quantifierCounter17: number;
  quantifierCounter18: number;
  quantifierCounter19: number;
  quantifierCounter20: number;
  quantifierCounter21: number;
  quantifierCounter22: number;
  quantifierCounter23: number;
  quantifierCounter24: number;
  quantifierCounter25: number;
  quantifierCounter26: number;
  quantifierCounter27: number;
  quantifierCounter28: number;
  quantifierCounter29: number;
  quantifierCounter30: number;
  quantifierCounter31: number;
  quantifierCounter32: number;
  quantifierCounter33: number;
  quantifierCounter34: number;
  quantifierCounter35: number;
  quantifierCounter36: number;
  quantifierCounter37: number;
  quantifierCounter38: number;
  quantifierCounter39: number;
  quantifierCounter40: number;
  quantifierCounter41: number;
  quantifierCounter42: number;
  quantifierCounter43: number;
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
    quantifierCounter10: -1,
    quantifierCounter11: -1,
    quantifierCounter12: -1,
    quantifierCounter13: -1,
    quantifierCounter14: -1,
    quantifierCounter15: -1,
    quantifierCounter16: -1,
    quantifierCounter17: -1,
    quantifierCounter18: -1,
    quantifierCounter19: -1,
    quantifierCounter20: -1,
    quantifierCounter21: -1,
    quantifierCounter22: -1,
    quantifierCounter23: -1,
    quantifierCounter24: -1,
    quantifierCounter25: -1,
    quantifierCounter26: -1,
    quantifierCounter27: -1,
    quantifierCounter28: -1,
    quantifierCounter29: -1,
    quantifierCounter30: -1,
    quantifierCounter31: -1,
    quantifierCounter32: -1,
    quantifierCounter33: -1,
    quantifierCounter34: -1,
    quantifierCounter35: -1,
    quantifierCounter36: -1,
    quantifierCounter37: -1,
    quantifierCounter38: -1,
    quantifierCounter39: -1,
    quantifierCounter40: -1,
    quantifierCounter41: -1,
    quantifierCounter42: -1,
    quantifierCounter43: -1,
  };

  // minCharsLeft
  const min = 0;
  const max = str.length - 2;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0223(i, str, context);
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

const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  return fiber0001(i, str, context);
};
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...,4}:){7,7}[0-9a-fA-F]{1,4}|([0-...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
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
   * charOrSet
   * ...fA-F]{1,4}:){7,7}[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * quantifierStarter
   * ...,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^
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
   * /(([0-9a-fA-F]{1,4}:){7,...
   *    ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
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
   * ...fA-F]{1,4}:){7,7}[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * groupStartMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * quantifierStarter
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
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
   * /(([0-9a-fA-F]{1,4}:){7,...
   *    ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
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
   * ...fA-F]{1,4}:){7,7}[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * groupStartMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * quantifierStarter
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0010 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0010(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0010;

  return cursorAfterQuantifier;
};
const fiber0012 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /(([0-9a-fA-F]{1,4}:){7,...
   *    ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
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
   * charOrSet
   * ...fA-F]{1,4}:){7,7}[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * groupStartMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * quantifierStarter
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0013 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0013(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0013;

  return cursorAfterQuantifier;
};
const fiber0015 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /(([0-9a-fA-F]{1,4}:){7,...
   *    ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0016(i, str, context);
};
const fiber0017 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...fA-F]{1,4}:){7,7}[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * groupStartMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * quantifierStarter
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0016 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0016(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0016;

  return cursorAfterQuantifier;
};
const fiber0018 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /(([0-9a-fA-F]{1,4}:){7,...
   *    ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0019(i, str, context);
};
const fiber0020 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...fA-F]{1,4}:){7,7}[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * groupStartMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * quantifierStarter
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0019 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0019(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0019;

  return cursorAfterQuantifier;
};
const fiber0021 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /(([0-9a-fA-F]{1,4}:){7,...
   *    ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
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
   * charOrSet
   * ...fA-F]{1,4}:){7,7}[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * groupStartMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * quantifierStarter
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0022 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0022(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0022;

  return cursorAfterQuantifier;
};
const fiber0024 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /(([0-9a-fA-F]{1,4}:){7,...
   *    ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0025(i, str, context);
};
const fiber0026 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * quantifierStarter
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0025 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0025(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0025;

  return cursorAfterQuantifier;
};
const fiber0027 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...,4}:){1,7}:|([0-9a-fA...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0001(i, str, context);
};
const fiber0028 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...fA-F]{1,4}:){1,7}:|([...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...A-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  return greedyQuantifier0029(i, str, context);
};
const fiber0030 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-F]{1,4}|([0-9a-fA-F]{1,4}:){1,...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0031(i, str, context);
};
const fiber0032 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...A-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * quantifierStarter
   * ...-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|(...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0031 = context.quantifierCounter3;
  context.quantifierCounter3 = -1;
  const cursorAfterQuantifier = greedyQuantifier0031(i, str, context);
  context.quantifierCounter3 = matchCountCopygreedyQuantifier0031;

  return cursorAfterQuantifier;
};
const fiber0033 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...A-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-f...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0029 = context.quantifierCounter2;
  context.quantifierCounter2 = -1;
  const cursorAfterQuantifier = greedyQuantifier0029(i, str, context);
  context.quantifierCounter2 = matchCountCopygreedyQuantifier0029;

  return cursorAfterQuantifier;
};
const fiber0034 = (i: number, str: string, context: Context): number => {
  return fiber0001(i, str, context);
};
const fiber0035 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...4}:){1,6}:[0-9a-fA-F]{1,4}|([0-...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0036(i, str, context);
};
const fiber0037 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...,4}:){1,6}:[0-9a-fA-F...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * quantifierStarter
   * ...4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0036 = context.quantifierCounter4;
  context.quantifierCounter4 = -1;
  const cursorAfterQuantifier = greedyQuantifier0036(i, str, context);
  context.quantifierCounter4 = matchCountCopygreedyQuantifier0036;

  return cursorAfterQuantifier;
};
const fiber0038 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...fA-F]{1,4}:){1,6}:[0-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  return greedyQuantifier0039(i, str, context);
};
const fiber0040 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...:){1,7}:|([0-9a-fA-F]{1,4}:){1,...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0041(i, str, context);
};
const fiber0042 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * quantifierStarter
   * ...:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0041 = context.quantifierCounter6;
  context.quantifierCounter6 = -1;
  const cursorAfterQuantifier = greedyQuantifier0041(i, str, context);
  context.quantifierCounter6 = matchCountCopygreedyQuantifier0041;

  return cursorAfterQuantifier;
};
const fiber0043 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0039 = context.quantifierCounter5;
  context.quantifierCounter5 = -1;
  const cursorAfterQuantifier = greedyQuantifier0039(i, str, context);
  context.quantifierCounter5 = matchCountCopygreedyQuantifier0039;

  return cursorAfterQuantifier;
};
const fiber0044 = (i: number, str: string, context: Context): number => {
  return fiber0001(i, str, context);
};
const fiber0045 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart5 = context.groupMarkerStartTemp5;
  context.groupMarkerEnd5 = i;
  return greedyQuantifier0046(i, str, context);
};
const fiber0047 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}:){1,5}(:[0-9a-fA-F]{1,4}){1,2...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0048(i, str, context);
};
const fiber0049 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp5 = i;
  /*
   * charOrSet
   * ...4}:){1,5}(:[0-9a-fA-F...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 58;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * quantifierStarter
   * ...}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0048 = context.quantifierCounter8;
  context.quantifierCounter8 = -1;
  const cursorAfterQuantifier = greedyQuantifier0048(i, str, context);
  context.quantifierCounter8 = matchCountCopygreedyQuantifier0048;

  return cursorAfterQuantifier;
};
const fiber0050 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0046 = context.quantifierCounter7;
  context.quantifierCounter7 = -1;
  const cursorAfterQuantifier = greedyQuantifier0046(i, str, context);
  context.quantifierCounter7 = matchCountCopygreedyQuantifier0046;

  return cursorAfterQuantifier;
};
const fiber0051 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...fA-F]{1,4}:){1,5}(:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...A-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart4 = context.groupMarkerStartTemp4;
  context.groupMarkerEnd4 = i;
  return greedyQuantifier0052(i, str, context);
};
const fiber0053 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-F]{1,4}|([0-9a-fA-F]{1,4}:){1,...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0054(i, str, context);
};
const fiber0055 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...A-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp4 = i;
  /*
   * quantifierStarter
   * ...-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0054 = context.quantifierCounter10;
  context.quantifierCounter10 = -1;
  const cursorAfterQuantifier = greedyQuantifier0054(i, str, context);
  context.quantifierCounter10 = matchCountCopygreedyQuantifier0054;

  return cursorAfterQuantifier;
};
const fiber0056 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...A-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0052 = context.quantifierCounter9;
  context.quantifierCounter9 = -1;
  const cursorAfterQuantifier = greedyQuantifier0052(i, str, context);
  context.quantifierCounter9 = matchCountCopygreedyQuantifier0052;

  return cursorAfterQuantifier;
};
const fiber0057 = (i: number, str: string, context: Context): number => {
  return fiber0001(i, str, context);
};
const fiber0058 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart7 = context.groupMarkerStartTemp7;
  context.groupMarkerEnd7 = i;
  return greedyQuantifier0059(i, str, context);
};
const fiber0060 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}:){1,4}(:[0-9a-fA-F]{1,4}){1,3...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0061(i, str, context);
};
const fiber0062 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp7 = i;
  /*
   * charOrSet
   * ...4}:){1,4}(:[0-9a-fA-F...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 58;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * quantifierStarter
   * ...}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0061 = context.quantifierCounter12;
  context.quantifierCounter12 = -1;
  const cursorAfterQuantifier = greedyQuantifier0061(i, str, context);
  context.quantifierCounter12 = matchCountCopygreedyQuantifier0061;

  return cursorAfterQuantifier;
};
const fiber0063 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0059 = context.quantifierCounter11;
  context.quantifierCounter11 = -1;
  const cursorAfterQuantifier = greedyQuantifier0059(i, str, context);
  context.quantifierCounter11 = matchCountCopygreedyQuantifier0059;

  return cursorAfterQuantifier;
};
const fiber0064 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...fA-F]{1,4}:){1,4}(:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart6 = context.groupMarkerStartTemp6;
  context.groupMarkerEnd6 = i;
  return greedyQuantifier0065(i, str, context);
};
const fiber0066 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...4}){1,2}|([0-9a-fA-F]{1,4}:){1,...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0067(i, str, context);
};
const fiber0068 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp6 = i;
  /*
   * quantifierStarter
   * ...4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0067 = context.quantifierCounter14;
  context.quantifierCounter14 = -1;
  const cursorAfterQuantifier = greedyQuantifier0067(i, str, context);
  context.quantifierCounter14 = matchCountCopygreedyQuantifier0067;

  return cursorAfterQuantifier;
};
const fiber0069 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0065 = context.quantifierCounter13;
  context.quantifierCounter13 = -1;
  const cursorAfterQuantifier = greedyQuantifier0065(i, str, context);
  context.quantifierCounter13 = matchCountCopygreedyQuantifier0065;

  return cursorAfterQuantifier;
};
const fiber0070 = (i: number, str: string, context: Context): number => {
  return fiber0001(i, str, context);
};
const fiber0071 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart9 = context.groupMarkerStartTemp9;
  context.groupMarkerEnd9 = i;
  return greedyQuantifier0072(i, str, context);
};
const fiber0073 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}:){1,3}(:[0-9a-fA-F]{1,4}){1,4...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0074(i, str, context);
};
const fiber0075 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp9 = i;
  /*
   * charOrSet
   * ...4}:){1,3}(:[0-9a-fA-F...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 58;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * quantifierStarter
   * ...}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0074 = context.quantifierCounter16;
  context.quantifierCounter16 = -1;
  const cursorAfterQuantifier = greedyQuantifier0074(i, str, context);
  context.quantifierCounter16 = matchCountCopygreedyQuantifier0074;

  return cursorAfterQuantifier;
};
const fiber0076 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0072 = context.quantifierCounter15;
  context.quantifierCounter15 = -1;
  const cursorAfterQuantifier = greedyQuantifier0072(i, str, context);
  context.quantifierCounter15 = matchCountCopygreedyQuantifier0072;

  return cursorAfterQuantifier;
};
const fiber0077 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...fA-F]{1,4}:){1,3}(:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart8 = context.groupMarkerStartTemp8;
  context.groupMarkerEnd8 = i;
  return greedyQuantifier0078(i, str, context);
};
const fiber0079 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...4}){1,3}|([0-9a-fA-F]{1,4}:){1,...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0080(i, str, context);
};
const fiber0081 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp8 = i;
  /*
   * quantifierStarter
   * ...4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0080 = context.quantifierCounter18;
  context.quantifierCounter18 = -1;
  const cursorAfterQuantifier = greedyQuantifier0080(i, str, context);
  context.quantifierCounter18 = matchCountCopygreedyQuantifier0080;

  return cursorAfterQuantifier;
};
const fiber0082 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0078 = context.quantifierCounter17;
  context.quantifierCounter17 = -1;
  const cursorAfterQuantifier = greedyQuantifier0078(i, str, context);
  context.quantifierCounter17 = matchCountCopygreedyQuantifier0078;

  return cursorAfterQuantifier;
};
const fiber0083 = (i: number, str: string, context: Context): number => {
  return fiber0001(i, str, context);
};
const fiber0084 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart11 = context.groupMarkerStartTemp11;
  context.groupMarkerEnd11 = i;
  return greedyQuantifier0085(i, str, context);
};
const fiber0086 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}:){1,2}(:[0-9a-fA-F]{1,4}){1,5...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0087(i, str, context);
};
const fiber0088 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp11 = i;
  /*
   * charOrSet
   * ...4}:){1,2}(:[0-9a-fA-F...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 58;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * quantifierStarter
   * ...}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0087 = context.quantifierCounter20;
  context.quantifierCounter20 = -1;
  const cursorAfterQuantifier = greedyQuantifier0087(i, str, context);
  context.quantifierCounter20 = matchCountCopygreedyQuantifier0087;

  return cursorAfterQuantifier;
};
const fiber0089 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0085 = context.quantifierCounter19;
  context.quantifierCounter19 = -1;
  const cursorAfterQuantifier = greedyQuantifier0085(i, str, context);
  context.quantifierCounter19 = matchCountCopygreedyQuantifier0085;

  return cursorAfterQuantifier;
};
const fiber0090 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...fA-F]{1,4}:){1,2}(:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart10 = context.groupMarkerStartTemp10;
  context.groupMarkerEnd10 = i;
  return greedyQuantifier0091(i, str, context);
};
const fiber0092 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...4}){1,4}|([0-9a-fA-F]{1,4}:){1,...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0093(i, str, context);
};
const fiber0094 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp10 = i;
  /*
   * quantifierStarter
   * ...4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0093 = context.quantifierCounter22;
  context.quantifierCounter22 = -1;
  const cursorAfterQuantifier = greedyQuantifier0093(i, str, context);
  context.quantifierCounter22 = matchCountCopygreedyQuantifier0093;

  return cursorAfterQuantifier;
};
const fiber0095 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0091 = context.quantifierCounter21;
  context.quantifierCounter21 = -1;
  const cursorAfterQuantifier = greedyQuantifier0091(i, str, context);
  context.quantifierCounter21 = matchCountCopygreedyQuantifier0091;

  return cursorAfterQuantifier;
};
const fiber0096 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...A-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart12 = context.groupMarkerStartTemp12;
  context.groupMarkerEnd12 = i;
  return fiber0001(i, str, context);
};
const fiber0097 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart13 = context.groupMarkerStartTemp13;
  context.groupMarkerEnd13 = i;
  return greedyQuantifier0098(i, str, context);
};
const fiber0099 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]{1,4}:((:[0-9a-fA-F]{1,4}){1,6...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0100(i, str, context);
};
const fiber0101 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp13 = i;
  /*
   * charOrSet
   * ...F]{1,4}:((:[0-9a-fA-F...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 58;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * quantifierStarter
   * ...]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:(...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0100 = context.quantifierCounter24;
  context.quantifierCounter24 = -1;
  const cursorAfterQuantifier = greedyQuantifier0100(i, str, context);
  context.quantifierCounter24 = matchCountCopygreedyQuantifier0100;

  return cursorAfterQuantifier;
};
const fiber0102 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...fA-F]{1,4}:((:[0-9a-f...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...A-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp12 = i;
  /*
   * quantifierStarter
   * ...-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0098 = context.quantifierCounter23;
  context.quantifierCounter23 = -1;
  const cursorAfterQuantifier = greedyQuantifier0098(i, str, context);
  context.quantifierCounter23 = matchCountCopygreedyQuantifier0098;

  return cursorAfterQuantifier;
};
const fiber0103 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...,4}){1,5}|[0-9a-fA-F]{1,4}:((:[...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0104(i, str, context);
};
const fiber0105 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0104 = context.quantifierCounter25;
  context.quantifierCounter25 = -1;
  const cursorAfterQuantifier = greedyQuantifier0104(i, str, context);
  context.quantifierCounter25 = matchCountCopygreedyQuantifier0104;

  return cursorAfterQuantifier;
};
const fiber0106 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart14 = context.groupMarkerStartTemp14;
  context.groupMarkerEnd14 = i;
  return fiber0001(i, str, context);
};
const fiber0107 = (i: number, str: string, context: Context): number => {
  return fiber0106(i, str, context);
};
const fiber0108 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|f...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart15 = context.groupMarkerStartTemp15;
  context.groupMarkerEnd15 = i;
  return greedyQuantifier0109(i, str, context);
};
const fiber0110 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...1,6})|:((:[0-9a-fA-F]{1,4}){1,7...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0111(i, str, context);
};
const fiber0112 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|f...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp15 = i;
  /*
   * charOrSet
   * ...{1,6})|:((:[0-9a-fA-F...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 58;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * quantifierStarter
   * ...1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0111 = context.quantifierCounter27;
  context.quantifierCounter27 = -1;
  const cursorAfterQuantifier = greedyQuantifier0111(i, str, context);
  context.quantifierCounter27 = matchCountCopygreedyQuantifier0111;

  return cursorAfterQuantifier;
};
const fiber0113 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0109 = context.quantifierCounter26;
  context.quantifierCounter26 = -1;
  const cursorAfterQuantifier = greedyQuantifier0109(i, str, context);
  context.quantifierCounter26 = matchCountCopygreedyQuantifier0109;

  return cursorAfterQuantifier;
};
const fiber0114 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...,4}){1,7}|:)|fe80:(:[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0106(i, str, context);
};
const fiber0115 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...4}){1,6})|:((:[0-9a-f...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp14 = i;
  /*
   * disjunction
   * ...}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy14 = context.groupMarkerStart14;
  const groupMarkerEndCopy14 = context.groupMarkerEnd14;
  const groupMarkerStartCopy15 = context.groupMarkerStart15;
  const groupMarkerEndCopy15 = context.groupMarkerEnd15;
  const length0 = fiber0113(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart14 = groupMarkerStartCopy14;
  context.groupMarkerEnd14 = groupMarkerEndCopy14;
  context.groupMarkerStart15 = groupMarkerStartCopy15;
  context.groupMarkerEnd15 = groupMarkerEndCopy15;
  const length1 = fiber0114(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart14 = groupMarkerStartCopy14;
  context.groupMarkerEnd14 = groupMarkerEndCopy14;
  return -1;
};
const fiber0116 = (i: number, str: string, context: Context): number => {
  return fiber0001(i, str, context);
};
const fiber0117 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...,4}){0,4}%[0-9a-zA-Z]{1,}|::(ff...
   *              ^^^^^^^^^^^
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
    if (charCode0 <= 122) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0118(i, str, context);
};
const fiber0119 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0,4}){0,4}%[0-9a-zA-Z...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 37;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * quantifierStarter
   * ...,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:...
   *              ^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0118 = context.quantifierCounter28;
  context.quantifierCounter28 = -1;
  const cursorAfterQuantifier = greedyQuantifier0118(i, str, context);
  context.quantifierCounter28 = matchCountCopygreedyQuantifier0118;

  return cursorAfterQuantifier;
};
const fiber0120 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart16 = context.groupMarkerStartTemp16;
  context.groupMarkerEnd16 = i;
  return greedyQuantifier0121(i, str, context);
};
const fiber0122 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...:)|fe80:(:[0-9a-fA-F]{0,4}){0,4...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0123(i, str, context);
};
const fiber0124 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp16 = i;
  /*
   * charOrSet
   * ...|:)|fe80:(:[0-9a-fA-F...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 58;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * quantifierStarter
   * ...:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0123 = context.quantifierCounter30;
  context.quantifierCounter30 = -1;
  const cursorAfterQuantifier = greedyQuantifier0123(i, str, context);
  context.quantifierCounter30 = matchCountCopygreedyQuantifier0123;

  return cursorAfterQuantifier;
};
const fiber0125 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...){1,7}|:)|fe80:(:[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 102;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...{1,7}|:)|fe80:(:[0-9a...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 101;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...1,7}|:)|fe80:(:[0-9a-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 56;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...,7}|:)|fe80:(:[0-9a-f...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  result3 = charCode3 === 48;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...7}|:)|fe80:(:[0-9a-fA...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4 = false;

  result4 = charCode4 === 58;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * quantifierStarter
   * ...}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0121 = context.quantifierCounter29;
  context.quantifierCounter29 = -1;
  const cursorAfterQuantifier = greedyQuantifier0121(i, str, context);
  context.quantifierCounter29 = matchCountCopygreedyQuantifier0121;

  return cursorAfterQuantifier;
};
const fiber0126 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp19 = i;
  /*
   * groupStartMarker
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp20 = i;
  /*
   * nonBacktrackingDisjunction
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction2: {
    const length0 = fiber0157(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction2;
    }
    const length1 = fiber0166(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction2;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart20 = context.groupMarkerStartTemp20;
  context.groupMarkerEnd20 = i;
  /*
   * charOrSet
   * ...0,1}[0-9])\.){3,3}(25[...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4 = false;

  result4 = charCode4 === 46;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart19 = context.groupMarkerStartTemp19;
  context.groupMarkerEnd19 = i;
  /*
   * groupStartMarker
   * ...,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp19 = i;
  /*
   * groupStartMarker
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp20 = i;
  /*
   * nonBacktrackingDisjunction
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction8: {
    const length0 = fiber0147(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction8;
    }
    const length1 = fiber0156(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction8;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart20 = context.groupMarkerStartTemp20;
  context.groupMarkerEnd20 = i;
  /*
   * charOrSet
   * ...0,1}[0-9])\.){3,3}(25[...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode10 = str.charCodeAt(i);
  let result10 = false;

  result10 = charCode10 === 46;

  if (!result10) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart19 = context.groupMarkerStartTemp19;
  context.groupMarkerEnd19 = i;
  /*
   * groupStartMarker
   * ...,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp19 = i;
  /*
   * groupStartMarker
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp20 = i;
  /*
   * nonBacktrackingDisjunction
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction14: {
    const groupMarkerStartCopy21 = context.groupMarkerStart21;
    const groupMarkerEndCopy21 = context.groupMarkerEnd21;
    const length0 = fiber0137(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction14;
    }
    const length1 = fiber0146(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction14;
    }
    context.groupMarkerStart21 = groupMarkerStartCopy21;
    context.groupMarkerEnd21 = groupMarkerEndCopy21;
    return -1;
  }
  /*
   * groupEndMarker
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart20 = context.groupMarkerStartTemp20;
  context.groupMarkerEnd20 = i;
  /*
   * charOrSet
   * ...0,1}[0-9])\.){3,3}(25[...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode16 = str.charCodeAt(i);
  let result16 = false;

  result16 = charCode16 === 46;

  if (!result16) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart19 = context.groupMarkerStartTemp19;
  context.groupMarkerEnd19 = i;
  /*
   * groupStartMarker
   * ...])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp22 = i;
  /*
   * nonBacktrackingDisjunction
   * ...])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction19: {
    const groupMarkerStartCopy23 = context.groupMarkerStart23;
    const groupMarkerEndCopy23 = context.groupMarkerEnd23;
    const length0 = fiber0127(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction19;
    }
    const length1 = fiber0136(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction19;
    }
    context.groupMarkerStart23 = groupMarkerStartCopy23;
    context.groupMarkerEnd23 = groupMarkerEndCopy23;
    return -1;
  }
  /*
   * groupEndMarker
   * ...])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart22 = context.groupMarkerStartTemp22;
  context.groupMarkerEnd22 = i;
  return fiber0001(i, str, context);
};
const fiber0127 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...)\.){3,3}(25[0-5]|(2[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...\.){3,3}(25[0-5]|(2[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 53;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ....){3,3}(25[0-5]|(2[0-4]|1...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 53) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0128 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9]){0,1}[0-9])|([0-9a-f...
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
  return i;
};
const fiber0129 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp23 = i;
  /*
   * nonBacktrackingDisjunction
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0131(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0135(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart23 = context.groupMarkerStartTemp23;
  context.groupMarkerEnd23 = i;
  return greedyQuantifier0130(i, str, context);
};
const fiber0131 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(25[0-5]|(2[0-4]|1{0,...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...25[0-5]|(2[0-4]|1{0,1}[0-...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 52) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0132 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-4]|1{0,1}[0-9]){0,1}[0-9...
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
  return i;
};
const fiber0133 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]|(2[0-4]|1{0,1}[0-9]...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0134(i, str, context);
};
const fiber0135 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0134 = context.quantifierCounter32;
  context.quantifierCounter32 = -1;
  const cursorAfterQuantifier = greedyQuantifier0134(i, str, context);
  context.quantifierCounter32 = matchCountCopygreedyQuantifier0134;

  return cursorAfterQuantifier;
};
const fiber0136 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0130 = context.quantifierCounter31;
  context.quantifierCounter31 = -1;
  const cursorAfterQuantifier = greedyQuantifier0130(i, str, context);
  context.quantifierCounter31 = matchCountCopygreedyQuantifier0130;

  return cursorAfterQuantifier;
};
const fiber0137 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}:){0,1}((25[0-5]|(2[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...:){0,1}((25[0-5]|(2[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 53;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...){0,1}((25[0-5]|(2[0-4]|1...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 53) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0138 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9]){0,1}[0-9])\.){3,3}(...
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
  return i;
};
const fiber0139 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp21 = i;
  /*
   * nonBacktrackingDisjunction
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0141(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0145(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart21 = context.groupMarkerStartTemp21;
  context.groupMarkerEnd21 = i;
  return greedyQuantifier0140(i, str, context);
};
const fiber0141 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(25[0-5]|(2[0-4]|1{0,...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...25[0-5]|(2[0-4]|1{0,1}[0-...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 52) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0142 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-4]|1{0,1}[0-9]){0,1}[0-9...
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
  return i;
};
const fiber0143 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]|(2[0-4]|1{0,1}[0-9]...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0144(i, str, context);
};
const fiber0145 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0144 = context.quantifierCounter34;
  context.quantifierCounter34 = -1;
  const cursorAfterQuantifier = greedyQuantifier0144(i, str, context);
  context.quantifierCounter34 = matchCountCopygreedyQuantifier0144;

  return cursorAfterQuantifier;
};
const fiber0146 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0140 = context.quantifierCounter33;
  context.quantifierCounter33 = -1;
  const cursorAfterQuantifier = greedyQuantifier0140(i, str, context);
  context.quantifierCounter33 = matchCountCopygreedyQuantifier0140;

  return cursorAfterQuantifier;
};
const fiber0147 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}:){0,1}((25[0-5]|(2[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...:){0,1}((25[0-5]|(2[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 53;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...){0,1}((25[0-5]|(2[0-4]|1...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 53) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0148 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9]){0,1}[0-9])\.){3,3}(...
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
  return i;
};
const fiber0149 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp21 = i;
  /*
   * nonBacktrackingDisjunction
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0151(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0155(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart21 = context.groupMarkerStartTemp21;
  context.groupMarkerEnd21 = i;
  return greedyQuantifier0150(i, str, context);
};
const fiber0151 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(25[0-5]|(2[0-4]|1{0,...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...25[0-5]|(2[0-4]|1{0,1}[0-...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 52) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0152 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-4]|1{0,1}[0-9]){0,1}[0-9...
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
  return i;
};
const fiber0153 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]|(2[0-4]|1{0,1}[0-9]...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0154(i, str, context);
};
const fiber0155 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0154 = context.quantifierCounter34;
  context.quantifierCounter34 = -1;
  const cursorAfterQuantifier = greedyQuantifier0154(i, str, context);
  context.quantifierCounter34 = matchCountCopygreedyQuantifier0154;

  return cursorAfterQuantifier;
};
const fiber0156 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0150 = context.quantifierCounter33;
  context.quantifierCounter33 = -1;
  const cursorAfterQuantifier = greedyQuantifier0150(i, str, context);
  context.quantifierCounter33 = matchCountCopygreedyQuantifier0150;

  return cursorAfterQuantifier;
};
const fiber0157 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}:){0,1}((25[0-5]|(2[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...:){0,1}((25[0-5]|(2[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 53;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...){0,1}((25[0-5]|(2[0-4]|1...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 53) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0158 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9]){0,1}[0-9])\.){3,3}(...
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
  return i;
};
const fiber0159 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp21 = i;
  /*
   * nonBacktrackingDisjunction
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0161(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0165(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart21 = context.groupMarkerStartTemp21;
  context.groupMarkerEnd21 = i;
  return greedyQuantifier0160(i, str, context);
};
const fiber0161 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(25[0-5]|(2[0-4]|1{0,...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...25[0-5]|(2[0-4]|1{0,1}[0-...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 52) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0162 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-4]|1{0,1}[0-9]){0,1}[0-9...
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
  return i;
};
const fiber0163 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]|(2[0-4]|1{0,1}[0-9]...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0164(i, str, context);
};
const fiber0165 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0164 = context.quantifierCounter34;
  context.quantifierCounter34 = -1;
  const cursorAfterQuantifier = greedyQuantifier0164(i, str, context);
  context.quantifierCounter34 = matchCountCopygreedyQuantifier0164;

  return cursorAfterQuantifier;
};
const fiber0166 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0160 = context.quantifierCounter33;
  context.quantifierCounter33 = -1;
  const cursorAfterQuantifier = greedyQuantifier0160(i, str, context);
  context.quantifierCounter33 = matchCountCopygreedyQuantifier0160;

  return cursorAfterQuantifier;
};
const fiber0167 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...1,4}){0,1}:){0,1}((25...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[...
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart17 = context.groupMarkerStartTemp17;
  context.groupMarkerEnd17 = i;
  return greedyQuantifier0168(i, str, context);
};
const fiber0169 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...,}|::(ffff(:0{1,4}){0,1}:){0,...
   *              ^^^^^^^^^
   */
  context.groupMarkerStart18 = context.groupMarkerStartTemp18;
  context.groupMarkerEnd18 = i;
  return greedyQuantifier0170(i, str, context);
};
const fiber0171 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|::(ffff(:0{1,4}){0,1...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 48;

  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0172(i, str, context);
};
const fiber0173 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,}|::(ffff(:0{1,4}){0,1}:){0,...
   *              ^^^^^^^^^
   */
  context.groupMarkerStartTemp18 = i;
  /*
   * charOrSet
   * ...}|::(ffff(:0{1,4}){0,...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 58;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * quantifierStarter
   * ...|::(ffff(:0{1,4}){0,1}:){0...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0172 = context.quantifierCounter37;
  context.quantifierCounter37 = -1;
  const cursorAfterQuantifier = greedyQuantifier0172(i, str, context);
  context.quantifierCounter37 = matchCountCopygreedyQuantifier0172;

  return cursorAfterQuantifier;
};
const fiber0174 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[...
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp17 = i;
  /*
   * charOrSet
   * ...Z]{1,}|::(ffff(:0{1,4...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 102;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...]{1,}|::(ffff(:0{1,4}...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 102;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...{1,}|::(ffff(:0{1,4})...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  result3 = charCode3 === 102;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...1,}|::(ffff(:0{1,4}){...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4 = false;

  result4 = charCode4 === 102;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * quantifierStarter
   * ...,}|::(ffff(:0{1,4}){0,1}:){0,1}((2...
   *              ^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0170 = context.quantifierCounter36;
  context.quantifierCounter36 = -1;
  const cursorAfterQuantifier = greedyQuantifier0170(i, str, context);
  context.quantifierCounter36 = matchCountCopygreedyQuantifier0170;

  return cursorAfterQuantifier;
};
const fiber0175 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...zA-Z]{1,}|::(ffff(:0{...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...A-Z]{1,}|::(ffff(:0{1...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 58;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * quantifierStarter
   * ...-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0168 = context.quantifierCounter35;
  context.quantifierCounter35 = -1;
  const cursorAfterQuantifier = greedyQuantifier0168(i, str, context);
  context.quantifierCounter35 = matchCountCopygreedyQuantifier0168;

  return cursorAfterQuantifier;
};
const fiber0176 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...,4}:){1,4}:((25[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp25 = i;
  /*
   * groupStartMarker
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp26 = i;
  /*
   * nonBacktrackingDisjunction
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction3: {
    const length0 = fiber0207(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction3;
    }
    const length1 = fiber0216(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction3;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart26 = context.groupMarkerStartTemp26;
  context.groupMarkerEnd26 = i;
  /*
   * charOrSet
   * ...0,1}[0-9])\.){3,3}(25[...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode5 = str.charCodeAt(i);
  let result5 = false;

  result5 = charCode5 === 46;

  if (!result5) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart25 = context.groupMarkerStartTemp25;
  context.groupMarkerEnd25 = i;
  /*
   * groupStartMarker
   * ...4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp25 = i;
  /*
   * groupStartMarker
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp26 = i;
  /*
   * nonBacktrackingDisjunction
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction9: {
    const length0 = fiber0197(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction9;
    }
    const length1 = fiber0206(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction9;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart26 = context.groupMarkerStartTemp26;
  context.groupMarkerEnd26 = i;
  /*
   * charOrSet
   * ...0,1}[0-9])\.){3,3}(25[...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode11 = str.charCodeAt(i);
  let result11 = false;

  result11 = charCode11 === 46;

  if (!result11) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart25 = context.groupMarkerStartTemp25;
  context.groupMarkerEnd25 = i;
  /*
   * groupStartMarker
   * ...4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp25 = i;
  /*
   * groupStartMarker
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp26 = i;
  /*
   * nonBacktrackingDisjunction
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction15: {
    const groupMarkerStartCopy27 = context.groupMarkerStart27;
    const groupMarkerEndCopy27 = context.groupMarkerEnd27;
    const length0 = fiber0187(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction15;
    }
    const length1 = fiber0196(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction15;
    }
    context.groupMarkerStart27 = groupMarkerStartCopy27;
    context.groupMarkerEnd27 = groupMarkerEndCopy27;
    return -1;
  }
  /*
   * groupEndMarker
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart26 = context.groupMarkerStartTemp26;
  context.groupMarkerEnd26 = i;
  /*
   * charOrSet
   * ...0,1}[0-9])\.){3,3}(25[...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode17 = str.charCodeAt(i);
  let result17 = false;

  result17 = charCode17 === 46;

  if (!result17) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart25 = context.groupMarkerStartTemp25;
  context.groupMarkerEnd25 = i;
  /*
   * groupStartMarker
   * ...])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp28 = i;
  /*
   * nonBacktrackingDisjunction
   * ...])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction20: {
    const groupMarkerStartCopy29 = context.groupMarkerStart29;
    const groupMarkerEndCopy29 = context.groupMarkerEnd29;
    const length0 = fiber0177(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction20;
    }
    const length1 = fiber0186(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction20;
    }
    context.groupMarkerStart29 = groupMarkerStartCopy29;
    context.groupMarkerEnd29 = groupMarkerEndCopy29;
    return -1;
  }
  /*
   * groupEndMarker
   * ...])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart28 = context.groupMarkerStartTemp28;
  context.groupMarkerEnd28 = i;
  return fiber0001(i, str, context);
};
const fiber0177 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...)\.){3,3}(25[0-5]|(2[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...\.){3,3}(25[0-5]|(2[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 53;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ....){3,3}(25[0-5]|(2[0-4]|1...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 53) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0178 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9]){0,1}[0-9]))/
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
  return i;
};
const fiber0179 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp29 = i;
  /*
   * nonBacktrackingDisjunction
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0181(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0185(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart29 = context.groupMarkerStartTemp29;
  context.groupMarkerEnd29 = i;
  return greedyQuantifier0180(i, str, context);
};
const fiber0181 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(25[0-5]|(2[0-4]|1{0,...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...25[0-5]|(2[0-4]|1{0,1}[0-...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 52) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0182 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-4]|1{0,1}[0-9]){0,1}[0-9...
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
  return i;
};
const fiber0183 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]|(2[0-4]|1{0,1}[0-9]...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0184(i, str, context);
};
const fiber0185 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0184 = context.quantifierCounter39;
  context.quantifierCounter39 = -1;
  const cursorAfterQuantifier = greedyQuantifier0184(i, str, context);
  context.quantifierCounter39 = matchCountCopygreedyQuantifier0184;

  return cursorAfterQuantifier;
};
const fiber0186 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0180 = context.quantifierCounter38;
  context.quantifierCounter38 = -1;
  const cursorAfterQuantifier = greedyQuantifier0180(i, str, context);
  context.quantifierCounter38 = matchCountCopygreedyQuantifier0180;

  return cursorAfterQuantifier;
};
const fiber0187 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...:){1,4}:((25[0-5]|(2[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...){1,4}:((25[0-5]|(2[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 53;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...{1,4}:((25[0-5]|(2[0-4]|1...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 53) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0188 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9]){0,1}[0-9])\.){3,3}(...
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
  return i;
};
const fiber0189 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp27 = i;
  /*
   * nonBacktrackingDisjunction
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0191(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0195(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart27 = context.groupMarkerStartTemp27;
  context.groupMarkerEnd27 = i;
  return greedyQuantifier0190(i, str, context);
};
const fiber0191 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(25[0-5]|(2[0-4]|1{0,...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...25[0-5]|(2[0-4]|1{0,1}[0-...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 52) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0192 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-4]|1{0,1}[0-9]){0,1}[0-9...
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
  return i;
};
const fiber0193 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]|(2[0-4]|1{0,1}[0-9]...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0194(i, str, context);
};
const fiber0195 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0194 = context.quantifierCounter41;
  context.quantifierCounter41 = -1;
  const cursorAfterQuantifier = greedyQuantifier0194(i, str, context);
  context.quantifierCounter41 = matchCountCopygreedyQuantifier0194;

  return cursorAfterQuantifier;
};
const fiber0196 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0190 = context.quantifierCounter40;
  context.quantifierCounter40 = -1;
  const cursorAfterQuantifier = greedyQuantifier0190(i, str, context);
  context.quantifierCounter40 = matchCountCopygreedyQuantifier0190;

  return cursorAfterQuantifier;
};
const fiber0197 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...:){1,4}:((25[0-5]|(2[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...){1,4}:((25[0-5]|(2[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 53;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...{1,4}:((25[0-5]|(2[0-4]|1...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 53) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0198 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9]){0,1}[0-9])\.){3,3}(...
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
  return i;
};
const fiber0199 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp27 = i;
  /*
   * nonBacktrackingDisjunction
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0201(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0205(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart27 = context.groupMarkerStartTemp27;
  context.groupMarkerEnd27 = i;
  return greedyQuantifier0200(i, str, context);
};
const fiber0201 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(25[0-5]|(2[0-4]|1{0,...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...25[0-5]|(2[0-4]|1{0,1}[0-...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 52) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0202 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-4]|1{0,1}[0-9]){0,1}[0-9...
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
  return i;
};
const fiber0203 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]|(2[0-4]|1{0,1}[0-9]...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0204(i, str, context);
};
const fiber0205 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0204 = context.quantifierCounter41;
  context.quantifierCounter41 = -1;
  const cursorAfterQuantifier = greedyQuantifier0204(i, str, context);
  context.quantifierCounter41 = matchCountCopygreedyQuantifier0204;

  return cursorAfterQuantifier;
};
const fiber0206 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0200 = context.quantifierCounter40;
  context.quantifierCounter40 = -1;
  const cursorAfterQuantifier = greedyQuantifier0200(i, str, context);
  context.quantifierCounter40 = matchCountCopygreedyQuantifier0200;

  return cursorAfterQuantifier;
};
const fiber0207 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...:){1,4}:((25[0-5]|(2[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...){1,4}:((25[0-5]|(2[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 53;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...{1,4}:((25[0-5]|(2[0-4]|1...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 53) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0208 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9]){0,1}[0-9])\.){3,3}(...
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
  return i;
};
const fiber0209 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp27 = i;
  /*
   * nonBacktrackingDisjunction
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0211(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0215(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart27 = context.groupMarkerStartTemp27;
  context.groupMarkerEnd27 = i;
  return greedyQuantifier0210(i, str, context);
};
const fiber0211 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(25[0-5]|(2[0-4]|1{0,...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...25[0-5]|(2[0-4]|1{0,1}[0-...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 52) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0212 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-4]|1{0,1}[0-9]){0,1}[0-9...
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
  return i;
};
const fiber0213 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]|(2[0-4]|1{0,1}[0-9]...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 49;

  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0214(i, str, context);
};
const fiber0215 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0214 = context.quantifierCounter41;
  context.quantifierCounter41 = -1;
  const cursorAfterQuantifier = greedyQuantifier0214(i, str, context);
  context.quantifierCounter41 = matchCountCopygreedyQuantifier0214;

  return cursorAfterQuantifier;
};
const fiber0216 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0210 = context.quantifierCounter40;
  context.quantifierCounter40 = -1;
  const cursorAfterQuantifier = greedyQuantifier0210(i, str, context);
  context.quantifierCounter40 = matchCountCopygreedyQuantifier0210;

  return cursorAfterQuantifier;
};
const fiber0217 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...fA-F]{1,4}:){1,4}:((2...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart24 = context.groupMarkerStartTemp24;
  context.groupMarkerEnd24 = i;
  return greedyQuantifier0218(i, str, context);
};
const fiber0219 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...1}[0-9])|([0-9a-fA-F]{1,4}:){1,...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 70) {
    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = charCode0 >= 65;
    }
  } else {
    if (charCode0 <= 102) {
      result0 = charCode0 >= 97;
    }
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0220(i, str, context);
};
const fiber0221 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp24 = i;
  /*
   * quantifierStarter
   * ...1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0220 = context.quantifierCounter43;
  context.quantifierCounter43 = -1;
  const cursorAfterQuantifier = greedyQuantifier0220(i, str, context);
  context.quantifierCounter43 = matchCountCopygreedyQuantifier0220;

  return cursorAfterQuantifier;
};
const fiber0222 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0218 = context.quantifierCounter42;
  context.quantifierCounter42 = -1;
  const cursorAfterQuantifier = greedyQuantifier0218(i, str, context);
  context.quantifierCounter42 = matchCountCopygreedyQuantifier0218;

  return cursorAfterQuantifier;
};
const fiber0223 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * disjunction
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy8 = context.groupMarkerStart8;
  const groupMarkerEndCopy8 = context.groupMarkerEnd8;
  const groupMarkerStartCopy9 = context.groupMarkerStart9;
  const groupMarkerEndCopy9 = context.groupMarkerEnd9;
  const groupMarkerStartCopy10 = context.groupMarkerStart10;
  const groupMarkerEndCopy10 = context.groupMarkerEnd10;
  const groupMarkerStartCopy11 = context.groupMarkerStart11;
  const groupMarkerEndCopy11 = context.groupMarkerEnd11;
  const groupMarkerStartCopy12 = context.groupMarkerStart12;
  const groupMarkerEndCopy12 = context.groupMarkerEnd12;
  const groupMarkerStartCopy13 = context.groupMarkerStart13;
  const groupMarkerEndCopy13 = context.groupMarkerEnd13;
  const groupMarkerStartCopy14 = context.groupMarkerStart14;
  const groupMarkerEndCopy14 = context.groupMarkerEnd14;
  const groupMarkerStartCopy15 = context.groupMarkerStart15;
  const groupMarkerEndCopy15 = context.groupMarkerEnd15;
  const groupMarkerStartCopy16 = context.groupMarkerStart16;
  const groupMarkerEndCopy16 = context.groupMarkerEnd16;
  const groupMarkerStartCopy17 = context.groupMarkerStart17;
  const groupMarkerEndCopy17 = context.groupMarkerEnd17;
  const groupMarkerStartCopy18 = context.groupMarkerStart18;
  const groupMarkerEndCopy18 = context.groupMarkerEnd18;
  const groupMarkerStartCopy19 = context.groupMarkerStart19;
  const groupMarkerEndCopy19 = context.groupMarkerEnd19;
  const groupMarkerStartCopy20 = context.groupMarkerStart20;
  const groupMarkerEndCopy20 = context.groupMarkerEnd20;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;
  const groupMarkerStartCopy24 = context.groupMarkerStart24;
  const groupMarkerEndCopy24 = context.groupMarkerEnd24;
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;
  const length0 = fiber0026(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  const length1 = fiber0033(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  const length2 = fiber0043(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  const length3 = fiber0056(i, str, context);
  if (length3 !== -1) {
    return length3;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length4 = fiber0069(i, str, context);
  if (length4 !== -1) {
    return length4;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  const length5 = fiber0082(i, str, context);
  if (length5 !== -1) {
    return length5;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart8 = groupMarkerStartCopy8;
  context.groupMarkerEnd8 = groupMarkerEndCopy8;
  context.groupMarkerStart9 = groupMarkerStartCopy9;
  context.groupMarkerEnd9 = groupMarkerEndCopy9;
  const length6 = fiber0095(i, str, context);
  if (length6 !== -1) {
    return length6;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart10 = groupMarkerStartCopy10;
  context.groupMarkerEnd10 = groupMarkerEndCopy10;
  context.groupMarkerStart11 = groupMarkerStartCopy11;
  context.groupMarkerEnd11 = groupMarkerEndCopy11;
  const length7 = fiber0105(i, str, context);
  if (length7 !== -1) {
    return length7;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart12 = groupMarkerStartCopy12;
  context.groupMarkerEnd12 = groupMarkerEndCopy12;
  context.groupMarkerStart13 = groupMarkerStartCopy13;
  context.groupMarkerEnd13 = groupMarkerEndCopy13;
  const length8 = fiber0115(i, str, context);
  if (length8 !== -1) {
    return length8;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart14 = groupMarkerStartCopy14;
  context.groupMarkerEnd14 = groupMarkerEndCopy14;
  context.groupMarkerStart15 = groupMarkerStartCopy15;
  context.groupMarkerEnd15 = groupMarkerEndCopy15;
  const length9 = fiber0125(i, str, context);
  if (length9 !== -1) {
    return length9;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart16 = groupMarkerStartCopy16;
  context.groupMarkerEnd16 = groupMarkerEndCopy16;
  const length10 = fiber0175(i, str, context);
  if (length10 !== -1) {
    return length10;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart17 = groupMarkerStartCopy17;
  context.groupMarkerEnd17 = groupMarkerEndCopy17;
  context.groupMarkerStart18 = groupMarkerStartCopy18;
  context.groupMarkerEnd18 = groupMarkerEndCopy18;
  context.groupMarkerStart19 = groupMarkerStartCopy19;
  context.groupMarkerEnd19 = groupMarkerEndCopy19;
  context.groupMarkerStart20 = groupMarkerStartCopy20;
  context.groupMarkerEnd20 = groupMarkerEndCopy20;
  context.groupMarkerStart22 = groupMarkerStartCopy22;
  context.groupMarkerEnd22 = groupMarkerEndCopy22;
  const length11 = fiber0222(i, str, context);
  if (length11 !== -1) {
    return length11;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart24 = groupMarkerStartCopy24;
  context.groupMarkerEnd24 = groupMarkerEndCopy24;
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart28 = groupMarkerStartCopy28;
  context.groupMarkerEnd28 = groupMarkerEndCopy28;
  return -1;
};

/*
 * ...,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0004 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  if (context.quantifierCounter0 === 4) {
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

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0002(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.quantifierCounter0--;
  }
  return followUpResult;
};
/*
 * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
 *    ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0007 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (context.quantifierCounter1 === 4) {
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

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;

  const followUpResult = fiber0005(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
 *    ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0010 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (context.quantifierCounter1 === 4) {
    return fiber0008(start, str, context);
  }

  const tryDeeperResult = fiber0009(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter1 < 1) {
    context.quantifierCounter1--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;

  const followUpResult = fiber0008(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
 *    ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0013 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (context.quantifierCounter1 === 4) {
    return fiber0011(start, str, context);
  }

  const tryDeeperResult = fiber0012(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter1 < 1) {
    context.quantifierCounter1--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;

  const followUpResult = fiber0011(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
 *    ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0016 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (context.quantifierCounter1 === 4) {
    return fiber0014(start, str, context);
  }

  const tryDeeperResult = fiber0015(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter1 < 1) {
    context.quantifierCounter1--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;

  const followUpResult = fiber0014(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
 *    ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0019 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (context.quantifierCounter1 === 4) {
    return fiber0017(start, str, context);
  }

  const tryDeeperResult = fiber0018(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter1 < 1) {
    context.quantifierCounter1--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;

  const followUpResult = fiber0017(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
 *    ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0022 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (context.quantifierCounter1 === 4) {
    return fiber0020(start, str, context);
  }

  const tryDeeperResult = fiber0021(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter1 < 1) {
    context.quantifierCounter1--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;

  const followUpResult = fiber0020(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
 *    ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0025 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (context.quantifierCounter1 === 4) {
    return fiber0023(start, str, context);
  }

  const tryDeeperResult = fiber0024(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter1 < 1) {
    context.quantifierCounter1--;
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
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * ...A-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-f...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0029 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter2++;

  if (context.quantifierCounter2 === 7) {
    return fiber0027(start, str, context);
  }

  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;
  const tryDeeperResult = fiber0032(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;

  if (context.quantifierCounter2 < 1) {
    context.quantifierCounter2--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0027(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.quantifierCounter2--;
  }
  return followUpResult;
};
/*
 * ...-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|(...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0031 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter3++;

  if (context.quantifierCounter3 === 4) {
    return fiber0028(start, str, context);
  }

  const tryDeeperResult = fiber0030(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter3 < 1) {
    context.quantifierCounter3--;
    return -1;
  }

  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;

  const followUpResult = fiber0028(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
    context.quantifierCounter3--;
  }
  return followUpResult;
};
/*
 * ...4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0036 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter4++;

  if (context.quantifierCounter4 === 4) {
    return fiber0034(start, str, context);
  }

  const tryDeeperResult = fiber0035(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter4 < 1) {
    context.quantifierCounter4--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0034(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.quantifierCounter4--;
  }
  return followUpResult;
};
/*
 * ...}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0039 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter5++;

  if (context.quantifierCounter5 === 6) {
    return fiber0037(start, str, context);
  }

  const groupMarkerStartCopy3 = context.groupMarkerStart3;
  const groupMarkerEndCopy3 = context.groupMarkerEnd3;
  const tryDeeperResult = fiber0042(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;

  if (context.quantifierCounter5 < 1) {
    context.quantifierCounter5--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0037(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.quantifierCounter5--;
  }
  return followUpResult;
};
/*
 * ...:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0041 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter6++;

  if (context.quantifierCounter6 === 4) {
    return fiber0038(start, str, context);
  }

  const tryDeeperResult = fiber0040(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter6 < 1) {
    context.quantifierCounter6--;
    return -1;
  }

  const groupMarkerStartCopy3 = context.groupMarkerStart3;
  const groupMarkerEndCopy3 = context.groupMarkerEnd3;

  const followUpResult = fiber0038(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart3 = groupMarkerStartCopy3;
    context.groupMarkerEnd3 = groupMarkerEndCopy3;
    context.quantifierCounter6--;
  }
  return followUpResult;
};
/*
 * ...,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0046 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter7++;

  if (context.quantifierCounter7 === 2) {
    return fiber0044(start, str, context);
  }

  const groupMarkerStartCopy5 = context.groupMarkerStart5;
  const groupMarkerEndCopy5 = context.groupMarkerEnd5;
  const tryDeeperResult = fiber0049(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;

  if (context.quantifierCounter7 < 1) {
    context.quantifierCounter7--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0044(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.quantifierCounter7--;
  }
  return followUpResult;
};
/*
 * ...}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0048 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter8++;

  if (context.quantifierCounter8 === 4) {
    return fiber0045(start, str, context);
  }

  const tryDeeperResult = fiber0047(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter8 < 1) {
    context.quantifierCounter8--;
    return -1;
  }

  const groupMarkerStartCopy5 = context.groupMarkerStart5;
  const groupMarkerEndCopy5 = context.groupMarkerEnd5;

  const followUpResult = fiber0045(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart5 = groupMarkerStartCopy5;
    context.groupMarkerEnd5 = groupMarkerEndCopy5;
    context.quantifierCounter8--;
  }
  return followUpResult;
};
/*
 * ...A-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0052 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter9++;

  if (context.quantifierCounter9 === 5) {
    return fiber0050(start, str, context);
  }

  const groupMarkerStartCopy4 = context.groupMarkerStart4;
  const groupMarkerEndCopy4 = context.groupMarkerEnd4;
  const tryDeeperResult = fiber0055(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;

  if (context.quantifierCounter9 < 1) {
    context.quantifierCounter9--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy5 = context.groupMarkerStart5;
  const groupMarkerEndCopy5 = context.groupMarkerEnd5;

  const followUpResult = fiber0050(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart5 = groupMarkerStartCopy5;
    context.groupMarkerEnd5 = groupMarkerEndCopy5;
    context.quantifierCounter9--;
  }
  return followUpResult;
};
/*
 * ...-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0054 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter10++;

  if (context.quantifierCounter10 === 4) {
    return fiber0051(start, str, context);
  }

  const tryDeeperResult = fiber0053(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter10 < 1) {
    context.quantifierCounter10--;
    return -1;
  }

  const groupMarkerStartCopy4 = context.groupMarkerStart4;
  const groupMarkerEndCopy4 = context.groupMarkerEnd4;

  const followUpResult = fiber0051(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart4 = groupMarkerStartCopy4;
    context.groupMarkerEnd4 = groupMarkerEndCopy4;
    context.quantifierCounter10--;
  }
  return followUpResult;
};
/*
 * ...,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0059 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter11++;

  if (context.quantifierCounter11 === 3) {
    return fiber0057(start, str, context);
  }

  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const tryDeeperResult = fiber0062(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;

  if (context.quantifierCounter11 < 1) {
    context.quantifierCounter11--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0057(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.quantifierCounter11--;
  }
  return followUpResult;
};
/*
 * ...}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0061 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter12++;

  if (context.quantifierCounter12 === 4) {
    return fiber0058(start, str, context);
  }

  const tryDeeperResult = fiber0060(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter12 < 1) {
    context.quantifierCounter12--;
    return -1;
  }

  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;

  const followUpResult = fiber0058(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.quantifierCounter12--;
  }
  return followUpResult;
};
/*
 * ...,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0065 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter13++;

  if (context.quantifierCounter13 === 4) {
    return fiber0063(start, str, context);
  }

  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const tryDeeperResult = fiber0068(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;

  if (context.quantifierCounter13 < 1) {
    context.quantifierCounter13--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;

  const followUpResult = fiber0063(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.quantifierCounter13--;
  }
  return followUpResult;
};
/*
 * ...4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0067 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter14++;

  if (context.quantifierCounter14 === 4) {
    return fiber0064(start, str, context);
  }

  const tryDeeperResult = fiber0066(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter14 < 1) {
    context.quantifierCounter14--;
    return -1;
  }

  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;

  const followUpResult = fiber0064(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.quantifierCounter14--;
  }
  return followUpResult;
};
/*
 * ...,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0072 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter15++;

  if (context.quantifierCounter15 === 4) {
    return fiber0070(start, str, context);
  }

  const groupMarkerStartCopy9 = context.groupMarkerStart9;
  const groupMarkerEndCopy9 = context.groupMarkerEnd9;
  const tryDeeperResult = fiber0075(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart9 = groupMarkerStartCopy9;
  context.groupMarkerEnd9 = groupMarkerEndCopy9;

  if (context.quantifierCounter15 < 1) {
    context.quantifierCounter15--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0070(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.quantifierCounter15--;
  }
  return followUpResult;
};
/*
 * ...}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0074 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter16++;

  if (context.quantifierCounter16 === 4) {
    return fiber0071(start, str, context);
  }

  const tryDeeperResult = fiber0073(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter16 < 1) {
    context.quantifierCounter16--;
    return -1;
  }

  const groupMarkerStartCopy9 = context.groupMarkerStart9;
  const groupMarkerEndCopy9 = context.groupMarkerEnd9;

  const followUpResult = fiber0071(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart9 = groupMarkerStartCopy9;
    context.groupMarkerEnd9 = groupMarkerEndCopy9;
    context.quantifierCounter16--;
  }
  return followUpResult;
};
/*
 * ...,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0078 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter17++;

  if (context.quantifierCounter17 === 3) {
    return fiber0076(start, str, context);
  }

  const groupMarkerStartCopy8 = context.groupMarkerStart8;
  const groupMarkerEndCopy8 = context.groupMarkerEnd8;
  const tryDeeperResult = fiber0081(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart8 = groupMarkerStartCopy8;
  context.groupMarkerEnd8 = groupMarkerEndCopy8;

  if (context.quantifierCounter17 < 1) {
    context.quantifierCounter17--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy9 = context.groupMarkerStart9;
  const groupMarkerEndCopy9 = context.groupMarkerEnd9;

  const followUpResult = fiber0076(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart9 = groupMarkerStartCopy9;
    context.groupMarkerEnd9 = groupMarkerEndCopy9;
    context.quantifierCounter17--;
  }
  return followUpResult;
};
/*
 * ...4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0080 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter18++;

  if (context.quantifierCounter18 === 4) {
    return fiber0077(start, str, context);
  }

  const tryDeeperResult = fiber0079(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter18 < 1) {
    context.quantifierCounter18--;
    return -1;
  }

  const groupMarkerStartCopy8 = context.groupMarkerStart8;
  const groupMarkerEndCopy8 = context.groupMarkerEnd8;

  const followUpResult = fiber0077(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart8 = groupMarkerStartCopy8;
    context.groupMarkerEnd8 = groupMarkerEndCopy8;
    context.quantifierCounter18--;
  }
  return followUpResult;
};
/*
 * ...,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0085 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter19++;

  if (context.quantifierCounter19 === 5) {
    return fiber0083(start, str, context);
  }

  const groupMarkerStartCopy11 = context.groupMarkerStart11;
  const groupMarkerEndCopy11 = context.groupMarkerEnd11;
  const tryDeeperResult = fiber0088(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart11 = groupMarkerStartCopy11;
  context.groupMarkerEnd11 = groupMarkerEndCopy11;

  if (context.quantifierCounter19 < 1) {
    context.quantifierCounter19--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0083(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.quantifierCounter19--;
  }
  return followUpResult;
};
/*
 * ...}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0087 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter20++;

  if (context.quantifierCounter20 === 4) {
    return fiber0084(start, str, context);
  }

  const tryDeeperResult = fiber0086(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter20 < 1) {
    context.quantifierCounter20--;
    return -1;
  }

  const groupMarkerStartCopy11 = context.groupMarkerStart11;
  const groupMarkerEndCopy11 = context.groupMarkerEnd11;

  const followUpResult = fiber0084(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart11 = groupMarkerStartCopy11;
    context.groupMarkerEnd11 = groupMarkerEndCopy11;
    context.quantifierCounter20--;
  }
  return followUpResult;
};
/*
 * ...,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0091 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter21++;

  if (context.quantifierCounter21 === 2) {
    return fiber0089(start, str, context);
  }

  const groupMarkerStartCopy10 = context.groupMarkerStart10;
  const groupMarkerEndCopy10 = context.groupMarkerEnd10;
  const tryDeeperResult = fiber0094(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart10 = groupMarkerStartCopy10;
  context.groupMarkerEnd10 = groupMarkerEndCopy10;

  if (context.quantifierCounter21 < 1) {
    context.quantifierCounter21--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy11 = context.groupMarkerStart11;
  const groupMarkerEndCopy11 = context.groupMarkerEnd11;

  const followUpResult = fiber0089(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart11 = groupMarkerStartCopy11;
    context.groupMarkerEnd11 = groupMarkerEndCopy11;
    context.quantifierCounter21--;
  }
  return followUpResult;
};
/*
 * ...4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0093 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter22++;

  if (context.quantifierCounter22 === 4) {
    return fiber0090(start, str, context);
  }

  const tryDeeperResult = fiber0092(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter22 < 1) {
    context.quantifierCounter22--;
    return -1;
  }

  const groupMarkerStartCopy10 = context.groupMarkerStart10;
  const groupMarkerEndCopy10 = context.groupMarkerEnd10;

  const followUpResult = fiber0090(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart10 = groupMarkerStartCopy10;
    context.groupMarkerEnd10 = groupMarkerEndCopy10;
    context.quantifierCounter22--;
  }
  return followUpResult;
};
/*
 * ...-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0098 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter23++;

  if (context.quantifierCounter23 === 6) {
    return fiber0096(start, str, context);
  }

  const groupMarkerStartCopy13 = context.groupMarkerStart13;
  const groupMarkerEndCopy13 = context.groupMarkerEnd13;
  const tryDeeperResult = fiber0101(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart13 = groupMarkerStartCopy13;
  context.groupMarkerEnd13 = groupMarkerEndCopy13;

  if (context.quantifierCounter23 < 1) {
    context.quantifierCounter23--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy12 = context.groupMarkerStart12;
  const groupMarkerEndCopy12 = context.groupMarkerEnd12;

  const followUpResult = fiber0096(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart12 = groupMarkerStartCopy12;
    context.groupMarkerEnd12 = groupMarkerEndCopy12;
    context.quantifierCounter23--;
  }
  return followUpResult;
};
/*
 * ...]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:(...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0100 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter24++;

  if (context.quantifierCounter24 === 4) {
    return fiber0097(start, str, context);
  }

  const tryDeeperResult = fiber0099(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter24 < 1) {
    context.quantifierCounter24--;
    return -1;
  }

  const groupMarkerStartCopy13 = context.groupMarkerStart13;
  const groupMarkerEndCopy13 = context.groupMarkerEnd13;

  const followUpResult = fiber0097(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart13 = groupMarkerStartCopy13;
    context.groupMarkerEnd13 = groupMarkerEndCopy13;
    context.quantifierCounter24--;
  }
  return followUpResult;
};
/*
 * ...,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0104 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter25++;

  if (context.quantifierCounter25 === 4) {
    return fiber0102(start, str, context);
  }

  const tryDeeperResult = fiber0103(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter25 < 1) {
    context.quantifierCounter25--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy12 = context.groupMarkerStart12;
  const groupMarkerEndCopy12 = context.groupMarkerEnd12;
  const groupMarkerStartCopy13 = context.groupMarkerStart13;
  const groupMarkerEndCopy13 = context.groupMarkerEnd13;

  const followUpResult = fiber0102(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart12 = groupMarkerStartCopy12;
    context.groupMarkerEnd12 = groupMarkerEndCopy12;
    context.groupMarkerStart13 = groupMarkerStartCopy13;
    context.groupMarkerEnd13 = groupMarkerEndCopy13;
    context.quantifierCounter25--;
  }
  return followUpResult;
};
/*
 * ...){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0109 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter26++;

  if (context.quantifierCounter26 === 7) {
    return fiber0107(start, str, context);
  }

  const groupMarkerStartCopy15 = context.groupMarkerStart15;
  const groupMarkerEndCopy15 = context.groupMarkerEnd15;
  const tryDeeperResult = fiber0112(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart15 = groupMarkerStartCopy15;
  context.groupMarkerEnd15 = groupMarkerEndCopy15;

  if (context.quantifierCounter26 < 1) {
    context.quantifierCounter26--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy14 = context.groupMarkerStart14;
  const groupMarkerEndCopy14 = context.groupMarkerEnd14;

  const followUpResult = fiber0107(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart14 = groupMarkerStartCopy14;
    context.groupMarkerEnd14 = groupMarkerEndCopy14;
    context.quantifierCounter26--;
  }
  return followUpResult;
};
/*
 * ...1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0111 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter27++;

  if (context.quantifierCounter27 === 4) {
    return fiber0108(start, str, context);
  }

  const tryDeeperResult = fiber0110(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter27 < 1) {
    context.quantifierCounter27--;
    return -1;
  }

  const groupMarkerStartCopy15 = context.groupMarkerStart15;
  const groupMarkerEndCopy15 = context.groupMarkerEnd15;

  const followUpResult = fiber0108(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart15 = groupMarkerStartCopy15;
    context.groupMarkerEnd15 = groupMarkerEndCopy15;
    context.quantifierCounter27--;
  }
  return followUpResult;
};
/*
 * ...,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:...
 *              ^^^^^^^^^^^^^^^
 */
const greedyQuantifier0118 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter28++;

  const tryDeeperResult = fiber0117(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter28 < 1) {
    context.quantifierCounter28--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0116(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.quantifierCounter28--;
  }
  return followUpResult;
};
/*
 * ...}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0121 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter29++;

  if (context.quantifierCounter29 === 4) {
    return fiber0119(start, str, context);
  }

  const groupMarkerStartCopy16 = context.groupMarkerStart16;
  const groupMarkerEndCopy16 = context.groupMarkerEnd16;
  const tryDeeperResult = fiber0124(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart16 = groupMarkerStartCopy16;
  context.groupMarkerEnd16 = groupMarkerEndCopy16;

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;

  const followUpResult = fiber0119(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.quantifierCounter29--;
  }
  return followUpResult;
};
/*
 * ...:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0123 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter30++;

  if (context.quantifierCounter30 === 4) {
    return fiber0120(start, str, context);
  }

  const tryDeeperResult = fiber0122(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy16 = context.groupMarkerStart16;
  const groupMarkerEndCopy16 = context.groupMarkerEnd16;

  const followUpResult = fiber0120(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart16 = groupMarkerStartCopy16;
    context.groupMarkerEnd16 = groupMarkerEndCopy16;
    context.quantifierCounter30--;
  }
  return followUpResult;
};
/*
 * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0130 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter31++;

  if (context.quantifierCounter31 === 1) {
    return fiber0128(start, str, context);
  }

  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;
  const tryDeeperResult = fiber0129(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;

  const followUpResult = fiber0128(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter31--;
  }
  return followUpResult;
};
/*
 * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
 *              ^^^^^^
 */
const greedyQuantifier0134 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter32++;

  if (context.quantifierCounter32 === 1) {
    return fiber0132(start, str, context);
  }

  const tryDeeperResult = fiber0133(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0132(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter32--;
  }
  return followUpResult;
};
/*
 * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0140 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter33++;

  if (context.quantifierCounter33 === 1) {
    return fiber0138(start, str, context);
  }

  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const tryDeeperResult = fiber0139(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart21 = groupMarkerStartCopy21;
  context.groupMarkerEnd21 = groupMarkerEndCopy21;

  const followUpResult = fiber0138(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter33--;
  }
  return followUpResult;
};
/*
 * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
 *              ^^^^^^
 */
const greedyQuantifier0144 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter34++;

  if (context.quantifierCounter34 === 1) {
    return fiber0142(start, str, context);
  }

  const tryDeeperResult = fiber0143(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0142(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter34--;
  }
  return followUpResult;
};
/*
 * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0150 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter33++;

  if (context.quantifierCounter33 === 1) {
    return fiber0148(start, str, context);
  }

  const tryDeeperResult = fiber0149(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0148(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter33--;
  }
  return followUpResult;
};
/*
 * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
 *              ^^^^^^
 */
const greedyQuantifier0154 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter34++;

  if (context.quantifierCounter34 === 1) {
    return fiber0152(start, str, context);
  }

  const tryDeeperResult = fiber0153(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0152(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter34--;
  }
  return followUpResult;
};
/*
 * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0160 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter33++;

  if (context.quantifierCounter33 === 1) {
    return fiber0158(start, str, context);
  }

  const tryDeeperResult = fiber0159(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0158(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter33--;
  }
  return followUpResult;
};
/*
 * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
 *              ^^^^^^
 */
const greedyQuantifier0164 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter34++;

  if (context.quantifierCounter34 === 1) {
    return fiber0162(start, str, context);
  }

  const tryDeeperResult = fiber0163(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0162(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter34--;
  }
  return followUpResult;
};
/*
 * ...-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0168 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter35++;

  if (context.quantifierCounter35 === 1) {
    return fiber0126(start, str, context);
  }

  const groupMarkerStartCopy17 = context.groupMarkerStart17;
  const groupMarkerEndCopy17 = context.groupMarkerEnd17;
  const groupMarkerStartCopy18 = context.groupMarkerStart18;
  const groupMarkerEndCopy18 = context.groupMarkerEnd18;
  const tryDeeperResult = fiber0174(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart17 = groupMarkerStartCopy17;
  context.groupMarkerEnd17 = groupMarkerEndCopy17;
  context.groupMarkerStart18 = groupMarkerStartCopy18;
  context.groupMarkerEnd18 = groupMarkerEndCopy18;

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy19 = context.groupMarkerStart19;
  const groupMarkerEndCopy19 = context.groupMarkerEnd19;
  const groupMarkerStartCopy20 = context.groupMarkerStart20;
  const groupMarkerEndCopy20 = context.groupMarkerEnd20;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;

  const followUpResult = fiber0126(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart19 = groupMarkerStartCopy19;
    context.groupMarkerEnd19 = groupMarkerEndCopy19;
    context.groupMarkerStart20 = groupMarkerStartCopy20;
    context.groupMarkerEnd20 = groupMarkerEndCopy20;
    context.groupMarkerStart22 = groupMarkerStartCopy22;
    context.groupMarkerEnd22 = groupMarkerEndCopy22;
    context.quantifierCounter35--;
  }
  return followUpResult;
};
/*
 * ...,}|::(ffff(:0{1,4}){0,1}:){0,1}((2...
 *              ^^^^^^^^^^^^^^
 */
const greedyQuantifier0170 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter36++;

  if (context.quantifierCounter36 === 1) {
    return fiber0167(start, str, context);
  }

  const groupMarkerStartCopy18 = context.groupMarkerStart18;
  const groupMarkerEndCopy18 = context.groupMarkerEnd18;
  const tryDeeperResult = fiber0173(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart18 = groupMarkerStartCopy18;
  context.groupMarkerEnd18 = groupMarkerEndCopy18;

  const groupMarkerStartCopy17 = context.groupMarkerStart17;
  const groupMarkerEndCopy17 = context.groupMarkerEnd17;

  const followUpResult = fiber0167(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart17 = groupMarkerStartCopy17;
    context.groupMarkerEnd17 = groupMarkerEndCopy17;
    context.quantifierCounter36--;
  }
  return followUpResult;
};
/*
 * ...|::(ffff(:0{1,4}){0,1}:){0...
 *              ^^^^^^
 */
const greedyQuantifier0172 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter37++;

  if (context.quantifierCounter37 === 4) {
    return fiber0169(start, str, context);
  }

  const tryDeeperResult = fiber0171(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter37 < 1) {
    context.quantifierCounter37--;
    return -1;
  }

  const groupMarkerStartCopy18 = context.groupMarkerStart18;
  const groupMarkerEndCopy18 = context.groupMarkerEnd18;

  const followUpResult = fiber0169(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart18 = groupMarkerStartCopy18;
    context.groupMarkerEnd18 = groupMarkerEndCopy18;
    context.quantifierCounter37--;
  }
  return followUpResult;
};
/*
 * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0180 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter38++;

  if (context.quantifierCounter38 === 1) {
    return fiber0178(start, str, context);
  }

  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;
  const tryDeeperResult = fiber0179(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart29 = groupMarkerStartCopy29;
  context.groupMarkerEnd29 = groupMarkerEndCopy29;

  const followUpResult = fiber0178(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter38--;
  }
  return followUpResult;
};
/*
 * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
 *              ^^^^^^
 */
const greedyQuantifier0184 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter39++;

  if (context.quantifierCounter39 === 1) {
    return fiber0182(start, str, context);
  }

  const tryDeeperResult = fiber0183(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0182(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter39--;
  }
  return followUpResult;
};
/*
 * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0190 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter40++;

  if (context.quantifierCounter40 === 1) {
    return fiber0188(start, str, context);
  }

  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const tryDeeperResult = fiber0189(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;

  const followUpResult = fiber0188(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter40--;
  }
  return followUpResult;
};
/*
 * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
 *              ^^^^^^
 */
const greedyQuantifier0194 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter41++;

  if (context.quantifierCounter41 === 1) {
    return fiber0192(start, str, context);
  }

  const tryDeeperResult = fiber0193(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0192(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter41--;
  }
  return followUpResult;
};
/*
 * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0200 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter40++;

  if (context.quantifierCounter40 === 1) {
    return fiber0198(start, str, context);
  }

  const tryDeeperResult = fiber0199(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0198(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter40--;
  }
  return followUpResult;
};
/*
 * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
 *              ^^^^^^
 */
const greedyQuantifier0204 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter41++;

  if (context.quantifierCounter41 === 1) {
    return fiber0202(start, str, context);
  }

  const tryDeeperResult = fiber0203(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0202(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter41--;
  }
  return followUpResult;
};
/*
 * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0210 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter40++;

  if (context.quantifierCounter40 === 1) {
    return fiber0208(start, str, context);
  }

  const tryDeeperResult = fiber0209(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0208(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter40--;
  }
  return followUpResult;
};
/*
 * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
 *              ^^^^^^
 */
const greedyQuantifier0214 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter41++;

  if (context.quantifierCounter41 === 1) {
    return fiber0212(start, str, context);
  }

  const tryDeeperResult = fiber0213(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0212(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter41--;
  }
  return followUpResult;
};
/*
 * ...,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0218 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter42++;

  if (context.quantifierCounter42 === 4) {
    return fiber0176(start, str, context);
  }

  const groupMarkerStartCopy24 = context.groupMarkerStart24;
  const groupMarkerEndCopy24 = context.groupMarkerEnd24;
  const tryDeeperResult = fiber0221(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart24 = groupMarkerStartCopy24;
  context.groupMarkerEnd24 = groupMarkerEndCopy24;

  if (context.quantifierCounter42 < 1) {
    context.quantifierCounter42--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;

  const followUpResult = fiber0176(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart25 = groupMarkerStartCopy25;
    context.groupMarkerEnd25 = groupMarkerEndCopy25;
    context.groupMarkerStart26 = groupMarkerStartCopy26;
    context.groupMarkerEnd26 = groupMarkerEndCopy26;
    context.groupMarkerStart28 = groupMarkerStartCopy28;
    context.groupMarkerEnd28 = groupMarkerEndCopy28;
    context.quantifierCounter42--;
  }
  return followUpResult;
};
/*
 * ...1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0220 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter43++;

  if (context.quantifierCounter43 === 4) {
    return fiber0217(start, str, context);
  }

  const tryDeeperResult = fiber0219(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter43 < 1) {
    context.quantifierCounter43--;
    return -1;
  }

  const groupMarkerStartCopy24 = context.groupMarkerStart24;
  const groupMarkerEndCopy24 = context.groupMarkerEnd24;

  const followUpResult = fiber0217(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart24 = groupMarkerStartCopy24;
    context.groupMarkerEnd24 = groupMarkerEndCopy24;
    context.quantifierCounter43--;
  }
  return followUpResult;
};
