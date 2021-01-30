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
}

// Regex optimized to: /^((\s*((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s*)|(\s*((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){2}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){1}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))(%..*)?\s*))$/

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
  };

  // startAnchored
  const min = 0;
  const max = 0;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0368(i, str, context);
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
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){2}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){1}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))(%..✱)?\s✱))$/
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  /*
   * endAnchor
   * .....✱)?\s✱))$/
   *              ^
   */
  if (i !== str.length) {
    return -1;
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...5]))\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart5 = context.groupMarkerStartTemp5;
  context.groupMarkerEnd5 = i;
  /*
   * groupEndMarker
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱(...
   *        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  /*
   * nonBacktrackingQuantifier
   * ...|5[0-5])))\s✱)|(\s✱((([...
   *              ^^^
   */
  while (true) {
    const wrappedResult = fiber0003(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupEndMarker
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱((([0...
   *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  return fiber0001(i, str, context);
};
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|5[0-5])))\s✱)|(\s✱(((...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

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
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...]))\.){3}([0-9]|[1-9][0-9...
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
  return fiber0002(i, str, context);
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...{3}([0-9]|[1-9][0-9]|1[0-...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 49;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0002(i, str, context);
};
const fiber0006 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...1-9][0-9]|1[0-9][0-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0002(i, str, context);
};
const fiber0007 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9][0-9]|2(?:[0-4][0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s...
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0008(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0009(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0002(i, str, context);
};
const fiber0008 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...[0-9]|2(?:[0-4][0-9]|5[0-...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0009 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0-4][0-9]|5[0-5])))\s...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0010 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart4 = context.groupMarkerStartTemp4;
  context.groupMarkerEnd4 = i;
  /*
   * charOrSet
   * ...]|5[0-5]))\.){3}([0-9]...
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
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-9]|...
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  /*
   * groupStartMarker
   * ...5]))\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp5 = i;
  /*
   * disjunction
   * ...5]))\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerStartCopy0 = context.groupMarkerStart0;
  const groupMarkerEndCopy0 = context.groupMarkerEnd0;
  const groupMarkerStartCopy1 = context.groupMarkerStart1;
  const groupMarkerEndCopy1 = context.groupMarkerEnd1;
  const groupMarkerStartCopy2 = context.groupMarkerStart2;
  const groupMarkerEndCopy2 = context.groupMarkerEnd2;
  const groupMarkerStartCopy5 = context.groupMarkerStart5;
  const groupMarkerEndCopy5 = context.groupMarkerEnd5;
  const length0 = fiber0004(i, str, context);
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
  const length1 = fiber0005(i, str, context);
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
  const length2 = fiber0006(i, str, context);
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
  const length3 = fiber0007(i, str, context);
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
  return -1;
};
const fiber0011 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /^((\s✱((([0-9]|[1-9][0-9...
   *           ^^^^^
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
  return fiber0010(i, str, context);
};
const fiber0012 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...✱((([0-9]|[1-9][0-9]|1[0-...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 49;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0010(i, str, context);
};
const fiber0013 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...1-9][0-9]|1[0-9][0-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0010(i, str, context);
};
const fiber0014 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9][0-9]|2(?:[0-4][0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0...
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0015(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0016(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0010(i, str, context);
};
const fiber0015 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...[0-9]|2(?:[0-4][0-9]|5[0-...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0016 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0-4][0-9]|5[0-5]))\.)...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0017 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart4 = context.groupMarkerStartTemp4;
  context.groupMarkerEnd4 = i;
  /*
   * charOrSet
   * ...]|5[0-5]))\.){3}([0-9]...
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
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-9]|...
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  /*
   * groupStartMarker
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-9]|...
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * groupStartMarker
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp4 = i;
  /*
   * disjunction
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0011(i, str, context);
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
  const length1 = fiber0012(i, str, context);
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
  const length2 = fiber0013(i, str, context);
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
  const length3 = fiber0014(i, str, context);
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
  return -1;
};
const fiber0018 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /^((\s✱((([0-9]|[1-9][0-9...
   *           ^^^^^
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
  return fiber0017(i, str, context);
};
const fiber0019 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...✱((([0-9]|[1-9][0-9]|1[0-...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 49;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0017(i, str, context);
};
const fiber0020 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...1-9][0-9]|1[0-9][0-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0017(i, str, context);
};
const fiber0021 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9][0-9]|2(?:[0-4][0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0...
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0022(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0023(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0017(i, str, context);
};
const fiber0022 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...[0-9]|2(?:[0-4][0-9]|5[0-...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0023 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0-4][0-9]|5[0-5]))\.)...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0024 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart4 = context.groupMarkerStartTemp4;
  context.groupMarkerEnd4 = i;
  /*
   * charOrSet
   * ...]|5[0-5]))\.){3}([0-9]...
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
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-9]|...
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  /*
   * groupStartMarker
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-9]|...
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * groupStartMarker
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp4 = i;
  /*
   * disjunction
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  return -1;
};
const fiber0025 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /^((\s✱((([0-9]|[1-9][0-9...
   *           ^^^^^
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
  return fiber0024(i, str, context);
};
const fiber0026 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...✱((([0-9]|[1-9][0-9]|1[0-...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 49;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0024(i, str, context);
};
const fiber0027 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...1-9][0-9]|1[0-9][0-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0024(i, str, context);
};
const fiber0028 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9][0-9]|2(?:[0-4][0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0...
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0029(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0030(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0024(i, str, context);
};
const fiber0029 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...[0-9]|2(?:[0-4][0-9]|5[0-...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0030 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0-4][0-9]|5[0-5]))\.)...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0031 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱((([0...
   *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * nonBacktrackingQuantifier
   * /^((\s✱((([0-9]|[...
   *     ^^^
   */
  while (true) {
    const wrappedResult = fiber0032(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupStartMarker
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱(...
   *        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * groupStartMarker
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-9]|...
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * groupStartMarker
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp4 = i;
  /*
   * disjunction
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0025(i, str, context);
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
  const length1 = fiber0026(i, str, context);
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
  const length2 = fiber0027(i, str, context);
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
  const length3 = fiber0028(i, str, context);
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
  return -1;
};
const fiber0032 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /^((\s✱((([0-9]|...
   *     ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

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
const fiber0033 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * ...)))(%..✱)?\s✱))$/
   *              ^^^
   */
  while (true) {
    const wrappedResult = fiber0034(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupEndMarker
   * ...5])))\s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){2}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){1}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))(%..✱)?\s✱))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart6 = context.groupMarkerStartTemp6;
  context.groupMarkerEnd6 = i;
  return fiber0001(i, str, context);
};
const fiber0034 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...)))(%..✱)?\s✱))$/
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

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
const fiber0035 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...{3}))|:)))(%..✱)?\s✱))$/
   *              ^^^^^^
   */
  context.groupMarkerStart81 = context.groupMarkerStartTemp81;
  context.groupMarkerEnd81 = i;
  return greedyQuantifier0036(i, str, context);
};
const fiber0037 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...))|:)))(%..✱)?\s✱))$/
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 13) {
    result0 = charCode0 === 10 || charCode0 === 13;
  } else {
    if (charCode0 <= 8233) {
      result0 = charCode0 >= 8232;
    } else {
      result0 = false;
    }
  }
  if (result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0038 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...{3}))|:)))(%..✱)?\s✱))$/
   *              ^^^^^^
   */
  context.groupMarkerStartTemp81 = i;
  /*
   * charSequence
   * ...3}))|:)))(%..✱)?\s✱))$/
   *              ^
   */
  const iAfterMatch1 = i + 2;
  if (iAfterMatch1 > str.length) {
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

    if (charCode1 <= 13) {
      result1 = charCode1 === 10 || charCode1 === 13;
    } else {
      if (charCode1 <= 8233) {
        result1 = charCode1 >= 8232;
      } else {
        result1 = false;
      }
    }
    if (result1) {
      return -1;
    }

    i = iAfterMatch1;
  }
  /*
   * backtrackingFixedLengthQuantifier
   * ...))|:)))(%..✱)?\s✱))$/
   *              ^^
   */
  let matches2 = 0;

  while (true) {
    const wrappedResult = fiber0037(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
      matches2++;
    }
  }

  // needs followUp & forkingFiber
  while (matches2 >= 0) {
    const directFollowUpResult2 = fiber0035(i, str, context);

    if (directFollowUpResult2 !== -1) {
      return directFollowUpResult2;
    }

    matches2--;
    i -= 1;
  }

  return -1;
};
const fiber0039 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...)\s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){2}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){1}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))(%..✱)?\s✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart7 = context.groupMarkerStartTemp7;
  context.groupMarkerEnd7 = i;
  /*
   * quantifierStarter
   * ...{3}))|:)))(%..✱)?\s✱))$/
   *              ^^^^^^^
   */
  let matchCountCopygreedyQuantifier0036 = context.quantifierCounter0;
  context.quantifierCounter0 = -1;
  const cursorAfterQuantifier = greedyQuantifier0036(i, str, context);
  context.quantifierCounter0 = matchCountCopygreedyQuantifier0036;

  return cursorAfterQuantifier;
};
const fiber0040 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...\s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp8 = i;
  /*
   * groupStartMarker
   * ...s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp9 = i;
  /*
   * charOrSet
   * ...✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  if (charCode2 <= 70) {
    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = charCode2 >= 65;
    }
  } else {
    if (charCode2 <= 102) {
      result2 = charCode2 >= 97;
    } else {
      result2 = false;
    }
  }
  if (!result2) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches3 = 0;
  while (true) {
    const wrappedResult = fiber0050(i, str, context);

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
   * charOrSet
   * ...Fa-f]{0,3}:){7}([0-9A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4: boolean;

  result4 = charCode4 === 58;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart9 = context.groupMarkerStartTemp9;
  context.groupMarkerEnd9 = i;
  /*
   * groupStartMarker
   * ...s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp9 = i;
  /*
   * charOrSet
   * ...✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7: boolean;

  if (charCode7 <= 70) {
    if (charCode7 <= 57) {
      result7 = charCode7 >= 48;
    } else {
      result7 = charCode7 >= 65;
    }
  } else {
    if (charCode7 <= 102) {
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
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches8 = 0;
  while (true) {
    const wrappedResult = fiber0049(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches8++;

      if (matches8 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){7}([0-9A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode9 = str.charCodeAt(i);
  let result9: boolean;

  result9 = charCode9 === 58;

  if (!result9) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart9 = context.groupMarkerStartTemp9;
  context.groupMarkerEnd9 = i;
  /*
   * groupStartMarker
   * ...s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp9 = i;
  /*
   * charOrSet
   * ...✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode12 = str.charCodeAt(i);
  let result12: boolean;

  if (charCode12 <= 70) {
    if (charCode12 <= 57) {
      result12 = charCode12 >= 48;
    } else {
      result12 = charCode12 >= 65;
    }
  } else {
    if (charCode12 <= 102) {
      result12 = charCode12 >= 97;
    } else {
      result12 = false;
    }
  }
  if (!result12) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches13 = 0;
  while (true) {
    const wrappedResult = fiber0048(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches13++;

      if (matches13 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){7}([0-9A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode14 = str.charCodeAt(i);
  let result14: boolean;

  result14 = charCode14 === 58;

  if (!result14) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart9 = context.groupMarkerStartTemp9;
  context.groupMarkerEnd9 = i;
  /*
   * groupStartMarker
   * ...s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp9 = i;
  /*
   * charOrSet
   * ...✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode17 = str.charCodeAt(i);
  let result17: boolean;

  if (charCode17 <= 70) {
    if (charCode17 <= 57) {
      result17 = charCode17 >= 48;
    } else {
      result17 = charCode17 >= 65;
    }
  } else {
    if (charCode17 <= 102) {
      result17 = charCode17 >= 97;
    } else {
      result17 = false;
    }
  }
  if (!result17) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches18 = 0;
  while (true) {
    const wrappedResult = fiber0047(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches18++;

      if (matches18 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){7}([0-9A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode19 = str.charCodeAt(i);
  let result19: boolean;

  result19 = charCode19 === 58;

  if (!result19) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart9 = context.groupMarkerStartTemp9;
  context.groupMarkerEnd9 = i;
  /*
   * groupStartMarker
   * ...s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp9 = i;
  /*
   * charOrSet
   * ...✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode22 = str.charCodeAt(i);
  let result22: boolean;

  if (charCode22 <= 70) {
    if (charCode22 <= 57) {
      result22 = charCode22 >= 48;
    } else {
      result22 = charCode22 >= 65;
    }
  } else {
    if (charCode22 <= 102) {
      result22 = charCode22 >= 97;
    } else {
      result22 = false;
    }
  }
  if (!result22) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches23 = 0;
  while (true) {
    const wrappedResult = fiber0046(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches23++;

      if (matches23 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){7}([0-9A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode24 = str.charCodeAt(i);
  let result24: boolean;

  result24 = charCode24 === 58;

  if (!result24) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart9 = context.groupMarkerStartTemp9;
  context.groupMarkerEnd9 = i;
  /*
   * groupStartMarker
   * ...s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp9 = i;
  /*
   * charOrSet
   * ...✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode27 = str.charCodeAt(i);
  let result27: boolean;

  if (charCode27 <= 70) {
    if (charCode27 <= 57) {
      result27 = charCode27 >= 48;
    } else {
      result27 = charCode27 >= 65;
    }
  } else {
    if (charCode27 <= 102) {
      result27 = charCode27 >= 97;
    } else {
      result27 = false;
    }
  }
  if (!result27) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches28 = 0;
  while (true) {
    const wrappedResult = fiber0045(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches28++;

      if (matches28 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){7}([0-9A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode29 = str.charCodeAt(i);
  let result29: boolean;

  result29 = charCode29 === 58;

  if (!result29) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart9 = context.groupMarkerStartTemp9;
  context.groupMarkerEnd9 = i;
  /*
   * groupStartMarker
   * ...s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp9 = i;
  /*
   * charOrSet
   * ...✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode32 = str.charCodeAt(i);
  let result32: boolean;

  if (charCode32 <= 70) {
    if (charCode32 <= 57) {
      result32 = charCode32 >= 48;
    } else {
      result32 = charCode32 >= 65;
    }
  } else {
    if (charCode32 <= 102) {
      result32 = charCode32 >= 97;
    } else {
      result32 = false;
    }
  }
  if (!result32) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches33 = 0;
  while (true) {
    const wrappedResult = fiber0044(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches33++;

      if (matches33 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){7}([0-9A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode34 = str.charCodeAt(i);
  let result34: boolean;

  result34 = charCode34 === 58;

  if (!result34) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart9 = context.groupMarkerStartTemp9;
  context.groupMarkerEnd9 = i;
  /*
   * groupStartMarker
   * ...{0,3}:){7}([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp10 = i;
  /*
   * nonBacktrackingDisjunction
   * ...{0,3}:){7}([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction37: {
    const length0 = fiber0041(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction37;
    }
    const length1 = fiber0043(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction37;
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...{0,3}:){7}([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart10 = context.groupMarkerStartTemp10;
  context.groupMarkerEnd10 = i;
  /*
   * groupEndMarker
   * ...\s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart8 = context.groupMarkerStartTemp8;
  context.groupMarkerEnd8 = i;
  return fiber0039(i, str, context);
};
const fiber0041 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0,3}:){7}([0-9A-Fa-f][0-9A-Fa-f...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0042(i, str, context);

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
  return i;
};
const fiber0042 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|...
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
const fiber0043 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...a-f]{0,3}|:))|(([0-9A...
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
const fiber0044 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}...
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
const fiber0045 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}...
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
const fiber0047 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}...
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
const fiber0048 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}...
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
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}...
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
const fiber0050 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}...
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
   * ...{0,3}:){6}(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart13 = context.groupMarkerStartTemp13;
  context.groupMarkerEnd13 = i;
  /*
   * groupEndMarker
   * ...{0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart11 = context.groupMarkerStartTemp11;
  context.groupMarkerEnd11 = i;
  return fiber0039(i, str, context);
};
const fiber0052 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0,3}:){6}(:[0-9A-Fa-f...
   *              ^
   */
  const iAfterMatch0 = i + 2;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0053(i, str, context);

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
  return fiber0051(i, str, context);
};
const fiber0053 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(...
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
const fiber0054 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart17 = context.groupMarkerStartTemp17;
  context.groupMarkerEnd17 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart16 = context.groupMarkerStartTemp16;
  context.groupMarkerEnd16 = i;
  /*
   * groupEndMarker
   * ...a-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart14 = context.groupMarkerStartTemp14;
  context.groupMarkerEnd14 = i;
  return fiber0051(i, str, context);
};
const fiber0055 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0056(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0057(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0054(i, str, context);
};
const fiber0056 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0057 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0058 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0054(i, str, context);
};
const fiber0059 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3})|:))...
   *              ^^
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
const fiber0060 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3})|...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0061 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3})|:...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0060(i, str, context);

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
    const directFollowUpResult0 = fiber0059(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0062 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart17 = context.groupMarkerStartTemp17;
  context.groupMarkerEnd17 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart16 = context.groupMarkerStartTemp16;
  context.groupMarkerEnd16 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp16 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 46;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp17 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy16 = context.groupMarkerStart16;
  const groupMarkerEndCopy16 = context.groupMarkerEnd16;
  const groupMarkerStartCopy17 = context.groupMarkerStart17;
  const groupMarkerEndCopy17 = context.groupMarkerEnd17;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0055(i, str, context);
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
  context.groupMarkerStart14 = groupMarkerStartCopy14;
  context.groupMarkerEnd14 = groupMarkerEndCopy14;
  context.groupMarkerStart16 = groupMarkerStartCopy16;
  context.groupMarkerEnd16 = groupMarkerEndCopy16;
  context.groupMarkerStart17 = groupMarkerStartCopy17;
  context.groupMarkerEnd17 = groupMarkerEndCopy17;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0058(i, str, context);
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
  context.groupMarkerStart16 = groupMarkerStartCopy16;
  context.groupMarkerEnd16 = groupMarkerEndCopy16;
  context.groupMarkerStart17 = groupMarkerStartCopy17;
  context.groupMarkerEnd17 = groupMarkerEndCopy17;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0061(i, str, context);
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
  context.groupMarkerStart14 = groupMarkerStartCopy14;
  context.groupMarkerEnd14 = groupMarkerEndCopy14;
  context.groupMarkerStart16 = groupMarkerStartCopy16;
  context.groupMarkerEnd16 = groupMarkerEndCopy16;
  context.groupMarkerStart17 = groupMarkerStartCopy17;
  context.groupMarkerEnd17 = groupMarkerEndCopy17;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0063 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0064(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0065(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0062(i, str, context);
};
const fiber0064 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0065 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0066 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0062(i, str, context);
};
const fiber0067 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3})|:))...
   *              ^^
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
  return fiber0062(i, str, context);
};
const fiber0068 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3})|...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0069 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3})|:...
   *              ^^^^^^
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
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart17 = context.groupMarkerStartTemp17;
  context.groupMarkerEnd17 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart16 = context.groupMarkerStartTemp16;
  context.groupMarkerEnd16 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp16 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 46;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp17 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy16 = context.groupMarkerStart16;
  const groupMarkerEndCopy16 = context.groupMarkerEnd16;
  const groupMarkerStartCopy17 = context.groupMarkerStart17;
  const groupMarkerEndCopy17 = context.groupMarkerEnd17;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0063(i, str, context);
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
  context.groupMarkerStart14 = groupMarkerStartCopy14;
  context.groupMarkerEnd14 = groupMarkerEndCopy14;
  context.groupMarkerStart16 = groupMarkerStartCopy16;
  context.groupMarkerEnd16 = groupMarkerEndCopy16;
  context.groupMarkerStart17 = groupMarkerStartCopy17;
  context.groupMarkerEnd17 = groupMarkerEndCopy17;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0066(i, str, context);
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
  context.groupMarkerStart16 = groupMarkerStartCopy16;
  context.groupMarkerEnd16 = groupMarkerEndCopy16;
  context.groupMarkerStart17 = groupMarkerStartCopy17;
  context.groupMarkerEnd17 = groupMarkerEndCopy17;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0069(i, str, context);
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
  context.groupMarkerStart14 = groupMarkerStartCopy14;
  context.groupMarkerEnd14 = groupMarkerEndCopy14;
  context.groupMarkerStart16 = groupMarkerStartCopy16;
  context.groupMarkerEnd16 = groupMarkerEndCopy16;
  context.groupMarkerStart17 = groupMarkerStartCopy17;
  context.groupMarkerEnd17 = groupMarkerEndCopy17;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0071 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0072(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0073(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0070(i, str, context);
};
const fiber0072 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0073 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0074 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0070(i, str, context);
};
const fiber0075 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3})|:))...
   *              ^^
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
  return fiber0070(i, str, context);
};
const fiber0076 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3})|...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0077 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3})|:...
   *              ^^^^^^
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
const fiber0078 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart15 = context.groupMarkerStartTemp15;
  context.groupMarkerEnd15 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp16 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 46;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp17 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy16 = context.groupMarkerStart16;
  const groupMarkerEndCopy16 = context.groupMarkerEnd16;
  const groupMarkerStartCopy17 = context.groupMarkerStart17;
  const groupMarkerEndCopy17 = context.groupMarkerEnd17;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0071(i, str, context);
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
  context.groupMarkerStart14 = groupMarkerStartCopy14;
  context.groupMarkerEnd14 = groupMarkerEndCopy14;
  context.groupMarkerStart16 = groupMarkerStartCopy16;
  context.groupMarkerEnd16 = groupMarkerEndCopy16;
  context.groupMarkerStart17 = groupMarkerStartCopy17;
  context.groupMarkerEnd17 = groupMarkerEndCopy17;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0074(i, str, context);
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
  context.groupMarkerStart16 = groupMarkerStartCopy16;
  context.groupMarkerEnd16 = groupMarkerEndCopy16;
  context.groupMarkerStart17 = groupMarkerStartCopy17;
  context.groupMarkerEnd17 = groupMarkerEndCopy17;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0077(i, str, context);
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
  context.groupMarkerStart14 = groupMarkerStartCopy14;
  context.groupMarkerEnd14 = groupMarkerEndCopy14;
  context.groupMarkerStart16 = groupMarkerStartCopy16;
  context.groupMarkerEnd16 = groupMarkerEndCopy16;
  context.groupMarkerStart17 = groupMarkerStartCopy17;
  context.groupMarkerEnd17 = groupMarkerEndCopy17;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0079 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...f]{0,3}|((2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0080(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0081(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0078(i, str, context);
};
const fiber0080 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...,3}|((2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0082 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0078(i, str, context);
};
const fiber0083 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)(\.(2(?:5...
   *              ^^
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
  return fiber0078(i, str, context);
};
const fiber0084 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0085 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(?...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0084(i, str, context);

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
    const directFollowUpResult0 = fiber0083(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0086 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...a-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp14 = i;
  /*
   * groupStartMarker
   * ...-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp15 = i;
  /*
   * disjunction
   * ...-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0079(i, str, context);
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
  const length1 = fiber0082(i, str, context);
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
  const length2 = fiber0085(i, str, context);
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
  return -1;
};
const fiber0087 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...?\d)){3})|:))|(([0-9A...
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
  return fiber0051(i, str, context);
};
const fiber0088 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...{0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp11 = i;
  /*
   * groupStartMarker
   * ...0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp12 = i;
  /*
   * charOrSet
   * ...,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  if (charCode2 <= 70) {
    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = charCode2 >= 65;
    }
  } else {
    if (charCode2 <= 102) {
      result2 = charCode2 >= 97;
    } else {
      result2 = false;
    }
  }
  if (!result2) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches3 = 0;
  while (true) {
    const wrappedResult = fiber0094(i, str, context);

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
   * charOrSet
   * ...Fa-f]{0,3}:){6}(:[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4: boolean;

  result4 = charCode4 === 58;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart12 = context.groupMarkerStartTemp12;
  context.groupMarkerEnd12 = i;
  /*
   * groupStartMarker
   * ...0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp12 = i;
  /*
   * charOrSet
   * ...,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7: boolean;

  if (charCode7 <= 70) {
    if (charCode7 <= 57) {
      result7 = charCode7 >= 48;
    } else {
      result7 = charCode7 >= 65;
    }
  } else {
    if (charCode7 <= 102) {
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
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches8 = 0;
  while (true) {
    const wrappedResult = fiber0093(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches8++;

      if (matches8 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){6}(:[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode9 = str.charCodeAt(i);
  let result9: boolean;

  result9 = charCode9 === 58;

  if (!result9) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart12 = context.groupMarkerStartTemp12;
  context.groupMarkerEnd12 = i;
  /*
   * groupStartMarker
   * ...0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp12 = i;
  /*
   * charOrSet
   * ...,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode12 = str.charCodeAt(i);
  let result12: boolean;

  if (charCode12 <= 70) {
    if (charCode12 <= 57) {
      result12 = charCode12 >= 48;
    } else {
      result12 = charCode12 >= 65;
    }
  } else {
    if (charCode12 <= 102) {
      result12 = charCode12 >= 97;
    } else {
      result12 = false;
    }
  }
  if (!result12) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches13 = 0;
  while (true) {
    const wrappedResult = fiber0092(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches13++;

      if (matches13 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){6}(:[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode14 = str.charCodeAt(i);
  let result14: boolean;

  result14 = charCode14 === 58;

  if (!result14) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart12 = context.groupMarkerStartTemp12;
  context.groupMarkerEnd12 = i;
  /*
   * groupStartMarker
   * ...0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp12 = i;
  /*
   * charOrSet
   * ...,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode17 = str.charCodeAt(i);
  let result17: boolean;

  if (charCode17 <= 70) {
    if (charCode17 <= 57) {
      result17 = charCode17 >= 48;
    } else {
      result17 = charCode17 >= 65;
    }
  } else {
    if (charCode17 <= 102) {
      result17 = charCode17 >= 97;
    } else {
      result17 = false;
    }
  }
  if (!result17) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches18 = 0;
  while (true) {
    const wrappedResult = fiber0091(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches18++;

      if (matches18 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){6}(:[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode19 = str.charCodeAt(i);
  let result19: boolean;

  result19 = charCode19 === 58;

  if (!result19) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart12 = context.groupMarkerStartTemp12;
  context.groupMarkerEnd12 = i;
  /*
   * groupStartMarker
   * ...0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp12 = i;
  /*
   * charOrSet
   * ...,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode22 = str.charCodeAt(i);
  let result22: boolean;

  if (charCode22 <= 70) {
    if (charCode22 <= 57) {
      result22 = charCode22 >= 48;
    } else {
      result22 = charCode22 >= 65;
    }
  } else {
    if (charCode22 <= 102) {
      result22 = charCode22 >= 97;
    } else {
      result22 = false;
    }
  }
  if (!result22) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches23 = 0;
  while (true) {
    const wrappedResult = fiber0090(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches23++;

      if (matches23 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){6}(:[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode24 = str.charCodeAt(i);
  let result24: boolean;

  result24 = charCode24 === 58;

  if (!result24) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart12 = context.groupMarkerStartTemp12;
  context.groupMarkerEnd12 = i;
  /*
   * groupStartMarker
   * ...0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp12 = i;
  /*
   * charOrSet
   * ...,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode27 = str.charCodeAt(i);
  let result27: boolean;

  if (charCode27 <= 70) {
    if (charCode27 <= 57) {
      result27 = charCode27 >= 48;
    } else {
      result27 = charCode27 >= 65;
    }
  } else {
    if (charCode27 <= 102) {
      result27 = charCode27 >= 97;
    } else {
      result27 = false;
    }
  }
  if (!result27) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches28 = 0;
  while (true) {
    const wrappedResult = fiber0089(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches28++;

      if (matches28 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){6}(:[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode29 = str.charCodeAt(i);
  let result29: boolean;

  result29 = charCode29 === 58;

  if (!result29) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart12 = context.groupMarkerStartTemp12;
  context.groupMarkerEnd12 = i;
  /*
   * groupStartMarker
   * ...{0,3}:){6}(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp13 = i;
  /*
   * disjunction
   * ...{0,3}:){6}(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0052(i, str, context);
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
  const length1 = fiber0086(i, str, context);
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
  const length2 = fiber0087(i, str, context);
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
const fiber0089 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}...
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
const fiber0090 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}...
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
const fiber0091 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}...
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
const fiber0092 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}...
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
const fiber0093 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}...
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
const fiber0094 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}...
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
const fiber0095 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...{0,3}:){5}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart20 = context.groupMarkerStartTemp20;
  context.groupMarkerEnd20 = i;
  /*
   * groupEndMarker
   * ...){3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart18 = context.groupMarkerStartTemp18;
  context.groupMarkerEnd18 = i;
  return fiber0039(i, str, context);
};
const fiber0096 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...0,3}:){5}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp21 = i;
  /*
   * nonBacktrackingQuantifier
   * ...,3}:){5}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0097(i, str, context);

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
  /*
   * groupEndMarker
   * ...0,3}:){5}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart21 = context.groupMarkerStartTemp21;
  context.groupMarkerEnd21 = i;
  return fiber0095(i, str, context);
};
const fiber0097 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,3}:){5}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp22 = i;
  /*
   * charSequence
   * ...3}:){5}(((:[0-9A-Fa-f...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0098(i, str, context);

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
   * ...,3}:){5}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart22 = context.groupMarkerStartTemp22;
  context.groupMarkerEnd22 = i;
  return i;
};
const fiber0098 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2...
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
const fiber0100 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart26 = context.groupMarkerStartTemp26;
  context.groupMarkerEnd26 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart25 = context.groupMarkerStartTemp25;
  context.groupMarkerEnd25 = i;
  /*
   * groupEndMarker
   * ...1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart23 = context.groupMarkerStartTemp23;
  context.groupMarkerEnd23 = i;
  return fiber0095(i, str, context);
};
const fiber0101 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0102(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0103(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0100(i, str, context);
};
const fiber0102 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0103 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0104 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0100(i, str, context);
};
const fiber0105 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3})|)))...
   *              ^^
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
  return fiber0100(i, str, context);
};
const fiber0106 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3})|...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0107 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3})|)...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0106(i, str, context);

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
    const directFollowUpResult0 = fiber0105(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0108 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart26 = context.groupMarkerStartTemp26;
  context.groupMarkerEnd26 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart25 = context.groupMarkerStartTemp25;
  context.groupMarkerEnd25 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp25 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 46;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp26 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0101(i, str, context);
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
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0104(i, str, context);
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
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0107(i, str, context);
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
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0109 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0110(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0111(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0108(i, str, context);
};
const fiber0110 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0111 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0112 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0108(i, str, context);
};
const fiber0113 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3})|)))...
   *              ^^
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
  return fiber0108(i, str, context);
};
const fiber0114 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3})|...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0115 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3})|)...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0114(i, str, context);

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
    const directFollowUpResult0 = fiber0113(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0116 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart26 = context.groupMarkerStartTemp26;
  context.groupMarkerEnd26 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart25 = context.groupMarkerStartTemp25;
  context.groupMarkerEnd25 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp25 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 46;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp26 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0109(i, str, context);
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
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0112(i, str, context);
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
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0115(i, str, context);
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
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0117 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0118(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0119(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0116(i, str, context);
};
const fiber0118 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0119 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0120 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0116(i, str, context);
};
const fiber0121 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3})|)))...
   *              ^^
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
  return fiber0116(i, str, context);
};
const fiber0122 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3})|...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0123 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3})|)...
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

      if (matches0 === 1) {
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
const fiber0124 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart24 = context.groupMarkerStartTemp24;
  context.groupMarkerEnd24 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp25 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 46;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp26 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy23 = context.groupMarkerStart23;
  const groupMarkerEndCopy23 = context.groupMarkerEnd23;
  const groupMarkerStartCopy25 = context.groupMarkerStart25;
  const groupMarkerEndCopy25 = context.groupMarkerEnd25;
  const groupMarkerStartCopy26 = context.groupMarkerStart26;
  const groupMarkerEndCopy26 = context.groupMarkerEnd26;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0117(i, str, context);
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
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0120(i, str, context);
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
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0123(i, str, context);
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
  context.groupMarkerStart23 = groupMarkerStartCopy23;
  context.groupMarkerEnd23 = groupMarkerEndCopy23;
  context.groupMarkerStart25 = groupMarkerStartCopy25;
  context.groupMarkerEnd25 = groupMarkerEndCopy25;
  context.groupMarkerStart26 = groupMarkerStartCopy26;
  context.groupMarkerEnd26 = groupMarkerEndCopy26;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0125 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...2})|:(?:((2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0126(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0127(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0124(i, str, context);
};
const fiber0126 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...:(?:((2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0127 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0128 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0124(i, str, context);
};
const fiber0129 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)(\.(2(?:5...
   *              ^^
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
  return fiber0124(i, str, context);
};
const fiber0130 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0131 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(?...
   *              ^^^^^^
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
   * ...1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp23 = i;
  /*
   * groupStartMarker
   * ...,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp24 = i;
  /*
   * disjunction
   * ...,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0125(i, str, context);
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
  const length1 = fiber0128(i, str, context);
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
  const length2 = fiber0131(i, str, context);
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
  return -1;
};
const fiber0133 = (i: number, str: string, context: Context): number => {
  return fiber0095(i, str, context);
};
const fiber0134 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...3}){1,2})|:(?:((2(?:5...
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
   * disjunction
   * ...}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(([0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0132(i, str, context);
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
  const length1 = fiber0133(i, str, context);
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
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0135 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...){3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp18 = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp19 = i;
  /*
   * charOrSet
   * ...3})|:))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  if (charCode2 <= 70) {
    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = charCode2 >= 65;
    }
  } else {
    if (charCode2 <= 102) {
      result2 = charCode2 >= 97;
    } else {
      result2 = false;
    }
  }
  if (!result2) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches3 = 0;
  while (true) {
    const wrappedResult = fiber0140(i, str, context);

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
   * charOrSet
   * ...Fa-f]{0,3}:){5}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4: boolean;

  result4 = charCode4 === 58;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...{3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart19 = context.groupMarkerStartTemp19;
  context.groupMarkerEnd19 = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp19 = i;
  /*
   * charOrSet
   * ...3})|:))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7: boolean;

  if (charCode7 <= 70) {
    if (charCode7 <= 57) {
      result7 = charCode7 >= 48;
    } else {
      result7 = charCode7 >= 65;
    }
  } else {
    if (charCode7 <= 102) {
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
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches8 = 0;
  while (true) {
    const wrappedResult = fiber0139(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches8++;

      if (matches8 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){5}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode9 = str.charCodeAt(i);
  let result9: boolean;

  result9 = charCode9 === 58;

  if (!result9) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...{3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart19 = context.groupMarkerStartTemp19;
  context.groupMarkerEnd19 = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp19 = i;
  /*
   * charOrSet
   * ...3})|:))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode12 = str.charCodeAt(i);
  let result12: boolean;

  if (charCode12 <= 70) {
    if (charCode12 <= 57) {
      result12 = charCode12 >= 48;
    } else {
      result12 = charCode12 >= 65;
    }
  } else {
    if (charCode12 <= 102) {
      result12 = charCode12 >= 97;
    } else {
      result12 = false;
    }
  }
  if (!result12) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches13 = 0;
  while (true) {
    const wrappedResult = fiber0138(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches13++;

      if (matches13 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){5}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode14 = str.charCodeAt(i);
  let result14: boolean;

  result14 = charCode14 === 58;

  if (!result14) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...{3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart19 = context.groupMarkerStartTemp19;
  context.groupMarkerEnd19 = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp19 = i;
  /*
   * charOrSet
   * ...3})|:))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode17 = str.charCodeAt(i);
  let result17: boolean;

  if (charCode17 <= 70) {
    if (charCode17 <= 57) {
      result17 = charCode17 >= 48;
    } else {
      result17 = charCode17 >= 65;
    }
  } else {
    if (charCode17 <= 102) {
      result17 = charCode17 >= 97;
    } else {
      result17 = false;
    }
  }
  if (!result17) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches18 = 0;
  while (true) {
    const wrappedResult = fiber0137(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches18++;

      if (matches18 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){5}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode19 = str.charCodeAt(i);
  let result19: boolean;

  result19 = charCode19 === 58;

  if (!result19) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...{3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart19 = context.groupMarkerStartTemp19;
  context.groupMarkerEnd19 = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp19 = i;
  /*
   * charOrSet
   * ...3})|:))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode22 = str.charCodeAt(i);
  let result22: boolean;

  if (charCode22 <= 70) {
    if (charCode22 <= 57) {
      result22 = charCode22 >= 48;
    } else {
      result22 = charCode22 >= 65;
    }
  } else {
    if (charCode22 <= 102) {
      result22 = charCode22 >= 97;
    } else {
      result22 = false;
    }
  }
  if (!result22) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches23 = 0;
  while (true) {
    const wrappedResult = fiber0136(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches23++;

      if (matches23 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){5}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode24 = str.charCodeAt(i);
  let result24: boolean;

  result24 = charCode24 === 58;

  if (!result24) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...{3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart19 = context.groupMarkerStartTemp19;
  context.groupMarkerEnd19 = i;
  /*
   * groupStartMarker
   * ...{0,3}:){5}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp20 = i;
  /*
   * disjunction
   * ...{0,3}:){5}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0096(i, str, context);
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
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0134(i, str, context);
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
  return -1;
};
const fiber0136 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}...
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
const fiber0137 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}...
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
const fiber0138 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}...
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
const fiber0139 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}...
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
const fiber0140 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}...
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
const fiber0141 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...{0,3}:){4}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart29 = context.groupMarkerStartTemp29;
  context.groupMarkerEnd29 = i;
  /*
   * groupEndMarker
   * ...){3})|)))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart27 = context.groupMarkerStartTemp27;
  context.groupMarkerEnd27 = i;
  return fiber0039(i, str, context);
};
const fiber0142 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...0,3}:){4}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp30 = i;
  /*
   * nonBacktrackingQuantifier
   * ...,3}:){4}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0143(i, str, context);

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
  /*
   * groupEndMarker
   * ...0,3}:){4}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart30 = context.groupMarkerStartTemp30;
  context.groupMarkerEnd30 = i;
  return fiber0141(i, str, context);
};
const fiber0143 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,3}:){4}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp31 = i;
  /*
   * charSequence
   * ...3}:){4}(((:[0-9A-Fa-f...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0144(i, str, context);

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
   * ...,3}:){4}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart31 = context.groupMarkerStartTemp31;
  context.groupMarkerEnd31 = i;
  return i;
};
const fiber0144 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3...
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
const fiber0145 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart37 = context.groupMarkerStartTemp37;
  context.groupMarkerEnd37 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart36 = context.groupMarkerStartTemp36;
  context.groupMarkerEnd36 = i;
  /*
   * groupEndMarker
   * ...f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart34 = context.groupMarkerStartTemp34;
  context.groupMarkerEnd34 = i;
  /*
   * groupEndMarker
   * ...3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart32 = context.groupMarkerStartTemp32;
  context.groupMarkerEnd32 = i;
  return fiber0141(i, str, context);
};
const fiber0146 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0147(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0148(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0145(i, str, context);
};
const fiber0147 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0148 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0149 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0145(i, str, context);
};
const fiber0150 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
  return fiber0145(i, str, context);
};
const fiber0151 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0152 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0151(i, str, context);

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
    const directFollowUpResult0 = fiber0150(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0153 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart37 = context.groupMarkerStartTemp37;
  context.groupMarkerEnd37 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart36 = context.groupMarkerStartTemp36;
  context.groupMarkerEnd36 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp36 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 46;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp37 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy32 = context.groupMarkerStart32;
  const groupMarkerEndCopy32 = context.groupMarkerEnd32;
  const groupMarkerStartCopy34 = context.groupMarkerStart34;
  const groupMarkerEndCopy34 = context.groupMarkerEnd34;
  const groupMarkerStartCopy36 = context.groupMarkerStart36;
  const groupMarkerEndCopy36 = context.groupMarkerEnd36;
  const groupMarkerStartCopy37 = context.groupMarkerStart37;
  const groupMarkerEndCopy37 = context.groupMarkerEnd37;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0146(i, str, context);
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
  context.groupMarkerStart32 = groupMarkerStartCopy32;
  context.groupMarkerEnd32 = groupMarkerEndCopy32;
  context.groupMarkerStart34 = groupMarkerStartCopy34;
  context.groupMarkerEnd34 = groupMarkerEndCopy34;
  context.groupMarkerStart36 = groupMarkerStartCopy36;
  context.groupMarkerEnd36 = groupMarkerEndCopy36;
  context.groupMarkerStart37 = groupMarkerStartCopy37;
  context.groupMarkerEnd37 = groupMarkerEndCopy37;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0149(i, str, context);
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
  context.groupMarkerStart34 = groupMarkerStartCopy34;
  context.groupMarkerEnd34 = groupMarkerEndCopy34;
  context.groupMarkerStart36 = groupMarkerStartCopy36;
  context.groupMarkerEnd36 = groupMarkerEndCopy36;
  context.groupMarkerStart37 = groupMarkerStartCopy37;
  context.groupMarkerEnd37 = groupMarkerEndCopy37;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0152(i, str, context);
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
  context.groupMarkerStart32 = groupMarkerStartCopy32;
  context.groupMarkerEnd32 = groupMarkerEndCopy32;
  context.groupMarkerStart34 = groupMarkerStartCopy34;
  context.groupMarkerEnd34 = groupMarkerEndCopy34;
  context.groupMarkerStart36 = groupMarkerStartCopy36;
  context.groupMarkerEnd36 = groupMarkerEndCopy36;
  context.groupMarkerStart37 = groupMarkerStartCopy37;
  context.groupMarkerEnd37 = groupMarkerEndCopy37;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0154 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0155(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0156(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0153(i, str, context);
};
const fiber0155 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0156 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0157 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0153(i, str, context);
};
const fiber0158 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
  return fiber0153(i, str, context);
};
const fiber0159 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0160 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0159(i, str, context);

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
    const directFollowUpResult0 = fiber0158(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0161 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart37 = context.groupMarkerStartTemp37;
  context.groupMarkerEnd37 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart36 = context.groupMarkerStartTemp36;
  context.groupMarkerEnd36 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp36 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 46;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp37 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy32 = context.groupMarkerStart32;
  const groupMarkerEndCopy32 = context.groupMarkerEnd32;
  const groupMarkerStartCopy34 = context.groupMarkerStart34;
  const groupMarkerEndCopy34 = context.groupMarkerEnd34;
  const groupMarkerStartCopy36 = context.groupMarkerStart36;
  const groupMarkerEndCopy36 = context.groupMarkerEnd36;
  const groupMarkerStartCopy37 = context.groupMarkerStart37;
  const groupMarkerEndCopy37 = context.groupMarkerEnd37;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0154(i, str, context);
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
  context.groupMarkerStart32 = groupMarkerStartCopy32;
  context.groupMarkerEnd32 = groupMarkerEndCopy32;
  context.groupMarkerStart34 = groupMarkerStartCopy34;
  context.groupMarkerEnd34 = groupMarkerEndCopy34;
  context.groupMarkerStart36 = groupMarkerStartCopy36;
  context.groupMarkerEnd36 = groupMarkerEndCopy36;
  context.groupMarkerStart37 = groupMarkerStartCopy37;
  context.groupMarkerEnd37 = groupMarkerEndCopy37;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0157(i, str, context);
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
  context.groupMarkerStart34 = groupMarkerStartCopy34;
  context.groupMarkerEnd34 = groupMarkerEndCopy34;
  context.groupMarkerStart36 = groupMarkerStartCopy36;
  context.groupMarkerEnd36 = groupMarkerEndCopy36;
  context.groupMarkerStart37 = groupMarkerStartCopy37;
  context.groupMarkerEnd37 = groupMarkerEndCopy37;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0160(i, str, context);
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
  context.groupMarkerStart32 = groupMarkerStartCopy32;
  context.groupMarkerEnd32 = groupMarkerEndCopy32;
  context.groupMarkerStart34 = groupMarkerStartCopy34;
  context.groupMarkerEnd34 = groupMarkerEndCopy34;
  context.groupMarkerStart36 = groupMarkerStartCopy36;
  context.groupMarkerEnd36 = groupMarkerEndCopy36;
  context.groupMarkerStart37 = groupMarkerStartCopy37;
  context.groupMarkerEnd37 = groupMarkerEndCopy37;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0162 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0163(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0164(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0161(i, str, context);
};
const fiber0163 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0164 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0165 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0161(i, str, context);
};
const fiber0166 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
  return fiber0161(i, str, context);
};
const fiber0167 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0168 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0167(i, str, context);

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
    const directFollowUpResult0 = fiber0166(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0169 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart35 = context.groupMarkerStartTemp35;
  context.groupMarkerEnd35 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp36 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 46;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp37 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy32 = context.groupMarkerStart32;
  const groupMarkerEndCopy32 = context.groupMarkerEnd32;
  const groupMarkerStartCopy34 = context.groupMarkerStart34;
  const groupMarkerEndCopy34 = context.groupMarkerEnd34;
  const groupMarkerStartCopy36 = context.groupMarkerStart36;
  const groupMarkerEndCopy36 = context.groupMarkerEnd36;
  const groupMarkerStartCopy37 = context.groupMarkerStart37;
  const groupMarkerEndCopy37 = context.groupMarkerEnd37;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0162(i, str, context);
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
  context.groupMarkerStart32 = groupMarkerStartCopy32;
  context.groupMarkerEnd32 = groupMarkerEndCopy32;
  context.groupMarkerStart34 = groupMarkerStartCopy34;
  context.groupMarkerEnd34 = groupMarkerEndCopy34;
  context.groupMarkerStart36 = groupMarkerStartCopy36;
  context.groupMarkerEnd36 = groupMarkerEndCopy36;
  context.groupMarkerStart37 = groupMarkerStartCopy37;
  context.groupMarkerEnd37 = groupMarkerEndCopy37;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0165(i, str, context);
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
  context.groupMarkerStart34 = groupMarkerStartCopy34;
  context.groupMarkerEnd34 = groupMarkerEndCopy34;
  context.groupMarkerStart36 = groupMarkerStartCopy36;
  context.groupMarkerEnd36 = groupMarkerEndCopy36;
  context.groupMarkerStart37 = groupMarkerStartCopy37;
  context.groupMarkerEnd37 = groupMarkerEndCopy37;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0168(i, str, context);
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
  context.groupMarkerStart32 = groupMarkerStartCopy32;
  context.groupMarkerEnd32 = groupMarkerEndCopy32;
  context.groupMarkerStart34 = groupMarkerStartCopy34;
  context.groupMarkerEnd34 = groupMarkerEndCopy34;
  context.groupMarkerStart36 = groupMarkerStartCopy36;
  context.groupMarkerEnd36 = groupMarkerEndCopy36;
  context.groupMarkerStart37 = groupMarkerStartCopy37;
  context.groupMarkerEnd37 = groupMarkerEndCopy37;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0170 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...{0,3})?:((2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0171(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0172(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0169(i, str, context);
};
const fiber0171 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...})?:((2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0172 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0173 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0169(i, str, context);
};
const fiber0174 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)(\.(2(?:5...
   *              ^^
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
  return fiber0169(i, str, context);
};
const fiber0175 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0176 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(?...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0175(i, str, context);

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
    const directFollowUpResult0 = fiber0174(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0177 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...-f]{0,3})?:((2(?:5[0-...
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
   * ...f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp34 = i;
  /*
   * groupStartMarker
   * ...]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp35 = i;
  /*
   * disjunction
   * ...]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0170(i, str, context);
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
  const length1 = fiber0173(i, str, context);
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
  const length2 = fiber0176(i, str, context);
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
  return -1;
};
const fiber0178 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp33 = i;
  /*
   * charSequence
   * ...){1,3})|((:[0-9A-Fa-f...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0180(i, str, context);

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
   * ...}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart33 = context.groupMarkerStartTemp33;
  context.groupMarkerEnd33 = i;
  return greedyQuantifier0179(i, str, context);
};
const fiber0180 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((...
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
const fiber0181 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp32 = i;
  /*
   * quantifierStarter
   * ...}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0179 = context.quantifierCounter1;
  context.quantifierCounter1 = -1;
  const cursorAfterQuantifier = greedyQuantifier0179(i, str, context);
  context.quantifierCounter1 = matchCountCopygreedyQuantifier0179;

  return cursorAfterQuantifier;
};
const fiber0182 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)){3}))|:))|(([0-9A...
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
  return fiber0141(i, str, context);
};
const fiber0183 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...){3})|)))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp27 = i;
  /*
   * groupStartMarker
   * ...{3})|)))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp28 = i;
  /*
   * charOrSet
   * ...3})|)))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  if (charCode2 <= 70) {
    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = charCode2 >= 65;
    }
  } else {
    if (charCode2 <= 102) {
      result2 = charCode2 >= 97;
    } else {
      result2 = false;
    }
  }
  if (!result2) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches3 = 0;
  while (true) {
    const wrappedResult = fiber0187(i, str, context);

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
   * charOrSet
   * ...Fa-f]{0,3}:){4}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4: boolean;

  result4 = charCode4 === 58;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...{3})|)))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart28 = context.groupMarkerStartTemp28;
  context.groupMarkerEnd28 = i;
  /*
   * groupStartMarker
   * ...{3})|)))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp28 = i;
  /*
   * charOrSet
   * ...3})|)))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7: boolean;

  if (charCode7 <= 70) {
    if (charCode7 <= 57) {
      result7 = charCode7 >= 48;
    } else {
      result7 = charCode7 >= 65;
    }
  } else {
    if (charCode7 <= 102) {
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
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches8 = 0;
  while (true) {
    const wrappedResult = fiber0186(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches8++;

      if (matches8 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){4}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode9 = str.charCodeAt(i);
  let result9: boolean;

  result9 = charCode9 === 58;

  if (!result9) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...{3})|)))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart28 = context.groupMarkerStartTemp28;
  context.groupMarkerEnd28 = i;
  /*
   * groupStartMarker
   * ...{3})|)))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp28 = i;
  /*
   * charOrSet
   * ...3})|)))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode12 = str.charCodeAt(i);
  let result12: boolean;

  if (charCode12 <= 70) {
    if (charCode12 <= 57) {
      result12 = charCode12 >= 48;
    } else {
      result12 = charCode12 >= 65;
    }
  } else {
    if (charCode12 <= 102) {
      result12 = charCode12 >= 97;
    } else {
      result12 = false;
    }
  }
  if (!result12) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches13 = 0;
  while (true) {
    const wrappedResult = fiber0185(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches13++;

      if (matches13 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){4}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode14 = str.charCodeAt(i);
  let result14: boolean;

  result14 = charCode14 === 58;

  if (!result14) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...{3})|)))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart28 = context.groupMarkerStartTemp28;
  context.groupMarkerEnd28 = i;
  /*
   * groupStartMarker
   * ...{3})|)))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp28 = i;
  /*
   * charOrSet
   * ...3})|)))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode17 = str.charCodeAt(i);
  let result17: boolean;

  if (charCode17 <= 70) {
    if (charCode17 <= 57) {
      result17 = charCode17 >= 48;
    } else {
      result17 = charCode17 >= 65;
    }
  } else {
    if (charCode17 <= 102) {
      result17 = charCode17 >= 97;
    } else {
      result17 = false;
    }
  }
  if (!result17) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches18 = 0;
  while (true) {
    const wrappedResult = fiber0184(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches18++;

      if (matches18 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){4}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode19 = str.charCodeAt(i);
  let result19: boolean;

  result19 = charCode19 === 58;

  if (!result19) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...{3})|)))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart28 = context.groupMarkerStartTemp28;
  context.groupMarkerEnd28 = i;
  /*
   * groupStartMarker
   * ...{0,3}:){4}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp29 = i;
  /*
   * disjunction
   * ...{0,3}:){4}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0142(i, str, context);
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
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0181(i, str, context);
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
  const length2 = fiber0182(i, str, context);
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
const fiber0184 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}...
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
const fiber0185 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}...
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
const fiber0186 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}...
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
const fiber0187 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}...
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
const fiber0188 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...{0,3}:){3}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart40 = context.groupMarkerStartTemp40;
  context.groupMarkerEnd40 = i;
  /*
   * groupEndMarker
   * ...{3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart38 = context.groupMarkerStartTemp38;
  context.groupMarkerEnd38 = i;
  return fiber0039(i, str, context);
};
const fiber0189 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...0,3}:){3}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp41 = i;
  /*
   * nonBacktrackingQuantifier
   * ...,3}:){3}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0190(i, str, context);

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
   * groupEndMarker
   * ...0,3}:){3}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart41 = context.groupMarkerStartTemp41;
  context.groupMarkerEnd41 = i;
  return fiber0188(i, str, context);
};
const fiber0190 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,3}:){3}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp42 = i;
  /*
   * charSequence
   * ...3}:){3}(((:[0-9A-Fa-f...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0191(i, str, context);

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
   * ...,3}:){3}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart42 = context.groupMarkerStartTemp42;
  context.groupMarkerEnd42 = i;
  return i;
};
const fiber0191 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4...
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
const fiber0192 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart48 = context.groupMarkerStartTemp48;
  context.groupMarkerEnd48 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart47 = context.groupMarkerStartTemp47;
  context.groupMarkerEnd47 = i;
  /*
   * groupEndMarker
   * ...,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart45 = context.groupMarkerStartTemp45;
  context.groupMarkerEnd45 = i;
  /*
   * groupEndMarker
   * ...3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart43 = context.groupMarkerStartTemp43;
  context.groupMarkerEnd43 = i;
  return fiber0188(i, str, context);
};
const fiber0193 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0194(i, str, context);
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
  return fiber0192(i, str, context);
};
const fiber0194 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0195 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0196 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0192(i, str, context);
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
  return fiber0192(i, str, context);
};
const fiber0198 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0199 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0198(i, str, context);

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
    const directFollowUpResult0 = fiber0197(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0200 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart48 = context.groupMarkerStartTemp48;
  context.groupMarkerEnd48 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart47 = context.groupMarkerStartTemp47;
  context.groupMarkerEnd47 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp47 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 46;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp48 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy43 = context.groupMarkerStart43;
  const groupMarkerEndCopy43 = context.groupMarkerEnd43;
  const groupMarkerStartCopy45 = context.groupMarkerStart45;
  const groupMarkerEndCopy45 = context.groupMarkerEnd45;
  const groupMarkerStartCopy47 = context.groupMarkerStart47;
  const groupMarkerEndCopy47 = context.groupMarkerEnd47;
  const groupMarkerStartCopy48 = context.groupMarkerStart48;
  const groupMarkerEndCopy48 = context.groupMarkerEnd48;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0193(i, str, context);
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
  context.groupMarkerStart43 = groupMarkerStartCopy43;
  context.groupMarkerEnd43 = groupMarkerEndCopy43;
  context.groupMarkerStart45 = groupMarkerStartCopy45;
  context.groupMarkerEnd45 = groupMarkerEndCopy45;
  context.groupMarkerStart47 = groupMarkerStartCopy47;
  context.groupMarkerEnd47 = groupMarkerEndCopy47;
  context.groupMarkerStart48 = groupMarkerStartCopy48;
  context.groupMarkerEnd48 = groupMarkerEndCopy48;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0196(i, str, context);
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
  context.groupMarkerStart45 = groupMarkerStartCopy45;
  context.groupMarkerEnd45 = groupMarkerEndCopy45;
  context.groupMarkerStart47 = groupMarkerStartCopy47;
  context.groupMarkerEnd47 = groupMarkerEndCopy47;
  context.groupMarkerStart48 = groupMarkerStartCopy48;
  context.groupMarkerEnd48 = groupMarkerEndCopy48;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0199(i, str, context);
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
  context.groupMarkerStart43 = groupMarkerStartCopy43;
  context.groupMarkerEnd43 = groupMarkerEndCopy43;
  context.groupMarkerStart45 = groupMarkerStartCopy45;
  context.groupMarkerEnd45 = groupMarkerEndCopy45;
  context.groupMarkerStart47 = groupMarkerStartCopy47;
  context.groupMarkerEnd47 = groupMarkerEndCopy47;
  context.groupMarkerStart48 = groupMarkerStartCopy48;
  context.groupMarkerEnd48 = groupMarkerEndCopy48;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0201 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0202(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0203(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0200(i, str, context);
};
const fiber0202 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0203 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0204 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0200(i, str, context);
};
const fiber0205 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
  return fiber0200(i, str, context);
};
const fiber0206 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0207 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0206(i, str, context);

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
    const directFollowUpResult0 = fiber0205(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0208 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart48 = context.groupMarkerStartTemp48;
  context.groupMarkerEnd48 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart47 = context.groupMarkerStartTemp47;
  context.groupMarkerEnd47 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp47 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 46;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp48 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy43 = context.groupMarkerStart43;
  const groupMarkerEndCopy43 = context.groupMarkerEnd43;
  const groupMarkerStartCopy45 = context.groupMarkerStart45;
  const groupMarkerEndCopy45 = context.groupMarkerEnd45;
  const groupMarkerStartCopy47 = context.groupMarkerStart47;
  const groupMarkerEndCopy47 = context.groupMarkerEnd47;
  const groupMarkerStartCopy48 = context.groupMarkerStart48;
  const groupMarkerEndCopy48 = context.groupMarkerEnd48;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0201(i, str, context);
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
  context.groupMarkerStart43 = groupMarkerStartCopy43;
  context.groupMarkerEnd43 = groupMarkerEndCopy43;
  context.groupMarkerStart45 = groupMarkerStartCopy45;
  context.groupMarkerEnd45 = groupMarkerEndCopy45;
  context.groupMarkerStart47 = groupMarkerStartCopy47;
  context.groupMarkerEnd47 = groupMarkerEndCopy47;
  context.groupMarkerStart48 = groupMarkerStartCopy48;
  context.groupMarkerEnd48 = groupMarkerEndCopy48;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0204(i, str, context);
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
  context.groupMarkerStart45 = groupMarkerStartCopy45;
  context.groupMarkerEnd45 = groupMarkerEndCopy45;
  context.groupMarkerStart47 = groupMarkerStartCopy47;
  context.groupMarkerEnd47 = groupMarkerEndCopy47;
  context.groupMarkerStart48 = groupMarkerStartCopy48;
  context.groupMarkerEnd48 = groupMarkerEndCopy48;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0207(i, str, context);
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
  context.groupMarkerStart43 = groupMarkerStartCopy43;
  context.groupMarkerEnd43 = groupMarkerEndCopy43;
  context.groupMarkerStart45 = groupMarkerStartCopy45;
  context.groupMarkerEnd45 = groupMarkerEndCopy45;
  context.groupMarkerStart47 = groupMarkerStartCopy47;
  context.groupMarkerEnd47 = groupMarkerEndCopy47;
  context.groupMarkerStart48 = groupMarkerStartCopy48;
  context.groupMarkerEnd48 = groupMarkerEndCopy48;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0209 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0210(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0211(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0208(i, str, context);
};
const fiber0210 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0211 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0212 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0208(i, str, context);
};
const fiber0213 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
  return fiber0208(i, str, context);
};
const fiber0214 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0215 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0214(i, str, context);

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
    const directFollowUpResult0 = fiber0213(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0216 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart46 = context.groupMarkerStartTemp46;
  context.groupMarkerEnd46 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp47 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 46;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp48 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy43 = context.groupMarkerStart43;
  const groupMarkerEndCopy43 = context.groupMarkerEnd43;
  const groupMarkerStartCopy45 = context.groupMarkerStart45;
  const groupMarkerEndCopy45 = context.groupMarkerEnd45;
  const groupMarkerStartCopy47 = context.groupMarkerStart47;
  const groupMarkerEndCopy47 = context.groupMarkerEnd47;
  const groupMarkerStartCopy48 = context.groupMarkerStart48;
  const groupMarkerEndCopy48 = context.groupMarkerEnd48;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0209(i, str, context);
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
  context.groupMarkerStart43 = groupMarkerStartCopy43;
  context.groupMarkerEnd43 = groupMarkerEndCopy43;
  context.groupMarkerStart45 = groupMarkerStartCopy45;
  context.groupMarkerEnd45 = groupMarkerEndCopy45;
  context.groupMarkerStart47 = groupMarkerStartCopy47;
  context.groupMarkerEnd47 = groupMarkerEndCopy47;
  context.groupMarkerStart48 = groupMarkerStartCopy48;
  context.groupMarkerEnd48 = groupMarkerEndCopy48;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0212(i, str, context);
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
  context.groupMarkerStart45 = groupMarkerStartCopy45;
  context.groupMarkerEnd45 = groupMarkerEndCopy45;
  context.groupMarkerStart47 = groupMarkerStartCopy47;
  context.groupMarkerEnd47 = groupMarkerEndCopy47;
  context.groupMarkerStart48 = groupMarkerStartCopy48;
  context.groupMarkerEnd48 = groupMarkerEndCopy48;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0215(i, str, context);
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
  context.groupMarkerStart43 = groupMarkerStartCopy43;
  context.groupMarkerEnd43 = groupMarkerEndCopy43;
  context.groupMarkerStart45 = groupMarkerStartCopy45;
  context.groupMarkerEnd45 = groupMarkerEndCopy45;
  context.groupMarkerStart47 = groupMarkerStartCopy47;
  context.groupMarkerEnd47 = groupMarkerEndCopy47;
  context.groupMarkerStart48 = groupMarkerStartCopy48;
  context.groupMarkerEnd48 = groupMarkerEndCopy48;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0217 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}){0,2}:((2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0218(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0219(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0216(i, str, context);
};
const fiber0218 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...,2}:((2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0219 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0220 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0216(i, str, context);
};
const fiber0221 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)(\.(2(?:5...
   *              ^^
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
  return fiber0216(i, str, context);
};
const fiber0222 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0223 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(?...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0222(i, str, context);

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
    const directFollowUpResult0 = fiber0221(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0224 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0,3}){0,2}:((2(?:5[0-...
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
   * ...,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp45 = i;
  /*
   * groupStartMarker
   * ...3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp46 = i;
  /*
   * disjunction
   * ...3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0217(i, str, context);
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
  const length2 = fiber0223(i, str, context);
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
  return -1;
};
const fiber0225 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp44 = i;
  /*
   * charSequence
   * ...){1,4})|((:[0-9A-Fa-f...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0227(i, str, context);

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
   * ...}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart44 = context.groupMarkerStartTemp44;
  context.groupMarkerEnd44 = i;
  return greedyQuantifier0226(i, str, context);
};
const fiber0227 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2...
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
const fiber0228 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp43 = i;
  /*
   * quantifierStarter
   * ...}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0226 = context.quantifierCounter2;
  context.quantifierCounter2 = -1;
  const cursorAfterQuantifier = greedyQuantifier0226(i, str, context);
  context.quantifierCounter2 = matchCountCopygreedyQuantifier0226;

  return cursorAfterQuantifier;
};
const fiber0229 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)){3}))|:))|(([0-9A...
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
  return fiber0188(i, str, context);
};
const fiber0230 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...{3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp38 = i;
  /*
   * groupStartMarker
   * ...3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp39 = i;
  /*
   * charOrSet
   * ...}))|:))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  if (charCode2 <= 70) {
    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = charCode2 >= 65;
    }
  } else {
    if (charCode2 <= 102) {
      result2 = charCode2 >= 97;
    } else {
      result2 = false;
    }
  }
  if (!result2) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches3 = 0;
  while (true) {
    const wrappedResult = fiber0233(i, str, context);

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
   * charOrSet
   * ...Fa-f]{0,3}:){3}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4: boolean;

  result4 = charCode4 === 58;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart39 = context.groupMarkerStartTemp39;
  context.groupMarkerEnd39 = i;
  /*
   * groupStartMarker
   * ...3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp39 = i;
  /*
   * charOrSet
   * ...}))|:))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7: boolean;

  if (charCode7 <= 70) {
    if (charCode7 <= 57) {
      result7 = charCode7 >= 48;
    } else {
      result7 = charCode7 >= 65;
    }
  } else {
    if (charCode7 <= 102) {
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
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches8 = 0;
  while (true) {
    const wrappedResult = fiber0232(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches8++;

      if (matches8 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){3}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode9 = str.charCodeAt(i);
  let result9: boolean;

  result9 = charCode9 === 58;

  if (!result9) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart39 = context.groupMarkerStartTemp39;
  context.groupMarkerEnd39 = i;
  /*
   * groupStartMarker
   * ...3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp39 = i;
  /*
   * charOrSet
   * ...}))|:))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode12 = str.charCodeAt(i);
  let result12: boolean;

  if (charCode12 <= 70) {
    if (charCode12 <= 57) {
      result12 = charCode12 >= 48;
    } else {
      result12 = charCode12 >= 65;
    }
  } else {
    if (charCode12 <= 102) {
      result12 = charCode12 >= 97;
    } else {
      result12 = false;
    }
  }
  if (!result12) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches13 = 0;
  while (true) {
    const wrappedResult = fiber0231(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches13++;

      if (matches13 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){3}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode14 = str.charCodeAt(i);
  let result14: boolean;

  result14 = charCode14 === 58;

  if (!result14) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart39 = context.groupMarkerStartTemp39;
  context.groupMarkerEnd39 = i;
  /*
   * groupStartMarker
   * ...{0,3}:){3}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp40 = i;
  /*
   * disjunction
   * ...{0,3}:){3}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0189(i, str, context);
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
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0228(i, str, context);
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
  const length2 = fiber0229(i, str, context);
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
const fiber0231 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}...
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
const fiber0232 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}...
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
const fiber0233 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}...
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
const fiber0234 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...{0,3}:){2}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart51 = context.groupMarkerStartTemp51;
  context.groupMarkerEnd51 = i;
  /*
   * groupEndMarker
   * ...{3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){2}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart49 = context.groupMarkerStartTemp49;
  context.groupMarkerEnd49 = i;
  return fiber0039(i, str, context);
};
const fiber0235 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...0,3}:){2}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp52 = i;
  /*
   * nonBacktrackingQuantifier
   * ...,3}:){2}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0236(i, str, context);

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
  /*
   * groupEndMarker
   * ...0,3}:){2}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart52 = context.groupMarkerStartTemp52;
  context.groupMarkerEnd52 = i;
  return fiber0234(i, str, context);
};
const fiber0236 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,3}:){2}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp53 = i;
  /*
   * charSequence
   * ...3}:){2}(((:[0-9A-Fa-f...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0237(i, str, context);

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
   * ...,3}:){2}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart53 = context.groupMarkerStartTemp53;
  context.groupMarkerEnd53 = i;
  return i;
};
const fiber0237 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5...
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
const fiber0238 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart59 = context.groupMarkerStartTemp59;
  context.groupMarkerEnd59 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart58 = context.groupMarkerStartTemp58;
  context.groupMarkerEnd58 = i;
  /*
   * groupEndMarker
   * ...,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart56 = context.groupMarkerStartTemp56;
  context.groupMarkerEnd56 = i;
  /*
   * groupEndMarker
   * ...3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart54 = context.groupMarkerStartTemp54;
  context.groupMarkerEnd54 = i;
  return fiber0234(i, str, context);
};
const fiber0239 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0240(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0241(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0238(i, str, context);
};
const fiber0240 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0241 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0242 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0238(i, str, context);
};
const fiber0243 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
  return fiber0238(i, str, context);
};
const fiber0244 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0245 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0244(i, str, context);

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
    const directFollowUpResult0 = fiber0243(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0246 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart59 = context.groupMarkerStartTemp59;
  context.groupMarkerEnd59 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart58 = context.groupMarkerStartTemp58;
  context.groupMarkerEnd58 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp58 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 46;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp59 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy54 = context.groupMarkerStart54;
  const groupMarkerEndCopy54 = context.groupMarkerEnd54;
  const groupMarkerStartCopy56 = context.groupMarkerStart56;
  const groupMarkerEndCopy56 = context.groupMarkerEnd56;
  const groupMarkerStartCopy58 = context.groupMarkerStart58;
  const groupMarkerEndCopy58 = context.groupMarkerEnd58;
  const groupMarkerStartCopy59 = context.groupMarkerStart59;
  const groupMarkerEndCopy59 = context.groupMarkerEnd59;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0239(i, str, context);
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
  context.groupMarkerStart54 = groupMarkerStartCopy54;
  context.groupMarkerEnd54 = groupMarkerEndCopy54;
  context.groupMarkerStart56 = groupMarkerStartCopy56;
  context.groupMarkerEnd56 = groupMarkerEndCopy56;
  context.groupMarkerStart58 = groupMarkerStartCopy58;
  context.groupMarkerEnd58 = groupMarkerEndCopy58;
  context.groupMarkerStart59 = groupMarkerStartCopy59;
  context.groupMarkerEnd59 = groupMarkerEndCopy59;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0242(i, str, context);
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
  context.groupMarkerStart56 = groupMarkerStartCopy56;
  context.groupMarkerEnd56 = groupMarkerEndCopy56;
  context.groupMarkerStart58 = groupMarkerStartCopy58;
  context.groupMarkerEnd58 = groupMarkerEndCopy58;
  context.groupMarkerStart59 = groupMarkerStartCopy59;
  context.groupMarkerEnd59 = groupMarkerEndCopy59;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0245(i, str, context);
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
  context.groupMarkerStart54 = groupMarkerStartCopy54;
  context.groupMarkerEnd54 = groupMarkerEndCopy54;
  context.groupMarkerStart56 = groupMarkerStartCopy56;
  context.groupMarkerEnd56 = groupMarkerEndCopy56;
  context.groupMarkerStart58 = groupMarkerStartCopy58;
  context.groupMarkerEnd58 = groupMarkerEndCopy58;
  context.groupMarkerStart59 = groupMarkerStartCopy59;
  context.groupMarkerEnd59 = groupMarkerEndCopy59;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0247 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0248(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0249(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0246(i, str, context);
};
const fiber0248 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0249 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0250 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0246(i, str, context);
};
const fiber0251 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
  return fiber0246(i, str, context);
};
const fiber0252 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0253 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0252(i, str, context);

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
    const directFollowUpResult0 = fiber0251(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0254 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart59 = context.groupMarkerStartTemp59;
  context.groupMarkerEnd59 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart58 = context.groupMarkerStartTemp58;
  context.groupMarkerEnd58 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp58 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 46;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp59 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy54 = context.groupMarkerStart54;
  const groupMarkerEndCopy54 = context.groupMarkerEnd54;
  const groupMarkerStartCopy56 = context.groupMarkerStart56;
  const groupMarkerEndCopy56 = context.groupMarkerEnd56;
  const groupMarkerStartCopy58 = context.groupMarkerStart58;
  const groupMarkerEndCopy58 = context.groupMarkerEnd58;
  const groupMarkerStartCopy59 = context.groupMarkerStart59;
  const groupMarkerEndCopy59 = context.groupMarkerEnd59;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0247(i, str, context);
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
  context.groupMarkerStart54 = groupMarkerStartCopy54;
  context.groupMarkerEnd54 = groupMarkerEndCopy54;
  context.groupMarkerStart56 = groupMarkerStartCopy56;
  context.groupMarkerEnd56 = groupMarkerEndCopy56;
  context.groupMarkerStart58 = groupMarkerStartCopy58;
  context.groupMarkerEnd58 = groupMarkerEndCopy58;
  context.groupMarkerStart59 = groupMarkerStartCopy59;
  context.groupMarkerEnd59 = groupMarkerEndCopy59;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0250(i, str, context);
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
  context.groupMarkerStart56 = groupMarkerStartCopy56;
  context.groupMarkerEnd56 = groupMarkerEndCopy56;
  context.groupMarkerStart58 = groupMarkerStartCopy58;
  context.groupMarkerEnd58 = groupMarkerEndCopy58;
  context.groupMarkerStart59 = groupMarkerStartCopy59;
  context.groupMarkerEnd59 = groupMarkerEndCopy59;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0253(i, str, context);
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
  context.groupMarkerStart54 = groupMarkerStartCopy54;
  context.groupMarkerEnd54 = groupMarkerEndCopy54;
  context.groupMarkerStart56 = groupMarkerStartCopy56;
  context.groupMarkerEnd56 = groupMarkerEndCopy56;
  context.groupMarkerStart58 = groupMarkerStartCopy58;
  context.groupMarkerEnd58 = groupMarkerEndCopy58;
  context.groupMarkerStart59 = groupMarkerStartCopy59;
  context.groupMarkerEnd59 = groupMarkerEndCopy59;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0255 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0256(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0257(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0254(i, str, context);
};
const fiber0256 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0257 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0258 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0254(i, str, context);
};
const fiber0259 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
  return fiber0254(i, str, context);
};
const fiber0260 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0261 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0260(i, str, context);

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
    const directFollowUpResult0 = fiber0259(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0262 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart57 = context.groupMarkerStartTemp57;
  context.groupMarkerEnd57 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp58 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 46;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp59 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy54 = context.groupMarkerStart54;
  const groupMarkerEndCopy54 = context.groupMarkerEnd54;
  const groupMarkerStartCopy56 = context.groupMarkerStart56;
  const groupMarkerEndCopy56 = context.groupMarkerEnd56;
  const groupMarkerStartCopy58 = context.groupMarkerStart58;
  const groupMarkerEndCopy58 = context.groupMarkerEnd58;
  const groupMarkerStartCopy59 = context.groupMarkerStart59;
  const groupMarkerEndCopy59 = context.groupMarkerEnd59;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0255(i, str, context);
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
  context.groupMarkerStart54 = groupMarkerStartCopy54;
  context.groupMarkerEnd54 = groupMarkerEndCopy54;
  context.groupMarkerStart56 = groupMarkerStartCopy56;
  context.groupMarkerEnd56 = groupMarkerEndCopy56;
  context.groupMarkerStart58 = groupMarkerStartCopy58;
  context.groupMarkerEnd58 = groupMarkerEndCopy58;
  context.groupMarkerStart59 = groupMarkerStartCopy59;
  context.groupMarkerEnd59 = groupMarkerEndCopy59;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0258(i, str, context);
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
  context.groupMarkerStart56 = groupMarkerStartCopy56;
  context.groupMarkerEnd56 = groupMarkerEndCopy56;
  context.groupMarkerStart58 = groupMarkerStartCopy58;
  context.groupMarkerEnd58 = groupMarkerEndCopy58;
  context.groupMarkerStart59 = groupMarkerStartCopy59;
  context.groupMarkerEnd59 = groupMarkerEndCopy59;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0261(i, str, context);
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
  context.groupMarkerStart54 = groupMarkerStartCopy54;
  context.groupMarkerEnd54 = groupMarkerEndCopy54;
  context.groupMarkerStart56 = groupMarkerStartCopy56;
  context.groupMarkerEnd56 = groupMarkerEndCopy56;
  context.groupMarkerStart58 = groupMarkerStartCopy58;
  context.groupMarkerEnd58 = groupMarkerEndCopy58;
  context.groupMarkerStart59 = groupMarkerStartCopy59;
  context.groupMarkerEnd59 = groupMarkerEndCopy59;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0263 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}){0,3}:((2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0264(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0265(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0262(i, str, context);
};
const fiber0264 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...,3}:((2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0265 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0266 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0262(i, str, context);
};
const fiber0267 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)(\.(2(?:5...
   *              ^^
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
  return fiber0262(i, str, context);
};
const fiber0268 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0269 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(?...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0268(i, str, context);

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
    const directFollowUpResult0 = fiber0267(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0270 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0,3}){0,3}:((2(?:5[0-...
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
   * ...,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp56 = i;
  /*
   * groupStartMarker
   * ...3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp57 = i;
  /*
   * disjunction
   * ...3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0263(i, str, context);
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
  const length1 = fiber0266(i, str, context);
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
  const length2 = fiber0269(i, str, context);
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
  return -1;
};
const fiber0271 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp55 = i;
  /*
   * charSequence
   * ...){1,5})|((:[0-9A-Fa-f...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0273(i, str, context);

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
   * ...}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart55 = context.groupMarkerStartTemp55;
  context.groupMarkerEnd55 = i;
  return greedyQuantifier0272(i, str, context);
};
const fiber0273 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3...
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
const fiber0274 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp54 = i;
  /*
   * quantifierStarter
   * ...}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0272 = context.quantifierCounter3;
  context.quantifierCounter3 = -1;
  const cursorAfterQuantifier = greedyQuantifier0272(i, str, context);
  context.quantifierCounter3 = matchCountCopygreedyQuantifier0272;

  return cursorAfterQuantifier;
};
const fiber0275 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)){3}))|:))|(([0-9A...
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
  return fiber0234(i, str, context);
};
const fiber0276 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...{3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){2}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp49 = i;
  /*
   * groupStartMarker
   * ...3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){2}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp50 = i;
  /*
   * charOrSet
   * ...}))|:))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  if (charCode2 <= 70) {
    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = charCode2 >= 65;
    }
  } else {
    if (charCode2 <= 102) {
      result2 = charCode2 >= 97;
    } else {
      result2 = false;
    }
  }
  if (!result2) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){2}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches3 = 0;
  while (true) {
    const wrappedResult = fiber0278(i, str, context);

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
   * charOrSet
   * ...Fa-f]{0,3}:){2}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4: boolean;

  result4 = charCode4 === 58;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){2}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart50 = context.groupMarkerStartTemp50;
  context.groupMarkerEnd50 = i;
  /*
   * groupStartMarker
   * ...3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){2}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp50 = i;
  /*
   * charOrSet
   * ...}))|:))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7: boolean;

  if (charCode7 <= 70) {
    if (charCode7 <= 57) {
      result7 = charCode7 >= 48;
    } else {
      result7 = charCode7 >= 65;
    }
  } else {
    if (charCode7 <= 102) {
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
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){2}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches8 = 0;
  while (true) {
    const wrappedResult = fiber0277(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches8++;

      if (matches8 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{0,3}:){2}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode9 = str.charCodeAt(i);
  let result9: boolean;

  result9 = charCode9 === 58;

  if (!result9) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){2}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart50 = context.groupMarkerStartTemp50;
  context.groupMarkerEnd50 = i;
  /*
   * groupStartMarker
   * ...{0,3}:){2}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp51 = i;
  /*
   * disjunction
   * ...{0,3}:){2}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0235(i, str, context);
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
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0274(i, str, context);
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
  const length2 = fiber0275(i, str, context);
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
const fiber0277 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){2}...
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
const fiber0278 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){2}...
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
const fiber0279 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...{0,3}:){1}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart62 = context.groupMarkerStartTemp62;
  context.groupMarkerEnd62 = i;
  /*
   * groupEndMarker
   * ...{3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){1}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart60 = context.groupMarkerStartTemp60;
  context.groupMarkerEnd60 = i;
  return fiber0039(i, str, context);
};
const fiber0280 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...0,3}:){1}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp63 = i;
  /*
   * nonBacktrackingQuantifier
   * ...,3}:){1}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0281(i, str, context);

    if (wrappedResult === -1) {
      if (matches1 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches1++;

      if (matches1 === 6) {
        break;
      }
    }
  }
  /*
   * groupEndMarker
   * ...0,3}:){1}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart63 = context.groupMarkerStartTemp63;
  context.groupMarkerEnd63 = i;
  return fiber0279(i, str, context);
};
const fiber0281 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...,3}:){1}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp64 = i;
  /*
   * charSequence
   * ...3}:){1}(((:[0-9A-Fa-f...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0282(i, str, context);

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
   * ...,3}:){1}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart64 = context.groupMarkerStartTemp64;
  context.groupMarkerEnd64 = i;
  return i;
};
const fiber0282 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6...
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
const fiber0283 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart70 = context.groupMarkerStartTemp70;
  context.groupMarkerEnd70 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart69 = context.groupMarkerStartTemp69;
  context.groupMarkerEnd69 = i;
  /*
   * groupEndMarker
   * ...,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(:((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart67 = context.groupMarkerStartTemp67;
  context.groupMarkerEnd67 = i;
  /*
   * groupEndMarker
   * ...3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(:(((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart65 = context.groupMarkerStartTemp65;
  context.groupMarkerEnd65 = i;
  return fiber0279(i, str, context);
};
const fiber0284 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0285(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0286(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0283(i, str, context);
};
const fiber0285 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0286 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0287 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0283(i, str, context);
};
const fiber0288 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
  return fiber0283(i, str, context);
};
const fiber0289 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0290 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0289(i, str, context);

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
    const directFollowUpResult0 = fiber0288(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0291 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart70 = context.groupMarkerStartTemp70;
  context.groupMarkerEnd70 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart69 = context.groupMarkerStartTemp69;
  context.groupMarkerEnd69 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp69 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 46;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp70 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy65 = context.groupMarkerStart65;
  const groupMarkerEndCopy65 = context.groupMarkerEnd65;
  const groupMarkerStartCopy67 = context.groupMarkerStart67;
  const groupMarkerEndCopy67 = context.groupMarkerEnd67;
  const groupMarkerStartCopy69 = context.groupMarkerStart69;
  const groupMarkerEndCopy69 = context.groupMarkerEnd69;
  const groupMarkerStartCopy70 = context.groupMarkerStart70;
  const groupMarkerEndCopy70 = context.groupMarkerEnd70;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0284(i, str, context);
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
  context.groupMarkerStart65 = groupMarkerStartCopy65;
  context.groupMarkerEnd65 = groupMarkerEndCopy65;
  context.groupMarkerStart67 = groupMarkerStartCopy67;
  context.groupMarkerEnd67 = groupMarkerEndCopy67;
  context.groupMarkerStart69 = groupMarkerStartCopy69;
  context.groupMarkerEnd69 = groupMarkerEndCopy69;
  context.groupMarkerStart70 = groupMarkerStartCopy70;
  context.groupMarkerEnd70 = groupMarkerEndCopy70;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0287(i, str, context);
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
  context.groupMarkerStart67 = groupMarkerStartCopy67;
  context.groupMarkerEnd67 = groupMarkerEndCopy67;
  context.groupMarkerStart69 = groupMarkerStartCopy69;
  context.groupMarkerEnd69 = groupMarkerEndCopy69;
  context.groupMarkerStart70 = groupMarkerStartCopy70;
  context.groupMarkerEnd70 = groupMarkerEndCopy70;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0290(i, str, context);
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
  context.groupMarkerStart65 = groupMarkerStartCopy65;
  context.groupMarkerEnd65 = groupMarkerEndCopy65;
  context.groupMarkerStart67 = groupMarkerStartCopy67;
  context.groupMarkerEnd67 = groupMarkerEndCopy67;
  context.groupMarkerStart69 = groupMarkerStartCopy69;
  context.groupMarkerEnd69 = groupMarkerEndCopy69;
  context.groupMarkerStart70 = groupMarkerStartCopy70;
  context.groupMarkerEnd70 = groupMarkerEndCopy70;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0292 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0293(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0294(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0291(i, str, context);
};
const fiber0293 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0294 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0295 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0291(i, str, context);
};
const fiber0296 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
  return fiber0291(i, str, context);
};
const fiber0297 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0298 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0297(i, str, context);

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
    const directFollowUpResult0 = fiber0296(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0299 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart70 = context.groupMarkerStartTemp70;
  context.groupMarkerEnd70 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart69 = context.groupMarkerStartTemp69;
  context.groupMarkerEnd69 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp69 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 46;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp70 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy65 = context.groupMarkerStart65;
  const groupMarkerEndCopy65 = context.groupMarkerEnd65;
  const groupMarkerStartCopy67 = context.groupMarkerStart67;
  const groupMarkerEndCopy67 = context.groupMarkerEnd67;
  const groupMarkerStartCopy69 = context.groupMarkerStart69;
  const groupMarkerEndCopy69 = context.groupMarkerEnd69;
  const groupMarkerStartCopy70 = context.groupMarkerStart70;
  const groupMarkerEndCopy70 = context.groupMarkerEnd70;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0292(i, str, context);
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
  context.groupMarkerStart65 = groupMarkerStartCopy65;
  context.groupMarkerEnd65 = groupMarkerEndCopy65;
  context.groupMarkerStart67 = groupMarkerStartCopy67;
  context.groupMarkerEnd67 = groupMarkerEndCopy67;
  context.groupMarkerStart69 = groupMarkerStartCopy69;
  context.groupMarkerEnd69 = groupMarkerEndCopy69;
  context.groupMarkerStart70 = groupMarkerStartCopy70;
  context.groupMarkerEnd70 = groupMarkerEndCopy70;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0295(i, str, context);
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
  context.groupMarkerStart67 = groupMarkerStartCopy67;
  context.groupMarkerEnd67 = groupMarkerEndCopy67;
  context.groupMarkerStart69 = groupMarkerStartCopy69;
  context.groupMarkerEnd69 = groupMarkerEndCopy69;
  context.groupMarkerStart70 = groupMarkerStartCopy70;
  context.groupMarkerEnd70 = groupMarkerEndCopy70;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0298(i, str, context);
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
  context.groupMarkerStart65 = groupMarkerStartCopy65;
  context.groupMarkerEnd65 = groupMarkerEndCopy65;
  context.groupMarkerStart67 = groupMarkerStartCopy67;
  context.groupMarkerEnd67 = groupMarkerEndCopy67;
  context.groupMarkerStart69 = groupMarkerStartCopy69;
  context.groupMarkerEnd69 = groupMarkerEndCopy69;
  context.groupMarkerStart70 = groupMarkerStartCopy70;
  context.groupMarkerEnd70 = groupMarkerEndCopy70;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0300 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0301(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0302(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0299(i, str, context);
};
const fiber0301 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0302 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0303 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0299(i, str, context);
};
const fiber0304 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
  return fiber0299(i, str, context);
};
const fiber0305 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0306 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0305(i, str, context);

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
    const directFollowUpResult0 = fiber0304(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0307 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart68 = context.groupMarkerStartTemp68;
  context.groupMarkerEnd68 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp69 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 46;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp70 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy65 = context.groupMarkerStart65;
  const groupMarkerEndCopy65 = context.groupMarkerEnd65;
  const groupMarkerStartCopy67 = context.groupMarkerStart67;
  const groupMarkerEndCopy67 = context.groupMarkerEnd67;
  const groupMarkerStartCopy69 = context.groupMarkerStart69;
  const groupMarkerEndCopy69 = context.groupMarkerEnd69;
  const groupMarkerStartCopy70 = context.groupMarkerStart70;
  const groupMarkerEndCopy70 = context.groupMarkerEnd70;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0300(i, str, context);
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
  context.groupMarkerStart65 = groupMarkerStartCopy65;
  context.groupMarkerEnd65 = groupMarkerEndCopy65;
  context.groupMarkerStart67 = groupMarkerStartCopy67;
  context.groupMarkerEnd67 = groupMarkerEndCopy67;
  context.groupMarkerStart69 = groupMarkerStartCopy69;
  context.groupMarkerEnd69 = groupMarkerEndCopy69;
  context.groupMarkerStart70 = groupMarkerStartCopy70;
  context.groupMarkerEnd70 = groupMarkerEndCopy70;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0303(i, str, context);
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
  context.groupMarkerStart67 = groupMarkerStartCopy67;
  context.groupMarkerEnd67 = groupMarkerEndCopy67;
  context.groupMarkerStart69 = groupMarkerStartCopy69;
  context.groupMarkerEnd69 = groupMarkerEndCopy69;
  context.groupMarkerStart70 = groupMarkerStartCopy70;
  context.groupMarkerEnd70 = groupMarkerEndCopy70;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0306(i, str, context);
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
  context.groupMarkerStart65 = groupMarkerStartCopy65;
  context.groupMarkerEnd65 = groupMarkerEndCopy65;
  context.groupMarkerStart67 = groupMarkerStartCopy67;
  context.groupMarkerEnd67 = groupMarkerEndCopy67;
  context.groupMarkerStart69 = groupMarkerStartCopy69;
  context.groupMarkerEnd69 = groupMarkerEndCopy69;
  context.groupMarkerStart70 = groupMarkerStartCopy70;
  context.groupMarkerEnd70 = groupMarkerEndCopy70;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0308 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}){0,4}:((2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0309(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0310(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0307(i, str, context);
};
const fiber0309 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...,4}:((2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0310 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0311 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0307(i, str, context);
};
const fiber0312 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)(\.(2(?:5...
   *              ^^
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
  return fiber0307(i, str, context);
};
const fiber0313 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0314 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(?...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0313(i, str, context);

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
    const directFollowUpResult0 = fiber0312(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0315 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0,3}){0,4}:((2(?:5[0-...
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
   * ...,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(:((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp67 = i;
  /*
   * groupStartMarker
   * ...3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp68 = i;
  /*
   * disjunction
   * ...3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0308(i, str, context);
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
  const length1 = fiber0311(i, str, context);
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
  const length2 = fiber0314(i, str, context);
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
  return -1;
};
const fiber0316 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp66 = i;
  /*
   * charSequence
   * ...){1,6})|((:[0-9A-Fa-f...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0318(i, str, context);

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
   * ...}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart66 = context.groupMarkerStartTemp66;
  context.groupMarkerEnd66 = i;
  return greedyQuantifier0317(i, str, context);
};
const fiber0318 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4...
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
const fiber0319 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(:(((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp65 = i;
  /*
   * quantifierStarter
   * ...}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0317 = context.quantifierCounter4;
  context.quantifierCounter4 = -1;
  const cursorAfterQuantifier = greedyQuantifier0317(i, str, context);
  context.quantifierCounter4 = matchCountCopygreedyQuantifier0317;

  return cursorAfterQuantifier;
};
const fiber0320 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)){3}))|:))|(:(((:[...
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
  return fiber0279(i, str, context);
};
const fiber0321 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...{3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){1}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp60 = i;
  /*
   * groupStartMarker
   * ...3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){1}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp61 = i;
  /*
   * charOrSet
   * ...}))|:))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  if (charCode2 <= 70) {
    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = charCode2 >= 65;
    }
  } else {
    if (charCode2 <= 102) {
      result2 = charCode2 >= 97;
    } else {
      result2 = false;
    }
  }
  if (!result2) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){1}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches3 = 0;
  while (true) {
    const wrappedResult = fiber0322(i, str, context);

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
   * charOrSet
   * ...Fa-f]{0,3}:){1}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4: boolean;

  result4 = charCode4 === 58;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){1}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart61 = context.groupMarkerStartTemp61;
  context.groupMarkerEnd61 = i;
  /*
   * groupStartMarker
   * ...{0,3}:){1}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp62 = i;
  /*
   * disjunction
   * ...{0,3}:){1}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0280(i, str, context);
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
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0319(i, str, context);
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
  const length2 = fiber0320(i, str, context);
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
const fiber0322 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:){1}...
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
const fiber0323 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...}))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))(%..✱)?\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart72 = context.groupMarkerStartTemp72;
  context.groupMarkerEnd72 = i;
  /*
   * groupEndMarker
   * ...{3}))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))(%..✱)?\s...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart71 = context.groupMarkerStartTemp71;
  context.groupMarkerEnd71 = i;
  return fiber0039(i, str, context);
};
const fiber0324 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp73 = i;
  /*
   * nonBacktrackingQuantifier
   * ...)|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0325(i, str, context);

    if (wrappedResult === -1) {
      if (matches1 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches1++;

      if (matches1 === 7) {
        break;
      }
    }
  }
  /*
   * groupEndMarker
   * ...))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart73 = context.groupMarkerStartTemp73;
  context.groupMarkerEnd73 = i;
  return fiber0323(i, str, context);
};
const fiber0325 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...)|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp74 = i;
  /*
   * charSequence
   * ...|:))|(:(((:[0-9A-Fa-f...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0326(i, str, context);

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
   * ...)|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart74 = context.groupMarkerStartTemp74;
  context.groupMarkerEnd74 = i;
  return i;
};
const fiber0326 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7...
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
const fiber0327 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart80 = context.groupMarkerStartTemp80;
  context.groupMarkerEnd80 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart79 = context.groupMarkerStartTemp79;
  context.groupMarkerEnd79 = i;
  /*
   * groupEndMarker
   * ...,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))(%.....
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart77 = context.groupMarkerStartTemp77;
  context.groupMarkerEnd77 = i;
  /*
   * groupEndMarker
   * ...3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))(%..✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart75 = context.groupMarkerStartTemp75;
  context.groupMarkerEnd75 = i;
  return fiber0323(i, str, context);
};
const fiber0328 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0329(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0330(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0327(i, str, context);
};
const fiber0329 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0330 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0331 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0327(i, str, context);
};
const fiber0332 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
  return fiber0327(i, str, context);
};
const fiber0333 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0334 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0333(i, str, context);

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
    const directFollowUpResult0 = fiber0332(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0335 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart80 = context.groupMarkerStartTemp80;
  context.groupMarkerEnd80 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart79 = context.groupMarkerStartTemp79;
  context.groupMarkerEnd79 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp79 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 46;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp80 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy75 = context.groupMarkerStart75;
  const groupMarkerEndCopy75 = context.groupMarkerEnd75;
  const groupMarkerStartCopy77 = context.groupMarkerStart77;
  const groupMarkerEndCopy77 = context.groupMarkerEnd77;
  const groupMarkerStartCopy79 = context.groupMarkerStart79;
  const groupMarkerEndCopy79 = context.groupMarkerEnd79;
  const groupMarkerStartCopy80 = context.groupMarkerStart80;
  const groupMarkerEndCopy80 = context.groupMarkerEnd80;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0328(i, str, context);
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
  context.groupMarkerStart75 = groupMarkerStartCopy75;
  context.groupMarkerEnd75 = groupMarkerEndCopy75;
  context.groupMarkerStart77 = groupMarkerStartCopy77;
  context.groupMarkerEnd77 = groupMarkerEndCopy77;
  context.groupMarkerStart79 = groupMarkerStartCopy79;
  context.groupMarkerEnd79 = groupMarkerEndCopy79;
  context.groupMarkerStart80 = groupMarkerStartCopy80;
  context.groupMarkerEnd80 = groupMarkerEndCopy80;
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
  context.groupMarkerStart71 = groupMarkerStartCopy71;
  context.groupMarkerEnd71 = groupMarkerEndCopy71;
  context.groupMarkerStart72 = groupMarkerStartCopy72;
  context.groupMarkerEnd72 = groupMarkerEndCopy72;
  context.groupMarkerStart75 = groupMarkerStartCopy75;
  context.groupMarkerEnd75 = groupMarkerEndCopy75;
  context.groupMarkerStart77 = groupMarkerStartCopy77;
  context.groupMarkerEnd77 = groupMarkerEndCopy77;
  context.groupMarkerStart79 = groupMarkerStartCopy79;
  context.groupMarkerEnd79 = groupMarkerEndCopy79;
  context.groupMarkerStart80 = groupMarkerStartCopy80;
  context.groupMarkerEnd80 = groupMarkerEndCopy80;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0334(i, str, context);
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
  context.groupMarkerStart75 = groupMarkerStartCopy75;
  context.groupMarkerEnd75 = groupMarkerEndCopy75;
  context.groupMarkerStart77 = groupMarkerStartCopy77;
  context.groupMarkerEnd77 = groupMarkerEndCopy77;
  context.groupMarkerStart79 = groupMarkerStartCopy79;
  context.groupMarkerEnd79 = groupMarkerEndCopy79;
  context.groupMarkerStart80 = groupMarkerStartCopy80;
  context.groupMarkerEnd80 = groupMarkerEndCopy80;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0336 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0337(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0338(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0335(i, str, context);
};
const fiber0337 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0338 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0339 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0335(i, str, context);
};
const fiber0340 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
  return fiber0335(i, str, context);
};
const fiber0341 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0342 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0341(i, str, context);

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
    const directFollowUpResult0 = fiber0340(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0343 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart80 = context.groupMarkerStartTemp80;
  context.groupMarkerEnd80 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart79 = context.groupMarkerStartTemp79;
  context.groupMarkerEnd79 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp79 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3: boolean;

  result3 = charCode3 === 46;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp80 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy75 = context.groupMarkerStart75;
  const groupMarkerEndCopy75 = context.groupMarkerEnd75;
  const groupMarkerStartCopy77 = context.groupMarkerStart77;
  const groupMarkerEndCopy77 = context.groupMarkerEnd77;
  const groupMarkerStartCopy79 = context.groupMarkerStart79;
  const groupMarkerEndCopy79 = context.groupMarkerEnd79;
  const groupMarkerStartCopy80 = context.groupMarkerStart80;
  const groupMarkerEndCopy80 = context.groupMarkerEnd80;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0336(i, str, context);
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
  context.groupMarkerStart75 = groupMarkerStartCopy75;
  context.groupMarkerEnd75 = groupMarkerEndCopy75;
  context.groupMarkerStart77 = groupMarkerStartCopy77;
  context.groupMarkerEnd77 = groupMarkerEndCopy77;
  context.groupMarkerStart79 = groupMarkerStartCopy79;
  context.groupMarkerEnd79 = groupMarkerEndCopy79;
  context.groupMarkerStart80 = groupMarkerStartCopy80;
  context.groupMarkerEnd80 = groupMarkerEndCopy80;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0339(i, str, context);
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
  context.groupMarkerStart77 = groupMarkerStartCopy77;
  context.groupMarkerEnd77 = groupMarkerEndCopy77;
  context.groupMarkerStart79 = groupMarkerStartCopy79;
  context.groupMarkerEnd79 = groupMarkerEndCopy79;
  context.groupMarkerStart80 = groupMarkerStartCopy80;
  context.groupMarkerEnd80 = groupMarkerEndCopy80;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0342(i, str, context);
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
  context.groupMarkerStart75 = groupMarkerStartCopy75;
  context.groupMarkerEnd75 = groupMarkerEndCopy75;
  context.groupMarkerStart77 = groupMarkerStartCopy77;
  context.groupMarkerEnd77 = groupMarkerEndCopy77;
  context.groupMarkerStart79 = groupMarkerStartCopy79;
  context.groupMarkerEnd79 = groupMarkerEndCopy79;
  context.groupMarkerStart80 = groupMarkerStartCopy80;
  context.groupMarkerEnd80 = groupMarkerEndCopy80;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0344 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0345(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0346(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0343(i, str, context);
};
const fiber0345 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...d)(\.(2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0346 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0347 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0343(i, str, context);
};
const fiber0348 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)){3}))|:)...
   *              ^^
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
  return fiber0343(i, str, context);
};
const fiber0349 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)){3}))...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0350 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0349(i, str, context);

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
    const directFollowUpResult0 = fiber0348(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0351 = (i: number, str: string, context: Context): number => {
  /*
   * groupEndMarker
   * ...3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart78 = context.groupMarkerStartTemp78;
  context.groupMarkerEnd78 = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp79 = i;
  /*
   * charOrSet
   * ...[1-9]?\d)(\.(2(?:5[0-5...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2: boolean;

  result2 = charCode2 === 46;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp80 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const groupMarkerStartCopy75 = context.groupMarkerStart75;
  const groupMarkerEndCopy75 = context.groupMarkerEnd75;
  const groupMarkerStartCopy77 = context.groupMarkerStart77;
  const groupMarkerEndCopy77 = context.groupMarkerEnd77;
  const groupMarkerStartCopy79 = context.groupMarkerStart79;
  const groupMarkerEndCopy79 = context.groupMarkerEnd79;
  const groupMarkerStartCopy80 = context.groupMarkerStart80;
  const groupMarkerEndCopy80 = context.groupMarkerEnd80;
  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const length0 = fiber0344(i, str, context);
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
  context.groupMarkerStart75 = groupMarkerStartCopy75;
  context.groupMarkerEnd75 = groupMarkerEndCopy75;
  context.groupMarkerStart77 = groupMarkerStartCopy77;
  context.groupMarkerEnd77 = groupMarkerEndCopy77;
  context.groupMarkerStart79 = groupMarkerStartCopy79;
  context.groupMarkerEnd79 = groupMarkerEndCopy79;
  context.groupMarkerStart80 = groupMarkerStartCopy80;
  context.groupMarkerEnd80 = groupMarkerEndCopy80;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0347(i, str, context);
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
  context.groupMarkerStart77 = groupMarkerStartCopy77;
  context.groupMarkerEnd77 = groupMarkerEndCopy77;
  context.groupMarkerStart79 = groupMarkerStartCopy79;
  context.groupMarkerEnd79 = groupMarkerEndCopy79;
  context.groupMarkerStart80 = groupMarkerStartCopy80;
  context.groupMarkerEnd80 = groupMarkerEndCopy80;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length2 = fiber0350(i, str, context);
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
  context.groupMarkerStart75 = groupMarkerStartCopy75;
  context.groupMarkerEnd75 = groupMarkerEndCopy75;
  context.groupMarkerStart77 = groupMarkerStartCopy77;
  context.groupMarkerEnd77 = groupMarkerEndCopy77;
  context.groupMarkerStart79 = groupMarkerStartCopy79;
  context.groupMarkerEnd79 = groupMarkerEndCopy79;
  context.groupMarkerStart80 = groupMarkerStartCopy80;
  context.groupMarkerEnd80 = groupMarkerEndCopy80;
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  return -1;
};
const fiber0352 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...}){0,5}:((2(?:5[0-5]|...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 50;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingDisjunction
   * ...){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const length0 = fiber0353(i, str, context);
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }
    const length1 = fiber0354(i, str, context);
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }
    return -1;
  }
  return fiber0351(i, str, context);
};
const fiber0353 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...,5}:((2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 53;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 53) {
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
const fiber0354 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...(?:5[0-5]|[0-4]\d)|1\d\d|...
   *              ^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

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
const fiber0355 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...|[0-4]\d)|1\d\d|[1-9]...
   *              ^
   */
  const iAfterMatch0 = i + 3;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 49;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 2);

    let result1: boolean;

    if (charCode1 <= 57) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 1);

    let result2: boolean;

    if (charCode2 <= 57) {
      result2 = charCode2 >= 48;
    } else {
      result2 = false;
    }
    if (!result2) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return fiber0351(i, str, context);
};
const fiber0356 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...d\d|[1-9]?\d)(\.(2(?:5...
   *              ^^
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
  return fiber0351(i, str, context);
};
const fiber0357 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 49;
  } else {
    result0 = false;
  }
  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0358 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(?...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0357(i, str, context);

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
    const directFollowUpResult0 = fiber0356(i, str, context);

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0359 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0,3}){0,5}:((2(?:5[0-...
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
   * ...,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))(%.....
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp77 = i;
  /*
   * groupStartMarker
   * ...3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp78 = i;
  /*
   * disjunction
   * ...3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0352(i, str, context);
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
  const length1 = fiber0355(i, str, context);
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
  const length2 = fiber0358(i, str, context);
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
  return -1;
};
const fiber0360 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp76 = i;
  /*
   * charSequence
   * ...){1,7})|((:[0-9A-Fa-f...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0362(i, str, context);

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
   * ...}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart76 = context.groupMarkerStartTemp76;
  context.groupMarkerEnd76 = i;
  return greedyQuantifier0361(i, str, context);
};
const fiber0362 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5...
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
const fiber0363 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))(%..✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp75 = i;
  /*
   * quantifierStarter
   * ...}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0361 = context.quantifierCounter5;
  context.quantifierCounter5 = -1;
  const cursorAfterQuantifier = greedyQuantifier0361(i, str, context);
  context.quantifierCounter5 = matchCountCopygreedyQuantifier0361;

  return cursorAfterQuantifier;
};
const fiber0364 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)){3}))|:)))(%..✱)?...
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
  return fiber0323(i, str, context);
};
const fiber0365 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...{3}))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))(%..✱)?\s...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  let result1: boolean;

  result1 = charCode1 === 58;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...}))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))(%..✱)?\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp72 = i;
  /*
   * disjunction
   * ...}))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))(%..✱)?\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0324(i, str, context);
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
  context.groupMarkerStart81 = groupMarkerStartCopy81;
  context.groupMarkerEnd81 = groupMarkerEndCopy81;
  const length1 = fiber0363(i, str, context);
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
  const length2 = fiber0364(i, str, context);
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
const fiber0366 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...5])))\s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){2}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){1}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))(%..✱)?\s✱))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp6 = i;
  /*
   * nonBacktrackingQuantifier
   * ...])))\s✱)|(\s✱((([0-9A-F...
   *              ^^^
   */
  while (true) {
    const wrappedResult = fiber0367(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupStartMarker
   * ...)\s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){2}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){1}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))(%..✱)?\s✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp7 = i;
  /*
   * disjunction
   * ...)\s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){2}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){1}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))(%..✱)?\s✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0040(i, str, context);
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
  const length1 = fiber0088(i, str, context);
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
  const length2 = fiber0135(i, str, context);
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
  const length3 = fiber0183(i, str, context);
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
  const length4 = fiber0230(i, str, context);
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
  const length5 = fiber0276(i, str, context);
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
  const length6 = fiber0321(i, str, context);
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
  const length7 = fiber0365(i, str, context);
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
const fiber0367 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...])))\s✱)|(\s✱((([0-9A-...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

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
const fiber0368 = (i: number, str: string, context: Context): number => {
  /*
   * startAnchor
   * /^((\s✱((([0...
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * groupStartMarker
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){2}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){1}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))(%..✱)?\s✱))$/
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * disjunction
   * /^((\s✱((([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱((([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){7}([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){6}(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){5}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3})|)))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){4}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){3}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){2}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:){1}(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)){3}))|:)))(%..✱)?\s✱))$/
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
  const length0 = fiber0031(i, str, context);
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
  const length1 = fiber0366(i, str, context);
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
 * ...{3}))|:)))(%..✱)?\s✱))$/
 *              ^^^^^^^
 */
const greedyQuantifier0036 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  if (context.quantifierCounter0 === 1) {
    return fiber0033(start, str, context);
  }

  const groupMarkerStartCopy81 = context.groupMarkerStart81;
  const groupMarkerEndCopy81 = context.groupMarkerEnd81;
  const tryDeeperResult = fiber0038(start, str, context);
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

  const followUpResult = fiber0033(start, str, context);

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
 * ...}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0179 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter1++;

  if (context.quantifierCounter1 === 1) {
    return fiber0177(start, str, context);
  }

  const groupMarkerStartCopy33 = context.groupMarkerStart33;
  const groupMarkerEndCopy33 = context.groupMarkerEnd33;
  const tryDeeperResult = fiber0178(start, str, context);
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

  const followUpResult = fiber0177(start, str, context);

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
    context.quantifierCounter1--;
  }
  return followUpResult;
};
/*
 * ...}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0226 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter2++;

  if (context.quantifierCounter2 === 2) {
    return fiber0224(start, str, context);
  }

  const groupMarkerStartCopy44 = context.groupMarkerStart44;
  const groupMarkerEndCopy44 = context.groupMarkerEnd44;
  const tryDeeperResult = fiber0225(start, str, context);
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

  const followUpResult = fiber0224(start, str, context);

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
    context.quantifierCounter2--;
  }
  return followUpResult;
};
/*
 * ...}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0272 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter3++;

  if (context.quantifierCounter3 === 3) {
    return fiber0270(start, str, context);
  }

  const groupMarkerStartCopy55 = context.groupMarkerStart55;
  const groupMarkerEndCopy55 = context.groupMarkerEnd55;
  const tryDeeperResult = fiber0271(start, str, context);
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

  const followUpResult = fiber0270(start, str, context);

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
    context.quantifierCounter3--;
  }
  return followUpResult;
};
/*
 * ...}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0317 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter4++;

  if (context.quantifierCounter4 === 4) {
    return fiber0315(start, str, context);
  }

  const groupMarkerStartCopy66 = context.groupMarkerStart66;
  const groupMarkerEndCopy66 = context.groupMarkerEnd66;
  const tryDeeperResult = fiber0316(start, str, context);
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

  const followUpResult = fiber0315(start, str, context);

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
    context.quantifierCounter4--;
  }
  return followUpResult;
};
/*
 * ...}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0361 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter5++;

  if (context.quantifierCounter5 === 5) {
    return fiber0359(start, str, context);
  }

  const groupMarkerStartCopy76 = context.groupMarkerStart76;
  const groupMarkerEndCopy76 = context.groupMarkerEnd76;
  const tryDeeperResult = fiber0360(start, str, context);
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

  const followUpResult = fiber0359(start, str, context);

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
    context.quantifierCounter5--;
  }
  return followUpResult;
};
