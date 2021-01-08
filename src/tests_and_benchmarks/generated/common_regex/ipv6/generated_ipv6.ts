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
  };

  // minCharsLeft
  const min = 0;
  const max = str.length - 2;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0151(i, str, context);
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

const fiber0001 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return i;
};
const fiber0002 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * nonBacktrackingQuantifier
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0010(i, str, context);

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
  /*
   * charOrSet
   * ...fA-F]{1,4}:){7,7}[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 58;

  if (!result2) {
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
   * nonBacktrackingQuantifier
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matches5 = 0;
  while (true) {
    const wrappedResult = fiber0009(i, str, context);

    if (wrappedResult === -1) {
      if (matches5 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches5++;

      if (matches5 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...fA-F]{1,4}:){7,7}[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode6 = str.charCodeAt(i);
  let result6 = false;

  result6 = charCode6 === 58;

  if (!result6) {
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
   * nonBacktrackingQuantifier
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matches9 = 0;
  while (true) {
    const wrappedResult = fiber0008(i, str, context);

    if (wrappedResult === -1) {
      if (matches9 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches9++;

      if (matches9 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...fA-F]{1,4}:){7,7}[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode10 = str.charCodeAt(i);
  let result10 = false;

  result10 = charCode10 === 58;

  if (!result10) {
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
   * nonBacktrackingQuantifier
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matches13 = 0;
  while (true) {
    const wrappedResult = fiber0007(i, str, context);

    if (wrappedResult === -1) {
      if (matches13 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches13++;

      if (matches13 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...fA-F]{1,4}:){7,7}[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode14 = str.charCodeAt(i);
  let result14 = false;

  result14 = charCode14 === 58;

  if (!result14) {
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
   * nonBacktrackingQuantifier
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matches17 = 0;
  while (true) {
    const wrappedResult = fiber0006(i, str, context);

    if (wrappedResult === -1) {
      if (matches17 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches17++;

      if (matches17 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...fA-F]{1,4}:){7,7}[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode18 = str.charCodeAt(i);
  let result18 = false;

  result18 = charCode18 === 58;

  if (!result18) {
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
   * nonBacktrackingQuantifier
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matches21 = 0;
  while (true) {
    const wrappedResult = fiber0005(i, str, context);

    if (wrappedResult === -1) {
      if (matches21 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches21++;

      if (matches21 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...fA-F]{1,4}:){7,7}[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode22 = str.charCodeAt(i);
  let result22 = false;

  result22 = charCode22 === 58;

  if (!result22) {
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
   * nonBacktrackingQuantifier
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matches25 = 0;
  while (true) {
    const wrappedResult = fiber0004(i, str, context);

    if (wrappedResult === -1) {
      if (matches25 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches25++;

      if (matches25 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...fA-F]{1,4}:){7,7}[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode26 = str.charCodeAt(i);
  let result26 = false;

  result26 = charCode26 === 58;

  if (!result26) {
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
   * nonBacktrackingQuantifier
   * ...,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches28 = 0;
  while (true) {
    const wrappedResult = fiber0003(i, str, context);

    if (wrappedResult === -1) {
      if (matches28 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches28++;

      if (matches28 === 4) {
        break;
      }
    }
  }
  return fiber0001(i, str, context);
};
const fiber0003 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0004 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0005 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0006 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0007 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0008 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0009 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0010 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0011 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * ...A-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-f...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
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
   * charOrSet
   * ...,4}:){1,7}:|([0-9a-fA...
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
  return fiber0001(i, str, context);
};
const fiber0012 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...A-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * nonBacktrackingQuantifier
   * ...-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|(...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0013(i, str, context);

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
  /*
   * charOrSet
   * ...fA-F]{1,4}:){1,7}:|([...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 58;

  if (!result2) {
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
  return i;
};
const fiber0013 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0014 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * ...}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
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
   * charOrSet
   * ...,4}:){1,6}:[0-9a-fA-F...
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
   * nonBacktrackingQuantifier
   * ...4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0015(i, str, context);

    if (wrappedResult === -1) {
      if (matches2 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches2++;

      if (matches2 === 4) {
        break;
      }
    }
  }
  return fiber0001(i, str, context);
};
const fiber0015 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0016 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * nonBacktrackingQuantifier
   * ...:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0017(i, str, context);

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
  /*
   * charOrSet
   * ...fA-F]{1,4}:){1,6}:[0-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 58;

  if (!result2) {
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
  return i;
};
const fiber0017 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0018 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * ...A-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
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
   * ...,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
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
  return fiber0001(i, str, context);
};
const fiber0019 = (start: number, str: string, context: Context): number => {
  let i = start;
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
   * nonBacktrackingQuantifier
   * ...}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0020(i, str, context);

    if (wrappedResult === -1) {
      if (matches2 < 1) {
        return -1;
      }

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
   * ...,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart5 = context.groupMarkerStartTemp5;
  context.groupMarkerEnd5 = i;
  return i;
};
const fiber0020 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0021 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...A-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp4 = i;
  /*
   * nonBacktrackingQuantifier
   * ...-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0022(i, str, context);

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
  /*
   * charOrSet
   * ...fA-F]{1,4}:){1,5}(:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 58;

  if (!result2) {
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
  return i;
};
const fiber0022 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0023 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * ...,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
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
   * ...,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
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
  return fiber0001(i, str, context);
};
const fiber0024 = (start: number, str: string, context: Context): number => {
  let i = start;
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
   * nonBacktrackingQuantifier
   * ...}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0025(i, str, context);

    if (wrappedResult === -1) {
      if (matches2 < 1) {
        return -1;
      }

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
   * ...,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart7 = context.groupMarkerStartTemp7;
  context.groupMarkerEnd7 = i;
  return i;
};
const fiber0025 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0026 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp6 = i;
  /*
   * nonBacktrackingQuantifier
   * ...4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0027(i, str, context);

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
  /*
   * charOrSet
   * ...fA-F]{1,4}:){1,4}(:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 58;

  if (!result2) {
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
  return i;
};
const fiber0027 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0028 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * ...,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
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
   * ...,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
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
  return fiber0001(i, str, context);
};
const fiber0029 = (start: number, str: string, context: Context): number => {
  let i = start;
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
   * nonBacktrackingQuantifier
   * ...}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0030(i, str, context);

    if (wrappedResult === -1) {
      if (matches2 < 1) {
        return -1;
      }

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
   * ...,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart9 = context.groupMarkerStartTemp9;
  context.groupMarkerEnd9 = i;
  return i;
};
const fiber0030 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0031 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp8 = i;
  /*
   * nonBacktrackingQuantifier
   * ...4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0032(i, str, context);

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
  /*
   * charOrSet
   * ...fA-F]{1,4}:){1,3}(:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 58;

  if (!result2) {
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
  return i;
};
const fiber0032 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0033 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * ...,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
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
   * ...,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
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
  return fiber0001(i, str, context);
};
const fiber0034 = (start: number, str: string, context: Context): number => {
  let i = start;
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
   * nonBacktrackingQuantifier
   * ...}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0035(i, str, context);

    if (wrappedResult === -1) {
      if (matches2 < 1) {
        return -1;
      }

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
   * ...,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart11 = context.groupMarkerStartTemp11;
  context.groupMarkerEnd11 = i;
  return i;
};
const fiber0035 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0036 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp10 = i;
  /*
   * nonBacktrackingQuantifier
   * ...4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0037(i, str, context);

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
  /*
   * charOrSet
   * ...fA-F]{1,4}:){1,2}(:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 58;

  if (!result2) {
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
  return i;
};
const fiber0037 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0038 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * ...,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0041(i, str, context);

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
   * charOrSet
   * ...fA-F]{1,4}:((:[0-9a-f...
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
   * groupStartMarker
   * ...A-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp12 = i;
  /*
   * nonBacktrackingQuantifier
   * ...-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches3 = 0;
  while (true) {
    const wrappedResult = fiber0039(i, str, context);

    if (wrappedResult === -1) {
      if (matches3 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches3++;

      if (matches3 === 6) {
        break;
      }
    }
  }
  /*
   * groupEndMarker
   * ...A-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart12 = context.groupMarkerStartTemp12;
  context.groupMarkerEnd12 = i;
  return fiber0001(i, str, context);
};
const fiber0039 = (start: number, str: string, context: Context): number => {
  let i = start;
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
   * nonBacktrackingQuantifier
   * ...]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:(...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0040(i, str, context);

    if (wrappedResult === -1) {
      if (matches2 < 1) {
        return -1;
      }

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
   * ...-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart13 = context.groupMarkerStartTemp13;
  context.groupMarkerEnd13 = i;
  return i;
};
const fiber0040 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0041 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0042 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * ...}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart14 = context.groupMarkerStartTemp14;
  context.groupMarkerEnd14 = i;
  return fiber0001(i, str, context);
};
const fiber0043 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * ...){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
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
  return fiber0042(i, str, context);
};
const fiber0044 = (start: number, str: string, context: Context): number => {
  let i = start;
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
   * nonBacktrackingQuantifier
   * ...1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0045(i, str, context);

    if (wrappedResult === -1) {
      if (matches2 < 1) {
        return -1;
      }

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
   * ...){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|f...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart15 = context.groupMarkerStartTemp15;
  context.groupMarkerEnd15 = i;
  return i;
};
const fiber0045 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0046 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0042(i, str, context);
};
const fiber0047 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  const length0 = fiber0043(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart14 = groupMarkerStartCopy14;
  context.groupMarkerEnd14 = groupMarkerEndCopy14;
  const length1 = fiber0046(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart14 = groupMarkerStartCopy14;
  context.groupMarkerEnd14 = groupMarkerEndCopy14;
  return -1;
};
const fiber0048 = (start: number, str: string, context: Context): number => {
  let i = start;
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
   * nonBacktrackingQuantifier
   * ...}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches5 = 0;
  while (true) {
    const wrappedResult = fiber0050(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches5++;

      if (matches5 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...0,4}){0,4}%[0-9a-zA-Z...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode6 = str.charCodeAt(i);
  let result6 = false;

  result6 = charCode6 === 37;

  if (!result6) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:...
   *              ^^^^^^^^^^^^^^^
   */
  let matches7 = 0;
  while (true) {
    const wrappedResult = fiber0049(i, str, context);

    if (wrappedResult === -1) {
      if (matches7 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches7++;
    }
  }
  return fiber0001(i, str, context);
};
const fiber0049 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0050 = (start: number, str: string, context: Context): number => {
  let i = start;
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
   * nonBacktrackingQuantifier
   * ...:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0051(i, str, context);

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
   * ...}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart16 = context.groupMarkerStartTemp16;
  context.groupMarkerEnd16 = i;
  return i;
};
const fiber0051 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0052 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * ...])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart22 = context.groupMarkerStartTemp22;
  context.groupMarkerEnd22 = i;
  return fiber0001(i, str, context);
};
const fiber0053 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0052(i, str, context);
};
const fiber0054 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0052(i, str, context);
};
const fiber0055 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart23 = context.groupMarkerStartTemp23;
  context.groupMarkerEnd23 = i;
  return greedyQuantifier0056(i, str, context);
};
const fiber0057 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0055(i, str, context);
};
const fiber0058 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0055(i, str, context);
};
const fiber0059 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0060 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0059(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches0++;

      if (i >= str.length - 1 || matches0 === 1) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0058(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0061 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp23 = i;
  /*
   * disjunction
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;
  const length0 = fiber0057(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;
  const length1 = fiber0060(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;
  return -1;
};
const fiber0062 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * quantifierStarter
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0056 = context.quantifierCounter0;
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = greedyQuantifier0056(i, str, context);
  context.quantifierCounter0 = matchCountCopygreedyQuantifier0056;

  return cursorAfterQuantifier;
};
const fiber0063 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 46;

  if (!result1) {
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
   * disjunction
   * ...])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;
  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;
  const length0 = fiber0053(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart22 = groupMarkerStartCopy22;
  context.groupMarkerEnd22 = groupMarkerEndCopy22;
  const length1 = fiber0062(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart22 = groupMarkerStartCopy22;
  context.groupMarkerEnd22 = groupMarkerEndCopy22;
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;
  return -1;
};
const fiber0064 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0063(i, str, context);
};
const fiber0065 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0063(i, str, context);
};
const fiber0066 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart21 = context.groupMarkerStartTemp21;
  context.groupMarkerEnd21 = i;
  return greedyQuantifier0067(i, str, context);
};
const fiber0068 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0066(i, str, context);
};
const fiber0069 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0066(i, str, context);
};
const fiber0070 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0071 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0070(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches0++;

      if (i >= str.length - 1 || matches0 === 1) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0069(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0072 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp21 = i;
  /*
   * disjunction
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const length0 = fiber0068(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart21 = groupMarkerStartCopy21;
  context.groupMarkerEnd21 = groupMarkerEndCopy21;
  const length1 = fiber0071(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart21 = groupMarkerStartCopy21;
  context.groupMarkerEnd21 = groupMarkerEndCopy21;
  return -1;
};
const fiber0073 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0067 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0067(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0067;

  return cursorAfterQuantifier;
};
const fiber0074 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 46;

  if (!result1) {
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
   * disjunction
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy19 = context.groupMarkerStart19;
  const groupMarkerEndCopy19 = context.groupMarkerEnd19;
  const groupMarkerStartCopy20 = context.groupMarkerStart20;
  const groupMarkerEndCopy20 = context.groupMarkerEnd20;
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;
  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;
  const length0 = fiber0064(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart19 = groupMarkerStartCopy19;
  context.groupMarkerEnd19 = groupMarkerEndCopy19;
  context.groupMarkerStart20 = groupMarkerStartCopy20;
  context.groupMarkerEnd20 = groupMarkerEndCopy20;
  context.groupMarkerStart22 = groupMarkerStartCopy22;
  context.groupMarkerEnd22 = groupMarkerEndCopy22;
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;
  const length1 = fiber0073(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart19 = groupMarkerStartCopy19;
  context.groupMarkerEnd19 = groupMarkerEndCopy19;
  context.groupMarkerStart20 = groupMarkerStartCopy20;
  context.groupMarkerEnd20 = groupMarkerEndCopy20;
  context.groupMarkerStart21 = groupMarkerStartCopy21;
  context.groupMarkerEnd21 = groupMarkerEndCopy21;
  context.groupMarkerStart22 = groupMarkerStartCopy22;
  context.groupMarkerEnd22 = groupMarkerEndCopy22;
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;
  return -1;
};
const fiber0075 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0074(i, str, context);
};
const fiber0076 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0074(i, str, context);
};
const fiber0077 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart21 = context.groupMarkerStartTemp21;
  context.groupMarkerEnd21 = i;
  return greedyQuantifier0078(i, str, context);
};
const fiber0079 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0077(i, str, context);
};
const fiber0080 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0077(i, str, context);
};
const fiber0081 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0082 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0081(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches0++;

      if (i >= str.length - 1 || matches0 === 1) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0080(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0083 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp21 = i;
  /*
   * disjunction
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0079(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0082(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0084 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0078 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0078(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0078;

  return cursorAfterQuantifier;
};
const fiber0085 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 46;

  if (!result1) {
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
   * disjunction
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy19 = context.groupMarkerStart19;
  const groupMarkerEndCopy19 = context.groupMarkerEnd19;
  const groupMarkerStartCopy20 = context.groupMarkerStart20;
  const groupMarkerEndCopy20 = context.groupMarkerEnd20;
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;
  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;
  const length0 = fiber0075(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart19 = groupMarkerStartCopy19;
  context.groupMarkerEnd19 = groupMarkerEndCopy19;
  context.groupMarkerStart20 = groupMarkerStartCopy20;
  context.groupMarkerEnd20 = groupMarkerEndCopy20;
  context.groupMarkerStart21 = groupMarkerStartCopy21;
  context.groupMarkerEnd21 = groupMarkerEndCopy21;
  context.groupMarkerStart22 = groupMarkerStartCopy22;
  context.groupMarkerEnd22 = groupMarkerEndCopy22;
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;
  const length1 = fiber0084(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart19 = groupMarkerStartCopy19;
  context.groupMarkerEnd19 = groupMarkerEndCopy19;
  context.groupMarkerStart20 = groupMarkerStartCopy20;
  context.groupMarkerEnd20 = groupMarkerEndCopy20;
  context.groupMarkerStart21 = groupMarkerStartCopy21;
  context.groupMarkerEnd21 = groupMarkerEndCopy21;
  context.groupMarkerStart22 = groupMarkerStartCopy22;
  context.groupMarkerEnd22 = groupMarkerEndCopy22;
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;
  return -1;
};
const fiber0086 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0085(i, str, context);
};
const fiber0087 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0085(i, str, context);
};
const fiber0088 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart21 = context.groupMarkerStartTemp21;
  context.groupMarkerEnd21 = i;
  return greedyQuantifier0089(i, str, context);
};
const fiber0090 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0088(i, str, context);
};
const fiber0091 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0088(i, str, context);
};
const fiber0092 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0093 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0092(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches0++;

      if (i >= str.length - 1 || matches0 === 1) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0091(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0094 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp21 = i;
  /*
   * disjunction
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0090(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0093(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0095 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0089 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0089(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0089;

  return cursorAfterQuantifier;
};
const fiber0096 = (start: number, str: string, context: Context): number => {
  let i = start;
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
   * disjunction
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy19 = context.groupMarkerStart19;
  const groupMarkerEndCopy19 = context.groupMarkerEnd19;
  const groupMarkerStartCopy20 = context.groupMarkerStart20;
  const groupMarkerEndCopy20 = context.groupMarkerEnd20;
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;
  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;
  const length0 = fiber0086(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart19 = groupMarkerStartCopy19;
  context.groupMarkerEnd19 = groupMarkerEndCopy19;
  context.groupMarkerStart20 = groupMarkerStartCopy20;
  context.groupMarkerEnd20 = groupMarkerEndCopy20;
  context.groupMarkerStart21 = groupMarkerStartCopy21;
  context.groupMarkerEnd21 = groupMarkerEndCopy21;
  context.groupMarkerStart22 = groupMarkerStartCopy22;
  context.groupMarkerEnd22 = groupMarkerEndCopy22;
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;
  const length1 = fiber0095(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart19 = groupMarkerStartCopy19;
  context.groupMarkerEnd19 = groupMarkerEndCopy19;
  context.groupMarkerStart20 = groupMarkerStartCopy20;
  context.groupMarkerEnd20 = groupMarkerEndCopy20;
  context.groupMarkerStart21 = groupMarkerStartCopy21;
  context.groupMarkerEnd21 = groupMarkerEndCopy21;
  context.groupMarkerStart22 = groupMarkerStartCopy22;
  context.groupMarkerEnd22 = groupMarkerEndCopy22;
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;
  return -1;
};
const fiber0097 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return greedyQuantifier0098(i, str, context);
};
const fiber0099 = (start: number, str: string, context: Context): number => {
  let i = start;
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
   * nonBacktrackingQuantifier
   * ...|::(ffff(:0{1,4}){0,1}:){0...
   *              ^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0101(i, str, context);

    if (wrappedResult === -1) {
      if (matches2 < 1) {
        return -1;
      }

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
   * ...,}|::(ffff(:0{1,4}){0,1}:){0,...
   *              ^^^^^^^^^
   */
  context.groupMarkerStart18 = context.groupMarkerStartTemp18;
  context.groupMarkerEnd18 = i;
  return greedyQuantifier0100(i, str, context);
};
const fiber0101 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0102 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  let matchCountCopygreedyQuantifier0100 = context.quantifierCounter3;
  context.quantifierCounter3 = -1;
  const cursorAfterQuantifier = greedyQuantifier0100(i, str, context);
  context.quantifierCounter3 = matchCountCopygreedyQuantifier0100;

  return cursorAfterQuantifier;
};
const fiber0103 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  let matchCountCopygreedyQuantifier0098 = context.quantifierCounter2;
  context.quantifierCounter2 = -1;
  const cursorAfterQuantifier = greedyQuantifier0098(i, str, context);
  context.quantifierCounter2 = matchCountCopygreedyQuantifier0098;

  return cursorAfterQuantifier;
};
const fiber0104 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * ...])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart28 = context.groupMarkerStartTemp28;
  context.groupMarkerEnd28 = i;
  return fiber0001(i, str, context);
};
const fiber0105 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0104(i, str, context);
};
const fiber0106 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0104(i, str, context);
};
const fiber0107 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart29 = context.groupMarkerStartTemp29;
  context.groupMarkerEnd29 = i;
  return greedyQuantifier0108(i, str, context);
};
const fiber0109 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0107(i, str, context);
};
const fiber0110 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0107(i, str, context);
};
const fiber0111 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0112 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0111(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches0++;

      if (i >= str.length - 1 || matches0 === 1) {
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
const fiber0113 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp29 = i;
  /*
   * disjunction
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;
  const length0 = fiber0109(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart29 = groupMarkerStartCopy29;
  context.groupMarkerEnd29 = groupMarkerEndCopy29;
  const length1 = fiber0112(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart29 = groupMarkerStartCopy29;
  context.groupMarkerEnd29 = groupMarkerEndCopy29;
  return -1;
};
const fiber0114 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * quantifierStarter
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0108 = context.quantifierCounter4;
  context.quantifierCounter4 = -1;
  const cursorAfterQuantifier = greedyQuantifier0108(i, str, context);
  context.quantifierCounter4 = matchCountCopygreedyQuantifier0108;

  return cursorAfterQuantifier;
};
const fiber0115 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 46;

  if (!result1) {
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
   * disjunction
   * ...])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;
  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;
  const length0 = fiber0105(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart28 = groupMarkerStartCopy28;
  context.groupMarkerEnd28 = groupMarkerEndCopy28;
  const length1 = fiber0114(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart28 = groupMarkerStartCopy28;
  context.groupMarkerEnd28 = groupMarkerEndCopy28;
  context.groupMarkerStart29 = groupMarkerStartCopy29;
  context.groupMarkerEnd29 = groupMarkerEndCopy29;
  return -1;
};
const fiber0116 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0115(i, str, context);
};
const fiber0117 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0115(i, str, context);
};
const fiber0118 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart27 = context.groupMarkerStartTemp27;
  context.groupMarkerEnd27 = i;
  return greedyQuantifier0119(i, str, context);
};
const fiber0120 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0118(i, str, context);
};
const fiber0121 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0118(i, str, context);
};
const fiber0122 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0123 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0122(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches0++;

      if (i >= str.length - 1 || matches0 === 1) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0121(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0124 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp27 = i;
  /*
   * disjunction
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const length0 = fiber0120(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;
  const length1 = fiber0123(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;
  return -1;
};
const fiber0125 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0119 = context.quantifierCounter5;
  context.quantifierCounter5 = -1;
  const cursorAfterQuantifier = greedyQuantifier0119(i, str, context);
  context.quantifierCounter5 = matchCountCopygreedyQuantifier0119;

  return cursorAfterQuantifier;
};
const fiber0126 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 46;

  if (!result1) {
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
   * disjunction
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;
  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;
  const length0 = fiber0116(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart28 = groupMarkerStartCopy28;
  context.groupMarkerEnd28 = groupMarkerEndCopy28;
  context.groupMarkerStart29 = groupMarkerStartCopy29;
  context.groupMarkerEnd29 = groupMarkerEndCopy29;
  const length1 = fiber0125(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;
  context.groupMarkerStart28 = groupMarkerStartCopy28;
  context.groupMarkerEnd28 = groupMarkerEndCopy28;
  context.groupMarkerStart29 = groupMarkerStartCopy29;
  context.groupMarkerEnd29 = groupMarkerEndCopy29;
  return -1;
};
const fiber0127 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0126(i, str, context);
};
const fiber0128 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0126(i, str, context);
};
const fiber0129 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart27 = context.groupMarkerStartTemp27;
  context.groupMarkerEnd27 = i;
  return greedyQuantifier0130(i, str, context);
};
const fiber0131 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0129(i, str, context);
};
const fiber0132 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0129(i, str, context);
};
const fiber0133 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0134 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0133(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches0++;

      if (i >= str.length - 1 || matches0 === 1) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0132(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0135 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp27 = i;
  /*
   * disjunction
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0131(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0134(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0136 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0130 = context.quantifierCounter5;
  context.quantifierCounter5 = -1;
  const cursorAfterQuantifier = greedyQuantifier0130(i, str, context);
  context.quantifierCounter5 = matchCountCopygreedyQuantifier0130;

  return cursorAfterQuantifier;
};
const fiber0137 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 46;

  if (!result1) {
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
   * disjunction
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;
  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;
  const length0 = fiber0127(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;
  context.groupMarkerStart28 = groupMarkerStartCopy28;
  context.groupMarkerEnd28 = groupMarkerEndCopy28;
  context.groupMarkerStart29 = groupMarkerStartCopy29;
  context.groupMarkerEnd29 = groupMarkerEndCopy29;
  const length1 = fiber0136(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;
  context.groupMarkerStart28 = groupMarkerStartCopy28;
  context.groupMarkerEnd28 = groupMarkerEndCopy28;
  context.groupMarkerStart29 = groupMarkerStartCopy29;
  context.groupMarkerEnd29 = groupMarkerEndCopy29;
  return -1;
};
const fiber0138 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0137(i, str, context);
};
const fiber0139 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0137(i, str, context);
};
const fiber0140 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart27 = context.groupMarkerStartTemp27;
  context.groupMarkerEnd27 = i;
  return greedyQuantifier0141(i, str, context);
};
const fiber0142 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0140(i, str, context);
};
const fiber0143 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return fiber0140(i, str, context);
};
const fiber0144 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0145 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0144(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches0++;

      if (i >= str.length - 1 || matches0 === 1) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches0 >= 0) {
    const directFollowUpResult0 = fiber0143(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0146 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp27 = i;
  /*
   * disjunction
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0142(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0145(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0147 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0141 = context.quantifierCounter5;
  context.quantifierCounter5 = -1;
  const cursorAfterQuantifier = greedyQuantifier0141(i, str, context);
  context.quantifierCounter5 = matchCountCopygreedyQuantifier0141;

  return cursorAfterQuantifier;
};
const fiber0148 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * ...,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0149(i, str, context);

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
   * charOrSet
   * ...,4}:){1,4}:((25[0-5]|...
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
   * disjunction
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;
  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;
  const length0 = fiber0138(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;
  context.groupMarkerStart28 = groupMarkerStartCopy28;
  context.groupMarkerEnd28 = groupMarkerEndCopy28;
  context.groupMarkerStart29 = groupMarkerStartCopy29;
  context.groupMarkerEnd29 = groupMarkerEndCopy29;
  const length1 = fiber0147(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;
  context.groupMarkerStart28 = groupMarkerStartCopy28;
  context.groupMarkerEnd28 = groupMarkerEndCopy28;
  context.groupMarkerStart29 = groupMarkerStartCopy29;
  context.groupMarkerEnd29 = groupMarkerEndCopy29;
  return -1;
};
const fiber0149 = (start: number, str: string, context: Context): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp24 = i;
  /*
   * nonBacktrackingQuantifier
   * ...1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0150(i, str, context);

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
  /*
   * charOrSet
   * ...fA-F]{1,4}:){1,4}:((2...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 58;

  if (!result2) {
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
  return i;
};
const fiber0150 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  return i;
};
const fiber0151 = (start: number, str: string, context: Context): number => {
  let i = start;
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
  const groupMarkerStartCopy12 = context.groupMarkerStart12;
  const groupMarkerEndCopy12 = context.groupMarkerEnd12;
  const groupMarkerStartCopy14 = context.groupMarkerStart14;
  const groupMarkerEndCopy14 = context.groupMarkerEnd14;
  const groupMarkerStartCopy17 = context.groupMarkerStart17;
  const groupMarkerEndCopy17 = context.groupMarkerEnd17;
  const groupMarkerStartCopy18 = context.groupMarkerStart18;
  const groupMarkerEndCopy18 = context.groupMarkerEnd18;
  const groupMarkerStartCopy19 = context.groupMarkerStart19;
  const groupMarkerEndCopy19 = context.groupMarkerEnd19;
  const groupMarkerStartCopy20 = context.groupMarkerStart20;
  const groupMarkerEndCopy20 = context.groupMarkerEnd20;
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;
  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;
  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;
  const length0 = fiber0002(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  const length1 = fiber0011(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  const length2 = fiber0014(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  const length3 = fiber0018(i, str, context);
  if (length3 !== -1) {
    return length3;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  const length4 = fiber0023(i, str, context);
  if (length4 !== -1) {
    return length4;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  const length5 = fiber0028(i, str, context);
  if (length5 !== -1) {
    return length5;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  const length6 = fiber0033(i, str, context);
  if (length6 !== -1) {
    return length6;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  const length7 = fiber0038(i, str, context);
  if (length7 !== -1) {
    return length7;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart12 = groupMarkerStartCopy12;
  context.groupMarkerEnd12 = groupMarkerEndCopy12;
  const length8 = fiber0047(i, str, context);
  if (length8 !== -1) {
    return length8;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart14 = groupMarkerStartCopy14;
  context.groupMarkerEnd14 = groupMarkerEndCopy14;
  const length9 = fiber0048(i, str, context);
  if (length9 !== -1) {
    return length9;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  const length10 = fiber0103(i, str, context);
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
  context.groupMarkerStart21 = groupMarkerStartCopy21;
  context.groupMarkerEnd21 = groupMarkerEndCopy21;
  context.groupMarkerStart22 = groupMarkerStartCopy22;
  context.groupMarkerEnd22 = groupMarkerEndCopy22;
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;
  const length11 = fiber0148(i, str, context);
  if (length11 !== -1) {
    return length11;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;
  context.groupMarkerStart28 = groupMarkerStartCopy28;
  context.groupMarkerEnd28 = groupMarkerEndCopy28;
  context.groupMarkerStart29 = groupMarkerStartCopy29;
  context.groupMarkerEnd29 = groupMarkerEndCopy29;
  return -1;
};

/*
 * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0056 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  if (start >= str.length - 1 || context.quantifierCounter0 === 1) {
    return fiber0054(start, str, context);
  }

  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;
  const tryDeeperResult = fiber0061(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;

  const followUpResult = fiber0054(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart22 = groupMarkerStartCopy22;
    context.groupMarkerEnd22 = groupMarkerEndCopy22;
    context.quantifierCounter0--;
  }
  return followUpResult;
};
/*
 * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0067 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (start >= str.length - 3 || context.quantifierCounter1 === 1) {
    return fiber0065(start, str, context);
  }

  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const tryDeeperResult = fiber0072(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart21 = groupMarkerStartCopy21;
  context.groupMarkerEnd21 = groupMarkerEndCopy21;

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy19 = context.groupMarkerStart19;
  const groupMarkerEndCopy19 = context.groupMarkerEnd19;
  const groupMarkerStartCopy20 = context.groupMarkerStart20;
  const groupMarkerEndCopy20 = context.groupMarkerEnd20;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;
  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;

  const followUpResult = fiber0065(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart19 = groupMarkerStartCopy19;
    context.groupMarkerEnd19 = groupMarkerEndCopy19;
    context.groupMarkerStart20 = groupMarkerStartCopy20;
    context.groupMarkerEnd20 = groupMarkerEndCopy20;
    context.groupMarkerStart22 = groupMarkerStartCopy22;
    context.groupMarkerEnd22 = groupMarkerEndCopy22;
    context.groupMarkerStart23 = groupMarkerStartCopy23;
    context.groupMarkerEnd23 = groupMarkerEndCopy23;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0078 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (start >= str.length - 5 || context.quantifierCounter1 === 1) {
    return fiber0076(start, str, context);
  }

  const tryDeeperResult = fiber0083(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy19 = context.groupMarkerStart19;
  const groupMarkerEndCopy19 = context.groupMarkerEnd19;
  const groupMarkerStartCopy20 = context.groupMarkerStart20;
  const groupMarkerEndCopy20 = context.groupMarkerEnd20;
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;
  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;

  const followUpResult = fiber0076(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart19 = groupMarkerStartCopy19;
    context.groupMarkerEnd19 = groupMarkerEndCopy19;
    context.groupMarkerStart20 = groupMarkerStartCopy20;
    context.groupMarkerEnd20 = groupMarkerEndCopy20;
    context.groupMarkerStart21 = groupMarkerStartCopy21;
    context.groupMarkerEnd21 = groupMarkerEndCopy21;
    context.groupMarkerStart22 = groupMarkerStartCopy22;
    context.groupMarkerEnd22 = groupMarkerEndCopy22;
    context.groupMarkerStart23 = groupMarkerStartCopy23;
    context.groupMarkerEnd23 = groupMarkerEndCopy23;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0089 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (start >= str.length - 7 || context.quantifierCounter1 === 1) {
    return fiber0087(start, str, context);
  }

  const tryDeeperResult = fiber0094(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy19 = context.groupMarkerStart19;
  const groupMarkerEndCopy19 = context.groupMarkerEnd19;
  const groupMarkerStartCopy20 = context.groupMarkerStart20;
  const groupMarkerEndCopy20 = context.groupMarkerEnd20;
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;
  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;

  const followUpResult = fiber0087(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart19 = groupMarkerStartCopy19;
    context.groupMarkerEnd19 = groupMarkerEndCopy19;
    context.groupMarkerStart20 = groupMarkerStartCopy20;
    context.groupMarkerEnd20 = groupMarkerEndCopy20;
    context.groupMarkerStart21 = groupMarkerStartCopy21;
    context.groupMarkerEnd21 = groupMarkerEndCopy21;
    context.groupMarkerStart22 = groupMarkerStartCopy22;
    context.groupMarkerEnd22 = groupMarkerEndCopy22;
    context.groupMarkerStart23 = groupMarkerStartCopy23;
    context.groupMarkerEnd23 = groupMarkerEndCopy23;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * ...-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0098 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter2++;

  if (start >= str.length - 7 || context.quantifierCounter2 === 1) {
    return fiber0096(start, str, context);
  }

  const groupMarkerStartCopy17 = context.groupMarkerStart17;
  const groupMarkerEndCopy17 = context.groupMarkerEnd17;
  const groupMarkerStartCopy18 = context.groupMarkerStart18;
  const groupMarkerEndCopy18 = context.groupMarkerEnd18;
  const tryDeeperResult = fiber0102(start, str, context);
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
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;
  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;

  const followUpResult = fiber0096(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart19 = groupMarkerStartCopy19;
    context.groupMarkerEnd19 = groupMarkerEndCopy19;
    context.groupMarkerStart20 = groupMarkerStartCopy20;
    context.groupMarkerEnd20 = groupMarkerEndCopy20;
    context.groupMarkerStart21 = groupMarkerStartCopy21;
    context.groupMarkerEnd21 = groupMarkerEndCopy21;
    context.groupMarkerStart22 = groupMarkerStartCopy22;
    context.groupMarkerEnd22 = groupMarkerEndCopy22;
    context.groupMarkerStart23 = groupMarkerStartCopy23;
    context.groupMarkerEnd23 = groupMarkerEndCopy23;
    context.quantifierCounter2--;
  }
  return followUpResult;
};
/*
 * ...,}|::(ffff(:0{1,4}){0,1}:){0,1}((2...
 *              ^^^^^^^^^^^^^^
 */
const greedyQuantifier0100 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter3++;

  if (start >= str.length - 1 || context.quantifierCounter3 === 1) {
    return fiber0097(start, str, context);
  }

  const groupMarkerStartCopy18 = context.groupMarkerStart18;
  const groupMarkerEndCopy18 = context.groupMarkerEnd18;
  const tryDeeperResult = fiber0099(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart18 = groupMarkerStartCopy18;
  context.groupMarkerEnd18 = groupMarkerEndCopy18;

  const groupMarkerStartCopy17 = context.groupMarkerStart17;
  const groupMarkerEndCopy17 = context.groupMarkerEnd17;

  const followUpResult = fiber0097(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart17 = groupMarkerStartCopy17;
    context.groupMarkerEnd17 = groupMarkerEndCopy17;
    context.quantifierCounter3--;
  }
  return followUpResult;
};
/*
 * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0108 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter4++;

  if (start >= str.length - 1 || context.quantifierCounter4 === 1) {
    return fiber0106(start, str, context);
  }

  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;
  const tryDeeperResult = fiber0113(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart29 = groupMarkerStartCopy29;
  context.groupMarkerEnd29 = groupMarkerEndCopy29;

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;

  const followUpResult = fiber0106(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart28 = groupMarkerStartCopy28;
    context.groupMarkerEnd28 = groupMarkerEndCopy28;
    context.quantifierCounter4--;
  }
  return followUpResult;
};
/*
 * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0119 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter5++;

  if (start >= str.length - 3 || context.quantifierCounter5 === 1) {
    return fiber0117(start, str, context);
  }

  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const tryDeeperResult = fiber0124(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;
  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;

  const followUpResult = fiber0117(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart25 = groupMarkerStartCopy25;
    context.groupMarkerEnd25 = groupMarkerEndCopy25;
    context.groupMarkerStart26 = groupMarkerStartCopy26;
    context.groupMarkerEnd26 = groupMarkerEndCopy26;
    context.groupMarkerStart28 = groupMarkerStartCopy28;
    context.groupMarkerEnd28 = groupMarkerEndCopy28;
    context.groupMarkerStart29 = groupMarkerStartCopy29;
    context.groupMarkerEnd29 = groupMarkerEndCopy29;
    context.quantifierCounter5--;
  }
  return followUpResult;
};
/*
 * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0130 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter5++;

  if (start >= str.length - 5 || context.quantifierCounter5 === 1) {
    return fiber0128(start, str, context);
  }

  const tryDeeperResult = fiber0135(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;
  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;

  const followUpResult = fiber0128(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart25 = groupMarkerStartCopy25;
    context.groupMarkerEnd25 = groupMarkerEndCopy25;
    context.groupMarkerStart26 = groupMarkerStartCopy26;
    context.groupMarkerEnd26 = groupMarkerEndCopy26;
    context.groupMarkerStart27 = groupMarkerStartCopy27;
    context.groupMarkerEnd27 = groupMarkerEndCopy27;
    context.groupMarkerStart28 = groupMarkerStartCopy28;
    context.groupMarkerEnd28 = groupMarkerEndCopy28;
    context.groupMarkerStart29 = groupMarkerStartCopy29;
    context.groupMarkerEnd29 = groupMarkerEndCopy29;
    context.quantifierCounter5--;
  }
  return followUpResult;
};
/*
 * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0141 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter5++;

  if (start >= str.length - 7 || context.quantifierCounter5 === 1) {
    return fiber0139(start, str, context);
  }

  const tryDeeperResult = fiber0146(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;
  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;

  const followUpResult = fiber0139(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart25 = groupMarkerStartCopy25;
    context.groupMarkerEnd25 = groupMarkerEndCopy25;
    context.groupMarkerStart26 = groupMarkerStartCopy26;
    context.groupMarkerEnd26 = groupMarkerEndCopy26;
    context.groupMarkerStart27 = groupMarkerStartCopy27;
    context.groupMarkerEnd27 = groupMarkerEndCopy27;
    context.groupMarkerStart28 = groupMarkerStartCopy28;
    context.groupMarkerEnd28 = groupMarkerEndCopy28;
    context.groupMarkerStart29 = groupMarkerStartCopy29;
    context.groupMarkerEnd29 = groupMarkerEndCopy29;
    context.quantifierCounter5--;
  }
  return followUpResult;
};
