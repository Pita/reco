// This code was generated with RECO v0.3.0
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

type GroupMarkers = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

type TempGroupMarkers = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

type QuantifierCounters = [number, number, number, number, number, number];

export function generatedRegexMatcher(str: string) {
  const groupMarkers: GroupMarkers = [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
  ];
  const tempGroupStartMarkers: TempGroupMarkers = [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
  ];
  const quantifierCounters: QuantifierCounters = [-1, -1, -1, -1, -1, -1];

  for (let i = 0; i < str.length; i++) {
    const posAfterMatch = fiber0001(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [
          str.substring(i, posAfterMatch),
          groupMarkers[1] !== -1
            ? str.substring(groupMarkers[0], groupMarkers[1])
            : undefined,
          groupMarkers[3] !== -1
            ? str.substring(groupMarkers[2], groupMarkers[3])
            : undefined,
          groupMarkers[5] !== -1
            ? str.substring(groupMarkers[4], groupMarkers[5])
            : undefined,
          groupMarkers[7] !== -1
            ? str.substring(groupMarkers[6], groupMarkers[7])
            : undefined,
          groupMarkers[9] !== -1
            ? str.substring(groupMarkers[8], groupMarkers[9])
            : undefined,
          groupMarkers[11] !== -1
            ? str.substring(groupMarkers[10], groupMarkers[11])
            : undefined,
          groupMarkers[13] !== -1
            ? str.substring(groupMarkers[12], groupMarkers[13])
            : undefined,
          groupMarkers[15] !== -1
            ? str.substring(groupMarkers[14], groupMarkers[15])
            : undefined,
          groupMarkers[17] !== -1
            ? str.substring(groupMarkers[16], groupMarkers[17])
            : undefined,
          groupMarkers[19] !== -1
            ? str.substring(groupMarkers[18], groupMarkers[19])
            : undefined,
          groupMarkers[21] !== -1
            ? str.substring(groupMarkers[20], groupMarkers[21])
            : undefined,
          groupMarkers[23] !== -1
            ? str.substring(groupMarkers[22], groupMarkers[23])
            : undefined,
          groupMarkers[25] !== -1
            ? str.substring(groupMarkers[24], groupMarkers[25])
            : undefined,
          groupMarkers[27] !== -1
            ? str.substring(groupMarkers[26], groupMarkers[27])
            : undefined,
          groupMarkers[29] !== -1
            ? str.substring(groupMarkers[28], groupMarkers[29])
            : undefined,
          groupMarkers[31] !== -1
            ? str.substring(groupMarkers[30], groupMarkers[31])
            : undefined,
          groupMarkers[33] !== -1
            ? str.substring(groupMarkers[32], groupMarkers[33])
            : undefined,
          groupMarkers[35] !== -1
            ? str.substring(groupMarkers[34], groupMarkers[35])
            : undefined,
          groupMarkers[37] !== -1
            ? str.substring(groupMarkers[36], groupMarkers[37])
            : undefined,
          groupMarkers[39] !== -1
            ? str.substring(groupMarkers[38], groupMarkers[39])
            : undefined,
          groupMarkers[41] !== -1
            ? str.substring(groupMarkers[40], groupMarkers[41])
            : undefined,
          groupMarkers[43] !== -1
            ? str.substring(groupMarkers[42], groupMarkers[43])
            : undefined,
          groupMarkers[45] !== -1
            ? str.substring(groupMarkers[44], groupMarkers[45])
            : undefined,
          groupMarkers[47] !== -1
            ? str.substring(groupMarkers[46], groupMarkers[47])
            : undefined,
          groupMarkers[49] !== -1
            ? str.substring(groupMarkers[48], groupMarkers[49])
            : undefined,
          groupMarkers[51] !== -1
            ? str.substring(groupMarkers[50], groupMarkers[51])
            : undefined,
          groupMarkers[53] !== -1
            ? str.substring(groupMarkers[52], groupMarkers[53])
            : undefined,
          groupMarkers[55] !== -1
            ? str.substring(groupMarkers[54], groupMarkers[55])
            : undefined,
          groupMarkers[57] !== -1
            ? str.substring(groupMarkers[56], groupMarkers[57])
            : undefined,
          groupMarkers[59] !== -1
            ? str.substring(groupMarkers[58], groupMarkers[59])
            : undefined,
          groupMarkers[61] !== -1
            ? str.substring(groupMarkers[60], groupMarkers[61])
            : undefined,
          groupMarkers[63] !== -1
            ? str.substring(groupMarkers[62], groupMarkers[63])
            : undefined,
          groupMarkers[65] !== -1
            ? str.substring(groupMarkers[64], groupMarkers[65])
            : undefined,
          groupMarkers[67] !== -1
            ? str.substring(groupMarkers[66], groupMarkers[67])
            : undefined,
          groupMarkers[69] !== -1
            ? str.substring(groupMarkers[68], groupMarkers[69])
            : undefined,
          groupMarkers[71] !== -1
            ? str.substring(groupMarkers[70], groupMarkers[71])
            : undefined,
          groupMarkers[73] !== -1
            ? str.substring(groupMarkers[72], groupMarkers[73])
            : undefined,
          groupMarkers[75] !== -1
            ? str.substring(groupMarkers[74], groupMarkers[75])
            : undefined,
          groupMarkers[77] !== -1
            ? str.substring(groupMarkers[76], groupMarkers[77])
            : undefined,
          groupMarkers[79] !== -1
            ? str.substring(groupMarkers[78], groupMarkers[79])
            : undefined,
          groupMarkers[81] !== -1
            ? str.substring(groupMarkers[80], groupMarkers[81])
            : undefined,
          groupMarkers[83] !== -1
            ? str.substring(groupMarkers[82], groupMarkers[83])
            : undefined,
          groupMarkers[85] !== -1
            ? str.substring(groupMarkers[84], groupMarkers[85])
            : undefined,
          groupMarkers[87] !== -1
            ? str.substring(groupMarkers[86], groupMarkers[87])
            : undefined,
          groupMarkers[89] !== -1
            ? str.substring(groupMarkers[88], groupMarkers[89])
            : undefined,
          groupMarkers[91] !== -1
            ? str.substring(groupMarkers[90], groupMarkers[91])
            : undefined,
          groupMarkers[93] !== -1
            ? str.substring(groupMarkers[92], groupMarkers[93])
            : undefined,
          groupMarkers[95] !== -1
            ? str.substring(groupMarkers[94], groupMarkers[95])
            : undefined,
          groupMarkers[97] !== -1
            ? str.substring(groupMarkers[96], groupMarkers[97])
            : undefined,
          groupMarkers[99] !== -1
            ? str.substring(groupMarkers[98], groupMarkers[99])
            : undefined,
          groupMarkers[101] !== -1
            ? str.substring(groupMarkers[100], groupMarkers[101])
            : undefined,
          groupMarkers[103] !== -1
            ? str.substring(groupMarkers[102], groupMarkers[103])
            : undefined,
          groupMarkers[105] !== -1
            ? str.substring(groupMarkers[104], groupMarkers[105])
            : undefined,
          groupMarkers[107] !== -1
            ? str.substring(groupMarkers[106], groupMarkers[107])
            : undefined,
          groupMarkers[109] !== -1
            ? str.substring(groupMarkers[108], groupMarkers[109])
            : undefined,
          groupMarkers[111] !== -1
            ? str.substring(groupMarkers[110], groupMarkers[111])
            : undefined,
          groupMarkers[113] !== -1
            ? str.substring(groupMarkers[112], groupMarkers[113])
            : undefined,
          groupMarkers[115] !== -1
            ? str.substring(groupMarkers[114], groupMarkers[115])
            : undefined,
          groupMarkers[117] !== -1
            ? str.substring(groupMarkers[116], groupMarkers[117])
            : undefined,
          groupMarkers[119] !== -1
            ? str.substring(groupMarkers[118], groupMarkers[119])
            : undefined,
          groupMarkers[121] !== -1
            ? str.substring(groupMarkers[120], groupMarkers[121])
            : undefined,
          groupMarkers[123] !== -1
            ? str.substring(groupMarkers[122], groupMarkers[123])
            : undefined,
          groupMarkers[125] !== -1
            ? str.substring(groupMarkers[124], groupMarkers[125])
            : undefined,
          groupMarkers[127] !== -1
            ? str.substring(groupMarkers[126], groupMarkers[127])
            : undefined,
          groupMarkers[129] !== -1
            ? str.substring(groupMarkers[128], groupMarkers[129])
            : undefined,
          groupMarkers[131] !== -1
            ? str.substring(groupMarkers[130], groupMarkers[131])
            : undefined,
          groupMarkers[133] !== -1
            ? str.substring(groupMarkers[132], groupMarkers[133])
            : undefined,
          groupMarkers[135] !== -1
            ? str.substring(groupMarkers[134], groupMarkers[135])
            : undefined,
          groupMarkers[137] !== -1
            ? str.substring(groupMarkers[136], groupMarkers[137])
            : undefined,
          groupMarkers[139] !== -1
            ? str.substring(groupMarkers[138], groupMarkers[139])
            : undefined,
          groupMarkers[141] !== -1
            ? str.substring(groupMarkers[140], groupMarkers[141])
            : undefined,
          groupMarkers[143] !== -1
            ? str.substring(groupMarkers[142], groupMarkers[143])
            : undefined,
          groupMarkers[145] !== -1
            ? str.substring(groupMarkers[144], groupMarkers[145])
            : undefined,
          groupMarkers[147] !== -1
            ? str.substring(groupMarkers[146], groupMarkers[147])
            : undefined,
          groupMarkers[149] !== -1
            ? str.substring(groupMarkers[148], groupMarkers[149])
            : undefined,
          groupMarkers[151] !== -1
            ? str.substring(groupMarkers[150], groupMarkers[151])
            : undefined,
          groupMarkers[153] !== -1
            ? str.substring(groupMarkers[152], groupMarkers[153])
            : undefined,
          groupMarkers[155] !== -1
            ? str.substring(groupMarkers[154], groupMarkers[155])
            : undefined,
          groupMarkers[157] !== -1
            ? str.substring(groupMarkers[156], groupMarkers[157])
            : undefined,
          groupMarkers[159] !== -1
            ? str.substring(groupMarkers[158], groupMarkers[159])
            : undefined,
          groupMarkers[161] !== -1
            ? str.substring(groupMarkers[160], groupMarkers[161])
            : undefined,
          groupMarkers[163] !== -1
            ? str.substring(groupMarkers[162], groupMarkers[163])
            : undefined,
        ],
      };
    }
  }

  return null;
}

const fiber0001 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s✱$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s✱$))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * nonBacktrackingDisjunction
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s✱$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s✱$))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction1: {
    const groupMarkerCopy2 = groupMarkers[2];
    const groupMarkerCopy3 = groupMarkers[3];
    const groupMarkerCopy4 = groupMarkers[4];
    const groupMarkerCopy5 = groupMarkers[5];
    const groupMarkerCopy6 = groupMarkers[6];
    const groupMarkerCopy7 = groupMarkers[7];
    const groupMarkerCopy8 = groupMarkers[8];
    const groupMarkerCopy9 = groupMarkers[9];
    const groupMarkerCopy10 = groupMarkers[10];
    const groupMarkerCopy11 = groupMarkers[11];
    const groupMarkerCopy12 = groupMarkers[12];
    const groupMarkerCopy13 = groupMarkers[13];
    const groupMarkerCopy14 = groupMarkers[14];
    const groupMarkerCopy15 = groupMarkers[15];
    const groupMarkerCopy162 = groupMarkers[162];
    const groupMarkerCopy163 = groupMarkers[163];

    const length0 = fiber0002(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction1;
    }

    groupMarkers[2] = groupMarkerCopy2;
    groupMarkers[3] = groupMarkerCopy3;
    groupMarkers[4] = groupMarkerCopy4;
    groupMarkers[5] = groupMarkerCopy5;
    groupMarkers[6] = groupMarkerCopy6;
    groupMarkers[7] = groupMarkerCopy7;
    groupMarkers[8] = groupMarkerCopy8;
    groupMarkers[9] = groupMarkerCopy9;
    groupMarkers[10] = groupMarkerCopy10;
    groupMarkers[11] = groupMarkerCopy11;
    const length1 = fiber0031(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction1;
    }

    groupMarkers[12] = groupMarkerCopy12;
    groupMarkers[13] = groupMarkerCopy13;
    groupMarkers[14] = groupMarkerCopy14;
    groupMarkers[15] = groupMarkerCopy15;
    groupMarkers[162] = groupMarkerCopy162;
    groupMarkers[163] = groupMarkerCopy163;

    return -1;
  }
  /*
   * groupEndMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s✱$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s✱$))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  return i;
};
const fiber0002 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s✱$)|(^\s✱((([...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * startAnchor
   * /((^\s✱((([0-9...
   *    ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * nonBacktrackingQuantifier
   * /((^\s✱((([0-9]|[...
   *     ^^^
   */
  while (true) {
    const wrappedResult = fiber0024(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupStartMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s✱$)|(^\s...
   *        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[2] = i;
  /*
   * groupStartMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|...
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[3] = i;
  /*
   * groupStartMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[4] = i;
  /*
   * nonBacktrackingDisjunction
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction6: {
    const length0 = fiber0019(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction6;
    }

    const length1 = fiber0020(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction6;
    }

    const length2 = fiber0021(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction6;
    }

    const length3 = fiber0022(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction6;
    }

    const length4 = fiber0023(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length4 !== -1) {
      i = length4;
      break nonBacktrackingDisjunction6;
    }

    return -1;
  }
  /*
   * groupEndMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[8] = tempGroupStartMarkers[4];
  groupMarkers[9] = i;
  /*
   * charOrSet
   * ...]|25[0-5])\.){3}([0-9]...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode8 = str.charCodeAt(i);
  let result8 = false;

  result8 = charCode8 === 46;

  if (!result8) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|...
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[6] = tempGroupStartMarkers[3];
  groupMarkers[7] = i;
  /*
   * groupStartMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|...
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[3] = i;
  /*
   * groupStartMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[4] = i;
  /*
   * nonBacktrackingDisjunction
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction12: {
    const length0 = fiber0014(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction12;
    }

    const length1 = fiber0015(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction12;
    }

    const length2 = fiber0016(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction12;
    }

    const length3 = fiber0017(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction12;
    }

    const length4 = fiber0018(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length4 !== -1) {
      i = length4;
      break nonBacktrackingDisjunction12;
    }

    return -1;
  }
  /*
   * groupEndMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[8] = tempGroupStartMarkers[4];
  groupMarkers[9] = i;
  /*
   * charOrSet
   * ...]|25[0-5])\.){3}([0-9]...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode14 = str.charCodeAt(i);
  let result14 = false;

  result14 = charCode14 === 46;

  if (!result14) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|...
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[6] = tempGroupStartMarkers[3];
  groupMarkers[7] = i;
  /*
   * groupStartMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|...
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[3] = i;
  /*
   * groupStartMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[4] = i;
  /*
   * nonBacktrackingDisjunction
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction18: {
    const length0 = fiber0009(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction18;
    }

    const length1 = fiber0010(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction18;
    }

    const length2 = fiber0011(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction18;
    }

    const length3 = fiber0012(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction18;
    }

    const length4 = fiber0013(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length4 !== -1) {
      i = length4;
      break nonBacktrackingDisjunction18;
    }

    return -1;
  }
  /*
   * groupEndMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[8] = tempGroupStartMarkers[4];
  groupMarkers[9] = i;
  /*
   * charOrSet
   * ...]|25[0-5])\.){3}([0-9]...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode20 = str.charCodeAt(i);
  let result20 = false;

  result20 = charCode20 === 46;

  if (!result20) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|...
   *         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[6] = tempGroupStartMarkers[3];
  groupMarkers[7] = i;
  /*
   * groupStartMarker
   * ...-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s✱$)|(^\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[5] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s✱$)|(^\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction23: {
    const length0 = fiber0004(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction23;
    }

    const length1 = fiber0005(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction23;
    }

    const length2 = fiber0006(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction23;
    }

    const length3 = fiber0007(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction23;
    }

    const length4 = fiber0008(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length4 !== -1) {
      i = length4;
      break nonBacktrackingDisjunction23;
    }

    return -1;
  }
  /*
   * groupEndMarker
   * ...-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s✱$)|(^\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[10] = tempGroupStartMarkers[5];
  groupMarkers[11] = i;
  /*
   * groupEndMarker
   * /((^\s✱((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s✱$)|(^\s...
   *        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[4] = tempGroupStartMarkers[2];
  groupMarkers[5] = i;
  /*
   * nonBacktrackingQuantifier
   * ...|25[0-5]))\s✱$)|(^\s✱((...
   *              ^^^
   */
  while (true) {
    const wrappedResult = fiber0003(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
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
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  return i;
};
const fiber0003 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0004 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0005 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0006 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0007 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0008 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0009 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0010 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0011 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0012 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0013 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0014 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0015 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0016 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0017 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0018 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0019 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0020 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0021 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0022 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0023 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0024 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0025 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * ...:)))(%.+)?\s✱$))/
   *              ^^^
   */
  while (true) {
    const wrappedResult = fiber0026(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
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
  groupMarkers[12] = tempGroupStartMarkers[6];
  groupMarkers[13] = i;
  return i;
};
const fiber0026 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0027 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupEndMarker
   * ...{3}))|:)))(%.+)?\s✱$))/
   *              ^^^^^
   */
  groupMarkers[162] = tempGroupStartMarkers[81];
  groupMarkers[163] = i;
  return greedyQuantifier0028(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
};
const fiber0029 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0030 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...{3}))|:)))(%.+)?\s✱$))/
   *              ^^^^^
   */
  tempGroupStartMarkers[81] = i;
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
   * backtrackingFixedLengthQuantifier
   * ...}))|:)))(%.+)?\s✱$))/
   *              ^^
   */
  let matches2 = 0;

  while (true) {
    const wrappedResult = fiber0029(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult2 = fiber0027(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult2 !== -1) {
      return directFollowUpResult2;
    }

    matches2--;
    i -= 1;
  }

  return -1;
};
const fiber0031 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...5]))\s✱$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s✱$))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[6] = i;
  /*
   * startAnchor
   * ...]))\s✱$)|(^\s✱((([0-9...
   *              ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * nonBacktrackingQuantifier
   * ...))\s✱$)|(^\s✱((([0-9A-F...
   *              ^^^
   */
  while (true) {
    const wrappedResult = fiber0293(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupStartMarker
   * ...s✱$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s✱$))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[7] = i;
  /*
   * nonBacktrackingDisjunction
   * ...s✱$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s✱$))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction4: {
    const groupMarkerCopy16 = groupMarkers[16];
    const groupMarkerCopy17 = groupMarkers[17];
    const groupMarkerCopy18 = groupMarkers[18];
    const groupMarkerCopy19 = groupMarkers[19];
    const groupMarkerCopy20 = groupMarkers[20];
    const groupMarkerCopy21 = groupMarkers[21];
    const groupMarkerCopy22 = groupMarkers[22];
    const groupMarkerCopy23 = groupMarkers[23];
    const groupMarkerCopy24 = groupMarkers[24];
    const groupMarkerCopy25 = groupMarkers[25];
    const groupMarkerCopy26 = groupMarkers[26];
    const groupMarkerCopy27 = groupMarkers[27];
    const groupMarkerCopy36 = groupMarkers[36];
    const groupMarkerCopy37 = groupMarkers[37];
    const groupMarkerCopy38 = groupMarkers[38];
    const groupMarkerCopy39 = groupMarkers[39];
    const groupMarkerCopy40 = groupMarkers[40];
    const groupMarkerCopy41 = groupMarkers[41];
    const groupMarkerCopy54 = groupMarkers[54];
    const groupMarkerCopy55 = groupMarkers[55];
    const groupMarkerCopy56 = groupMarkers[56];
    const groupMarkerCopy57 = groupMarkers[57];
    const groupMarkerCopy58 = groupMarkers[58];
    const groupMarkerCopy59 = groupMarkers[59];
    const groupMarkerCopy76 = groupMarkers[76];
    const groupMarkerCopy77 = groupMarkers[77];
    const groupMarkerCopy78 = groupMarkers[78];
    const groupMarkerCopy79 = groupMarkers[79];
    const groupMarkerCopy80 = groupMarkers[80];
    const groupMarkerCopy81 = groupMarkers[81];
    const groupMarkerCopy98 = groupMarkers[98];
    const groupMarkerCopy99 = groupMarkers[99];
    const groupMarkerCopy100 = groupMarkers[100];
    const groupMarkerCopy101 = groupMarkers[101];
    const groupMarkerCopy102 = groupMarkers[102];
    const groupMarkerCopy103 = groupMarkers[103];
    const groupMarkerCopy120 = groupMarkers[120];
    const groupMarkerCopy121 = groupMarkers[121];
    const groupMarkerCopy122 = groupMarkers[122];
    const groupMarkerCopy123 = groupMarkers[123];
    const groupMarkerCopy124 = groupMarkers[124];
    const groupMarkerCopy125 = groupMarkers[125];
    const groupMarkerCopy142 = groupMarkers[142];
    const groupMarkerCopy143 = groupMarkers[143];
    const groupMarkerCopy144 = groupMarkers[144];
    const groupMarkerCopy145 = groupMarkers[145];

    const length0 = fiber0032(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction4;
    }

    groupMarkers[16] = groupMarkerCopy16;
    groupMarkers[17] = groupMarkerCopy17;
    groupMarkers[18] = groupMarkerCopy18;
    groupMarkers[19] = groupMarkerCopy19;
    groupMarkers[20] = groupMarkerCopy20;
    groupMarkers[21] = groupMarkerCopy21;
    const length1 = fiber0043(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction4;
    }

    groupMarkers[22] = groupMarkerCopy22;
    groupMarkers[23] = groupMarkerCopy23;
    groupMarkers[24] = groupMarkerCopy24;
    groupMarkers[25] = groupMarkerCopy25;
    groupMarkers[26] = groupMarkerCopy26;
    groupMarkers[27] = groupMarkerCopy27;
    const length2 = fiber0078(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction4;
    }

    groupMarkers[36] = groupMarkerCopy36;
    groupMarkers[37] = groupMarkerCopy37;
    groupMarkers[38] = groupMarkerCopy38;
    groupMarkers[39] = groupMarkerCopy39;
    groupMarkers[40] = groupMarkerCopy40;
    groupMarkers[41] = groupMarkerCopy41;
    const length3 = fiber0113(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction4;
    }

    groupMarkers[54] = groupMarkerCopy54;
    groupMarkers[55] = groupMarkerCopy55;
    groupMarkers[56] = groupMarkerCopy56;
    groupMarkers[57] = groupMarkerCopy57;
    groupMarkers[58] = groupMarkerCopy58;
    groupMarkers[59] = groupMarkerCopy59;
    const length4 = fiber0151(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length4 !== -1) {
      i = length4;
      break nonBacktrackingDisjunction4;
    }

    groupMarkers[76] = groupMarkerCopy76;
    groupMarkers[77] = groupMarkerCopy77;
    groupMarkers[78] = groupMarkerCopy78;
    groupMarkers[79] = groupMarkerCopy79;
    groupMarkers[80] = groupMarkerCopy80;
    groupMarkers[81] = groupMarkerCopy81;
    const length5 = fiber0188(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length5 !== -1) {
      i = length5;
      break nonBacktrackingDisjunction4;
    }

    groupMarkers[98] = groupMarkerCopy98;
    groupMarkers[99] = groupMarkerCopy99;
    groupMarkers[100] = groupMarkerCopy100;
    groupMarkers[101] = groupMarkerCopy101;
    groupMarkers[102] = groupMarkerCopy102;
    groupMarkers[103] = groupMarkerCopy103;
    const length6 = fiber0224(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length6 !== -1) {
      i = length6;
      break nonBacktrackingDisjunction4;
    }

    groupMarkers[120] = groupMarkerCopy120;
    groupMarkers[121] = groupMarkerCopy121;
    groupMarkers[122] = groupMarkerCopy122;
    groupMarkers[123] = groupMarkerCopy123;
    groupMarkers[124] = groupMarkerCopy124;
    groupMarkers[125] = groupMarkerCopy125;
    const length7 = fiber0259(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length7 !== -1) {
      i = length7;
      break nonBacktrackingDisjunction4;
    }

    groupMarkers[142] = groupMarkerCopy142;
    groupMarkers[143] = groupMarkerCopy143;
    groupMarkers[144] = groupMarkerCopy144;
    groupMarkers[145] = groupMarkerCopy145;

    return -1;
  }
  /*
   * groupEndMarker
   * ...s✱$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s✱$))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[14] = tempGroupStartMarkers[7];
  groupMarkers[15] = i;
  /*
   * quantifierStarter
   * ...{3}))|:)))(%.+)?\s✱$))/
   *              ^^^^^^
   */
  let matchCountCopygreedyQuantifier0028 = quantifierCounters[0];
  quantifierCounters[0] = -1;
  const cursorAfterQuantifier = greedyQuantifier0028(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[0] = matchCountCopygreedyQuantifier0028;

  return cursorAfterQuantifier;
};
const fiber0032 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...✱$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[8] = i;
  /*
   * groupStartMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[9] = i;
  /*
   * nonBacktrackingQuantifier
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0042(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * charOrSet
   * ...Fa-f]{1,4}:){7}([0-9A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  result3 = charCode3 === 58;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[18] = tempGroupStartMarkers[9];
  groupMarkers[19] = i;
  /*
   * groupStartMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[9] = i;
  /*
   * nonBacktrackingQuantifier
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches6 = 0;
  while (true) {
    const wrappedResult = fiber0041(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches6 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches6++;

      if (matches6 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){7}([0-9A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7 = false;

  result7 = charCode7 === 58;

  if (!result7) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[18] = tempGroupStartMarkers[9];
  groupMarkers[19] = i;
  /*
   * groupStartMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[9] = i;
  /*
   * nonBacktrackingQuantifier
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches10 = 0;
  while (true) {
    const wrappedResult = fiber0040(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches10 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches10++;

      if (matches10 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){7}([0-9A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode11 = str.charCodeAt(i);
  let result11 = false;

  result11 = charCode11 === 58;

  if (!result11) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[18] = tempGroupStartMarkers[9];
  groupMarkers[19] = i;
  /*
   * groupStartMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[9] = i;
  /*
   * nonBacktrackingQuantifier
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches14 = 0;
  while (true) {
    const wrappedResult = fiber0039(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches14 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches14++;

      if (matches14 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){7}([0-9A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode15 = str.charCodeAt(i);
  let result15 = false;

  result15 = charCode15 === 58;

  if (!result15) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[18] = tempGroupStartMarkers[9];
  groupMarkers[19] = i;
  /*
   * groupStartMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[9] = i;
  /*
   * nonBacktrackingQuantifier
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches18 = 0;
  while (true) {
    const wrappedResult = fiber0038(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches18 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches18++;

      if (matches18 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){7}([0-9A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode19 = str.charCodeAt(i);
  let result19 = false;

  result19 = charCode19 === 58;

  if (!result19) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[18] = tempGroupStartMarkers[9];
  groupMarkers[19] = i;
  /*
   * groupStartMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[9] = i;
  /*
   * nonBacktrackingQuantifier
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches22 = 0;
  while (true) {
    const wrappedResult = fiber0037(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches22 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches22++;

      if (matches22 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){7}([0-9A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode23 = str.charCodeAt(i);
  let result23 = false;

  result23 = charCode23 === 58;

  if (!result23) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[18] = tempGroupStartMarkers[9];
  groupMarkers[19] = i;
  /*
   * groupStartMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[9] = i;
  /*
   * nonBacktrackingQuantifier
   * ...)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches26 = 0;
  while (true) {
    const wrappedResult = fiber0036(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches26 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches26++;

      if (matches26 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){7}([0-9A...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode27 = str.charCodeAt(i);
  let result27 = false;

  result27 = charCode27 === 58;

  if (!result27) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[18] = tempGroupStartMarkers[9];
  groupMarkers[19] = i;
  /*
   * groupStartMarker
   * ...{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[10] = i;
  /*
   * nonBacktrackingDisjunction
   * ...{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction30: {
    const length0 = fiber0033(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction30;
    }

    const length1 = fiber0035(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction30;
    }

    return -1;
  }
  /*
   * groupEndMarker
   * ...{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[20] = tempGroupStartMarkers[10];
  groupMarkers[21] = i;
  /*
   * groupEndMarker
   * ...✱$)|(^\s✱((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[16] = tempGroupStartMarkers[8];
  groupMarkers[17] = i;
  return i;
};
const fiber0033 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * ...1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0034(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
  return i;
};
const fiber0034 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0035 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0036 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0037 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0038 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0039 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0040 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0041 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0042 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0043 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[11] = i;
  /*
   * groupStartMarker
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[12] = i;
  /*
   * nonBacktrackingQuantifier
   * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0077(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * charOrSet
   * ...Fa-f]{1,4}:){6}(:[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  result3 = charCode3 === 58;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[24] = tempGroupStartMarkers[12];
  groupMarkers[25] = i;
  /*
   * groupStartMarker
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[12] = i;
  /*
   * nonBacktrackingQuantifier
   * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches6 = 0;
  while (true) {
    const wrappedResult = fiber0076(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches6 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches6++;

      if (matches6 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){6}(:[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7 = false;

  result7 = charCode7 === 58;

  if (!result7) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[24] = tempGroupStartMarkers[12];
  groupMarkers[25] = i;
  /*
   * groupStartMarker
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[12] = i;
  /*
   * nonBacktrackingQuantifier
   * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches10 = 0;
  while (true) {
    const wrappedResult = fiber0075(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches10 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches10++;

      if (matches10 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){6}(:[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode11 = str.charCodeAt(i);
  let result11 = false;

  result11 = charCode11 === 58;

  if (!result11) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[24] = tempGroupStartMarkers[12];
  groupMarkers[25] = i;
  /*
   * groupStartMarker
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[12] = i;
  /*
   * nonBacktrackingQuantifier
   * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches14 = 0;
  while (true) {
    const wrappedResult = fiber0074(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches14 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches14++;

      if (matches14 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){6}(:[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode15 = str.charCodeAt(i);
  let result15 = false;

  result15 = charCode15 === 58;

  if (!result15) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[24] = tempGroupStartMarkers[12];
  groupMarkers[25] = i;
  /*
   * groupStartMarker
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[12] = i;
  /*
   * nonBacktrackingQuantifier
   * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches18 = 0;
  while (true) {
    const wrappedResult = fiber0073(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches18 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches18++;

      if (matches18 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){6}(:[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode19 = str.charCodeAt(i);
  let result19 = false;

  result19 = charCode19 === 58;

  if (!result19) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[24] = tempGroupStartMarkers[12];
  groupMarkers[25] = i;
  /*
   * groupStartMarker
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[12] = i;
  /*
   * nonBacktrackingQuantifier
   * ...,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches22 = 0;
  while (true) {
    const wrappedResult = fiber0072(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches22 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches22++;

      if (matches22 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){6}(:[0-9...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode23 = str.charCodeAt(i);
  let result23 = false;

  result23 = charCode23 === 58;

  if (!result23) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[24] = tempGroupStartMarkers[12];
  groupMarkers[25] = i;
  /*
   * groupStartMarker
   * ...{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[13] = i;
  /*
   * nonBacktrackingDisjunction
   * ...{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction26: {
    const groupMarkerCopy28 = groupMarkers[28];
    const groupMarkerCopy29 = groupMarkers[29];
    const groupMarkerCopy30 = groupMarkers[30];
    const groupMarkerCopy31 = groupMarkers[31];
    const groupMarkerCopy32 = groupMarkers[32];
    const groupMarkerCopy33 = groupMarkers[33];
    const groupMarkerCopy34 = groupMarkers[34];
    const groupMarkerCopy35 = groupMarkers[35];

    const length0 = fiber0044(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction26;
    }

    const length1 = fiber0046(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction26;
    }

    groupMarkers[28] = groupMarkerCopy28;
    groupMarkers[29] = groupMarkerCopy29;
    groupMarkers[30] = groupMarkerCopy30;
    groupMarkers[31] = groupMarkerCopy31;
    groupMarkers[32] = groupMarkerCopy32;
    groupMarkers[33] = groupMarkerCopy33;
    groupMarkers[34] = groupMarkerCopy34;
    groupMarkers[35] = groupMarkerCopy35;
    const length2 = fiber0071(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction26;
    }

    return -1;
  }
  /*
   * groupEndMarker
   * ...{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[26] = tempGroupStartMarkers[13];
  groupMarkers[27] = i;
  /*
   * groupEndMarker
   * ...{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[22] = tempGroupStartMarkers[11];
  groupMarkers[23] = i;
  return i;
};
const fiber0044 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
   * nonBacktrackingQuantifier
   * ...,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0045(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
const fiber0045 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0046 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[14] = i;
  /*
   * groupStartMarker
   * ...-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[15] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction2: {
    const length0 = fiber0065(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction2;
    }

    const length1 = fiber0066(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction2;
    }

    const length2 = fiber0067(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction2;
    }

    const length3 = fiber0070(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[30] = tempGroupStartMarkers[15];
  groupMarkers[31] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[16] = i;
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
  tempGroupStartMarkers[17] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction7: {
    const length0 = fiber0059(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction7;
    }

    const length1 = fiber0060(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction7;
    }

    const length2 = fiber0061(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction7;
    }

    const length3 = fiber0064(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[34] = tempGroupStartMarkers[17];
  groupMarkers[35] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[32] = tempGroupStartMarkers[16];
  groupMarkers[33] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[16] = i;
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
  tempGroupStartMarkers[17] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction13: {
    const length0 = fiber0053(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction13;
    }

    const length1 = fiber0054(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction13;
    }

    const length2 = fiber0055(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction13;
    }

    const length3 = fiber0058(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[34] = tempGroupStartMarkers[17];
  groupMarkers[35] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[32] = tempGroupStartMarkers[16];
  groupMarkers[33] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[16] = i;
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
  tempGroupStartMarkers[17] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction19: {
    const length0 = fiber0047(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction19;
    }

    const length1 = fiber0048(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction19;
    }

    const length2 = fiber0049(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction19;
    }

    const length3 = fiber0052(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[34] = tempGroupStartMarkers[17];
  groupMarkers[35] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[32] = tempGroupStartMarkers[16];
  groupMarkers[33] = i;
  /*
   * groupEndMarker
   * ...a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[28] = tempGroupStartMarkers[14];
  groupMarkers[29] = i;
  return i;
};
const fiber0047 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0048 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0049 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0050 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0051 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0052 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3})|:...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0051(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0050(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0053 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0054 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0055 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0056 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0057 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0058 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3})|:...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0057(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0056(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0059 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0060 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0061 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0062 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0063 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0064 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3})|:...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0063(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0062(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0065 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0066 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0067 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0068 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0069 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0070 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0069(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0068(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0071 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0072 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0073 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0074 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0075 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0076 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0077 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0078 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[18] = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[19] = i;
  /*
   * nonBacktrackingQuantifier
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0112(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * charOrSet
   * ...Fa-f]{1,4}:){5}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  result3 = charCode3 === 58;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[38] = tempGroupStartMarkers[19];
  groupMarkers[39] = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[19] = i;
  /*
   * nonBacktrackingQuantifier
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches6 = 0;
  while (true) {
    const wrappedResult = fiber0111(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches6 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches6++;

      if (matches6 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){5}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7 = false;

  result7 = charCode7 === 58;

  if (!result7) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[38] = tempGroupStartMarkers[19];
  groupMarkers[39] = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[19] = i;
  /*
   * nonBacktrackingQuantifier
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches10 = 0;
  while (true) {
    const wrappedResult = fiber0110(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches10 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches10++;

      if (matches10 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){5}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode11 = str.charCodeAt(i);
  let result11 = false;

  result11 = charCode11 === 58;

  if (!result11) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[38] = tempGroupStartMarkers[19];
  groupMarkers[39] = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[19] = i;
  /*
   * nonBacktrackingQuantifier
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches14 = 0;
  while (true) {
    const wrappedResult = fiber0109(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches14 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches14++;

      if (matches14 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){5}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode15 = str.charCodeAt(i);
  let result15 = false;

  result15 = charCode15 === 58;

  if (!result15) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[38] = tempGroupStartMarkers[19];
  groupMarkers[39] = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[19] = i;
  /*
   * nonBacktrackingQuantifier
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches18 = 0;
  while (true) {
    const wrappedResult = fiber0108(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches18 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches18++;

      if (matches18 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){5}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode19 = str.charCodeAt(i);
  let result19 = false;

  result19 = charCode19 === 58;

  if (!result19) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[38] = tempGroupStartMarkers[19];
  groupMarkers[39] = i;
  /*
   * groupStartMarker
   * ...{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[20] = i;
  /*
   * nonBacktrackingDisjunction
   * ...{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction22: {
    const groupMarkerCopy42 = groupMarkers[42];
    const groupMarkerCopy43 = groupMarkers[43];
    const groupMarkerCopy46 = groupMarkers[46];
    const groupMarkerCopy47 = groupMarkers[47];
    const groupMarkerCopy48 = groupMarkers[48];
    const groupMarkerCopy49 = groupMarkers[49];
    const groupMarkerCopy50 = groupMarkers[50];
    const groupMarkerCopy51 = groupMarkers[51];
    const groupMarkerCopy52 = groupMarkers[52];
    const groupMarkerCopy53 = groupMarkers[53];

    const length0 = fiber0079(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction22;
    }

    groupMarkers[42] = groupMarkerCopy42;
    groupMarkers[43] = groupMarkerCopy43;
    const length1 = fiber0082(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction22;
    }

    groupMarkers[46] = groupMarkerCopy46;
    groupMarkers[47] = groupMarkerCopy47;
    groupMarkers[48] = groupMarkerCopy48;
    groupMarkers[49] = groupMarkerCopy49;
    groupMarkers[50] = groupMarkerCopy50;
    groupMarkers[51] = groupMarkerCopy51;
    groupMarkers[52] = groupMarkerCopy52;
    groupMarkers[53] = groupMarkerCopy53;
    const length2 = fiber0107(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction22;
    }

    return -1;
  }
  /*
   * groupEndMarker
   * ...{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[40] = tempGroupStartMarkers[20];
  groupMarkers[41] = i;
  /*
   * groupEndMarker
   * ...){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[36] = tempGroupStartMarkers[18];
  groupMarkers[37] = i;
  return i;
};
const fiber0079 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[21] = i;
  /*
   * nonBacktrackingQuantifier
   * ...,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0080(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * ...1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[42] = tempGroupStartMarkers[21];
  groupMarkers[43] = i;
  return i;
};
const fiber0080 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[22] = i;
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
   * nonBacktrackingQuantifier
   * ...}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:(...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0081(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * ...,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[44] = tempGroupStartMarkers[22];
  groupMarkers[45] = i;
  return i;
};
const fiber0081 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0082 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  tempGroupStartMarkers[23] = i;
  /*
   * groupStartMarker
   * ...){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[24] = i;
  /*
   * nonBacktrackingDisjunction
   * ...){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction3: {
    const length0 = fiber0101(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction3;
    }

    const length1 = fiber0102(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction3;
    }

    const length2 = fiber0103(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction3;
    }

    const length3 = fiber0106(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[48] = tempGroupStartMarkers[24];
  groupMarkers[49] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[25] = i;
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
  tempGroupStartMarkers[26] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction8: {
    const length0 = fiber0095(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction8;
    }

    const length1 = fiber0096(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction8;
    }

    const length2 = fiber0097(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction8;
    }

    const length3 = fiber0100(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[52] = tempGroupStartMarkers[26];
  groupMarkers[53] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[50] = tempGroupStartMarkers[25];
  groupMarkers[51] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[25] = i;
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
  tempGroupStartMarkers[26] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction14: {
    const length0 = fiber0089(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction14;
    }

    const length1 = fiber0090(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction14;
    }

    const length2 = fiber0091(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction14;
    }

    const length3 = fiber0094(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[52] = tempGroupStartMarkers[26];
  groupMarkers[53] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[50] = tempGroupStartMarkers[25];
  groupMarkers[51] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[25] = i;
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
  tempGroupStartMarkers[26] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction20: {
    const length0 = fiber0083(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction20;
    }

    const length1 = fiber0084(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction20;
    }

    const length2 = fiber0085(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction20;
    }

    const length3 = fiber0088(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[52] = tempGroupStartMarkers[26];
  groupMarkers[53] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[50] = tempGroupStartMarkers[25];
  groupMarkers[51] = i;
  /*
   * groupEndMarker
   * ...}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[46] = tempGroupStartMarkers[23];
  groupMarkers[47] = i;
  return i;
};
const fiber0083 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0084 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0085 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0086 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0087 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0088 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3})|:...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0087(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0086(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0089 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0090 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0091 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0092 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0093 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0094 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3})|:...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0093(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0092(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0095 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0096 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0097 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0098 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0099 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0100 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3})|:...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0099(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0098(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0101 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0102 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0103 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0104 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0105 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0106 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0105(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0104(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0107 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0108 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0109 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0110 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0111 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0112 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0113 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[27] = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[28] = i;
  /*
   * nonBacktrackingQuantifier
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0150(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * charOrSet
   * ...Fa-f]{1,4}:){4}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  result3 = charCode3 === 58;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[56] = tempGroupStartMarkers[28];
  groupMarkers[57] = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[28] = i;
  /*
   * nonBacktrackingQuantifier
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches6 = 0;
  while (true) {
    const wrappedResult = fiber0149(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches6 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches6++;

      if (matches6 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){4}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7 = false;

  result7 = charCode7 === 58;

  if (!result7) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[56] = tempGroupStartMarkers[28];
  groupMarkers[57] = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[28] = i;
  /*
   * nonBacktrackingQuantifier
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches10 = 0;
  while (true) {
    const wrappedResult = fiber0148(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches10 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches10++;

      if (matches10 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){4}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode11 = str.charCodeAt(i);
  let result11 = false;

  result11 = charCode11 === 58;

  if (!result11) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[56] = tempGroupStartMarkers[28];
  groupMarkers[57] = i;
  /*
   * groupStartMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[28] = i;
  /*
   * nonBacktrackingQuantifier
   * ...3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches14 = 0;
  while (true) {
    const wrappedResult = fiber0147(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches14 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches14++;

      if (matches14 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){4}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode15 = str.charCodeAt(i);
  let result15 = false;

  result15 = charCode15 === 58;

  if (!result15) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...{3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[56] = tempGroupStartMarkers[28];
  groupMarkers[57] = i;
  /*
   * groupStartMarker
   * ...{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[29] = i;
  /*
   * nonBacktrackingDisjunction
   * ...{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction18: {
    const groupMarkerCopy60 = groupMarkers[60];
    const groupMarkerCopy61 = groupMarkers[61];
    const groupMarkerCopy64 = groupMarkers[64];
    const groupMarkerCopy65 = groupMarkers[65];
    const groupMarkerCopy66 = groupMarkers[66];
    const groupMarkerCopy67 = groupMarkers[67];
    const groupMarkerCopy68 = groupMarkers[68];
    const groupMarkerCopy69 = groupMarkers[69];
    const groupMarkerCopy70 = groupMarkers[70];
    const groupMarkerCopy71 = groupMarkers[71];
    const groupMarkerCopy72 = groupMarkers[72];
    const groupMarkerCopy73 = groupMarkers[73];
    const groupMarkerCopy74 = groupMarkers[74];
    const groupMarkerCopy75 = groupMarkers[75];

    const length0 = fiber0114(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction18;
    }

    groupMarkers[60] = groupMarkerCopy60;
    groupMarkers[61] = groupMarkerCopy61;
    const length1 = fiber0145(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction18;
    }

    groupMarkers[64] = groupMarkerCopy64;
    groupMarkers[65] = groupMarkerCopy65;
    groupMarkers[66] = groupMarkerCopy66;
    groupMarkers[67] = groupMarkerCopy67;
    groupMarkers[68] = groupMarkerCopy68;
    groupMarkers[69] = groupMarkerCopy69;
    groupMarkers[70] = groupMarkerCopy70;
    groupMarkers[71] = groupMarkerCopy71;
    groupMarkers[72] = groupMarkerCopy72;
    groupMarkers[73] = groupMarkerCopy73;
    groupMarkers[74] = groupMarkerCopy74;
    groupMarkers[75] = groupMarkerCopy75;
    const length2 = fiber0146(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction18;
    }

    return -1;
  }
  /*
   * groupEndMarker
   * ...{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[58] = tempGroupStartMarkers[29];
  groupMarkers[59] = i;
  /*
   * groupEndMarker
   * ...){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[54] = tempGroupStartMarkers[27];
  groupMarkers[55] = i;
  return i;
};
const fiber0114 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[30] = i;
  /*
   * nonBacktrackingQuantifier
   * ...,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0115(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * ...1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[60] = tempGroupStartMarkers[30];
  groupMarkers[61] = i;
  return i;
};
const fiber0115 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[31] = i;
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
   * nonBacktrackingQuantifier
   * ...}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0116(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * ...,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[62] = tempGroupStartMarkers[31];
  groupMarkers[63] = i;
  return i;
};
const fiber0116 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0117 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  tempGroupStartMarkers[34] = i;
  /*
   * groupStartMarker
   * ...]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[35] = i;
  /*
   * nonBacktrackingDisjunction
   * ...]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction3: {
    const length0 = fiber0136(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction3;
    }

    const length1 = fiber0137(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction3;
    }

    const length2 = fiber0138(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction3;
    }

    const length3 = fiber0141(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[70] = tempGroupStartMarkers[35];
  groupMarkers[71] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[36] = i;
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
  tempGroupStartMarkers[37] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction8: {
    const length0 = fiber0130(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction8;
    }

    const length1 = fiber0131(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction8;
    }

    const length2 = fiber0132(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction8;
    }

    const length3 = fiber0135(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[74] = tempGroupStartMarkers[37];
  groupMarkers[75] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[72] = tempGroupStartMarkers[36];
  groupMarkers[73] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[36] = i;
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
  tempGroupStartMarkers[37] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction14: {
    const length0 = fiber0124(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction14;
    }

    const length1 = fiber0125(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction14;
    }

    const length2 = fiber0126(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction14;
    }

    const length3 = fiber0129(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[74] = tempGroupStartMarkers[37];
  groupMarkers[75] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[72] = tempGroupStartMarkers[36];
  groupMarkers[73] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[36] = i;
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
  tempGroupStartMarkers[37] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction20: {
    const length0 = fiber0118(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction20;
    }

    const length1 = fiber0119(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction20;
    }

    const length2 = fiber0120(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction20;
    }

    const length3 = fiber0123(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[74] = tempGroupStartMarkers[37];
  groupMarkers[75] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[72] = tempGroupStartMarkers[36];
  groupMarkers[73] = i;
  /*
   * groupEndMarker
   * ...f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[68] = tempGroupStartMarkers[34];
  groupMarkers[69] = i;
  /*
   * groupEndMarker
   * ...4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[64] = tempGroupStartMarkers[32];
  groupMarkers[65] = i;
  return i;
};
const fiber0118 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0119 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0120 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0121 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0122 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0123 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0122(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0121(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0124 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0125 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0126 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0127 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0128 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0129 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0128(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0127(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0130 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0131 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0132 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0133 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0134 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0135 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0134(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0133(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0136 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0137 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0138 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0139 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0140 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0141 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0140(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0139(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0142 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[33] = i;
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
   * nonBacktrackingQuantifier
   * ...{1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0144(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * ...}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[66] = tempGroupStartMarkers[33];
  groupMarkers[67] = i;
  return greedyQuantifier0143(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
};
const fiber0144 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0145 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[32] = i;
  /*
   * quantifierStarter
   * ...}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0143 = quantifierCounters[1];
  quantifierCounters[1] = -1;
  const cursorAfterQuantifier = greedyQuantifier0143(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[1] = matchCountCopygreedyQuantifier0143;

  return cursorAfterQuantifier;
};
const fiber0146 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0147 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0148 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0149 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0150 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0151 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...{3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[38] = i;
  /*
   * groupStartMarker
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[39] = i;
  /*
   * nonBacktrackingQuantifier
   * ...}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0187(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * charOrSet
   * ...Fa-f]{1,4}:){3}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  result3 = charCode3 === 58;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[78] = tempGroupStartMarkers[39];
  groupMarkers[79] = i;
  /*
   * groupStartMarker
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[39] = i;
  /*
   * nonBacktrackingQuantifier
   * ...}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches6 = 0;
  while (true) {
    const wrappedResult = fiber0186(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches6 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches6++;

      if (matches6 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){3}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7 = false;

  result7 = charCode7 === 58;

  if (!result7) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[78] = tempGroupStartMarkers[39];
  groupMarkers[79] = i;
  /*
   * groupStartMarker
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[39] = i;
  /*
   * nonBacktrackingQuantifier
   * ...}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches10 = 0;
  while (true) {
    const wrappedResult = fiber0185(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches10 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches10++;

      if (matches10 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){3}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode11 = str.charCodeAt(i);
  let result11 = false;

  result11 = charCode11 === 58;

  if (!result11) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[78] = tempGroupStartMarkers[39];
  groupMarkers[79] = i;
  /*
   * groupStartMarker
   * ...{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[40] = i;
  /*
   * nonBacktrackingDisjunction
   * ...{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction14: {
    const groupMarkerCopy82 = groupMarkers[82];
    const groupMarkerCopy83 = groupMarkers[83];
    const groupMarkerCopy86 = groupMarkers[86];
    const groupMarkerCopy87 = groupMarkers[87];
    const groupMarkerCopy88 = groupMarkers[88];
    const groupMarkerCopy89 = groupMarkers[89];
    const groupMarkerCopy90 = groupMarkers[90];
    const groupMarkerCopy91 = groupMarkers[91];
    const groupMarkerCopy92 = groupMarkers[92];
    const groupMarkerCopy93 = groupMarkers[93];
    const groupMarkerCopy94 = groupMarkers[94];
    const groupMarkerCopy95 = groupMarkers[95];
    const groupMarkerCopy96 = groupMarkers[96];
    const groupMarkerCopy97 = groupMarkers[97];

    const length0 = fiber0152(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction14;
    }

    groupMarkers[82] = groupMarkerCopy82;
    groupMarkers[83] = groupMarkerCopy83;
    const length1 = fiber0183(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction14;
    }

    groupMarkers[86] = groupMarkerCopy86;
    groupMarkers[87] = groupMarkerCopy87;
    groupMarkers[88] = groupMarkerCopy88;
    groupMarkers[89] = groupMarkerCopy89;
    groupMarkers[90] = groupMarkerCopy90;
    groupMarkers[91] = groupMarkerCopy91;
    groupMarkers[92] = groupMarkerCopy92;
    groupMarkers[93] = groupMarkerCopy93;
    groupMarkers[94] = groupMarkerCopy94;
    groupMarkers[95] = groupMarkerCopy95;
    groupMarkers[96] = groupMarkerCopy96;
    groupMarkers[97] = groupMarkerCopy97;
    const length2 = fiber0184(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction14;
    }

    return -1;
  }
  /*
   * groupEndMarker
   * ...{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[80] = tempGroupStartMarkers[40];
  groupMarkers[81] = i;
  /*
   * groupEndMarker
   * ...{3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[76] = tempGroupStartMarkers[38];
  groupMarkers[77] = i;
  return i;
};
const fiber0152 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[41] = i;
  /*
   * nonBacktrackingQuantifier
   * ...,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0153(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * ...1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[82] = tempGroupStartMarkers[41];
  groupMarkers[83] = i;
  return i;
};
const fiber0153 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[42] = i;
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
   * nonBacktrackingQuantifier
   * ...}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0154(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * ...,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[84] = tempGroupStartMarkers[42];
  groupMarkers[85] = i;
  return i;
};
const fiber0154 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0155 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  tempGroupStartMarkers[45] = i;
  /*
   * groupStartMarker
   * ...4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[46] = i;
  /*
   * nonBacktrackingDisjunction
   * ...4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction3: {
    const length0 = fiber0174(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction3;
    }

    const length1 = fiber0175(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction3;
    }

    const length2 = fiber0176(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction3;
    }

    const length3 = fiber0179(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[92] = tempGroupStartMarkers[46];
  groupMarkers[93] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[47] = i;
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
  tempGroupStartMarkers[48] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction8: {
    const length0 = fiber0168(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction8;
    }

    const length1 = fiber0169(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction8;
    }

    const length2 = fiber0170(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction8;
    }

    const length3 = fiber0173(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[96] = tempGroupStartMarkers[48];
  groupMarkers[97] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[94] = tempGroupStartMarkers[47];
  groupMarkers[95] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[47] = i;
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
  tempGroupStartMarkers[48] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction14: {
    const length0 = fiber0162(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction14;
    }

    const length1 = fiber0163(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction14;
    }

    const length2 = fiber0164(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction14;
    }

    const length3 = fiber0167(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[96] = tempGroupStartMarkers[48];
  groupMarkers[97] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[94] = tempGroupStartMarkers[47];
  groupMarkers[95] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[47] = i;
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
  tempGroupStartMarkers[48] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction20: {
    const length0 = fiber0156(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction20;
    }

    const length1 = fiber0157(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction20;
    }

    const length2 = fiber0158(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction20;
    }

    const length3 = fiber0161(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[96] = tempGroupStartMarkers[48];
  groupMarkers[97] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[94] = tempGroupStartMarkers[47];
  groupMarkers[95] = i;
  /*
   * groupEndMarker
   * ...,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[90] = tempGroupStartMarkers[45];
  groupMarkers[91] = i;
  /*
   * groupEndMarker
   * ...4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[86] = tempGroupStartMarkers[43];
  groupMarkers[87] = i;
  return i;
};
const fiber0156 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0157 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0158 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0159 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0160 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0161 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0160(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0159(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0162 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0163 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0164 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0165 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0166 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0167 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0166(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0165(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0168 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0169 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0170 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0171 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0172 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0173 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0172(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0171(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0174 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0175 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0176 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0177 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0178 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0179 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0178(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0177(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0180 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[44] = i;
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
   * nonBacktrackingQuantifier
   * ...{1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((2...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0182(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * ...}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[88] = tempGroupStartMarkers[44];
  groupMarkers[89] = i;
  return greedyQuantifier0181(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
};
const fiber0182 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0183 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[43] = i;
  /*
   * quantifierStarter
   * ...}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0181 = quantifierCounters[2];
  quantifierCounters[2] = -1;
  const cursorAfterQuantifier = greedyQuantifier0181(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[2] = matchCountCopygreedyQuantifier0181;

  return cursorAfterQuantifier;
};
const fiber0184 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0185 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0186 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0187 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0188 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...{3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[49] = i;
  /*
   * groupStartMarker
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[50] = i;
  /*
   * nonBacktrackingQuantifier
   * ...}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0223(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * charOrSet
   * ...Fa-f]{1,4}:){2}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  result3 = charCode3 === 58;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[100] = tempGroupStartMarkers[50];
  groupMarkers[101] = i;
  /*
   * groupStartMarker
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[50] = i;
  /*
   * nonBacktrackingQuantifier
   * ...}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches6 = 0;
  while (true) {
    const wrappedResult = fiber0222(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches6 < 1) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches6++;

      if (matches6 === 4) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...Fa-f]{1,4}:){2}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7 = false;

  result7 = charCode7 === 58;

  if (!result7) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[100] = tempGroupStartMarkers[50];
  groupMarkers[101] = i;
  /*
   * groupStartMarker
   * ...{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[51] = i;
  /*
   * nonBacktrackingDisjunction
   * ...{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction10: {
    const groupMarkerCopy104 = groupMarkers[104];
    const groupMarkerCopy105 = groupMarkers[105];
    const groupMarkerCopy108 = groupMarkers[108];
    const groupMarkerCopy109 = groupMarkers[109];
    const groupMarkerCopy110 = groupMarkers[110];
    const groupMarkerCopy111 = groupMarkers[111];
    const groupMarkerCopy112 = groupMarkers[112];
    const groupMarkerCopy113 = groupMarkers[113];
    const groupMarkerCopy114 = groupMarkers[114];
    const groupMarkerCopy115 = groupMarkers[115];
    const groupMarkerCopy116 = groupMarkers[116];
    const groupMarkerCopy117 = groupMarkers[117];
    const groupMarkerCopy118 = groupMarkers[118];
    const groupMarkerCopy119 = groupMarkers[119];

    const length0 = fiber0189(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction10;
    }

    groupMarkers[104] = groupMarkerCopy104;
    groupMarkers[105] = groupMarkerCopy105;
    const length1 = fiber0220(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction10;
    }

    groupMarkers[108] = groupMarkerCopy108;
    groupMarkers[109] = groupMarkerCopy109;
    groupMarkers[110] = groupMarkerCopy110;
    groupMarkers[111] = groupMarkerCopy111;
    groupMarkers[112] = groupMarkerCopy112;
    groupMarkers[113] = groupMarkerCopy113;
    groupMarkers[114] = groupMarkerCopy114;
    groupMarkers[115] = groupMarkerCopy115;
    groupMarkers[116] = groupMarkerCopy116;
    groupMarkers[117] = groupMarkerCopy117;
    groupMarkers[118] = groupMarkerCopy118;
    groupMarkers[119] = groupMarkerCopy119;
    const length2 = fiber0221(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction10;
    }

    return -1;
  }
  /*
   * groupEndMarker
   * ...{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[102] = tempGroupStartMarkers[51];
  groupMarkers[103] = i;
  /*
   * groupEndMarker
   * ...{3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-F...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[98] = tempGroupStartMarkers[49];
  groupMarkers[99] = i;
  return i;
};
const fiber0189 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[52] = i;
  /*
   * nonBacktrackingQuantifier
   * ...,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0190(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * ...1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[104] = tempGroupStartMarkers[52];
  groupMarkers[105] = i;
  return i;
};
const fiber0190 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[53] = i;
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
   * nonBacktrackingQuantifier
   * ...}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0191(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * ...,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[106] = tempGroupStartMarkers[53];
  groupMarkers[107] = i;
  return i;
};
const fiber0191 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0192 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  tempGroupStartMarkers[56] = i;
  /*
   * groupStartMarker
   * ...4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[57] = i;
  /*
   * nonBacktrackingDisjunction
   * ...4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction3: {
    const length0 = fiber0211(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction3;
    }

    const length1 = fiber0212(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction3;
    }

    const length2 = fiber0213(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction3;
    }

    const length3 = fiber0216(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[114] = tempGroupStartMarkers[57];
  groupMarkers[115] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[58] = i;
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
  tempGroupStartMarkers[59] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction8: {
    const length0 = fiber0205(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction8;
    }

    const length1 = fiber0206(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction8;
    }

    const length2 = fiber0207(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction8;
    }

    const length3 = fiber0210(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[118] = tempGroupStartMarkers[59];
  groupMarkers[119] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[116] = tempGroupStartMarkers[58];
  groupMarkers[117] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[58] = i;
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
  tempGroupStartMarkers[59] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction14: {
    const length0 = fiber0199(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction14;
    }

    const length1 = fiber0200(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction14;
    }

    const length2 = fiber0201(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction14;
    }

    const length3 = fiber0204(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[118] = tempGroupStartMarkers[59];
  groupMarkers[119] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[116] = tempGroupStartMarkers[58];
  groupMarkers[117] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[58] = i;
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
  tempGroupStartMarkers[59] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction20: {
    const length0 = fiber0193(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction20;
    }

    const length1 = fiber0194(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction20;
    }

    const length2 = fiber0195(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction20;
    }

    const length3 = fiber0198(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[118] = tempGroupStartMarkers[59];
  groupMarkers[119] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[116] = tempGroupStartMarkers[58];
  groupMarkers[117] = i;
  /*
   * groupEndMarker
   * ...,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[112] = tempGroupStartMarkers[56];
  groupMarkers[113] = i;
  /*
   * groupEndMarker
   * ...4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[108] = tempGroupStartMarkers[54];
  groupMarkers[109] = i;
  return i;
};
const fiber0193 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0194 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0195 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0196 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0197 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0198 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0197(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0196(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0199 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0200 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0201 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0202 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0203 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0204 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0203(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0202(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0205 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0206 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0207 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0208 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0209 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0210 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0209(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0208(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0211 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0212 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0213 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0214 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0215 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0216 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0215(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0214(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0217 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[55] = i;
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
   * nonBacktrackingQuantifier
   * ...{1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((2...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0219(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * ...}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[110] = tempGroupStartMarkers[55];
  groupMarkers[111] = i;
  return greedyQuantifier0218(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
};
const fiber0219 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0220 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[54] = i;
  /*
   * quantifierStarter
   * ...}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0218 = quantifierCounters[3];
  quantifierCounters[3] = -1;
  const cursorAfterQuantifier = greedyQuantifier0218(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[3] = matchCountCopygreedyQuantifier0218;

  return cursorAfterQuantifier;
};
const fiber0221 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0222 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0223 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0224 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...{3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[60] = i;
  /*
   * groupStartMarker
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[61] = i;
  /*
   * nonBacktrackingQuantifier
   * ...}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0258(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * charOrSet
   * ...Fa-f]{1,4}:){1}(((:[0...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  result3 = charCode3 === 58;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[122] = tempGroupStartMarkers[61];
  groupMarkers[123] = i;
  /*
   * groupStartMarker
   * ...{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[62] = i;
  /*
   * nonBacktrackingDisjunction
   * ...{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction6: {
    const groupMarkerCopy126 = groupMarkers[126];
    const groupMarkerCopy127 = groupMarkers[127];
    const groupMarkerCopy130 = groupMarkers[130];
    const groupMarkerCopy131 = groupMarkers[131];
    const groupMarkerCopy132 = groupMarkers[132];
    const groupMarkerCopy133 = groupMarkers[133];
    const groupMarkerCopy134 = groupMarkers[134];
    const groupMarkerCopy135 = groupMarkers[135];
    const groupMarkerCopy136 = groupMarkers[136];
    const groupMarkerCopy137 = groupMarkers[137];
    const groupMarkerCopy138 = groupMarkers[138];
    const groupMarkerCopy139 = groupMarkers[139];
    const groupMarkerCopy140 = groupMarkers[140];
    const groupMarkerCopy141 = groupMarkers[141];

    const length0 = fiber0225(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction6;
    }

    groupMarkers[126] = groupMarkerCopy126;
    groupMarkers[127] = groupMarkerCopy127;
    const length1 = fiber0256(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction6;
    }

    groupMarkers[130] = groupMarkerCopy130;
    groupMarkers[131] = groupMarkerCopy131;
    groupMarkers[132] = groupMarkerCopy132;
    groupMarkers[133] = groupMarkerCopy133;
    groupMarkers[134] = groupMarkerCopy134;
    groupMarkers[135] = groupMarkerCopy135;
    groupMarkers[136] = groupMarkerCopy136;
    groupMarkers[137] = groupMarkerCopy137;
    groupMarkers[138] = groupMarkerCopy138;
    groupMarkers[139] = groupMarkerCopy139;
    groupMarkers[140] = groupMarkerCopy140;
    groupMarkers[141] = groupMarkerCopy141;
    const length2 = fiber0257(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction6;
    }

    return -1;
  }
  /*
   * groupEndMarker
   * ...{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[124] = tempGroupStartMarkers[62];
  groupMarkers[125] = i;
  /*
   * groupEndMarker
   * ...{3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[120] = tempGroupStartMarkers[60];
  groupMarkers[121] = i;
  return i;
};
const fiber0225 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[63] = i;
  /*
   * nonBacktrackingQuantifier
   * ...,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0226(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * ...1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[126] = tempGroupStartMarkers[63];
  groupMarkers[127] = i;
  return i;
};
const fiber0226 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[64] = i;
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
   * nonBacktrackingQuantifier
   * ...}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0227(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * ...,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[128] = tempGroupStartMarkers[64];
  groupMarkers[129] = i;
  return i;
};
const fiber0227 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0228 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  tempGroupStartMarkers[67] = i;
  /*
   * groupStartMarker
   * ...4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[68] = i;
  /*
   * nonBacktrackingDisjunction
   * ...4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction3: {
    const length0 = fiber0247(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction3;
    }

    const length1 = fiber0248(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction3;
    }

    const length2 = fiber0249(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction3;
    }

    const length3 = fiber0252(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[136] = tempGroupStartMarkers[68];
  groupMarkers[137] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[69] = i;
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
  tempGroupStartMarkers[70] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction8: {
    const length0 = fiber0241(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction8;
    }

    const length1 = fiber0242(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction8;
    }

    const length2 = fiber0243(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction8;
    }

    const length3 = fiber0246(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[140] = tempGroupStartMarkers[70];
  groupMarkers[141] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[138] = tempGroupStartMarkers[69];
  groupMarkers[139] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[69] = i;
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
  tempGroupStartMarkers[70] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction14: {
    const length0 = fiber0235(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction14;
    }

    const length1 = fiber0236(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction14;
    }

    const length2 = fiber0237(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction14;
    }

    const length3 = fiber0240(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[140] = tempGroupStartMarkers[70];
  groupMarkers[141] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[138] = tempGroupStartMarkers[69];
  groupMarkers[139] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[69] = i;
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
  tempGroupStartMarkers[70] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction20: {
    const length0 = fiber0229(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction20;
    }

    const length1 = fiber0230(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction20;
    }

    const length2 = fiber0231(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction20;
    }

    const length3 = fiber0234(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[140] = tempGroupStartMarkers[70];
  groupMarkers[141] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[138] = tempGroupStartMarkers[69];
  groupMarkers[139] = i;
  /*
   * groupEndMarker
   * ...,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[134] = tempGroupStartMarkers[67];
  groupMarkers[135] = i;
  /*
   * groupEndMarker
   * ...4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[130] = tempGroupStartMarkers[65];
  groupMarkers[131] = i;
  return i;
};
const fiber0229 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0230 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0231 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0232 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0233 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0234 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0233(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0232(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0235 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0236 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0237 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0238 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0239 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0240 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0239(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0238(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0241 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0242 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0243 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0244 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0245 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0246 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0245(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0244(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0247 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0248 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0249 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0250 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0251 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0252 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0251(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0250(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0253 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[66] = i;
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
   * nonBacktrackingQuantifier
   * ...{1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((2...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0255(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * ...}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[132] = tempGroupStartMarkers[66];
  groupMarkers[133] = i;
  return greedyQuantifier0254(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
};
const fiber0255 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0256 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[65] = i;
  /*
   * quantifierStarter
   * ...}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0254 = quantifierCounters[4];
  quantifierCounters[4] = -1;
  const cursorAfterQuantifier = greedyQuantifier0254(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[4] = matchCountCopygreedyQuantifier0254;

  return cursorAfterQuantifier;
};
const fiber0257 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0258 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0259 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...{3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[71] = i;
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
  tempGroupStartMarkers[72] = i;
  /*
   * nonBacktrackingDisjunction
   * ...}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction3: {
    const groupMarkerCopy146 = groupMarkers[146];
    const groupMarkerCopy147 = groupMarkers[147];
    const groupMarkerCopy150 = groupMarkers[150];
    const groupMarkerCopy151 = groupMarkers[151];
    const groupMarkerCopy152 = groupMarkers[152];
    const groupMarkerCopy153 = groupMarkers[153];
    const groupMarkerCopy154 = groupMarkers[154];
    const groupMarkerCopy155 = groupMarkers[155];
    const groupMarkerCopy156 = groupMarkers[156];
    const groupMarkerCopy157 = groupMarkers[157];
    const groupMarkerCopy158 = groupMarkers[158];
    const groupMarkerCopy159 = groupMarkers[159];
    const groupMarkerCopy160 = groupMarkers[160];
    const groupMarkerCopy161 = groupMarkers[161];

    const length0 = fiber0260(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction3;
    }

    groupMarkers[146] = groupMarkerCopy146;
    groupMarkers[147] = groupMarkerCopy147;
    const length1 = fiber0291(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction3;
    }

    groupMarkers[150] = groupMarkerCopy150;
    groupMarkers[151] = groupMarkerCopy151;
    groupMarkers[152] = groupMarkerCopy152;
    groupMarkers[153] = groupMarkerCopy153;
    groupMarkers[154] = groupMarkerCopy154;
    groupMarkers[155] = groupMarkerCopy155;
    groupMarkers[156] = groupMarkerCopy156;
    groupMarkers[157] = groupMarkerCopy157;
    groupMarkers[158] = groupMarkerCopy158;
    groupMarkers[159] = groupMarkerCopy159;
    groupMarkers[160] = groupMarkerCopy160;
    groupMarkers[161] = groupMarkerCopy161;
    const length2 = fiber0292(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction3;
    }

    return -1;
  }
  /*
   * groupEndMarker
   * ...}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[144] = tempGroupStartMarkers[72];
  groupMarkers[145] = i;
  /*
   * groupEndMarker
   * ...{3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s✱...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[142] = tempGroupStartMarkers[71];
  groupMarkers[143] = i;
  return i;
};
const fiber0260 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[73] = i;
  /*
   * nonBacktrackingQuantifier
   * ...)|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0261(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * ...))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[146] = tempGroupStartMarkers[73];
  groupMarkers[147] = i;
  return i;
};
const fiber0261 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...)|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[74] = i;
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
   * nonBacktrackingQuantifier
   * ...:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0262(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * ...)|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[148] = tempGroupStartMarkers[74];
  groupMarkers[149] = i;
  return i;
};
const fiber0262 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0263 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  tempGroupStartMarkers[77] = i;
  /*
   * groupStartMarker
   * ...4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[78] = i;
  /*
   * nonBacktrackingDisjunction
   * ...4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction3: {
    const length0 = fiber0282(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction3;
    }

    const length1 = fiber0283(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction3;
    }

    const length2 = fiber0284(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction3;
    }

    const length3 = fiber0287(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[156] = tempGroupStartMarkers[78];
  groupMarkers[157] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[79] = i;
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
  tempGroupStartMarkers[80] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction8: {
    const length0 = fiber0276(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction8;
    }

    const length1 = fiber0277(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction8;
    }

    const length2 = fiber0278(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction8;
    }

    const length3 = fiber0281(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[160] = tempGroupStartMarkers[80];
  groupMarkers[161] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[158] = tempGroupStartMarkers[79];
  groupMarkers[159] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[79] = i;
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
  tempGroupStartMarkers[80] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction14: {
    const length0 = fiber0270(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction14;
    }

    const length1 = fiber0271(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction14;
    }

    const length2 = fiber0272(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction14;
    }

    const length3 = fiber0275(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[160] = tempGroupStartMarkers[80];
  groupMarkers[161] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[158] = tempGroupStartMarkers[79];
  groupMarkers[159] = i;
  /*
   * groupStartMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[79] = i;
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
  tempGroupStartMarkers[80] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction20: {
    const length0 = fiber0264(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction20;
    }

    const length1 = fiber0265(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction20;
    }

    const length2 = fiber0266(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction20;
    }

    const length3 = fiber0269(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
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
  groupMarkers[160] = tempGroupStartMarkers[80];
  groupMarkers[161] = i;
  /*
   * groupEndMarker
   * ...|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[158] = tempGroupStartMarkers[79];
  groupMarkers[159] = i;
  /*
   * groupEndMarker
   * ...,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[154] = tempGroupStartMarkers[77];
  groupMarkers[155] = i;
  /*
   * groupEndMarker
   * ...4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[150] = tempGroupStartMarkers[75];
  groupMarkers[151] = i;
  return i;
};
const fiber0264 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0265 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0266 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0267 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0268 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0269 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0268(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0267(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0270 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0271 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0272 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0273 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0274 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0275 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0274(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0273(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0276 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0277 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0278 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0279 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0280 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0281 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)){3}))|...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0280(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0279(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0282 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0283 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0284 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0285 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
const fiber0286 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0287 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]\d|1\d\d|[1-9]?\d)(\.(25[...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0286(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
    const directFollowUpResult0 = fiber0285(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult0 !== -1) {
      return directFollowUpResult0;
    }

    matches0--;
    i -= 1;
  }

  return -1;
};
const fiber0288 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[76] = i;
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
   * nonBacktrackingQuantifier
   * ...{1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((2...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0290(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
   * ...}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[152] = tempGroupStartMarkers[76];
  groupMarkers[153] = i;
  return greedyQuantifier0289(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
};
const fiber0290 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0291 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[75] = i;
  /*
   * quantifierStarter
   * ...}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0289 = quantifierCounters[5];
  quantifierCounters[5] = -1;
  const cursorAfterQuantifier = greedyQuantifier0289(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[5] = matchCountCopygreedyQuantifier0289;

  return cursorAfterQuantifier;
};
const fiber0292 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};
const fiber0293 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
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
  return i;
};

/*
 * ...{3}))|:)))(%.+)?\s✱$))/
 *              ^^^^^^
 */
const greedyQuantifier0028 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[0]++;

  if (quantifierCounters[0] === 1) {
    return fiber0025(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const groupMarkerCopy162 = groupMarkers[162];
  const groupMarkerCopy163 = groupMarkers[163];
  const tryDeeperResult = fiber0030(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  groupMarkers[162] = groupMarkerCopy162;
  groupMarkers[163] = groupMarkerCopy163;

  const groupMarkerCopy12 = groupMarkers[12];
  const groupMarkerCopy13 = groupMarkers[13];

  const followUpResult = fiber0025(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[12] = groupMarkerCopy12;
    groupMarkers[13] = groupMarkerCopy13;
    quantifierCounters[0]--;
  }
  return followUpResult;
};
/*
 * ...}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]...
 *              ^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0143 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[1]++;

  if (quantifierCounters[1] === 1) {
    return fiber0117(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const groupMarkerCopy66 = groupMarkers[66];
  const groupMarkerCopy67 = groupMarkers[67];
  const tryDeeperResult = fiber0142(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  groupMarkers[66] = groupMarkerCopy66;
  groupMarkers[67] = groupMarkerCopy67;

  const groupMarkerCopy64 = groupMarkers[64];
  const groupMarkerCopy65 = groupMarkers[65];
  const groupMarkerCopy68 = groupMarkers[68];
  const groupMarkerCopy69 = groupMarkers[69];
  const groupMarkerCopy70 = groupMarkers[70];
  const groupMarkerCopy71 = groupMarkers[71];
  const groupMarkerCopy72 = groupMarkers[72];
  const groupMarkerCopy73 = groupMarkers[73];
  const groupMarkerCopy74 = groupMarkers[74];
  const groupMarkerCopy75 = groupMarkers[75];

  const followUpResult = fiber0117(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[64] = groupMarkerCopy64;
    groupMarkers[65] = groupMarkerCopy65;
    groupMarkers[68] = groupMarkerCopy68;
    groupMarkers[69] = groupMarkerCopy69;
    groupMarkers[70] = groupMarkerCopy70;
    groupMarkers[71] = groupMarkerCopy71;
    groupMarkers[72] = groupMarkerCopy72;
    groupMarkers[73] = groupMarkerCopy73;
    groupMarkers[74] = groupMarkerCopy74;
    groupMarkers[75] = groupMarkerCopy75;
    quantifierCounters[1]--;
  }
  return followUpResult;
};
/*
 * ...}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0181 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[2]++;

  if (quantifierCounters[2] === 2) {
    return fiber0155(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const groupMarkerCopy88 = groupMarkers[88];
  const groupMarkerCopy89 = groupMarkers[89];
  const tryDeeperResult = fiber0180(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  groupMarkers[88] = groupMarkerCopy88;
  groupMarkers[89] = groupMarkerCopy89;

  const groupMarkerCopy86 = groupMarkers[86];
  const groupMarkerCopy87 = groupMarkers[87];
  const groupMarkerCopy90 = groupMarkers[90];
  const groupMarkerCopy91 = groupMarkers[91];
  const groupMarkerCopy92 = groupMarkers[92];
  const groupMarkerCopy93 = groupMarkers[93];
  const groupMarkerCopy94 = groupMarkers[94];
  const groupMarkerCopy95 = groupMarkers[95];
  const groupMarkerCopy96 = groupMarkers[96];
  const groupMarkerCopy97 = groupMarkers[97];

  const followUpResult = fiber0155(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[86] = groupMarkerCopy86;
    groupMarkers[87] = groupMarkerCopy87;
    groupMarkers[90] = groupMarkerCopy90;
    groupMarkers[91] = groupMarkerCopy91;
    groupMarkers[92] = groupMarkerCopy92;
    groupMarkers[93] = groupMarkerCopy93;
    groupMarkers[94] = groupMarkerCopy94;
    groupMarkers[95] = groupMarkerCopy95;
    groupMarkers[96] = groupMarkerCopy96;
    groupMarkers[97] = groupMarkerCopy97;
    quantifierCounters[2]--;
  }
  return followUpResult;
};
/*
 * ...}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0218 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[3]++;

  if (quantifierCounters[3] === 3) {
    return fiber0192(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const groupMarkerCopy110 = groupMarkers[110];
  const groupMarkerCopy111 = groupMarkers[111];
  const tryDeeperResult = fiber0217(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  groupMarkers[110] = groupMarkerCopy110;
  groupMarkers[111] = groupMarkerCopy111;

  const groupMarkerCopy108 = groupMarkers[108];
  const groupMarkerCopy109 = groupMarkers[109];
  const groupMarkerCopy112 = groupMarkers[112];
  const groupMarkerCopy113 = groupMarkers[113];
  const groupMarkerCopy114 = groupMarkers[114];
  const groupMarkerCopy115 = groupMarkers[115];
  const groupMarkerCopy116 = groupMarkers[116];
  const groupMarkerCopy117 = groupMarkers[117];
  const groupMarkerCopy118 = groupMarkers[118];
  const groupMarkerCopy119 = groupMarkers[119];

  const followUpResult = fiber0192(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[108] = groupMarkerCopy108;
    groupMarkers[109] = groupMarkerCopy109;
    groupMarkers[112] = groupMarkerCopy112;
    groupMarkers[113] = groupMarkerCopy113;
    groupMarkers[114] = groupMarkerCopy114;
    groupMarkers[115] = groupMarkerCopy115;
    groupMarkers[116] = groupMarkerCopy116;
    groupMarkers[117] = groupMarkerCopy117;
    groupMarkers[118] = groupMarkerCopy118;
    groupMarkers[119] = groupMarkerCopy119;
    quantifierCounters[3]--;
  }
  return followUpResult;
};
/*
 * ...}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0254 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[4]++;

  if (quantifierCounters[4] === 4) {
    return fiber0228(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const groupMarkerCopy132 = groupMarkers[132];
  const groupMarkerCopy133 = groupMarkers[133];
  const tryDeeperResult = fiber0253(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  groupMarkers[132] = groupMarkerCopy132;
  groupMarkers[133] = groupMarkerCopy133;

  const groupMarkerCopy130 = groupMarkers[130];
  const groupMarkerCopy131 = groupMarkers[131];
  const groupMarkerCopy134 = groupMarkers[134];
  const groupMarkerCopy135 = groupMarkers[135];
  const groupMarkerCopy136 = groupMarkers[136];
  const groupMarkerCopy137 = groupMarkers[137];
  const groupMarkerCopy138 = groupMarkers[138];
  const groupMarkerCopy139 = groupMarkers[139];
  const groupMarkerCopy140 = groupMarkers[140];
  const groupMarkerCopy141 = groupMarkers[141];

  const followUpResult = fiber0228(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[130] = groupMarkerCopy130;
    groupMarkers[131] = groupMarkerCopy131;
    groupMarkers[134] = groupMarkerCopy134;
    groupMarkers[135] = groupMarkerCopy135;
    groupMarkers[136] = groupMarkerCopy136;
    groupMarkers[137] = groupMarkerCopy137;
    groupMarkers[138] = groupMarkerCopy138;
    groupMarkers[139] = groupMarkerCopy139;
    groupMarkers[140] = groupMarkerCopy140;
    groupMarkers[141] = groupMarkerCopy141;
    quantifierCounters[4]--;
  }
  return followUpResult;
};
/*
 * ...}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0289 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[5]++;

  if (quantifierCounters[5] === 5) {
    return fiber0263(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const groupMarkerCopy152 = groupMarkers[152];
  const groupMarkerCopy153 = groupMarkers[153];
  const tryDeeperResult = fiber0288(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (tryDeeperResult !== -1) {
    // we actually were able to go deeper, nice!
    return tryDeeperResult;
  }

  // recursion failed, reset groups
  groupMarkers[152] = groupMarkerCopy152;
  groupMarkers[153] = groupMarkerCopy153;

  const groupMarkerCopy150 = groupMarkers[150];
  const groupMarkerCopy151 = groupMarkers[151];
  const groupMarkerCopy154 = groupMarkers[154];
  const groupMarkerCopy155 = groupMarkers[155];
  const groupMarkerCopy156 = groupMarkers[156];
  const groupMarkerCopy157 = groupMarkers[157];
  const groupMarkerCopy158 = groupMarkers[158];
  const groupMarkerCopy159 = groupMarkers[159];
  const groupMarkerCopy160 = groupMarkers[160];
  const groupMarkerCopy161 = groupMarkers[161];

  const followUpResult = fiber0263(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[150] = groupMarkerCopy150;
    groupMarkers[151] = groupMarkerCopy151;
    groupMarkers[154] = groupMarkerCopy154;
    groupMarkers[155] = groupMarkerCopy155;
    groupMarkers[156] = groupMarkerCopy156;
    groupMarkers[157] = groupMarkerCopy157;
    groupMarkers[158] = groupMarkerCopy158;
    groupMarkers[159] = groupMarkerCopy159;
    groupMarkers[160] = groupMarkerCopy160;
    groupMarkers[161] = groupMarkerCopy161;
    quantifierCounters[5]--;
  }
  return followUpResult;
};
