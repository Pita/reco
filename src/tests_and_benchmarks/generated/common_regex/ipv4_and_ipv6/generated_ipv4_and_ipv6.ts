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

// Regex optimized to: /^((\s*((?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s*)|(\s*(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%..*)?\s*))$/

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
   * /^((\s✱((?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%..✱)?\s✱))$/
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
   * ...[0-5]))\.)([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart5 = context.groupMarkerStartTemp5;
  context.groupMarkerEnd5 = i;
  /*
   * groupEndMarker
   * /^((\s✱((?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱(...
   *        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  /*
   * nonBacktrackingQuantifier
   * ...|5[0-5])))\s✱)|(\s✱(([0...
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
   * /^((\s✱((?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱(([0-...
   *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  return fiber0001(i, str, context);
};
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...|5[0-5])))\s✱)|(\s✱(([...
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
   * charSequence
   * ...0-5]))\.)([0-9]|[1-9][0-9...
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
  return fiber0002(i, str, context);
};
const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...\.)([0-9]|[1-9][0-9]|1[0-...
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
   * charSequence
   * ...0-9][0-9]|2(?:[0-4][0...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s...
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length0 = fiber0008(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length1 = fiber0009(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
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
   * ...[0-5]))\.(([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart4 = context.groupMarkerStartTemp4;
  context.groupMarkerEnd4 = i;
  /*
   * charSequence
   * ...]|5[0-5]))\.)([0-9]|[1...
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
   * groupEndMarker
   * ...5[0-5]))\.(([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]|[1-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  /*
   * groupStartMarker
   * ...[0-5]))\.)([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp5 = i;
  /*
   * disjunction
   * ...[0-5]))\.)([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck4 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck4 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue4 = (firstCharQuickCheck4 << 16) ^ secondCharQuickCheck4;

  if ((quickCheckValue4 & 2146435072) === 3145728) {
    const length0 = fiber0004(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
  }
  if ((quickCheckValue4 & 2146467824) === 3145776) {
    const length1 = fiber0005(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
  }
  if ((quickCheckValue4 & 2147450864) === 3211312) {
    const length2 = fiber0006(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
  }
  if ((quickCheckValue4 & 2147450872) === 3276848) {
    const length3 = fiber0007(i, str, context);
    if (length3 !== -1) {
      return length3;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
  }
  return -1;
};
const fiber0011 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...0-5]))\.(([0-9]|[1-9][0-9...
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
  return fiber0010(i, str, context);
};
const fiber0012 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...\.(([0-9]|[1-9][0-9]|1[0-...
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
   * charSequence
   * ...0-9][0-9]|2(?:[0-4][0...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length0 = fiber0015(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length1 = fiber0016(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
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
   * charSequence
   * ...]|5[0-5]))\.(([0-9]|[1...
   *              ^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 46;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * groupStartMarker
   * ...5[0-5]))\.(([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]|[1-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * groupStartMarker
   * ...[0-5]))\.(([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp4 = i;
  /*
   * disjunction
   * ...[0-5]))\.(([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  if ((quickCheckValue3 & 2146467839) === 3145774) {
    const length0 = fiber0011(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
    context.groupMarkerStart3 = -1;
    context.groupMarkerEnd3 = -1;
    context.groupMarkerStart4 = -1;
    context.groupMarkerEnd4 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
  }
  if ((quickCheckValue3 & 2146467824) === 3145776) {
    const length1 = fiber0012(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
    context.groupMarkerStart3 = -1;
    context.groupMarkerEnd3 = -1;
    context.groupMarkerStart4 = -1;
    context.groupMarkerEnd4 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
  }
  if ((quickCheckValue3 & 2147450864) === 3211312) {
    const length2 = fiber0013(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
    context.groupMarkerStart3 = -1;
    context.groupMarkerEnd3 = -1;
    context.groupMarkerStart4 = -1;
    context.groupMarkerEnd4 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
  }
  if ((quickCheckValue3 & 2147450872) === 3276848) {
    const length3 = fiber0014(i, str, context);
    if (length3 !== -1) {
      return length3;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
    context.groupMarkerStart3 = -1;
    context.groupMarkerEnd3 = -1;
    context.groupMarkerStart4 = -1;
    context.groupMarkerEnd4 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
  }
  return -1;
};
const fiber0018 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...-5]))\.(?:[0-9]|[1-9][0-9...
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
  return fiber0017(i, str, context);
};
const fiber0019 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ....(?:[0-9]|[1-9][0-9]|1[0-...
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
   * charSequence
   * ...0-9][0-9]|2(?:[0-4][0...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(([0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length0 = fiber0022(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length1 = fiber0023(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
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
   * ...0-4][0-9]|5[0-5]))\.(...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
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
   * charSequence
   * ...]|5[0-5]))\.(?:[0-9]|[...
   *              ^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 46;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * disjunction
   * ...5[0-5]))\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(([0-9]|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  if ((quickCheckValue1 & 2146467839) === 3145774) {
    const length0 = fiber0018(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
    context.groupMarkerStart3 = -1;
    context.groupMarkerEnd3 = -1;
    context.groupMarkerStart4 = -1;
    context.groupMarkerEnd4 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
  }
  if ((quickCheckValue1 & 2146467824) === 3145776) {
    const length1 = fiber0019(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
    context.groupMarkerStart3 = -1;
    context.groupMarkerEnd3 = -1;
    context.groupMarkerStart4 = -1;
    context.groupMarkerEnd4 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
  }
  if ((quickCheckValue1 & 2147450864) === 3211312) {
    const length2 = fiber0020(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
    context.groupMarkerStart3 = -1;
    context.groupMarkerEnd3 = -1;
    context.groupMarkerStart4 = -1;
    context.groupMarkerEnd4 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
  }
  if ((quickCheckValue1 & 2147450872) === 3276848) {
    const length3 = fiber0021(i, str, context);
    if (length3 !== -1) {
      return length3;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
    context.groupMarkerStart3 = -1;
    context.groupMarkerEnd3 = -1;
    context.groupMarkerStart4 = -1;
    context.groupMarkerEnd4 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
  }
  return -1;
};
const fiber0025 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * /^((\s✱((?:[0-9]|[1-9][0-9...
   *            ^^^^^
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
  return fiber0024(i, str, context);
};
const fiber0026 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...((?:[0-9]|[1-9][0-9]|1[0-...
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
   * charSequence
   * ...0-9][0-9]|2(?:[0-4][0...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(?:[0-9...
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length0 = fiber0029(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length1 = fiber0030(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
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
   * ...0-4][0-9]|5[0-5]))\.(...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
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
   * /^((\s✱((?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱(([0-...
   *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * nonBacktrackingQuantifier
   * /^((\s✱((?:[0-9]|...
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
   * /^((\s✱((?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱(...
   *        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * disjunction
   * /^((\s✱((?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(?:[0-9]...
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  if ((quickCheckValue3 & 2146467839) === 3145774) {
    const length0 = fiber0025(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
    context.groupMarkerStart3 = -1;
    context.groupMarkerEnd3 = -1;
    context.groupMarkerStart4 = -1;
    context.groupMarkerEnd4 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
  }
  if ((quickCheckValue3 & 2146467824) === 3145776) {
    const length1 = fiber0026(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
    context.groupMarkerStart3 = -1;
    context.groupMarkerEnd3 = -1;
    context.groupMarkerStart4 = -1;
    context.groupMarkerEnd4 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
  }
  if ((quickCheckValue3 & 2147450864) === 3211312) {
    const length2 = fiber0027(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
    context.groupMarkerStart3 = -1;
    context.groupMarkerEnd3 = -1;
    context.groupMarkerStart4 = -1;
    context.groupMarkerEnd4 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
  }
  if ((quickCheckValue3 & 2147450872) === 3276848) {
    const length3 = fiber0028(i, str, context);
    if (length3 !== -1) {
      return length3;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
    context.groupMarkerStart3 = -1;
    context.groupMarkerEnd3 = -1;
    context.groupMarkerStart4 = -1;
    context.groupMarkerEnd4 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
  }
  return -1;
};
const fiber0032 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /^((\s✱((?:[0-9]...
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
   * ...5])))\s✱)|(\s✱(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%..✱)?\s✱))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
   * ...d))))|:)))(%..✱)?\s✱))$/
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
   * ...d))))|:)))(%..✱)?\s✱))$/
   *              ^^^^^^
   */
  context.groupMarkerStartTemp81 = i;
  /*
   * charSequence
   * ...))))|:)))(%..✱)?\s✱))$/
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
   * ...)\s✱)|(\s✱(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%..✱)?\s✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart7 = context.groupMarkerStartTemp7;
  context.groupMarkerEnd7 = i;
  /*
   * quantifierStarter
   * ...d))))|:)))(%..✱)?\s✱))$/
   *              ^^^^^^^
   */
  context.quantifierCounter0 = -1;
  return greedyQuantifier0036(i, str, context);
};
const fiber0040 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...\s✱)|(\s✱(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|([0-9A-Fa...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp8 = i;
  /*
   * charSequence
   * ...s✱)|(\s✱(([0-9A-Fa-f][0-9A-Fa-f...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-...
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

      if (matches2 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...Fa-f]{0,3}:[0-9A-Fa-f...
   *              ^
   */
  const iAfterMatch3 = i + 2;
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

    i = iAfterMatch3;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches4 = 0;
  while (true) {
    const wrappedResult = fiber0049(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches4++;

      if (matches4 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...Fa-f]{0,3}:[0-9A-Fa-f...
   *              ^
   */
  const iAfterMatch5 = i + 2;
  if (iAfterMatch5 > str.length) {
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

    i = iAfterMatch5;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches6 = 0;
  while (true) {
    const wrappedResult = fiber0048(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches6++;

      if (matches6 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...Fa-f]{0,3}:[0-9A-Fa-f...
   *              ^
   */
  const iAfterMatch7 = i + 2;
  if (iAfterMatch7 > str.length) {
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

    i = iAfterMatch7;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches8 = 0;
  while (true) {
    const wrappedResult = fiber0047(i, str, context);

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
   * charSequence
   * ...Fa-f]{0,3}:[0-9A-Fa-f...
   *              ^
   */
  const iAfterMatch9 = i + 2;
  if (iAfterMatch9 > str.length) {
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

    i = iAfterMatch9;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches10 = 0;
  while (true) {
    const wrappedResult = fiber0046(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches10++;

      if (matches10 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...Fa-f]{0,3}:[0-9A-Fa-f...
   *              ^
   */
  const iAfterMatch11 = i + 2;
  if (iAfterMatch11 > str.length) {
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

    i = iAfterMatch11;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches12 = 0;
  while (true) {
    const wrappedResult = fiber0045(i, str, context);

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
   * charSequence
   * ...Fa-f]{0,3}:([0-9A-Fa-...
   *              ^
   */
  const iAfterMatch13 = i + 1;
  if (iAfterMatch13 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch13;
  }
  /*
   * groupStartMarker
   * ...a-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)([0-9A-Fa-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp9 = i;
  /*
   * charSequence
   * ...-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  const iAfterMatch15 = i + 1;
  if (iAfterMatch15 > str.length) {
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

    i = iAfterMatch15;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:)([0-9A-F...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches16 = 0;
  while (true) {
    const wrappedResult = fiber0044(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches16++;

      if (matches16 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...Fa-f]{0,3}:)([0-9A-Fa...
   *              ^
   */
  const iAfterMatch17 = i + 1;
  if (iAfterMatch17 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch17;
  }
  /*
   * groupEndMarker
   * ...a-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)([0-9A-Fa-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart9 = context.groupMarkerStartTemp9;
  context.groupMarkerEnd9 = i;
  /*
   * groupStartMarker
   * ...-f]{0,3}:)([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp10 = i;
  /*
   * nonBacktrackingDisjunction
   * ...-f]{0,3}:)([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck20 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck20 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue20 =
    (firstCharQuickCheck20 << 16) ^ secondCharQuickCheck20;

  nonBacktrackingDisjunction20: {
    if ((quickCheckValue20 & 2139095040) === 0) {
      const length0 = fiber0041(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction20;
      }
    }
    if ((quickCheckValue20 & 2147418112) === 3801088) {
      const length1 = fiber0043(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction20;
      }
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...-f]{0,3}:)([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart10 = context.groupMarkerStartTemp10;
  context.groupMarkerEnd10 = i;
  /*
   * groupEndMarker
   * ...\s✱)|(\s✱(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|([0-9A-Fa...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart8 = context.groupMarkerStartTemp8;
  context.groupMarkerEnd8 = i;
  return fiber0039(i, str, context);
};
const fiber0041 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...f]{0,3}:)([0-9A-Fa-f][0-9A-Fa-f...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|([0-9...
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
   * charSequence
   * ...a-f]{0,3}|:))|([0-9A-...
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
  return i;
};
const fiber0044 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:)([0...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9...
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
   * ...-f]{0,3}:)(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart13 = context.groupMarkerStartTemp13;
  context.groupMarkerEnd13 = i;
  /*
   * groupEndMarker
   * ...{0,3}|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0-9A-Fa...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart11 = context.groupMarkerStartTemp11;
  context.groupMarkerEnd11 = i;
  return fiber0039(i, str, context);
};
const fiber0052 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...f]{0,3}:)(:[0-9A-Fa-f...
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
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart17 = context.groupMarkerStartTemp17;
  context.groupMarkerEnd17 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart16 = context.groupMarkerStartTemp16;
  context.groupMarkerEnd16 = i;
  /*
   * groupEndMarker
   * ...a-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0-9...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart14 = context.groupMarkerStartTemp14;
  context.groupMarkerEnd14 = i;
  return fiber0051(i, str, context);
};
const fiber0055 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0056(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0057(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
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
   * charSequence
   * ...d\d|[1-9]?\d)))|:))|([...
   *              ^^
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
  return fiber0054(i, str, context);
};
const fiber0060 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)))|:))...
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
   * ...\d)|1\d\d|[1-9]?\d)))|:))|...
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
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp16 = i;
  /*
   * charSequence
   * ...[1-9]?\d)(\.(2(?:5[0-5...
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
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp17 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  if ((quickCheckValue3 & 2147450872) === 3276848) {
    const length0 = fiber0055(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart11 = -1;
    context.groupMarkerEnd11 = -1;
    context.groupMarkerStart13 = -1;
    context.groupMarkerEnd13 = -1;
    context.groupMarkerStart14 = -1;
    context.groupMarkerEnd14 = -1;
    context.groupMarkerStart16 = -1;
    context.groupMarkerEnd16 = -1;
    context.groupMarkerStart17 = -1;
    context.groupMarkerEnd17 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2147450864) === 3211312) {
    const length1 = fiber0058(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart11 = -1;
    context.groupMarkerEnd11 = -1;
    context.groupMarkerStart13 = -1;
    context.groupMarkerEnd13 = -1;
    context.groupMarkerStart14 = -1;
    context.groupMarkerEnd14 = -1;
    context.groupMarkerStart16 = -1;
    context.groupMarkerEnd16 = -1;
    context.groupMarkerStart17 = -1;
    context.groupMarkerEnd17 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2146435072) === 3145728) {
    const length2 = fiber0061(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart11 = -1;
    context.groupMarkerEnd11 = -1;
    context.groupMarkerStart13 = -1;
    context.groupMarkerEnd13 = -1;
    context.groupMarkerStart14 = -1;
    context.groupMarkerEnd14 = -1;
    context.groupMarkerStart16 = -1;
    context.groupMarkerEnd16 = -1;
    context.groupMarkerStart17 = -1;
    context.groupMarkerEnd17 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0063 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...]?\d)\.(?:2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0064(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0065(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  return fiber0062(i, str, context);
};
const fiber0064 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...)\.(?:2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
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
   * charSequence
   * ...d\d|[1-9]?\d)(\.(2(?:5...
   *              ^^
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
  return fiber0062(i, str, context);
};
const fiber0068 = (i: number, str: string, context: Context): number => {
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
const fiber0069 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(?...
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
   * charSequence
   * ...|[1-9]?\d)\.(?:2(?:5[0...
   *              ^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 46;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * disjunction
   * ...1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  if ((quickCheckValue1 & 2147450872) === 3276848) {
    const length0 = fiber0063(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart11 = -1;
    context.groupMarkerEnd11 = -1;
    context.groupMarkerStart13 = -1;
    context.groupMarkerEnd13 = -1;
    context.groupMarkerStart14 = -1;
    context.groupMarkerEnd14 = -1;
    context.groupMarkerStart16 = -1;
    context.groupMarkerEnd16 = -1;
    context.groupMarkerStart17 = -1;
    context.groupMarkerEnd17 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue1 & 2147450864) === 3211312) {
    const length1 = fiber0066(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart11 = -1;
    context.groupMarkerEnd11 = -1;
    context.groupMarkerStart13 = -1;
    context.groupMarkerEnd13 = -1;
    context.groupMarkerStart14 = -1;
    context.groupMarkerEnd14 = -1;
    context.groupMarkerStart16 = -1;
    context.groupMarkerEnd16 = -1;
    context.groupMarkerStart17 = -1;
    context.groupMarkerEnd17 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue1 & 2146467808) === 3145760) {
    const length2 = fiber0069(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart11 = -1;
    context.groupMarkerEnd11 = -1;
    context.groupMarkerStart13 = -1;
    context.groupMarkerEnd13 = -1;
    context.groupMarkerStart14 = -1;
    context.groupMarkerEnd14 = -1;
    context.groupMarkerStart16 = -1;
    context.groupMarkerEnd16 = -1;
    context.groupMarkerStart17 = -1;
    context.groupMarkerEnd17 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0071 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...]?\d)\.(?:2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0072(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0073(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  return fiber0070(i, str, context);
};
const fiber0072 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...)\.(?:2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
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
   * charSequence
   * ...d\d|[1-9]?\d)\.(?:2(?:...
   *              ^^
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
  return fiber0070(i, str, context);
};
const fiber0076 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2...
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
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2(...
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
   * ...-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart15 = context.groupMarkerStartTemp15;
  context.groupMarkerEnd15 = i;
  /*
   * charSequence
   * ...|[1-9]?\d)\.(?:2(?:5[0...
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
   * disjunction
   * ...1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck2 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck2 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue2 = (firstCharQuickCheck2 << 16) ^ secondCharQuickCheck2;

  if ((quickCheckValue2 & 2147450872) === 3276848) {
    const length0 = fiber0071(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart11 = -1;
    context.groupMarkerEnd11 = -1;
    context.groupMarkerStart13 = -1;
    context.groupMarkerEnd13 = -1;
    context.groupMarkerStart14 = -1;
    context.groupMarkerEnd14 = -1;
    context.groupMarkerStart16 = -1;
    context.groupMarkerEnd16 = -1;
    context.groupMarkerStart17 = -1;
    context.groupMarkerEnd17 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue2 & 2147450864) === 3211312) {
    const length1 = fiber0074(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart11 = -1;
    context.groupMarkerEnd11 = -1;
    context.groupMarkerStart13 = -1;
    context.groupMarkerEnd13 = -1;
    context.groupMarkerStart14 = -1;
    context.groupMarkerEnd14 = -1;
    context.groupMarkerStart16 = -1;
    context.groupMarkerEnd16 = -1;
    context.groupMarkerStart17 = -1;
    context.groupMarkerEnd17 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue2 & 2146467808) === 3145760) {
    const length2 = fiber0077(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart11 = -1;
    context.groupMarkerEnd11 = -1;
    context.groupMarkerStart13 = -1;
    context.groupMarkerEnd13 = -1;
    context.groupMarkerStart14 = -1;
    context.groupMarkerEnd14 = -1;
    context.groupMarkerStart16 = -1;
    context.groupMarkerEnd16 = -1;
    context.groupMarkerStart17 = -1;
    context.groupMarkerEnd17 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0079 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...f]{0,3}|((2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0080(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0081(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
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
   * charSequence
   * ...d\d|[1-9]?\d)\.(?:2(?:...
   *              ^^
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
  return fiber0078(i, str, context);
};
const fiber0084 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2...
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
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2(...
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
   * ...a-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0-9...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp14 = i;
  /*
   * groupStartMarker
   * ...-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp15 = i;
  /*
   * disjunction
   * ...-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck2 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck2 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue2 = (firstCharQuickCheck2 << 16) ^ secondCharQuickCheck2;

  if ((quickCheckValue2 & 2147450872) === 3276848) {
    const length0 = fiber0079(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart11 = -1;
    context.groupMarkerEnd11 = -1;
    context.groupMarkerStart13 = -1;
    context.groupMarkerEnd13 = -1;
    context.groupMarkerStart14 = -1;
    context.groupMarkerEnd14 = -1;
    context.groupMarkerStart15 = -1;
    context.groupMarkerEnd15 = -1;
    context.groupMarkerStart16 = -1;
    context.groupMarkerEnd16 = -1;
    context.groupMarkerStart17 = -1;
    context.groupMarkerEnd17 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue2 & 2147450864) === 3211312) {
    const length1 = fiber0082(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart11 = -1;
    context.groupMarkerEnd11 = -1;
    context.groupMarkerStart13 = -1;
    context.groupMarkerEnd13 = -1;
    context.groupMarkerStart14 = -1;
    context.groupMarkerEnd14 = -1;
    context.groupMarkerStart15 = -1;
    context.groupMarkerEnd15 = -1;
    context.groupMarkerStart16 = -1;
    context.groupMarkerEnd16 = -1;
    context.groupMarkerStart17 = -1;
    context.groupMarkerEnd17 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue2 & 2146467808) === 3145760) {
    const length2 = fiber0085(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart11 = -1;
    context.groupMarkerEnd11 = -1;
    context.groupMarkerStart13 = -1;
    context.groupMarkerEnd13 = -1;
    context.groupMarkerStart14 = -1;
    context.groupMarkerEnd14 = -1;
    context.groupMarkerStart15 = -1;
    context.groupMarkerEnd15 = -1;
    context.groupMarkerStart16 = -1;
    context.groupMarkerEnd16 = -1;
    context.groupMarkerStart17 = -1;
    context.groupMarkerEnd17 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0087 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...-9]?\d)))|:))|([0-9A-...
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
  return fiber0051(i, str, context);
};
const fiber0088 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...{0,3}|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0-9A-Fa...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp11 = i;
  /*
   * charSequence
   * ...0,3}|:))|([0-9A-Fa-f][0-9A-Fa-f...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0094(i, str, context);

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
   * ...Fa-f]{0,3}:[0-9A-Fa-f...
   *              ^
   */
  const iAfterMatch3 = i + 2;
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

    i = iAfterMatch3;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches4 = 0;
  while (true) {
    const wrappedResult = fiber0093(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches4++;

      if (matches4 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...Fa-f]{0,3}:[0-9A-Fa-f...
   *              ^
   */
  const iAfterMatch5 = i + 2;
  if (iAfterMatch5 > str.length) {
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

    i = iAfterMatch5;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches6 = 0;
  while (true) {
    const wrappedResult = fiber0092(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches6++;

      if (matches6 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...Fa-f]{0,3}:[0-9A-Fa-f...
   *              ^
   */
  const iAfterMatch7 = i + 2;
  if (iAfterMatch7 > str.length) {
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

    i = iAfterMatch7;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches8 = 0;
  while (true) {
    const wrappedResult = fiber0091(i, str, context);

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
   * charSequence
   * ...Fa-f]{0,3}:[0-9A-Fa-f...
   *              ^
   */
  const iAfterMatch9 = i + 2;
  if (iAfterMatch9 > str.length) {
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

    i = iAfterMatch9;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches10 = 0;
  while (true) {
    const wrappedResult = fiber0090(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches10++;

      if (matches10 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...Fa-f]{0,3}:([0-9A-Fa-...
   *              ^
   */
  const iAfterMatch11 = i + 1;
  if (iAfterMatch11 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch11;
  }
  /*
   * groupStartMarker
   * ...a-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(:[0-9A-Fa...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp12 = i;
  /*
   * charSequence
   * ...-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  const iAfterMatch13 = i + 1;
  if (iAfterMatch13 > str.length) {
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

    i = iAfterMatch13;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(:[0-9A-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches14 = 0;
  while (true) {
    const wrappedResult = fiber0089(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches14++;

      if (matches14 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...Fa-f]{0,3}:)(:[0-9A-F...
   *              ^
   */
  const iAfterMatch15 = i + 1;
  if (iAfterMatch15 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch15;
  }
  /*
   * groupEndMarker
   * ...a-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(:[0-9A-Fa...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart12 = context.groupMarkerStartTemp12;
  context.groupMarkerEnd12 = i;
  /*
   * groupStartMarker
   * ...-f]{0,3}:)(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp13 = i;
  /*
   * disjunction
   * ...-f]{0,3}:)(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck18 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck18 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue18 =
    (firstCharQuickCheck18 << 16) ^ secondCharQuickCheck18;

  if ((quickCheckValue18 & 2147450752) === 3801088) {
    const length0 = fiber0052(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart11 = -1;
    context.groupMarkerEnd11 = -1;
    context.groupMarkerStart13 = -1;
    context.groupMarkerEnd13 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue18 & 2146467808) === 3145760) {
    const length1 = fiber0086(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart11 = -1;
    context.groupMarkerEnd11 = -1;
    context.groupMarkerStart13 = -1;
    context.groupMarkerEnd13 = -1;
    context.groupMarkerStart14 = -1;
    context.groupMarkerEnd14 = -1;
    context.groupMarkerStart15 = -1;
    context.groupMarkerEnd15 = -1;
    context.groupMarkerStart16 = -1;
    context.groupMarkerEnd16 = -1;
    context.groupMarkerStart17 = -1;
    context.groupMarkerEnd17 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue18 & 2147418112) === 3801088) {
    const length2 = fiber0087(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart11 = -1;
    context.groupMarkerEnd11 = -1;
    context.groupMarkerStart13 = -1;
    context.groupMarkerEnd13 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0089 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(:[...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9...
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
   * ...-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart20 = context.groupMarkerStartTemp20;
  context.groupMarkerEnd20 = i;
  /*
   * groupEndMarker
   * ...\d)))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0-9A-Fa...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart18 = context.groupMarkerStartTemp18;
  context.groupMarkerEnd18 = i;
  return fiber0039(i, str, context);
};
const fiber0096 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp21 = i;
  /*
   * nonBacktrackingQuantifier
   * ...]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(...
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
   * ...f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart21 = context.groupMarkerStartTemp21;
  context.groupMarkerEnd21 = i;
  return fiber0095(i, str, context);
};
const fiber0097 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp22 = i;
  /*
   * charSequence
   * ...{0,3}:)(((:[0-9A-Fa-f...
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
   * ...]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?...
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
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart26 = context.groupMarkerStartTemp26;
  context.groupMarkerEnd26 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart25 = context.groupMarkerStartTemp25;
  context.groupMarkerEnd25 = i;
  /*
   * groupEndMarker
   * ...1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0-9...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart23 = context.groupMarkerStartTemp23;
  context.groupMarkerEnd23 = i;
  return fiber0095(i, str, context);
};
const fiber0101 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0102(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0103(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
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
   * charSequence
   * ...d\d|[1-9]?\d)))|)))|([...
   *              ^^
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
  return fiber0100(i, str, context);
};
const fiber0106 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)))|)))...
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
   * ...\d)|1\d\d|[1-9]?\d)))|)))|...
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
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp25 = i;
  /*
   * charSequence
   * ...[1-9]?\d)(\.(2(?:5[0-5...
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
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp26 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  if ((quickCheckValue3 & 2147450872) === 3276848) {
    const length0 = fiber0101(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart18 = -1;
    context.groupMarkerEnd18 = -1;
    context.groupMarkerStart20 = -1;
    context.groupMarkerEnd20 = -1;
    context.groupMarkerStart23 = -1;
    context.groupMarkerEnd23 = -1;
    context.groupMarkerStart25 = -1;
    context.groupMarkerEnd25 = -1;
    context.groupMarkerStart26 = -1;
    context.groupMarkerEnd26 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2147450864) === 3211312) {
    const length1 = fiber0104(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart18 = -1;
    context.groupMarkerEnd18 = -1;
    context.groupMarkerStart20 = -1;
    context.groupMarkerEnd20 = -1;
    context.groupMarkerStart23 = -1;
    context.groupMarkerEnd23 = -1;
    context.groupMarkerStart25 = -1;
    context.groupMarkerEnd25 = -1;
    context.groupMarkerStart26 = -1;
    context.groupMarkerEnd26 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2146435072) === 3145728) {
    const length2 = fiber0107(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart18 = -1;
    context.groupMarkerEnd18 = -1;
    context.groupMarkerStart20 = -1;
    context.groupMarkerEnd20 = -1;
    context.groupMarkerStart23 = -1;
    context.groupMarkerEnd23 = -1;
    context.groupMarkerStart25 = -1;
    context.groupMarkerEnd25 = -1;
    context.groupMarkerStart26 = -1;
    context.groupMarkerEnd26 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0109 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...]?\d)\.(?:2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0110(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0111(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  return fiber0108(i, str, context);
};
const fiber0110 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...)\.(?:2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
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
   * charSequence
   * ...d\d|[1-9]?\d)(\.(2(?:5...
   *              ^^
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
  return fiber0108(i, str, context);
};
const fiber0114 = (i: number, str: string, context: Context): number => {
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
const fiber0115 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(?...
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
   * charSequence
   * ...|[1-9]?\d)\.(?:2(?:5[0...
   *              ^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 46;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * disjunction
   * ...1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  if ((quickCheckValue1 & 2147450872) === 3276848) {
    const length0 = fiber0109(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart18 = -1;
    context.groupMarkerEnd18 = -1;
    context.groupMarkerStart20 = -1;
    context.groupMarkerEnd20 = -1;
    context.groupMarkerStart23 = -1;
    context.groupMarkerEnd23 = -1;
    context.groupMarkerStart25 = -1;
    context.groupMarkerEnd25 = -1;
    context.groupMarkerStart26 = -1;
    context.groupMarkerEnd26 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue1 & 2147450864) === 3211312) {
    const length1 = fiber0112(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart18 = -1;
    context.groupMarkerEnd18 = -1;
    context.groupMarkerStart20 = -1;
    context.groupMarkerEnd20 = -1;
    context.groupMarkerStart23 = -1;
    context.groupMarkerEnd23 = -1;
    context.groupMarkerStart25 = -1;
    context.groupMarkerEnd25 = -1;
    context.groupMarkerStart26 = -1;
    context.groupMarkerEnd26 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue1 & 2146467808) === 3145760) {
    const length2 = fiber0115(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart18 = -1;
    context.groupMarkerEnd18 = -1;
    context.groupMarkerStart20 = -1;
    context.groupMarkerEnd20 = -1;
    context.groupMarkerStart23 = -1;
    context.groupMarkerEnd23 = -1;
    context.groupMarkerStart25 = -1;
    context.groupMarkerEnd25 = -1;
    context.groupMarkerStart26 = -1;
    context.groupMarkerEnd26 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0117 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...]?\d)\.(?:2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0118(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0119(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  return fiber0116(i, str, context);
};
const fiber0118 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...)\.(?:2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
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
   * charSequence
   * ...d\d|[1-9]?\d)\.(?:2(?:...
   *              ^^
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
  return fiber0116(i, str, context);
};
const fiber0122 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2...
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
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2(...
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
   * ...,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart24 = context.groupMarkerStartTemp24;
  context.groupMarkerEnd24 = i;
  /*
   * charSequence
   * ...|[1-9]?\d)\.(?:2(?:5[0...
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
   * disjunction
   * ...1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck2 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck2 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue2 = (firstCharQuickCheck2 << 16) ^ secondCharQuickCheck2;

  if ((quickCheckValue2 & 2147450872) === 3276848) {
    const length0 = fiber0117(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart18 = -1;
    context.groupMarkerEnd18 = -1;
    context.groupMarkerStart20 = -1;
    context.groupMarkerEnd20 = -1;
    context.groupMarkerStart23 = -1;
    context.groupMarkerEnd23 = -1;
    context.groupMarkerStart25 = -1;
    context.groupMarkerEnd25 = -1;
    context.groupMarkerStart26 = -1;
    context.groupMarkerEnd26 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue2 & 2147450864) === 3211312) {
    const length1 = fiber0120(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart18 = -1;
    context.groupMarkerEnd18 = -1;
    context.groupMarkerStart20 = -1;
    context.groupMarkerEnd20 = -1;
    context.groupMarkerStart23 = -1;
    context.groupMarkerEnd23 = -1;
    context.groupMarkerStart25 = -1;
    context.groupMarkerEnd25 = -1;
    context.groupMarkerStart26 = -1;
    context.groupMarkerEnd26 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue2 & 2146467808) === 3145760) {
    const length2 = fiber0123(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart18 = -1;
    context.groupMarkerEnd18 = -1;
    context.groupMarkerStart20 = -1;
    context.groupMarkerEnd20 = -1;
    context.groupMarkerStart23 = -1;
    context.groupMarkerEnd23 = -1;
    context.groupMarkerStart25 = -1;
    context.groupMarkerEnd25 = -1;
    context.groupMarkerStart26 = -1;
    context.groupMarkerEnd26 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0125 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...2})|:(?:((2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0126(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0127(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
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
   * charSequence
   * ...d\d|[1-9]?\d)\.(?:2(?:...
   *              ^^
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
  return fiber0124(i, str, context);
};
const fiber0130 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2...
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
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2(...
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
   * ...1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0-9...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp23 = i;
  /*
   * groupStartMarker
   * ...,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp24 = i;
  /*
   * disjunction
   * ...,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck2 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck2 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue2 = (firstCharQuickCheck2 << 16) ^ secondCharQuickCheck2;

  if ((quickCheckValue2 & 2147450872) === 3276848) {
    const length0 = fiber0125(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart18 = -1;
    context.groupMarkerEnd18 = -1;
    context.groupMarkerStart20 = -1;
    context.groupMarkerEnd20 = -1;
    context.groupMarkerStart23 = -1;
    context.groupMarkerEnd23 = -1;
    context.groupMarkerStart24 = -1;
    context.groupMarkerEnd24 = -1;
    context.groupMarkerStart25 = -1;
    context.groupMarkerEnd25 = -1;
    context.groupMarkerStart26 = -1;
    context.groupMarkerEnd26 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue2 & 2147450864) === 3211312) {
    const length1 = fiber0128(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart18 = -1;
    context.groupMarkerEnd18 = -1;
    context.groupMarkerStart20 = -1;
    context.groupMarkerEnd20 = -1;
    context.groupMarkerStart23 = -1;
    context.groupMarkerEnd23 = -1;
    context.groupMarkerStart24 = -1;
    context.groupMarkerEnd24 = -1;
    context.groupMarkerStart25 = -1;
    context.groupMarkerEnd25 = -1;
    context.groupMarkerStart26 = -1;
    context.groupMarkerEnd26 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue2 & 2146467808) === 3145760) {
    const length2 = fiber0131(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart18 = -1;
    context.groupMarkerEnd18 = -1;
    context.groupMarkerStart20 = -1;
    context.groupMarkerEnd20 = -1;
    context.groupMarkerStart23 = -1;
    context.groupMarkerEnd23 = -1;
    context.groupMarkerStart24 = -1;
    context.groupMarkerEnd24 = -1;
    context.groupMarkerStart25 = -1;
    context.groupMarkerEnd25 = -1;
    context.groupMarkerStart26 = -1;
    context.groupMarkerEnd26 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0133 = (i: number, str: string, context: Context): number => {
  return fiber0095(i, str, context);
};
const fiber0134 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...3}){1,2})|:(?:((2(?:5...
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
   * disjunction
   * ...}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  if ((quickCheckValue1 & 2146467808) === 3145760) {
    const length0 = fiber0132(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart18 = -1;
    context.groupMarkerEnd18 = -1;
    context.groupMarkerStart20 = -1;
    context.groupMarkerEnd20 = -1;
    context.groupMarkerStart23 = -1;
    context.groupMarkerEnd23 = -1;
    context.groupMarkerStart24 = -1;
    context.groupMarkerEnd24 = -1;
    context.groupMarkerStart25 = -1;
    context.groupMarkerEnd25 = -1;
    context.groupMarkerStart26 = -1;
    context.groupMarkerEnd26 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  {
    const length1 = fiber0133(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart18 = -1;
    context.groupMarkerEnd18 = -1;
    context.groupMarkerStart20 = -1;
    context.groupMarkerEnd20 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0135 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...\d)))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0-9A-Fa...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp18 = i;
  /*
   * charSequence
   * ...d)))|:))|([0-9A-Fa-f][0-9A-Fa-f...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0140(i, str, context);

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
   * ...Fa-f]{0,3}:[0-9A-Fa-f...
   *              ^
   */
  const iAfterMatch3 = i + 2;
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

    i = iAfterMatch3;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches4 = 0;
  while (true) {
    const wrappedResult = fiber0139(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches4++;

      if (matches4 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...Fa-f]{0,3}:[0-9A-Fa-f...
   *              ^
   */
  const iAfterMatch5 = i + 2;
  if (iAfterMatch5 > str.length) {
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

    i = iAfterMatch5;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches6 = 0;
  while (true) {
    const wrappedResult = fiber0138(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches6++;

      if (matches6 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...Fa-f]{0,3}:[0-9A-Fa-f...
   *              ^
   */
  const iAfterMatch7 = i + 2;
  if (iAfterMatch7 > str.length) {
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

    i = iAfterMatch7;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches8 = 0;
  while (true) {
    const wrappedResult = fiber0137(i, str, context);

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
   * charSequence
   * ...Fa-f]{0,3}:([0-9A-Fa-...
   *              ^
   */
  const iAfterMatch9 = i + 1;
  if (iAfterMatch9 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch9;
  }
  /*
   * groupStartMarker
   * ...a-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp19 = i;
  /*
   * charSequence
   * ...-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  const iAfterMatch11 = i + 1;
  if (iAfterMatch11 > str.length) {
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

    i = iAfterMatch11;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches12 = 0;
  while (true) {
    const wrappedResult = fiber0136(i, str, context);

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
   * charSequence
   * ...Fa-f]{0,3}:)(((:[0-9A...
   *              ^
   */
  const iAfterMatch13 = i + 1;
  if (iAfterMatch13 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch13;
  }
  /*
   * groupEndMarker
   * ...a-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart19 = context.groupMarkerStartTemp19;
  context.groupMarkerEnd19 = i;
  /*
   * groupStartMarker
   * ...-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp20 = i;
  /*
   * disjunction
   * ...-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck16 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck16 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue16 =
    (firstCharQuickCheck16 << 16) ^ secondCharQuickCheck16;

  if ((quickCheckValue16 & 2147450752) === 3801088) {
    const length0 = fiber0096(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart18 = -1;
    context.groupMarkerEnd18 = -1;
    context.groupMarkerStart20 = -1;
    context.groupMarkerEnd20 = -1;
    context.groupMarkerStart21 = -1;
    context.groupMarkerEnd21 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue16 & 2147418112) === 3801088) {
    const length1 = fiber0134(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart18 = -1;
    context.groupMarkerEnd18 = -1;
    context.groupMarkerStart20 = -1;
    context.groupMarkerEnd20 = -1;
    context.groupMarkerStart23 = -1;
    context.groupMarkerEnd23 = -1;
    context.groupMarkerStart24 = -1;
    context.groupMarkerEnd24 = -1;
    context.groupMarkerStart25 = -1;
    context.groupMarkerEnd25 = -1;
    context.groupMarkerStart26 = -1;
    context.groupMarkerEnd26 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0136 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9...
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
   * ...-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart29 = context.groupMarkerStartTemp29;
  context.groupMarkerEnd29 = i;
  /*
   * groupEndMarker
   * ...\d)))|)))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart27 = context.groupMarkerStartTemp27;
  context.groupMarkerEnd27 = i;
  return fiber0039(i, str, context);
};
const fiber0142 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp30 = i;
  /*
   * nonBacktrackingQuantifier
   * ...]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A...
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
   * ...f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart30 = context.groupMarkerStartTemp30;
  context.groupMarkerEnd30 = i;
  return fiber0141(i, str, context);
};
const fiber0143 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp31 = i;
  /*
   * charSequence
   * ...{0,3}:)(((:[0-9A-Fa-f...
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
   * ...]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:...
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
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart37 = context.groupMarkerStartTemp37;
  context.groupMarkerEnd37 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart36 = context.groupMarkerStartTemp36;
  context.groupMarkerEnd36 = i;
  /*
   * groupEndMarker
   * ...f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart34 = context.groupMarkerStartTemp34;
  context.groupMarkerEnd34 = i;
  /*
   * groupEndMarker
   * ...3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart32 = context.groupMarkerStartTemp32;
  context.groupMarkerEnd32 = i;
  return fiber0141(i, str, context);
};
const fiber0146 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0147(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0148(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
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
   * charSequence
   * ...d\d|[1-9]?\d))))|:))|(...
   *              ^^
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
  return fiber0145(i, str, context);
};
const fiber0151 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d))))|:)...
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
   * ...\d)|1\d\d|[1-9]?\d))))|:))...
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
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp36 = i;
  /*
   * charSequence
   * ...[1-9]?\d)(\.(2(?:5[0-5...
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
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp37 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  if ((quickCheckValue3 & 2147450872) === 3276848) {
    const length0 = fiber0146(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart27 = -1;
    context.groupMarkerEnd27 = -1;
    context.groupMarkerStart29 = -1;
    context.groupMarkerEnd29 = -1;
    context.groupMarkerStart32 = -1;
    context.groupMarkerEnd32 = -1;
    context.groupMarkerStart34 = -1;
    context.groupMarkerEnd34 = -1;
    context.groupMarkerStart36 = -1;
    context.groupMarkerEnd36 = -1;
    context.groupMarkerStart37 = -1;
    context.groupMarkerEnd37 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2147450864) === 3211312) {
    const length1 = fiber0149(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart27 = -1;
    context.groupMarkerEnd27 = -1;
    context.groupMarkerStart29 = -1;
    context.groupMarkerEnd29 = -1;
    context.groupMarkerStart32 = -1;
    context.groupMarkerEnd32 = -1;
    context.groupMarkerStart34 = -1;
    context.groupMarkerEnd34 = -1;
    context.groupMarkerStart36 = -1;
    context.groupMarkerEnd36 = -1;
    context.groupMarkerStart37 = -1;
    context.groupMarkerEnd37 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2146435072) === 3145728) {
    const length2 = fiber0152(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart27 = -1;
    context.groupMarkerEnd27 = -1;
    context.groupMarkerStart29 = -1;
    context.groupMarkerEnd29 = -1;
    context.groupMarkerStart32 = -1;
    context.groupMarkerEnd32 = -1;
    context.groupMarkerStart34 = -1;
    context.groupMarkerEnd34 = -1;
    context.groupMarkerStart36 = -1;
    context.groupMarkerEnd36 = -1;
    context.groupMarkerStart37 = -1;
    context.groupMarkerEnd37 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0154 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...]?\d)\.(?:2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0155(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0156(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  return fiber0153(i, str, context);
};
const fiber0155 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...)\.(?:2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
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
   * charSequence
   * ...d\d|[1-9]?\d)(\.(2(?:5...
   *              ^^
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
  return fiber0153(i, str, context);
};
const fiber0159 = (i: number, str: string, context: Context): number => {
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
const fiber0160 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(?...
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
   * charSequence
   * ...|[1-9]?\d)\.(?:2(?:5[0...
   *              ^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 46;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * disjunction
   * ...1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  if ((quickCheckValue1 & 2147450872) === 3276848) {
    const length0 = fiber0154(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart27 = -1;
    context.groupMarkerEnd27 = -1;
    context.groupMarkerStart29 = -1;
    context.groupMarkerEnd29 = -1;
    context.groupMarkerStart32 = -1;
    context.groupMarkerEnd32 = -1;
    context.groupMarkerStart34 = -1;
    context.groupMarkerEnd34 = -1;
    context.groupMarkerStart36 = -1;
    context.groupMarkerEnd36 = -1;
    context.groupMarkerStart37 = -1;
    context.groupMarkerEnd37 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue1 & 2147450864) === 3211312) {
    const length1 = fiber0157(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart27 = -1;
    context.groupMarkerEnd27 = -1;
    context.groupMarkerStart29 = -1;
    context.groupMarkerEnd29 = -1;
    context.groupMarkerStart32 = -1;
    context.groupMarkerEnd32 = -1;
    context.groupMarkerStart34 = -1;
    context.groupMarkerEnd34 = -1;
    context.groupMarkerStart36 = -1;
    context.groupMarkerEnd36 = -1;
    context.groupMarkerStart37 = -1;
    context.groupMarkerEnd37 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue1 & 2146467808) === 3145760) {
    const length2 = fiber0160(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart27 = -1;
    context.groupMarkerEnd27 = -1;
    context.groupMarkerStart29 = -1;
    context.groupMarkerEnd29 = -1;
    context.groupMarkerStart32 = -1;
    context.groupMarkerEnd32 = -1;
    context.groupMarkerStart34 = -1;
    context.groupMarkerEnd34 = -1;
    context.groupMarkerStart36 = -1;
    context.groupMarkerEnd36 = -1;
    context.groupMarkerStart37 = -1;
    context.groupMarkerEnd37 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0162 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...]?\d)\.(?:2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0163(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0164(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  return fiber0161(i, str, context);
};
const fiber0163 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...)\.(?:2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
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
   * charSequence
   * ...d\d|[1-9]?\d)\.(?:2(?:...
   *              ^^
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
  return fiber0161(i, str, context);
};
const fiber0167 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2...
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
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2(...
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
   * ...]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart35 = context.groupMarkerStartTemp35;
  context.groupMarkerEnd35 = i;
  /*
   * charSequence
   * ...|[1-9]?\d)\.(?:2(?:5[0...
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
   * disjunction
   * ...1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck2 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck2 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue2 = (firstCharQuickCheck2 << 16) ^ secondCharQuickCheck2;

  if ((quickCheckValue2 & 2147450872) === 3276848) {
    const length0 = fiber0162(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart27 = -1;
    context.groupMarkerEnd27 = -1;
    context.groupMarkerStart29 = -1;
    context.groupMarkerEnd29 = -1;
    context.groupMarkerStart32 = -1;
    context.groupMarkerEnd32 = -1;
    context.groupMarkerStart34 = -1;
    context.groupMarkerEnd34 = -1;
    context.groupMarkerStart36 = -1;
    context.groupMarkerEnd36 = -1;
    context.groupMarkerStart37 = -1;
    context.groupMarkerEnd37 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue2 & 2147450864) === 3211312) {
    const length1 = fiber0165(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart27 = -1;
    context.groupMarkerEnd27 = -1;
    context.groupMarkerStart29 = -1;
    context.groupMarkerEnd29 = -1;
    context.groupMarkerStart32 = -1;
    context.groupMarkerEnd32 = -1;
    context.groupMarkerStart34 = -1;
    context.groupMarkerEnd34 = -1;
    context.groupMarkerStart36 = -1;
    context.groupMarkerEnd36 = -1;
    context.groupMarkerStart37 = -1;
    context.groupMarkerEnd37 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue2 & 2146467808) === 3145760) {
    const length2 = fiber0168(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart27 = -1;
    context.groupMarkerEnd27 = -1;
    context.groupMarkerStart29 = -1;
    context.groupMarkerEnd29 = -1;
    context.groupMarkerStart32 = -1;
    context.groupMarkerEnd32 = -1;
    context.groupMarkerStart34 = -1;
    context.groupMarkerEnd34 = -1;
    context.groupMarkerStart36 = -1;
    context.groupMarkerEnd36 = -1;
    context.groupMarkerStart37 = -1;
    context.groupMarkerEnd37 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0170 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...{0,3})?:((2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0171(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0172(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
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
   * charSequence
   * ...d\d|[1-9]?\d)\.(?:2(?:...
   *              ^^
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
  return fiber0169(i, str, context);
};
const fiber0175 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2...
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
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2(...
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
   * charSequence
   * ...-f]{0,3})?:((2(?:5[0-...
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
   * ...f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp34 = i;
  /*
   * groupStartMarker
   * ...]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp35 = i;
  /*
   * disjunction
   * ...]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  if ((quickCheckValue3 & 2147450872) === 3276848) {
    const length0 = fiber0170(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart27 = -1;
    context.groupMarkerEnd27 = -1;
    context.groupMarkerStart29 = -1;
    context.groupMarkerEnd29 = -1;
    context.groupMarkerStart32 = -1;
    context.groupMarkerEnd32 = -1;
    context.groupMarkerStart34 = -1;
    context.groupMarkerEnd34 = -1;
    context.groupMarkerStart35 = -1;
    context.groupMarkerEnd35 = -1;
    context.groupMarkerStart36 = -1;
    context.groupMarkerEnd36 = -1;
    context.groupMarkerStart37 = -1;
    context.groupMarkerEnd37 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2147450864) === 3211312) {
    const length1 = fiber0173(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart27 = -1;
    context.groupMarkerEnd27 = -1;
    context.groupMarkerStart29 = -1;
    context.groupMarkerEnd29 = -1;
    context.groupMarkerStart32 = -1;
    context.groupMarkerEnd32 = -1;
    context.groupMarkerStart34 = -1;
    context.groupMarkerEnd34 = -1;
    context.groupMarkerStart35 = -1;
    context.groupMarkerEnd35 = -1;
    context.groupMarkerStart36 = -1;
    context.groupMarkerEnd36 = -1;
    context.groupMarkerStart37 = -1;
    context.groupMarkerEnd37 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2146467808) === 3145760) {
    const length2 = fiber0176(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart27 = -1;
    context.groupMarkerEnd27 = -1;
    context.groupMarkerStart29 = -1;
    context.groupMarkerEnd29 = -1;
    context.groupMarkerStart32 = -1;
    context.groupMarkerEnd32 = -1;
    context.groupMarkerStart34 = -1;
    context.groupMarkerEnd34 = -1;
    context.groupMarkerStart35 = -1;
    context.groupMarkerEnd35 = -1;
    context.groupMarkerStart36 = -1;
    context.groupMarkerEnd36 = -1;
    context.groupMarkerStart37 = -1;
    context.groupMarkerEnd37 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
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
   * ...3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp32 = i;
  /*
   * quantifierStarter
   * ...}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.quantifierCounter1 = -1;
  return greedyQuantifier0179(i, str, context);
};
const fiber0182 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...9]?\d))))|:))|([0-9A-...
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
  return fiber0141(i, str, context);
};
const fiber0183 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...\d)))|)))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp27 = i;
  /*
   * charSequence
   * ...d)))|)))|([0-9A-Fa-f][0-9A-Fa-f...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0187(i, str, context);

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
   * ...Fa-f]{0,3}:[0-9A-Fa-f...
   *              ^
   */
  const iAfterMatch3 = i + 2;
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

    i = iAfterMatch3;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches4 = 0;
  while (true) {
    const wrappedResult = fiber0186(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches4++;

      if (matches4 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...Fa-f]{0,3}:[0-9A-Fa-f...
   *              ^
   */
  const iAfterMatch5 = i + 2;
  if (iAfterMatch5 > str.length) {
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

    i = iAfterMatch5;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches6 = 0;
  while (true) {
    const wrappedResult = fiber0185(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches6++;

      if (matches6 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...Fa-f]{0,3}:([0-9A-Fa-...
   *              ^
   */
  const iAfterMatch7 = i + 1;
  if (iAfterMatch7 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch7;
  }
  /*
   * groupStartMarker
   * ...a-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp28 = i;
  /*
   * charSequence
   * ...-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  const iAfterMatch9 = i + 1;
  if (iAfterMatch9 > str.length) {
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

    i = iAfterMatch9;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches10 = 0;
  while (true) {
    const wrappedResult = fiber0184(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches10++;

      if (matches10 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...Fa-f]{0,3}:)(((:[0-9A...
   *              ^
   */
  const iAfterMatch11 = i + 1;
  if (iAfterMatch11 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch11;
  }
  /*
   * groupEndMarker
   * ...a-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart28 = context.groupMarkerStartTemp28;
  context.groupMarkerEnd28 = i;
  /*
   * groupStartMarker
   * ...-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp29 = i;
  /*
   * disjunction
   * ...-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck14 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck14 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue14 =
    (firstCharQuickCheck14 << 16) ^ secondCharQuickCheck14;

  if ((quickCheckValue14 & 2147450752) === 3801088) {
    const length0 = fiber0142(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart27 = -1;
    context.groupMarkerEnd27 = -1;
    context.groupMarkerStart29 = -1;
    context.groupMarkerEnd29 = -1;
    context.groupMarkerStart30 = -1;
    context.groupMarkerEnd30 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue14 & 2147450752) === 3801088) {
    const length1 = fiber0181(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart27 = -1;
    context.groupMarkerEnd27 = -1;
    context.groupMarkerStart29 = -1;
    context.groupMarkerEnd29 = -1;
    context.groupMarkerStart32 = -1;
    context.groupMarkerEnd32 = -1;
    context.groupMarkerStart33 = -1;
    context.groupMarkerEnd33 = -1;
    context.groupMarkerStart34 = -1;
    context.groupMarkerEnd34 = -1;
    context.groupMarkerStart35 = -1;
    context.groupMarkerEnd35 = -1;
    context.groupMarkerStart36 = -1;
    context.groupMarkerEnd36 = -1;
    context.groupMarkerStart37 = -1;
    context.groupMarkerEnd37 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue14 & 2147418112) === 3801088) {
    const length2 = fiber0182(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart27 = -1;
    context.groupMarkerEnd27 = -1;
    context.groupMarkerStart29 = -1;
    context.groupMarkerEnd29 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0184 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9...
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
   * ...-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart40 = context.groupMarkerStartTemp40;
  context.groupMarkerEnd40 = i;
  /*
   * groupEndMarker
   * ...d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart38 = context.groupMarkerStartTemp38;
  context.groupMarkerEnd38 = i;
  return fiber0039(i, str, context);
};
const fiber0189 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp41 = i;
  /*
   * nonBacktrackingQuantifier
   * ...]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A...
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
   * ...f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart41 = context.groupMarkerStartTemp41;
  context.groupMarkerEnd41 = i;
  return fiber0188(i, str, context);
};
const fiber0190 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp42 = i;
  /*
   * charSequence
   * ...{0,3}:)(((:[0-9A-Fa-f...
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
   * ...]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:...
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
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart48 = context.groupMarkerStartTemp48;
  context.groupMarkerEnd48 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart47 = context.groupMarkerStartTemp47;
  context.groupMarkerEnd47 = i;
  /*
   * groupEndMarker
   * ...,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart45 = context.groupMarkerStartTemp45;
  context.groupMarkerEnd45 = i;
  /*
   * groupEndMarker
   * ...3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart43 = context.groupMarkerStartTemp43;
  context.groupMarkerEnd43 = i;
  return fiber0188(i, str, context);
};
const fiber0193 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0194(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0195(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
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
   * charSequence
   * ...d\d|[1-9]?\d))))|:))|(...
   *              ^^
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
  return fiber0192(i, str, context);
};
const fiber0198 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d))))|:)...
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
   * ...\d)|1\d\d|[1-9]?\d))))|:))...
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
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp47 = i;
  /*
   * charSequence
   * ...[1-9]?\d)(\.(2(?:5[0-5...
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
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp48 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  if ((quickCheckValue3 & 2147450872) === 3276848) {
    const length0 = fiber0193(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart38 = -1;
    context.groupMarkerEnd38 = -1;
    context.groupMarkerStart40 = -1;
    context.groupMarkerEnd40 = -1;
    context.groupMarkerStart43 = -1;
    context.groupMarkerEnd43 = -1;
    context.groupMarkerStart45 = -1;
    context.groupMarkerEnd45 = -1;
    context.groupMarkerStart47 = -1;
    context.groupMarkerEnd47 = -1;
    context.groupMarkerStart48 = -1;
    context.groupMarkerEnd48 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2147450864) === 3211312) {
    const length1 = fiber0196(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart38 = -1;
    context.groupMarkerEnd38 = -1;
    context.groupMarkerStart40 = -1;
    context.groupMarkerEnd40 = -1;
    context.groupMarkerStart43 = -1;
    context.groupMarkerEnd43 = -1;
    context.groupMarkerStart45 = -1;
    context.groupMarkerEnd45 = -1;
    context.groupMarkerStart47 = -1;
    context.groupMarkerEnd47 = -1;
    context.groupMarkerStart48 = -1;
    context.groupMarkerEnd48 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2146435072) === 3145728) {
    const length2 = fiber0199(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart38 = -1;
    context.groupMarkerEnd38 = -1;
    context.groupMarkerStart40 = -1;
    context.groupMarkerEnd40 = -1;
    context.groupMarkerStart43 = -1;
    context.groupMarkerEnd43 = -1;
    context.groupMarkerStart45 = -1;
    context.groupMarkerEnd45 = -1;
    context.groupMarkerStart47 = -1;
    context.groupMarkerEnd47 = -1;
    context.groupMarkerStart48 = -1;
    context.groupMarkerEnd48 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0201 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...]?\d)\.(?:2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0202(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0203(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  return fiber0200(i, str, context);
};
const fiber0202 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...)\.(?:2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
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
   * charSequence
   * ...d\d|[1-9]?\d)(\.(2(?:5...
   *              ^^
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
  return fiber0200(i, str, context);
};
const fiber0206 = (i: number, str: string, context: Context): number => {
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
const fiber0207 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(?...
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
   * charSequence
   * ...|[1-9]?\d)\.(?:2(?:5[0...
   *              ^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 46;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * disjunction
   * ...1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  if ((quickCheckValue1 & 2147450872) === 3276848) {
    const length0 = fiber0201(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart38 = -1;
    context.groupMarkerEnd38 = -1;
    context.groupMarkerStart40 = -1;
    context.groupMarkerEnd40 = -1;
    context.groupMarkerStart43 = -1;
    context.groupMarkerEnd43 = -1;
    context.groupMarkerStart45 = -1;
    context.groupMarkerEnd45 = -1;
    context.groupMarkerStart47 = -1;
    context.groupMarkerEnd47 = -1;
    context.groupMarkerStart48 = -1;
    context.groupMarkerEnd48 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue1 & 2147450864) === 3211312) {
    const length1 = fiber0204(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart38 = -1;
    context.groupMarkerEnd38 = -1;
    context.groupMarkerStart40 = -1;
    context.groupMarkerEnd40 = -1;
    context.groupMarkerStart43 = -1;
    context.groupMarkerEnd43 = -1;
    context.groupMarkerStart45 = -1;
    context.groupMarkerEnd45 = -1;
    context.groupMarkerStart47 = -1;
    context.groupMarkerEnd47 = -1;
    context.groupMarkerStart48 = -1;
    context.groupMarkerEnd48 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue1 & 2146467808) === 3145760) {
    const length2 = fiber0207(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart38 = -1;
    context.groupMarkerEnd38 = -1;
    context.groupMarkerStart40 = -1;
    context.groupMarkerEnd40 = -1;
    context.groupMarkerStart43 = -1;
    context.groupMarkerEnd43 = -1;
    context.groupMarkerStart45 = -1;
    context.groupMarkerEnd45 = -1;
    context.groupMarkerStart47 = -1;
    context.groupMarkerEnd47 = -1;
    context.groupMarkerStart48 = -1;
    context.groupMarkerEnd48 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0209 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...]?\d)\.(?:2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0210(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0211(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  return fiber0208(i, str, context);
};
const fiber0210 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...)\.(?:2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
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
   * charSequence
   * ...d\d|[1-9]?\d)\.(?:2(?:...
   *              ^^
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
  return fiber0208(i, str, context);
};
const fiber0214 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2...
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
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2(...
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
   * ...3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart46 = context.groupMarkerStartTemp46;
  context.groupMarkerEnd46 = i;
  /*
   * charSequence
   * ...|[1-9]?\d)\.(?:2(?:5[0...
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
   * disjunction
   * ...1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck2 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck2 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue2 = (firstCharQuickCheck2 << 16) ^ secondCharQuickCheck2;

  if ((quickCheckValue2 & 2147450872) === 3276848) {
    const length0 = fiber0209(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart38 = -1;
    context.groupMarkerEnd38 = -1;
    context.groupMarkerStart40 = -1;
    context.groupMarkerEnd40 = -1;
    context.groupMarkerStart43 = -1;
    context.groupMarkerEnd43 = -1;
    context.groupMarkerStart45 = -1;
    context.groupMarkerEnd45 = -1;
    context.groupMarkerStart47 = -1;
    context.groupMarkerEnd47 = -1;
    context.groupMarkerStart48 = -1;
    context.groupMarkerEnd48 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue2 & 2147450864) === 3211312) {
    const length1 = fiber0212(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart38 = -1;
    context.groupMarkerEnd38 = -1;
    context.groupMarkerStart40 = -1;
    context.groupMarkerEnd40 = -1;
    context.groupMarkerStart43 = -1;
    context.groupMarkerEnd43 = -1;
    context.groupMarkerStart45 = -1;
    context.groupMarkerEnd45 = -1;
    context.groupMarkerStart47 = -1;
    context.groupMarkerEnd47 = -1;
    context.groupMarkerStart48 = -1;
    context.groupMarkerEnd48 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue2 & 2146467808) === 3145760) {
    const length2 = fiber0215(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart38 = -1;
    context.groupMarkerEnd38 = -1;
    context.groupMarkerStart40 = -1;
    context.groupMarkerEnd40 = -1;
    context.groupMarkerStart43 = -1;
    context.groupMarkerEnd43 = -1;
    context.groupMarkerStart45 = -1;
    context.groupMarkerEnd45 = -1;
    context.groupMarkerStart47 = -1;
    context.groupMarkerEnd47 = -1;
    context.groupMarkerStart48 = -1;
    context.groupMarkerEnd48 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0217 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...}){0,2}:((2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0218(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0219(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
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
   * charSequence
   * ...d\d|[1-9]?\d)\.(?:2(?:...
   *              ^^
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
  return fiber0216(i, str, context);
};
const fiber0222 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2...
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
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2(...
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
   * charSequence
   * ...0,3}){0,2}:((2(?:5[0-...
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
   * ...,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp45 = i;
  /*
   * groupStartMarker
   * ...3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp46 = i;
  /*
   * disjunction
   * ...3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  if ((quickCheckValue3 & 2147450872) === 3276848) {
    const length0 = fiber0217(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart38 = -1;
    context.groupMarkerEnd38 = -1;
    context.groupMarkerStart40 = -1;
    context.groupMarkerEnd40 = -1;
    context.groupMarkerStart43 = -1;
    context.groupMarkerEnd43 = -1;
    context.groupMarkerStart45 = -1;
    context.groupMarkerEnd45 = -1;
    context.groupMarkerStart46 = -1;
    context.groupMarkerEnd46 = -1;
    context.groupMarkerStart47 = -1;
    context.groupMarkerEnd47 = -1;
    context.groupMarkerStart48 = -1;
    context.groupMarkerEnd48 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2147450864) === 3211312) {
    const length1 = fiber0220(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart38 = -1;
    context.groupMarkerEnd38 = -1;
    context.groupMarkerStart40 = -1;
    context.groupMarkerEnd40 = -1;
    context.groupMarkerStart43 = -1;
    context.groupMarkerEnd43 = -1;
    context.groupMarkerStart45 = -1;
    context.groupMarkerEnd45 = -1;
    context.groupMarkerStart46 = -1;
    context.groupMarkerEnd46 = -1;
    context.groupMarkerStart47 = -1;
    context.groupMarkerEnd47 = -1;
    context.groupMarkerStart48 = -1;
    context.groupMarkerEnd48 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2146467808) === 3145760) {
    const length2 = fiber0223(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart38 = -1;
    context.groupMarkerEnd38 = -1;
    context.groupMarkerStart40 = -1;
    context.groupMarkerEnd40 = -1;
    context.groupMarkerStart43 = -1;
    context.groupMarkerEnd43 = -1;
    context.groupMarkerStart45 = -1;
    context.groupMarkerEnd45 = -1;
    context.groupMarkerStart46 = -1;
    context.groupMarkerEnd46 = -1;
    context.groupMarkerStart47 = -1;
    context.groupMarkerEnd47 = -1;
    context.groupMarkerStart48 = -1;
    context.groupMarkerEnd48 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
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
   * ...3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp43 = i;
  /*
   * quantifierStarter
   * ...}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.quantifierCounter2 = -1;
  return greedyQuantifier0226(i, str, context);
};
const fiber0229 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...9]?\d))))|:))|([0-9A-...
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
  return fiber0188(i, str, context);
};
const fiber0230 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp38 = i;
  /*
   * charSequence
   * ...))))|:))|([0-9A-Fa-f][0-9A-Fa-f...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0233(i, str, context);

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
   * ...Fa-f]{0,3}:[0-9A-Fa-f...
   *              ^
   */
  const iAfterMatch3 = i + 2;
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

    i = iAfterMatch3;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches4 = 0;
  while (true) {
    const wrappedResult = fiber0232(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches4++;

      if (matches4 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...Fa-f]{0,3}:([0-9A-Fa-...
   *              ^
   */
  const iAfterMatch5 = i + 1;
  if (iAfterMatch5 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch5;
  }
  /*
   * groupStartMarker
   * ...a-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp39 = i;
  /*
   * charSequence
   * ...-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  const iAfterMatch7 = i + 1;
  if (iAfterMatch7 > str.length) {
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

    i = iAfterMatch7;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches8 = 0;
  while (true) {
    const wrappedResult = fiber0231(i, str, context);

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
   * charSequence
   * ...Fa-f]{0,3}:)(((:[0-9A...
   *              ^
   */
  const iAfterMatch9 = i + 1;
  if (iAfterMatch9 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch9;
  }
  /*
   * groupEndMarker
   * ...a-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart39 = context.groupMarkerStartTemp39;
  context.groupMarkerEnd39 = i;
  /*
   * groupStartMarker
   * ...-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp40 = i;
  /*
   * disjunction
   * ...-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck12 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck12 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue12 =
    (firstCharQuickCheck12 << 16) ^ secondCharQuickCheck12;

  if ((quickCheckValue12 & 2147450752) === 3801088) {
    const length0 = fiber0189(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart38 = -1;
    context.groupMarkerEnd38 = -1;
    context.groupMarkerStart40 = -1;
    context.groupMarkerEnd40 = -1;
    context.groupMarkerStart41 = -1;
    context.groupMarkerEnd41 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue12 & 2147450752) === 3801088) {
    const length1 = fiber0228(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart38 = -1;
    context.groupMarkerEnd38 = -1;
    context.groupMarkerStart40 = -1;
    context.groupMarkerEnd40 = -1;
    context.groupMarkerStart43 = -1;
    context.groupMarkerEnd43 = -1;
    context.groupMarkerStart44 = -1;
    context.groupMarkerEnd44 = -1;
    context.groupMarkerStart45 = -1;
    context.groupMarkerEnd45 = -1;
    context.groupMarkerStart46 = -1;
    context.groupMarkerEnd46 = -1;
    context.groupMarkerStart47 = -1;
    context.groupMarkerEnd47 = -1;
    context.groupMarkerStart48 = -1;
    context.groupMarkerEnd48 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue12 & 2147418112) === 3801088) {
    const length2 = fiber0229(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart38 = -1;
    context.groupMarkerEnd38 = -1;
    context.groupMarkerStart40 = -1;
    context.groupMarkerEnd40 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0231 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9...
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
   * ...-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart51 = context.groupMarkerStartTemp51;
  context.groupMarkerEnd51 = i;
  /*
   * groupEndMarker
   * ...d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart49 = context.groupMarkerStartTemp49;
  context.groupMarkerEnd49 = i;
  return fiber0039(i, str, context);
};
const fiber0235 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp52 = i;
  /*
   * nonBacktrackingQuantifier
   * ...]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A...
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
   * ...f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart52 = context.groupMarkerStartTemp52;
  context.groupMarkerEnd52 = i;
  return fiber0234(i, str, context);
};
const fiber0236 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp53 = i;
  /*
   * charSequence
   * ...{0,3}:)(((:[0-9A-Fa-f...
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
   * ...]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:...
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
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart59 = context.groupMarkerStartTemp59;
  context.groupMarkerEnd59 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart58 = context.groupMarkerStartTemp58;
  context.groupMarkerEnd58 = i;
  /*
   * groupEndMarker
   * ...,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart56 = context.groupMarkerStartTemp56;
  context.groupMarkerEnd56 = i;
  /*
   * groupEndMarker
   * ...3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart54 = context.groupMarkerStartTemp54;
  context.groupMarkerEnd54 = i;
  return fiber0234(i, str, context);
};
const fiber0239 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0240(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0241(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
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
   * charSequence
   * ...d\d|[1-9]?\d))))|:))|(...
   *              ^^
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
  return fiber0238(i, str, context);
};
const fiber0244 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d))))|:)...
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
   * ...\d)|1\d\d|[1-9]?\d))))|:))...
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
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp58 = i;
  /*
   * charSequence
   * ...[1-9]?\d)(\.(2(?:5[0-5...
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
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp59 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  if ((quickCheckValue3 & 2147450872) === 3276848) {
    const length0 = fiber0239(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart49 = -1;
    context.groupMarkerEnd49 = -1;
    context.groupMarkerStart51 = -1;
    context.groupMarkerEnd51 = -1;
    context.groupMarkerStart54 = -1;
    context.groupMarkerEnd54 = -1;
    context.groupMarkerStart56 = -1;
    context.groupMarkerEnd56 = -1;
    context.groupMarkerStart58 = -1;
    context.groupMarkerEnd58 = -1;
    context.groupMarkerStart59 = -1;
    context.groupMarkerEnd59 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2147450864) === 3211312) {
    const length1 = fiber0242(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart49 = -1;
    context.groupMarkerEnd49 = -1;
    context.groupMarkerStart51 = -1;
    context.groupMarkerEnd51 = -1;
    context.groupMarkerStart54 = -1;
    context.groupMarkerEnd54 = -1;
    context.groupMarkerStart56 = -1;
    context.groupMarkerEnd56 = -1;
    context.groupMarkerStart58 = -1;
    context.groupMarkerEnd58 = -1;
    context.groupMarkerStart59 = -1;
    context.groupMarkerEnd59 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2146435072) === 3145728) {
    const length2 = fiber0245(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart49 = -1;
    context.groupMarkerEnd49 = -1;
    context.groupMarkerStart51 = -1;
    context.groupMarkerEnd51 = -1;
    context.groupMarkerStart54 = -1;
    context.groupMarkerEnd54 = -1;
    context.groupMarkerStart56 = -1;
    context.groupMarkerEnd56 = -1;
    context.groupMarkerStart58 = -1;
    context.groupMarkerEnd58 = -1;
    context.groupMarkerStart59 = -1;
    context.groupMarkerEnd59 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0247 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...]?\d)\.(?:2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0248(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0249(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  return fiber0246(i, str, context);
};
const fiber0248 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...)\.(?:2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
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
   * charSequence
   * ...d\d|[1-9]?\d)(\.(2(?:5...
   *              ^^
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
  return fiber0246(i, str, context);
};
const fiber0252 = (i: number, str: string, context: Context): number => {
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
const fiber0253 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(?...
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
   * charSequence
   * ...|[1-9]?\d)\.(?:2(?:5[0...
   *              ^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 46;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * disjunction
   * ...1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  if ((quickCheckValue1 & 2147450872) === 3276848) {
    const length0 = fiber0247(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart49 = -1;
    context.groupMarkerEnd49 = -1;
    context.groupMarkerStart51 = -1;
    context.groupMarkerEnd51 = -1;
    context.groupMarkerStart54 = -1;
    context.groupMarkerEnd54 = -1;
    context.groupMarkerStart56 = -1;
    context.groupMarkerEnd56 = -1;
    context.groupMarkerStart58 = -1;
    context.groupMarkerEnd58 = -1;
    context.groupMarkerStart59 = -1;
    context.groupMarkerEnd59 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue1 & 2147450864) === 3211312) {
    const length1 = fiber0250(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart49 = -1;
    context.groupMarkerEnd49 = -1;
    context.groupMarkerStart51 = -1;
    context.groupMarkerEnd51 = -1;
    context.groupMarkerStart54 = -1;
    context.groupMarkerEnd54 = -1;
    context.groupMarkerStart56 = -1;
    context.groupMarkerEnd56 = -1;
    context.groupMarkerStart58 = -1;
    context.groupMarkerEnd58 = -1;
    context.groupMarkerStart59 = -1;
    context.groupMarkerEnd59 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue1 & 2146467808) === 3145760) {
    const length2 = fiber0253(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart49 = -1;
    context.groupMarkerEnd49 = -1;
    context.groupMarkerStart51 = -1;
    context.groupMarkerEnd51 = -1;
    context.groupMarkerStart54 = -1;
    context.groupMarkerEnd54 = -1;
    context.groupMarkerStart56 = -1;
    context.groupMarkerEnd56 = -1;
    context.groupMarkerStart58 = -1;
    context.groupMarkerEnd58 = -1;
    context.groupMarkerStart59 = -1;
    context.groupMarkerEnd59 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0255 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...]?\d)\.(?:2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0256(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0257(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  return fiber0254(i, str, context);
};
const fiber0256 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...)\.(?:2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
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
   * charSequence
   * ...d\d|[1-9]?\d)\.(?:2(?:...
   *              ^^
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
  return fiber0254(i, str, context);
};
const fiber0260 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2...
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
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2(...
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
   * ...3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart57 = context.groupMarkerStartTemp57;
  context.groupMarkerEnd57 = i;
  /*
   * charSequence
   * ...|[1-9]?\d)\.(?:2(?:5[0...
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
   * disjunction
   * ...1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck2 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck2 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue2 = (firstCharQuickCheck2 << 16) ^ secondCharQuickCheck2;

  if ((quickCheckValue2 & 2147450872) === 3276848) {
    const length0 = fiber0255(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart49 = -1;
    context.groupMarkerEnd49 = -1;
    context.groupMarkerStart51 = -1;
    context.groupMarkerEnd51 = -1;
    context.groupMarkerStart54 = -1;
    context.groupMarkerEnd54 = -1;
    context.groupMarkerStart56 = -1;
    context.groupMarkerEnd56 = -1;
    context.groupMarkerStart58 = -1;
    context.groupMarkerEnd58 = -1;
    context.groupMarkerStart59 = -1;
    context.groupMarkerEnd59 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue2 & 2147450864) === 3211312) {
    const length1 = fiber0258(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart49 = -1;
    context.groupMarkerEnd49 = -1;
    context.groupMarkerStart51 = -1;
    context.groupMarkerEnd51 = -1;
    context.groupMarkerStart54 = -1;
    context.groupMarkerEnd54 = -1;
    context.groupMarkerStart56 = -1;
    context.groupMarkerEnd56 = -1;
    context.groupMarkerStart58 = -1;
    context.groupMarkerEnd58 = -1;
    context.groupMarkerStart59 = -1;
    context.groupMarkerEnd59 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue2 & 2146467808) === 3145760) {
    const length2 = fiber0261(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart49 = -1;
    context.groupMarkerEnd49 = -1;
    context.groupMarkerStart51 = -1;
    context.groupMarkerEnd51 = -1;
    context.groupMarkerStart54 = -1;
    context.groupMarkerEnd54 = -1;
    context.groupMarkerStart56 = -1;
    context.groupMarkerEnd56 = -1;
    context.groupMarkerStart58 = -1;
    context.groupMarkerEnd58 = -1;
    context.groupMarkerStart59 = -1;
    context.groupMarkerEnd59 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0263 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...}){0,3}:((2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0264(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0265(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
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
   * charSequence
   * ...d\d|[1-9]?\d)\.(?:2(?:...
   *              ^^
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
  return fiber0262(i, str, context);
};
const fiber0268 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2...
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
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2(...
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
   * charSequence
   * ...0,3}){0,3}:((2(?:5[0-...
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
   * ...,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp56 = i;
  /*
   * groupStartMarker
   * ...3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp57 = i;
  /*
   * disjunction
   * ...3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  if ((quickCheckValue3 & 2147450872) === 3276848) {
    const length0 = fiber0263(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart49 = -1;
    context.groupMarkerEnd49 = -1;
    context.groupMarkerStart51 = -1;
    context.groupMarkerEnd51 = -1;
    context.groupMarkerStart54 = -1;
    context.groupMarkerEnd54 = -1;
    context.groupMarkerStart56 = -1;
    context.groupMarkerEnd56 = -1;
    context.groupMarkerStart57 = -1;
    context.groupMarkerEnd57 = -1;
    context.groupMarkerStart58 = -1;
    context.groupMarkerEnd58 = -1;
    context.groupMarkerStart59 = -1;
    context.groupMarkerEnd59 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2147450864) === 3211312) {
    const length1 = fiber0266(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart49 = -1;
    context.groupMarkerEnd49 = -1;
    context.groupMarkerStart51 = -1;
    context.groupMarkerEnd51 = -1;
    context.groupMarkerStart54 = -1;
    context.groupMarkerEnd54 = -1;
    context.groupMarkerStart56 = -1;
    context.groupMarkerEnd56 = -1;
    context.groupMarkerStart57 = -1;
    context.groupMarkerEnd57 = -1;
    context.groupMarkerStart58 = -1;
    context.groupMarkerEnd58 = -1;
    context.groupMarkerStart59 = -1;
    context.groupMarkerEnd59 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2146467808) === 3145760) {
    const length2 = fiber0269(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart49 = -1;
    context.groupMarkerEnd49 = -1;
    context.groupMarkerStart51 = -1;
    context.groupMarkerEnd51 = -1;
    context.groupMarkerStart54 = -1;
    context.groupMarkerEnd54 = -1;
    context.groupMarkerStart56 = -1;
    context.groupMarkerEnd56 = -1;
    context.groupMarkerStart57 = -1;
    context.groupMarkerEnd57 = -1;
    context.groupMarkerStart58 = -1;
    context.groupMarkerEnd58 = -1;
    context.groupMarkerStart59 = -1;
    context.groupMarkerEnd59 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
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
   * ...3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp54 = i;
  /*
   * quantifierStarter
   * ...}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.quantifierCounter3 = -1;
  return greedyQuantifier0272(i, str, context);
};
const fiber0275 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...9]?\d))))|:))|(([0-9A...
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
  return fiber0234(i, str, context);
};
const fiber0276 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp49 = i;
  /*
   * charSequence
   * ...))))|:))|([0-9A-Fa-f][0-9A-Fa-f...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0278(i, str, context);

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
   * ...Fa-f]{0,3}:([0-9A-Fa-...
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
   * groupStartMarker
   * ...a-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp50 = i;
  /*
   * charSequence
   * ...-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  const iAfterMatch5 = i + 1;
  if (iAfterMatch5 > str.length) {
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

    i = iAfterMatch5;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches6 = 0;
  while (true) {
    const wrappedResult = fiber0277(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches6++;

      if (matches6 === 3) {
        break;
      }
    }
  }
  /*
   * charSequence
   * ...Fa-f]{0,3}:)(((:[0-9A...
   *              ^
   */
  const iAfterMatch7 = i + 1;
  if (iAfterMatch7 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch7;
  }
  /*
   * groupEndMarker
   * ...a-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart50 = context.groupMarkerStartTemp50;
  context.groupMarkerEnd50 = i;
  /*
   * groupStartMarker
   * ...-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp51 = i;
  /*
   * disjunction
   * ...-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck10 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck10 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue10 =
    (firstCharQuickCheck10 << 16) ^ secondCharQuickCheck10;

  if ((quickCheckValue10 & 2147450752) === 3801088) {
    const length0 = fiber0235(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart49 = -1;
    context.groupMarkerEnd49 = -1;
    context.groupMarkerStart51 = -1;
    context.groupMarkerEnd51 = -1;
    context.groupMarkerStart52 = -1;
    context.groupMarkerEnd52 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue10 & 2147450752) === 3801088) {
    const length1 = fiber0274(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart49 = -1;
    context.groupMarkerEnd49 = -1;
    context.groupMarkerStart51 = -1;
    context.groupMarkerEnd51 = -1;
    context.groupMarkerStart54 = -1;
    context.groupMarkerEnd54 = -1;
    context.groupMarkerStart55 = -1;
    context.groupMarkerEnd55 = -1;
    context.groupMarkerStart56 = -1;
    context.groupMarkerEnd56 = -1;
    context.groupMarkerStart57 = -1;
    context.groupMarkerEnd57 = -1;
    context.groupMarkerStart58 = -1;
    context.groupMarkerEnd58 = -1;
    context.groupMarkerStart59 = -1;
    context.groupMarkerEnd59 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue10 & 2147418112) === 3801088) {
    const length2 = fiber0275(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart49 = -1;
    context.groupMarkerEnd49 = -1;
    context.groupMarkerStart51 = -1;
    context.groupMarkerEnd51 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0277 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((...
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
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-...
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
   * ...-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:(((:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart62 = context.groupMarkerStartTemp62;
  context.groupMarkerEnd62 = i;
  /*
   * groupEndMarker
   * ...d))))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart60 = context.groupMarkerStartTemp60;
  context.groupMarkerEnd60 = i;
  return fiber0039(i, str, context);
};
const fiber0280 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp63 = i;
  /*
   * nonBacktrackingQuantifier
   * ...]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A...
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
   * ...f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart63 = context.groupMarkerStartTemp63;
  context.groupMarkerEnd63 = i;
  return fiber0279(i, str, context);
};
const fiber0281 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp64 = i;
  /*
   * charSequence
   * ...{0,3}:)(((:[0-9A-Fa-f...
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
   * ...]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:...
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
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart70 = context.groupMarkerStartTemp70;
  context.groupMarkerEnd70 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart69 = context.groupMarkerStartTemp69;
  context.groupMarkerEnd69 = i;
  /*
   * groupEndMarker
   * ...,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart67 = context.groupMarkerStartTemp67;
  context.groupMarkerEnd67 = i;
  /*
   * groupEndMarker
   * ...3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:(((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart65 = context.groupMarkerStartTemp65;
  context.groupMarkerEnd65 = i;
  return fiber0279(i, str, context);
};
const fiber0284 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0285(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0286(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
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
   * charSequence
   * ...d\d|[1-9]?\d))))|:))|(...
   *              ^^
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
  return fiber0283(i, str, context);
};
const fiber0289 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d))))|:)...
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
   * ...\d)|1\d\d|[1-9]?\d))))|:))...
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
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp69 = i;
  /*
   * charSequence
   * ...[1-9]?\d)(\.(2(?:5[0-5...
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
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp70 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  if ((quickCheckValue3 & 2147450872) === 3276848) {
    const length0 = fiber0284(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart60 = -1;
    context.groupMarkerEnd60 = -1;
    context.groupMarkerStart62 = -1;
    context.groupMarkerEnd62 = -1;
    context.groupMarkerStart65 = -1;
    context.groupMarkerEnd65 = -1;
    context.groupMarkerStart67 = -1;
    context.groupMarkerEnd67 = -1;
    context.groupMarkerStart69 = -1;
    context.groupMarkerEnd69 = -1;
    context.groupMarkerStart70 = -1;
    context.groupMarkerEnd70 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2147450864) === 3211312) {
    const length1 = fiber0287(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart60 = -1;
    context.groupMarkerEnd60 = -1;
    context.groupMarkerStart62 = -1;
    context.groupMarkerEnd62 = -1;
    context.groupMarkerStart65 = -1;
    context.groupMarkerEnd65 = -1;
    context.groupMarkerStart67 = -1;
    context.groupMarkerEnd67 = -1;
    context.groupMarkerStart69 = -1;
    context.groupMarkerEnd69 = -1;
    context.groupMarkerStart70 = -1;
    context.groupMarkerEnd70 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2146435072) === 3145728) {
    const length2 = fiber0290(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart60 = -1;
    context.groupMarkerEnd60 = -1;
    context.groupMarkerStart62 = -1;
    context.groupMarkerEnd62 = -1;
    context.groupMarkerStart65 = -1;
    context.groupMarkerEnd65 = -1;
    context.groupMarkerStart67 = -1;
    context.groupMarkerEnd67 = -1;
    context.groupMarkerStart69 = -1;
    context.groupMarkerEnd69 = -1;
    context.groupMarkerStart70 = -1;
    context.groupMarkerEnd70 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0292 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...]?\d)\.(?:2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0293(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0294(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  return fiber0291(i, str, context);
};
const fiber0293 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...)\.(?:2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
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
   * charSequence
   * ...d\d|[1-9]?\d)(\.(2(?:5...
   *              ^^
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
  return fiber0291(i, str, context);
};
const fiber0297 = (i: number, str: string, context: Context): number => {
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
const fiber0298 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(?...
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
   * charSequence
   * ...|[1-9]?\d)\.(?:2(?:5[0...
   *              ^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 46;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * disjunction
   * ...1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  if ((quickCheckValue1 & 2147450872) === 3276848) {
    const length0 = fiber0292(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart60 = -1;
    context.groupMarkerEnd60 = -1;
    context.groupMarkerStart62 = -1;
    context.groupMarkerEnd62 = -1;
    context.groupMarkerStart65 = -1;
    context.groupMarkerEnd65 = -1;
    context.groupMarkerStart67 = -1;
    context.groupMarkerEnd67 = -1;
    context.groupMarkerStart69 = -1;
    context.groupMarkerEnd69 = -1;
    context.groupMarkerStart70 = -1;
    context.groupMarkerEnd70 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue1 & 2147450864) === 3211312) {
    const length1 = fiber0295(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart60 = -1;
    context.groupMarkerEnd60 = -1;
    context.groupMarkerStart62 = -1;
    context.groupMarkerEnd62 = -1;
    context.groupMarkerStart65 = -1;
    context.groupMarkerEnd65 = -1;
    context.groupMarkerStart67 = -1;
    context.groupMarkerEnd67 = -1;
    context.groupMarkerStart69 = -1;
    context.groupMarkerEnd69 = -1;
    context.groupMarkerStart70 = -1;
    context.groupMarkerEnd70 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue1 & 2146467808) === 3145760) {
    const length2 = fiber0298(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart60 = -1;
    context.groupMarkerEnd60 = -1;
    context.groupMarkerStart62 = -1;
    context.groupMarkerEnd62 = -1;
    context.groupMarkerStart65 = -1;
    context.groupMarkerEnd65 = -1;
    context.groupMarkerStart67 = -1;
    context.groupMarkerEnd67 = -1;
    context.groupMarkerStart69 = -1;
    context.groupMarkerEnd69 = -1;
    context.groupMarkerStart70 = -1;
    context.groupMarkerEnd70 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0300 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...]?\d)\.(?:2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0301(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0302(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  return fiber0299(i, str, context);
};
const fiber0301 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...)\.(?:2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
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
   * charSequence
   * ...d\d|[1-9]?\d)\.(?:2(?:...
   *              ^^
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
  return fiber0299(i, str, context);
};
const fiber0305 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2...
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
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2(...
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
   * ...3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart68 = context.groupMarkerStartTemp68;
  context.groupMarkerEnd68 = i;
  /*
   * charSequence
   * ...|[1-9]?\d)\.(?:2(?:5[0...
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
   * disjunction
   * ...1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck2 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck2 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue2 = (firstCharQuickCheck2 << 16) ^ secondCharQuickCheck2;

  if ((quickCheckValue2 & 2147450872) === 3276848) {
    const length0 = fiber0300(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart60 = -1;
    context.groupMarkerEnd60 = -1;
    context.groupMarkerStart62 = -1;
    context.groupMarkerEnd62 = -1;
    context.groupMarkerStart65 = -1;
    context.groupMarkerEnd65 = -1;
    context.groupMarkerStart67 = -1;
    context.groupMarkerEnd67 = -1;
    context.groupMarkerStart69 = -1;
    context.groupMarkerEnd69 = -1;
    context.groupMarkerStart70 = -1;
    context.groupMarkerEnd70 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue2 & 2147450864) === 3211312) {
    const length1 = fiber0303(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart60 = -1;
    context.groupMarkerEnd60 = -1;
    context.groupMarkerStart62 = -1;
    context.groupMarkerEnd62 = -1;
    context.groupMarkerStart65 = -1;
    context.groupMarkerEnd65 = -1;
    context.groupMarkerStart67 = -1;
    context.groupMarkerEnd67 = -1;
    context.groupMarkerStart69 = -1;
    context.groupMarkerEnd69 = -1;
    context.groupMarkerStart70 = -1;
    context.groupMarkerEnd70 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue2 & 2146467808) === 3145760) {
    const length2 = fiber0306(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart60 = -1;
    context.groupMarkerEnd60 = -1;
    context.groupMarkerStart62 = -1;
    context.groupMarkerEnd62 = -1;
    context.groupMarkerStart65 = -1;
    context.groupMarkerEnd65 = -1;
    context.groupMarkerStart67 = -1;
    context.groupMarkerEnd67 = -1;
    context.groupMarkerStart69 = -1;
    context.groupMarkerEnd69 = -1;
    context.groupMarkerStart70 = -1;
    context.groupMarkerEnd70 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0308 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...}){0,4}:((2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0309(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0310(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
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
   * charSequence
   * ...d\d|[1-9]?\d)\.(?:2(?:...
   *              ^^
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
  return fiber0307(i, str, context);
};
const fiber0313 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2...
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
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2(...
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
   * charSequence
   * ...0,3}){0,4}:((2(?:5[0-...
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
   * ...,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp67 = i;
  /*
   * groupStartMarker
   * ...3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp68 = i;
  /*
   * disjunction
   * ...3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  if ((quickCheckValue3 & 2147450872) === 3276848) {
    const length0 = fiber0308(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart60 = -1;
    context.groupMarkerEnd60 = -1;
    context.groupMarkerStart62 = -1;
    context.groupMarkerEnd62 = -1;
    context.groupMarkerStart65 = -1;
    context.groupMarkerEnd65 = -1;
    context.groupMarkerStart67 = -1;
    context.groupMarkerEnd67 = -1;
    context.groupMarkerStart68 = -1;
    context.groupMarkerEnd68 = -1;
    context.groupMarkerStart69 = -1;
    context.groupMarkerEnd69 = -1;
    context.groupMarkerStart70 = -1;
    context.groupMarkerEnd70 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2147450864) === 3211312) {
    const length1 = fiber0311(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart60 = -1;
    context.groupMarkerEnd60 = -1;
    context.groupMarkerStart62 = -1;
    context.groupMarkerEnd62 = -1;
    context.groupMarkerStart65 = -1;
    context.groupMarkerEnd65 = -1;
    context.groupMarkerStart67 = -1;
    context.groupMarkerEnd67 = -1;
    context.groupMarkerStart68 = -1;
    context.groupMarkerEnd68 = -1;
    context.groupMarkerStart69 = -1;
    context.groupMarkerEnd69 = -1;
    context.groupMarkerStart70 = -1;
    context.groupMarkerEnd70 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2146467808) === 3145760) {
    const length2 = fiber0314(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart60 = -1;
    context.groupMarkerEnd60 = -1;
    context.groupMarkerStart62 = -1;
    context.groupMarkerEnd62 = -1;
    context.groupMarkerStart65 = -1;
    context.groupMarkerEnd65 = -1;
    context.groupMarkerStart67 = -1;
    context.groupMarkerEnd67 = -1;
    context.groupMarkerStart68 = -1;
    context.groupMarkerEnd68 = -1;
    context.groupMarkerStart69 = -1;
    context.groupMarkerEnd69 = -1;
    context.groupMarkerStart70 = -1;
    context.groupMarkerEnd70 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
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
   * ...3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:(((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp65 = i;
  /*
   * quantifierStarter
   * ...}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.quantifierCounter4 = -1;
  return greedyQuantifier0317(i, str, context);
};
const fiber0320 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...9]?\d))))|:))|(:(((:[...
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
  return fiber0279(i, str, context);
};
const fiber0321 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...d))))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp60 = i;
  /*
   * groupStartMarker
   * ...))))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp61 = i;
  /*
   * charSequence
   * ...)))|:))|(([0-9A-Fa-f][0-9A-Fa-f...
   *              ^^^^^^^^^^^
   */
  const iAfterMatch2 = i + 1;
  if (iAfterMatch2 > str.length) {
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

    i = iAfterMatch2;
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9...
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
   * charSequence
   * ...Fa-f]{0,3}:)(((:[0-9A...
   *              ^
   */
  const iAfterMatch4 = i + 1;
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

    i = iAfterMatch4;
  }
  /*
   * groupEndMarker
   * ...))))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart61 = context.groupMarkerStartTemp61;
  context.groupMarkerEnd61 = i;
  /*
   * groupStartMarker
   * ...-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:(((:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp62 = i;
  /*
   * disjunction
   * ...-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:(((:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck7 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck7 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue7 = (firstCharQuickCheck7 << 16) ^ secondCharQuickCheck7;

  if ((quickCheckValue7 & 2147450752) === 3801088) {
    const length0 = fiber0280(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart60 = -1;
    context.groupMarkerEnd60 = -1;
    context.groupMarkerStart62 = -1;
    context.groupMarkerEnd62 = -1;
    context.groupMarkerStart63 = -1;
    context.groupMarkerEnd63 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue7 & 2147450752) === 3801088) {
    const length1 = fiber0319(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart60 = -1;
    context.groupMarkerEnd60 = -1;
    context.groupMarkerStart62 = -1;
    context.groupMarkerEnd62 = -1;
    context.groupMarkerStart65 = -1;
    context.groupMarkerEnd65 = -1;
    context.groupMarkerStart66 = -1;
    context.groupMarkerEnd66 = -1;
    context.groupMarkerStart67 = -1;
    context.groupMarkerEnd67 = -1;
    context.groupMarkerStart68 = -1;
    context.groupMarkerEnd68 = -1;
    context.groupMarkerStart69 = -1;
    context.groupMarkerEnd69 = -1;
    context.groupMarkerStart70 = -1;
    context.groupMarkerEnd70 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue7 & 2147418112) === 3801088) {
    const length2 = fiber0320(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart60 = -1;
    context.groupMarkerEnd60 = -1;
    context.groupMarkerStart62 = -1;
    context.groupMarkerEnd62 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0322 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((...
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
   * ...)))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%..✱)?\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart72 = context.groupMarkerStartTemp72;
  context.groupMarkerEnd72 = i;
  /*
   * groupEndMarker
   * ...d))))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%..✱)?\s...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart80 = context.groupMarkerStartTemp80;
  context.groupMarkerEnd80 = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%....
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart79 = context.groupMarkerStartTemp79;
  context.groupMarkerEnd79 = i;
  /*
   * groupEndMarker
   * ...,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%.....
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart77 = context.groupMarkerStartTemp77;
  context.groupMarkerEnd77 = i;
  /*
   * groupEndMarker
   * ...3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%..✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart75 = context.groupMarkerStartTemp75;
  context.groupMarkerEnd75 = i;
  return fiber0323(i, str, context);
};
const fiber0328 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...9]?\d)(\.(2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0329(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0330(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
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
   * charSequence
   * ...d\d|[1-9]?\d))))|:)))(...
   *              ^^
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
  return fiber0327(i, str, context);
};
const fiber0333 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d))))|:)...
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
   * ...\d)|1\d\d|[1-9]?\d))))|:))...
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
   * groupStartMarker
   * ...|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%....
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp79 = i;
  /*
   * charSequence
   * ...[1-9]?\d)(\.(2(?:5[0-5...
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
   * groupStartMarker
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp80 = i;
  /*
   * disjunction
   * ...-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  if ((quickCheckValue3 & 2147450872) === 3276848) {
    const length0 = fiber0328(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart71 = -1;
    context.groupMarkerEnd71 = -1;
    context.groupMarkerStart72 = -1;
    context.groupMarkerEnd72 = -1;
    context.groupMarkerStart75 = -1;
    context.groupMarkerEnd75 = -1;
    context.groupMarkerStart77 = -1;
    context.groupMarkerEnd77 = -1;
    context.groupMarkerStart79 = -1;
    context.groupMarkerEnd79 = -1;
    context.groupMarkerStart80 = -1;
    context.groupMarkerEnd80 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2147450864) === 3211312) {
    const length1 = fiber0331(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart71 = -1;
    context.groupMarkerEnd71 = -1;
    context.groupMarkerStart72 = -1;
    context.groupMarkerEnd72 = -1;
    context.groupMarkerStart75 = -1;
    context.groupMarkerEnd75 = -1;
    context.groupMarkerStart77 = -1;
    context.groupMarkerEnd77 = -1;
    context.groupMarkerStart79 = -1;
    context.groupMarkerEnd79 = -1;
    context.groupMarkerStart80 = -1;
    context.groupMarkerEnd80 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2146435072) === 3145728) {
    const length2 = fiber0334(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart71 = -1;
    context.groupMarkerEnd71 = -1;
    context.groupMarkerStart72 = -1;
    context.groupMarkerEnd72 = -1;
    context.groupMarkerStart75 = -1;
    context.groupMarkerEnd75 = -1;
    context.groupMarkerStart77 = -1;
    context.groupMarkerEnd77 = -1;
    context.groupMarkerStart79 = -1;
    context.groupMarkerEnd79 = -1;
    context.groupMarkerStart80 = -1;
    context.groupMarkerEnd80 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0336 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...]?\d)\.(?:2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0337(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0338(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  return fiber0335(i, str, context);
};
const fiber0337 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...)\.(?:2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
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
   * charSequence
   * ...d\d|[1-9]?\d)(\.(2(?:5...
   *              ^^
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
  return fiber0335(i, str, context);
};
const fiber0341 = (i: number, str: string, context: Context): number => {
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
const fiber0342 = (i: number, str: string, context: Context): number => {
  /*
   * backtrackingFixedLengthQuantifier
   * ...\d)|1\d\d|[1-9]?\d)(\.(2(?...
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
   * charSequence
   * ...|[1-9]?\d)\.(?:2(?:5[0...
   *              ^^
   */
  const iAfterMatch0 = i + 1;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 46;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch0;
  }
  /*
   * disjunction
   * ...1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  if ((quickCheckValue1 & 2147450872) === 3276848) {
    const length0 = fiber0336(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart71 = -1;
    context.groupMarkerEnd71 = -1;
    context.groupMarkerStart72 = -1;
    context.groupMarkerEnd72 = -1;
    context.groupMarkerStart75 = -1;
    context.groupMarkerEnd75 = -1;
    context.groupMarkerStart77 = -1;
    context.groupMarkerEnd77 = -1;
    context.groupMarkerStart79 = -1;
    context.groupMarkerEnd79 = -1;
    context.groupMarkerStart80 = -1;
    context.groupMarkerEnd80 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue1 & 2147450864) === 3211312) {
    const length1 = fiber0339(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart71 = -1;
    context.groupMarkerEnd71 = -1;
    context.groupMarkerStart72 = -1;
    context.groupMarkerEnd72 = -1;
    context.groupMarkerStart75 = -1;
    context.groupMarkerEnd75 = -1;
    context.groupMarkerStart77 = -1;
    context.groupMarkerEnd77 = -1;
    context.groupMarkerStart79 = -1;
    context.groupMarkerEnd79 = -1;
    context.groupMarkerStart80 = -1;
    context.groupMarkerEnd80 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue1 & 2146467808) === 3145760) {
    const length2 = fiber0342(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart71 = -1;
    context.groupMarkerEnd71 = -1;
    context.groupMarkerStart72 = -1;
    context.groupMarkerEnd72 = -1;
    context.groupMarkerStart75 = -1;
    context.groupMarkerEnd75 = -1;
    context.groupMarkerStart77 = -1;
    context.groupMarkerEnd77 = -1;
    context.groupMarkerStart79 = -1;
    context.groupMarkerEnd79 = -1;
    context.groupMarkerStart80 = -1;
    context.groupMarkerEnd80 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0344 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...]?\d)\.(?:2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0345(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0346(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
    }
    return -1;
  }
  return fiber0343(i, str, context);
};
const fiber0345 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...)\.(?:2(?:5[0-5]|[0-4...
   *              ^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
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
   * charSequence
   * ...d\d|[1-9]?\d)\.(?:2(?:...
   *              ^^
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
  return fiber0343(i, str, context);
};
const fiber0349 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2...
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
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2(...
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
   * ...3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStart78 = context.groupMarkerStartTemp78;
  context.groupMarkerEnd78 = i;
  /*
   * charSequence
   * ...|[1-9]?\d)\.(?:2(?:5[0...
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
   * disjunction
   * ...1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck2 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck2 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue2 = (firstCharQuickCheck2 << 16) ^ secondCharQuickCheck2;

  if ((quickCheckValue2 & 2147450872) === 3276848) {
    const length0 = fiber0344(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart71 = -1;
    context.groupMarkerEnd71 = -1;
    context.groupMarkerStart72 = -1;
    context.groupMarkerEnd72 = -1;
    context.groupMarkerStart75 = -1;
    context.groupMarkerEnd75 = -1;
    context.groupMarkerStart77 = -1;
    context.groupMarkerEnd77 = -1;
    context.groupMarkerStart79 = -1;
    context.groupMarkerEnd79 = -1;
    context.groupMarkerStart80 = -1;
    context.groupMarkerEnd80 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue2 & 2147450864) === 3211312) {
    const length1 = fiber0347(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart71 = -1;
    context.groupMarkerEnd71 = -1;
    context.groupMarkerStart72 = -1;
    context.groupMarkerEnd72 = -1;
    context.groupMarkerStart75 = -1;
    context.groupMarkerEnd75 = -1;
    context.groupMarkerStart77 = -1;
    context.groupMarkerEnd77 = -1;
    context.groupMarkerStart79 = -1;
    context.groupMarkerEnd79 = -1;
    context.groupMarkerStart80 = -1;
    context.groupMarkerEnd80 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue2 & 2146467808) === 3145760) {
    const length2 = fiber0350(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart71 = -1;
    context.groupMarkerEnd71 = -1;
    context.groupMarkerStart72 = -1;
    context.groupMarkerEnd72 = -1;
    context.groupMarkerStart75 = -1;
    context.groupMarkerEnd75 = -1;
    context.groupMarkerStart77 = -1;
    context.groupMarkerEnd77 = -1;
    context.groupMarkerStart79 = -1;
    context.groupMarkerEnd79 = -1;
    context.groupMarkerStart80 = -1;
    context.groupMarkerEnd80 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0352 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...}){0,5}:((2(?:5[0-5]|...
   *              ^
   */
  const iAfterMatch0 = i + 1;
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

    i = iAfterMatch0;
  }
  /*
   * nonBacktrackingDisjunction
   * ...){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-...
   *              ^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck1 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue1 = (firstCharQuickCheck1 << 16) ^ secondCharQuickCheck1;

  nonBacktrackingDisjunction1: {
    if ((quickCheckValue1 & 2147450872) === 3473456) {
      const length0 = fiber0353(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction1;
      }
    }
    if ((quickCheckValue1 & 2146992112) === 3145776) {
      const length1 = fiber0354(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction1;
      }
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
   * charSequence
   * ...d\d|[1-9]?\d)\.(?:2(?:...
   *              ^^
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
  return fiber0351(i, str, context);
};
const fiber0357 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2...
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
   * ...\d)|1\d\d|[1-9]?\d)\.(?:2(...
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
   * charSequence
   * ...0,3}){0,5}:((2(?:5[0-...
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
   * ...,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%.....
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp77 = i;
  /*
   * groupStartMarker
   * ...3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp78 = i;
  /*
   * disjunction
   * ...3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  if ((quickCheckValue3 & 2147450872) === 3276848) {
    const length0 = fiber0352(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart71 = -1;
    context.groupMarkerEnd71 = -1;
    context.groupMarkerStart72 = -1;
    context.groupMarkerEnd72 = -1;
    context.groupMarkerStart75 = -1;
    context.groupMarkerEnd75 = -1;
    context.groupMarkerStart77 = -1;
    context.groupMarkerEnd77 = -1;
    context.groupMarkerStart78 = -1;
    context.groupMarkerEnd78 = -1;
    context.groupMarkerStart79 = -1;
    context.groupMarkerEnd79 = -1;
    context.groupMarkerStart80 = -1;
    context.groupMarkerEnd80 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2147450864) === 3211312) {
    const length1 = fiber0355(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart71 = -1;
    context.groupMarkerEnd71 = -1;
    context.groupMarkerStart72 = -1;
    context.groupMarkerEnd72 = -1;
    context.groupMarkerStart75 = -1;
    context.groupMarkerEnd75 = -1;
    context.groupMarkerStart77 = -1;
    context.groupMarkerEnd77 = -1;
    context.groupMarkerStart78 = -1;
    context.groupMarkerEnd78 = -1;
    context.groupMarkerStart79 = -1;
    context.groupMarkerEnd79 = -1;
    context.groupMarkerStart80 = -1;
    context.groupMarkerEnd80 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2146467808) === 3145760) {
    const length2 = fiber0358(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart71 = -1;
    context.groupMarkerEnd71 = -1;
    context.groupMarkerStart72 = -1;
    context.groupMarkerEnd72 = -1;
    context.groupMarkerStart75 = -1;
    context.groupMarkerEnd75 = -1;
    context.groupMarkerStart77 = -1;
    context.groupMarkerEnd77 = -1;
    context.groupMarkerStart78 = -1;
    context.groupMarkerEnd78 = -1;
    context.groupMarkerStart79 = -1;
    context.groupMarkerEnd79 = -1;
    context.groupMarkerStart80 = -1;
    context.groupMarkerEnd80 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
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
   * ...3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%..✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp75 = i;
  /*
   * quantifierStarter
   * ...}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.quantifierCounter5 = -1;
  return greedyQuantifier0361(i, str, context);
};
const fiber0364 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * ...9]?\d))))|:)))(%..✱)?...
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
  return fiber0323(i, str, context);
};
const fiber0365 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...d))))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%..✱)?\s...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp71 = i;
  /*
   * charSequence
   * ...))))|:))|(:(((:[0-9A-...
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
   * groupStartMarker
   * ...)))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%..✱)?\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp72 = i;
  /*
   * disjunction
   * ...)))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%..✱)?\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  if ((quickCheckValue3 & 2147450752) === 3801088) {
    const length0 = fiber0324(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart71 = -1;
    context.groupMarkerEnd71 = -1;
    context.groupMarkerStart72 = -1;
    context.groupMarkerEnd72 = -1;
    context.groupMarkerStart73 = -1;
    context.groupMarkerEnd73 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2147450752) === 3801088) {
    const length1 = fiber0363(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart71 = -1;
    context.groupMarkerEnd71 = -1;
    context.groupMarkerStart72 = -1;
    context.groupMarkerEnd72 = -1;
    context.groupMarkerStart75 = -1;
    context.groupMarkerEnd75 = -1;
    context.groupMarkerStart76 = -1;
    context.groupMarkerEnd76 = -1;
    context.groupMarkerStart77 = -1;
    context.groupMarkerEnd77 = -1;
    context.groupMarkerStart78 = -1;
    context.groupMarkerEnd78 = -1;
    context.groupMarkerStart79 = -1;
    context.groupMarkerEnd79 = -1;
    context.groupMarkerStart80 = -1;
    context.groupMarkerEnd80 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2147418112) === 3801088) {
    const length2 = fiber0364(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart71 = -1;
    context.groupMarkerEnd71 = -1;
    context.groupMarkerStart72 = -1;
    context.groupMarkerEnd72 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0366 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * ...5])))\s✱)|(\s✱(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%..✱)?\s✱))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp6 = i;
  /*
   * nonBacktrackingQuantifier
   * ...])))\s✱)|(\s✱(([0-9A-Fa...
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
   * ...)\s✱)|(\s✱(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%..✱)?\s✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp7 = i;
  /*
   * disjunction
   * ...)\s✱)|(\s✱(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%..✱)?\s✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck3 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck3 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue3 = (firstCharQuickCheck3 << 16) ^ secondCharQuickCheck3;

  if ((quickCheckValue3 & 2139127680) === 0) {
    const length0 = fiber0040(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart8 = -1;
    context.groupMarkerEnd8 = -1;
    context.groupMarkerStart9 = -1;
    context.groupMarkerEnd9 = -1;
    context.groupMarkerStart10 = -1;
    context.groupMarkerEnd10 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2139127680) === 0) {
    const length1 = fiber0088(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart11 = -1;
    context.groupMarkerEnd11 = -1;
    context.groupMarkerStart12 = -1;
    context.groupMarkerEnd12 = -1;
    context.groupMarkerStart13 = -1;
    context.groupMarkerEnd13 = -1;
    context.groupMarkerStart14 = -1;
    context.groupMarkerEnd14 = -1;
    context.groupMarkerStart15 = -1;
    context.groupMarkerEnd15 = -1;
    context.groupMarkerStart16 = -1;
    context.groupMarkerEnd16 = -1;
    context.groupMarkerStart17 = -1;
    context.groupMarkerEnd17 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2139127680) === 0) {
    const length2 = fiber0135(i, str, context);
    if (length2 !== -1) {
      return length2;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart18 = -1;
    context.groupMarkerEnd18 = -1;
    context.groupMarkerStart19 = -1;
    context.groupMarkerEnd19 = -1;
    context.groupMarkerStart20 = -1;
    context.groupMarkerEnd20 = -1;
    context.groupMarkerStart21 = -1;
    context.groupMarkerEnd21 = -1;
    context.groupMarkerStart23 = -1;
    context.groupMarkerEnd23 = -1;
    context.groupMarkerStart24 = -1;
    context.groupMarkerEnd24 = -1;
    context.groupMarkerStart25 = -1;
    context.groupMarkerEnd25 = -1;
    context.groupMarkerStart26 = -1;
    context.groupMarkerEnd26 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2139127680) === 0) {
    const length3 = fiber0183(i, str, context);
    if (length3 !== -1) {
      return length3;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart27 = -1;
    context.groupMarkerEnd27 = -1;
    context.groupMarkerStart28 = -1;
    context.groupMarkerEnd28 = -1;
    context.groupMarkerStart29 = -1;
    context.groupMarkerEnd29 = -1;
    context.groupMarkerStart30 = -1;
    context.groupMarkerEnd30 = -1;
    context.groupMarkerStart32 = -1;
    context.groupMarkerEnd32 = -1;
    context.groupMarkerStart33 = -1;
    context.groupMarkerEnd33 = -1;
    context.groupMarkerStart34 = -1;
    context.groupMarkerEnd34 = -1;
    context.groupMarkerStart35 = -1;
    context.groupMarkerEnd35 = -1;
    context.groupMarkerStart36 = -1;
    context.groupMarkerEnd36 = -1;
    context.groupMarkerStart37 = -1;
    context.groupMarkerEnd37 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2139127680) === 0) {
    const length4 = fiber0230(i, str, context);
    if (length4 !== -1) {
      return length4;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart38 = -1;
    context.groupMarkerEnd38 = -1;
    context.groupMarkerStart39 = -1;
    context.groupMarkerEnd39 = -1;
    context.groupMarkerStart40 = -1;
    context.groupMarkerEnd40 = -1;
    context.groupMarkerStart41 = -1;
    context.groupMarkerEnd41 = -1;
    context.groupMarkerStart43 = -1;
    context.groupMarkerEnd43 = -1;
    context.groupMarkerStart44 = -1;
    context.groupMarkerEnd44 = -1;
    context.groupMarkerStart45 = -1;
    context.groupMarkerEnd45 = -1;
    context.groupMarkerStart46 = -1;
    context.groupMarkerEnd46 = -1;
    context.groupMarkerStart47 = -1;
    context.groupMarkerEnd47 = -1;
    context.groupMarkerStart48 = -1;
    context.groupMarkerEnd48 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2139127680) === 0) {
    const length5 = fiber0276(i, str, context);
    if (length5 !== -1) {
      return length5;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart49 = -1;
    context.groupMarkerEnd49 = -1;
    context.groupMarkerStart50 = -1;
    context.groupMarkerEnd50 = -1;
    context.groupMarkerStart51 = -1;
    context.groupMarkerEnd51 = -1;
    context.groupMarkerStart52 = -1;
    context.groupMarkerEnd52 = -1;
    context.groupMarkerStart54 = -1;
    context.groupMarkerEnd54 = -1;
    context.groupMarkerStart55 = -1;
    context.groupMarkerEnd55 = -1;
    context.groupMarkerStart56 = -1;
    context.groupMarkerEnd56 = -1;
    context.groupMarkerStart57 = -1;
    context.groupMarkerEnd57 = -1;
    context.groupMarkerStart58 = -1;
    context.groupMarkerEnd58 = -1;
    context.groupMarkerStart59 = -1;
    context.groupMarkerEnd59 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2139127680) === 0) {
    const length6 = fiber0321(i, str, context);
    if (length6 !== -1) {
      return length6;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart60 = -1;
    context.groupMarkerEnd60 = -1;
    context.groupMarkerStart61 = -1;
    context.groupMarkerEnd61 = -1;
    context.groupMarkerStart62 = -1;
    context.groupMarkerEnd62 = -1;
    context.groupMarkerStart63 = -1;
    context.groupMarkerEnd63 = -1;
    context.groupMarkerStart65 = -1;
    context.groupMarkerEnd65 = -1;
    context.groupMarkerStart66 = -1;
    context.groupMarkerEnd66 = -1;
    context.groupMarkerStart67 = -1;
    context.groupMarkerEnd67 = -1;
    context.groupMarkerStart68 = -1;
    context.groupMarkerEnd68 = -1;
    context.groupMarkerStart69 = -1;
    context.groupMarkerEnd69 = -1;
    context.groupMarkerStart70 = -1;
    context.groupMarkerEnd70 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  if ((quickCheckValue3 & 2147450879) === 3801146) {
    const length7 = fiber0365(i, str, context);
    if (length7 !== -1) {
      return length7;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart71 = -1;
    context.groupMarkerEnd71 = -1;
    context.groupMarkerStart72 = -1;
    context.groupMarkerEnd72 = -1;
    context.groupMarkerStart73 = -1;
    context.groupMarkerEnd73 = -1;
    context.groupMarkerStart75 = -1;
    context.groupMarkerEnd75 = -1;
    context.groupMarkerStart76 = -1;
    context.groupMarkerEnd76 = -1;
    context.groupMarkerStart77 = -1;
    context.groupMarkerEnd77 = -1;
    context.groupMarkerStart78 = -1;
    context.groupMarkerEnd78 = -1;
    context.groupMarkerStart79 = -1;
    context.groupMarkerEnd79 = -1;
    context.groupMarkerStart80 = -1;
    context.groupMarkerEnd80 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};
const fiber0367 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...])))\s✱)|(\s✱(([0-9A-F...
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
   * /^((\s✱((?:[...
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * groupStartMarker
   * /^((\s✱((?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%..✱)?\s✱))$/
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * disjunction
   * /^((\s✱((?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.(([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5]))\.)([0-9]|[1-9][0-9]|1[0-9][0-9]|2(?:[0-4][0-9]|5[0-5])))\s✱)|(\s✱(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)([0-9A-Fa-f][0-9A-Fa-f]{0,3}|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(:[0-9A-Fa-f][0-9A-Fa-f]{0,3}|((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,2})|:(?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)))|)))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,3})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3})?:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:[0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,4})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,2}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|([0-9A-Fa-f][0-9A-Fa-f]{0,3}:([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,5})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,3}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(([0-9A-Fa-f][0-9A-Fa-f]{0,3}:)(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,6})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,4}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:))|(:(((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){1,7})|((:[0-9A-Fa-f][0-9A-Fa-f]{0,3}){0,5}:((2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)\.(?:2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d)(\.(2(?:5[0-5]|[0-4]\d)|1\d\d|[1-9]?\d))))|:)))(%..✱)?\s✱))$/
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck2 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck2 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue2 = (firstCharQuickCheck2 << 16) ^ secondCharQuickCheck2;

  if ((quickCheckValue2 & 16777472) === 0) {
    const length0 = fiber0031(i, str, context);
    if (length0 !== -1) {
      return length0;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart1 = -1;
    context.groupMarkerEnd1 = -1;
    context.groupMarkerStart2 = -1;
    context.groupMarkerEnd2 = -1;
    context.groupMarkerStart3 = -1;
    context.groupMarkerEnd3 = -1;
    context.groupMarkerStart4 = -1;
    context.groupMarkerEnd4 = -1;
    context.groupMarkerStart5 = -1;
    context.groupMarkerEnd5 = -1;
  }
  if ((quickCheckValue2 & 16777472) === 0) {
    const length1 = fiber0366(i, str, context);
    if (length1 !== -1) {
      return length1;
    }
    context.groupMarkerStart0 = -1;
    context.groupMarkerEnd0 = -1;
    context.groupMarkerStart6 = -1;
    context.groupMarkerEnd6 = -1;
    context.groupMarkerStart7 = -1;
    context.groupMarkerEnd7 = -1;
    context.groupMarkerStart8 = -1;
    context.groupMarkerEnd8 = -1;
    context.groupMarkerStart9 = -1;
    context.groupMarkerEnd9 = -1;
    context.groupMarkerStart10 = -1;
    context.groupMarkerEnd10 = -1;
    context.groupMarkerStart11 = -1;
    context.groupMarkerEnd11 = -1;
    context.groupMarkerStart12 = -1;
    context.groupMarkerEnd12 = -1;
    context.groupMarkerStart13 = -1;
    context.groupMarkerEnd13 = -1;
    context.groupMarkerStart14 = -1;
    context.groupMarkerEnd14 = -1;
    context.groupMarkerStart15 = -1;
    context.groupMarkerEnd15 = -1;
    context.groupMarkerStart16 = -1;
    context.groupMarkerEnd16 = -1;
    context.groupMarkerStart17 = -1;
    context.groupMarkerEnd17 = -1;
    context.groupMarkerStart18 = -1;
    context.groupMarkerEnd18 = -1;
    context.groupMarkerStart19 = -1;
    context.groupMarkerEnd19 = -1;
    context.groupMarkerStart20 = -1;
    context.groupMarkerEnd20 = -1;
    context.groupMarkerStart21 = -1;
    context.groupMarkerEnd21 = -1;
    context.groupMarkerStart23 = -1;
    context.groupMarkerEnd23 = -1;
    context.groupMarkerStart24 = -1;
    context.groupMarkerEnd24 = -1;
    context.groupMarkerStart25 = -1;
    context.groupMarkerEnd25 = -1;
    context.groupMarkerStart26 = -1;
    context.groupMarkerEnd26 = -1;
    context.groupMarkerStart27 = -1;
    context.groupMarkerEnd27 = -1;
    context.groupMarkerStart28 = -1;
    context.groupMarkerEnd28 = -1;
    context.groupMarkerStart29 = -1;
    context.groupMarkerEnd29 = -1;
    context.groupMarkerStart30 = -1;
    context.groupMarkerEnd30 = -1;
    context.groupMarkerStart32 = -1;
    context.groupMarkerEnd32 = -1;
    context.groupMarkerStart33 = -1;
    context.groupMarkerEnd33 = -1;
    context.groupMarkerStart34 = -1;
    context.groupMarkerEnd34 = -1;
    context.groupMarkerStart35 = -1;
    context.groupMarkerEnd35 = -1;
    context.groupMarkerStart36 = -1;
    context.groupMarkerEnd36 = -1;
    context.groupMarkerStart37 = -1;
    context.groupMarkerEnd37 = -1;
    context.groupMarkerStart38 = -1;
    context.groupMarkerEnd38 = -1;
    context.groupMarkerStart39 = -1;
    context.groupMarkerEnd39 = -1;
    context.groupMarkerStart40 = -1;
    context.groupMarkerEnd40 = -1;
    context.groupMarkerStart41 = -1;
    context.groupMarkerEnd41 = -1;
    context.groupMarkerStart43 = -1;
    context.groupMarkerEnd43 = -1;
    context.groupMarkerStart44 = -1;
    context.groupMarkerEnd44 = -1;
    context.groupMarkerStart45 = -1;
    context.groupMarkerEnd45 = -1;
    context.groupMarkerStart46 = -1;
    context.groupMarkerEnd46 = -1;
    context.groupMarkerStart47 = -1;
    context.groupMarkerEnd47 = -1;
    context.groupMarkerStart48 = -1;
    context.groupMarkerEnd48 = -1;
    context.groupMarkerStart49 = -1;
    context.groupMarkerEnd49 = -1;
    context.groupMarkerStart50 = -1;
    context.groupMarkerEnd50 = -1;
    context.groupMarkerStart51 = -1;
    context.groupMarkerEnd51 = -1;
    context.groupMarkerStart52 = -1;
    context.groupMarkerEnd52 = -1;
    context.groupMarkerStart54 = -1;
    context.groupMarkerEnd54 = -1;
    context.groupMarkerStart55 = -1;
    context.groupMarkerEnd55 = -1;
    context.groupMarkerStart56 = -1;
    context.groupMarkerEnd56 = -1;
    context.groupMarkerStart57 = -1;
    context.groupMarkerEnd57 = -1;
    context.groupMarkerStart58 = -1;
    context.groupMarkerEnd58 = -1;
    context.groupMarkerStart59 = -1;
    context.groupMarkerEnd59 = -1;
    context.groupMarkerStart60 = -1;
    context.groupMarkerEnd60 = -1;
    context.groupMarkerStart61 = -1;
    context.groupMarkerEnd61 = -1;
    context.groupMarkerStart62 = -1;
    context.groupMarkerEnd62 = -1;
    context.groupMarkerStart63 = -1;
    context.groupMarkerEnd63 = -1;
    context.groupMarkerStart65 = -1;
    context.groupMarkerEnd65 = -1;
    context.groupMarkerStart66 = -1;
    context.groupMarkerEnd66 = -1;
    context.groupMarkerStart67 = -1;
    context.groupMarkerEnd67 = -1;
    context.groupMarkerStart68 = -1;
    context.groupMarkerEnd68 = -1;
    context.groupMarkerStart69 = -1;
    context.groupMarkerEnd69 = -1;
    context.groupMarkerStart70 = -1;
    context.groupMarkerEnd70 = -1;
    context.groupMarkerStart71 = -1;
    context.groupMarkerEnd71 = -1;
    context.groupMarkerStart72 = -1;
    context.groupMarkerEnd72 = -1;
    context.groupMarkerStart73 = -1;
    context.groupMarkerEnd73 = -1;
    context.groupMarkerStart75 = -1;
    context.groupMarkerEnd75 = -1;
    context.groupMarkerStart76 = -1;
    context.groupMarkerEnd76 = -1;
    context.groupMarkerStart77 = -1;
    context.groupMarkerEnd77 = -1;
    context.groupMarkerStart78 = -1;
    context.groupMarkerEnd78 = -1;
    context.groupMarkerStart79 = -1;
    context.groupMarkerEnd79 = -1;
    context.groupMarkerStart80 = -1;
    context.groupMarkerEnd80 = -1;
    context.groupMarkerStart81 = -1;
    context.groupMarkerEnd81 = -1;
  }
  return -1;
};

/*
 * ...d))))|:)))(%..✱)?\s✱))$/
 *              ^^^^^^^
 */
const greedyQuantifier0036 = (
  start: number,
  str: string,
  context: Context
): number => {
  context.quantifierCounter0++;

  if (context.quantifierCounter0 !== 1) {
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
  }

  return fiber0033(start, str, context);
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

  if (context.quantifierCounter1 !== 1) {
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
  }

  return fiber0177(start, str, context);
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

  if (context.quantifierCounter2 !== 2) {
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
  }

  return fiber0224(start, str, context);
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

  if (context.quantifierCounter3 !== 3) {
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
  }

  return fiber0270(start, str, context);
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

  if (context.quantifierCounter4 !== 4) {
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
  }

  return fiber0315(start, str, context);
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

  if (context.quantifierCounter5 !== 5) {
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
  }

  return fiber0359(start, str, context);
};
