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

// Regex optimized to: /(([0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a-fA-F][0-9a-fA-F]{0,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,7}:|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,6}:[0-9a-fA-F][0-9a-fA-F]{0,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,5}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,2}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,3}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,4}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,2}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,5}|[0-9a-fA-F][0-9a-fA-F]{0,3}:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,6})|:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z][0-9a-zA-Z]*|::(ffff(:00{0,3})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))/

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

const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /(([0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a-fA-F][0-9a-fA-F]{0,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,7}:|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,6}:[0-9a-fA-F][0-9a-fA-F]{0,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,5}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,2}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,3}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,4}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,2}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,5}|[0-9a-fA-F][0-9a-fA-F]{0,3}:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,6})|:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z][0-9a-zA-Z]✱|::(ffff(:00{0,3})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * nonBacktrackingDisjunction
   * /(([0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a-fA-F][0-9a-fA-F]{0,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,7}:|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,6}:[0-9a-fA-F][0-9a-fA-F]{0,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,5}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,2}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,3}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,4}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,2}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,5}|[0-9a-fA-F][0-9a-fA-F]{0,3}:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,6})|:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z][0-9a-zA-Z]✱|::(ffff(:00{0,3})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
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
    const groupMarkerStartCopy25 = context.groupMarkerStart25;
    const groupMarkerEndCopy25 = context.groupMarkerEnd25;
    const groupMarkerStartCopy26 = context.groupMarkerStart26;
    const groupMarkerEndCopy26 = context.groupMarkerEnd26;
    const groupMarkerStartCopy27 = context.groupMarkerStart27;
    const groupMarkerEndCopy27 = context.groupMarkerEnd27;
    const groupMarkerStartCopy28 = context.groupMarkerStart28;
    const groupMarkerEndCopy28 = context.groupMarkerEnd28;
    const length0 = fiber0002(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    const length1 = fiber0011(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    const length2 = fiber0014(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction1;
    }
    const length3 = fiber0018(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction1;
    }
    const length4 = fiber0023(i, str, context);
    if (length4 !== -1) {
      i = length4;
      break nonBacktrackingDisjunction1;
    }
    const length5 = fiber0028(i, str, context);
    if (length5 !== -1) {
      i = length5;
      break nonBacktrackingDisjunction1;
    }
    const length6 = fiber0033(i, str, context);
    if (length6 !== -1) {
      i = length6;
      break nonBacktrackingDisjunction1;
    }
    const length7 = fiber0038(i, str, context);
    if (length7 !== -1) {
      i = length7;
      break nonBacktrackingDisjunction1;
    }
    context.groupMarkerStart12 = groupMarkerStartCopy12;
    context.groupMarkerEnd12 = groupMarkerEndCopy12;
    const length8 = fiber0042(i, str, context);
    if (length8 !== -1) {
      i = length8;
      break nonBacktrackingDisjunction1;
    }
    context.groupMarkerStart14 = groupMarkerStartCopy14;
    context.groupMarkerEnd14 = groupMarkerEndCopy14;
    const length9 = fiber0047(i, str, context);
    if (length9 !== -1) {
      i = length9;
      break nonBacktrackingDisjunction1;
    }
    const length10 = fiber0101(i, str, context);
    if (length10 !== -1) {
      i = length10;
      break nonBacktrackingDisjunction1;
    }
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
    const length11 = fiber0145(i, str, context);
    if (length11 !== -1) {
      i = length11;
      break nonBacktrackingDisjunction1;
    }
    context.groupMarkerStart25 = groupMarkerStartCopy25;
    context.groupMarkerEnd25 = groupMarkerEndCopy25;
    context.groupMarkerStart26 = groupMarkerStartCopy26;
    context.groupMarkerEnd26 = groupMarkerEndCopy26;
    context.groupMarkerStart27 = groupMarkerStartCopy27;
    context.groupMarkerEnd27 = groupMarkerEndCopy27;
    context.groupMarkerStart28 = groupMarkerStartCopy28;
    context.groupMarkerEnd28 = groupMarkerEndCopy28;
    return -1;
  }
  /*
   * groupEndMarker
   * /(([0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a-fA-F][0-9a-fA-F]{0,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,7}:|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,6}:[0-9a-fA-F][0-9a-fA-F]{0,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,5}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,2}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,3}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,4}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,2}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,5}|[0-9a-fA-F][0-9a-fA-F]{0,3}:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,6})|:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z][0-9a-zA-Z]✱|::(ffff(:00{0,3})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /(([0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a-f...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * charOrSet
   * /(([0-9a-fA-F][0-9a-fA-F...
   *    ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
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
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0010(i, str, context);

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
   * charOrSet
   * ...fA-F]{0,3}:){7}[0-9a-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 58;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(([0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a-f...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * groupStartMarker
   * /(([0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a-f...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * charOrSet
   * /(([0-9a-fA-F][0-9a-fA-F...
   *    ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode6 = str.charCodeAt(i);
  let result6: boolean;

  if (charCode6 <= 70) {
    if (charCode6 <= 57) {
      result6 = charCode6 >= 48;
    } else {
      result6 = charCode6 >= 65;
    }
  } else {
    if (charCode6 <= 102) {
      result6 = charCode6 >= 97;
    } else {
      result6 = false;
    }
  }
  if (!result6) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches7 = 0;
  while (true) {
    const wrappedResult = fiber0009(i, str, context);

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
   * charOrSet
   * ...fA-F]{0,3}:){7}[0-9a-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode8 = str.charCodeAt(i);
  let result8: boolean;

  result8 = charCode8 === 58;

  if (!result8) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(([0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a-f...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * groupStartMarker
   * /(([0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a-f...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * charOrSet
   * /(([0-9a-fA-F][0-9a-fA-F...
   *    ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode11 = str.charCodeAt(i);
  let result11: boolean;

  if (charCode11 <= 70) {
    if (charCode11 <= 57) {
      result11 = charCode11 >= 48;
    } else {
      result11 = charCode11 >= 65;
    }
  } else {
    if (charCode11 <= 102) {
      result11 = charCode11 >= 97;
    } else {
      result11 = false;
    }
  }
  if (!result11) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches12 = 0;
  while (true) {
    const wrappedResult = fiber0008(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches12++;

      if (matches12 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...fA-F]{0,3}:){7}[0-9a-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode13 = str.charCodeAt(i);
  let result13: boolean;

  result13 = charCode13 === 58;

  if (!result13) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(([0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a-f...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * groupStartMarker
   * /(([0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a-f...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * charOrSet
   * /(([0-9a-fA-F][0-9a-fA-F...
   *    ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode16 = str.charCodeAt(i);
  let result16: boolean;

  if (charCode16 <= 70) {
    if (charCode16 <= 57) {
      result16 = charCode16 >= 48;
    } else {
      result16 = charCode16 >= 65;
    }
  } else {
    if (charCode16 <= 102) {
      result16 = charCode16 >= 97;
    } else {
      result16 = false;
    }
  }
  if (!result16) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches17 = 0;
  while (true) {
    const wrappedResult = fiber0007(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches17++;

      if (matches17 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...fA-F]{0,3}:){7}[0-9a-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode18 = str.charCodeAt(i);
  let result18: boolean;

  result18 = charCode18 === 58;

  if (!result18) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(([0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a-f...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * groupStartMarker
   * /(([0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a-f...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * charOrSet
   * /(([0-9a-fA-F][0-9a-fA-F...
   *    ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode21 = str.charCodeAt(i);
  let result21: boolean;

  if (charCode21 <= 70) {
    if (charCode21 <= 57) {
      result21 = charCode21 >= 48;
    } else {
      result21 = charCode21 >= 65;
    }
  } else {
    if (charCode21 <= 102) {
      result21 = charCode21 >= 97;
    } else {
      result21 = false;
    }
  }
  if (!result21) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches22 = 0;
  while (true) {
    const wrappedResult = fiber0006(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches22++;

      if (matches22 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...fA-F]{0,3}:){7}[0-9a-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode23 = str.charCodeAt(i);
  let result23: boolean;

  result23 = charCode23 === 58;

  if (!result23) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(([0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a-f...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * groupStartMarker
   * /(([0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a-f...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * charOrSet
   * /(([0-9a-fA-F][0-9a-fA-F...
   *    ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode26 = str.charCodeAt(i);
  let result26: boolean;

  if (charCode26 <= 70) {
    if (charCode26 <= 57) {
      result26 = charCode26 >= 48;
    } else {
      result26 = charCode26 >= 65;
    }
  } else {
    if (charCode26 <= 102) {
      result26 = charCode26 >= 97;
    } else {
      result26 = false;
    }
  }
  if (!result26) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches27 = 0;
  while (true) {
    const wrappedResult = fiber0005(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches27++;

      if (matches27 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...fA-F]{0,3}:){7}[0-9a-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode28 = str.charCodeAt(i);
  let result28: boolean;

  result28 = charCode28 === 58;

  if (!result28) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(([0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a-f...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * groupStartMarker
   * /(([0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a-f...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * charOrSet
   * /(([0-9a-fA-F][0-9a-fA-F...
   *    ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode31 = str.charCodeAt(i);
  let result31: boolean;

  if (charCode31 <= 70) {
    if (charCode31 <= 57) {
      result31 = charCode31 >= 48;
    } else {
      result31 = charCode31 >= 65;
    }
  } else {
    if (charCode31 <= 102) {
      result31 = charCode31 >= 97;
    } else {
      result31 = false;
    }
  }
  if (!result31) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches32 = 0;
  while (true) {
    const wrappedResult = fiber0004(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches32++;

      if (matches32 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...fA-F]{0,3}:){7}[0-9a-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode33 = str.charCodeAt(i);
  let result33: boolean;

  result33 = charCode33 === 58;

  if (!result33) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /(([0-9a-fA-F][0-9a-fA-F]{0,3}:){7}[0-9a-f...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * charOrSet
   * ...{0,3}:){7}[0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode35 = str.charCodeAt(i);
  let result35: boolean;

  if (charCode35 <= 70) {
    if (charCode35 <= 57) {
      result35 = charCode35 >= 48;
    } else {
      result35 = charCode35 >= 65;
    }
  } else {
    if (charCode35 <= 102) {
      result35 = charCode35 >= 97;
    } else {
      result35 = false;
    }
  }
  if (!result35) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches36 = 0;
  while (true) {
    const wrappedResult = fiber0003(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches36++;

      if (matches36 === 3) {
        break;
      }
    }
  }
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
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){7}...
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
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){7}...
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
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){7}...
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
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){7}...
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
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){7}...
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
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){7}...
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
const fiber0010 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){7}...
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
   * charOrSet
   * ...,3}:){1,7}:|([0-9a-fA...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 58;

  if (!result1) {
    return -1;
  }
  i++;
  return i;
};
const fiber0012 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...A-F]{0,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,7}:|([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * charOrSet
   * ...-F]{0,3}|([0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
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
  i++;
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
   * charOrSet
   * ...fA-F]{0,3}:){1,7}:|([...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 58;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...A-F]{0,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,7}:|([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
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
   * ...,3}:){1,6}:[0-9a-fA-F...
   *              ^
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
const fiber0016 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...}:){1,7}:|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,6}:[0-9...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * charOrSet
   * ...:){1,7}:|([0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
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
  i++;
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
   * charOrSet
   * ...fA-F]{0,3}:){1,6}:[0-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 58;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...}:){1,7}:|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,6}:[0-9...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
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
const fiber0019 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,3}:){1,5}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,2}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp5 = i;
  /*
   * charSequence
   * ...3}:){1,5}(:[0-9a-fA-F...
   *              ^
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
   * ...,3}:){1,5}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,2}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart5 = context.groupMarkerStartTemp5;
  context.groupMarkerEnd5 = i;
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
const fiber0021 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...A-F]{0,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,5}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp4 = i;
  /*
   * charOrSet
   * ...-F]{0,3}|([0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
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
  i++;
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
   * charOrSet
   * ...fA-F]{0,3}:){1,5}(:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 58;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...A-F]{0,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,5}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart4 = context.groupMarkerStartTemp4;
  context.groupMarkerEnd4 = i;
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
const fiber0024 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,3}:){1,4}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,3}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp7 = i;
  /*
   * charSequence
   * ...3}:){1,4}(:[0-9a-fA-F...
   *              ^
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
   * ...,3}:){1,4}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,3}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart7 = context.groupMarkerStartTemp7;
  context.groupMarkerEnd7 = i;
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
const fiber0026 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,3}){1,2}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp6 = i;
  /*
   * charOrSet
   * ...3}){1,2}|([0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
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
  i++;
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
   * charOrSet
   * ...fA-F]{0,3}:){1,4}(:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 58;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...,3}){1,2}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart6 = context.groupMarkerStartTemp6;
  context.groupMarkerEnd6 = i;
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
const fiber0029 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,3}:){1,3}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,4}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp9 = i;
  /*
   * charSequence
   * ...3}:){1,3}(:[0-9a-fA-F...
   *              ^
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
   * ...,3}:){1,3}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,4}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart9 = context.groupMarkerStartTemp9;
  context.groupMarkerEnd9 = i;
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
const fiber0031 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,3}){1,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,3}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp8 = i;
  /*
   * charOrSet
   * ...3}){1,3}|([0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
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
  i++;
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
   * charOrSet
   * ...fA-F]{0,3}:){1,3}(:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 58;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...,3}){1,3}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,3}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart8 = context.groupMarkerStartTemp8;
  context.groupMarkerEnd8 = i;
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
const fiber0034 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,3}:){1,2}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,5}|[0-9...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp11 = i;
  /*
   * charSequence
   * ...3}:){1,2}(:[0-9a-fA-F...
   *              ^
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
   * ...,3}:){1,2}(:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,5}|[0-9...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart11 = context.groupMarkerStartTemp11;
  context.groupMarkerEnd11 = i;
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
const fiber0036 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,3}){1,4}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,2}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp10 = i;
  /*
   * charOrSet
   * ...3}){1,4}|([0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
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
  i++;
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
   * charOrSet
   * ...fA-F]{0,3}:){1,2}(:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 58;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...,3}){1,4}|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,2}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart10 = context.groupMarkerStartTemp10;
  context.groupMarkerEnd10 = i;
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
const fiber0038 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...,3}){1,5}|[0-9a-fA-F][0-9a-fA-F...
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
   * charOrSet
   * ...fA-F]{0,3}:((:[0-9a-f...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 58;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...A-F]{0,3}:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,6})|:((:[0-9a...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
   * ...A-F]{0,3}:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,6})|:((:[0-9a...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart12 = context.groupMarkerStartTemp12;
  context.groupMarkerEnd12 = i;
  return i;
};
const fiber0039 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...-F]{0,3}:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,6})|:((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp13 = i;
  /*
   * charSequence
   * ...F]{0,3}:((:[0-9a-fA-F...
   *              ^
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
   * ...-F]{0,3}:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,6})|:((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart13 = context.groupMarkerStartTemp13;
  context.groupMarkerEnd13 = i;
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
const fiber0042 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...3}){1,6})|:((:[0-9a-f...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...}){1,6})|:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,7}|:)|fe80:(:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp14 = i;
  /*
   * nonBacktrackingDisjunction
   * ...}){1,6})|:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,7}|:)|fe80:(:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction2: {
    const length0 = fiber0043(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction2;
    }
    const length1 = fiber0046(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction2;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...}){1,6})|:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,7}|:)|fe80:(:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart14 = context.groupMarkerStartTemp14;
  context.groupMarkerEnd14 = i;
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
const fiber0044 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...){1,6})|:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,7}|:)|f...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp15 = i;
  /*
   * charSequence
   * ...{1,6})|:((:[0-9a-fA-F...
   *              ^
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
   * ...){1,6})|:((:[0-9a-fA-F][0-9a-fA-F]{0,3}){1,7}|:)|f...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart15 = context.groupMarkerStartTemp15;
  context.groupMarkerEnd15 = i;
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
const fiber0046 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...,3}){1,7}|:)|fe80:(:[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0047 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...){1,7}|:)|fe80:(:[0-9...
   *              ^
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
    const charCode3 = str.charCodeAt(i + 1);

    let result3: boolean;

    result3 = charCode3 === 101;

    if (!result3) {
      return -1;
    }
    const charCode4 = str.charCodeAt(i + 0);

    let result4: boolean;

    result4 = charCode4 === 102;

    if (!result4) {
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
   * ...0,4}){0,4}%[0-9a-zA-Z...
   *              ^
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
const fiber0049 = (i: number, str: string, context: Context): number => {
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
  let result1: boolean;

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
   * ...}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart16 = context.groupMarkerStartTemp16;
  context.groupMarkerEnd16 = i;
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
const fiber0051 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...0,3})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart20 = context.groupMarkerStartTemp20;
  context.groupMarkerEnd20 = i;
  /*
   * charOrSet
   * ...9])?[0-9])\.){3}(25[0-...
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
   * groupEndMarker
   * ...{0,3})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart19 = context.groupMarkerStartTemp19;
  context.groupMarkerEnd19 = i;
  /*
   * groupStartMarker
   * ...-9])\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp22 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9])\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction4: {
    const groupMarkerStartCopy23 = context.groupMarkerStart23;
    const groupMarkerEndCopy23 = context.groupMarkerEnd23;
    const length0 = fiber0052(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction4;
    }
    const length1 = fiber0061(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction4;
    }
    context.groupMarkerStart23 = groupMarkerStartCopy23;
    context.groupMarkerEnd23 = groupMarkerEndCopy23;
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9])\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart22 = context.groupMarkerStartTemp22;
  context.groupMarkerEnd22 = i;
  return i;
};
const fiber0052 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...9])\.){3}(25[0-5]|(2[...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    result1 = charCode1 === 50;

    if (!result1) {
      return -1;
    }
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
const fiber0053 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|1?[0-9])?[0-9])|([0-9a-f...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0054 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...}(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([...
   *              ^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart23 = context.groupMarkerStartTemp23;
  context.groupMarkerEnd23 = i;
  return greedyQuantifier0055(i, str, context);
};
const fiber0056 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(25[0-5]|(2[0-4]|1?[0...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 50;

    if (!result0) {
      return -1;
    }
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
  return fiber0054(i, str, context);
};
const fiber0057 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(2[0-4]|1?[0-9])?[0-9])|(...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return fiber0054(i, str, context);
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
const fiber0060 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...}(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([...
   *              ^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp23 = i;
  /*
   * disjunction
   * ...}(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([...
   *              ^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;
  const length0 = fiber0056(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;
  const length1 = fiber0059(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;
  return -1;
};
const fiber0061 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...}(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([0...
   *              ^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0055 = context.quantifierCounter0;
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = greedyQuantifier0055(i, str, context);
  context.quantifierCounter0 = matchCountCopygreedyQuantifier0055;

  return cursorAfterQuantifier;
};
const fiber0062 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...,3})?:)?((25[0-5]|(2[...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    result1 = charCode1 === 50;

    if (!result1) {
      return -1;
    }
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
  return fiber0051(i, str, context);
};
const fiber0063 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|1?[0-9])?[0-9])\.){3}(25...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return fiber0051(i, str, context);
};
const fiber0064 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart21 = context.groupMarkerStartTemp21;
  context.groupMarkerEnd21 = i;
  return greedyQuantifier0065(i, str, context);
};
const fiber0066 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(25[0-5]|(2[0-4]|1?[0...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 50;

    if (!result0) {
      return -1;
    }
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
  return fiber0064(i, str, context);
};
const fiber0067 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(2[0-4]|1?[0-9])?[0-9])\....
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return fiber0064(i, str, context);
};
const fiber0068 = (i: number, str: string, context: Context): number => {
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
const fiber0069 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1?[0-9])?[0-...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0068(i, str, context);

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
    const directFollowUpResult0 = fiber0067(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0070 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp21 = i;
  /*
   * disjunction
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const length0 = fiber0066(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart21 = groupMarkerStartCopy21;
  context.groupMarkerEnd21 = groupMarkerEndCopy21;
  const length1 = fiber0069(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart21 = groupMarkerStartCopy21;
  context.groupMarkerEnd21 = groupMarkerEndCopy21;
  return -1;
};
const fiber0071 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0065 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0065(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0065;

  return cursorAfterQuantifier;
};
const fiber0072 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...0,3})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart20 = context.groupMarkerStartTemp20;
  context.groupMarkerEnd20 = i;
  /*
   * charOrSet
   * ...9])?[0-9])\.){3}(25[0-...
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
   * groupEndMarker
   * ...{0,3})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart19 = context.groupMarkerStartTemp19;
  context.groupMarkerEnd19 = i;
  /*
   * groupStartMarker
   * ...{0,3})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp19 = i;
  /*
   * groupStartMarker
   * ...0,3})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp20 = i;
  /*
   * disjunction
   * ...0,3})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy19 = context.groupMarkerStart19;
  const groupMarkerEndCopy19 = context.groupMarkerEnd19;
  const groupMarkerStartCopy20 = context.groupMarkerStart20;
  const groupMarkerEndCopy20 = context.groupMarkerEnd20;
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;
  const length0 = fiber0062(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart19 = groupMarkerStartCopy19;
  context.groupMarkerEnd19 = groupMarkerEndCopy19;
  context.groupMarkerStart20 = groupMarkerStartCopy20;
  context.groupMarkerEnd20 = groupMarkerEndCopy20;
  context.groupMarkerStart22 = groupMarkerStartCopy22;
  context.groupMarkerEnd22 = groupMarkerEndCopy22;
  const length1 = fiber0071(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart19 = groupMarkerStartCopy19;
  context.groupMarkerEnd19 = groupMarkerEndCopy19;
  context.groupMarkerStart20 = groupMarkerStartCopy20;
  context.groupMarkerEnd20 = groupMarkerEndCopy20;
  context.groupMarkerStart21 = groupMarkerStartCopy21;
  context.groupMarkerEnd21 = groupMarkerEndCopy21;
  context.groupMarkerStart22 = groupMarkerStartCopy22;
  context.groupMarkerEnd22 = groupMarkerEndCopy22;
  return -1;
};
const fiber0073 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...,3})?:)?((25[0-5]|(2[...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    result1 = charCode1 === 50;

    if (!result1) {
      return -1;
    }
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
  return fiber0072(i, str, context);
};
const fiber0074 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|1?[0-9])?[0-9])\.){3}(25...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return fiber0072(i, str, context);
};
const fiber0075 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart21 = context.groupMarkerStartTemp21;
  context.groupMarkerEnd21 = i;
  return greedyQuantifier0076(i, str, context);
};
const fiber0077 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(25[0-5]|(2[0-4]|1?[0...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 50;

    if (!result0) {
      return -1;
    }
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
  return fiber0075(i, str, context);
};
const fiber0078 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(2[0-4]|1?[0-9])?[0-9])\....
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return fiber0075(i, str, context);
};
const fiber0079 = (i: number, str: string, context: Context): number => {
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
const fiber0080 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1?[0-9])?[0-...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0079(i, str, context);

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
    const directFollowUpResult0 = fiber0078(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0081 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp21 = i;
  /*
   * disjunction
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0077(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0080(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0082 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0076 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0076(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0076;

  return cursorAfterQuantifier;
};
const fiber0083 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...0,3})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart20 = context.groupMarkerStartTemp20;
  context.groupMarkerEnd20 = i;
  /*
   * charOrSet
   * ...9])?[0-9])\.){3}(25[0-...
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
   * groupEndMarker
   * ...{0,3})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart19 = context.groupMarkerStartTemp19;
  context.groupMarkerEnd19 = i;
  /*
   * groupStartMarker
   * ...{0,3})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp19 = i;
  /*
   * groupStartMarker
   * ...0,3})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp20 = i;
  /*
   * disjunction
   * ...0,3})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy19 = context.groupMarkerStart19;
  const groupMarkerEndCopy19 = context.groupMarkerEnd19;
  const groupMarkerStartCopy20 = context.groupMarkerStart20;
  const groupMarkerEndCopy20 = context.groupMarkerEnd20;
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;
  const length0 = fiber0073(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart19 = groupMarkerStartCopy19;
  context.groupMarkerEnd19 = groupMarkerEndCopy19;
  context.groupMarkerStart20 = groupMarkerStartCopy20;
  context.groupMarkerEnd20 = groupMarkerEndCopy20;
  context.groupMarkerStart21 = groupMarkerStartCopy21;
  context.groupMarkerEnd21 = groupMarkerEndCopy21;
  context.groupMarkerStart22 = groupMarkerStartCopy22;
  context.groupMarkerEnd22 = groupMarkerEndCopy22;
  const length1 = fiber0082(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart19 = groupMarkerStartCopy19;
  context.groupMarkerEnd19 = groupMarkerEndCopy19;
  context.groupMarkerStart20 = groupMarkerStartCopy20;
  context.groupMarkerEnd20 = groupMarkerEndCopy20;
  context.groupMarkerStart21 = groupMarkerStartCopy21;
  context.groupMarkerEnd21 = groupMarkerEndCopy21;
  context.groupMarkerStart22 = groupMarkerStartCopy22;
  context.groupMarkerEnd22 = groupMarkerEndCopy22;
  return -1;
};
const fiber0084 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...,3})?:)?((25[0-5]|(2[...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    result1 = charCode1 === 50;

    if (!result1) {
      return -1;
    }
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
  return fiber0083(i, str, context);
};
const fiber0085 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|1?[0-9])?[0-9])\.){3}(25...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return fiber0083(i, str, context);
};
const fiber0086 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart21 = context.groupMarkerStartTemp21;
  context.groupMarkerEnd21 = i;
  return greedyQuantifier0087(i, str, context);
};
const fiber0088 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(25[0-5]|(2[0-4]|1?[0...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 50;

    if (!result0) {
      return -1;
    }
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
  return fiber0086(i, str, context);
};
const fiber0089 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(2[0-4]|1?[0-9])?[0-9])\....
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return fiber0086(i, str, context);
};
const fiber0090 = (i: number, str: string, context: Context): number => {
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
const fiber0091 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1?[0-9])?[0-...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0090(i, str, context);

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
    const directFollowUpResult0 = fiber0089(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0092 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp21 = i;
  /*
   * disjunction
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0088(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0091(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0093 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0087 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0087(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0087;

  return cursorAfterQuantifier;
};
const fiber0094 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...{0,3})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp19 = i;
  /*
   * groupStartMarker
   * ...0,3})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp20 = i;
  /*
   * disjunction
   * ...0,3})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy19 = context.groupMarkerStart19;
  const groupMarkerEndCopy19 = context.groupMarkerEnd19;
  const groupMarkerStartCopy20 = context.groupMarkerStart20;
  const groupMarkerEndCopy20 = context.groupMarkerEnd20;
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;
  const length0 = fiber0084(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart19 = groupMarkerStartCopy19;
  context.groupMarkerEnd19 = groupMarkerEndCopy19;
  context.groupMarkerStart20 = groupMarkerStartCopy20;
  context.groupMarkerEnd20 = groupMarkerEndCopy20;
  context.groupMarkerStart21 = groupMarkerStartCopy21;
  context.groupMarkerEnd21 = groupMarkerEndCopy21;
  context.groupMarkerStart22 = groupMarkerStartCopy22;
  context.groupMarkerEnd22 = groupMarkerEndCopy22;
  const length1 = fiber0093(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart19 = groupMarkerStartCopy19;
  context.groupMarkerEnd19 = groupMarkerEndCopy19;
  context.groupMarkerStart20 = groupMarkerStartCopy20;
  context.groupMarkerEnd20 = groupMarkerEndCopy20;
  context.groupMarkerStart21 = groupMarkerStartCopy21;
  context.groupMarkerEnd21 = groupMarkerEndCopy21;
  context.groupMarkerStart22 = groupMarkerStartCopy22;
  context.groupMarkerEnd22 = groupMarkerEndCopy22;
  return -1;
};
const fiber0095 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...:00{0,3})?:)?((25[0-5...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 58;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...-zA-Z]✱|::(ffff(:00{0,3})?:)?((25[0-5]...
   *              ^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart17 = context.groupMarkerStartTemp17;
  context.groupMarkerEnd17 = i;
  return greedyQuantifier0096(i, str, context);
};
const fiber0097 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...]✱|::(ffff(:00{0,3})?:)?((25[0...
   *              ^^^^^^^^^^
   */
  context.groupMarkerStartTemp18 = i;
  /*
   * charSequence
   * ...✱|::(ffff(:00{0,3})?:...
   *              ^
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
   * ...::(ffff(:00{0,3})?:)?((25[...
   *              ^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0099(i, str, context);

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
   * ...]✱|::(ffff(:00{0,3})?:)?((25[0...
   *              ^^^^^^^^^^
   */
  context.groupMarkerStart18 = context.groupMarkerStartTemp18;
  context.groupMarkerEnd18 = i;
  return greedyQuantifier0098(i, str, context);
};
const fiber0099 = (i: number, str: string, context: Context): number => {
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
const fiber0100 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...-zA-Z]✱|::(ffff(:00{0,3})?:)?((25[0-5]...
   *              ^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp17 = i;
  /*
   * charSequence
   * ...zA-Z]✱|::(ffff(:00{0,...
   *              ^
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
   * ...]✱|::(ffff(:00{0,3})?:)?((25[0-...
   *              ^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0098 = context.quantifierCounter3;
  context.quantifierCounter3 = -1;
  const cursorAfterQuantifier = greedyQuantifier0098(i, str, context);
  context.quantifierCounter3 = matchCountCopygreedyQuantifier0098;

  return cursorAfterQuantifier;
};
const fiber0101 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...9a-zA-Z]✱|::(ffff(:00...
   *              ^
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
   * ...-zA-Z]✱|::(ffff(:00{0,3})?:)?((25[0-5]|...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0096 = context.quantifierCounter2;
  context.quantifierCounter2 = -1;
  const cursorAfterQuantifier = greedyQuantifier0096(i, str, context);
  context.quantifierCounter2 = matchCountCopygreedyQuantifier0096;

  return cursorAfterQuantifier;
};
const fiber0102 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart26 = context.groupMarkerStartTemp26;
  context.groupMarkerEnd26 = i;
  /*
   * charOrSet
   * ...9])?[0-9])\.){3}(25[0-...
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
   * groupEndMarker
   * ...3}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart25 = context.groupMarkerStartTemp25;
  context.groupMarkerEnd25 = i;
  /*
   * groupStartMarker
   * ...-9])\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp28 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9])\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction4: {
    const groupMarkerStartCopy29 = context.groupMarkerStart29;
    const groupMarkerEndCopy29 = context.groupMarkerEnd29;
    const length0 = fiber0103(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction4;
    }
    const length1 = fiber0112(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction4;
    }
    context.groupMarkerStart29 = groupMarkerStartCopy29;
    context.groupMarkerEnd29 = groupMarkerEndCopy29;
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9])\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart28 = context.groupMarkerStartTemp28;
  context.groupMarkerEnd28 = i;
  return i;
};
const fiber0103 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...9])\.){3}(25[0-5]|(2[...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    result1 = charCode1 === 50;

    if (!result1) {
      return -1;
    }
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
   * charOrSet
   * ...|1?[0-9])?[0-9]))/
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0105 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...}(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))/
   *              ^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart29 = context.groupMarkerStartTemp29;
  context.groupMarkerEnd29 = i;
  return greedyQuantifier0106(i, str, context);
};
const fiber0107 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(25[0-5]|(2[0-4]|1?[0...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 50;

    if (!result0) {
      return -1;
    }
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
  return fiber0105(i, str, context);
};
const fiber0108 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(2[0-4]|1?[0-9])?[0-9]))/
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return fiber0105(i, str, context);
};
const fiber0109 = (i: number, str: string, context: Context): number => {
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
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1?[0-9])?[0-...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0109(i, str, context);

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
    const directFollowUpResult0 = fiber0108(i, str, context);

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
   * groupStartMarker
   * ...}(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))/
   *              ^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp29 = i;
  /*
   * disjunction
   * ...}(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))/
   *              ^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;
  const length0 = fiber0107(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart29 = groupMarkerStartCopy29;
  context.groupMarkerEnd29 = groupMarkerEndCopy29;
  const length1 = fiber0110(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart29 = groupMarkerStartCopy29;
  context.groupMarkerEnd29 = groupMarkerEndCopy29;
  return -1;
};
const fiber0112 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...}(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))/
   *              ^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0106 = context.quantifierCounter4;
  context.quantifierCounter4 = -1;
  const cursorAfterQuantifier = greedyQuantifier0106(i, str, context);
  context.quantifierCounter4 = matchCountCopygreedyQuantifier0106;

  return cursorAfterQuantifier;
};
const fiber0113 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...:){1,4}:((25[0-5]|(2[...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    result1 = charCode1 === 50;

    if (!result1) {
      return -1;
    }
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
  return fiber0102(i, str, context);
};
const fiber0114 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|1?[0-9])?[0-9])\.){3}(25...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return fiber0102(i, str, context);
};
const fiber0115 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart27 = context.groupMarkerStartTemp27;
  context.groupMarkerEnd27 = i;
  return greedyQuantifier0116(i, str, context);
};
const fiber0117 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(25[0-5]|(2[0-4]|1?[0...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 50;

    if (!result0) {
      return -1;
    }
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
  return fiber0115(i, str, context);
};
const fiber0118 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(2[0-4]|1?[0-9])?[0-9])\....
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return fiber0115(i, str, context);
};
const fiber0119 = (i: number, str: string, context: Context): number => {
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
const fiber0120 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1?[0-9])?[0-...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0119(i, str, context);

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
    const directFollowUpResult0 = fiber0118(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0121 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp27 = i;
  /*
   * disjunction
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const length0 = fiber0117(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;
  const length1 = fiber0120(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;
  return -1;
};
const fiber0122 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0116 = context.quantifierCounter5;
  context.quantifierCounter5 = -1;
  const cursorAfterQuantifier = greedyQuantifier0116(i, str, context);
  context.quantifierCounter5 = matchCountCopygreedyQuantifier0116;

  return cursorAfterQuantifier;
};
const fiber0123 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart26 = context.groupMarkerStartTemp26;
  context.groupMarkerEnd26 = i;
  /*
   * charOrSet
   * ...9])?[0-9])\.){3}(25[0-...
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
   * groupEndMarker
   * ...3}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart25 = context.groupMarkerStartTemp25;
  context.groupMarkerEnd25 = i;
  /*
   * groupStartMarker
   * ...3}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp25 = i;
  /*
   * groupStartMarker
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp26 = i;
  /*
   * disjunction
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;
  const length0 = fiber0113(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart28 = groupMarkerStartCopy28;
  context.groupMarkerEnd28 = groupMarkerEndCopy28;
  const length1 = fiber0122(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;
  context.groupMarkerStart28 = groupMarkerStartCopy28;
  context.groupMarkerEnd28 = groupMarkerEndCopy28;
  return -1;
};
const fiber0124 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...:){1,4}:((25[0-5]|(2[...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    result1 = charCode1 === 50;

    if (!result1) {
      return -1;
    }
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
  return fiber0123(i, str, context);
};
const fiber0125 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|1?[0-9])?[0-9])\.){3}(25...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return fiber0123(i, str, context);
};
const fiber0126 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart27 = context.groupMarkerStartTemp27;
  context.groupMarkerEnd27 = i;
  return greedyQuantifier0127(i, str, context);
};
const fiber0128 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(25[0-5]|(2[0-4]|1?[0...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 50;

    if (!result0) {
      return -1;
    }
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
  return fiber0126(i, str, context);
};
const fiber0129 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(2[0-4]|1?[0-9])?[0-9])\....
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return fiber0126(i, str, context);
};
const fiber0130 = (i: number, str: string, context: Context): number => {
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
const fiber0131 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1?[0-9])?[0-...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0130(i, str, context);

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
    const directFollowUpResult0 = fiber0129(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0132 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp27 = i;
  /*
   * disjunction
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0128(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0131(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0133 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0127 = context.quantifierCounter5;
  context.quantifierCounter5 = -1;
  const cursorAfterQuantifier = greedyQuantifier0127(i, str, context);
  context.quantifierCounter5 = matchCountCopygreedyQuantifier0127;

  return cursorAfterQuantifier;
};
const fiber0134 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart26 = context.groupMarkerStartTemp26;
  context.groupMarkerEnd26 = i;
  /*
   * charOrSet
   * ...9])?[0-9])\.){3}(25[0-...
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
   * groupEndMarker
   * ...3}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart25 = context.groupMarkerStartTemp25;
  context.groupMarkerEnd25 = i;
  /*
   * groupStartMarker
   * ...3}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp25 = i;
  /*
   * groupStartMarker
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp26 = i;
  /*
   * disjunction
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;
  const length0 = fiber0124(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;
  context.groupMarkerStart28 = groupMarkerStartCopy28;
  context.groupMarkerEnd28 = groupMarkerEndCopy28;
  const length1 = fiber0133(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;
  context.groupMarkerStart28 = groupMarkerStartCopy28;
  context.groupMarkerEnd28 = groupMarkerEndCopy28;
  return -1;
};
const fiber0135 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...:){1,4}:((25[0-5]|(2[...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    result1 = charCode1 === 50;

    if (!result1) {
      return -1;
    }
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
  return fiber0134(i, str, context);
};
const fiber0136 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|1?[0-9])?[0-9])\.){3}(25...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return fiber0134(i, str, context);
};
const fiber0137 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart27 = context.groupMarkerStartTemp27;
  context.groupMarkerEnd27 = i;
  return greedyQuantifier0138(i, str, context);
};
const fiber0139 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(25[0-5]|(2[0-4]|1?[0...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 50;

    if (!result0) {
      return -1;
    }
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
  return fiber0137(i, str, context);
};
const fiber0140 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...(2[0-4]|1?[0-9])?[0-9])\....
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return fiber0137(i, str, context);
};
const fiber0141 = (i: number, str: string, context: Context): number => {
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
const fiber0142 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1?[0-9])?[0-...
   *              ^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0141(i, str, context);

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
    const directFollowUpResult0 = fiber0140(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0143 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp27 = i;
  /*
   * disjunction
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.)...
   *              ^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0139(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0142(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  return -1;
};
const fiber0144 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0138 = context.quantifierCounter5;
  context.quantifierCounter5 = -1;
  const cursorAfterQuantifier = greedyQuantifier0138(i, str, context);
  context.quantifierCounter5 = matchCountCopygreedyQuantifier0138;

  return cursorAfterQuantifier;
};
const fiber0145 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...])?[0-9])|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}:((25[0-5]...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0146(i, str, context);

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
   * ...,3}:){1,4}:((25[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1: boolean;

  result1 = charCode1 === 58;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...3}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp25 = i;
  /*
   * groupStartMarker
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp26 = i;
  /*
   * disjunction
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){3}(25[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;
  const length0 = fiber0135(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;
  context.groupMarkerStart28 = groupMarkerStartCopy28;
  context.groupMarkerEnd28 = groupMarkerEndCopy28;
  const length1 = fiber0144(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;
  context.groupMarkerStart28 = groupMarkerStartCopy28;
  context.groupMarkerEnd28 = groupMarkerEndCopy28;
  return -1;
};
const fiber0146 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...])?[0-9])|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}:((25...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp24 = i;
  /*
   * charOrSet
   * ...)?[0-9])|([0-9a-fA-F][0-9a-fA-F...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
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
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}:((...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0147(i, str, context);

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
   * charOrSet
   * ...fA-F]{0,3}:){1,4}:((2...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 58;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...])?[0-9])|([0-9a-fA-F][0-9a-fA-F]{0,3}:){1,4}:((25...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart24 = context.groupMarkerStartTemp24;
  context.groupMarkerEnd24 = i;
  return i;
};
const fiber0147 = (i: number, str: string, context: Context): number => {
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

/*
 * ...}(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([0...
 *              ^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0055 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  if (context.quantifierCounter0 === 1) {
    return fiber0053(start, str, context);
  }

  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;
  const tryDeeperResult = fiber0060(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;

  const followUpResult = fiber0053(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter0--;
  }
  return followUpResult;
};
/*
 * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){...
 *              ^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0065 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (context.quantifierCounter1 === 1) {
    return fiber0063(start, str, context);
  }

  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const tryDeeperResult = fiber0070(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart21 = groupMarkerStartCopy21;
  context.groupMarkerEnd21 = groupMarkerEndCopy21;

  const groupMarkerStartCopy19 = context.groupMarkerStart19;
  const groupMarkerEndCopy19 = context.groupMarkerEnd19;
  const groupMarkerStartCopy20 = context.groupMarkerStart20;
  const groupMarkerEndCopy20 = context.groupMarkerEnd20;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;

  const followUpResult = fiber0063(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart19 = groupMarkerStartCopy19;
    context.groupMarkerEnd19 = groupMarkerEndCopy19;
    context.groupMarkerStart20 = groupMarkerStartCopy20;
    context.groupMarkerEnd20 = groupMarkerEndCopy20;
    context.groupMarkerStart22 = groupMarkerStartCopy22;
    context.groupMarkerEnd22 = groupMarkerEndCopy22;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){...
 *              ^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0076 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (context.quantifierCounter1 === 1) {
    return fiber0074(start, str, context);
  }

  const tryDeeperResult = fiber0081(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy19 = context.groupMarkerStart19;
  const groupMarkerEndCopy19 = context.groupMarkerEnd19;
  const groupMarkerStartCopy20 = context.groupMarkerStart20;
  const groupMarkerEndCopy20 = context.groupMarkerEnd20;
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;

  const followUpResult = fiber0074(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart19 = groupMarkerStartCopy19;
    context.groupMarkerEnd19 = groupMarkerEndCopy19;
    context.groupMarkerStart20 = groupMarkerStartCopy20;
    context.groupMarkerEnd20 = groupMarkerEndCopy20;
    context.groupMarkerStart21 = groupMarkerStartCopy21;
    context.groupMarkerEnd21 = groupMarkerEndCopy21;
    context.groupMarkerStart22 = groupMarkerStartCopy22;
    context.groupMarkerEnd22 = groupMarkerEndCopy22;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){...
 *              ^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0087 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (context.quantifierCounter1 === 1) {
    return fiber0085(start, str, context);
  }

  const tryDeeperResult = fiber0092(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy19 = context.groupMarkerStart19;
  const groupMarkerEndCopy19 = context.groupMarkerEnd19;
  const groupMarkerStartCopy20 = context.groupMarkerStart20;
  const groupMarkerEndCopy20 = context.groupMarkerEnd20;
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;

  const followUpResult = fiber0085(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart19 = groupMarkerStartCopy19;
    context.groupMarkerEnd19 = groupMarkerEndCopy19;
    context.groupMarkerStart20 = groupMarkerStartCopy20;
    context.groupMarkerEnd20 = groupMarkerEndCopy20;
    context.groupMarkerStart21 = groupMarkerStartCopy21;
    context.groupMarkerEnd21 = groupMarkerEndCopy21;
    context.groupMarkerStart22 = groupMarkerStartCopy22;
    context.groupMarkerEnd22 = groupMarkerEndCopy22;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * ...-zA-Z]✱|::(ffff(:00{0,3})?:)?((25[0-5]|...
 *              ^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0096 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter2++;

  if (context.quantifierCounter2 === 1) {
    return fiber0094(start, str, context);
  }

  const groupMarkerStartCopy17 = context.groupMarkerStart17;
  const groupMarkerEndCopy17 = context.groupMarkerEnd17;
  const groupMarkerStartCopy18 = context.groupMarkerStart18;
  const groupMarkerEndCopy18 = context.groupMarkerEnd18;
  const tryDeeperResult = fiber0100(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart17 = groupMarkerStartCopy17;
  context.groupMarkerEnd17 = groupMarkerEndCopy17;
  context.groupMarkerStart18 = groupMarkerStartCopy18;
  context.groupMarkerEnd18 = groupMarkerEndCopy18;

  const groupMarkerStartCopy19 = context.groupMarkerStart19;
  const groupMarkerEndCopy19 = context.groupMarkerEnd19;
  const groupMarkerStartCopy20 = context.groupMarkerStart20;
  const groupMarkerEndCopy20 = context.groupMarkerEnd20;
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;

  const followUpResult = fiber0094(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart19 = groupMarkerStartCopy19;
    context.groupMarkerEnd19 = groupMarkerEndCopy19;
    context.groupMarkerStart20 = groupMarkerStartCopy20;
    context.groupMarkerEnd20 = groupMarkerEndCopy20;
    context.groupMarkerStart21 = groupMarkerStartCopy21;
    context.groupMarkerEnd21 = groupMarkerEndCopy21;
    context.groupMarkerStart22 = groupMarkerStartCopy22;
    context.groupMarkerEnd22 = groupMarkerEndCopy22;
    context.quantifierCounter2--;
  }
  return followUpResult;
};
/*
 * ...]✱|::(ffff(:00{0,3})?:)?((25[0-...
 *              ^^^^^^^^^^^
 */
const greedyQuantifier0098 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter3++;

  if (context.quantifierCounter3 === 1) {
    return fiber0095(start, str, context);
  }

  const groupMarkerStartCopy18 = context.groupMarkerStart18;
  const groupMarkerEndCopy18 = context.groupMarkerEnd18;
  const tryDeeperResult = fiber0097(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart18 = groupMarkerStartCopy18;
  context.groupMarkerEnd18 = groupMarkerEndCopy18;

  const groupMarkerStartCopy17 = context.groupMarkerStart17;
  const groupMarkerEndCopy17 = context.groupMarkerEnd17;

  const followUpResult = fiber0095(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart17 = groupMarkerStartCopy17;
    context.groupMarkerEnd17 = groupMarkerEndCopy17;
    context.quantifierCounter3--;
  }
  return followUpResult;
};
/*
 * ...}(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))/
 *              ^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0106 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter4++;

  if (context.quantifierCounter4 === 1) {
    return fiber0104(start, str, context);
  }

  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;
  const tryDeeperResult = fiber0111(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart29 = groupMarkerStartCopy29;
  context.groupMarkerEnd29 = groupMarkerEndCopy29;

  const followUpResult = fiber0104(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter4--;
  }
  return followUpResult;
};
/*
 * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){...
 *              ^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0116 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter5++;

  if (context.quantifierCounter5 === 1) {
    return fiber0114(start, str, context);
  }

  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const tryDeeperResult = fiber0121(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;

  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;

  const followUpResult = fiber0114(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart25 = groupMarkerStartCopy25;
    context.groupMarkerEnd25 = groupMarkerEndCopy25;
    context.groupMarkerStart26 = groupMarkerStartCopy26;
    context.groupMarkerEnd26 = groupMarkerEndCopy26;
    context.groupMarkerStart28 = groupMarkerStartCopy28;
    context.groupMarkerEnd28 = groupMarkerEndCopy28;
    context.quantifierCounter5--;
  }
  return followUpResult;
};
/*
 * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){...
 *              ^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0127 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter5++;

  if (context.quantifierCounter5 === 1) {
    return fiber0125(start, str, context);
  }

  const tryDeeperResult = fiber0132(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;

  const followUpResult = fiber0125(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart25 = groupMarkerStartCopy25;
    context.groupMarkerEnd25 = groupMarkerEndCopy25;
    context.groupMarkerStart26 = groupMarkerStartCopy26;
    context.groupMarkerEnd26 = groupMarkerEndCopy26;
    context.groupMarkerStart27 = groupMarkerStartCopy27;
    context.groupMarkerEnd27 = groupMarkerEndCopy27;
    context.groupMarkerStart28 = groupMarkerStartCopy28;
    context.groupMarkerEnd28 = groupMarkerEndCopy28;
    context.quantifierCounter5--;
  }
  return followUpResult;
};
/*
 * ...((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\.){...
 *              ^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0138 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter5++;

  if (context.quantifierCounter5 === 1) {
    return fiber0136(start, str, context);
  }

  const tryDeeperResult = fiber0143(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;

  const followUpResult = fiber0136(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart25 = groupMarkerStartCopy25;
    context.groupMarkerEnd25 = groupMarkerEndCopy25;
    context.groupMarkerStart26 = groupMarkerStartCopy26;
    context.groupMarkerEnd26 = groupMarkerEndCopy26;
    context.groupMarkerStart27 = groupMarkerStartCopy27;
    context.groupMarkerEnd27 = groupMarkerEndCopy27;
    context.groupMarkerStart28 = groupMarkerStartCopy28;
    context.groupMarkerEnd28 = groupMarkerEndCopy28;
    context.quantifierCounter5--;
  }
  return followUpResult;
};
