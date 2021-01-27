// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/'
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
  groupMarkerStart30: number;
  groupMarkerStartTemp30: number;
  groupMarkerEnd30: number;
  groupMarkerStart31: number;
  groupMarkerStartTemp31: number;
  groupMarkerEnd31: number;
  groupMarkerStart32: number;
  groupMarkerStartTemp32: number;
  groupMarkerEnd32: number;
  groupMarkerStart33: number;
  groupMarkerStartTemp33: number;
  groupMarkerEnd33: number;
  groupMarkerStart34: number;
  groupMarkerStartTemp34: number;
  groupMarkerEnd34: number;
  groupMarkerStart35: number;
  groupMarkerStartTemp35: number;
  groupMarkerEnd35: number;
  groupMarkerStart36: number;
  groupMarkerStartTemp36: number;
  groupMarkerEnd36: number;
  groupMarkerStart37: number;
  groupMarkerStartTemp37: number;
  groupMarkerEnd37: number;
  groupMarkerStart38: number;
  groupMarkerStartTemp38: number;
  groupMarkerEnd38: number;
  groupMarkerStart39: number;
  groupMarkerStartTemp39: number;
  groupMarkerEnd39: number;
  groupMarkerStart40: number;
  groupMarkerStartTemp40: number;
  groupMarkerEnd40: number;
  groupMarkerStart41: number;
  groupMarkerStartTemp41: number;
  groupMarkerEnd41: number;
  groupMarkerStart42: number;
  groupMarkerStartTemp42: number;
  groupMarkerEnd42: number;
  groupMarkerStart43: number;
  groupMarkerStartTemp43: number;
  groupMarkerEnd43: number;
  groupMarkerStart44: number;
  groupMarkerStartTemp44: number;
  groupMarkerEnd44: number;
  groupMarkerStart45: number;
  groupMarkerStartTemp45: number;
  groupMarkerEnd45: number;
  groupMarkerStart46: number;
  groupMarkerStartTemp46: number;
  groupMarkerEnd46: number;
  groupMarkerStart47: number;
  groupMarkerStartTemp47: number;
  groupMarkerEnd47: number;
  groupMarkerStart48: number;
  groupMarkerStartTemp48: number;
  groupMarkerEnd48: number;
  groupMarkerStart49: number;
  groupMarkerStartTemp49: number;
  groupMarkerEnd49: number;
  groupMarkerStart50: number;
  groupMarkerStartTemp50: number;
  groupMarkerEnd50: number;
  groupMarkerStart51: number;
  groupMarkerStartTemp51: number;
  groupMarkerEnd51: number;
  groupMarkerStart52: number;
  groupMarkerStartTemp52: number;
  groupMarkerEnd52: number;
  groupMarkerStart53: number;
  groupMarkerStartTemp53: number;
  groupMarkerEnd53: number;
  groupMarkerStart54: number;
  groupMarkerStartTemp54: number;
  groupMarkerEnd54: number;
  groupMarkerStart55: number;
  groupMarkerStartTemp55: number;
  groupMarkerEnd55: number;
  groupMarkerStart56: number;
  groupMarkerStartTemp56: number;
  groupMarkerEnd56: number;
  groupMarkerStart57: number;
  groupMarkerStartTemp57: number;
  groupMarkerEnd57: number;
  groupMarkerStart58: number;
  groupMarkerStartTemp58: number;
  groupMarkerEnd58: number;
  groupMarkerStart59: number;
  groupMarkerStartTemp59: number;
  groupMarkerEnd59: number;
  groupMarkerStart60: number;
  groupMarkerStartTemp60: number;
  groupMarkerEnd60: number;
  groupMarkerStart61: number;
  groupMarkerStartTemp61: number;
  groupMarkerEnd61: number;
  groupMarkerStart62: number;
  groupMarkerStartTemp62: number;
  groupMarkerEnd62: number;
  groupMarkerStart63: number;
  groupMarkerStartTemp63: number;
  groupMarkerEnd63: number;
  groupMarkerStart64: number;
  groupMarkerStartTemp64: number;
  groupMarkerEnd64: number;
  groupMarkerStart65: number;
  groupMarkerStartTemp65: number;
  groupMarkerEnd65: number;
  groupMarkerStart66: number;
  groupMarkerStartTemp66: number;
  groupMarkerEnd66: number;
  groupMarkerStart67: number;
  groupMarkerStartTemp67: number;
  groupMarkerEnd67: number;
  groupMarkerStart68: number;
  groupMarkerStartTemp68: number;
  groupMarkerEnd68: number;
  groupMarkerStart69: number;
  groupMarkerStartTemp69: number;
  groupMarkerEnd69: number;
  groupMarkerStart70: number;
  groupMarkerStartTemp70: number;
  groupMarkerEnd70: number;
  groupMarkerStart71: number;
  groupMarkerStartTemp71: number;
  groupMarkerEnd71: number;
  groupMarkerStart72: number;
  groupMarkerStartTemp72: number;
  groupMarkerEnd72: number;
  groupMarkerStart73: number;
  groupMarkerStartTemp73: number;
  groupMarkerEnd73: number;
  groupMarkerStart74: number;
  groupMarkerStartTemp74: number;
  groupMarkerEnd74: number;
  groupMarkerStart75: number;
  groupMarkerStartTemp75: number;
  groupMarkerEnd75: number;
  groupMarkerStart76: number;
  groupMarkerStartTemp76: number;
  groupMarkerEnd76: number;
  groupMarkerStart77: number;
  groupMarkerStartTemp77: number;
  groupMarkerEnd77: number;
  groupMarkerStart78: number;
  groupMarkerStartTemp78: number;
  groupMarkerEnd78: number;
  groupMarkerStart79: number;
  groupMarkerStartTemp79: number;
  groupMarkerEnd79: number;
  groupMarkerStart80: number;
  groupMarkerStartTemp80: number;
  groupMarkerEnd80: number;
  groupMarkerStart81: number;
  groupMarkerStartTemp81: number;
  groupMarkerEnd81: number;
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
  quantifierCounter44: number;
  quantifierCounter45: number;
  quantifierCounter46: number;
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
    groupMarkerStart30: -1,
    groupMarkerStartTemp30: -1,
    groupMarkerEnd30: -1,
    groupMarkerStart31: -1,
    groupMarkerStartTemp31: -1,
    groupMarkerEnd31: -1,
    groupMarkerStart32: -1,
    groupMarkerStartTemp32: -1,
    groupMarkerEnd32: -1,
    groupMarkerStart33: -1,
    groupMarkerStartTemp33: -1,
    groupMarkerEnd33: -1,
    groupMarkerStart34: -1,
    groupMarkerStartTemp34: -1,
    groupMarkerEnd34: -1,
    groupMarkerStart35: -1,
    groupMarkerStartTemp35: -1,
    groupMarkerEnd35: -1,
    groupMarkerStart36: -1,
    groupMarkerStartTemp36: -1,
    groupMarkerEnd36: -1,
    groupMarkerStart37: -1,
    groupMarkerStartTemp37: -1,
    groupMarkerEnd37: -1,
    groupMarkerStart38: -1,
    groupMarkerStartTemp38: -1,
    groupMarkerEnd38: -1,
    groupMarkerStart39: -1,
    groupMarkerStartTemp39: -1,
    groupMarkerEnd39: -1,
    groupMarkerStart40: -1,
    groupMarkerStartTemp40: -1,
    groupMarkerEnd40: -1,
    groupMarkerStart41: -1,
    groupMarkerStartTemp41: -1,
    groupMarkerEnd41: -1,
    groupMarkerStart42: -1,
    groupMarkerStartTemp42: -1,
    groupMarkerEnd42: -1,
    groupMarkerStart43: -1,
    groupMarkerStartTemp43: -1,
    groupMarkerEnd43: -1,
    groupMarkerStart44: -1,
    groupMarkerStartTemp44: -1,
    groupMarkerEnd44: -1,
    groupMarkerStart45: -1,
    groupMarkerStartTemp45: -1,
    groupMarkerEnd45: -1,
    groupMarkerStart46: -1,
    groupMarkerStartTemp46: -1,
    groupMarkerEnd46: -1,
    groupMarkerStart47: -1,
    groupMarkerStartTemp47: -1,
    groupMarkerEnd47: -1,
    groupMarkerStart48: -1,
    groupMarkerStartTemp48: -1,
    groupMarkerEnd48: -1,
    groupMarkerStart49: -1,
    groupMarkerStartTemp49: -1,
    groupMarkerEnd49: -1,
    groupMarkerStart50: -1,
    groupMarkerStartTemp50: -1,
    groupMarkerEnd50: -1,
    groupMarkerStart51: -1,
    groupMarkerStartTemp51: -1,
    groupMarkerEnd51: -1,
    groupMarkerStart52: -1,
    groupMarkerStartTemp52: -1,
    groupMarkerEnd52: -1,
    groupMarkerStart53: -1,
    groupMarkerStartTemp53: -1,
    groupMarkerEnd53: -1,
    groupMarkerStart54: -1,
    groupMarkerStartTemp54: -1,
    groupMarkerEnd54: -1,
    groupMarkerStart55: -1,
    groupMarkerStartTemp55: -1,
    groupMarkerEnd55: -1,
    groupMarkerStart56: -1,
    groupMarkerStartTemp56: -1,
    groupMarkerEnd56: -1,
    groupMarkerStart57: -1,
    groupMarkerStartTemp57: -1,
    groupMarkerEnd57: -1,
    groupMarkerStart58: -1,
    groupMarkerStartTemp58: -1,
    groupMarkerEnd58: -1,
    groupMarkerStart59: -1,
    groupMarkerStartTemp59: -1,
    groupMarkerEnd59: -1,
    groupMarkerStart60: -1,
    groupMarkerStartTemp60: -1,
    groupMarkerEnd60: -1,
    groupMarkerStart61: -1,
    groupMarkerStartTemp61: -1,
    groupMarkerEnd61: -1,
    groupMarkerStart62: -1,
    groupMarkerStartTemp62: -1,
    groupMarkerEnd62: -1,
    groupMarkerStart63: -1,
    groupMarkerStartTemp63: -1,
    groupMarkerEnd63: -1,
    groupMarkerStart64: -1,
    groupMarkerStartTemp64: -1,
    groupMarkerEnd64: -1,
    groupMarkerStart65: -1,
    groupMarkerStartTemp65: -1,
    groupMarkerEnd65: -1,
    groupMarkerStart66: -1,
    groupMarkerStartTemp66: -1,
    groupMarkerEnd66: -1,
    groupMarkerStart67: -1,
    groupMarkerStartTemp67: -1,
    groupMarkerEnd67: -1,
    groupMarkerStart68: -1,
    groupMarkerStartTemp68: -1,
    groupMarkerEnd68: -1,
    groupMarkerStart69: -1,
    groupMarkerStartTemp69: -1,
    groupMarkerEnd69: -1,
    groupMarkerStart70: -1,
    groupMarkerStartTemp70: -1,
    groupMarkerEnd70: -1,
    groupMarkerStart71: -1,
    groupMarkerStartTemp71: -1,
    groupMarkerEnd71: -1,
    groupMarkerStart72: -1,
    groupMarkerStartTemp72: -1,
    groupMarkerEnd72: -1,
    groupMarkerStart73: -1,
    groupMarkerStartTemp73: -1,
    groupMarkerEnd73: -1,
    groupMarkerStart74: -1,
    groupMarkerStartTemp74: -1,
    groupMarkerEnd74: -1,
    groupMarkerStart75: -1,
    groupMarkerStartTemp75: -1,
    groupMarkerEnd75: -1,
    groupMarkerStart76: -1,
    groupMarkerStartTemp76: -1,
    groupMarkerEnd76: -1,
    groupMarkerStart77: -1,
    groupMarkerStartTemp77: -1,
    groupMarkerEnd77: -1,
    groupMarkerStart78: -1,
    groupMarkerStartTemp78: -1,
    groupMarkerEnd78: -1,
    groupMarkerStart79: -1,
    groupMarkerStartTemp79: -1,
    groupMarkerEnd79: -1,
    groupMarkerStart80: -1,
    groupMarkerStartTemp80: -1,
    groupMarkerEnd80: -1,
    groupMarkerStart81: -1,
    groupMarkerStartTemp81: -1,
    groupMarkerEnd81: -1,
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
    quantifierCounter44: -1,
    quantifierCounter45: -1,
    quantifierCounter46: -1,
  };

  // minCharsLeft
  const min = 0;
  const max = str.length - 2;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0437(i, str, context);
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
          context.groupMarkerEnd30 !== -1
            ? str.substring(
                context.groupMarkerStart30,
                context.groupMarkerEnd30
              )
            : undefined,
          context.groupMarkerEnd31 !== -1
            ? str.substring(
                context.groupMarkerStart31,
                context.groupMarkerEnd31
              )
            : undefined,
          context.groupMarkerEnd32 !== -1
            ? str.substring(
                context.groupMarkerStart32,
                context.groupMarkerEnd32
              )
            : undefined,
          context.groupMarkerEnd33 !== -1
            ? str.substring(
                context.groupMarkerStart33,
                context.groupMarkerEnd33
              )
            : undefined,
          context.groupMarkerEnd34 !== -1
            ? str.substring(
                context.groupMarkerStart34,
                context.groupMarkerEnd34
              )
            : undefined,
          context.groupMarkerEnd35 !== -1
            ? str.substring(
                context.groupMarkerStart35,
                context.groupMarkerEnd35
              )
            : undefined,
          context.groupMarkerEnd36 !== -1
            ? str.substring(
                context.groupMarkerStart36,
                context.groupMarkerEnd36
              )
            : undefined,
          context.groupMarkerEnd37 !== -1
            ? str.substring(
                context.groupMarkerStart37,
                context.groupMarkerEnd37
              )
            : undefined,
          context.groupMarkerEnd38 !== -1
            ? str.substring(
                context.groupMarkerStart38,
                context.groupMarkerEnd38
              )
            : undefined,
          context.groupMarkerEnd39 !== -1
            ? str.substring(
                context.groupMarkerStart39,
                context.groupMarkerEnd39
              )
            : undefined,
          context.groupMarkerEnd40 !== -1
            ? str.substring(
                context.groupMarkerStart40,
                context.groupMarkerEnd40
              )
            : undefined,
          context.groupMarkerEnd41 !== -1
            ? str.substring(
                context.groupMarkerStart41,
                context.groupMarkerEnd41
              )
            : undefined,
          context.groupMarkerEnd42 !== -1
            ? str.substring(
                context.groupMarkerStart42,
                context.groupMarkerEnd42
              )
            : undefined,
          context.groupMarkerEnd43 !== -1
            ? str.substring(
                context.groupMarkerStart43,
                context.groupMarkerEnd43
              )
            : undefined,
          context.groupMarkerEnd44 !== -1
            ? str.substring(
                context.groupMarkerStart44,
                context.groupMarkerEnd44
              )
            : undefined,
          context.groupMarkerEnd45 !== -1
            ? str.substring(
                context.groupMarkerStart45,
                context.groupMarkerEnd45
              )
            : undefined,
          context.groupMarkerEnd46 !== -1
            ? str.substring(
                context.groupMarkerStart46,
                context.groupMarkerEnd46
              )
            : undefined,
          context.groupMarkerEnd47 !== -1
            ? str.substring(
                context.groupMarkerStart47,
                context.groupMarkerEnd47
              )
            : undefined,
          context.groupMarkerEnd48 !== -1
            ? str.substring(
                context.groupMarkerStart48,
                context.groupMarkerEnd48
              )
            : undefined,
          context.groupMarkerEnd49 !== -1
            ? str.substring(
                context.groupMarkerStart49,
                context.groupMarkerEnd49
              )
            : undefined,
          context.groupMarkerEnd50 !== -1
            ? str.substring(
                context.groupMarkerStart50,
                context.groupMarkerEnd50
              )
            : undefined,
          context.groupMarkerEnd51 !== -1
            ? str.substring(
                context.groupMarkerStart51,
                context.groupMarkerEnd51
              )
            : undefined,
          context.groupMarkerEnd52 !== -1
            ? str.substring(
                context.groupMarkerStart52,
                context.groupMarkerEnd52
              )
            : undefined,
          context.groupMarkerEnd53 !== -1
            ? str.substring(
                context.groupMarkerStart53,
                context.groupMarkerEnd53
              )
            : undefined,
          context.groupMarkerEnd54 !== -1
            ? str.substring(
                context.groupMarkerStart54,
                context.groupMarkerEnd54
              )
            : undefined,
          context.groupMarkerEnd55 !== -1
            ? str.substring(
                context.groupMarkerStart55,
                context.groupMarkerEnd55
              )
            : undefined,
          context.groupMarkerEnd56 !== -1
            ? str.substring(
                context.groupMarkerStart56,
                context.groupMarkerEnd56
              )
            : undefined,
          context.groupMarkerEnd57 !== -1
            ? str.substring(
                context.groupMarkerStart57,
                context.groupMarkerEnd57
              )
            : undefined,
          context.groupMarkerEnd58 !== -1
            ? str.substring(
                context.groupMarkerStart58,
                context.groupMarkerEnd58
              )
            : undefined,
          context.groupMarkerEnd59 !== -1
            ? str.substring(
                context.groupMarkerStart59,
                context.groupMarkerEnd59
              )
            : undefined,
          context.groupMarkerEnd60 !== -1
            ? str.substring(
                context.groupMarkerStart60,
                context.groupMarkerEnd60
              )
            : undefined,
          context.groupMarkerEnd61 !== -1
            ? str.substring(
                context.groupMarkerStart61,
                context.groupMarkerEnd61
              )
            : undefined,
          context.groupMarkerEnd62 !== -1
            ? str.substring(
                context.groupMarkerStart62,
                context.groupMarkerEnd62
              )
            : undefined,
          context.groupMarkerEnd63 !== -1
            ? str.substring(
                context.groupMarkerStart63,
                context.groupMarkerEnd63
              )
            : undefined,
          context.groupMarkerEnd64 !== -1
            ? str.substring(
                context.groupMarkerStart64,
                context.groupMarkerEnd64
              )
            : undefined,
          context.groupMarkerEnd65 !== -1
            ? str.substring(
                context.groupMarkerStart65,
                context.groupMarkerEnd65
              )
            : undefined,
          context.groupMarkerEnd66 !== -1
            ? str.substring(
                context.groupMarkerStart66,
                context.groupMarkerEnd66
              )
            : undefined,
          context.groupMarkerEnd67 !== -1
            ? str.substring(
                context.groupMarkerStart67,
                context.groupMarkerEnd67
              )
            : undefined,
          context.groupMarkerEnd68 !== -1
            ? str.substring(
                context.groupMarkerStart68,
                context.groupMarkerEnd68
              )
            : undefined,
          context.groupMarkerEnd69 !== -1
            ? str.substring(
                context.groupMarkerStart69,
                context.groupMarkerEnd69
              )
            : undefined,
          context.groupMarkerEnd70 !== -1
            ? str.substring(
                context.groupMarkerStart70,
                context.groupMarkerEnd70
              )
            : undefined,
          context.groupMarkerEnd71 !== -1
            ? str.substring(
                context.groupMarkerStart71,
                context.groupMarkerEnd71
              )
            : undefined,
          context.groupMarkerEnd72 !== -1
            ? str.substring(
                context.groupMarkerStart72,
                context.groupMarkerEnd72
              )
            : undefined,
          context.groupMarkerEnd73 !== -1
            ? str.substring(
                context.groupMarkerStart73,
                context.groupMarkerEnd73
              )
            : undefined,
          context.groupMarkerEnd74 !== -1
            ? str.substring(
                context.groupMarkerStart74,
                context.groupMarkerEnd74
              )
            : undefined,
          context.groupMarkerEnd75 !== -1
            ? str.substring(
                context.groupMarkerStart75,
                context.groupMarkerEnd75
              )
            : undefined,
          context.groupMarkerEnd76 !== -1
            ? str.substring(
                context.groupMarkerStart76,
                context.groupMarkerEnd76
              )
            : undefined,
          context.groupMarkerEnd77 !== -1
            ? str.substring(
                context.groupMarkerStart77,
                context.groupMarkerEnd77
              )
            : undefined,
          context.groupMarkerEnd78 !== -1
            ? str.substring(
                context.groupMarkerStart78,
                context.groupMarkerEnd78
              )
            : undefined,
          context.groupMarkerEnd79 !== -1
            ? str.substring(
                context.groupMarkerStart79,
                context.groupMarkerEnd79
              )
            : undefined,
          context.groupMarkerEnd80 !== -1
            ? str.substring(
                context.groupMarkerStart80,
                context.groupMarkerEnd80
              )
            : undefined,
          context.groupMarkerEnd81 !== -1
            ? str.substring(
                context.groupMarkerStart81,
                context.groupMarkerEnd81
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
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s✱$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s✱$))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * endAnchor
   * ...[0-5]))\s✱$)|(^\s✱(((...
   *              ^
   */
  if (i !== str.length) {
    return -1;
  }
  /*
   * groupEndMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s✱$)|(^\s✱((([...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  return fiber0001(i, str, context);
};
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|25[0-5]))\s✱$)|(^\s✱(...
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
  return greedyQuantifier0004(i, str, context);
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s✱$)|(^\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart5 = context.groupMarkerStartTemp5;
  context.groupMarkerEnd5 = i;
  /*
   * groupEndMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s✱$)|(^\s...
   *        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  /*
   * quantifierStarter
   * ...|25[0-5]))\s✱$)|(^\s✱((...
   *              ^^^
   */
  const cursorAfterQuantifier = greedyQuantifier0004(i, str, context);

  return cursorAfterQuantifier;
};
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...5])\.){3}([0-9]|[1-9][0-9...
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
  return fiber0005(i, str, context);
};
const fiber0007 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...{3}([0-9]|[1-9][0-9]|1[0-...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-9]|[1-9][0-9]|1[0-9]{2}...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0005(i, str, context);
};
const fiber0008 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...1-9][0-9]|1[0-9]{2}|2...
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
  /*
   * charOrSet
   * ...-9][0-9]|1[0-9]{2}|2[0-4]...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...-9][0-9]|1[0-9]{2}|2[0-4]...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return fiber0005(i, str, context);
};
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...1[0-9]{2}|2[0-4][0-9]...
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
   * ...[0-9]{2}|2[0-4][0-9]|25[0...
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
  /*
   * charOrSet
   * ...{2}|2[0-4][0-9]|25[0-5]))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return fiber0005(i, str, context);
};
const fiber0010 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-4][0-9]|25[0-5]))\s...
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
   * ...-4][0-9]|25[0-5]))\s✱...
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
   * ...4][0-9]|25[0-5]))\s✱$)|(^...
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
  return fiber0005(i, str, context);
};
const fiber0011 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart4 = context.groupMarkerStartTemp4;
  context.groupMarkerEnd4 = i;
  /*
   * charOrSet
   * ...]|25[0-5])\.){3}([0-9]...
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
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|...
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  /*
   * groupStartMarker
   * ...-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s✱$)|(^\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp5 = i;
  /*
   * disjunction
   * ...-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s✱$)|(^\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;
  const groupMarkerStartCopy5 = context.groupMarkerStart5;
  const groupMarkerEndCopy5 = context.groupMarkerEnd5;
  const length0 = fiber0006(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length1 = fiber0007(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length2 = fiber0008(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length3 = fiber0009(i, str, context);
  if (length3 !== -1) {
    return length3;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length4 = fiber0010(i, str, context);
  if (length4 !== -1) {
    return length4;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  return -1;
};
const fiber0012 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /((^\s✱((([0-9]|[1-9][0-9...
   *           ^^^^^
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
  return fiber0011(i, str, context);
};
const fiber0013 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...✱((([0-9]|[1-9][0-9]|1[0-...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-9]|[1-9][0-9]|1[0-9]{2}...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0011(i, str, context);
};
const fiber0014 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...1-9][0-9]|1[0-9]{2}|2...
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
  /*
   * charOrSet
   * ...-9][0-9]|1[0-9]{2}|2[0-4]...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...-9][0-9]|1[0-9]{2}|2[0-4]...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return fiber0011(i, str, context);
};
const fiber0015 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...1[0-9]{2}|2[0-4][0-9]...
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
   * ...[0-9]{2}|2[0-4][0-9]|25[0...
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
  /*
   * charOrSet
   * ...{2}|2[0-4][0-9]|25[0-5])\...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return fiber0011(i, str, context);
};
const fiber0016 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-4][0-9]|25[0-5])\.)...
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
   * ...-4][0-9]|25[0-5])\.){...
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
   * ...4][0-9]|25[0-5])\.){3}([0...
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
  return fiber0011(i, str, context);
};
const fiber0017 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart4 = context.groupMarkerStartTemp4;
  context.groupMarkerEnd4 = i;
  /*
   * charOrSet
   * ...]|25[0-5])\.){3}([0-9]...
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
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|...
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  /*
   * groupStartMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|...
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * groupStartMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp4 = i;
  /*
   * disjunction
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0012(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length1 = fiber0013(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length2 = fiber0014(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length3 = fiber0015(i, str, context);
  if (length3 !== -1) {
    return length3;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length4 = fiber0016(i, str, context);
  if (length4 !== -1) {
    return length4;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  return -1;
};
const fiber0018 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /((^\s✱((([0-9]|[1-9][0-9...
   *           ^^^^^
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
  return fiber0017(i, str, context);
};
const fiber0019 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...✱((([0-9]|[1-9][0-9]|1[0-...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-9]|[1-9][0-9]|1[0-9]{2}...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0017(i, str, context);
};
const fiber0020 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...1-9][0-9]|1[0-9]{2}|2...
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
  /*
   * charOrSet
   * ...-9][0-9]|1[0-9]{2}|2[0-4]...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...-9][0-9]|1[0-9]{2}|2[0-4]...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return fiber0017(i, str, context);
};
const fiber0021 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...1[0-9]{2}|2[0-4][0-9]...
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
   * ...[0-9]{2}|2[0-4][0-9]|25[0...
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
  /*
   * charOrSet
   * ...{2}|2[0-4][0-9]|25[0-5])\...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return fiber0017(i, str, context);
};
const fiber0022 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-4][0-9]|25[0-5])\.)...
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
   * ...-4][0-9]|25[0-5])\.){...
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
   * ...4][0-9]|25[0-5])\.){3}([0...
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
  return fiber0017(i, str, context);
};
const fiber0023 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart4 = context.groupMarkerStartTemp4;
  context.groupMarkerEnd4 = i;
  /*
   * charOrSet
   * ...]|25[0-5])\.){3}([0-9]...
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
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|...
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  /*
   * groupStartMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|...
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * groupStartMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp4 = i;
  /*
   * disjunction
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0018(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length1 = fiber0019(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length2 = fiber0020(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length3 = fiber0021(i, str, context);
  if (length3 !== -1) {
    return length3;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length4 = fiber0022(i, str, context);
  if (length4 !== -1) {
    return length4;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  return -1;
};
const fiber0024 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /((^\s✱((([0-9]|[1-9][0-9...
   *           ^^^^^
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
  return fiber0023(i, str, context);
};
const fiber0025 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...✱((([0-9]|[1-9][0-9]|1[0-...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-9]|[1-9][0-9]|1[0-9]{2}...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  return fiber0023(i, str, context);
};
const fiber0026 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...1-9][0-9]|1[0-9]{2}|2...
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
  /*
   * charOrSet
   * ...-9][0-9]|1[0-9]{2}|2[0-4]...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...-9][0-9]|1[0-9]{2}|2[0-4]...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return fiber0023(i, str, context);
};
const fiber0027 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...1[0-9]{2}|2[0-4][0-9]...
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
   * ...[0-9]{2}|2[0-4][0-9]|25[0...
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
  /*
   * charOrSet
   * ...{2}|2[0-4][0-9]|25[0-5])\...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return fiber0023(i, str, context);
};
const fiber0028 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-4][0-9]|25[0-5])\.)...
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
   * ...-4][0-9]|25[0-5])\.){...
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
   * ...4][0-9]|25[0-5])\.){3}([0...
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
  return fiber0023(i, str, context);
};
const fiber0029 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s✱$)|(^\s...
   *        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * groupStartMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|...
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * groupStartMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp4 = i;
  /*
   * disjunction
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0024(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length1 = fiber0025(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length2 = fiber0026(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length3 = fiber0027(i, str, context);
  if (length3 !== -1) {
    return length3;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length4 = fiber0028(i, str, context);
  if (length4 !== -1) {
    return length4;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  return -1;
};
const fiber0030 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /((^\s✱((([0-9]|...
   *     ^^
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
  return greedyQuantifier0031(i, str, context);
};
const fiber0032 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s✱$)|(^\s✱((([...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * startAnchor
   * /((^\s✱((([0-9...
   *    ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * quantifierStarter
   * /((^\s✱((([0-9]|[...
   *     ^^^
   */
  const cursorAfterQuantifier = greedyQuantifier0031(i, str, context);

  return cursorAfterQuantifier;
};
const fiber0033 = (i: number, str: string, context: Context): number => {
  /*
   * endAnchor
   * ...)(%.+)?\s✱$))/
   *              ^
   */
  if (i !== str.length) {
    return -1;
  }
  /*
   * groupEndMarker
   * ...5]))\s✱$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s✱$))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart6 = context.groupMarkerStartTemp6;
  context.groupMarkerEnd6 = i;
  return fiber0001(i, str, context);
};
const fiber0034 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...:)))(%.+)?\s✱$))/
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
  return greedyQuantifier0035(i, str, context);
};
const fiber0036 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...:)))(%.+)?\s✱$))/
   *              ^^^
   */
  const cursorAfterQuantifier = greedyQuantifier0035(i, str, context);

  return cursorAfterQuantifier;
};
const fiber0037 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...{3}))|:)))(%.+)?\s✱$))/
   *              ^^^^^
   */
  context.groupMarkerStart81 = context.groupMarkerStartTemp81;
  context.groupMarkerEnd81 = i;
  return greedyQuantifier0038(i, str, context);
};
const fiber0039 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}))|:)))(%.+)?\s✱$))/
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
  return greedyQuantifier0040(i, str, context);
};
const fiber0041 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...{3}))|:)))(%.+)?\s✱$))/
   *              ^^^^^
   */
  context.groupMarkerStartTemp81 = i;
  /*
   * charOrSet
   * ...3}))|:)))(%.+)?\s✱$))/
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 37;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * quantifierStarter
   * ...}))|:)))(%.+)?\s✱$))/
   *              ^^
   */
  let matchCountCopygreedyQuantifier0040 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0040(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0040;

  return cursorAfterQuantifier;
};
const fiber0042 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...s✱$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s✱$))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart7 = context.groupMarkerStartTemp7;
  context.groupMarkerEnd7 = i;
  /*
   * quantifierStarter
   * ...{3}))|:)))(%.+)?\s✱$))/
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0038 = context.quantifierCounter0;
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = greedyQuantifier0038(i, str, context);
  context.quantifierCounter0 = matchCountCopygreedyQuantifier0038;

  return cursorAfterQuantifier;
};
const fiber0043 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){7}([0-9A...
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
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart9 = context.groupMarkerStartTemp9;
  context.groupMarkerEnd9 = i;
  /*
   * groupStartMarker
   * ...{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp10 = i;
  /*
   * nonBacktrackingDisjunction
   * ...{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction3: {
    const length0 = fiber0047(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction3;
    }
    const length1 = fiber0048(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction3;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart10 = context.groupMarkerStartTemp10;
  context.groupMarkerEnd10 = i;
  /*
   * groupEndMarker
   * ...✱$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart8 = context.groupMarkerStartTemp8;
  context.groupMarkerEnd8 = i;
  return fiber0042(i, str, context);
};
const fiber0044 = (i: number, str: string, context: Context): number => {
  return i;
};
const fiber0045 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...1,4}:){7}([0-9A-Fa-f]{1,4}|:))|...
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
  return greedyQuantifier0046(i, str, context);
};
const fiber0047 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0046 = context.quantifierCounter2;
  context.quantifierCounter2 = -1;
  const cursorAfterQuantifier = greedyQuantifier0046(i, str, context);
  context.quantifierCounter2 = matchCountCopygreedyQuantifier0046;

  return cursorAfterQuantifier;
};
const fiber0048 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...a-f]{1,4}|:))|(([0-9A...
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
  return i;
};
const fiber0049 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}...
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
  return greedyQuantifier0050(i, str, context);
};
const fiber0051 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){7}([0-9A...
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
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart9 = context.groupMarkerStartTemp9;
  context.groupMarkerEnd9 = i;
  /*
   * groupStartMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp9 = i;
  /*
   * quantifierStarter
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0050 = context.quantifierCounter3;
  context.quantifierCounter3 = -1;
  const cursorAfterQuantifier = greedyQuantifier0050(i, str, context);
  context.quantifierCounter3 = matchCountCopygreedyQuantifier0050;

  return cursorAfterQuantifier;
};
const fiber0052 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}...
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
  return greedyQuantifier0053(i, str, context);
};
const fiber0054 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){7}([0-9A...
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
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart9 = context.groupMarkerStartTemp9;
  context.groupMarkerEnd9 = i;
  /*
   * groupStartMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp9 = i;
  /*
   * quantifierStarter
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0053 = context.quantifierCounter3;
  context.quantifierCounter3 = -1;
  const cursorAfterQuantifier = greedyQuantifier0053(i, str, context);
  context.quantifierCounter3 = matchCountCopygreedyQuantifier0053;

  return cursorAfterQuantifier;
};
const fiber0055 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}...
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
  return greedyQuantifier0056(i, str, context);
};
const fiber0057 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){7}([0-9A...
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
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart9 = context.groupMarkerStartTemp9;
  context.groupMarkerEnd9 = i;
  /*
   * groupStartMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp9 = i;
  /*
   * quantifierStarter
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0056 = context.quantifierCounter3;
  context.quantifierCounter3 = -1;
  const cursorAfterQuantifier = greedyQuantifier0056(i, str, context);
  context.quantifierCounter3 = matchCountCopygreedyQuantifier0056;

  return cursorAfterQuantifier;
};
const fiber0058 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}...
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
  return greedyQuantifier0059(i, str, context);
};
const fiber0060 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){7}([0-9A...
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
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart9 = context.groupMarkerStartTemp9;
  context.groupMarkerEnd9 = i;
  /*
   * groupStartMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp9 = i;
  /*
   * quantifierStarter
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0059 = context.quantifierCounter3;
  context.quantifierCounter3 = -1;
  const cursorAfterQuantifier = greedyQuantifier0059(i, str, context);
  context.quantifierCounter3 = matchCountCopygreedyQuantifier0059;

  return cursorAfterQuantifier;
};
const fiber0061 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}...
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
  return greedyQuantifier0062(i, str, context);
};
const fiber0063 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){7}([0-9A...
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
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart9 = context.groupMarkerStartTemp9;
  context.groupMarkerEnd9 = i;
  /*
   * groupStartMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp9 = i;
  /*
   * quantifierStarter
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0062 = context.quantifierCounter3;
  context.quantifierCounter3 = -1;
  const cursorAfterQuantifier = greedyQuantifier0062(i, str, context);
  context.quantifierCounter3 = matchCountCopygreedyQuantifier0062;

  return cursorAfterQuantifier;
};
const fiber0064 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}...
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
  return greedyQuantifier0065(i, str, context);
};
const fiber0066 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){7}([0-9A...
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
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart9 = context.groupMarkerStartTemp9;
  context.groupMarkerEnd9 = i;
  /*
   * groupStartMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp9 = i;
  /*
   * quantifierStarter
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0065 = context.quantifierCounter3;
  context.quantifierCounter3 = -1;
  const cursorAfterQuantifier = greedyQuantifier0065(i, str, context);
  context.quantifierCounter3 = matchCountCopygreedyQuantifier0065;

  return cursorAfterQuantifier;
};
const fiber0067 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}...
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
  return greedyQuantifier0068(i, str, context);
};
const fiber0069 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...✱$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp8 = i;
  /*
   * groupStartMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp9 = i;
  /*
   * quantifierStarter
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0068 = context.quantifierCounter3;
  context.quantifierCounter3 = -1;
  const cursorAfterQuantifier = greedyQuantifier0068(i, str, context);
  context.quantifierCounter3 = matchCountCopygreedyQuantifier0068;

  return cursorAfterQuantifier;
};
const fiber0070 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart13 = context.groupMarkerStartTemp13;
  context.groupMarkerEnd13 = i;
  /*
   * groupEndMarker
   * ...{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart11 = context.groupMarkerStartTemp11;
  context.groupMarkerEnd11 = i;
  return fiber0042(i, str, context);
};
const fiber0071 = (i: number, str: string, context: Context): number => {
  return fiber0070(i, str, context);
};
const fiber0072 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...,4}:){6}(:[0-9A-Fa-f]{1,4}|((25...
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
  return greedyQuantifier0073(i, str, context);
};
const fiber0074 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...1,4}:){6}(:[0-9A-Fa-f...
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
   * ...,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0073 = context.quantifierCounter4;
  context.quantifierCounter4 = -1;
  const cursorAfterQuantifier = greedyQuantifier0073(i, str, context);
  context.quantifierCounter4 = matchCountCopygreedyQuantifier0073;

  return cursorAfterQuantifier;
};
const fiber0075 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp14 = i;
  /*
   * groupStartMarker
   * ...-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp15 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction2: {
    const length0 = fiber0097(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction2;
    }
    const length1 = fiber0098(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction2;
    }
    const length2 = fiber0099(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction2;
    }
    const length3 = fiber0103(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction2;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart15 = context.groupMarkerStartTemp15;
  context.groupMarkerEnd15 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp16 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
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
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp17 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction7: {
    const length0 = fiber0090(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction7;
    }
    const length1 = fiber0091(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction7;
    }
    const length2 = fiber0092(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction7;
    }
    const length3 = fiber0096(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction7;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart17 = context.groupMarkerStartTemp17;
  context.groupMarkerEnd17 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart16 = context.groupMarkerStartTemp16;
  context.groupMarkerEnd16 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp16 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
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
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp17 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction13: {
    const length0 = fiber0083(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction13;
    }
    const length1 = fiber0084(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction13;
    }
    const length2 = fiber0085(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction13;
    }
    const length3 = fiber0089(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction13;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart17 = context.groupMarkerStartTemp17;
  context.groupMarkerEnd17 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart16 = context.groupMarkerStartTemp16;
  context.groupMarkerEnd16 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp16 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
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
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp17 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction19: {
    const length0 = fiber0076(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction19;
    }
    const length1 = fiber0077(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction19;
    }
    const length2 = fiber0078(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction19;
    }
    const length3 = fiber0082(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction19;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart17 = context.groupMarkerStartTemp17;
  context.groupMarkerEnd17 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart16 = context.groupMarkerStartTemp16;
  context.groupMarkerEnd16 = i;
  /*
   * groupEndMarker
   * ...a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart14 = context.groupMarkerStartTemp14;
  context.groupMarkerEnd14 = i;
  return fiber0070(i, str, context);
};
const fiber0076 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
const fiber0077 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0078 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0079 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3})|:))...
   *              ^^
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
const fiber0080 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3})|...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0081(i, str, context);
};
const fiber0082 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3})|:...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0081 = context.quantifierCounter5;
  context.quantifierCounter5 = -1;
  const cursorAfterQuantifier = greedyQuantifier0081(i, str, context);
  context.quantifierCounter5 = matchCountCopygreedyQuantifier0081;

  return cursorAfterQuantifier;
};
const fiber0083 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
const fiber0084 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0085 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0086 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3})|:))...
   *              ^^
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
const fiber0087 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3})|...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0088(i, str, context);
};
const fiber0089 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3})|:...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0088 = context.quantifierCounter5;
  context.quantifierCounter5 = -1;
  const cursorAfterQuantifier = greedyQuantifier0088(i, str, context);
  context.quantifierCounter5 = matchCountCopygreedyQuantifier0088;

  return cursorAfterQuantifier;
};
const fiber0090 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
const fiber0091 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0092 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0093 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3})|:))...
   *              ^^
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
const fiber0094 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3})|...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0095(i, str, context);
};
const fiber0096 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3})|:...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0095 = context.quantifierCounter5;
  context.quantifierCounter5 = -1;
  const cursorAfterQuantifier = greedyQuantifier0095(i, str, context);
  context.quantifierCounter5 = matchCountCopygreedyQuantifier0095;

  return cursorAfterQuantifier;
};
const fiber0097 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...f]{1,4}|((25[0-5]|2[0...
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
   * ...]{1,4}|((25[0-5]|2[0-...
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
   * ...{1,4}|((25[0-5]|2[0-4]\d|...
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
const fiber0098 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...((25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0099 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0100 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)(\.(25[0-...
   *              ^^
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
const fiber0101 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)(\.(25...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0102(i, str, context);
};
const fiber0103 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0102 = context.quantifierCounter6;
  context.quantifierCounter6 = -1;
  const cursorAfterQuantifier = greedyQuantifier0102(i, str, context);
  context.quantifierCounter6 = matchCountCopygreedyQuantifier0102;

  return cursorAfterQuantifier;
};
const fiber0104 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...?\d)){3})|:))|(([0-9A...
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
  return fiber0070(i, str, context);
};
const fiber0105 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){6}(:[0-9...
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
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart12 = context.groupMarkerStartTemp12;
  context.groupMarkerEnd12 = i;
  /*
   * groupStartMarker
   * ...{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp13 = i;
  /*
   * disjunction
   * ...{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy11 = context.groupMarkerStart11;
  const groupMarkerEndCopy11 = context.groupMarkerEnd11;
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
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0074(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart11 = groupMarkerStartCopy11;
  context.groupMarkerEnd11 = groupMarkerEndCopy11;
  context.groupMarkerStart13 = groupMarkerStartCopy13;
  context.groupMarkerEnd13 = groupMarkerEndCopy13;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0075(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart11 = groupMarkerStartCopy11;
  context.groupMarkerEnd11 = groupMarkerEndCopy11;
  context.groupMarkerStart13 = groupMarkerStartCopy13;
  context.groupMarkerEnd13 = groupMarkerEndCopy13;
  context.groupMarkerStart14 = groupMarkerStartCopy14;
  context.groupMarkerEnd14 = groupMarkerEndCopy14;
  context.groupMarkerStart15 = groupMarkerStartCopy15;
  context.groupMarkerEnd15 = groupMarkerEndCopy15;
  context.groupMarkerStart16 = groupMarkerStartCopy16;
  context.groupMarkerEnd16 = groupMarkerEndCopy16;
  context.groupMarkerStart17 = groupMarkerStartCopy17;
  context.groupMarkerEnd17 = groupMarkerEndCopy17;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0104(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart11 = groupMarkerStartCopy11;
  context.groupMarkerEnd11 = groupMarkerEndCopy11;
  context.groupMarkerStart13 = groupMarkerStartCopy13;
  context.groupMarkerEnd13 = groupMarkerEndCopy13;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0106 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}...
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
  return greedyQuantifier0107(i, str, context);
};
const fiber0108 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){6}(:[0-9...
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
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart12 = context.groupMarkerStartTemp12;
  context.groupMarkerEnd12 = i;
  /*
   * groupStartMarker
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp12 = i;
  /*
   * quantifierStarter
   * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0107 = context.quantifierCounter7;
  context.quantifierCounter7 = -1;
  const cursorAfterQuantifier = greedyQuantifier0107(i, str, context);
  context.quantifierCounter7 = matchCountCopygreedyQuantifier0107;

  return cursorAfterQuantifier;
};
const fiber0109 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}...
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
  return greedyQuantifier0110(i, str, context);
};
const fiber0111 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){6}(:[0-9...
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
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart12 = context.groupMarkerStartTemp12;
  context.groupMarkerEnd12 = i;
  /*
   * groupStartMarker
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp12 = i;
  /*
   * quantifierStarter
   * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0110 = context.quantifierCounter7;
  context.quantifierCounter7 = -1;
  const cursorAfterQuantifier = greedyQuantifier0110(i, str, context);
  context.quantifierCounter7 = matchCountCopygreedyQuantifier0110;

  return cursorAfterQuantifier;
};
const fiber0112 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}...
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
  return greedyQuantifier0113(i, str, context);
};
const fiber0114 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){6}(:[0-9...
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
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart12 = context.groupMarkerStartTemp12;
  context.groupMarkerEnd12 = i;
  /*
   * groupStartMarker
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp12 = i;
  /*
   * quantifierStarter
   * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0113 = context.quantifierCounter7;
  context.quantifierCounter7 = -1;
  const cursorAfterQuantifier = greedyQuantifier0113(i, str, context);
  context.quantifierCounter7 = matchCountCopygreedyQuantifier0113;

  return cursorAfterQuantifier;
};
const fiber0115 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}...
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
  return greedyQuantifier0116(i, str, context);
};
const fiber0117 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){6}(:[0-9...
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
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart12 = context.groupMarkerStartTemp12;
  context.groupMarkerEnd12 = i;
  /*
   * groupStartMarker
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp12 = i;
  /*
   * quantifierStarter
   * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0116 = context.quantifierCounter7;
  context.quantifierCounter7 = -1;
  const cursorAfterQuantifier = greedyQuantifier0116(i, str, context);
  context.quantifierCounter7 = matchCountCopygreedyQuantifier0116;

  return cursorAfterQuantifier;
};
const fiber0118 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}...
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
  return greedyQuantifier0119(i, str, context);
};
const fiber0120 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){6}(:[0-9...
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
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart12 = context.groupMarkerStartTemp12;
  context.groupMarkerEnd12 = i;
  /*
   * groupStartMarker
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp12 = i;
  /*
   * quantifierStarter
   * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0119 = context.quantifierCounter7;
  context.quantifierCounter7 = -1;
  const cursorAfterQuantifier = greedyQuantifier0119(i, str, context);
  context.quantifierCounter7 = matchCountCopygreedyQuantifier0119;

  return cursorAfterQuantifier;
};
const fiber0121 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}...
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
  return greedyQuantifier0122(i, str, context);
};
const fiber0123 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp11 = i;
  /*
   * groupStartMarker
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp12 = i;
  /*
   * quantifierStarter
   * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0122 = context.quantifierCounter7;
  context.quantifierCounter7 = -1;
  const cursorAfterQuantifier = greedyQuantifier0122(i, str, context);
  context.quantifierCounter7 = matchCountCopygreedyQuantifier0122;

  return cursorAfterQuantifier;
};
const fiber0124 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart20 = context.groupMarkerStartTemp20;
  context.groupMarkerEnd20 = i;
  /*
   * groupEndMarker
   * ...){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart18 = context.groupMarkerStartTemp18;
  context.groupMarkerEnd18 = i;
  return fiber0042(i, str, context);
};
const fiber0125 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart21 = context.groupMarkerStartTemp21;
  context.groupMarkerEnd21 = i;
  return fiber0124(i, str, context);
};
const fiber0126 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart22 = context.groupMarkerStartTemp22;
  context.groupMarkerEnd22 = i;
  return greedyQuantifier0127(i, str, context);
};
const fiber0128 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}:){5}(((:[0-9A-Fa-f]{1,4}){1,2...
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
  return greedyQuantifier0129(i, str, context);
};
const fiber0130 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp22 = i;
  /*
   * charOrSet
   * ...4}:){5}(((:[0-9A-Fa-f...
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
   * ...}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:(...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0129 = context.quantifierCounter9;
  context.quantifierCounter9 = -1;
  const cursorAfterQuantifier = greedyQuantifier0129(i, str, context);
  context.quantifierCounter9 = matchCountCopygreedyQuantifier0129;

  return cursorAfterQuantifier;
};
const fiber0131 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp21 = i;
  /*
   * quantifierStarter
   * ...,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0127 = context.quantifierCounter8;
  context.quantifierCounter8 = -1;
  const cursorAfterQuantifier = greedyQuantifier0127(i, str, context);
  context.quantifierCounter8 = matchCountCopygreedyQuantifier0127;

  return cursorAfterQuantifier;
};
const fiber0132 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...4}){1,2})|:((25[0-5]|...
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
   * ...}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp23 = i;
  /*
   * groupStartMarker
   * ...){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp24 = i;
  /*
   * nonBacktrackingDisjunction
   * ...){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction3: {
    const length0 = fiber0154(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction3;
    }
    const length1 = fiber0155(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction3;
    }
    const length2 = fiber0156(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction3;
    }
    const length3 = fiber0160(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction3;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart24 = context.groupMarkerStartTemp24;
  context.groupMarkerEnd24 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp25 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode6 = str.charCodeAt(i);
  let result6 = false;

  result6 = charCode6 === 46;

  if (!result6) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp26 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction8: {
    const length0 = fiber0147(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction8;
    }
    const length1 = fiber0148(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction8;
    }
    const length2 = fiber0149(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction8;
    }
    const length3 = fiber0153(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction8;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart26 = context.groupMarkerStartTemp26;
  context.groupMarkerEnd26 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart25 = context.groupMarkerStartTemp25;
  context.groupMarkerEnd25 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp25 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode12 = str.charCodeAt(i);
  let result12 = false;

  result12 = charCode12 === 46;

  if (!result12) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp26 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction14: {
    const length0 = fiber0140(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction14;
    }
    const length1 = fiber0141(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction14;
    }
    const length2 = fiber0142(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction14;
    }
    const length3 = fiber0146(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction14;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart26 = context.groupMarkerStartTemp26;
  context.groupMarkerEnd26 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart25 = context.groupMarkerStartTemp25;
  context.groupMarkerEnd25 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp25 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode18 = str.charCodeAt(i);
  let result18 = false;

  result18 = charCode18 === 46;

  if (!result18) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp26 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction20: {
    const length0 = fiber0133(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction20;
    }
    const length1 = fiber0134(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction20;
    }
    const length2 = fiber0135(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction20;
    }
    const length3 = fiber0139(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction20;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart26 = context.groupMarkerStartTemp26;
  context.groupMarkerEnd26 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart25 = context.groupMarkerStartTemp25;
  context.groupMarkerEnd25 = i;
  /*
   * groupEndMarker
   * ...}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart23 = context.groupMarkerStartTemp23;
  context.groupMarkerEnd23 = i;
  return fiber0124(i, str, context);
};
const fiber0133 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
const fiber0134 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0135 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0136 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3})|:))...
   *              ^^
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
const fiber0137 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3})|...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0138(i, str, context);
};
const fiber0139 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3})|:...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0138 = context.quantifierCounter10;
  context.quantifierCounter10 = -1;
  const cursorAfterQuantifier = greedyQuantifier0138(i, str, context);
  context.quantifierCounter10 = matchCountCopygreedyQuantifier0138;

  return cursorAfterQuantifier;
};
const fiber0140 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
const fiber0141 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0142 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0143 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3})|:))...
   *              ^^
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
const fiber0144 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3})|...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0145(i, str, context);
};
const fiber0146 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3})|:...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0145 = context.quantifierCounter10;
  context.quantifierCounter10 = -1;
  const cursorAfterQuantifier = greedyQuantifier0145(i, str, context);
  context.quantifierCounter10 = matchCountCopygreedyQuantifier0145;

  return cursorAfterQuantifier;
};
const fiber0147 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0149 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0150 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3})|:))...
   *              ^^
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
const fiber0151 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3})|...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0152(i, str, context);
};
const fiber0153 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3})|:...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0152 = context.quantifierCounter10;
  context.quantifierCounter10 = -1;
  const cursorAfterQuantifier = greedyQuantifier0152(i, str, context);
  context.quantifierCounter10 = matchCountCopygreedyQuantifier0152;

  return cursorAfterQuantifier;
};
const fiber0154 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...{1,2})|:((25[0-5]|2[0...
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
   * ...1,2})|:((25[0-5]|2[0-...
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
   * ...,2})|:((25[0-5]|2[0-4]\d|...
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
const fiber0155 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...((25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0156 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0157 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)(\.(25[0-...
   *              ^^
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
const fiber0158 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)(\.(25...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0159(i, str, context);
};
const fiber0160 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0159 = context.quantifierCounter11;
  context.quantifierCounter11 = -1;
  const cursorAfterQuantifier = greedyQuantifier0159(i, str, context);
  context.quantifierCounter11 = matchCountCopygreedyQuantifier0159;

  return cursorAfterQuantifier;
};
const fiber0161 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...?\d)){3})|:))|(([0-9A...
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
  return fiber0124(i, str, context);
};
const fiber0162 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){5}(((:[0...
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
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart19 = context.groupMarkerStartTemp19;
  context.groupMarkerEnd19 = i;
  /*
   * groupStartMarker
   * ...{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp20 = i;
  /*
   * disjunction
   * ...{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy18 = context.groupMarkerStart18;
  const groupMarkerEndCopy18 = context.groupMarkerEnd18;
  const groupMarkerStartCopy20 = context.groupMarkerStart20;
  const groupMarkerEndCopy20 = context.groupMarkerEnd20;
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;
  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;
  const groupMarkerStartCopy24 = context.groupMarkerStart24;
  const groupMarkerEndCopy24 = context.groupMarkerEnd24;
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0131(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart18 = groupMarkerStartCopy18;
  context.groupMarkerEnd18 = groupMarkerEndCopy18;
  context.groupMarkerStart20 = groupMarkerStartCopy20;
  context.groupMarkerEnd20 = groupMarkerEndCopy20;
  context.groupMarkerStart21 = groupMarkerStartCopy21;
  context.groupMarkerEnd21 = groupMarkerEndCopy21;
  context.groupMarkerStart22 = groupMarkerStartCopy22;
  context.groupMarkerEnd22 = groupMarkerEndCopy22;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0132(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart18 = groupMarkerStartCopy18;
  context.groupMarkerEnd18 = groupMarkerEndCopy18;
  context.groupMarkerStart20 = groupMarkerStartCopy20;
  context.groupMarkerEnd20 = groupMarkerEndCopy20;
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;
  context.groupMarkerStart24 = groupMarkerStartCopy24;
  context.groupMarkerEnd24 = groupMarkerEndCopy24;
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0161(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart18 = groupMarkerStartCopy18;
  context.groupMarkerEnd18 = groupMarkerEndCopy18;
  context.groupMarkerStart20 = groupMarkerStartCopy20;
  context.groupMarkerEnd20 = groupMarkerEndCopy20;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0163 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}...
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
  return greedyQuantifier0164(i, str, context);
};
const fiber0165 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){5}(((:[0...
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
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart19 = context.groupMarkerStartTemp19;
  context.groupMarkerEnd19 = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp19 = i;
  /*
   * quantifierStarter
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0164 = context.quantifierCounter12;
  context.quantifierCounter12 = -1;
  const cursorAfterQuantifier = greedyQuantifier0164(i, str, context);
  context.quantifierCounter12 = matchCountCopygreedyQuantifier0164;

  return cursorAfterQuantifier;
};
const fiber0166 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}...
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
  return greedyQuantifier0167(i, str, context);
};
const fiber0168 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){5}(((:[0...
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
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart19 = context.groupMarkerStartTemp19;
  context.groupMarkerEnd19 = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp19 = i;
  /*
   * quantifierStarter
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0167 = context.quantifierCounter12;
  context.quantifierCounter12 = -1;
  const cursorAfterQuantifier = greedyQuantifier0167(i, str, context);
  context.quantifierCounter12 = matchCountCopygreedyQuantifier0167;

  return cursorAfterQuantifier;
};
const fiber0169 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}...
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
  return greedyQuantifier0170(i, str, context);
};
const fiber0171 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){5}(((:[0...
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
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart19 = context.groupMarkerStartTemp19;
  context.groupMarkerEnd19 = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp19 = i;
  /*
   * quantifierStarter
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0170 = context.quantifierCounter12;
  context.quantifierCounter12 = -1;
  const cursorAfterQuantifier = greedyQuantifier0170(i, str, context);
  context.quantifierCounter12 = matchCountCopygreedyQuantifier0170;

  return cursorAfterQuantifier;
};
const fiber0172 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}...
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
  return greedyQuantifier0173(i, str, context);
};
const fiber0174 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){5}(((:[0...
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
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart19 = context.groupMarkerStartTemp19;
  context.groupMarkerEnd19 = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp19 = i;
  /*
   * quantifierStarter
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0173 = context.quantifierCounter12;
  context.quantifierCounter12 = -1;
  const cursorAfterQuantifier = greedyQuantifier0173(i, str, context);
  context.quantifierCounter12 = matchCountCopygreedyQuantifier0173;

  return cursorAfterQuantifier;
};
const fiber0175 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}...
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
  return greedyQuantifier0176(i, str, context);
};
const fiber0177 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp18 = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp19 = i;
  /*
   * quantifierStarter
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0176 = context.quantifierCounter12;
  context.quantifierCounter12 = -1;
  const cursorAfterQuantifier = greedyQuantifier0176(i, str, context);
  context.quantifierCounter12 = matchCountCopygreedyQuantifier0176;

  return cursorAfterQuantifier;
};
const fiber0178 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart29 = context.groupMarkerStartTemp29;
  context.groupMarkerEnd29 = i;
  /*
   * groupEndMarker
   * ...){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart27 = context.groupMarkerStartTemp27;
  context.groupMarkerEnd27 = i;
  return fiber0042(i, str, context);
};
const fiber0179 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart30 = context.groupMarkerStartTemp30;
  context.groupMarkerEnd30 = i;
  return fiber0178(i, str, context);
};
const fiber0180 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart31 = context.groupMarkerStartTemp31;
  context.groupMarkerEnd31 = i;
  return greedyQuantifier0181(i, str, context);
};
const fiber0182 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}:){4}(((:[0-9A-Fa-f]{1,4}){1,3...
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
  return greedyQuantifier0183(i, str, context);
};
const fiber0184 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp31 = i;
  /*
   * charOrSet
   * ...4}:){4}(((:[0-9A-Fa-f...
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
   * ...}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0183 = context.quantifierCounter14;
  context.quantifierCounter14 = -1;
  const cursorAfterQuantifier = greedyQuantifier0183(i, str, context);
  context.quantifierCounter14 = matchCountCopygreedyQuantifier0183;

  return cursorAfterQuantifier;
};
const fiber0185 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp30 = i;
  /*
   * quantifierStarter
   * ...,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0181 = context.quantifierCounter13;
  context.quantifierCounter13 = -1;
  const cursorAfterQuantifier = greedyQuantifier0181(i, str, context);
  context.quantifierCounter13 = matchCountCopygreedyQuantifier0181;

  return cursorAfterQuantifier;
};
const fiber0186 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-f]{1,4})?:((25[0-5]|...
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
   * ...f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp34 = i;
  /*
   * groupStartMarker
   * ...]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp35 = i;
  /*
   * nonBacktrackingDisjunction
   * ...]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction3: {
    const length0 = fiber0208(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction3;
    }
    const length1 = fiber0209(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction3;
    }
    const length2 = fiber0210(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction3;
    }
    const length3 = fiber0214(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction3;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart35 = context.groupMarkerStartTemp35;
  context.groupMarkerEnd35 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp36 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode6 = str.charCodeAt(i);
  let result6 = false;

  result6 = charCode6 === 46;

  if (!result6) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp37 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction8: {
    const length0 = fiber0201(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction8;
    }
    const length1 = fiber0202(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction8;
    }
    const length2 = fiber0203(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction8;
    }
    const length3 = fiber0207(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction8;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart37 = context.groupMarkerStartTemp37;
  context.groupMarkerEnd37 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart36 = context.groupMarkerStartTemp36;
  context.groupMarkerEnd36 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp36 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode12 = str.charCodeAt(i);
  let result12 = false;

  result12 = charCode12 === 46;

  if (!result12) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp37 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction14: {
    const length0 = fiber0194(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction14;
    }
    const length1 = fiber0195(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction14;
    }
    const length2 = fiber0196(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction14;
    }
    const length3 = fiber0200(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction14;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart37 = context.groupMarkerStartTemp37;
  context.groupMarkerEnd37 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart36 = context.groupMarkerStartTemp36;
  context.groupMarkerEnd36 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp36 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode18 = str.charCodeAt(i);
  let result18 = false;

  result18 = charCode18 === 46;

  if (!result18) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp37 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction20: {
    const length0 = fiber0187(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction20;
    }
    const length1 = fiber0188(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction20;
    }
    const length2 = fiber0189(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction20;
    }
    const length3 = fiber0193(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction20;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart37 = context.groupMarkerStartTemp37;
  context.groupMarkerEnd37 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart36 = context.groupMarkerStartTemp36;
  context.groupMarkerEnd36 = i;
  /*
   * groupEndMarker
   * ...f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart34 = context.groupMarkerStartTemp34;
  context.groupMarkerEnd34 = i;
  /*
   * groupEndMarker
   * ...4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart32 = context.groupMarkerStartTemp32;
  context.groupMarkerEnd32 = i;
  return fiber0178(i, str, context);
};
const fiber0187 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0189 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0190 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
const fiber0191 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0192(i, str, context);
};
const fiber0193 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0192 = context.quantifierCounter15;
  context.quantifierCounter15 = -1;
  const cursorAfterQuantifier = greedyQuantifier0192(i, str, context);
  context.quantifierCounter15 = matchCountCopygreedyQuantifier0192;

  return cursorAfterQuantifier;
};
const fiber0194 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
const fiber0195 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0196 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0197 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
const fiber0198 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0199(i, str, context);
};
const fiber0200 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0199 = context.quantifierCounter15;
  context.quantifierCounter15 = -1;
  const cursorAfterQuantifier = greedyQuantifier0199(i, str, context);
  context.quantifierCounter15 = matchCountCopygreedyQuantifier0199;

  return cursorAfterQuantifier;
};
const fiber0201 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
const fiber0202 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0203 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0204 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
const fiber0205 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0206(i, str, context);
};
const fiber0207 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0206 = context.quantifierCounter15;
  context.quantifierCounter15 = -1;
  const cursorAfterQuantifier = greedyQuantifier0206(i, str, context);
  context.quantifierCounter15 = matchCountCopygreedyQuantifier0206;

  return cursorAfterQuantifier;
};
const fiber0208 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...{1,4})?:((25[0-5]|2[0...
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
   * ...1,4})?:((25[0-5]|2[0-...
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
   * ...,4})?:((25[0-5]|2[0-4]\d|...
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
const fiber0209 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...((25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0210 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0211 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)(\.(25[0-...
   *              ^^
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
const fiber0212 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)(\.(25...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0213(i, str, context);
};
const fiber0214 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0213 = context.quantifierCounter16;
  context.quantifierCounter16 = -1;
  const cursorAfterQuantifier = greedyQuantifier0213(i, str, context);
  context.quantifierCounter16 = matchCountCopygreedyQuantifier0213;

  return cursorAfterQuantifier;
};
const fiber0215 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart33 = context.groupMarkerStartTemp33;
  context.groupMarkerEnd33 = i;
  return greedyQuantifier0216(i, str, context);
};
const fiber0217 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...{1,3})|((:[0-9A-Fa-f]{1,4})?:((...
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
  return greedyQuantifier0218(i, str, context);
};
const fiber0219 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp33 = i;
  /*
   * charOrSet
   * ...){1,3})|((:[0-9A-Fa-f...
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
   * ...{1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0218 = context.quantifierCounter18;
  context.quantifierCounter18 = -1;
  const cursorAfterQuantifier = greedyQuantifier0218(i, str, context);
  context.quantifierCounter18 = matchCountCopygreedyQuantifier0218;

  return cursorAfterQuantifier;
};
const fiber0220 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp32 = i;
  /*
   * quantifierStarter
   * ...}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0216 = context.quantifierCounter17;
  context.quantifierCounter17 = -1;
  const cursorAfterQuantifier = greedyQuantifier0216(i, str, context);
  context.quantifierCounter17 = matchCountCopygreedyQuantifier0216;

  return cursorAfterQuantifier;
};
const fiber0221 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)){3}))|:))|(([0-9A...
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
  return fiber0178(i, str, context);
};
const fiber0222 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){4}(((:[0...
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
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart28 = context.groupMarkerStartTemp28;
  context.groupMarkerEnd28 = i;
  /*
   * groupStartMarker
   * ...{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp29 = i;
  /*
   * disjunction
   * ...{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;
  const groupMarkerStartCopy30 = context.groupMarkerStart30;
  const groupMarkerEndCopy30 = context.groupMarkerEnd30;
  const groupMarkerStartCopy31 = context.groupMarkerStart31;
  const groupMarkerEndCopy31 = context.groupMarkerEnd31;
  const groupMarkerStartCopy32 = context.groupMarkerStart32;
  const groupMarkerEndCopy32 = context.groupMarkerEnd32;
  const groupMarkerStartCopy33 = context.groupMarkerStart33;
  const groupMarkerEndCopy33 = context.groupMarkerEnd33;
  const groupMarkerStartCopy34 = context.groupMarkerStart34;
  const groupMarkerEndCopy34 = context.groupMarkerEnd34;
  const groupMarkerStartCopy35 = context.groupMarkerStart35;
  const groupMarkerEndCopy35 = context.groupMarkerEnd35;
  const groupMarkerStartCopy36 = context.groupMarkerStart36;
  const groupMarkerEndCopy36 = context.groupMarkerEnd36;
  const groupMarkerStartCopy37 = context.groupMarkerStart37;
  const groupMarkerEndCopy37 = context.groupMarkerEnd37;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0185(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;
  context.groupMarkerStart29 = groupMarkerStartCopy29;
  context.groupMarkerEnd29 = groupMarkerEndCopy29;
  context.groupMarkerStart30 = groupMarkerStartCopy30;
  context.groupMarkerEnd30 = groupMarkerEndCopy30;
  context.groupMarkerStart31 = groupMarkerStartCopy31;
  context.groupMarkerEnd31 = groupMarkerEndCopy31;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0220(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;
  context.groupMarkerStart29 = groupMarkerStartCopy29;
  context.groupMarkerEnd29 = groupMarkerEndCopy29;
  context.groupMarkerStart32 = groupMarkerStartCopy32;
  context.groupMarkerEnd32 = groupMarkerEndCopy32;
  context.groupMarkerStart33 = groupMarkerStartCopy33;
  context.groupMarkerEnd33 = groupMarkerEndCopy33;
  context.groupMarkerStart34 = groupMarkerStartCopy34;
  context.groupMarkerEnd34 = groupMarkerEndCopy34;
  context.groupMarkerStart35 = groupMarkerStartCopy35;
  context.groupMarkerEnd35 = groupMarkerEndCopy35;
  context.groupMarkerStart36 = groupMarkerStartCopy36;
  context.groupMarkerEnd36 = groupMarkerEndCopy36;
  context.groupMarkerStart37 = groupMarkerStartCopy37;
  context.groupMarkerEnd37 = groupMarkerEndCopy37;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0221(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;
  context.groupMarkerStart29 = groupMarkerStartCopy29;
  context.groupMarkerEnd29 = groupMarkerEndCopy29;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0223 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){4}...
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
  return greedyQuantifier0224(i, str, context);
};
const fiber0225 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){4}(((:[0...
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
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart28 = context.groupMarkerStartTemp28;
  context.groupMarkerEnd28 = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp28 = i;
  /*
   * quantifierStarter
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0224 = context.quantifierCounter19;
  context.quantifierCounter19 = -1;
  const cursorAfterQuantifier = greedyQuantifier0224(i, str, context);
  context.quantifierCounter19 = matchCountCopygreedyQuantifier0224;

  return cursorAfterQuantifier;
};
const fiber0226 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){4}...
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
  return greedyQuantifier0227(i, str, context);
};
const fiber0228 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){4}(((:[0...
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
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart28 = context.groupMarkerStartTemp28;
  context.groupMarkerEnd28 = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp28 = i;
  /*
   * quantifierStarter
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0227 = context.quantifierCounter19;
  context.quantifierCounter19 = -1;
  const cursorAfterQuantifier = greedyQuantifier0227(i, str, context);
  context.quantifierCounter19 = matchCountCopygreedyQuantifier0227;

  return cursorAfterQuantifier;
};
const fiber0229 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){4}...
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
  return greedyQuantifier0230(i, str, context);
};
const fiber0231 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){4}(((:[0...
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
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart28 = context.groupMarkerStartTemp28;
  context.groupMarkerEnd28 = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp28 = i;
  /*
   * quantifierStarter
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0230 = context.quantifierCounter19;
  context.quantifierCounter19 = -1;
  const cursorAfterQuantifier = greedyQuantifier0230(i, str, context);
  context.quantifierCounter19 = matchCountCopygreedyQuantifier0230;

  return cursorAfterQuantifier;
};
const fiber0232 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){4}...
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
  return greedyQuantifier0233(i, str, context);
};
const fiber0234 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp27 = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp28 = i;
  /*
   * quantifierStarter
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0233 = context.quantifierCounter19;
  context.quantifierCounter19 = -1;
  const cursorAfterQuantifier = greedyQuantifier0233(i, str, context);
  context.quantifierCounter19 = matchCountCopygreedyQuantifier0233;

  return cursorAfterQuantifier;
};
const fiber0235 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart40 = context.groupMarkerStartTemp40;
  context.groupMarkerEnd40 = i;
  /*
   * groupEndMarker
   * ...{3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart38 = context.groupMarkerStartTemp38;
  context.groupMarkerEnd38 = i;
  return fiber0042(i, str, context);
};
const fiber0236 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart41 = context.groupMarkerStartTemp41;
  context.groupMarkerEnd41 = i;
  return fiber0235(i, str, context);
};
const fiber0237 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart42 = context.groupMarkerStartTemp42;
  context.groupMarkerEnd42 = i;
  return greedyQuantifier0238(i, str, context);
};
const fiber0239 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}:){3}(((:[0-9A-Fa-f]{1,4}){1,4...
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
  return greedyQuantifier0240(i, str, context);
};
const fiber0241 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp42 = i;
  /*
   * charOrSet
   * ...4}:){3}(((:[0-9A-Fa-f...
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
   * ...}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0240 = context.quantifierCounter21;
  context.quantifierCounter21 = -1;
  const cursorAfterQuantifier = greedyQuantifier0240(i, str, context);
  context.quantifierCounter21 = matchCountCopygreedyQuantifier0240;

  return cursorAfterQuantifier;
};
const fiber0242 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp41 = i;
  /*
   * quantifierStarter
   * ...,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0238 = context.quantifierCounter20;
  context.quantifierCounter20 = -1;
  const cursorAfterQuantifier = greedyQuantifier0238(i, str, context);
  context.quantifierCounter20 = matchCountCopygreedyQuantifier0238;

  return cursorAfterQuantifier;
};
const fiber0243 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...1,4}){0,2}:((25[0-5]|...
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
   * ...,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp45 = i;
  /*
   * groupStartMarker
   * ...4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp46 = i;
  /*
   * nonBacktrackingDisjunction
   * ...4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction3: {
    const length0 = fiber0265(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction3;
    }
    const length1 = fiber0266(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction3;
    }
    const length2 = fiber0267(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction3;
    }
    const length3 = fiber0271(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction3;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart46 = context.groupMarkerStartTemp46;
  context.groupMarkerEnd46 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp47 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode6 = str.charCodeAt(i);
  let result6 = false;

  result6 = charCode6 === 46;

  if (!result6) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp48 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction8: {
    const length0 = fiber0258(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction8;
    }
    const length1 = fiber0259(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction8;
    }
    const length2 = fiber0260(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction8;
    }
    const length3 = fiber0264(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction8;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart48 = context.groupMarkerStartTemp48;
  context.groupMarkerEnd48 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart47 = context.groupMarkerStartTemp47;
  context.groupMarkerEnd47 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp47 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode12 = str.charCodeAt(i);
  let result12 = false;

  result12 = charCode12 === 46;

  if (!result12) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp48 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction14: {
    const length0 = fiber0251(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction14;
    }
    const length1 = fiber0252(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction14;
    }
    const length2 = fiber0253(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction14;
    }
    const length3 = fiber0257(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction14;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart48 = context.groupMarkerStartTemp48;
  context.groupMarkerEnd48 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart47 = context.groupMarkerStartTemp47;
  context.groupMarkerEnd47 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp47 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode18 = str.charCodeAt(i);
  let result18 = false;

  result18 = charCode18 === 46;

  if (!result18) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp48 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction20: {
    const length0 = fiber0244(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction20;
    }
    const length1 = fiber0245(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction20;
    }
    const length2 = fiber0246(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction20;
    }
    const length3 = fiber0250(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction20;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart48 = context.groupMarkerStartTemp48;
  context.groupMarkerEnd48 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart47 = context.groupMarkerStartTemp47;
  context.groupMarkerEnd47 = i;
  /*
   * groupEndMarker
   * ...,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart45 = context.groupMarkerStartTemp45;
  context.groupMarkerEnd45 = i;
  /*
   * groupEndMarker
   * ...4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart43 = context.groupMarkerStartTemp43;
  context.groupMarkerEnd43 = i;
  return fiber0235(i, str, context);
};
const fiber0244 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
const fiber0245 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0246 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0247 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
const fiber0248 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0249(i, str, context);
};
const fiber0250 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0249 = context.quantifierCounter22;
  context.quantifierCounter22 = -1;
  const cursorAfterQuantifier = greedyQuantifier0249(i, str, context);
  context.quantifierCounter22 = matchCountCopygreedyQuantifier0249;

  return cursorAfterQuantifier;
};
const fiber0251 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
const fiber0252 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0253 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0254 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
const fiber0255 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0256(i, str, context);
};
const fiber0257 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0256 = context.quantifierCounter22;
  context.quantifierCounter22 = -1;
  const cursorAfterQuantifier = greedyQuantifier0256(i, str, context);
  context.quantifierCounter22 = matchCountCopygreedyQuantifier0256;

  return cursorAfterQuantifier;
};
const fiber0258 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
const fiber0259 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0260 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0261 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
const fiber0262 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0263(i, str, context);
};
const fiber0264 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0263 = context.quantifierCounter22;
  context.quantifierCounter22 = -1;
  const cursorAfterQuantifier = greedyQuantifier0263(i, str, context);
  context.quantifierCounter22 = matchCountCopygreedyQuantifier0263;

  return cursorAfterQuantifier;
};
const fiber0265 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}){0,2}:((25[0-5]|2[0...
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
   * ...){0,2}:((25[0-5]|2[0-...
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
   * ...{0,2}:((25[0-5]|2[0-4]\d|...
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
const fiber0266 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...((25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0267 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0268 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)(\.(25[0-...
   *              ^^
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
const fiber0269 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)(\.(25...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0270(i, str, context);
};
const fiber0271 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0270 = context.quantifierCounter23;
  context.quantifierCounter23 = -1;
  const cursorAfterQuantifier = greedyQuantifier0270(i, str, context);
  context.quantifierCounter23 = matchCountCopygreedyQuantifier0270;

  return cursorAfterQuantifier;
};
const fiber0272 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart44 = context.groupMarkerStartTemp44;
  context.groupMarkerEnd44 = i;
  return greedyQuantifier0273(i, str, context);
};
const fiber0274 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...{1,4})|((:[0-9A-Fa-f]{1,4}){0,2...
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
  return greedyQuantifier0275(i, str, context);
};
const fiber0276 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp44 = i;
  /*
   * charOrSet
   * ...){1,4})|((:[0-9A-Fa-f...
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
   * ...{1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((2...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0275 = context.quantifierCounter25;
  context.quantifierCounter25 = -1;
  const cursorAfterQuantifier = greedyQuantifier0275(i, str, context);
  context.quantifierCounter25 = matchCountCopygreedyQuantifier0275;

  return cursorAfterQuantifier;
};
const fiber0277 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp43 = i;
  /*
   * quantifierStarter
   * ...}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0273 = context.quantifierCounter24;
  context.quantifierCounter24 = -1;
  const cursorAfterQuantifier = greedyQuantifier0273(i, str, context);
  context.quantifierCounter24 = matchCountCopygreedyQuantifier0273;

  return cursorAfterQuantifier;
};
const fiber0278 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)){3}))|:))|(([0-9A...
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
  return fiber0235(i, str, context);
};
const fiber0279 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){3}(((:[0...
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
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart39 = context.groupMarkerStartTemp39;
  context.groupMarkerEnd39 = i;
  /*
   * groupStartMarker
   * ...{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp40 = i;
  /*
   * disjunction
   * ...{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy38 = context.groupMarkerStart38;
  const groupMarkerEndCopy38 = context.groupMarkerEnd38;
  const groupMarkerStartCopy40 = context.groupMarkerStart40;
  const groupMarkerEndCopy40 = context.groupMarkerEnd40;
  const groupMarkerStartCopy41 = context.groupMarkerStart41;
  const groupMarkerEndCopy41 = context.groupMarkerEnd41;
  const groupMarkerStartCopy42 = context.groupMarkerStart42;
  const groupMarkerEndCopy42 = context.groupMarkerEnd42;
  const groupMarkerStartCopy43 = context.groupMarkerStart43;
  const groupMarkerEndCopy43 = context.groupMarkerEnd43;
  const groupMarkerStartCopy44 = context.groupMarkerStart44;
  const groupMarkerEndCopy44 = context.groupMarkerEnd44;
  const groupMarkerStartCopy45 = context.groupMarkerStart45;
  const groupMarkerEndCopy45 = context.groupMarkerEnd45;
  const groupMarkerStartCopy46 = context.groupMarkerStart46;
  const groupMarkerEndCopy46 = context.groupMarkerEnd46;
  const groupMarkerStartCopy47 = context.groupMarkerStart47;
  const groupMarkerEndCopy47 = context.groupMarkerEnd47;
  const groupMarkerStartCopy48 = context.groupMarkerStart48;
  const groupMarkerEndCopy48 = context.groupMarkerEnd48;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0242(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart38 = groupMarkerStartCopy38;
  context.groupMarkerEnd38 = groupMarkerEndCopy38;
  context.groupMarkerStart40 = groupMarkerStartCopy40;
  context.groupMarkerEnd40 = groupMarkerEndCopy40;
  context.groupMarkerStart41 = groupMarkerStartCopy41;
  context.groupMarkerEnd41 = groupMarkerEndCopy41;
  context.groupMarkerStart42 = groupMarkerStartCopy42;
  context.groupMarkerEnd42 = groupMarkerEndCopy42;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0277(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart38 = groupMarkerStartCopy38;
  context.groupMarkerEnd38 = groupMarkerEndCopy38;
  context.groupMarkerStart40 = groupMarkerStartCopy40;
  context.groupMarkerEnd40 = groupMarkerEndCopy40;
  context.groupMarkerStart43 = groupMarkerStartCopy43;
  context.groupMarkerEnd43 = groupMarkerEndCopy43;
  context.groupMarkerStart44 = groupMarkerStartCopy44;
  context.groupMarkerEnd44 = groupMarkerEndCopy44;
  context.groupMarkerStart45 = groupMarkerStartCopy45;
  context.groupMarkerEnd45 = groupMarkerEndCopy45;
  context.groupMarkerStart46 = groupMarkerStartCopy46;
  context.groupMarkerEnd46 = groupMarkerEndCopy46;
  context.groupMarkerStart47 = groupMarkerStartCopy47;
  context.groupMarkerEnd47 = groupMarkerEndCopy47;
  context.groupMarkerStart48 = groupMarkerStartCopy48;
  context.groupMarkerEnd48 = groupMarkerEndCopy48;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0278(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart38 = groupMarkerStartCopy38;
  context.groupMarkerEnd38 = groupMarkerEndCopy38;
  context.groupMarkerStart40 = groupMarkerStartCopy40;
  context.groupMarkerEnd40 = groupMarkerEndCopy40;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0280 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}))|:))|(([0-9A-Fa-f]{1,4}:){3}...
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
  return greedyQuantifier0281(i, str, context);
};
const fiber0282 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){3}(((:[0...
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
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart39 = context.groupMarkerStartTemp39;
  context.groupMarkerEnd39 = i;
  /*
   * groupStartMarker
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp39 = i;
  /*
   * quantifierStarter
   * ...}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0281 = context.quantifierCounter26;
  context.quantifierCounter26 = -1;
  const cursorAfterQuantifier = greedyQuantifier0281(i, str, context);
  context.quantifierCounter26 = matchCountCopygreedyQuantifier0281;

  return cursorAfterQuantifier;
};
const fiber0283 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}))|:))|(([0-9A-Fa-f]{1,4}:){3}...
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
  return greedyQuantifier0284(i, str, context);
};
const fiber0285 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){3}(((:[0...
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
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart39 = context.groupMarkerStartTemp39;
  context.groupMarkerEnd39 = i;
  /*
   * groupStartMarker
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp39 = i;
  /*
   * quantifierStarter
   * ...}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0284 = context.quantifierCounter26;
  context.quantifierCounter26 = -1;
  const cursorAfterQuantifier = greedyQuantifier0284(i, str, context);
  context.quantifierCounter26 = matchCountCopygreedyQuantifier0284;

  return cursorAfterQuantifier;
};
const fiber0286 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}))|:))|(([0-9A-Fa-f]{1,4}:){3}...
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
  return greedyQuantifier0287(i, str, context);
};
const fiber0288 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...{3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp38 = i;
  /*
   * groupStartMarker
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp39 = i;
  /*
   * quantifierStarter
   * ...}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0287 = context.quantifierCounter26;
  context.quantifierCounter26 = -1;
  const cursorAfterQuantifier = greedyQuantifier0287(i, str, context);
  context.quantifierCounter26 = matchCountCopygreedyQuantifier0287;

  return cursorAfterQuantifier;
};
const fiber0289 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart51 = context.groupMarkerStartTemp51;
  context.groupMarkerEnd51 = i;
  /*
   * groupEndMarker
   * ...{3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart49 = context.groupMarkerStartTemp49;
  context.groupMarkerEnd49 = i;
  return fiber0042(i, str, context);
};
const fiber0290 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart52 = context.groupMarkerStartTemp52;
  context.groupMarkerEnd52 = i;
  return fiber0289(i, str, context);
};
const fiber0291 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart53 = context.groupMarkerStartTemp53;
  context.groupMarkerEnd53 = i;
  return greedyQuantifier0292(i, str, context);
};
const fiber0293 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}:){2}(((:[0-9A-Fa-f]{1,4}){1,5...
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
  return greedyQuantifier0294(i, str, context);
};
const fiber0295 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp53 = i;
  /*
   * charOrSet
   * ...4}:){2}(((:[0-9A-Fa-f...
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
   * ...}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0294 = context.quantifierCounter28;
  context.quantifierCounter28 = -1;
  const cursorAfterQuantifier = greedyQuantifier0294(i, str, context);
  context.quantifierCounter28 = matchCountCopygreedyQuantifier0294;

  return cursorAfterQuantifier;
};
const fiber0296 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp52 = i;
  /*
   * quantifierStarter
   * ...,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0292 = context.quantifierCounter27;
  context.quantifierCounter27 = -1;
  const cursorAfterQuantifier = greedyQuantifier0292(i, str, context);
  context.quantifierCounter27 = matchCountCopygreedyQuantifier0292;

  return cursorAfterQuantifier;
};
const fiber0297 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...1,4}){0,3}:((25[0-5]|...
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
   * ...,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp56 = i;
  /*
   * groupStartMarker
   * ...4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp57 = i;
  /*
   * nonBacktrackingDisjunction
   * ...4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction3: {
    const length0 = fiber0319(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction3;
    }
    const length1 = fiber0320(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction3;
    }
    const length2 = fiber0321(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction3;
    }
    const length3 = fiber0325(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction3;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart57 = context.groupMarkerStartTemp57;
  context.groupMarkerEnd57 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp58 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode6 = str.charCodeAt(i);
  let result6 = false;

  result6 = charCode6 === 46;

  if (!result6) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp59 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction8: {
    const length0 = fiber0312(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction8;
    }
    const length1 = fiber0313(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction8;
    }
    const length2 = fiber0314(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction8;
    }
    const length3 = fiber0318(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction8;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart59 = context.groupMarkerStartTemp59;
  context.groupMarkerEnd59 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart58 = context.groupMarkerStartTemp58;
  context.groupMarkerEnd58 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp58 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode12 = str.charCodeAt(i);
  let result12 = false;

  result12 = charCode12 === 46;

  if (!result12) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp59 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction14: {
    const length0 = fiber0305(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction14;
    }
    const length1 = fiber0306(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction14;
    }
    const length2 = fiber0307(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction14;
    }
    const length3 = fiber0311(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction14;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart59 = context.groupMarkerStartTemp59;
  context.groupMarkerEnd59 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart58 = context.groupMarkerStartTemp58;
  context.groupMarkerEnd58 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp58 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode18 = str.charCodeAt(i);
  let result18 = false;

  result18 = charCode18 === 46;

  if (!result18) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp59 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction20: {
    const length0 = fiber0298(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction20;
    }
    const length1 = fiber0299(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction20;
    }
    const length2 = fiber0300(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction20;
    }
    const length3 = fiber0304(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction20;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart59 = context.groupMarkerStartTemp59;
  context.groupMarkerEnd59 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart58 = context.groupMarkerStartTemp58;
  context.groupMarkerEnd58 = i;
  /*
   * groupEndMarker
   * ...,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart56 = context.groupMarkerStartTemp56;
  context.groupMarkerEnd56 = i;
  /*
   * groupEndMarker
   * ...4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart54 = context.groupMarkerStartTemp54;
  context.groupMarkerEnd54 = i;
  return fiber0289(i, str, context);
};
const fiber0298 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
const fiber0299 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0300 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0301 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
const fiber0302 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0303(i, str, context);
};
const fiber0304 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0303 = context.quantifierCounter29;
  context.quantifierCounter29 = -1;
  const cursorAfterQuantifier = greedyQuantifier0303(i, str, context);
  context.quantifierCounter29 = matchCountCopygreedyQuantifier0303;

  return cursorAfterQuantifier;
};
const fiber0305 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
const fiber0306 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0307 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0308 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
const fiber0309 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0310(i, str, context);
};
const fiber0311 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0310 = context.quantifierCounter29;
  context.quantifierCounter29 = -1;
  const cursorAfterQuantifier = greedyQuantifier0310(i, str, context);
  context.quantifierCounter29 = matchCountCopygreedyQuantifier0310;

  return cursorAfterQuantifier;
};
const fiber0312 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
const fiber0313 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0314 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0315 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
const fiber0316 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0317(i, str, context);
};
const fiber0318 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0317 = context.quantifierCounter29;
  context.quantifierCounter29 = -1;
  const cursorAfterQuantifier = greedyQuantifier0317(i, str, context);
  context.quantifierCounter29 = matchCountCopygreedyQuantifier0317;

  return cursorAfterQuantifier;
};
const fiber0319 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}){0,3}:((25[0-5]|2[0...
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
   * ...){0,3}:((25[0-5]|2[0-...
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
   * ...{0,3}:((25[0-5]|2[0-4]\d|...
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
const fiber0320 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...((25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0321 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0322 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)(\.(25[0-...
   *              ^^
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
const fiber0323 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)(\.(25...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0324(i, str, context);
};
const fiber0325 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0324 = context.quantifierCounter30;
  context.quantifierCounter30 = -1;
  const cursorAfterQuantifier = greedyQuantifier0324(i, str, context);
  context.quantifierCounter30 = matchCountCopygreedyQuantifier0324;

  return cursorAfterQuantifier;
};
const fiber0326 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart55 = context.groupMarkerStartTemp55;
  context.groupMarkerEnd55 = i;
  return greedyQuantifier0327(i, str, context);
};
const fiber0328 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...{1,5})|((:[0-9A-Fa-f]{1,4}){0,3...
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
  return greedyQuantifier0329(i, str, context);
};
const fiber0330 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp55 = i;
  /*
   * charOrSet
   * ...){1,5})|((:[0-9A-Fa-f...
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
   * ...{1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((2...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0329 = context.quantifierCounter32;
  context.quantifierCounter32 = -1;
  const cursorAfterQuantifier = greedyQuantifier0329(i, str, context);
  context.quantifierCounter32 = matchCountCopygreedyQuantifier0329;

  return cursorAfterQuantifier;
};
const fiber0331 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp54 = i;
  /*
   * quantifierStarter
   * ...}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0327 = context.quantifierCounter31;
  context.quantifierCounter31 = -1;
  const cursorAfterQuantifier = greedyQuantifier0327(i, str, context);
  context.quantifierCounter31 = matchCountCopygreedyQuantifier0327;

  return cursorAfterQuantifier;
};
const fiber0332 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)){3}))|:))|(([0-9A...
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
  return fiber0289(i, str, context);
};
const fiber0333 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){2}(((:[0...
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
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart50 = context.groupMarkerStartTemp50;
  context.groupMarkerEnd50 = i;
  /*
   * groupStartMarker
   * ...{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp51 = i;
  /*
   * disjunction
   * ...{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy49 = context.groupMarkerStart49;
  const groupMarkerEndCopy49 = context.groupMarkerEnd49;
  const groupMarkerStartCopy51 = context.groupMarkerStart51;
  const groupMarkerEndCopy51 = context.groupMarkerEnd51;
  const groupMarkerStartCopy52 = context.groupMarkerStart52;
  const groupMarkerEndCopy52 = context.groupMarkerEnd52;
  const groupMarkerStartCopy53 = context.groupMarkerStart53;
  const groupMarkerEndCopy53 = context.groupMarkerEnd53;
  const groupMarkerStartCopy54 = context.groupMarkerStart54;
  const groupMarkerEndCopy54 = context.groupMarkerEnd54;
  const groupMarkerStartCopy55 = context.groupMarkerStart55;
  const groupMarkerEndCopy55 = context.groupMarkerEnd55;
  const groupMarkerStartCopy56 = context.groupMarkerStart56;
  const groupMarkerEndCopy56 = context.groupMarkerEnd56;
  const groupMarkerStartCopy57 = context.groupMarkerStart57;
  const groupMarkerEndCopy57 = context.groupMarkerEnd57;
  const groupMarkerStartCopy58 = context.groupMarkerStart58;
  const groupMarkerEndCopy58 = context.groupMarkerEnd58;
  const groupMarkerStartCopy59 = context.groupMarkerStart59;
  const groupMarkerEndCopy59 = context.groupMarkerEnd59;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0296(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart49 = groupMarkerStartCopy49;
  context.groupMarkerEnd49 = groupMarkerEndCopy49;
  context.groupMarkerStart51 = groupMarkerStartCopy51;
  context.groupMarkerEnd51 = groupMarkerEndCopy51;
  context.groupMarkerStart52 = groupMarkerStartCopy52;
  context.groupMarkerEnd52 = groupMarkerEndCopy52;
  context.groupMarkerStart53 = groupMarkerStartCopy53;
  context.groupMarkerEnd53 = groupMarkerEndCopy53;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0331(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart49 = groupMarkerStartCopy49;
  context.groupMarkerEnd49 = groupMarkerEndCopy49;
  context.groupMarkerStart51 = groupMarkerStartCopy51;
  context.groupMarkerEnd51 = groupMarkerEndCopy51;
  context.groupMarkerStart54 = groupMarkerStartCopy54;
  context.groupMarkerEnd54 = groupMarkerEndCopy54;
  context.groupMarkerStart55 = groupMarkerStartCopy55;
  context.groupMarkerEnd55 = groupMarkerEndCopy55;
  context.groupMarkerStart56 = groupMarkerStartCopy56;
  context.groupMarkerEnd56 = groupMarkerEndCopy56;
  context.groupMarkerStart57 = groupMarkerStartCopy57;
  context.groupMarkerEnd57 = groupMarkerEndCopy57;
  context.groupMarkerStart58 = groupMarkerStartCopy58;
  context.groupMarkerEnd58 = groupMarkerEndCopy58;
  context.groupMarkerStart59 = groupMarkerStartCopy59;
  context.groupMarkerEnd59 = groupMarkerEndCopy59;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0332(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart49 = groupMarkerStartCopy49;
  context.groupMarkerEnd49 = groupMarkerEndCopy49;
  context.groupMarkerStart51 = groupMarkerStartCopy51;
  context.groupMarkerEnd51 = groupMarkerEndCopy51;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0334 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}))|:))|(([0-9A-Fa-f]{1,4}:){2}...
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
  return greedyQuantifier0335(i, str, context);
};
const fiber0336 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){2}(((:[0...
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
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart50 = context.groupMarkerStartTemp50;
  context.groupMarkerEnd50 = i;
  /*
   * groupStartMarker
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp50 = i;
  /*
   * quantifierStarter
   * ...}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0335 = context.quantifierCounter33;
  context.quantifierCounter33 = -1;
  const cursorAfterQuantifier = greedyQuantifier0335(i, str, context);
  context.quantifierCounter33 = matchCountCopygreedyQuantifier0335;

  return cursorAfterQuantifier;
};
const fiber0337 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}))|:))|(([0-9A-Fa-f]{1,4}:){2}...
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
  return greedyQuantifier0338(i, str, context);
};
const fiber0339 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...{3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp49 = i;
  /*
   * groupStartMarker
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp50 = i;
  /*
   * quantifierStarter
   * ...}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0338 = context.quantifierCounter33;
  context.quantifierCounter33 = -1;
  const cursorAfterQuantifier = greedyQuantifier0338(i, str, context);
  context.quantifierCounter33 = matchCountCopygreedyQuantifier0338;

  return cursorAfterQuantifier;
};
const fiber0340 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart62 = context.groupMarkerStartTemp62;
  context.groupMarkerEnd62 = i;
  /*
   * groupEndMarker
   * ...{3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart60 = context.groupMarkerStartTemp60;
  context.groupMarkerEnd60 = i;
  return fiber0042(i, str, context);
};
const fiber0341 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart63 = context.groupMarkerStartTemp63;
  context.groupMarkerEnd63 = i;
  return fiber0340(i, str, context);
};
const fiber0342 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart64 = context.groupMarkerStartTemp64;
  context.groupMarkerEnd64 = i;
  return greedyQuantifier0343(i, str, context);
};
const fiber0344 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}:){1}(((:[0-9A-Fa-f]{1,4}){1,6...
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
  return greedyQuantifier0345(i, str, context);
};
const fiber0346 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp64 = i;
  /*
   * charOrSet
   * ...4}:){1}(((:[0-9A-Fa-f...
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
   * ...}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0345 = context.quantifierCounter35;
  context.quantifierCounter35 = -1;
  const cursorAfterQuantifier = greedyQuantifier0345(i, str, context);
  context.quantifierCounter35 = matchCountCopygreedyQuantifier0345;

  return cursorAfterQuantifier;
};
const fiber0347 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp63 = i;
  /*
   * quantifierStarter
   * ...,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0343 = context.quantifierCounter34;
  context.quantifierCounter34 = -1;
  const cursorAfterQuantifier = greedyQuantifier0343(i, str, context);
  context.quantifierCounter34 = matchCountCopygreedyQuantifier0343;

  return cursorAfterQuantifier;
};
const fiber0348 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...1,4}){0,4}:((25[0-5]|...
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
   * ...,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp67 = i;
  /*
   * groupStartMarker
   * ...4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp68 = i;
  /*
   * nonBacktrackingDisjunction
   * ...4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction3: {
    const length0 = fiber0370(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction3;
    }
    const length1 = fiber0371(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction3;
    }
    const length2 = fiber0372(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction3;
    }
    const length3 = fiber0376(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction3;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart68 = context.groupMarkerStartTemp68;
  context.groupMarkerEnd68 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp69 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode6 = str.charCodeAt(i);
  let result6 = false;

  result6 = charCode6 === 46;

  if (!result6) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp70 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction8: {
    const length0 = fiber0363(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction8;
    }
    const length1 = fiber0364(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction8;
    }
    const length2 = fiber0365(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction8;
    }
    const length3 = fiber0369(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction8;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart70 = context.groupMarkerStartTemp70;
  context.groupMarkerEnd70 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart69 = context.groupMarkerStartTemp69;
  context.groupMarkerEnd69 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp69 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode12 = str.charCodeAt(i);
  let result12 = false;

  result12 = charCode12 === 46;

  if (!result12) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp70 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction14: {
    const length0 = fiber0356(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction14;
    }
    const length1 = fiber0357(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction14;
    }
    const length2 = fiber0358(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction14;
    }
    const length3 = fiber0362(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction14;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart70 = context.groupMarkerStartTemp70;
  context.groupMarkerEnd70 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart69 = context.groupMarkerStartTemp69;
  context.groupMarkerEnd69 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp69 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode18 = str.charCodeAt(i);
  let result18 = false;

  result18 = charCode18 === 46;

  if (!result18) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp70 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction20: {
    const length0 = fiber0349(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction20;
    }
    const length1 = fiber0350(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction20;
    }
    const length2 = fiber0351(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction20;
    }
    const length3 = fiber0355(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction20;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart70 = context.groupMarkerStartTemp70;
  context.groupMarkerEnd70 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart69 = context.groupMarkerStartTemp69;
  context.groupMarkerEnd69 = i;
  /*
   * groupEndMarker
   * ...,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart67 = context.groupMarkerStartTemp67;
  context.groupMarkerEnd67 = i;
  /*
   * groupEndMarker
   * ...4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart65 = context.groupMarkerStartTemp65;
  context.groupMarkerEnd65 = i;
  return fiber0340(i, str, context);
};
const fiber0349 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
const fiber0350 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0351 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0352 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
const fiber0353 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0354(i, str, context);
};
const fiber0355 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0354 = context.quantifierCounter36;
  context.quantifierCounter36 = -1;
  const cursorAfterQuantifier = greedyQuantifier0354(i, str, context);
  context.quantifierCounter36 = matchCountCopygreedyQuantifier0354;

  return cursorAfterQuantifier;
};
const fiber0356 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
const fiber0357 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0358 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0359 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
const fiber0360 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0361(i, str, context);
};
const fiber0362 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0361 = context.quantifierCounter36;
  context.quantifierCounter36 = -1;
  const cursorAfterQuantifier = greedyQuantifier0361(i, str, context);
  context.quantifierCounter36 = matchCountCopygreedyQuantifier0361;

  return cursorAfterQuantifier;
};
const fiber0363 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
const fiber0364 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0365 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0366 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
const fiber0367 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0368(i, str, context);
};
const fiber0369 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0368 = context.quantifierCounter36;
  context.quantifierCounter36 = -1;
  const cursorAfterQuantifier = greedyQuantifier0368(i, str, context);
  context.quantifierCounter36 = matchCountCopygreedyQuantifier0368;

  return cursorAfterQuantifier;
};
const fiber0370 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}){0,4}:((25[0-5]|2[0...
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
   * ...){0,4}:((25[0-5]|2[0-...
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
   * ...{0,4}:((25[0-5]|2[0-4]\d|...
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
const fiber0371 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...((25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0372 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0373 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)(\.(25[0-...
   *              ^^
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
const fiber0374 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)(\.(25...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0375(i, str, context);
};
const fiber0376 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0375 = context.quantifierCounter37;
  context.quantifierCounter37 = -1;
  const cursorAfterQuantifier = greedyQuantifier0375(i, str, context);
  context.quantifierCounter37 = matchCountCopygreedyQuantifier0375;

  return cursorAfterQuantifier;
};
const fiber0377 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart66 = context.groupMarkerStartTemp66;
  context.groupMarkerEnd66 = i;
  return greedyQuantifier0378(i, str, context);
};
const fiber0379 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...{1,6})|((:[0-9A-Fa-f]{1,4}){0,4...
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
  return greedyQuantifier0380(i, str, context);
};
const fiber0381 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp66 = i;
  /*
   * charOrSet
   * ...){1,6})|((:[0-9A-Fa-f...
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
   * ...{1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((2...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0380 = context.quantifierCounter39;
  context.quantifierCounter39 = -1;
  const cursorAfterQuantifier = greedyQuantifier0380(i, str, context);
  context.quantifierCounter39 = matchCountCopygreedyQuantifier0380;

  return cursorAfterQuantifier;
};
const fiber0382 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp65 = i;
  /*
   * quantifierStarter
   * ...}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0378 = context.quantifierCounter38;
  context.quantifierCounter38 = -1;
  const cursorAfterQuantifier = greedyQuantifier0378(i, str, context);
  context.quantifierCounter38 = matchCountCopygreedyQuantifier0378;

  return cursorAfterQuantifier;
};
const fiber0383 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)){3}))|:))|(:(((:[...
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
  return fiber0340(i, str, context);
};
const fiber0384 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){1}(((:[0...
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
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart61 = context.groupMarkerStartTemp61;
  context.groupMarkerEnd61 = i;
  /*
   * groupStartMarker
   * ...{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp62 = i;
  /*
   * disjunction
   * ...{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy60 = context.groupMarkerStart60;
  const groupMarkerEndCopy60 = context.groupMarkerEnd60;
  const groupMarkerStartCopy62 = context.groupMarkerStart62;
  const groupMarkerEndCopy62 = context.groupMarkerEnd62;
  const groupMarkerStartCopy63 = context.groupMarkerStart63;
  const groupMarkerEndCopy63 = context.groupMarkerEnd63;
  const groupMarkerStartCopy64 = context.groupMarkerStart64;
  const groupMarkerEndCopy64 = context.groupMarkerEnd64;
  const groupMarkerStartCopy65 = context.groupMarkerStart65;
  const groupMarkerEndCopy65 = context.groupMarkerEnd65;
  const groupMarkerStartCopy66 = context.groupMarkerStart66;
  const groupMarkerEndCopy66 = context.groupMarkerEnd66;
  const groupMarkerStartCopy67 = context.groupMarkerStart67;
  const groupMarkerEndCopy67 = context.groupMarkerEnd67;
  const groupMarkerStartCopy68 = context.groupMarkerStart68;
  const groupMarkerEndCopy68 = context.groupMarkerEnd68;
  const groupMarkerStartCopy69 = context.groupMarkerStart69;
  const groupMarkerEndCopy69 = context.groupMarkerEnd69;
  const groupMarkerStartCopy70 = context.groupMarkerStart70;
  const groupMarkerEndCopy70 = context.groupMarkerEnd70;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0347(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart60 = groupMarkerStartCopy60;
  context.groupMarkerEnd60 = groupMarkerEndCopy60;
  context.groupMarkerStart62 = groupMarkerStartCopy62;
  context.groupMarkerEnd62 = groupMarkerEndCopy62;
  context.groupMarkerStart63 = groupMarkerStartCopy63;
  context.groupMarkerEnd63 = groupMarkerEndCopy63;
  context.groupMarkerStart64 = groupMarkerStartCopy64;
  context.groupMarkerEnd64 = groupMarkerEndCopy64;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0382(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart60 = groupMarkerStartCopy60;
  context.groupMarkerEnd60 = groupMarkerEndCopy60;
  context.groupMarkerStart62 = groupMarkerStartCopy62;
  context.groupMarkerEnd62 = groupMarkerEndCopy62;
  context.groupMarkerStart65 = groupMarkerStartCopy65;
  context.groupMarkerEnd65 = groupMarkerEndCopy65;
  context.groupMarkerStart66 = groupMarkerStartCopy66;
  context.groupMarkerEnd66 = groupMarkerEndCopy66;
  context.groupMarkerStart67 = groupMarkerStartCopy67;
  context.groupMarkerEnd67 = groupMarkerEndCopy67;
  context.groupMarkerStart68 = groupMarkerStartCopy68;
  context.groupMarkerEnd68 = groupMarkerEndCopy68;
  context.groupMarkerStart69 = groupMarkerStartCopy69;
  context.groupMarkerEnd69 = groupMarkerEndCopy69;
  context.groupMarkerStart70 = groupMarkerStartCopy70;
  context.groupMarkerEnd70 = groupMarkerEndCopy70;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0383(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart60 = groupMarkerStartCopy60;
  context.groupMarkerEnd60 = groupMarkerEndCopy60;
  context.groupMarkerStart62 = groupMarkerStartCopy62;
  context.groupMarkerEnd62 = groupMarkerEndCopy62;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0385 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}))|:))|(([0-9A-Fa-f]{1,4}:){1}...
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
  return greedyQuantifier0386(i, str, context);
};
const fiber0387 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...{3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp60 = i;
  /*
   * groupStartMarker
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp61 = i;
  /*
   * quantifierStarter
   * ...}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0386 = context.quantifierCounter40;
  context.quantifierCounter40 = -1;
  const cursorAfterQuantifier = greedyQuantifier0386(i, str, context);
  context.quantifierCounter40 = matchCountCopygreedyQuantifier0386;

  return cursorAfterQuantifier;
};
const fiber0388 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart72 = context.groupMarkerStartTemp72;
  context.groupMarkerEnd72 = i;
  /*
   * groupEndMarker
   * ...{3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart71 = context.groupMarkerStartTemp71;
  context.groupMarkerEnd71 = i;
  return fiber0042(i, str, context);
};
const fiber0389 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart73 = context.groupMarkerStartTemp73;
  context.groupMarkerEnd73 = i;
  return fiber0388(i, str, context);
};
const fiber0390 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...)|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart74 = context.groupMarkerStartTemp74;
  context.groupMarkerEnd74 = i;
  return greedyQuantifier0391(i, str, context);
};
const fiber0392 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...:))|(:(((:[0-9A-Fa-f]{1,4}){1,7...
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
  return greedyQuantifier0393(i, str, context);
};
const fiber0394 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...)|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp74 = i;
  /*
   * charOrSet
   * ...|:))|(:(((:[0-9A-Fa-f...
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
   * ...:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0393 = context.quantifierCounter42;
  context.quantifierCounter42 = -1;
  const cursorAfterQuantifier = greedyQuantifier0393(i, str, context);
  context.quantifierCounter42 = matchCountCopygreedyQuantifier0393;

  return cursorAfterQuantifier;
};
const fiber0395 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp73 = i;
  /*
   * quantifierStarter
   * ...)|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0391 = context.quantifierCounter41;
  context.quantifierCounter41 = -1;
  const cursorAfterQuantifier = greedyQuantifier0391(i, str, context);
  context.quantifierCounter41 = matchCountCopygreedyQuantifier0391;

  return cursorAfterQuantifier;
};
const fiber0396 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...1,4}){0,5}:((25[0-5]|...
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
   * ...,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp77 = i;
  /*
   * groupStartMarker
   * ...4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp78 = i;
  /*
   * nonBacktrackingDisjunction
   * ...4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction3: {
    const length0 = fiber0418(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction3;
    }
    const length1 = fiber0419(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction3;
    }
    const length2 = fiber0420(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction3;
    }
    const length3 = fiber0424(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction3;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart78 = context.groupMarkerStartTemp78;
  context.groupMarkerEnd78 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp79 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode6 = str.charCodeAt(i);
  let result6 = false;

  result6 = charCode6 === 46;

  if (!result6) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp80 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction8: {
    const length0 = fiber0411(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction8;
    }
    const length1 = fiber0412(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction8;
    }
    const length2 = fiber0413(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction8;
    }
    const length3 = fiber0417(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction8;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart80 = context.groupMarkerStartTemp80;
  context.groupMarkerEnd80 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart79 = context.groupMarkerStartTemp79;
  context.groupMarkerEnd79 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp79 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode12 = str.charCodeAt(i);
  let result12 = false;

  result12 = charCode12 === 46;

  if (!result12) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp80 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction14: {
    const length0 = fiber0404(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction14;
    }
    const length1 = fiber0405(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction14;
    }
    const length2 = fiber0406(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction14;
    }
    const length3 = fiber0410(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction14;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart80 = context.groupMarkerStartTemp80;
  context.groupMarkerEnd80 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart79 = context.groupMarkerStartTemp79;
  context.groupMarkerEnd79 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp79 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(25[0-5]|2...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode18 = str.charCodeAt(i);
  let result18 = false;

  result18 = charCode18 === 46;

  if (!result18) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp80 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction20: {
    const length0 = fiber0397(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction20;
    }
    const length1 = fiber0398(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction20;
    }
    const length2 = fiber0399(i, str, context);
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction20;
    }
    const length3 = fiber0403(i, str, context);
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction20;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart80 = context.groupMarkerStartTemp80;
  context.groupMarkerEnd80 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart79 = context.groupMarkerStartTemp79;
  context.groupMarkerEnd79 = i;
  /*
   * groupEndMarker
   * ...,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart77 = context.groupMarkerStartTemp77;
  context.groupMarkerEnd77 = i;
  /*
   * groupEndMarker
   * ...4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart75 = context.groupMarkerStartTemp75;
  context.groupMarkerEnd75 = i;
  return fiber0388(i, str, context);
};
const fiber0397 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
const fiber0398 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0399 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0400 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
const fiber0401 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0402(i, str, context);
};
const fiber0403 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0402 = context.quantifierCounter43;
  context.quantifierCounter43 = -1;
  const cursorAfterQuantifier = greedyQuantifier0402(i, str, context);
  context.quantifierCounter43 = matchCountCopygreedyQuantifier0402;

  return cursorAfterQuantifier;
};
const fiber0404 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
const fiber0405 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0406 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0407 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
const fiber0408 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0409(i, str, context);
};
const fiber0410 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0409 = context.quantifierCounter43;
  context.quantifierCounter43 = -1;
  const cursorAfterQuantifier = greedyQuantifier0409(i, str, context);
  context.quantifierCounter43 = matchCountCopygreedyQuantifier0409;

  return cursorAfterQuantifier;
};
const fiber0411 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(25[0-5]|2[0...
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
   * ...]?\d)(\.(25[0-5]|2[0-...
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
   * ...?\d)(\.(25[0-5]|2[0-4]\d|...
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
const fiber0412 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ....(25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0413 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0414 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
const fiber0415 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0416(i, str, context);
};
const fiber0417 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0416 = context.quantifierCounter43;
  context.quantifierCounter43 = -1;
  const cursorAfterQuantifier = greedyQuantifier0416(i, str, context);
  context.quantifierCounter43 = matchCountCopygreedyQuantifier0416;

  return cursorAfterQuantifier;
};
const fiber0418 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}){0,5}:((25[0-5]|2[0...
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
   * ...){0,5}:((25[0-5]|2[0-...
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
   * ...{0,5}:((25[0-5]|2[0-4]\d|...
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
const fiber0419 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...((25[0-5]|2[0-4]\d|1\...
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
   * ...(25[0-5]|2[0-4]\d|1\d\d|[...
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
  /*
   * charOrSet
   * ...-5]|2[0-4]\d|1\d\d|[1-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0420 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|2[0-4]\d|1\d\d|[1-9]...
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
  /*
   * charOrSet
   * ...2[0-4]\d|1\d\d|[1-9]?\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  if (charCode1 <= 57) {
    result1 = charCode1 >= 48;
  }
  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...0-4]\d|1\d\d|[1-9]?\d)...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  if (charCode2 <= 57) {
    result2 = charCode2 >= 48;
  }
  if (!result2) {
    return -1;
  }
  i++;
  return i;
};
const fiber0421 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)(\.(25[0-...
   *              ^^
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
const fiber0422 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]\d|1\d\d|[1-9]?\d)(\.(25...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return greedyQuantifier0423(i, str, context);
};
const fiber0424 = (i: number, str: string, context: Context): number => {
  /*
   * quantifierStarter
   * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0423 = context.quantifierCounter44;
  context.quantifierCounter44 = -1;
  const cursorAfterQuantifier = greedyQuantifier0423(i, str, context);
  context.quantifierCounter44 = matchCountCopygreedyQuantifier0423;

  return cursorAfterQuantifier;
};
const fiber0425 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart76 = context.groupMarkerStartTemp76;
  context.groupMarkerEnd76 = i;
  return greedyQuantifier0426(i, str, context);
};
const fiber0427 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...{1,7})|((:[0-9A-Fa-f]{1,4}){0,5...
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
  return greedyQuantifier0428(i, str, context);
};
const fiber0429 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp76 = i;
  /*
   * charOrSet
   * ...){1,7})|((:[0-9A-Fa-f...
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
   * ...{1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((2...
   *              ^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0428 = context.quantifierCounter46;
  context.quantifierCounter46 = -1;
  const cursorAfterQuantifier = greedyQuantifier0428(i, str, context);
  context.quantifierCounter46 = matchCountCopygreedyQuantifier0428;

  return cursorAfterQuantifier;
};
const fiber0430 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp75 = i;
  /*
   * quantifierStarter
   * ...}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0426 = context.quantifierCounter45;
  context.quantifierCounter45 = -1;
  const cursorAfterQuantifier = greedyQuantifier0426(i, str, context);
  context.quantifierCounter45 = matchCountCopygreedyQuantifier0426;

  return cursorAfterQuantifier;
};
const fiber0431 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)){3}))|:)))(%.+)?\...
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
  return fiber0388(i, str, context);
};
const fiber0432 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...{3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp71 = i;
  /*
   * charOrSet
   * ...3}))|:))|(:(((:[0-9A-...
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
   * ...}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp72 = i;
  /*
   * disjunction
   * ...}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy71 = context.groupMarkerStart71;
  const groupMarkerEndCopy71 = context.groupMarkerEnd71;
  const groupMarkerStartCopy72 = context.groupMarkerStart72;
  const groupMarkerEndCopy72 = context.groupMarkerEnd72;
  const groupMarkerStartCopy73 = context.groupMarkerStart73;
  const groupMarkerEndCopy73 = context.groupMarkerEnd73;
  const groupMarkerStartCopy74 = context.groupMarkerStart74;
  const groupMarkerEndCopy74 = context.groupMarkerEnd74;
  const groupMarkerStartCopy75 = context.groupMarkerStart75;
  const groupMarkerEndCopy75 = context.groupMarkerEnd75;
  const groupMarkerStartCopy76 = context.groupMarkerStart76;
  const groupMarkerEndCopy76 = context.groupMarkerEnd76;
  const groupMarkerStartCopy77 = context.groupMarkerStart77;
  const groupMarkerEndCopy77 = context.groupMarkerEnd77;
  const groupMarkerStartCopy78 = context.groupMarkerStart78;
  const groupMarkerEndCopy78 = context.groupMarkerEnd78;
  const groupMarkerStartCopy79 = context.groupMarkerStart79;
  const groupMarkerEndCopy79 = context.groupMarkerEnd79;
  const groupMarkerStartCopy80 = context.groupMarkerStart80;
  const groupMarkerEndCopy80 = context.groupMarkerEnd80;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0395(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart71 = groupMarkerStartCopy71;
  context.groupMarkerEnd71 = groupMarkerEndCopy71;
  context.groupMarkerStart72 = groupMarkerStartCopy72;
  context.groupMarkerEnd72 = groupMarkerEndCopy72;
  context.groupMarkerStart73 = groupMarkerStartCopy73;
  context.groupMarkerEnd73 = groupMarkerEndCopy73;
  context.groupMarkerStart74 = groupMarkerStartCopy74;
  context.groupMarkerEnd74 = groupMarkerEndCopy74;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0430(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart71 = groupMarkerStartCopy71;
  context.groupMarkerEnd71 = groupMarkerEndCopy71;
  context.groupMarkerStart72 = groupMarkerStartCopy72;
  context.groupMarkerEnd72 = groupMarkerEndCopy72;
  context.groupMarkerStart75 = groupMarkerStartCopy75;
  context.groupMarkerEnd75 = groupMarkerEndCopy75;
  context.groupMarkerStart76 = groupMarkerStartCopy76;
  context.groupMarkerEnd76 = groupMarkerEndCopy76;
  context.groupMarkerStart77 = groupMarkerStartCopy77;
  context.groupMarkerEnd77 = groupMarkerEndCopy77;
  context.groupMarkerStart78 = groupMarkerStartCopy78;
  context.groupMarkerEnd78 = groupMarkerEndCopy78;
  context.groupMarkerStart79 = groupMarkerStartCopy79;
  context.groupMarkerEnd79 = groupMarkerEndCopy79;
  context.groupMarkerStart80 = groupMarkerStartCopy80;
  context.groupMarkerEnd80 = groupMarkerEndCopy80;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0431(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart71 = groupMarkerStartCopy71;
  context.groupMarkerEnd71 = groupMarkerEndCopy71;
  context.groupMarkerStart72 = groupMarkerStartCopy72;
  context.groupMarkerEnd72 = groupMarkerEndCopy72;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0433 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...s✱$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s✱$))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp7 = i;
  /*
   * disjunction
   * ...s✱$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s✱$))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
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
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;
  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;
  const groupMarkerStartCopy24 = context.groupMarkerStart24;
  const groupMarkerEndCopy24 = context.groupMarkerEnd24;
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
  const groupMarkerStartCopy30 = context.groupMarkerStart30;
  const groupMarkerEndCopy30 = context.groupMarkerEnd30;
  const groupMarkerStartCopy31 = context.groupMarkerStart31;
  const groupMarkerEndCopy31 = context.groupMarkerEnd31;
  const groupMarkerStartCopy32 = context.groupMarkerStart32;
  const groupMarkerEndCopy32 = context.groupMarkerEnd32;
  const groupMarkerStartCopy33 = context.groupMarkerStart33;
  const groupMarkerEndCopy33 = context.groupMarkerEnd33;
  const groupMarkerStartCopy34 = context.groupMarkerStart34;
  const groupMarkerEndCopy34 = context.groupMarkerEnd34;
  const groupMarkerStartCopy35 = context.groupMarkerStart35;
  const groupMarkerEndCopy35 = context.groupMarkerEnd35;
  const groupMarkerStartCopy36 = context.groupMarkerStart36;
  const groupMarkerEndCopy36 = context.groupMarkerEnd36;
  const groupMarkerStartCopy37 = context.groupMarkerStart37;
  const groupMarkerEndCopy37 = context.groupMarkerEnd37;
  const groupMarkerStartCopy38 = context.groupMarkerStart38;
  const groupMarkerEndCopy38 = context.groupMarkerEnd38;
  const groupMarkerStartCopy39 = context.groupMarkerStart39;
  const groupMarkerEndCopy39 = context.groupMarkerEnd39;
  const groupMarkerStartCopy40 = context.groupMarkerStart40;
  const groupMarkerEndCopy40 = context.groupMarkerEnd40;
  const groupMarkerStartCopy41 = context.groupMarkerStart41;
  const groupMarkerEndCopy41 = context.groupMarkerEnd41;
  const groupMarkerStartCopy42 = context.groupMarkerStart42;
  const groupMarkerEndCopy42 = context.groupMarkerEnd42;
  const groupMarkerStartCopy43 = context.groupMarkerStart43;
  const groupMarkerEndCopy43 = context.groupMarkerEnd43;
  const groupMarkerStartCopy44 = context.groupMarkerStart44;
  const groupMarkerEndCopy44 = context.groupMarkerEnd44;
  const groupMarkerStartCopy45 = context.groupMarkerStart45;
  const groupMarkerEndCopy45 = context.groupMarkerEnd45;
  const groupMarkerStartCopy46 = context.groupMarkerStart46;
  const groupMarkerEndCopy46 = context.groupMarkerEnd46;
  const groupMarkerStartCopy47 = context.groupMarkerStart47;
  const groupMarkerEndCopy47 = context.groupMarkerEnd47;
  const groupMarkerStartCopy48 = context.groupMarkerStart48;
  const groupMarkerEndCopy48 = context.groupMarkerEnd48;
  const groupMarkerStartCopy49 = context.groupMarkerStart49;
  const groupMarkerEndCopy49 = context.groupMarkerEnd49;
  const groupMarkerStartCopy50 = context.groupMarkerStart50;
  const groupMarkerEndCopy50 = context.groupMarkerEnd50;
  const groupMarkerStartCopy51 = context.groupMarkerStart51;
  const groupMarkerEndCopy51 = context.groupMarkerEnd51;
  const groupMarkerStartCopy52 = context.groupMarkerStart52;
  const groupMarkerEndCopy52 = context.groupMarkerEnd52;
  const groupMarkerStartCopy53 = context.groupMarkerStart53;
  const groupMarkerEndCopy53 = context.groupMarkerEnd53;
  const groupMarkerStartCopy54 = context.groupMarkerStart54;
  const groupMarkerEndCopy54 = context.groupMarkerEnd54;
  const groupMarkerStartCopy55 = context.groupMarkerStart55;
  const groupMarkerEndCopy55 = context.groupMarkerEnd55;
  const groupMarkerStartCopy56 = context.groupMarkerStart56;
  const groupMarkerEndCopy56 = context.groupMarkerEnd56;
  const groupMarkerStartCopy57 = context.groupMarkerStart57;
  const groupMarkerEndCopy57 = context.groupMarkerEnd57;
  const groupMarkerStartCopy58 = context.groupMarkerStart58;
  const groupMarkerEndCopy58 = context.groupMarkerEnd58;
  const groupMarkerStartCopy59 = context.groupMarkerStart59;
  const groupMarkerEndCopy59 = context.groupMarkerEnd59;
  const groupMarkerStartCopy60 = context.groupMarkerStart60;
  const groupMarkerEndCopy60 = context.groupMarkerEnd60;
  const groupMarkerStartCopy61 = context.groupMarkerStart61;
  const groupMarkerEndCopy61 = context.groupMarkerEnd61;
  const groupMarkerStartCopy62 = context.groupMarkerStart62;
  const groupMarkerEndCopy62 = context.groupMarkerEnd62;
  const groupMarkerStartCopy63 = context.groupMarkerStart63;
  const groupMarkerEndCopy63 = context.groupMarkerEnd63;
  const groupMarkerStartCopy64 = context.groupMarkerStart64;
  const groupMarkerEndCopy64 = context.groupMarkerEnd64;
  const groupMarkerStartCopy65 = context.groupMarkerStart65;
  const groupMarkerEndCopy65 = context.groupMarkerEnd65;
  const groupMarkerStartCopy66 = context.groupMarkerStart66;
  const groupMarkerEndCopy66 = context.groupMarkerEnd66;
  const groupMarkerStartCopy67 = context.groupMarkerStart67;
  const groupMarkerEndCopy67 = context.groupMarkerEnd67;
  const groupMarkerStartCopy68 = context.groupMarkerStart68;
  const groupMarkerEndCopy68 = context.groupMarkerEnd68;
  const groupMarkerStartCopy69 = context.groupMarkerStart69;
  const groupMarkerEndCopy69 = context.groupMarkerEnd69;
  const groupMarkerStartCopy70 = context.groupMarkerStart70;
  const groupMarkerEndCopy70 = context.groupMarkerEnd70;
  const groupMarkerStartCopy71 = context.groupMarkerStart71;
  const groupMarkerEndCopy71 = context.groupMarkerEnd71;
  const groupMarkerStartCopy72 = context.groupMarkerStart72;
  const groupMarkerEndCopy72 = context.groupMarkerEnd72;
  const groupMarkerStartCopy73 = context.groupMarkerStart73;
  const groupMarkerEndCopy73 = context.groupMarkerEnd73;
  const groupMarkerStartCopy74 = context.groupMarkerStart74;
  const groupMarkerEndCopy74 = context.groupMarkerEnd74;
  const groupMarkerStartCopy75 = context.groupMarkerStart75;
  const groupMarkerEndCopy75 = context.groupMarkerEnd75;
  const groupMarkerStartCopy76 = context.groupMarkerStart76;
  const groupMarkerEndCopy76 = context.groupMarkerEnd76;
  const groupMarkerStartCopy77 = context.groupMarkerStart77;
  const groupMarkerEndCopy77 = context.groupMarkerEnd77;
  const groupMarkerStartCopy78 = context.groupMarkerStart78;
  const groupMarkerEndCopy78 = context.groupMarkerEnd78;
  const groupMarkerStartCopy79 = context.groupMarkerStart79;
  const groupMarkerEndCopy79 = context.groupMarkerEnd79;
  const groupMarkerStartCopy80 = context.groupMarkerStart80;
  const groupMarkerEndCopy80 = context.groupMarkerEnd80;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0069(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart8 = groupMarkerStartCopy8;
  context.groupMarkerEnd8 = groupMarkerEndCopy8;
  context.groupMarkerStart9 = groupMarkerStartCopy9;
  context.groupMarkerEnd9 = groupMarkerEndCopy9;
  context.groupMarkerStart10 = groupMarkerStartCopy10;
  context.groupMarkerEnd10 = groupMarkerEndCopy10;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0123(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart11 = groupMarkerStartCopy11;
  context.groupMarkerEnd11 = groupMarkerEndCopy11;
  context.groupMarkerStart12 = groupMarkerStartCopy12;
  context.groupMarkerEnd12 = groupMarkerEndCopy12;
  context.groupMarkerStart13 = groupMarkerStartCopy13;
  context.groupMarkerEnd13 = groupMarkerEndCopy13;
  context.groupMarkerStart14 = groupMarkerStartCopy14;
  context.groupMarkerEnd14 = groupMarkerEndCopy14;
  context.groupMarkerStart15 = groupMarkerStartCopy15;
  context.groupMarkerEnd15 = groupMarkerEndCopy15;
  context.groupMarkerStart16 = groupMarkerStartCopy16;
  context.groupMarkerEnd16 = groupMarkerEndCopy16;
  context.groupMarkerStart17 = groupMarkerStartCopy17;
  context.groupMarkerEnd17 = groupMarkerEndCopy17;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0177(i, str, context);
  if (length2 !== -1) {
    return length2;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
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
  context.groupMarkerStart24 = groupMarkerStartCopy24;
  context.groupMarkerEnd24 = groupMarkerEndCopy24;
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length3 = fiber0234(i, str, context);
  if (length3 !== -1) {
    return length3;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart27 = groupMarkerStartCopy27;
  context.groupMarkerEnd27 = groupMarkerEndCopy27;
  context.groupMarkerStart28 = groupMarkerStartCopy28;
  context.groupMarkerEnd28 = groupMarkerEndCopy28;
  context.groupMarkerStart29 = groupMarkerStartCopy29;
  context.groupMarkerEnd29 = groupMarkerEndCopy29;
  context.groupMarkerStart30 = groupMarkerStartCopy30;
  context.groupMarkerEnd30 = groupMarkerEndCopy30;
  context.groupMarkerStart31 = groupMarkerStartCopy31;
  context.groupMarkerEnd31 = groupMarkerEndCopy31;
  context.groupMarkerStart32 = groupMarkerStartCopy32;
  context.groupMarkerEnd32 = groupMarkerEndCopy32;
  context.groupMarkerStart33 = groupMarkerStartCopy33;
  context.groupMarkerEnd33 = groupMarkerEndCopy33;
  context.groupMarkerStart34 = groupMarkerStartCopy34;
  context.groupMarkerEnd34 = groupMarkerEndCopy34;
  context.groupMarkerStart35 = groupMarkerStartCopy35;
  context.groupMarkerEnd35 = groupMarkerEndCopy35;
  context.groupMarkerStart36 = groupMarkerStartCopy36;
  context.groupMarkerEnd36 = groupMarkerEndCopy36;
  context.groupMarkerStart37 = groupMarkerStartCopy37;
  context.groupMarkerEnd37 = groupMarkerEndCopy37;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length4 = fiber0288(i, str, context);
  if (length4 !== -1) {
    return length4;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart38 = groupMarkerStartCopy38;
  context.groupMarkerEnd38 = groupMarkerEndCopy38;
  context.groupMarkerStart39 = groupMarkerStartCopy39;
  context.groupMarkerEnd39 = groupMarkerEndCopy39;
  context.groupMarkerStart40 = groupMarkerStartCopy40;
  context.groupMarkerEnd40 = groupMarkerEndCopy40;
  context.groupMarkerStart41 = groupMarkerStartCopy41;
  context.groupMarkerEnd41 = groupMarkerEndCopy41;
  context.groupMarkerStart42 = groupMarkerStartCopy42;
  context.groupMarkerEnd42 = groupMarkerEndCopy42;
  context.groupMarkerStart43 = groupMarkerStartCopy43;
  context.groupMarkerEnd43 = groupMarkerEndCopy43;
  context.groupMarkerStart44 = groupMarkerStartCopy44;
  context.groupMarkerEnd44 = groupMarkerEndCopy44;
  context.groupMarkerStart45 = groupMarkerStartCopy45;
  context.groupMarkerEnd45 = groupMarkerEndCopy45;
  context.groupMarkerStart46 = groupMarkerStartCopy46;
  context.groupMarkerEnd46 = groupMarkerEndCopy46;
  context.groupMarkerStart47 = groupMarkerStartCopy47;
  context.groupMarkerEnd47 = groupMarkerEndCopy47;
  context.groupMarkerStart48 = groupMarkerStartCopy48;
  context.groupMarkerEnd48 = groupMarkerEndCopy48;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length5 = fiber0339(i, str, context);
  if (length5 !== -1) {
    return length5;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart49 = groupMarkerStartCopy49;
  context.groupMarkerEnd49 = groupMarkerEndCopy49;
  context.groupMarkerStart50 = groupMarkerStartCopy50;
  context.groupMarkerEnd50 = groupMarkerEndCopy50;
  context.groupMarkerStart51 = groupMarkerStartCopy51;
  context.groupMarkerEnd51 = groupMarkerEndCopy51;
  context.groupMarkerStart52 = groupMarkerStartCopy52;
  context.groupMarkerEnd52 = groupMarkerEndCopy52;
  context.groupMarkerStart53 = groupMarkerStartCopy53;
  context.groupMarkerEnd53 = groupMarkerEndCopy53;
  context.groupMarkerStart54 = groupMarkerStartCopy54;
  context.groupMarkerEnd54 = groupMarkerEndCopy54;
  context.groupMarkerStart55 = groupMarkerStartCopy55;
  context.groupMarkerEnd55 = groupMarkerEndCopy55;
  context.groupMarkerStart56 = groupMarkerStartCopy56;
  context.groupMarkerEnd56 = groupMarkerEndCopy56;
  context.groupMarkerStart57 = groupMarkerStartCopy57;
  context.groupMarkerEnd57 = groupMarkerEndCopy57;
  context.groupMarkerStart58 = groupMarkerStartCopy58;
  context.groupMarkerEnd58 = groupMarkerEndCopy58;
  context.groupMarkerStart59 = groupMarkerStartCopy59;
  context.groupMarkerEnd59 = groupMarkerEndCopy59;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length6 = fiber0387(i, str, context);
  if (length6 !== -1) {
    return length6;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart60 = groupMarkerStartCopy60;
  context.groupMarkerEnd60 = groupMarkerEndCopy60;
  context.groupMarkerStart61 = groupMarkerStartCopy61;
  context.groupMarkerEnd61 = groupMarkerEndCopy61;
  context.groupMarkerStart62 = groupMarkerStartCopy62;
  context.groupMarkerEnd62 = groupMarkerEndCopy62;
  context.groupMarkerStart63 = groupMarkerStartCopy63;
  context.groupMarkerEnd63 = groupMarkerEndCopy63;
  context.groupMarkerStart64 = groupMarkerStartCopy64;
  context.groupMarkerEnd64 = groupMarkerEndCopy64;
  context.groupMarkerStart65 = groupMarkerStartCopy65;
  context.groupMarkerEnd65 = groupMarkerEndCopy65;
  context.groupMarkerStart66 = groupMarkerStartCopy66;
  context.groupMarkerEnd66 = groupMarkerEndCopy66;
  context.groupMarkerStart67 = groupMarkerStartCopy67;
  context.groupMarkerEnd67 = groupMarkerEndCopy67;
  context.groupMarkerStart68 = groupMarkerStartCopy68;
  context.groupMarkerEnd68 = groupMarkerEndCopy68;
  context.groupMarkerStart69 = groupMarkerStartCopy69;
  context.groupMarkerEnd69 = groupMarkerEndCopy69;
  context.groupMarkerStart70 = groupMarkerStartCopy70;
  context.groupMarkerEnd70 = groupMarkerEndCopy70;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length7 = fiber0432(i, str, context);
  if (length7 !== -1) {
    return length7;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart71 = groupMarkerStartCopy71;
  context.groupMarkerEnd71 = groupMarkerEndCopy71;
  context.groupMarkerStart72 = groupMarkerStartCopy72;
  context.groupMarkerEnd72 = groupMarkerEndCopy72;
  context.groupMarkerStart73 = groupMarkerStartCopy73;
  context.groupMarkerEnd73 = groupMarkerEndCopy73;
  context.groupMarkerStart74 = groupMarkerStartCopy74;
  context.groupMarkerEnd74 = groupMarkerEndCopy74;
  context.groupMarkerStart75 = groupMarkerStartCopy75;
  context.groupMarkerEnd75 = groupMarkerEndCopy75;
  context.groupMarkerStart76 = groupMarkerStartCopy76;
  context.groupMarkerEnd76 = groupMarkerEndCopy76;
  context.groupMarkerStart77 = groupMarkerStartCopy77;
  context.groupMarkerEnd77 = groupMarkerEndCopy77;
  context.groupMarkerStart78 = groupMarkerStartCopy78;
  context.groupMarkerEnd78 = groupMarkerEndCopy78;
  context.groupMarkerStart79 = groupMarkerStartCopy79;
  context.groupMarkerEnd79 = groupMarkerEndCopy79;
  context.groupMarkerStart80 = groupMarkerStartCopy80;
  context.groupMarkerEnd80 = groupMarkerEndCopy80;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0434 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...))\s✱$)|(^\s✱((([0-9A-...
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
  return greedyQuantifier0435(i, str, context);
};
const fiber0436 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...5]))\s✱$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s✱$))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp6 = i;
  /*
   * startAnchor
   * ...]))\s✱$)|(^\s✱((([0-9...
   *              ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * quantifierStarter
   * ...))\s✱$)|(^\s✱((([0-9A-F...
   *              ^^^
   */
  const cursorAfterQuantifier = greedyQuantifier0435(i, str, context);

  return cursorAfterQuantifier;
};
const fiber0437 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s✱$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s✱$))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * disjunction
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s✱$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s✱$))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;
  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;
  const groupMarkerStartCopy24 = context.groupMarkerStart24;
  const groupMarkerEndCopy24 = context.groupMarkerEnd24;
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
  const groupMarkerStartCopy30 = context.groupMarkerStart30;
  const groupMarkerEndCopy30 = context.groupMarkerEnd30;
  const groupMarkerStartCopy31 = context.groupMarkerStart31;
  const groupMarkerEndCopy31 = context.groupMarkerEnd31;
  const groupMarkerStartCopy32 = context.groupMarkerStart32;
  const groupMarkerEndCopy32 = context.groupMarkerEnd32;
  const groupMarkerStartCopy33 = context.groupMarkerStart33;
  const groupMarkerEndCopy33 = context.groupMarkerEnd33;
  const groupMarkerStartCopy34 = context.groupMarkerStart34;
  const groupMarkerEndCopy34 = context.groupMarkerEnd34;
  const groupMarkerStartCopy35 = context.groupMarkerStart35;
  const groupMarkerEndCopy35 = context.groupMarkerEnd35;
  const groupMarkerStartCopy36 = context.groupMarkerStart36;
  const groupMarkerEndCopy36 = context.groupMarkerEnd36;
  const groupMarkerStartCopy37 = context.groupMarkerStart37;
  const groupMarkerEndCopy37 = context.groupMarkerEnd37;
  const groupMarkerStartCopy38 = context.groupMarkerStart38;
  const groupMarkerEndCopy38 = context.groupMarkerEnd38;
  const groupMarkerStartCopy39 = context.groupMarkerStart39;
  const groupMarkerEndCopy39 = context.groupMarkerEnd39;
  const groupMarkerStartCopy40 = context.groupMarkerStart40;
  const groupMarkerEndCopy40 = context.groupMarkerEnd40;
  const groupMarkerStartCopy41 = context.groupMarkerStart41;
  const groupMarkerEndCopy41 = context.groupMarkerEnd41;
  const groupMarkerStartCopy42 = context.groupMarkerStart42;
  const groupMarkerEndCopy42 = context.groupMarkerEnd42;
  const groupMarkerStartCopy43 = context.groupMarkerStart43;
  const groupMarkerEndCopy43 = context.groupMarkerEnd43;
  const groupMarkerStartCopy44 = context.groupMarkerStart44;
  const groupMarkerEndCopy44 = context.groupMarkerEnd44;
  const groupMarkerStartCopy45 = context.groupMarkerStart45;
  const groupMarkerEndCopy45 = context.groupMarkerEnd45;
  const groupMarkerStartCopy46 = context.groupMarkerStart46;
  const groupMarkerEndCopy46 = context.groupMarkerEnd46;
  const groupMarkerStartCopy47 = context.groupMarkerStart47;
  const groupMarkerEndCopy47 = context.groupMarkerEnd47;
  const groupMarkerStartCopy48 = context.groupMarkerStart48;
  const groupMarkerEndCopy48 = context.groupMarkerEnd48;
  const groupMarkerStartCopy49 = context.groupMarkerStart49;
  const groupMarkerEndCopy49 = context.groupMarkerEnd49;
  const groupMarkerStartCopy50 = context.groupMarkerStart50;
  const groupMarkerEndCopy50 = context.groupMarkerEnd50;
  const groupMarkerStartCopy51 = context.groupMarkerStart51;
  const groupMarkerEndCopy51 = context.groupMarkerEnd51;
  const groupMarkerStartCopy52 = context.groupMarkerStart52;
  const groupMarkerEndCopy52 = context.groupMarkerEnd52;
  const groupMarkerStartCopy53 = context.groupMarkerStart53;
  const groupMarkerEndCopy53 = context.groupMarkerEnd53;
  const groupMarkerStartCopy54 = context.groupMarkerStart54;
  const groupMarkerEndCopy54 = context.groupMarkerEnd54;
  const groupMarkerStartCopy55 = context.groupMarkerStart55;
  const groupMarkerEndCopy55 = context.groupMarkerEnd55;
  const groupMarkerStartCopy56 = context.groupMarkerStart56;
  const groupMarkerEndCopy56 = context.groupMarkerEnd56;
  const groupMarkerStartCopy57 = context.groupMarkerStart57;
  const groupMarkerEndCopy57 = context.groupMarkerEnd57;
  const groupMarkerStartCopy58 = context.groupMarkerStart58;
  const groupMarkerEndCopy58 = context.groupMarkerEnd58;
  const groupMarkerStartCopy59 = context.groupMarkerStart59;
  const groupMarkerEndCopy59 = context.groupMarkerEnd59;
  const groupMarkerStartCopy60 = context.groupMarkerStart60;
  const groupMarkerEndCopy60 = context.groupMarkerEnd60;
  const groupMarkerStartCopy61 = context.groupMarkerStart61;
  const groupMarkerEndCopy61 = context.groupMarkerEnd61;
  const groupMarkerStartCopy62 = context.groupMarkerStart62;
  const groupMarkerEndCopy62 = context.groupMarkerEnd62;
  const groupMarkerStartCopy63 = context.groupMarkerStart63;
  const groupMarkerEndCopy63 = context.groupMarkerEnd63;
  const groupMarkerStartCopy64 = context.groupMarkerStart64;
  const groupMarkerEndCopy64 = context.groupMarkerEnd64;
  const groupMarkerStartCopy65 = context.groupMarkerStart65;
  const groupMarkerEndCopy65 = context.groupMarkerEnd65;
  const groupMarkerStartCopy66 = context.groupMarkerStart66;
  const groupMarkerEndCopy66 = context.groupMarkerEnd66;
  const groupMarkerStartCopy67 = context.groupMarkerStart67;
  const groupMarkerEndCopy67 = context.groupMarkerEnd67;
  const groupMarkerStartCopy68 = context.groupMarkerStart68;
  const groupMarkerEndCopy68 = context.groupMarkerEnd68;
  const groupMarkerStartCopy69 = context.groupMarkerStart69;
  const groupMarkerEndCopy69 = context.groupMarkerEnd69;
  const groupMarkerStartCopy70 = context.groupMarkerStart70;
  const groupMarkerEndCopy70 = context.groupMarkerEnd70;
  const groupMarkerStartCopy71 = context.groupMarkerStart71;
  const groupMarkerEndCopy71 = context.groupMarkerEnd71;
  const groupMarkerStartCopy72 = context.groupMarkerStart72;
  const groupMarkerEndCopy72 = context.groupMarkerEnd72;
  const groupMarkerStartCopy73 = context.groupMarkerStart73;
  const groupMarkerEndCopy73 = context.groupMarkerEnd73;
  const groupMarkerStartCopy74 = context.groupMarkerStart74;
  const groupMarkerEndCopy74 = context.groupMarkerEnd74;
  const groupMarkerStartCopy75 = context.groupMarkerStart75;
  const groupMarkerEndCopy75 = context.groupMarkerEnd75;
  const groupMarkerStartCopy76 = context.groupMarkerStart76;
  const groupMarkerEndCopy76 = context.groupMarkerEnd76;
  const groupMarkerStartCopy77 = context.groupMarkerStart77;
  const groupMarkerEndCopy77 = context.groupMarkerEnd77;
  const groupMarkerStartCopy78 = context.groupMarkerStart78;
  const groupMarkerEndCopy78 = context.groupMarkerEnd78;
  const groupMarkerStartCopy79 = context.groupMarkerStart79;
  const groupMarkerEndCopy79 = context.groupMarkerEnd79;
  const groupMarkerStartCopy80 = context.groupMarkerStart80;
  const groupMarkerEndCopy80 = context.groupMarkerEnd80;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0032(i, str, context);
  if (length0 !== -1) {
    return length0;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart1 = groupMarkerStartCopy1;
  context.groupMarkerEnd1 = groupMarkerEndCopy1;
  context.groupMarkerStart2 = groupMarkerStartCopy2;
  context.groupMarkerEnd2 = groupMarkerEndCopy2;
  context.groupMarkerStart3 = groupMarkerStartCopy3;
  context.groupMarkerEnd3 = groupMarkerEndCopy3;
  context.groupMarkerStart4 = groupMarkerStartCopy4;
  context.groupMarkerEnd4 = groupMarkerEndCopy4;
  context.groupMarkerStart5 = groupMarkerStartCopy5;
  context.groupMarkerEnd5 = groupMarkerEndCopy5;
  const length1 = fiber0436(i, str, context);
  if (length1 !== -1) {
    return length1;
  }
  context.groupMarkerStart0 = groupMarkerStartCopy0;
  context.groupMarkerEnd0 = groupMarkerEndCopy0;
  context.groupMarkerStart6 = groupMarkerStartCopy6;
  context.groupMarkerEnd6 = groupMarkerEndCopy6;
  context.groupMarkerStart7 = groupMarkerStartCopy7;
  context.groupMarkerEnd7 = groupMarkerEndCopy7;
  context.groupMarkerStart8 = groupMarkerStartCopy8;
  context.groupMarkerEnd8 = groupMarkerEndCopy8;
  context.groupMarkerStart9 = groupMarkerStartCopy9;
  context.groupMarkerEnd9 = groupMarkerEndCopy9;
  context.groupMarkerStart10 = groupMarkerStartCopy10;
  context.groupMarkerEnd10 = groupMarkerEndCopy10;
  context.groupMarkerStart11 = groupMarkerStartCopy11;
  context.groupMarkerEnd11 = groupMarkerEndCopy11;
  context.groupMarkerStart12 = groupMarkerStartCopy12;
  context.groupMarkerEnd12 = groupMarkerEndCopy12;
  context.groupMarkerStart13 = groupMarkerStartCopy13;
  context.groupMarkerEnd13 = groupMarkerEndCopy13;
  context.groupMarkerStart14 = groupMarkerStartCopy14;
  context.groupMarkerEnd14 = groupMarkerEndCopy14;
  context.groupMarkerStart15 = groupMarkerStartCopy15;
  context.groupMarkerEnd15 = groupMarkerEndCopy15;
  context.groupMarkerStart16 = groupMarkerStartCopy16;
  context.groupMarkerEnd16 = groupMarkerEndCopy16;
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
  context.groupMarkerStart24 = groupMarkerStartCopy24;
  context.groupMarkerEnd24 = groupMarkerEndCopy24;
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
  context.groupMarkerStart30 = groupMarkerStartCopy30;
  context.groupMarkerEnd30 = groupMarkerEndCopy30;
  context.groupMarkerStart31 = groupMarkerStartCopy31;
  context.groupMarkerEnd31 = groupMarkerEndCopy31;
  context.groupMarkerStart32 = groupMarkerStartCopy32;
  context.groupMarkerEnd32 = groupMarkerEndCopy32;
  context.groupMarkerStart33 = groupMarkerStartCopy33;
  context.groupMarkerEnd33 = groupMarkerEndCopy33;
  context.groupMarkerStart34 = groupMarkerStartCopy34;
  context.groupMarkerEnd34 = groupMarkerEndCopy34;
  context.groupMarkerStart35 = groupMarkerStartCopy35;
  context.groupMarkerEnd35 = groupMarkerEndCopy35;
  context.groupMarkerStart36 = groupMarkerStartCopy36;
  context.groupMarkerEnd36 = groupMarkerEndCopy36;
  context.groupMarkerStart37 = groupMarkerStartCopy37;
  context.groupMarkerEnd37 = groupMarkerEndCopy37;
  context.groupMarkerStart38 = groupMarkerStartCopy38;
  context.groupMarkerEnd38 = groupMarkerEndCopy38;
  context.groupMarkerStart39 = groupMarkerStartCopy39;
  context.groupMarkerEnd39 = groupMarkerEndCopy39;
  context.groupMarkerStart40 = groupMarkerStartCopy40;
  context.groupMarkerEnd40 = groupMarkerEndCopy40;
  context.groupMarkerStart41 = groupMarkerStartCopy41;
  context.groupMarkerEnd41 = groupMarkerEndCopy41;
  context.groupMarkerStart42 = groupMarkerStartCopy42;
  context.groupMarkerEnd42 = groupMarkerEndCopy42;
  context.groupMarkerStart43 = groupMarkerStartCopy43;
  context.groupMarkerEnd43 = groupMarkerEndCopy43;
  context.groupMarkerStart44 = groupMarkerStartCopy44;
  context.groupMarkerEnd44 = groupMarkerEndCopy44;
  context.groupMarkerStart45 = groupMarkerStartCopy45;
  context.groupMarkerEnd45 = groupMarkerEndCopy45;
  context.groupMarkerStart46 = groupMarkerStartCopy46;
  context.groupMarkerEnd46 = groupMarkerEndCopy46;
  context.groupMarkerStart47 = groupMarkerStartCopy47;
  context.groupMarkerEnd47 = groupMarkerEndCopy47;
  context.groupMarkerStart48 = groupMarkerStartCopy48;
  context.groupMarkerEnd48 = groupMarkerEndCopy48;
  context.groupMarkerStart49 = groupMarkerStartCopy49;
  context.groupMarkerEnd49 = groupMarkerEndCopy49;
  context.groupMarkerStart50 = groupMarkerStartCopy50;
  context.groupMarkerEnd50 = groupMarkerEndCopy50;
  context.groupMarkerStart51 = groupMarkerStartCopy51;
  context.groupMarkerEnd51 = groupMarkerEndCopy51;
  context.groupMarkerStart52 = groupMarkerStartCopy52;
  context.groupMarkerEnd52 = groupMarkerEndCopy52;
  context.groupMarkerStart53 = groupMarkerStartCopy53;
  context.groupMarkerEnd53 = groupMarkerEndCopy53;
  context.groupMarkerStart54 = groupMarkerStartCopy54;
  context.groupMarkerEnd54 = groupMarkerEndCopy54;
  context.groupMarkerStart55 = groupMarkerStartCopy55;
  context.groupMarkerEnd55 = groupMarkerEndCopy55;
  context.groupMarkerStart56 = groupMarkerStartCopy56;
  context.groupMarkerEnd56 = groupMarkerEndCopy56;
  context.groupMarkerStart57 = groupMarkerStartCopy57;
  context.groupMarkerEnd57 = groupMarkerEndCopy57;
  context.groupMarkerStart58 = groupMarkerStartCopy58;
  context.groupMarkerEnd58 = groupMarkerEndCopy58;
  context.groupMarkerStart59 = groupMarkerStartCopy59;
  context.groupMarkerEnd59 = groupMarkerEndCopy59;
  context.groupMarkerStart60 = groupMarkerStartCopy60;
  context.groupMarkerEnd60 = groupMarkerEndCopy60;
  context.groupMarkerStart61 = groupMarkerStartCopy61;
  context.groupMarkerEnd61 = groupMarkerEndCopy61;
  context.groupMarkerStart62 = groupMarkerStartCopy62;
  context.groupMarkerEnd62 = groupMarkerEndCopy62;
  context.groupMarkerStart63 = groupMarkerStartCopy63;
  context.groupMarkerEnd63 = groupMarkerEndCopy63;
  context.groupMarkerStart64 = groupMarkerStartCopy64;
  context.groupMarkerEnd64 = groupMarkerEndCopy64;
  context.groupMarkerStart65 = groupMarkerStartCopy65;
  context.groupMarkerEnd65 = groupMarkerEndCopy65;
  context.groupMarkerStart66 = groupMarkerStartCopy66;
  context.groupMarkerEnd66 = groupMarkerEndCopy66;
  context.groupMarkerStart67 = groupMarkerStartCopy67;
  context.groupMarkerEnd67 = groupMarkerEndCopy67;
  context.groupMarkerStart68 = groupMarkerStartCopy68;
  context.groupMarkerEnd68 = groupMarkerEndCopy68;
  context.groupMarkerStart69 = groupMarkerStartCopy69;
  context.groupMarkerEnd69 = groupMarkerEndCopy69;
  context.groupMarkerStart70 = groupMarkerStartCopy70;
  context.groupMarkerEnd70 = groupMarkerEndCopy70;
  context.groupMarkerStart71 = groupMarkerStartCopy71;
  context.groupMarkerEnd71 = groupMarkerEndCopy71;
  context.groupMarkerStart72 = groupMarkerStartCopy72;
  context.groupMarkerEnd72 = groupMarkerEndCopy72;
  context.groupMarkerStart73 = groupMarkerStartCopy73;
  context.groupMarkerEnd73 = groupMarkerEndCopy73;
  context.groupMarkerStart74 = groupMarkerStartCopy74;
  context.groupMarkerEnd74 = groupMarkerEndCopy74;
  context.groupMarkerStart75 = groupMarkerStartCopy75;
  context.groupMarkerEnd75 = groupMarkerEndCopy75;
  context.groupMarkerStart76 = groupMarkerStartCopy76;
  context.groupMarkerEnd76 = groupMarkerEndCopy76;
  context.groupMarkerStart77 = groupMarkerStartCopy77;
  context.groupMarkerEnd77 = groupMarkerEndCopy77;
  context.groupMarkerStart78 = groupMarkerStartCopy78;
  context.groupMarkerEnd78 = groupMarkerEndCopy78;
  context.groupMarkerStart79 = groupMarkerStartCopy79;
  context.groupMarkerEnd79 = groupMarkerEndCopy79;
  context.groupMarkerStart80 = groupMarkerStartCopy80;
  context.groupMarkerEnd80 = groupMarkerEndCopy80;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};

/*
 * ...|25[0-5]))\s✱$)|(^\s✱((...
 *              ^^^
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

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;

  const followUpResult = fiber0002(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
  }
  return followUpResult;
};
/*
 * /((^\s✱((([0-9]|[...
 *     ^^^
 */
const greedyQuantifier0031 = (
  start: number,
  str: string,
  context: Context
): number => {
  const tryDeeperResult = fiber0030(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

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

  const followUpResult = fiber0029(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart1 = groupMarkerStartCopy1;
    context.groupMarkerEnd1 = groupMarkerEndCopy1;
    context.groupMarkerStart2 = groupMarkerStartCopy2;
    context.groupMarkerEnd2 = groupMarkerEndCopy2;
    context.groupMarkerStart3 = groupMarkerStartCopy3;
    context.groupMarkerEnd3 = groupMarkerEndCopy3;
    context.groupMarkerStart4 = groupMarkerStartCopy4;
    context.groupMarkerEnd4 = groupMarkerEndCopy4;
    context.groupMarkerStart5 = groupMarkerStartCopy5;
    context.groupMarkerEnd5 = groupMarkerEndCopy5;
  }
  return followUpResult;
};
/*
 * ...:)))(%.+)?\s✱$))/
 *              ^^^
 */
const greedyQuantifier0035 = (
  start: number,
  str: string,
  context: Context
): number => {
  const tryDeeperResult = fiber0034(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;

  const followUpResult = fiber0033(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
  }
  return followUpResult;
};
/*
 * ...{3}))|:)))(%.+)?\s✱$))/
 *              ^^^^^^
 */
const greedyQuantifier0038 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  if (context.quantifierCounter0 === 1) {
    return fiber0036(start, str, context);
  }

  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const tryDeeperResult = fiber0041(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;

  const followUpResult = fiber0036(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.quantifierCounter0--;
  }
  return followUpResult;
};
/*
 * ...}))|:)))(%.+)?\s✱$))/
 *              ^^
 */
const greedyQuantifier0040 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  const tryDeeperResult = fiber0039(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter1 < 1) {
    context.quantifierCounter1--;
    return -1;
  }

  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0037(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * ...1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0046 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter2++;

  if (context.quantifierCounter2 === 4) {
    return fiber0044(start, str, context);
  }

  const tryDeeperResult = fiber0045(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter2 < 1) {
    context.quantifierCounter2--;
    return -1;
  }

  const followUpResult = fiber0044(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter2--;
  }
  return followUpResult;
};
/*
 * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0050 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter3++;

  if (context.quantifierCounter3 === 4) {
    return fiber0043(start, str, context);
  }

  const tryDeeperResult = fiber0049(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter3 < 1) {
    context.quantifierCounter3--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
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
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0043(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart8 = groupMarkerStartCopy8;
    context.groupMarkerEnd8 = groupMarkerEndCopy8;
    context.groupMarkerStart9 = groupMarkerStartCopy9;
    context.groupMarkerEnd9 = groupMarkerEndCopy9;
    context.groupMarkerStart10 = groupMarkerStartCopy10;
    context.groupMarkerEnd10 = groupMarkerEndCopy10;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter3--;
  }
  return followUpResult;
};
/*
 * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0053 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter3++;

  if (context.quantifierCounter3 === 4) {
    return fiber0051(start, str, context);
  }

  const tryDeeperResult = fiber0052(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter3 < 1) {
    context.quantifierCounter3--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
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
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0051(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart8 = groupMarkerStartCopy8;
    context.groupMarkerEnd8 = groupMarkerEndCopy8;
    context.groupMarkerStart9 = groupMarkerStartCopy9;
    context.groupMarkerEnd9 = groupMarkerEndCopy9;
    context.groupMarkerStart10 = groupMarkerStartCopy10;
    context.groupMarkerEnd10 = groupMarkerEndCopy10;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter3--;
  }
  return followUpResult;
};
/*
 * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0056 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter3++;

  if (context.quantifierCounter3 === 4) {
    return fiber0054(start, str, context);
  }

  const tryDeeperResult = fiber0055(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter3 < 1) {
    context.quantifierCounter3--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
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
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0054(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart8 = groupMarkerStartCopy8;
    context.groupMarkerEnd8 = groupMarkerEndCopy8;
    context.groupMarkerStart9 = groupMarkerStartCopy9;
    context.groupMarkerEnd9 = groupMarkerEndCopy9;
    context.groupMarkerStart10 = groupMarkerStartCopy10;
    context.groupMarkerEnd10 = groupMarkerEndCopy10;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter3--;
  }
  return followUpResult;
};
/*
 * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0059 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter3++;

  if (context.quantifierCounter3 === 4) {
    return fiber0057(start, str, context);
  }

  const tryDeeperResult = fiber0058(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter3 < 1) {
    context.quantifierCounter3--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
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
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0057(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart8 = groupMarkerStartCopy8;
    context.groupMarkerEnd8 = groupMarkerEndCopy8;
    context.groupMarkerStart9 = groupMarkerStartCopy9;
    context.groupMarkerEnd9 = groupMarkerEndCopy9;
    context.groupMarkerStart10 = groupMarkerStartCopy10;
    context.groupMarkerEnd10 = groupMarkerEndCopy10;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter3--;
  }
  return followUpResult;
};
/*
 * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0062 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter3++;

  if (context.quantifierCounter3 === 4) {
    return fiber0060(start, str, context);
  }

  const tryDeeperResult = fiber0061(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter3 < 1) {
    context.quantifierCounter3--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
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
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0060(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart8 = groupMarkerStartCopy8;
    context.groupMarkerEnd8 = groupMarkerEndCopy8;
    context.groupMarkerStart9 = groupMarkerStartCopy9;
    context.groupMarkerEnd9 = groupMarkerEndCopy9;
    context.groupMarkerStart10 = groupMarkerStartCopy10;
    context.groupMarkerEnd10 = groupMarkerEndCopy10;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter3--;
  }
  return followUpResult;
};
/*
 * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0065 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter3++;

  if (context.quantifierCounter3 === 4) {
    return fiber0063(start, str, context);
  }

  const tryDeeperResult = fiber0064(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter3 < 1) {
    context.quantifierCounter3--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
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
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0063(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart8 = groupMarkerStartCopy8;
    context.groupMarkerEnd8 = groupMarkerEndCopy8;
    context.groupMarkerStart9 = groupMarkerStartCopy9;
    context.groupMarkerEnd9 = groupMarkerEndCopy9;
    context.groupMarkerStart10 = groupMarkerStartCopy10;
    context.groupMarkerEnd10 = groupMarkerEndCopy10;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter3--;
  }
  return followUpResult;
};
/*
 * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0068 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter3++;

  if (context.quantifierCounter3 === 4) {
    return fiber0066(start, str, context);
  }

  const tryDeeperResult = fiber0067(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter3 < 1) {
    context.quantifierCounter3--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
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
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0066(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart8 = groupMarkerStartCopy8;
    context.groupMarkerEnd8 = groupMarkerEndCopy8;
    context.groupMarkerStart9 = groupMarkerStartCopy9;
    context.groupMarkerEnd9 = groupMarkerEndCopy9;
    context.groupMarkerStart10 = groupMarkerStartCopy10;
    context.groupMarkerEnd10 = groupMarkerEndCopy10;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter3--;
  }
  return followUpResult;
};
/*
 * ...,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0073 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter4++;

  if (context.quantifierCounter4 === 4) {
    return fiber0071(start, str, context);
  }

  const tryDeeperResult = fiber0072(start, str, context);
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
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy11 = context.groupMarkerStart11;
  const groupMarkerEndCopy11 = context.groupMarkerEnd11;
  const groupMarkerStartCopy13 = context.groupMarkerStart13;
  const groupMarkerEndCopy13 = context.groupMarkerEnd13;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0071(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart11 = groupMarkerStartCopy11;
    context.groupMarkerEnd11 = groupMarkerEndCopy11;
    context.groupMarkerStart13 = groupMarkerStartCopy13;
    context.groupMarkerEnd13 = groupMarkerEndCopy13;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter4--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3})|:...
 *              ^^^^^^
 */
const greedyQuantifier0081 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter5++;

  if (context.quantifierCounter5 === 1) {
    return fiber0079(start, str, context);
  }

  const tryDeeperResult = fiber0080(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0079(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter5--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3})|:...
 *              ^^^^^^
 */
const greedyQuantifier0088 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter5++;

  if (context.quantifierCounter5 === 1) {
    return fiber0086(start, str, context);
  }

  const tryDeeperResult = fiber0087(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0086(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter5--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3})|:...
 *              ^^^^^^
 */
const greedyQuantifier0095 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter5++;

  if (context.quantifierCounter5 === 1) {
    return fiber0093(start, str, context);
  }

  const tryDeeperResult = fiber0094(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0093(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter5--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
 *              ^^^^^^
 */
const greedyQuantifier0102 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter6++;

  if (context.quantifierCounter6 === 1) {
    return fiber0100(start, str, context);
  }

  const tryDeeperResult = fiber0101(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0100(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter6--;
  }
  return followUpResult;
};
/*
 * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0107 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter7++;

  if (context.quantifierCounter7 === 4) {
    return fiber0105(start, str, context);
  }

  const tryDeeperResult = fiber0106(start, str, context);
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
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
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
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0105(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart11 = groupMarkerStartCopy11;
    context.groupMarkerEnd11 = groupMarkerEndCopy11;
    context.groupMarkerStart12 = groupMarkerStartCopy12;
    context.groupMarkerEnd12 = groupMarkerEndCopy12;
    context.groupMarkerStart13 = groupMarkerStartCopy13;
    context.groupMarkerEnd13 = groupMarkerEndCopy13;
    context.groupMarkerStart14 = groupMarkerStartCopy14;
    context.groupMarkerEnd14 = groupMarkerEndCopy14;
    context.groupMarkerStart15 = groupMarkerStartCopy15;
    context.groupMarkerEnd15 = groupMarkerEndCopy15;
    context.groupMarkerStart16 = groupMarkerStartCopy16;
    context.groupMarkerEnd16 = groupMarkerEndCopy16;
    context.groupMarkerStart17 = groupMarkerStartCopy17;
    context.groupMarkerEnd17 = groupMarkerEndCopy17;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter7--;
  }
  return followUpResult;
};
/*
 * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0110 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter7++;

  if (context.quantifierCounter7 === 4) {
    return fiber0108(start, str, context);
  }

  const tryDeeperResult = fiber0109(start, str, context);
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
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
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
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0108(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart11 = groupMarkerStartCopy11;
    context.groupMarkerEnd11 = groupMarkerEndCopy11;
    context.groupMarkerStart12 = groupMarkerStartCopy12;
    context.groupMarkerEnd12 = groupMarkerEndCopy12;
    context.groupMarkerStart13 = groupMarkerStartCopy13;
    context.groupMarkerEnd13 = groupMarkerEndCopy13;
    context.groupMarkerStart14 = groupMarkerStartCopy14;
    context.groupMarkerEnd14 = groupMarkerEndCopy14;
    context.groupMarkerStart15 = groupMarkerStartCopy15;
    context.groupMarkerEnd15 = groupMarkerEndCopy15;
    context.groupMarkerStart16 = groupMarkerStartCopy16;
    context.groupMarkerEnd16 = groupMarkerEndCopy16;
    context.groupMarkerStart17 = groupMarkerStartCopy17;
    context.groupMarkerEnd17 = groupMarkerEndCopy17;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter7--;
  }
  return followUpResult;
};
/*
 * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0113 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter7++;

  if (context.quantifierCounter7 === 4) {
    return fiber0111(start, str, context);
  }

  const tryDeeperResult = fiber0112(start, str, context);
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
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
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
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0111(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart11 = groupMarkerStartCopy11;
    context.groupMarkerEnd11 = groupMarkerEndCopy11;
    context.groupMarkerStart12 = groupMarkerStartCopy12;
    context.groupMarkerEnd12 = groupMarkerEndCopy12;
    context.groupMarkerStart13 = groupMarkerStartCopy13;
    context.groupMarkerEnd13 = groupMarkerEndCopy13;
    context.groupMarkerStart14 = groupMarkerStartCopy14;
    context.groupMarkerEnd14 = groupMarkerEndCopy14;
    context.groupMarkerStart15 = groupMarkerStartCopy15;
    context.groupMarkerEnd15 = groupMarkerEndCopy15;
    context.groupMarkerStart16 = groupMarkerStartCopy16;
    context.groupMarkerEnd16 = groupMarkerEndCopy16;
    context.groupMarkerStart17 = groupMarkerStartCopy17;
    context.groupMarkerEnd17 = groupMarkerEndCopy17;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter7--;
  }
  return followUpResult;
};
/*
 * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0116 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter7++;

  if (context.quantifierCounter7 === 4) {
    return fiber0114(start, str, context);
  }

  const tryDeeperResult = fiber0115(start, str, context);
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
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
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
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0114(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart11 = groupMarkerStartCopy11;
    context.groupMarkerEnd11 = groupMarkerEndCopy11;
    context.groupMarkerStart12 = groupMarkerStartCopy12;
    context.groupMarkerEnd12 = groupMarkerEndCopy12;
    context.groupMarkerStart13 = groupMarkerStartCopy13;
    context.groupMarkerEnd13 = groupMarkerEndCopy13;
    context.groupMarkerStart14 = groupMarkerStartCopy14;
    context.groupMarkerEnd14 = groupMarkerEndCopy14;
    context.groupMarkerStart15 = groupMarkerStartCopy15;
    context.groupMarkerEnd15 = groupMarkerEndCopy15;
    context.groupMarkerStart16 = groupMarkerStartCopy16;
    context.groupMarkerEnd16 = groupMarkerEndCopy16;
    context.groupMarkerStart17 = groupMarkerStartCopy17;
    context.groupMarkerEnd17 = groupMarkerEndCopy17;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter7--;
  }
  return followUpResult;
};
/*
 * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0119 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter7++;

  if (context.quantifierCounter7 === 4) {
    return fiber0117(start, str, context);
  }

  const tryDeeperResult = fiber0118(start, str, context);
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
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
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
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0117(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart11 = groupMarkerStartCopy11;
    context.groupMarkerEnd11 = groupMarkerEndCopy11;
    context.groupMarkerStart12 = groupMarkerStartCopy12;
    context.groupMarkerEnd12 = groupMarkerEndCopy12;
    context.groupMarkerStart13 = groupMarkerStartCopy13;
    context.groupMarkerEnd13 = groupMarkerEndCopy13;
    context.groupMarkerStart14 = groupMarkerStartCopy14;
    context.groupMarkerEnd14 = groupMarkerEndCopy14;
    context.groupMarkerStart15 = groupMarkerStartCopy15;
    context.groupMarkerEnd15 = groupMarkerEndCopy15;
    context.groupMarkerStart16 = groupMarkerStartCopy16;
    context.groupMarkerEnd16 = groupMarkerEndCopy16;
    context.groupMarkerStart17 = groupMarkerStartCopy17;
    context.groupMarkerEnd17 = groupMarkerEndCopy17;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter7--;
  }
  return followUpResult;
};
/*
 * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0122 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter7++;

  if (context.quantifierCounter7 === 4) {
    return fiber0120(start, str, context);
  }

  const tryDeeperResult = fiber0121(start, str, context);
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
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
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
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0120(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart11 = groupMarkerStartCopy11;
    context.groupMarkerEnd11 = groupMarkerEndCopy11;
    context.groupMarkerStart12 = groupMarkerStartCopy12;
    context.groupMarkerEnd12 = groupMarkerEndCopy12;
    context.groupMarkerStart13 = groupMarkerStartCopy13;
    context.groupMarkerEnd13 = groupMarkerEndCopy13;
    context.groupMarkerStart14 = groupMarkerStartCopy14;
    context.groupMarkerEnd14 = groupMarkerEndCopy14;
    context.groupMarkerStart15 = groupMarkerStartCopy15;
    context.groupMarkerEnd15 = groupMarkerEndCopy15;
    context.groupMarkerStart16 = groupMarkerStartCopy16;
    context.groupMarkerEnd16 = groupMarkerEndCopy16;
    context.groupMarkerStart17 = groupMarkerStartCopy17;
    context.groupMarkerEnd17 = groupMarkerEndCopy17;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter7--;
  }
  return followUpResult;
};
/*
 * ...,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0127 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter8++;

  if (context.quantifierCounter8 === 2) {
    return fiber0125(start, str, context);
  }

  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;
  const tryDeeperResult = fiber0130(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart22 = groupMarkerStartCopy22;
  context.groupMarkerEnd22 = groupMarkerEndCopy22;

  if (context.quantifierCounter8 < 1) {
    context.quantifierCounter8--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy18 = context.groupMarkerStart18;
  const groupMarkerEndCopy18 = context.groupMarkerEnd18;
  const groupMarkerStartCopy20 = context.groupMarkerStart20;
  const groupMarkerEndCopy20 = context.groupMarkerEnd20;
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0125(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart18 = groupMarkerStartCopy18;
    context.groupMarkerEnd18 = groupMarkerEndCopy18;
    context.groupMarkerStart20 = groupMarkerStartCopy20;
    context.groupMarkerEnd20 = groupMarkerEndCopy20;
    context.groupMarkerStart21 = groupMarkerStartCopy21;
    context.groupMarkerEnd21 = groupMarkerEndCopy21;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter8--;
  }
  return followUpResult;
};
/*
 * ...}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:(...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0129 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter9++;

  if (context.quantifierCounter9 === 4) {
    return fiber0126(start, str, context);
  }

  const tryDeeperResult = fiber0128(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter9 < 1) {
    context.quantifierCounter9--;
    return -1;
  }

  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;

  const followUpResult = fiber0126(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart22 = groupMarkerStartCopy22;
    context.groupMarkerEnd22 = groupMarkerEndCopy22;
    context.quantifierCounter9--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3})|:...
 *              ^^^^^^
 */
const greedyQuantifier0138 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter10++;

  if (context.quantifierCounter10 === 1) {
    return fiber0136(start, str, context);
  }

  const tryDeeperResult = fiber0137(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0136(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter10--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3})|:...
 *              ^^^^^^
 */
const greedyQuantifier0145 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter10++;

  if (context.quantifierCounter10 === 1) {
    return fiber0143(start, str, context);
  }

  const tryDeeperResult = fiber0144(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0143(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter10--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3})|:...
 *              ^^^^^^
 */
const greedyQuantifier0152 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter10++;

  if (context.quantifierCounter10 === 1) {
    return fiber0150(start, str, context);
  }

  const tryDeeperResult = fiber0151(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0150(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter10--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
 *              ^^^^^^
 */
const greedyQuantifier0159 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter11++;

  if (context.quantifierCounter11 === 1) {
    return fiber0157(start, str, context);
  }

  const tryDeeperResult = fiber0158(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0157(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter11--;
  }
  return followUpResult;
};
/*
 * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0164 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter12++;

  if (context.quantifierCounter12 === 4) {
    return fiber0162(start, str, context);
  }

  const tryDeeperResult = fiber0163(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter12 < 1) {
    context.quantifierCounter12--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
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
  const groupMarkerStartCopy24 = context.groupMarkerStart24;
  const groupMarkerEndCopy24 = context.groupMarkerEnd24;
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0162(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
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
    context.groupMarkerStart24 = groupMarkerStartCopy24;
    context.groupMarkerEnd24 = groupMarkerEndCopy24;
    context.groupMarkerStart25 = groupMarkerStartCopy25;
    context.groupMarkerEnd25 = groupMarkerEndCopy25;
    context.groupMarkerStart26 = groupMarkerStartCopy26;
    context.groupMarkerEnd26 = groupMarkerEndCopy26;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter12--;
  }
  return followUpResult;
};
/*
 * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0167 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter12++;

  if (context.quantifierCounter12 === 4) {
    return fiber0165(start, str, context);
  }

  const tryDeeperResult = fiber0166(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter12 < 1) {
    context.quantifierCounter12--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
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
  const groupMarkerStartCopy24 = context.groupMarkerStart24;
  const groupMarkerEndCopy24 = context.groupMarkerEnd24;
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0165(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
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
    context.groupMarkerStart24 = groupMarkerStartCopy24;
    context.groupMarkerEnd24 = groupMarkerEndCopy24;
    context.groupMarkerStart25 = groupMarkerStartCopy25;
    context.groupMarkerEnd25 = groupMarkerEndCopy25;
    context.groupMarkerStart26 = groupMarkerStartCopy26;
    context.groupMarkerEnd26 = groupMarkerEndCopy26;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter12--;
  }
  return followUpResult;
};
/*
 * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0170 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter12++;

  if (context.quantifierCounter12 === 4) {
    return fiber0168(start, str, context);
  }

  const tryDeeperResult = fiber0169(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter12 < 1) {
    context.quantifierCounter12--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
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
  const groupMarkerStartCopy24 = context.groupMarkerStart24;
  const groupMarkerEndCopy24 = context.groupMarkerEnd24;
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0168(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
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
    context.groupMarkerStart24 = groupMarkerStartCopy24;
    context.groupMarkerEnd24 = groupMarkerEndCopy24;
    context.groupMarkerStart25 = groupMarkerStartCopy25;
    context.groupMarkerEnd25 = groupMarkerEndCopy25;
    context.groupMarkerStart26 = groupMarkerStartCopy26;
    context.groupMarkerEnd26 = groupMarkerEndCopy26;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter12--;
  }
  return followUpResult;
};
/*
 * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0173 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter12++;

  if (context.quantifierCounter12 === 4) {
    return fiber0171(start, str, context);
  }

  const tryDeeperResult = fiber0172(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter12 < 1) {
    context.quantifierCounter12--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
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
  const groupMarkerStartCopy24 = context.groupMarkerStart24;
  const groupMarkerEndCopy24 = context.groupMarkerEnd24;
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0171(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
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
    context.groupMarkerStart24 = groupMarkerStartCopy24;
    context.groupMarkerEnd24 = groupMarkerEndCopy24;
    context.groupMarkerStart25 = groupMarkerStartCopy25;
    context.groupMarkerEnd25 = groupMarkerEndCopy25;
    context.groupMarkerStart26 = groupMarkerStartCopy26;
    context.groupMarkerEnd26 = groupMarkerEndCopy26;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter12--;
  }
  return followUpResult;
};
/*
 * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0176 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter12++;

  if (context.quantifierCounter12 === 4) {
    return fiber0174(start, str, context);
  }

  const tryDeeperResult = fiber0175(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter12 < 1) {
    context.quantifierCounter12--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
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
  const groupMarkerStartCopy24 = context.groupMarkerStart24;
  const groupMarkerEndCopy24 = context.groupMarkerEnd24;
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0174(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
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
    context.groupMarkerStart24 = groupMarkerStartCopy24;
    context.groupMarkerEnd24 = groupMarkerEndCopy24;
    context.groupMarkerStart25 = groupMarkerStartCopy25;
    context.groupMarkerEnd25 = groupMarkerEndCopy25;
    context.groupMarkerStart26 = groupMarkerStartCopy26;
    context.groupMarkerEnd26 = groupMarkerEndCopy26;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter12--;
  }
  return followUpResult;
};
/*
 * ...,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0181 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter13++;

  if (context.quantifierCounter13 === 3) {
    return fiber0179(start, str, context);
  }

  const groupMarkerStartCopy31 = context.groupMarkerStart31;
  const groupMarkerEndCopy31 = context.groupMarkerEnd31;
  const tryDeeperResult = fiber0184(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart31 = groupMarkerStartCopy31;
  context.groupMarkerEnd31 = groupMarkerEndCopy31;

  if (context.quantifierCounter13 < 1) {
    context.quantifierCounter13--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;
  const groupMarkerStartCopy30 = context.groupMarkerStart30;
  const groupMarkerEndCopy30 = context.groupMarkerEnd30;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0179(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart27 = groupMarkerStartCopy27;
    context.groupMarkerEnd27 = groupMarkerEndCopy27;
    context.groupMarkerStart29 = groupMarkerStartCopy29;
    context.groupMarkerEnd29 = groupMarkerEndCopy29;
    context.groupMarkerStart30 = groupMarkerStartCopy30;
    context.groupMarkerEnd30 = groupMarkerEndCopy30;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter13--;
  }
  return followUpResult;
};
/*
 * ...}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0183 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter14++;

  if (context.quantifierCounter14 === 4) {
    return fiber0180(start, str, context);
  }

  const tryDeeperResult = fiber0182(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter14 < 1) {
    context.quantifierCounter14--;
    return -1;
  }

  const groupMarkerStartCopy31 = context.groupMarkerStart31;
  const groupMarkerEndCopy31 = context.groupMarkerEnd31;

  const followUpResult = fiber0180(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart31 = groupMarkerStartCopy31;
    context.groupMarkerEnd31 = groupMarkerEndCopy31;
    context.quantifierCounter14--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3}))|...
 *              ^^^^^^
 */
const greedyQuantifier0192 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter15++;

  if (context.quantifierCounter15 === 1) {
    return fiber0190(start, str, context);
  }

  const tryDeeperResult = fiber0191(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0190(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter15--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3}))|...
 *              ^^^^^^
 */
const greedyQuantifier0199 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter15++;

  if (context.quantifierCounter15 === 1) {
    return fiber0197(start, str, context);
  }

  const tryDeeperResult = fiber0198(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0197(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter15--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3}))|...
 *              ^^^^^^
 */
const greedyQuantifier0206 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter15++;

  if (context.quantifierCounter15 === 1) {
    return fiber0204(start, str, context);
  }

  const tryDeeperResult = fiber0205(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0204(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter15--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
 *              ^^^^^^
 */
const greedyQuantifier0213 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter16++;

  if (context.quantifierCounter16 === 1) {
    return fiber0211(start, str, context);
  }

  const tryDeeperResult = fiber0212(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0211(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter16--;
  }
  return followUpResult;
};
/*
 * ...}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]...
 *              ^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0216 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter17++;

  if (context.quantifierCounter17 === 1) {
    return fiber0186(start, str, context);
  }

  const groupMarkerStartCopy33 = context.groupMarkerStart33;
  const groupMarkerEndCopy33 = context.groupMarkerEnd33;
  const tryDeeperResult = fiber0219(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart33 = groupMarkerStartCopy33;
  context.groupMarkerEnd33 = groupMarkerEndCopy33;

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;
  const groupMarkerStartCopy32 = context.groupMarkerStart32;
  const groupMarkerEndCopy32 = context.groupMarkerEnd32;
  const groupMarkerStartCopy34 = context.groupMarkerStart34;
  const groupMarkerEndCopy34 = context.groupMarkerEnd34;
  const groupMarkerStartCopy35 = context.groupMarkerStart35;
  const groupMarkerEndCopy35 = context.groupMarkerEnd35;
  const groupMarkerStartCopy36 = context.groupMarkerStart36;
  const groupMarkerEndCopy36 = context.groupMarkerEnd36;
  const groupMarkerStartCopy37 = context.groupMarkerStart37;
  const groupMarkerEndCopy37 = context.groupMarkerEnd37;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0186(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart27 = groupMarkerStartCopy27;
    context.groupMarkerEnd27 = groupMarkerEndCopy27;
    context.groupMarkerStart29 = groupMarkerStartCopy29;
    context.groupMarkerEnd29 = groupMarkerEndCopy29;
    context.groupMarkerStart32 = groupMarkerStartCopy32;
    context.groupMarkerEnd32 = groupMarkerEndCopy32;
    context.groupMarkerStart34 = groupMarkerStartCopy34;
    context.groupMarkerEnd34 = groupMarkerEndCopy34;
    context.groupMarkerStart35 = groupMarkerStartCopy35;
    context.groupMarkerEnd35 = groupMarkerEndCopy35;
    context.groupMarkerStart36 = groupMarkerStartCopy36;
    context.groupMarkerEnd36 = groupMarkerEndCopy36;
    context.groupMarkerStart37 = groupMarkerStartCopy37;
    context.groupMarkerEnd37 = groupMarkerEndCopy37;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter17--;
  }
  return followUpResult;
};
/*
 * ...{1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0218 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter18++;

  if (context.quantifierCounter18 === 4) {
    return fiber0215(start, str, context);
  }

  const tryDeeperResult = fiber0217(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter18 < 1) {
    context.quantifierCounter18--;
    return -1;
  }

  const groupMarkerStartCopy33 = context.groupMarkerStart33;
  const groupMarkerEndCopy33 = context.groupMarkerEnd33;

  const followUpResult = fiber0215(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart33 = groupMarkerStartCopy33;
    context.groupMarkerEnd33 = groupMarkerEndCopy33;
    context.quantifierCounter18--;
  }
  return followUpResult;
};
/*
 * ...3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0224 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter19++;

  if (context.quantifierCounter19 === 4) {
    return fiber0222(start, str, context);
  }

  const tryDeeperResult = fiber0223(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter19 < 1) {
    context.quantifierCounter19--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;
  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;
  const groupMarkerStartCopy30 = context.groupMarkerStart30;
  const groupMarkerEndCopy30 = context.groupMarkerEnd30;
  const groupMarkerStartCopy31 = context.groupMarkerStart31;
  const groupMarkerEndCopy31 = context.groupMarkerEnd31;
  const groupMarkerStartCopy32 = context.groupMarkerStart32;
  const groupMarkerEndCopy32 = context.groupMarkerEnd32;
  const groupMarkerStartCopy33 = context.groupMarkerStart33;
  const groupMarkerEndCopy33 = context.groupMarkerEnd33;
  const groupMarkerStartCopy34 = context.groupMarkerStart34;
  const groupMarkerEndCopy34 = context.groupMarkerEnd34;
  const groupMarkerStartCopy35 = context.groupMarkerStart35;
  const groupMarkerEndCopy35 = context.groupMarkerEnd35;
  const groupMarkerStartCopy36 = context.groupMarkerStart36;
  const groupMarkerEndCopy36 = context.groupMarkerEnd36;
  const groupMarkerStartCopy37 = context.groupMarkerStart37;
  const groupMarkerEndCopy37 = context.groupMarkerEnd37;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0222(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart27 = groupMarkerStartCopy27;
    context.groupMarkerEnd27 = groupMarkerEndCopy27;
    context.groupMarkerStart28 = groupMarkerStartCopy28;
    context.groupMarkerEnd28 = groupMarkerEndCopy28;
    context.groupMarkerStart29 = groupMarkerStartCopy29;
    context.groupMarkerEnd29 = groupMarkerEndCopy29;
    context.groupMarkerStart30 = groupMarkerStartCopy30;
    context.groupMarkerEnd30 = groupMarkerEndCopy30;
    context.groupMarkerStart31 = groupMarkerStartCopy31;
    context.groupMarkerEnd31 = groupMarkerEndCopy31;
    context.groupMarkerStart32 = groupMarkerStartCopy32;
    context.groupMarkerEnd32 = groupMarkerEndCopy32;
    context.groupMarkerStart33 = groupMarkerStartCopy33;
    context.groupMarkerEnd33 = groupMarkerEndCopy33;
    context.groupMarkerStart34 = groupMarkerStartCopy34;
    context.groupMarkerEnd34 = groupMarkerEndCopy34;
    context.groupMarkerStart35 = groupMarkerStartCopy35;
    context.groupMarkerEnd35 = groupMarkerEndCopy35;
    context.groupMarkerStart36 = groupMarkerStartCopy36;
    context.groupMarkerEnd36 = groupMarkerEndCopy36;
    context.groupMarkerStart37 = groupMarkerStartCopy37;
    context.groupMarkerEnd37 = groupMarkerEndCopy37;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter19--;
  }
  return followUpResult;
};
/*
 * ...3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0227 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter19++;

  if (context.quantifierCounter19 === 4) {
    return fiber0225(start, str, context);
  }

  const tryDeeperResult = fiber0226(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter19 < 1) {
    context.quantifierCounter19--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;
  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;
  const groupMarkerStartCopy30 = context.groupMarkerStart30;
  const groupMarkerEndCopy30 = context.groupMarkerEnd30;
  const groupMarkerStartCopy31 = context.groupMarkerStart31;
  const groupMarkerEndCopy31 = context.groupMarkerEnd31;
  const groupMarkerStartCopy32 = context.groupMarkerStart32;
  const groupMarkerEndCopy32 = context.groupMarkerEnd32;
  const groupMarkerStartCopy33 = context.groupMarkerStart33;
  const groupMarkerEndCopy33 = context.groupMarkerEnd33;
  const groupMarkerStartCopy34 = context.groupMarkerStart34;
  const groupMarkerEndCopy34 = context.groupMarkerEnd34;
  const groupMarkerStartCopy35 = context.groupMarkerStart35;
  const groupMarkerEndCopy35 = context.groupMarkerEnd35;
  const groupMarkerStartCopy36 = context.groupMarkerStart36;
  const groupMarkerEndCopy36 = context.groupMarkerEnd36;
  const groupMarkerStartCopy37 = context.groupMarkerStart37;
  const groupMarkerEndCopy37 = context.groupMarkerEnd37;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0225(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart27 = groupMarkerStartCopy27;
    context.groupMarkerEnd27 = groupMarkerEndCopy27;
    context.groupMarkerStart28 = groupMarkerStartCopy28;
    context.groupMarkerEnd28 = groupMarkerEndCopy28;
    context.groupMarkerStart29 = groupMarkerStartCopy29;
    context.groupMarkerEnd29 = groupMarkerEndCopy29;
    context.groupMarkerStart30 = groupMarkerStartCopy30;
    context.groupMarkerEnd30 = groupMarkerEndCopy30;
    context.groupMarkerStart31 = groupMarkerStartCopy31;
    context.groupMarkerEnd31 = groupMarkerEndCopy31;
    context.groupMarkerStart32 = groupMarkerStartCopy32;
    context.groupMarkerEnd32 = groupMarkerEndCopy32;
    context.groupMarkerStart33 = groupMarkerStartCopy33;
    context.groupMarkerEnd33 = groupMarkerEndCopy33;
    context.groupMarkerStart34 = groupMarkerStartCopy34;
    context.groupMarkerEnd34 = groupMarkerEndCopy34;
    context.groupMarkerStart35 = groupMarkerStartCopy35;
    context.groupMarkerEnd35 = groupMarkerEndCopy35;
    context.groupMarkerStart36 = groupMarkerStartCopy36;
    context.groupMarkerEnd36 = groupMarkerEndCopy36;
    context.groupMarkerStart37 = groupMarkerStartCopy37;
    context.groupMarkerEnd37 = groupMarkerEndCopy37;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter19--;
  }
  return followUpResult;
};
/*
 * ...3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0230 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter19++;

  if (context.quantifierCounter19 === 4) {
    return fiber0228(start, str, context);
  }

  const tryDeeperResult = fiber0229(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter19 < 1) {
    context.quantifierCounter19--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;
  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;
  const groupMarkerStartCopy30 = context.groupMarkerStart30;
  const groupMarkerEndCopy30 = context.groupMarkerEnd30;
  const groupMarkerStartCopy31 = context.groupMarkerStart31;
  const groupMarkerEndCopy31 = context.groupMarkerEnd31;
  const groupMarkerStartCopy32 = context.groupMarkerStart32;
  const groupMarkerEndCopy32 = context.groupMarkerEnd32;
  const groupMarkerStartCopy33 = context.groupMarkerStart33;
  const groupMarkerEndCopy33 = context.groupMarkerEnd33;
  const groupMarkerStartCopy34 = context.groupMarkerStart34;
  const groupMarkerEndCopy34 = context.groupMarkerEnd34;
  const groupMarkerStartCopy35 = context.groupMarkerStart35;
  const groupMarkerEndCopy35 = context.groupMarkerEnd35;
  const groupMarkerStartCopy36 = context.groupMarkerStart36;
  const groupMarkerEndCopy36 = context.groupMarkerEnd36;
  const groupMarkerStartCopy37 = context.groupMarkerStart37;
  const groupMarkerEndCopy37 = context.groupMarkerEnd37;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0228(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart27 = groupMarkerStartCopy27;
    context.groupMarkerEnd27 = groupMarkerEndCopy27;
    context.groupMarkerStart28 = groupMarkerStartCopy28;
    context.groupMarkerEnd28 = groupMarkerEndCopy28;
    context.groupMarkerStart29 = groupMarkerStartCopy29;
    context.groupMarkerEnd29 = groupMarkerEndCopy29;
    context.groupMarkerStart30 = groupMarkerStartCopy30;
    context.groupMarkerEnd30 = groupMarkerEndCopy30;
    context.groupMarkerStart31 = groupMarkerStartCopy31;
    context.groupMarkerEnd31 = groupMarkerEndCopy31;
    context.groupMarkerStart32 = groupMarkerStartCopy32;
    context.groupMarkerEnd32 = groupMarkerEndCopy32;
    context.groupMarkerStart33 = groupMarkerStartCopy33;
    context.groupMarkerEnd33 = groupMarkerEndCopy33;
    context.groupMarkerStart34 = groupMarkerStartCopy34;
    context.groupMarkerEnd34 = groupMarkerEndCopy34;
    context.groupMarkerStart35 = groupMarkerStartCopy35;
    context.groupMarkerEnd35 = groupMarkerEndCopy35;
    context.groupMarkerStart36 = groupMarkerStartCopy36;
    context.groupMarkerEnd36 = groupMarkerEndCopy36;
    context.groupMarkerStart37 = groupMarkerStartCopy37;
    context.groupMarkerEnd37 = groupMarkerEndCopy37;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter19--;
  }
  return followUpResult;
};
/*
 * ...3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0233 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter19++;

  if (context.quantifierCounter19 === 4) {
    return fiber0231(start, str, context);
  }

  const tryDeeperResult = fiber0232(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter19 < 1) {
    context.quantifierCounter19--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy27 = context.groupMarkerStart27;
  const groupMarkerEndCopy27 = context.groupMarkerEnd27;
  const groupMarkerStartCopy28 = context.groupMarkerStart28;
  const groupMarkerEndCopy28 = context.groupMarkerEnd28;
  const groupMarkerStartCopy29 = context.groupMarkerStart29;
  const groupMarkerEndCopy29 = context.groupMarkerEnd29;
  const groupMarkerStartCopy30 = context.groupMarkerStart30;
  const groupMarkerEndCopy30 = context.groupMarkerEnd30;
  const groupMarkerStartCopy31 = context.groupMarkerStart31;
  const groupMarkerEndCopy31 = context.groupMarkerEnd31;
  const groupMarkerStartCopy32 = context.groupMarkerStart32;
  const groupMarkerEndCopy32 = context.groupMarkerEnd32;
  const groupMarkerStartCopy33 = context.groupMarkerStart33;
  const groupMarkerEndCopy33 = context.groupMarkerEnd33;
  const groupMarkerStartCopy34 = context.groupMarkerStart34;
  const groupMarkerEndCopy34 = context.groupMarkerEnd34;
  const groupMarkerStartCopy35 = context.groupMarkerStart35;
  const groupMarkerEndCopy35 = context.groupMarkerEnd35;
  const groupMarkerStartCopy36 = context.groupMarkerStart36;
  const groupMarkerEndCopy36 = context.groupMarkerEnd36;
  const groupMarkerStartCopy37 = context.groupMarkerStart37;
  const groupMarkerEndCopy37 = context.groupMarkerEnd37;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0231(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart27 = groupMarkerStartCopy27;
    context.groupMarkerEnd27 = groupMarkerEndCopy27;
    context.groupMarkerStart28 = groupMarkerStartCopy28;
    context.groupMarkerEnd28 = groupMarkerEndCopy28;
    context.groupMarkerStart29 = groupMarkerStartCopy29;
    context.groupMarkerEnd29 = groupMarkerEndCopy29;
    context.groupMarkerStart30 = groupMarkerStartCopy30;
    context.groupMarkerEnd30 = groupMarkerEndCopy30;
    context.groupMarkerStart31 = groupMarkerStartCopy31;
    context.groupMarkerEnd31 = groupMarkerEndCopy31;
    context.groupMarkerStart32 = groupMarkerStartCopy32;
    context.groupMarkerEnd32 = groupMarkerEndCopy32;
    context.groupMarkerStart33 = groupMarkerStartCopy33;
    context.groupMarkerEnd33 = groupMarkerEndCopy33;
    context.groupMarkerStart34 = groupMarkerStartCopy34;
    context.groupMarkerEnd34 = groupMarkerEndCopy34;
    context.groupMarkerStart35 = groupMarkerStartCopy35;
    context.groupMarkerEnd35 = groupMarkerEndCopy35;
    context.groupMarkerStart36 = groupMarkerStartCopy36;
    context.groupMarkerEnd36 = groupMarkerEndCopy36;
    context.groupMarkerStart37 = groupMarkerStartCopy37;
    context.groupMarkerEnd37 = groupMarkerEndCopy37;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter19--;
  }
  return followUpResult;
};
/*
 * ...,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0238 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter20++;

  if (context.quantifierCounter20 === 4) {
    return fiber0236(start, str, context);
  }

  const groupMarkerStartCopy42 = context.groupMarkerStart42;
  const groupMarkerEndCopy42 = context.groupMarkerEnd42;
  const tryDeeperResult = fiber0241(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart42 = groupMarkerStartCopy42;
  context.groupMarkerEnd42 = groupMarkerEndCopy42;

  if (context.quantifierCounter20 < 1) {
    context.quantifierCounter20--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy38 = context.groupMarkerStart38;
  const groupMarkerEndCopy38 = context.groupMarkerEnd38;
  const groupMarkerStartCopy40 = context.groupMarkerStart40;
  const groupMarkerEndCopy40 = context.groupMarkerEnd40;
  const groupMarkerStartCopy41 = context.groupMarkerStart41;
  const groupMarkerEndCopy41 = context.groupMarkerEnd41;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0236(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart38 = groupMarkerStartCopy38;
    context.groupMarkerEnd38 = groupMarkerEndCopy38;
    context.groupMarkerStart40 = groupMarkerStartCopy40;
    context.groupMarkerEnd40 = groupMarkerEndCopy40;
    context.groupMarkerStart41 = groupMarkerStartCopy41;
    context.groupMarkerEnd41 = groupMarkerEndCopy41;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter20--;
  }
  return followUpResult;
};
/*
 * ...}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0240 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter21++;

  if (context.quantifierCounter21 === 4) {
    return fiber0237(start, str, context);
  }

  const tryDeeperResult = fiber0239(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter21 < 1) {
    context.quantifierCounter21--;
    return -1;
  }

  const groupMarkerStartCopy42 = context.groupMarkerStart42;
  const groupMarkerEndCopy42 = context.groupMarkerEnd42;

  const followUpResult = fiber0237(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart42 = groupMarkerStartCopy42;
    context.groupMarkerEnd42 = groupMarkerEndCopy42;
    context.quantifierCounter21--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3}))|...
 *              ^^^^^^
 */
const greedyQuantifier0249 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter22++;

  if (context.quantifierCounter22 === 1) {
    return fiber0247(start, str, context);
  }

  const tryDeeperResult = fiber0248(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0247(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter22--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3}))|...
 *              ^^^^^^
 */
const greedyQuantifier0256 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter22++;

  if (context.quantifierCounter22 === 1) {
    return fiber0254(start, str, context);
  }

  const tryDeeperResult = fiber0255(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0254(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter22--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3}))|...
 *              ^^^^^^
 */
const greedyQuantifier0263 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter22++;

  if (context.quantifierCounter22 === 1) {
    return fiber0261(start, str, context);
  }

  const tryDeeperResult = fiber0262(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0261(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter22--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
 *              ^^^^^^
 */
const greedyQuantifier0270 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter23++;

  if (context.quantifierCounter23 === 1) {
    return fiber0268(start, str, context);
  }

  const tryDeeperResult = fiber0269(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0268(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter23--;
  }
  return followUpResult;
};
/*
 * ...}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0273 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter24++;

  if (context.quantifierCounter24 === 2) {
    return fiber0243(start, str, context);
  }

  const groupMarkerStartCopy44 = context.groupMarkerStart44;
  const groupMarkerEndCopy44 = context.groupMarkerEnd44;
  const tryDeeperResult = fiber0276(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart44 = groupMarkerStartCopy44;
  context.groupMarkerEnd44 = groupMarkerEndCopy44;

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy38 = context.groupMarkerStart38;
  const groupMarkerEndCopy38 = context.groupMarkerEnd38;
  const groupMarkerStartCopy40 = context.groupMarkerStart40;
  const groupMarkerEndCopy40 = context.groupMarkerEnd40;
  const groupMarkerStartCopy43 = context.groupMarkerStart43;
  const groupMarkerEndCopy43 = context.groupMarkerEnd43;
  const groupMarkerStartCopy45 = context.groupMarkerStart45;
  const groupMarkerEndCopy45 = context.groupMarkerEnd45;
  const groupMarkerStartCopy46 = context.groupMarkerStart46;
  const groupMarkerEndCopy46 = context.groupMarkerEnd46;
  const groupMarkerStartCopy47 = context.groupMarkerStart47;
  const groupMarkerEndCopy47 = context.groupMarkerEnd47;
  const groupMarkerStartCopy48 = context.groupMarkerStart48;
  const groupMarkerEndCopy48 = context.groupMarkerEnd48;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0243(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart38 = groupMarkerStartCopy38;
    context.groupMarkerEnd38 = groupMarkerEndCopy38;
    context.groupMarkerStart40 = groupMarkerStartCopy40;
    context.groupMarkerEnd40 = groupMarkerEndCopy40;
    context.groupMarkerStart43 = groupMarkerStartCopy43;
    context.groupMarkerEnd43 = groupMarkerEndCopy43;
    context.groupMarkerStart45 = groupMarkerStartCopy45;
    context.groupMarkerEnd45 = groupMarkerEndCopy45;
    context.groupMarkerStart46 = groupMarkerStartCopy46;
    context.groupMarkerEnd46 = groupMarkerEndCopy46;
    context.groupMarkerStart47 = groupMarkerStartCopy47;
    context.groupMarkerEnd47 = groupMarkerEndCopy47;
    context.groupMarkerStart48 = groupMarkerStartCopy48;
    context.groupMarkerEnd48 = groupMarkerEndCopy48;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter24--;
  }
  return followUpResult;
};
/*
 * ...{1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((2...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0275 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter25++;

  if (context.quantifierCounter25 === 4) {
    return fiber0272(start, str, context);
  }

  const tryDeeperResult = fiber0274(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter25 < 1) {
    context.quantifierCounter25--;
    return -1;
  }

  const groupMarkerStartCopy44 = context.groupMarkerStart44;
  const groupMarkerEndCopy44 = context.groupMarkerEnd44;

  const followUpResult = fiber0272(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart44 = groupMarkerStartCopy44;
    context.groupMarkerEnd44 = groupMarkerEndCopy44;
    context.quantifierCounter25--;
  }
  return followUpResult;
};
/*
 * ...}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0281 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter26++;

  if (context.quantifierCounter26 === 4) {
    return fiber0279(start, str, context);
  }

  const tryDeeperResult = fiber0280(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter26 < 1) {
    context.quantifierCounter26--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy38 = context.groupMarkerStart38;
  const groupMarkerEndCopy38 = context.groupMarkerEnd38;
  const groupMarkerStartCopy39 = context.groupMarkerStart39;
  const groupMarkerEndCopy39 = context.groupMarkerEnd39;
  const groupMarkerStartCopy40 = context.groupMarkerStart40;
  const groupMarkerEndCopy40 = context.groupMarkerEnd40;
  const groupMarkerStartCopy41 = context.groupMarkerStart41;
  const groupMarkerEndCopy41 = context.groupMarkerEnd41;
  const groupMarkerStartCopy42 = context.groupMarkerStart42;
  const groupMarkerEndCopy42 = context.groupMarkerEnd42;
  const groupMarkerStartCopy43 = context.groupMarkerStart43;
  const groupMarkerEndCopy43 = context.groupMarkerEnd43;
  const groupMarkerStartCopy44 = context.groupMarkerStart44;
  const groupMarkerEndCopy44 = context.groupMarkerEnd44;
  const groupMarkerStartCopy45 = context.groupMarkerStart45;
  const groupMarkerEndCopy45 = context.groupMarkerEnd45;
  const groupMarkerStartCopy46 = context.groupMarkerStart46;
  const groupMarkerEndCopy46 = context.groupMarkerEnd46;
  const groupMarkerStartCopy47 = context.groupMarkerStart47;
  const groupMarkerEndCopy47 = context.groupMarkerEnd47;
  const groupMarkerStartCopy48 = context.groupMarkerStart48;
  const groupMarkerEndCopy48 = context.groupMarkerEnd48;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0279(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart38 = groupMarkerStartCopy38;
    context.groupMarkerEnd38 = groupMarkerEndCopy38;
    context.groupMarkerStart39 = groupMarkerStartCopy39;
    context.groupMarkerEnd39 = groupMarkerEndCopy39;
    context.groupMarkerStart40 = groupMarkerStartCopy40;
    context.groupMarkerEnd40 = groupMarkerEndCopy40;
    context.groupMarkerStart41 = groupMarkerStartCopy41;
    context.groupMarkerEnd41 = groupMarkerEndCopy41;
    context.groupMarkerStart42 = groupMarkerStartCopy42;
    context.groupMarkerEnd42 = groupMarkerEndCopy42;
    context.groupMarkerStart43 = groupMarkerStartCopy43;
    context.groupMarkerEnd43 = groupMarkerEndCopy43;
    context.groupMarkerStart44 = groupMarkerStartCopy44;
    context.groupMarkerEnd44 = groupMarkerEndCopy44;
    context.groupMarkerStart45 = groupMarkerStartCopy45;
    context.groupMarkerEnd45 = groupMarkerEndCopy45;
    context.groupMarkerStart46 = groupMarkerStartCopy46;
    context.groupMarkerEnd46 = groupMarkerEndCopy46;
    context.groupMarkerStart47 = groupMarkerStartCopy47;
    context.groupMarkerEnd47 = groupMarkerEndCopy47;
    context.groupMarkerStart48 = groupMarkerStartCopy48;
    context.groupMarkerEnd48 = groupMarkerEndCopy48;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter26--;
  }
  return followUpResult;
};
/*
 * ...}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0284 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter26++;

  if (context.quantifierCounter26 === 4) {
    return fiber0282(start, str, context);
  }

  const tryDeeperResult = fiber0283(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter26 < 1) {
    context.quantifierCounter26--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy38 = context.groupMarkerStart38;
  const groupMarkerEndCopy38 = context.groupMarkerEnd38;
  const groupMarkerStartCopy39 = context.groupMarkerStart39;
  const groupMarkerEndCopy39 = context.groupMarkerEnd39;
  const groupMarkerStartCopy40 = context.groupMarkerStart40;
  const groupMarkerEndCopy40 = context.groupMarkerEnd40;
  const groupMarkerStartCopy41 = context.groupMarkerStart41;
  const groupMarkerEndCopy41 = context.groupMarkerEnd41;
  const groupMarkerStartCopy42 = context.groupMarkerStart42;
  const groupMarkerEndCopy42 = context.groupMarkerEnd42;
  const groupMarkerStartCopy43 = context.groupMarkerStart43;
  const groupMarkerEndCopy43 = context.groupMarkerEnd43;
  const groupMarkerStartCopy44 = context.groupMarkerStart44;
  const groupMarkerEndCopy44 = context.groupMarkerEnd44;
  const groupMarkerStartCopy45 = context.groupMarkerStart45;
  const groupMarkerEndCopy45 = context.groupMarkerEnd45;
  const groupMarkerStartCopy46 = context.groupMarkerStart46;
  const groupMarkerEndCopy46 = context.groupMarkerEnd46;
  const groupMarkerStartCopy47 = context.groupMarkerStart47;
  const groupMarkerEndCopy47 = context.groupMarkerEnd47;
  const groupMarkerStartCopy48 = context.groupMarkerStart48;
  const groupMarkerEndCopy48 = context.groupMarkerEnd48;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0282(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart38 = groupMarkerStartCopy38;
    context.groupMarkerEnd38 = groupMarkerEndCopy38;
    context.groupMarkerStart39 = groupMarkerStartCopy39;
    context.groupMarkerEnd39 = groupMarkerEndCopy39;
    context.groupMarkerStart40 = groupMarkerStartCopy40;
    context.groupMarkerEnd40 = groupMarkerEndCopy40;
    context.groupMarkerStart41 = groupMarkerStartCopy41;
    context.groupMarkerEnd41 = groupMarkerEndCopy41;
    context.groupMarkerStart42 = groupMarkerStartCopy42;
    context.groupMarkerEnd42 = groupMarkerEndCopy42;
    context.groupMarkerStart43 = groupMarkerStartCopy43;
    context.groupMarkerEnd43 = groupMarkerEndCopy43;
    context.groupMarkerStart44 = groupMarkerStartCopy44;
    context.groupMarkerEnd44 = groupMarkerEndCopy44;
    context.groupMarkerStart45 = groupMarkerStartCopy45;
    context.groupMarkerEnd45 = groupMarkerEndCopy45;
    context.groupMarkerStart46 = groupMarkerStartCopy46;
    context.groupMarkerEnd46 = groupMarkerEndCopy46;
    context.groupMarkerStart47 = groupMarkerStartCopy47;
    context.groupMarkerEnd47 = groupMarkerEndCopy47;
    context.groupMarkerStart48 = groupMarkerStartCopy48;
    context.groupMarkerEnd48 = groupMarkerEndCopy48;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter26--;
  }
  return followUpResult;
};
/*
 * ...}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0287 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter26++;

  if (context.quantifierCounter26 === 4) {
    return fiber0285(start, str, context);
  }

  const tryDeeperResult = fiber0286(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter26 < 1) {
    context.quantifierCounter26--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy38 = context.groupMarkerStart38;
  const groupMarkerEndCopy38 = context.groupMarkerEnd38;
  const groupMarkerStartCopy39 = context.groupMarkerStart39;
  const groupMarkerEndCopy39 = context.groupMarkerEnd39;
  const groupMarkerStartCopy40 = context.groupMarkerStart40;
  const groupMarkerEndCopy40 = context.groupMarkerEnd40;
  const groupMarkerStartCopy41 = context.groupMarkerStart41;
  const groupMarkerEndCopy41 = context.groupMarkerEnd41;
  const groupMarkerStartCopy42 = context.groupMarkerStart42;
  const groupMarkerEndCopy42 = context.groupMarkerEnd42;
  const groupMarkerStartCopy43 = context.groupMarkerStart43;
  const groupMarkerEndCopy43 = context.groupMarkerEnd43;
  const groupMarkerStartCopy44 = context.groupMarkerStart44;
  const groupMarkerEndCopy44 = context.groupMarkerEnd44;
  const groupMarkerStartCopy45 = context.groupMarkerStart45;
  const groupMarkerEndCopy45 = context.groupMarkerEnd45;
  const groupMarkerStartCopy46 = context.groupMarkerStart46;
  const groupMarkerEndCopy46 = context.groupMarkerEnd46;
  const groupMarkerStartCopy47 = context.groupMarkerStart47;
  const groupMarkerEndCopy47 = context.groupMarkerEnd47;
  const groupMarkerStartCopy48 = context.groupMarkerStart48;
  const groupMarkerEndCopy48 = context.groupMarkerEnd48;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0285(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart38 = groupMarkerStartCopy38;
    context.groupMarkerEnd38 = groupMarkerEndCopy38;
    context.groupMarkerStart39 = groupMarkerStartCopy39;
    context.groupMarkerEnd39 = groupMarkerEndCopy39;
    context.groupMarkerStart40 = groupMarkerStartCopy40;
    context.groupMarkerEnd40 = groupMarkerEndCopy40;
    context.groupMarkerStart41 = groupMarkerStartCopy41;
    context.groupMarkerEnd41 = groupMarkerEndCopy41;
    context.groupMarkerStart42 = groupMarkerStartCopy42;
    context.groupMarkerEnd42 = groupMarkerEndCopy42;
    context.groupMarkerStart43 = groupMarkerStartCopy43;
    context.groupMarkerEnd43 = groupMarkerEndCopy43;
    context.groupMarkerStart44 = groupMarkerStartCopy44;
    context.groupMarkerEnd44 = groupMarkerEndCopy44;
    context.groupMarkerStart45 = groupMarkerStartCopy45;
    context.groupMarkerEnd45 = groupMarkerEndCopy45;
    context.groupMarkerStart46 = groupMarkerStartCopy46;
    context.groupMarkerEnd46 = groupMarkerEndCopy46;
    context.groupMarkerStart47 = groupMarkerStartCopy47;
    context.groupMarkerEnd47 = groupMarkerEndCopy47;
    context.groupMarkerStart48 = groupMarkerStartCopy48;
    context.groupMarkerEnd48 = groupMarkerEndCopy48;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter26--;
  }
  return followUpResult;
};
/*
 * ...,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0292 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter27++;

  if (context.quantifierCounter27 === 5) {
    return fiber0290(start, str, context);
  }

  const groupMarkerStartCopy53 = context.groupMarkerStart53;
  const groupMarkerEndCopy53 = context.groupMarkerEnd53;
  const tryDeeperResult = fiber0295(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart53 = groupMarkerStartCopy53;
  context.groupMarkerEnd53 = groupMarkerEndCopy53;

  if (context.quantifierCounter27 < 1) {
    context.quantifierCounter27--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy49 = context.groupMarkerStart49;
  const groupMarkerEndCopy49 = context.groupMarkerEnd49;
  const groupMarkerStartCopy51 = context.groupMarkerStart51;
  const groupMarkerEndCopy51 = context.groupMarkerEnd51;
  const groupMarkerStartCopy52 = context.groupMarkerStart52;
  const groupMarkerEndCopy52 = context.groupMarkerEnd52;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0290(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart49 = groupMarkerStartCopy49;
    context.groupMarkerEnd49 = groupMarkerEndCopy49;
    context.groupMarkerStart51 = groupMarkerStartCopy51;
    context.groupMarkerEnd51 = groupMarkerEndCopy51;
    context.groupMarkerStart52 = groupMarkerStartCopy52;
    context.groupMarkerEnd52 = groupMarkerEndCopy52;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter27--;
  }
  return followUpResult;
};
/*
 * ...}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0294 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter28++;

  if (context.quantifierCounter28 === 4) {
    return fiber0291(start, str, context);
  }

  const tryDeeperResult = fiber0293(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter28 < 1) {
    context.quantifierCounter28--;
    return -1;
  }

  const groupMarkerStartCopy53 = context.groupMarkerStart53;
  const groupMarkerEndCopy53 = context.groupMarkerEnd53;

  const followUpResult = fiber0291(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart53 = groupMarkerStartCopy53;
    context.groupMarkerEnd53 = groupMarkerEndCopy53;
    context.quantifierCounter28--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3}))|...
 *              ^^^^^^
 */
const greedyQuantifier0303 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter29++;

  if (context.quantifierCounter29 === 1) {
    return fiber0301(start, str, context);
  }

  const tryDeeperResult = fiber0302(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0301(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter29--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3}))|...
 *              ^^^^^^
 */
const greedyQuantifier0310 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter29++;

  if (context.quantifierCounter29 === 1) {
    return fiber0308(start, str, context);
  }

  const tryDeeperResult = fiber0309(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0308(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter29--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3}))|...
 *              ^^^^^^
 */
const greedyQuantifier0317 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter29++;

  if (context.quantifierCounter29 === 1) {
    return fiber0315(start, str, context);
  }

  const tryDeeperResult = fiber0316(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0315(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter29--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
 *              ^^^^^^
 */
const greedyQuantifier0324 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter30++;

  if (context.quantifierCounter30 === 1) {
    return fiber0322(start, str, context);
  }

  const tryDeeperResult = fiber0323(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0322(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter30--;
  }
  return followUpResult;
};
/*
 * ...}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0327 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter31++;

  if (context.quantifierCounter31 === 3) {
    return fiber0297(start, str, context);
  }

  const groupMarkerStartCopy55 = context.groupMarkerStart55;
  const groupMarkerEndCopy55 = context.groupMarkerEnd55;
  const tryDeeperResult = fiber0330(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart55 = groupMarkerStartCopy55;
  context.groupMarkerEnd55 = groupMarkerEndCopy55;

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy49 = context.groupMarkerStart49;
  const groupMarkerEndCopy49 = context.groupMarkerEnd49;
  const groupMarkerStartCopy51 = context.groupMarkerStart51;
  const groupMarkerEndCopy51 = context.groupMarkerEnd51;
  const groupMarkerStartCopy54 = context.groupMarkerStart54;
  const groupMarkerEndCopy54 = context.groupMarkerEnd54;
  const groupMarkerStartCopy56 = context.groupMarkerStart56;
  const groupMarkerEndCopy56 = context.groupMarkerEnd56;
  const groupMarkerStartCopy57 = context.groupMarkerStart57;
  const groupMarkerEndCopy57 = context.groupMarkerEnd57;
  const groupMarkerStartCopy58 = context.groupMarkerStart58;
  const groupMarkerEndCopy58 = context.groupMarkerEnd58;
  const groupMarkerStartCopy59 = context.groupMarkerStart59;
  const groupMarkerEndCopy59 = context.groupMarkerEnd59;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0297(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart49 = groupMarkerStartCopy49;
    context.groupMarkerEnd49 = groupMarkerEndCopy49;
    context.groupMarkerStart51 = groupMarkerStartCopy51;
    context.groupMarkerEnd51 = groupMarkerEndCopy51;
    context.groupMarkerStart54 = groupMarkerStartCopy54;
    context.groupMarkerEnd54 = groupMarkerEndCopy54;
    context.groupMarkerStart56 = groupMarkerStartCopy56;
    context.groupMarkerEnd56 = groupMarkerEndCopy56;
    context.groupMarkerStart57 = groupMarkerStartCopy57;
    context.groupMarkerEnd57 = groupMarkerEndCopy57;
    context.groupMarkerStart58 = groupMarkerStartCopy58;
    context.groupMarkerEnd58 = groupMarkerEndCopy58;
    context.groupMarkerStart59 = groupMarkerStartCopy59;
    context.groupMarkerEnd59 = groupMarkerEndCopy59;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter31--;
  }
  return followUpResult;
};
/*
 * ...{1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((2...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0329 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter32++;

  if (context.quantifierCounter32 === 4) {
    return fiber0326(start, str, context);
  }

  const tryDeeperResult = fiber0328(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter32 < 1) {
    context.quantifierCounter32--;
    return -1;
  }

  const groupMarkerStartCopy55 = context.groupMarkerStart55;
  const groupMarkerEndCopy55 = context.groupMarkerEnd55;

  const followUpResult = fiber0326(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart55 = groupMarkerStartCopy55;
    context.groupMarkerEnd55 = groupMarkerEndCopy55;
    context.quantifierCounter32--;
  }
  return followUpResult;
};
/*
 * ...}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0335 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter33++;

  if (context.quantifierCounter33 === 4) {
    return fiber0333(start, str, context);
  }

  const tryDeeperResult = fiber0334(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter33 < 1) {
    context.quantifierCounter33--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy49 = context.groupMarkerStart49;
  const groupMarkerEndCopy49 = context.groupMarkerEnd49;
  const groupMarkerStartCopy50 = context.groupMarkerStart50;
  const groupMarkerEndCopy50 = context.groupMarkerEnd50;
  const groupMarkerStartCopy51 = context.groupMarkerStart51;
  const groupMarkerEndCopy51 = context.groupMarkerEnd51;
  const groupMarkerStartCopy52 = context.groupMarkerStart52;
  const groupMarkerEndCopy52 = context.groupMarkerEnd52;
  const groupMarkerStartCopy53 = context.groupMarkerStart53;
  const groupMarkerEndCopy53 = context.groupMarkerEnd53;
  const groupMarkerStartCopy54 = context.groupMarkerStart54;
  const groupMarkerEndCopy54 = context.groupMarkerEnd54;
  const groupMarkerStartCopy55 = context.groupMarkerStart55;
  const groupMarkerEndCopy55 = context.groupMarkerEnd55;
  const groupMarkerStartCopy56 = context.groupMarkerStart56;
  const groupMarkerEndCopy56 = context.groupMarkerEnd56;
  const groupMarkerStartCopy57 = context.groupMarkerStart57;
  const groupMarkerEndCopy57 = context.groupMarkerEnd57;
  const groupMarkerStartCopy58 = context.groupMarkerStart58;
  const groupMarkerEndCopy58 = context.groupMarkerEnd58;
  const groupMarkerStartCopy59 = context.groupMarkerStart59;
  const groupMarkerEndCopy59 = context.groupMarkerEnd59;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0333(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart49 = groupMarkerStartCopy49;
    context.groupMarkerEnd49 = groupMarkerEndCopy49;
    context.groupMarkerStart50 = groupMarkerStartCopy50;
    context.groupMarkerEnd50 = groupMarkerEndCopy50;
    context.groupMarkerStart51 = groupMarkerStartCopy51;
    context.groupMarkerEnd51 = groupMarkerEndCopy51;
    context.groupMarkerStart52 = groupMarkerStartCopy52;
    context.groupMarkerEnd52 = groupMarkerEndCopy52;
    context.groupMarkerStart53 = groupMarkerStartCopy53;
    context.groupMarkerEnd53 = groupMarkerEndCopy53;
    context.groupMarkerStart54 = groupMarkerStartCopy54;
    context.groupMarkerEnd54 = groupMarkerEndCopy54;
    context.groupMarkerStart55 = groupMarkerStartCopy55;
    context.groupMarkerEnd55 = groupMarkerEndCopy55;
    context.groupMarkerStart56 = groupMarkerStartCopy56;
    context.groupMarkerEnd56 = groupMarkerEndCopy56;
    context.groupMarkerStart57 = groupMarkerStartCopy57;
    context.groupMarkerEnd57 = groupMarkerEndCopy57;
    context.groupMarkerStart58 = groupMarkerStartCopy58;
    context.groupMarkerEnd58 = groupMarkerEndCopy58;
    context.groupMarkerStart59 = groupMarkerStartCopy59;
    context.groupMarkerEnd59 = groupMarkerEndCopy59;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter33--;
  }
  return followUpResult;
};
/*
 * ...}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0338 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter33++;

  if (context.quantifierCounter33 === 4) {
    return fiber0336(start, str, context);
  }

  const tryDeeperResult = fiber0337(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter33 < 1) {
    context.quantifierCounter33--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy49 = context.groupMarkerStart49;
  const groupMarkerEndCopy49 = context.groupMarkerEnd49;
  const groupMarkerStartCopy50 = context.groupMarkerStart50;
  const groupMarkerEndCopy50 = context.groupMarkerEnd50;
  const groupMarkerStartCopy51 = context.groupMarkerStart51;
  const groupMarkerEndCopy51 = context.groupMarkerEnd51;
  const groupMarkerStartCopy52 = context.groupMarkerStart52;
  const groupMarkerEndCopy52 = context.groupMarkerEnd52;
  const groupMarkerStartCopy53 = context.groupMarkerStart53;
  const groupMarkerEndCopy53 = context.groupMarkerEnd53;
  const groupMarkerStartCopy54 = context.groupMarkerStart54;
  const groupMarkerEndCopy54 = context.groupMarkerEnd54;
  const groupMarkerStartCopy55 = context.groupMarkerStart55;
  const groupMarkerEndCopy55 = context.groupMarkerEnd55;
  const groupMarkerStartCopy56 = context.groupMarkerStart56;
  const groupMarkerEndCopy56 = context.groupMarkerEnd56;
  const groupMarkerStartCopy57 = context.groupMarkerStart57;
  const groupMarkerEndCopy57 = context.groupMarkerEnd57;
  const groupMarkerStartCopy58 = context.groupMarkerStart58;
  const groupMarkerEndCopy58 = context.groupMarkerEnd58;
  const groupMarkerStartCopy59 = context.groupMarkerStart59;
  const groupMarkerEndCopy59 = context.groupMarkerEnd59;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0336(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart49 = groupMarkerStartCopy49;
    context.groupMarkerEnd49 = groupMarkerEndCopy49;
    context.groupMarkerStart50 = groupMarkerStartCopy50;
    context.groupMarkerEnd50 = groupMarkerEndCopy50;
    context.groupMarkerStart51 = groupMarkerStartCopy51;
    context.groupMarkerEnd51 = groupMarkerEndCopy51;
    context.groupMarkerStart52 = groupMarkerStartCopy52;
    context.groupMarkerEnd52 = groupMarkerEndCopy52;
    context.groupMarkerStart53 = groupMarkerStartCopy53;
    context.groupMarkerEnd53 = groupMarkerEndCopy53;
    context.groupMarkerStart54 = groupMarkerStartCopy54;
    context.groupMarkerEnd54 = groupMarkerEndCopy54;
    context.groupMarkerStart55 = groupMarkerStartCopy55;
    context.groupMarkerEnd55 = groupMarkerEndCopy55;
    context.groupMarkerStart56 = groupMarkerStartCopy56;
    context.groupMarkerEnd56 = groupMarkerEndCopy56;
    context.groupMarkerStart57 = groupMarkerStartCopy57;
    context.groupMarkerEnd57 = groupMarkerEndCopy57;
    context.groupMarkerStart58 = groupMarkerStartCopy58;
    context.groupMarkerEnd58 = groupMarkerEndCopy58;
    context.groupMarkerStart59 = groupMarkerStartCopy59;
    context.groupMarkerEnd59 = groupMarkerEndCopy59;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter33--;
  }
  return followUpResult;
};
/*
 * ...,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0343 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter34++;

  if (context.quantifierCounter34 === 6) {
    return fiber0341(start, str, context);
  }

  const groupMarkerStartCopy64 = context.groupMarkerStart64;
  const groupMarkerEndCopy64 = context.groupMarkerEnd64;
  const tryDeeperResult = fiber0346(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart64 = groupMarkerStartCopy64;
  context.groupMarkerEnd64 = groupMarkerEndCopy64;

  if (context.quantifierCounter34 < 1) {
    context.quantifierCounter34--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy60 = context.groupMarkerStart60;
  const groupMarkerEndCopy60 = context.groupMarkerEnd60;
  const groupMarkerStartCopy62 = context.groupMarkerStart62;
  const groupMarkerEndCopy62 = context.groupMarkerEnd62;
  const groupMarkerStartCopy63 = context.groupMarkerStart63;
  const groupMarkerEndCopy63 = context.groupMarkerEnd63;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0341(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart60 = groupMarkerStartCopy60;
    context.groupMarkerEnd60 = groupMarkerEndCopy60;
    context.groupMarkerStart62 = groupMarkerStartCopy62;
    context.groupMarkerEnd62 = groupMarkerEndCopy62;
    context.groupMarkerStart63 = groupMarkerStartCopy63;
    context.groupMarkerEnd63 = groupMarkerEndCopy63;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter34--;
  }
  return followUpResult;
};
/*
 * ...}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0345 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter35++;

  if (context.quantifierCounter35 === 4) {
    return fiber0342(start, str, context);
  }

  const tryDeeperResult = fiber0344(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter35 < 1) {
    context.quantifierCounter35--;
    return -1;
  }

  const groupMarkerStartCopy64 = context.groupMarkerStart64;
  const groupMarkerEndCopy64 = context.groupMarkerEnd64;

  const followUpResult = fiber0342(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart64 = groupMarkerStartCopy64;
    context.groupMarkerEnd64 = groupMarkerEndCopy64;
    context.quantifierCounter35--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3}))|...
 *              ^^^^^^
 */
const greedyQuantifier0354 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter36++;

  if (context.quantifierCounter36 === 1) {
    return fiber0352(start, str, context);
  }

  const tryDeeperResult = fiber0353(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0352(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter36--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3}))|...
 *              ^^^^^^
 */
const greedyQuantifier0361 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter36++;

  if (context.quantifierCounter36 === 1) {
    return fiber0359(start, str, context);
  }

  const tryDeeperResult = fiber0360(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0359(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter36--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3}))|...
 *              ^^^^^^
 */
const greedyQuantifier0368 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter36++;

  if (context.quantifierCounter36 === 1) {
    return fiber0366(start, str, context);
  }

  const tryDeeperResult = fiber0367(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0366(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter36--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
 *              ^^^^^^
 */
const greedyQuantifier0375 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter37++;

  if (context.quantifierCounter37 === 1) {
    return fiber0373(start, str, context);
  }

  const tryDeeperResult = fiber0374(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0373(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter37--;
  }
  return followUpResult;
};
/*
 * ...}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0378 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter38++;

  if (context.quantifierCounter38 === 4) {
    return fiber0348(start, str, context);
  }

  const groupMarkerStartCopy66 = context.groupMarkerStart66;
  const groupMarkerEndCopy66 = context.groupMarkerEnd66;
  const tryDeeperResult = fiber0381(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart66 = groupMarkerStartCopy66;
  context.groupMarkerEnd66 = groupMarkerEndCopy66;

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy60 = context.groupMarkerStart60;
  const groupMarkerEndCopy60 = context.groupMarkerEnd60;
  const groupMarkerStartCopy62 = context.groupMarkerStart62;
  const groupMarkerEndCopy62 = context.groupMarkerEnd62;
  const groupMarkerStartCopy65 = context.groupMarkerStart65;
  const groupMarkerEndCopy65 = context.groupMarkerEnd65;
  const groupMarkerStartCopy67 = context.groupMarkerStart67;
  const groupMarkerEndCopy67 = context.groupMarkerEnd67;
  const groupMarkerStartCopy68 = context.groupMarkerStart68;
  const groupMarkerEndCopy68 = context.groupMarkerEnd68;
  const groupMarkerStartCopy69 = context.groupMarkerStart69;
  const groupMarkerEndCopy69 = context.groupMarkerEnd69;
  const groupMarkerStartCopy70 = context.groupMarkerStart70;
  const groupMarkerEndCopy70 = context.groupMarkerEnd70;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0348(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart60 = groupMarkerStartCopy60;
    context.groupMarkerEnd60 = groupMarkerEndCopy60;
    context.groupMarkerStart62 = groupMarkerStartCopy62;
    context.groupMarkerEnd62 = groupMarkerEndCopy62;
    context.groupMarkerStart65 = groupMarkerStartCopy65;
    context.groupMarkerEnd65 = groupMarkerEndCopy65;
    context.groupMarkerStart67 = groupMarkerStartCopy67;
    context.groupMarkerEnd67 = groupMarkerEndCopy67;
    context.groupMarkerStart68 = groupMarkerStartCopy68;
    context.groupMarkerEnd68 = groupMarkerEndCopy68;
    context.groupMarkerStart69 = groupMarkerStartCopy69;
    context.groupMarkerEnd69 = groupMarkerEndCopy69;
    context.groupMarkerStart70 = groupMarkerStartCopy70;
    context.groupMarkerEnd70 = groupMarkerEndCopy70;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter38--;
  }
  return followUpResult;
};
/*
 * ...{1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((2...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0380 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter39++;

  if (context.quantifierCounter39 === 4) {
    return fiber0377(start, str, context);
  }

  const tryDeeperResult = fiber0379(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter39 < 1) {
    context.quantifierCounter39--;
    return -1;
  }

  const groupMarkerStartCopy66 = context.groupMarkerStart66;
  const groupMarkerEndCopy66 = context.groupMarkerEnd66;

  const followUpResult = fiber0377(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart66 = groupMarkerStartCopy66;
    context.groupMarkerEnd66 = groupMarkerEndCopy66;
    context.quantifierCounter39--;
  }
  return followUpResult;
};
/*
 * ...}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0386 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter40++;

  if (context.quantifierCounter40 === 4) {
    return fiber0384(start, str, context);
  }

  const tryDeeperResult = fiber0385(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter40 < 1) {
    context.quantifierCounter40--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy60 = context.groupMarkerStart60;
  const groupMarkerEndCopy60 = context.groupMarkerEnd60;
  const groupMarkerStartCopy61 = context.groupMarkerStart61;
  const groupMarkerEndCopy61 = context.groupMarkerEnd61;
  const groupMarkerStartCopy62 = context.groupMarkerStart62;
  const groupMarkerEndCopy62 = context.groupMarkerEnd62;
  const groupMarkerStartCopy63 = context.groupMarkerStart63;
  const groupMarkerEndCopy63 = context.groupMarkerEnd63;
  const groupMarkerStartCopy64 = context.groupMarkerStart64;
  const groupMarkerEndCopy64 = context.groupMarkerEnd64;
  const groupMarkerStartCopy65 = context.groupMarkerStart65;
  const groupMarkerEndCopy65 = context.groupMarkerEnd65;
  const groupMarkerStartCopy66 = context.groupMarkerStart66;
  const groupMarkerEndCopy66 = context.groupMarkerEnd66;
  const groupMarkerStartCopy67 = context.groupMarkerStart67;
  const groupMarkerEndCopy67 = context.groupMarkerEnd67;
  const groupMarkerStartCopy68 = context.groupMarkerStart68;
  const groupMarkerEndCopy68 = context.groupMarkerEnd68;
  const groupMarkerStartCopy69 = context.groupMarkerStart69;
  const groupMarkerEndCopy69 = context.groupMarkerEnd69;
  const groupMarkerStartCopy70 = context.groupMarkerStart70;
  const groupMarkerEndCopy70 = context.groupMarkerEnd70;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0384(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart60 = groupMarkerStartCopy60;
    context.groupMarkerEnd60 = groupMarkerEndCopy60;
    context.groupMarkerStart61 = groupMarkerStartCopy61;
    context.groupMarkerEnd61 = groupMarkerEndCopy61;
    context.groupMarkerStart62 = groupMarkerStartCopy62;
    context.groupMarkerEnd62 = groupMarkerEndCopy62;
    context.groupMarkerStart63 = groupMarkerStartCopy63;
    context.groupMarkerEnd63 = groupMarkerEndCopy63;
    context.groupMarkerStart64 = groupMarkerStartCopy64;
    context.groupMarkerEnd64 = groupMarkerEndCopy64;
    context.groupMarkerStart65 = groupMarkerStartCopy65;
    context.groupMarkerEnd65 = groupMarkerEndCopy65;
    context.groupMarkerStart66 = groupMarkerStartCopy66;
    context.groupMarkerEnd66 = groupMarkerEndCopy66;
    context.groupMarkerStart67 = groupMarkerStartCopy67;
    context.groupMarkerEnd67 = groupMarkerEndCopy67;
    context.groupMarkerStart68 = groupMarkerStartCopy68;
    context.groupMarkerEnd68 = groupMarkerEndCopy68;
    context.groupMarkerStart69 = groupMarkerStartCopy69;
    context.groupMarkerEnd69 = groupMarkerEndCopy69;
    context.groupMarkerStart70 = groupMarkerStartCopy70;
    context.groupMarkerEnd70 = groupMarkerEndCopy70;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter40--;
  }
  return followUpResult;
};
/*
 * ...)|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0391 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter41++;

  if (context.quantifierCounter41 === 7) {
    return fiber0389(start, str, context);
  }

  const groupMarkerStartCopy74 = context.groupMarkerStart74;
  const groupMarkerEndCopy74 = context.groupMarkerEnd74;
  const tryDeeperResult = fiber0394(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart74 = groupMarkerStartCopy74;
  context.groupMarkerEnd74 = groupMarkerEndCopy74;

  if (context.quantifierCounter41 < 1) {
    context.quantifierCounter41--;
    return -1;
  }

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy71 = context.groupMarkerStart71;
  const groupMarkerEndCopy71 = context.groupMarkerEnd71;
  const groupMarkerStartCopy72 = context.groupMarkerStart72;
  const groupMarkerEndCopy72 = context.groupMarkerEnd72;
  const groupMarkerStartCopy73 = context.groupMarkerStart73;
  const groupMarkerEndCopy73 = context.groupMarkerEnd73;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0389(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart71 = groupMarkerStartCopy71;
    context.groupMarkerEnd71 = groupMarkerEndCopy71;
    context.groupMarkerStart72 = groupMarkerStartCopy72;
    context.groupMarkerEnd72 = groupMarkerEndCopy72;
    context.groupMarkerStart73 = groupMarkerStartCopy73;
    context.groupMarkerEnd73 = groupMarkerEndCopy73;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter41--;
  }
  return followUpResult;
};
/*
 * ...:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0393 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter42++;

  if (context.quantifierCounter42 === 4) {
    return fiber0390(start, str, context);
  }

  const tryDeeperResult = fiber0392(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter42 < 1) {
    context.quantifierCounter42--;
    return -1;
  }

  const groupMarkerStartCopy74 = context.groupMarkerStart74;
  const groupMarkerEndCopy74 = context.groupMarkerEnd74;

  const followUpResult = fiber0390(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart74 = groupMarkerStartCopy74;
    context.groupMarkerEnd74 = groupMarkerEndCopy74;
    context.quantifierCounter42--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3}))|...
 *              ^^^^^^
 */
const greedyQuantifier0402 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter43++;

  if (context.quantifierCounter43 === 1) {
    return fiber0400(start, str, context);
  }

  const tryDeeperResult = fiber0401(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0400(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter43--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3}))|...
 *              ^^^^^^
 */
const greedyQuantifier0409 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter43++;

  if (context.quantifierCounter43 === 1) {
    return fiber0407(start, str, context);
  }

  const tryDeeperResult = fiber0408(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0407(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter43--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)){3}))|...
 *              ^^^^^^
 */
const greedyQuantifier0416 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter43++;

  if (context.quantifierCounter43 === 1) {
    return fiber0414(start, str, context);
  }

  const tryDeeperResult = fiber0415(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0414(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter43--;
  }
  return followUpResult;
};
/*
 * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
 *              ^^^^^^
 */
const greedyQuantifier0423 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter44++;

  if (context.quantifierCounter44 === 1) {
    return fiber0421(start, str, context);
  }

  const tryDeeperResult = fiber0422(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const followUpResult = fiber0421(start, str, context);

  if (followUpResult === -1) {
    context.quantifierCounter44--;
  }
  return followUpResult;
};
/*
 * ...}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0426 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter45++;

  if (context.quantifierCounter45 === 5) {
    return fiber0396(start, str, context);
  }

  const groupMarkerStartCopy76 = context.groupMarkerStart76;
  const groupMarkerEndCopy76 = context.groupMarkerEnd76;
  const tryDeeperResult = fiber0429(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  context.groupMarkerStart76 = groupMarkerStartCopy76;
  context.groupMarkerEnd76 = groupMarkerEndCopy76;

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy6 = context.groupMarkerStart6;
  const groupMarkerEndCopy6 = context.groupMarkerEnd6;
  const groupMarkerStartCopy7 = context.groupMarkerStart7;
  const groupMarkerEndCopy7 = context.groupMarkerEnd7;
  const groupMarkerStartCopy71 = context.groupMarkerStart71;
  const groupMarkerEndCopy71 = context.groupMarkerEnd71;
  const groupMarkerStartCopy72 = context.groupMarkerStart72;
  const groupMarkerEndCopy72 = context.groupMarkerEnd72;
  const groupMarkerStartCopy75 = context.groupMarkerStart75;
  const groupMarkerEndCopy75 = context.groupMarkerEnd75;
  const groupMarkerStartCopy77 = context.groupMarkerStart77;
  const groupMarkerEndCopy77 = context.groupMarkerEnd77;
  const groupMarkerStartCopy78 = context.groupMarkerStart78;
  const groupMarkerEndCopy78 = context.groupMarkerEnd78;
  const groupMarkerStartCopy79 = context.groupMarkerStart79;
  const groupMarkerEndCopy79 = context.groupMarkerEnd79;
  const groupMarkerStartCopy80 = context.groupMarkerStart80;
  const groupMarkerEndCopy80 = context.groupMarkerEnd80;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0396(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart71 = groupMarkerStartCopy71;
    context.groupMarkerEnd71 = groupMarkerEndCopy71;
    context.groupMarkerStart72 = groupMarkerStartCopy72;
    context.groupMarkerEnd72 = groupMarkerEndCopy72;
    context.groupMarkerStart75 = groupMarkerStartCopy75;
    context.groupMarkerEnd75 = groupMarkerEndCopy75;
    context.groupMarkerStart77 = groupMarkerStartCopy77;
    context.groupMarkerEnd77 = groupMarkerEndCopy77;
    context.groupMarkerStart78 = groupMarkerStartCopy78;
    context.groupMarkerEnd78 = groupMarkerEndCopy78;
    context.groupMarkerStart79 = groupMarkerStartCopy79;
    context.groupMarkerEnd79 = groupMarkerEndCopy79;
    context.groupMarkerStart80 = groupMarkerStartCopy80;
    context.groupMarkerEnd80 = groupMarkerEndCopy80;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
    context.quantifierCounter45--;
  }
  return followUpResult;
};
/*
 * ...{1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((2...
 *              ^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0428 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter46++;

  if (context.quantifierCounter46 === 4) {
    return fiber0425(start, str, context);
  }

  const tryDeeperResult = fiber0427(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  if (context.quantifierCounter46 < 1) {
    context.quantifierCounter46--;
    return -1;
  }

  const groupMarkerStartCopy76 = context.groupMarkerStart76;
  const groupMarkerEndCopy76 = context.groupMarkerEnd76;

  const followUpResult = fiber0425(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart76 = groupMarkerStartCopy76;
    context.groupMarkerEnd76 = groupMarkerEndCopy76;
    context.quantifierCounter46--;
  }
  return followUpResult;
};
/*
 * ...))\s✱$)|(^\s✱((([0-9A-F...
 *              ^^^
 */
const greedyQuantifier0435 = (
  start: number,
  str: string,
  context: Context
): number => {
  const tryDeeperResult = fiber0434(start, str, context);
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups

  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
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
  const groupMarkerStartCopy21 = context.groupMarkerStart21;
  const groupMarkerEndCopy21 = context.groupMarkerEnd21;
  const groupMarkerStartCopy22 = context.groupMarkerStart22;
  const groupMarkerEndCopy22 = context.groupMarkerEnd22;
  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;
  const groupMarkerStartCopy24 = context.groupMarkerStart24;
  const groupMarkerEndCopy24 = context.groupMarkerEnd24;
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
  const groupMarkerStartCopy30 = context.groupMarkerStart30;
  const groupMarkerEndCopy30 = context.groupMarkerEnd30;
  const groupMarkerStartCopy31 = context.groupMarkerStart31;
  const groupMarkerEndCopy31 = context.groupMarkerEnd31;
  const groupMarkerStartCopy32 = context.groupMarkerStart32;
  const groupMarkerEndCopy32 = context.groupMarkerEnd32;
  const groupMarkerStartCopy33 = context.groupMarkerStart33;
  const groupMarkerEndCopy33 = context.groupMarkerEnd33;
  const groupMarkerStartCopy34 = context.groupMarkerStart34;
  const groupMarkerEndCopy34 = context.groupMarkerEnd34;
  const groupMarkerStartCopy35 = context.groupMarkerStart35;
  const groupMarkerEndCopy35 = context.groupMarkerEnd35;
  const groupMarkerStartCopy36 = context.groupMarkerStart36;
  const groupMarkerEndCopy36 = context.groupMarkerEnd36;
  const groupMarkerStartCopy37 = context.groupMarkerStart37;
  const groupMarkerEndCopy37 = context.groupMarkerEnd37;
  const groupMarkerStartCopy38 = context.groupMarkerStart38;
  const groupMarkerEndCopy38 = context.groupMarkerEnd38;
  const groupMarkerStartCopy39 = context.groupMarkerStart39;
  const groupMarkerEndCopy39 = context.groupMarkerEnd39;
  const groupMarkerStartCopy40 = context.groupMarkerStart40;
  const groupMarkerEndCopy40 = context.groupMarkerEnd40;
  const groupMarkerStartCopy41 = context.groupMarkerStart41;
  const groupMarkerEndCopy41 = context.groupMarkerEnd41;
  const groupMarkerStartCopy42 = context.groupMarkerStart42;
  const groupMarkerEndCopy42 = context.groupMarkerEnd42;
  const groupMarkerStartCopy43 = context.groupMarkerStart43;
  const groupMarkerEndCopy43 = context.groupMarkerEnd43;
  const groupMarkerStartCopy44 = context.groupMarkerStart44;
  const groupMarkerEndCopy44 = context.groupMarkerEnd44;
  const groupMarkerStartCopy45 = context.groupMarkerStart45;
  const groupMarkerEndCopy45 = context.groupMarkerEnd45;
  const groupMarkerStartCopy46 = context.groupMarkerStart46;
  const groupMarkerEndCopy46 = context.groupMarkerEnd46;
  const groupMarkerStartCopy47 = context.groupMarkerStart47;
  const groupMarkerEndCopy47 = context.groupMarkerEnd47;
  const groupMarkerStartCopy48 = context.groupMarkerStart48;
  const groupMarkerEndCopy48 = context.groupMarkerEnd48;
  const groupMarkerStartCopy49 = context.groupMarkerStart49;
  const groupMarkerEndCopy49 = context.groupMarkerEnd49;
  const groupMarkerStartCopy50 = context.groupMarkerStart50;
  const groupMarkerEndCopy50 = context.groupMarkerEnd50;
  const groupMarkerStartCopy51 = context.groupMarkerStart51;
  const groupMarkerEndCopy51 = context.groupMarkerEnd51;
  const groupMarkerStartCopy52 = context.groupMarkerStart52;
  const groupMarkerEndCopy52 = context.groupMarkerEnd52;
  const groupMarkerStartCopy53 = context.groupMarkerStart53;
  const groupMarkerEndCopy53 = context.groupMarkerEnd53;
  const groupMarkerStartCopy54 = context.groupMarkerStart54;
  const groupMarkerEndCopy54 = context.groupMarkerEnd54;
  const groupMarkerStartCopy55 = context.groupMarkerStart55;
  const groupMarkerEndCopy55 = context.groupMarkerEnd55;
  const groupMarkerStartCopy56 = context.groupMarkerStart56;
  const groupMarkerEndCopy56 = context.groupMarkerEnd56;
  const groupMarkerStartCopy57 = context.groupMarkerStart57;
  const groupMarkerEndCopy57 = context.groupMarkerEnd57;
  const groupMarkerStartCopy58 = context.groupMarkerStart58;
  const groupMarkerEndCopy58 = context.groupMarkerEnd58;
  const groupMarkerStartCopy59 = context.groupMarkerStart59;
  const groupMarkerEndCopy59 = context.groupMarkerEnd59;
  const groupMarkerStartCopy60 = context.groupMarkerStart60;
  const groupMarkerEndCopy60 = context.groupMarkerEnd60;
  const groupMarkerStartCopy61 = context.groupMarkerStart61;
  const groupMarkerEndCopy61 = context.groupMarkerEnd61;
  const groupMarkerStartCopy62 = context.groupMarkerStart62;
  const groupMarkerEndCopy62 = context.groupMarkerEnd62;
  const groupMarkerStartCopy63 = context.groupMarkerStart63;
  const groupMarkerEndCopy63 = context.groupMarkerEnd63;
  const groupMarkerStartCopy64 = context.groupMarkerStart64;
  const groupMarkerEndCopy64 = context.groupMarkerEnd64;
  const groupMarkerStartCopy65 = context.groupMarkerStart65;
  const groupMarkerEndCopy65 = context.groupMarkerEnd65;
  const groupMarkerStartCopy66 = context.groupMarkerStart66;
  const groupMarkerEndCopy66 = context.groupMarkerEnd66;
  const groupMarkerStartCopy67 = context.groupMarkerStart67;
  const groupMarkerEndCopy67 = context.groupMarkerEnd67;
  const groupMarkerStartCopy68 = context.groupMarkerStart68;
  const groupMarkerEndCopy68 = context.groupMarkerEnd68;
  const groupMarkerStartCopy69 = context.groupMarkerStart69;
  const groupMarkerEndCopy69 = context.groupMarkerEnd69;
  const groupMarkerStartCopy70 = context.groupMarkerStart70;
  const groupMarkerEndCopy70 = context.groupMarkerEnd70;
  const groupMarkerStartCopy71 = context.groupMarkerStart71;
  const groupMarkerEndCopy71 = context.groupMarkerEnd71;
  const groupMarkerStartCopy72 = context.groupMarkerStart72;
  const groupMarkerEndCopy72 = context.groupMarkerEnd72;
  const groupMarkerStartCopy73 = context.groupMarkerStart73;
  const groupMarkerEndCopy73 = context.groupMarkerEnd73;
  const groupMarkerStartCopy74 = context.groupMarkerStart74;
  const groupMarkerEndCopy74 = context.groupMarkerEnd74;
  const groupMarkerStartCopy75 = context.groupMarkerStart75;
  const groupMarkerEndCopy75 = context.groupMarkerEnd75;
  const groupMarkerStartCopy76 = context.groupMarkerStart76;
  const groupMarkerEndCopy76 = context.groupMarkerEnd76;
  const groupMarkerStartCopy77 = context.groupMarkerStart77;
  const groupMarkerEndCopy77 = context.groupMarkerEnd77;
  const groupMarkerStartCopy78 = context.groupMarkerStart78;
  const groupMarkerEndCopy78 = context.groupMarkerEnd78;
  const groupMarkerStartCopy79 = context.groupMarkerStart79;
  const groupMarkerEndCopy79 = context.groupMarkerEnd79;
  const groupMarkerStartCopy80 = context.groupMarkerStart80;
  const groupMarkerEndCopy80 = context.groupMarkerEnd80;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;

  const followUpResult = fiber0433(start, str, context);

  if (followUpResult === -1) {
    context.groupMarkerStart0 = groupMarkerStartCopy0;
    context.groupMarkerEnd0 = groupMarkerEndCopy0;
    context.groupMarkerStart6 = groupMarkerStartCopy6;
    context.groupMarkerEnd6 = groupMarkerEndCopy6;
    context.groupMarkerStart7 = groupMarkerStartCopy7;
    context.groupMarkerEnd7 = groupMarkerEndCopy7;
    context.groupMarkerStart8 = groupMarkerStartCopy8;
    context.groupMarkerEnd8 = groupMarkerEndCopy8;
    context.groupMarkerStart9 = groupMarkerStartCopy9;
    context.groupMarkerEnd9 = groupMarkerEndCopy9;
    context.groupMarkerStart10 = groupMarkerStartCopy10;
    context.groupMarkerEnd10 = groupMarkerEndCopy10;
    context.groupMarkerStart11 = groupMarkerStartCopy11;
    context.groupMarkerEnd11 = groupMarkerEndCopy11;
    context.groupMarkerStart12 = groupMarkerStartCopy12;
    context.groupMarkerEnd12 = groupMarkerEndCopy12;
    context.groupMarkerStart13 = groupMarkerStartCopy13;
    context.groupMarkerEnd13 = groupMarkerEndCopy13;
    context.groupMarkerStart14 = groupMarkerStartCopy14;
    context.groupMarkerEnd14 = groupMarkerEndCopy14;
    context.groupMarkerStart15 = groupMarkerStartCopy15;
    context.groupMarkerEnd15 = groupMarkerEndCopy15;
    context.groupMarkerStart16 = groupMarkerStartCopy16;
    context.groupMarkerEnd16 = groupMarkerEndCopy16;
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
    context.groupMarkerStart24 = groupMarkerStartCopy24;
    context.groupMarkerEnd24 = groupMarkerEndCopy24;
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
    context.groupMarkerStart30 = groupMarkerStartCopy30;
    context.groupMarkerEnd30 = groupMarkerEndCopy30;
    context.groupMarkerStart31 = groupMarkerStartCopy31;
    context.groupMarkerEnd31 = groupMarkerEndCopy31;
    context.groupMarkerStart32 = groupMarkerStartCopy32;
    context.groupMarkerEnd32 = groupMarkerEndCopy32;
    context.groupMarkerStart33 = groupMarkerStartCopy33;
    context.groupMarkerEnd33 = groupMarkerEndCopy33;
    context.groupMarkerStart34 = groupMarkerStartCopy34;
    context.groupMarkerEnd34 = groupMarkerEndCopy34;
    context.groupMarkerStart35 = groupMarkerStartCopy35;
    context.groupMarkerEnd35 = groupMarkerEndCopy35;
    context.groupMarkerStart36 = groupMarkerStartCopy36;
    context.groupMarkerEnd36 = groupMarkerEndCopy36;
    context.groupMarkerStart37 = groupMarkerStartCopy37;
    context.groupMarkerEnd37 = groupMarkerEndCopy37;
    context.groupMarkerStart38 = groupMarkerStartCopy38;
    context.groupMarkerEnd38 = groupMarkerEndCopy38;
    context.groupMarkerStart39 = groupMarkerStartCopy39;
    context.groupMarkerEnd39 = groupMarkerEndCopy39;
    context.groupMarkerStart40 = groupMarkerStartCopy40;
    context.groupMarkerEnd40 = groupMarkerEndCopy40;
    context.groupMarkerStart41 = groupMarkerStartCopy41;
    context.groupMarkerEnd41 = groupMarkerEndCopy41;
    context.groupMarkerStart42 = groupMarkerStartCopy42;
    context.groupMarkerEnd42 = groupMarkerEndCopy42;
    context.groupMarkerStart43 = groupMarkerStartCopy43;
    context.groupMarkerEnd43 = groupMarkerEndCopy43;
    context.groupMarkerStart44 = groupMarkerStartCopy44;
    context.groupMarkerEnd44 = groupMarkerEndCopy44;
    context.groupMarkerStart45 = groupMarkerStartCopy45;
    context.groupMarkerEnd45 = groupMarkerEndCopy45;
    context.groupMarkerStart46 = groupMarkerStartCopy46;
    context.groupMarkerEnd46 = groupMarkerEndCopy46;
    context.groupMarkerStart47 = groupMarkerStartCopy47;
    context.groupMarkerEnd47 = groupMarkerEndCopy47;
    context.groupMarkerStart48 = groupMarkerStartCopy48;
    context.groupMarkerEnd48 = groupMarkerEndCopy48;
    context.groupMarkerStart49 = groupMarkerStartCopy49;
    context.groupMarkerEnd49 = groupMarkerEndCopy49;
    context.groupMarkerStart50 = groupMarkerStartCopy50;
    context.groupMarkerEnd50 = groupMarkerEndCopy50;
    context.groupMarkerStart51 = groupMarkerStartCopy51;
    context.groupMarkerEnd51 = groupMarkerEndCopy51;
    context.groupMarkerStart52 = groupMarkerStartCopy52;
    context.groupMarkerEnd52 = groupMarkerEndCopy52;
    context.groupMarkerStart53 = groupMarkerStartCopy53;
    context.groupMarkerEnd53 = groupMarkerEndCopy53;
    context.groupMarkerStart54 = groupMarkerStartCopy54;
    context.groupMarkerEnd54 = groupMarkerEndCopy54;
    context.groupMarkerStart55 = groupMarkerStartCopy55;
    context.groupMarkerEnd55 = groupMarkerEndCopy55;
    context.groupMarkerStart56 = groupMarkerStartCopy56;
    context.groupMarkerEnd56 = groupMarkerEndCopy56;
    context.groupMarkerStart57 = groupMarkerStartCopy57;
    context.groupMarkerEnd57 = groupMarkerEndCopy57;
    context.groupMarkerStart58 = groupMarkerStartCopy58;
    context.groupMarkerEnd58 = groupMarkerEndCopy58;
    context.groupMarkerStart59 = groupMarkerStartCopy59;
    context.groupMarkerEnd59 = groupMarkerEndCopy59;
    context.groupMarkerStart60 = groupMarkerStartCopy60;
    context.groupMarkerEnd60 = groupMarkerEndCopy60;
    context.groupMarkerStart61 = groupMarkerStartCopy61;
    context.groupMarkerEnd61 = groupMarkerEndCopy61;
    context.groupMarkerStart62 = groupMarkerStartCopy62;
    context.groupMarkerEnd62 = groupMarkerEndCopy62;
    context.groupMarkerStart63 = groupMarkerStartCopy63;
    context.groupMarkerEnd63 = groupMarkerEndCopy63;
    context.groupMarkerStart64 = groupMarkerStartCopy64;
    context.groupMarkerEnd64 = groupMarkerEndCopy64;
    context.groupMarkerStart65 = groupMarkerStartCopy65;
    context.groupMarkerEnd65 = groupMarkerEndCopy65;
    context.groupMarkerStart66 = groupMarkerStartCopy66;
    context.groupMarkerEnd66 = groupMarkerEndCopy66;
    context.groupMarkerStart67 = groupMarkerStartCopy67;
    context.groupMarkerEnd67 = groupMarkerEndCopy67;
    context.groupMarkerStart68 = groupMarkerStartCopy68;
    context.groupMarkerEnd68 = groupMarkerEndCopy68;
    context.groupMarkerStart69 = groupMarkerStartCopy69;
    context.groupMarkerEnd69 = groupMarkerEndCopy69;
    context.groupMarkerStart70 = groupMarkerStartCopy70;
    context.groupMarkerEnd70 = groupMarkerEndCopy70;
    context.groupMarkerStart71 = groupMarkerStartCopy71;
    context.groupMarkerEnd71 = groupMarkerEndCopy71;
    context.groupMarkerStart72 = groupMarkerStartCopy72;
    context.groupMarkerEnd72 = groupMarkerEndCopy72;
    context.groupMarkerStart73 = groupMarkerStartCopy73;
    context.groupMarkerEnd73 = groupMarkerEndCopy73;
    context.groupMarkerStart74 = groupMarkerStartCopy74;
    context.groupMarkerEnd74 = groupMarkerEndCopy74;
    context.groupMarkerStart75 = groupMarkerStartCopy75;
    context.groupMarkerEnd75 = groupMarkerEndCopy75;
    context.groupMarkerStart76 = groupMarkerStartCopy76;
    context.groupMarkerEnd76 = groupMarkerEndCopy76;
    context.groupMarkerStart77 = groupMarkerStartCopy77;
    context.groupMarkerEnd77 = groupMarkerEndCopy77;
    context.groupMarkerStart78 = groupMarkerStartCopy78;
    context.groupMarkerEnd78 = groupMarkerEndCopy78;
    context.groupMarkerStart79 = groupMarkerStartCopy79;
    context.groupMarkerEnd79 = groupMarkerEndCopy79;
    context.groupMarkerStart80 = groupMarkerStartCopy80;
    context.groupMarkerEnd80 = groupMarkerEndCopy80;
    context.groupMarkerStart81 = groupMarkerStartCopy81;
    context.groupMarkerEnd81 = groupMarkerEndCopy81;
  }
  return followUpResult;
};
