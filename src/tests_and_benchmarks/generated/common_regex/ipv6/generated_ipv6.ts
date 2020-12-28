// This code was generated with RECO v0.3.0
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
  ];
  const quantifierCounters: QuantifierCounters = [-1, -1, -1, -1, -1, -1];

  for (let i = 0; i < str.length; i++) {
    const posAfterMatch = fiber0151(
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
   * groupEndMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * nonBacktrackingQuantifier
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0010(
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
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  /*
   * groupStartMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * nonBacktrackingQuantifier
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matches5 = 0;
  while (true) {
    const wrappedResult = fiber0009(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  /*
   * groupStartMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * nonBacktrackingQuantifier
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matches9 = 0;
  while (true) {
    const wrappedResult = fiber0008(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  /*
   * groupStartMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * nonBacktrackingQuantifier
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matches13 = 0;
  while (true) {
    const wrappedResult = fiber0007(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  /*
   * groupStartMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * nonBacktrackingQuantifier
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matches17 = 0;
  while (true) {
    const wrappedResult = fiber0006(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  /*
   * groupStartMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * nonBacktrackingQuantifier
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matches21 = 0;
  while (true) {
    const wrappedResult = fiber0005(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  /*
   * groupStartMarker
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a...
   *   ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * nonBacktrackingQuantifier
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-...
   *    ^^^^^^^^^^^^^^^^
   */
  let matches25 = 0;
  while (true) {
    const wrappedResult = fiber0004(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  /*
   * nonBacktrackingQuantifier
   * ...,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches28 = 0;
  while (true) {
    const wrappedResult = fiber0003(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
  return fiber0001(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
const fiber0011 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * nonBacktrackingQuantifier
   * ...A-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-f...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0012(
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
  return fiber0001(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * groupStartMarker
   * ...A-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[2] = i;
  /*
   * nonBacktrackingQuantifier
   * ...-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|(...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0013(
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
  groupMarkers[4] = tempGroupStartMarkers[2];
  groupMarkers[5] = i;
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
const fiber0014 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * nonBacktrackingQuantifier
   * ...}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0016(
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
    const wrappedResult = fiber0015(
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
  return fiber0001(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
const fiber0016 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupStartMarker
   * ...}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[3] = i;
  /*
   * nonBacktrackingQuantifier
   * ...:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0017(
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
  groupMarkers[6] = tempGroupStartMarkers[3];
  groupMarkers[7] = i;
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
const fiber0018 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * nonBacktrackingQuantifier
   * ...A-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0021(
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
    const wrappedResult = fiber0019(
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
  return fiber0001(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * groupStartMarker
   * ...,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[5] = i;
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
    const wrappedResult = fiber0020(
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
   * ...,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[10] = tempGroupStartMarkers[5];
  groupMarkers[11] = i;
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
const fiber0021 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupStartMarker
   * ...A-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[4] = i;
  /*
   * nonBacktrackingQuantifier
   * ...-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0022(
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
  groupMarkers[8] = tempGroupStartMarkers[4];
  groupMarkers[9] = i;
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
const fiber0023 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * nonBacktrackingQuantifier
   * ...,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0026(
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
  /*
   * nonBacktrackingQuantifier
   * ...,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0024(
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
  return fiber0001(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * groupStartMarker
   * ...,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[7] = i;
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
    const wrappedResult = fiber0025(
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
   * ...,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[14] = tempGroupStartMarkers[7];
  groupMarkers[15] = i;
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
const fiber0026 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupStartMarker
   * ...,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[6] = i;
  /*
   * nonBacktrackingQuantifier
   * ...4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0027(
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
  groupMarkers[12] = tempGroupStartMarkers[6];
  groupMarkers[13] = i;
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
const fiber0028 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * nonBacktrackingQuantifier
   * ...,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0031(
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
    const wrappedResult = fiber0029(
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
  return fiber0001(
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
   * groupStartMarker
   * ...,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[9] = i;
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
    const wrappedResult = fiber0030(
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
   * ...,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[18] = tempGroupStartMarkers[9];
  groupMarkers[19] = i;
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
   * ...,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[8] = i;
  /*
   * nonBacktrackingQuantifier
   * ...4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0032(
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
  groupMarkers[16] = tempGroupStartMarkers[8];
  groupMarkers[17] = i;
  return i;
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
   * ...,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0036(
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
    const wrappedResult = fiber0034(
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
  return fiber0001(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * groupStartMarker
   * ...,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[11] = i;
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
    const wrappedResult = fiber0035(
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
   * ...,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[22] = tempGroupStartMarkers[11];
  groupMarkers[23] = i;
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
const fiber0036 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupStartMarker
   * ...,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[10] = i;
  /*
   * nonBacktrackingQuantifier
   * ...4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0037(
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
  groupMarkers[20] = tempGroupStartMarkers[10];
  groupMarkers[21] = i;
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
const fiber0038 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * nonBacktrackingQuantifier
   * ...,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0041(
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
  tempGroupStartMarkers[12] = i;
  /*
   * nonBacktrackingQuantifier
   * ...-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches3 = 0;
  while (true) {
    const wrappedResult = fiber0039(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
  groupMarkers[24] = tempGroupStartMarkers[12];
  groupMarkers[25] = i;
  return fiber0001(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * groupStartMarker
   * ...-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[13] = i;
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
    const wrappedResult = fiber0040(
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
   * ...-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[26] = tempGroupStartMarkers[13];
  groupMarkers[27] = i;
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
const fiber0042 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupEndMarker
   * ...}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[28] = tempGroupStartMarkers[14];
  groupMarkers[29] = i;
  return fiber0001(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * nonBacktrackingQuantifier
   * ...){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0044(
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

      if (matches0 === 7) {
        break;
      }
    }
  }
  return fiber0042(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * groupStartMarker
   * ...){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|f...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[15] = i;
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
    const wrappedResult = fiber0045(
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
   * ...){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|f...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[30] = tempGroupStartMarkers[15];
  groupMarkers[31] = i;
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
const fiber0046 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
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
  return fiber0042(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  tempGroupStartMarkers[14] = i;
  /*
   * disjunction
   * ...}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy28 = groupMarkers[28];
  const groupMarkerCopy29 = groupMarkers[29];
  const length0 = fiber0043(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[28] = groupMarkerCopy28;
  groupMarkers[29] = groupMarkerCopy29;
  const length1 = fiber0046(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[28] = groupMarkerCopy28;
  groupMarkers[29] = groupMarkerCopy29;

  return -1;
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
    const wrappedResult = fiber0050(
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
    const wrappedResult = fiber0049(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

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
  return fiber0001(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
const fiber0050 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupStartMarker
   * ...}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[16] = i;
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
  groupMarkers[32] = tempGroupStartMarkers[16];
  groupMarkers[33] = i;
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
const fiber0052 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupEndMarker
   * ...])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[44] = tempGroupStartMarkers[22];
  groupMarkers[45] = i;
  return fiber0001(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0052(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0052(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * groupEndMarker
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[46] = tempGroupStartMarkers[23];
  groupMarkers[47] = i;
  return greedyQuantifier0056(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0055(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0055(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
const fiber0060 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0059(
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
    const directFollowUpResult0 = fiber0058(
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
const fiber0061 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupStartMarker
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[23] = i;
  /*
   * disjunction
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy46 = groupMarkers[46];
  const groupMarkerCopy47 = groupMarkers[47];
  const length0 = fiber0057(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  groupMarkers[46] = groupMarkerCopy46;
  groupMarkers[47] = groupMarkerCopy47;
  const length1 = fiber0060(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }
  groupMarkers[46] = groupMarkerCopy46;
  groupMarkers[47] = groupMarkerCopy47;

  return -1;
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
   * quantifierStarter
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0056 = quantifierCounters[0];
  quantifierCounters[0] = -1;
  const cursorAfterQuantifier = greedyQuantifier0056(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[0] = matchCountCopygreedyQuantifier0056;

  return cursorAfterQuantifier;
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
   * groupEndMarker
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[40] = tempGroupStartMarkers[20];
  groupMarkers[41] = i;
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
  groupMarkers[38] = tempGroupStartMarkers[19];
  groupMarkers[39] = i;
  /*
   * groupStartMarker
   * ...])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[22] = i;
  /*
   * disjunction
   * ...])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy44 = groupMarkers[44];
  const groupMarkerCopy45 = groupMarkers[45];
  const groupMarkerCopy46 = groupMarkers[46];
  const groupMarkerCopy47 = groupMarkers[47];
  const length0 = fiber0053(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[44] = groupMarkerCopy44;
  groupMarkers[45] = groupMarkerCopy45;
  const length1 = fiber0062(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[44] = groupMarkerCopy44;
  groupMarkers[45] = groupMarkerCopy45;
  groupMarkers[46] = groupMarkerCopy46;
  groupMarkers[47] = groupMarkerCopy47;

  return -1;
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
  return fiber0063(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0063(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[42] = tempGroupStartMarkers[21];
  groupMarkers[43] = i;
  return greedyQuantifier0067(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0066(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0066(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
const fiber0071 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0070(
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
    const directFollowUpResult0 = fiber0069(
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
const fiber0072 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[21] = i;
  /*
   * disjunction
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy42 = groupMarkers[42];
  const groupMarkerCopy43 = groupMarkers[43];
  const length0 = fiber0068(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  groupMarkers[42] = groupMarkerCopy42;
  groupMarkers[43] = groupMarkerCopy43;
  const length1 = fiber0071(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }
  groupMarkers[42] = groupMarkerCopy42;
  groupMarkers[43] = groupMarkerCopy43;

  return -1;
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
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0067 = quantifierCounters[1];
  quantifierCounters[1] = -1;
  const cursorAfterQuantifier = greedyQuantifier0067(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[1] = matchCountCopygreedyQuantifier0067;

  return cursorAfterQuantifier;
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
   * groupEndMarker
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[40] = tempGroupStartMarkers[20];
  groupMarkers[41] = i;
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
  groupMarkers[38] = tempGroupStartMarkers[19];
  groupMarkers[39] = i;
  /*
   * groupStartMarker
   * ...,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[19] = i;
  /*
   * groupStartMarker
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[20] = i;
  /*
   * disjunction
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy38 = groupMarkers[38];
  const groupMarkerCopy39 = groupMarkers[39];
  const groupMarkerCopy40 = groupMarkers[40];
  const groupMarkerCopy41 = groupMarkers[41];
  const groupMarkerCopy42 = groupMarkers[42];
  const groupMarkerCopy43 = groupMarkers[43];
  const groupMarkerCopy44 = groupMarkers[44];
  const groupMarkerCopy45 = groupMarkers[45];
  const groupMarkerCopy46 = groupMarkers[46];
  const groupMarkerCopy47 = groupMarkers[47];
  const length0 = fiber0064(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[38] = groupMarkerCopy38;
  groupMarkers[39] = groupMarkerCopy39;
  groupMarkers[40] = groupMarkerCopy40;
  groupMarkers[41] = groupMarkerCopy41;
  groupMarkers[44] = groupMarkerCopy44;
  groupMarkers[45] = groupMarkerCopy45;
  groupMarkers[46] = groupMarkerCopy46;
  groupMarkers[47] = groupMarkerCopy47;
  const length1 = fiber0073(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[38] = groupMarkerCopy38;
  groupMarkers[39] = groupMarkerCopy39;
  groupMarkers[40] = groupMarkerCopy40;
  groupMarkers[41] = groupMarkerCopy41;
  groupMarkers[42] = groupMarkerCopy42;
  groupMarkers[43] = groupMarkerCopy43;
  groupMarkers[44] = groupMarkerCopy44;
  groupMarkers[45] = groupMarkerCopy45;
  groupMarkers[46] = groupMarkerCopy46;
  groupMarkers[47] = groupMarkerCopy47;

  return -1;
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
  return fiber0074(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0074(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[42] = tempGroupStartMarkers[21];
  groupMarkers[43] = i;
  return greedyQuantifier0078(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0077(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0077(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
const fiber0082 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0081(
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
    const directFollowUpResult0 = fiber0080(
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
const fiber0083 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[21] = i;
  /*
   * disjunction
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0079(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0082(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }

  return -1;
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
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0078 = quantifierCounters[1];
  quantifierCounters[1] = -1;
  const cursorAfterQuantifier = greedyQuantifier0078(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[1] = matchCountCopygreedyQuantifier0078;

  return cursorAfterQuantifier;
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
   * groupEndMarker
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[40] = tempGroupStartMarkers[20];
  groupMarkers[41] = i;
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
  groupMarkers[38] = tempGroupStartMarkers[19];
  groupMarkers[39] = i;
  /*
   * groupStartMarker
   * ...,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[19] = i;
  /*
   * groupStartMarker
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[20] = i;
  /*
   * disjunction
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy38 = groupMarkers[38];
  const groupMarkerCopy39 = groupMarkers[39];
  const groupMarkerCopy40 = groupMarkers[40];
  const groupMarkerCopy41 = groupMarkers[41];
  const groupMarkerCopy42 = groupMarkers[42];
  const groupMarkerCopy43 = groupMarkers[43];
  const groupMarkerCopy44 = groupMarkers[44];
  const groupMarkerCopy45 = groupMarkers[45];
  const groupMarkerCopy46 = groupMarkers[46];
  const groupMarkerCopy47 = groupMarkers[47];
  const length0 = fiber0075(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[38] = groupMarkerCopy38;
  groupMarkers[39] = groupMarkerCopy39;
  groupMarkers[40] = groupMarkerCopy40;
  groupMarkers[41] = groupMarkerCopy41;
  groupMarkers[42] = groupMarkerCopy42;
  groupMarkers[43] = groupMarkerCopy43;
  groupMarkers[44] = groupMarkerCopy44;
  groupMarkers[45] = groupMarkerCopy45;
  groupMarkers[46] = groupMarkerCopy46;
  groupMarkers[47] = groupMarkerCopy47;
  const length1 = fiber0084(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[38] = groupMarkerCopy38;
  groupMarkers[39] = groupMarkerCopy39;
  groupMarkers[40] = groupMarkerCopy40;
  groupMarkers[41] = groupMarkerCopy41;
  groupMarkers[42] = groupMarkerCopy42;
  groupMarkers[43] = groupMarkerCopy43;
  groupMarkers[44] = groupMarkerCopy44;
  groupMarkers[45] = groupMarkerCopy45;
  groupMarkers[46] = groupMarkerCopy46;
  groupMarkers[47] = groupMarkerCopy47;

  return -1;
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
  return fiber0085(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0085(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[42] = tempGroupStartMarkers[21];
  groupMarkers[43] = i;
  return greedyQuantifier0089(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0088(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0088(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
const fiber0093 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0092(
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
    const directFollowUpResult0 = fiber0091(
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
const fiber0094 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[21] = i;
  /*
   * disjunction
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0090(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0093(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
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
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0089 = quantifierCounters[1];
  quantifierCounters[1] = -1;
  const cursorAfterQuantifier = greedyQuantifier0089(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[1] = matchCountCopygreedyQuantifier0089;

  return cursorAfterQuantifier;
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
   * groupStartMarker
   * ...,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[19] = i;
  /*
   * groupStartMarker
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[20] = i;
  /*
   * disjunction
   * ...1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy38 = groupMarkers[38];
  const groupMarkerCopy39 = groupMarkers[39];
  const groupMarkerCopy40 = groupMarkers[40];
  const groupMarkerCopy41 = groupMarkers[41];
  const groupMarkerCopy42 = groupMarkers[42];
  const groupMarkerCopy43 = groupMarkers[43];
  const groupMarkerCopy44 = groupMarkers[44];
  const groupMarkerCopy45 = groupMarkers[45];
  const groupMarkerCopy46 = groupMarkers[46];
  const groupMarkerCopy47 = groupMarkers[47];
  const length0 = fiber0086(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[38] = groupMarkerCopy38;
  groupMarkers[39] = groupMarkerCopy39;
  groupMarkers[40] = groupMarkerCopy40;
  groupMarkers[41] = groupMarkerCopy41;
  groupMarkers[42] = groupMarkerCopy42;
  groupMarkers[43] = groupMarkerCopy43;
  groupMarkers[44] = groupMarkerCopy44;
  groupMarkers[45] = groupMarkerCopy45;
  groupMarkers[46] = groupMarkerCopy46;
  groupMarkers[47] = groupMarkerCopy47;
  const length1 = fiber0095(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[38] = groupMarkerCopy38;
  groupMarkers[39] = groupMarkerCopy39;
  groupMarkers[40] = groupMarkerCopy40;
  groupMarkers[41] = groupMarkerCopy41;
  groupMarkers[42] = groupMarkerCopy42;
  groupMarkers[43] = groupMarkerCopy43;
  groupMarkers[44] = groupMarkerCopy44;
  groupMarkers[45] = groupMarkerCopy45;
  groupMarkers[46] = groupMarkerCopy46;
  groupMarkers[47] = groupMarkerCopy47;

  return -1;
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
  groupMarkers[34] = tempGroupStartMarkers[17];
  groupMarkers[35] = i;
  return greedyQuantifier0098(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * groupStartMarker
   * ...,}|::(ffff(:0{1,4}){0,1}:){0,...
   *              ^^^^^^^^^
   */
  tempGroupStartMarkers[18] = i;
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
    const wrappedResult = fiber0101(
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
   * ...,}|::(ffff(:0{1,4}){0,1}:){0,...
   *              ^^^^^^^^^
   */
  groupMarkers[36] = tempGroupStartMarkers[18];
  groupMarkers[37] = i;
  return greedyQuantifier0100(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
const fiber0102 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupStartMarker
   * ...-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[...
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[17] = i;
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
  let matchCountCopygreedyQuantifier0100 = quantifierCounters[3];
  quantifierCounters[3] = -1;
  const cursorAfterQuantifier = greedyQuantifier0100(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[3] = matchCountCopygreedyQuantifier0100;

  return cursorAfterQuantifier;
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
  let matchCountCopygreedyQuantifier0098 = quantifierCounters[2];
  quantifierCounters[2] = -1;
  const cursorAfterQuantifier = greedyQuantifier0098(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[2] = matchCountCopygreedyQuantifier0098;

  return cursorAfterQuantifier;
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
   * groupEndMarker
   * ...])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[56] = tempGroupStartMarkers[28];
  groupMarkers[57] = i;
  return fiber0001(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0104(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0104(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * groupEndMarker
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[58] = tempGroupStartMarkers[29];
  groupMarkers[59] = i;
  return greedyQuantifier0108(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0107(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0107(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
const fiber0112 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0111(
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
    const directFollowUpResult0 = fiber0110(
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
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[29] = i;
  /*
   * disjunction
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy58 = groupMarkers[58];
  const groupMarkerCopy59 = groupMarkers[59];
  const length0 = fiber0109(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  groupMarkers[58] = groupMarkerCopy58;
  groupMarkers[59] = groupMarkerCopy59;
  const length1 = fiber0112(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }
  groupMarkers[58] = groupMarkerCopy58;
  groupMarkers[59] = groupMarkerCopy59;

  return -1;
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
   * quantifierStarter
   * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0108 = quantifierCounters[4];
  quantifierCounters[4] = -1;
  const cursorAfterQuantifier = greedyQuantifier0108(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[4] = matchCountCopygreedyQuantifier0108;

  return cursorAfterQuantifier;
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
   * groupEndMarker
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[52] = tempGroupStartMarkers[26];
  groupMarkers[53] = i;
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
  groupMarkers[50] = tempGroupStartMarkers[25];
  groupMarkers[51] = i;
  /*
   * groupStartMarker
   * ...])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[28] = i;
  /*
   * disjunction
   * ...])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy56 = groupMarkers[56];
  const groupMarkerCopy57 = groupMarkers[57];
  const groupMarkerCopy58 = groupMarkers[58];
  const groupMarkerCopy59 = groupMarkers[59];
  const length0 = fiber0105(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[56] = groupMarkerCopy56;
  groupMarkers[57] = groupMarkerCopy57;
  const length1 = fiber0114(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[56] = groupMarkerCopy56;
  groupMarkers[57] = groupMarkerCopy57;
  groupMarkers[58] = groupMarkerCopy58;
  groupMarkers[59] = groupMarkerCopy59;

  return -1;
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
  return fiber0115(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0115(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[54] = tempGroupStartMarkers[27];
  groupMarkers[55] = i;
  return greedyQuantifier0119(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0118(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0118(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
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
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[27] = i;
  /*
   * disjunction
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy54 = groupMarkers[54];
  const groupMarkerCopy55 = groupMarkers[55];
  const length0 = fiber0120(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  groupMarkers[54] = groupMarkerCopy54;
  groupMarkers[55] = groupMarkerCopy55;
  const length1 = fiber0123(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }
  groupMarkers[54] = groupMarkerCopy54;
  groupMarkers[55] = groupMarkerCopy55;

  return -1;
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
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0119 = quantifierCounters[5];
  quantifierCounters[5] = -1;
  const cursorAfterQuantifier = greedyQuantifier0119(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[5] = matchCountCopygreedyQuantifier0119;

  return cursorAfterQuantifier;
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
   * groupEndMarker
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[52] = tempGroupStartMarkers[26];
  groupMarkers[53] = i;
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
  groupMarkers[50] = tempGroupStartMarkers[25];
  groupMarkers[51] = i;
  /*
   * groupStartMarker
   * ...4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[25] = i;
  /*
   * groupStartMarker
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[26] = i;
  /*
   * disjunction
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy50 = groupMarkers[50];
  const groupMarkerCopy51 = groupMarkers[51];
  const groupMarkerCopy52 = groupMarkers[52];
  const groupMarkerCopy53 = groupMarkers[53];
  const groupMarkerCopy54 = groupMarkers[54];
  const groupMarkerCopy55 = groupMarkers[55];
  const groupMarkerCopy56 = groupMarkers[56];
  const groupMarkerCopy57 = groupMarkers[57];
  const groupMarkerCopy58 = groupMarkers[58];
  const groupMarkerCopy59 = groupMarkers[59];
  const length0 = fiber0116(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[50] = groupMarkerCopy50;
  groupMarkers[51] = groupMarkerCopy51;
  groupMarkers[52] = groupMarkerCopy52;
  groupMarkers[53] = groupMarkerCopy53;
  groupMarkers[56] = groupMarkerCopy56;
  groupMarkers[57] = groupMarkerCopy57;
  groupMarkers[58] = groupMarkerCopy58;
  groupMarkers[59] = groupMarkerCopy59;
  const length1 = fiber0125(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[50] = groupMarkerCopy50;
  groupMarkers[51] = groupMarkerCopy51;
  groupMarkers[52] = groupMarkerCopy52;
  groupMarkers[53] = groupMarkerCopy53;
  groupMarkers[54] = groupMarkerCopy54;
  groupMarkers[55] = groupMarkerCopy55;
  groupMarkers[56] = groupMarkerCopy56;
  groupMarkers[57] = groupMarkerCopy57;
  groupMarkers[58] = groupMarkerCopy58;
  groupMarkers[59] = groupMarkerCopy59;

  return -1;
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
  return fiber0126(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0126(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[54] = tempGroupStartMarkers[27];
  groupMarkers[55] = i;
  return greedyQuantifier0130(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0129(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0129(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
const fiber0134 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0133(
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
    const directFollowUpResult0 = fiber0132(
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
const fiber0135 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[27] = i;
  /*
   * disjunction
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0131(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0134(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
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
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0130 = quantifierCounters[5];
  quantifierCounters[5] = -1;
  const cursorAfterQuantifier = greedyQuantifier0130(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[5] = matchCountCopygreedyQuantifier0130;

  return cursorAfterQuantifier;
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
   * groupEndMarker
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[52] = tempGroupStartMarkers[26];
  groupMarkers[53] = i;
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
  groupMarkers[50] = tempGroupStartMarkers[25];
  groupMarkers[51] = i;
  /*
   * groupStartMarker
   * ...4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[25] = i;
  /*
   * groupStartMarker
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[26] = i;
  /*
   * disjunction
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy50 = groupMarkers[50];
  const groupMarkerCopy51 = groupMarkers[51];
  const groupMarkerCopy52 = groupMarkers[52];
  const groupMarkerCopy53 = groupMarkers[53];
  const groupMarkerCopy54 = groupMarkers[54];
  const groupMarkerCopy55 = groupMarkers[55];
  const groupMarkerCopy56 = groupMarkers[56];
  const groupMarkerCopy57 = groupMarkers[57];
  const groupMarkerCopy58 = groupMarkers[58];
  const groupMarkerCopy59 = groupMarkers[59];
  const length0 = fiber0127(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[50] = groupMarkerCopy50;
  groupMarkers[51] = groupMarkerCopy51;
  groupMarkers[52] = groupMarkerCopy52;
  groupMarkers[53] = groupMarkerCopy53;
  groupMarkers[54] = groupMarkerCopy54;
  groupMarkers[55] = groupMarkerCopy55;
  groupMarkers[56] = groupMarkerCopy56;
  groupMarkers[57] = groupMarkerCopy57;
  groupMarkers[58] = groupMarkerCopy58;
  groupMarkers[59] = groupMarkerCopy59;
  const length1 = fiber0136(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[50] = groupMarkerCopy50;
  groupMarkers[51] = groupMarkerCopy51;
  groupMarkers[52] = groupMarkerCopy52;
  groupMarkers[53] = groupMarkerCopy53;
  groupMarkers[54] = groupMarkerCopy54;
  groupMarkers[55] = groupMarkerCopy55;
  groupMarkers[56] = groupMarkerCopy56;
  groupMarkers[57] = groupMarkerCopy57;
  groupMarkers[58] = groupMarkerCopy58;
  groupMarkers[59] = groupMarkerCopy59;

  return -1;
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
  return fiber0137(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0137(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * groupEndMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[54] = tempGroupStartMarkers[27];
  groupMarkers[55] = i;
  return greedyQuantifier0141(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
  return fiber0140(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
};
const fiber0143 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
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
  return fiber0140(
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
const fiber0145 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * backtrackingFixedLengthQuantifier
   * ...]|(2[0-4]|1{0,1}[0-9]){0,1...
   *              ^^^^^^
   */
  let matches0 = 0;

  while (true) {
    const wrappedResult = fiber0144(
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
    const directFollowUpResult0 = fiber0143(
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
const fiber0146 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupStartMarker
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[27] = i;
  /*
   * disjunction
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]...
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const length0 = fiber0142(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  const length1 = fiber0145(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }

  return -1;
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
   * quantifierStarter
   * ...((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0141 = quantifierCounters[5];
  quantifierCounters[5] = -1;
  const cursorAfterQuantifier = greedyQuantifier0141(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[5] = matchCountCopygreedyQuantifier0141;

  return cursorAfterQuantifier;
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
   * nonBacktrackingQuantifier
   * ...,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0149(
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
  tempGroupStartMarkers[25] = i;
  /*
   * groupStartMarker
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[26] = i;
  /*
   * disjunction
   * ...}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(2...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy50 = groupMarkers[50];
  const groupMarkerCopy51 = groupMarkers[51];
  const groupMarkerCopy52 = groupMarkers[52];
  const groupMarkerCopy53 = groupMarkers[53];
  const groupMarkerCopy54 = groupMarkers[54];
  const groupMarkerCopy55 = groupMarkers[55];
  const groupMarkerCopy56 = groupMarkers[56];
  const groupMarkerCopy57 = groupMarkers[57];
  const groupMarkerCopy58 = groupMarkers[58];
  const groupMarkerCopy59 = groupMarkers[59];
  const length0 = fiber0138(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[50] = groupMarkerCopy50;
  groupMarkers[51] = groupMarkerCopy51;
  groupMarkers[52] = groupMarkerCopy52;
  groupMarkers[53] = groupMarkerCopy53;
  groupMarkers[54] = groupMarkerCopy54;
  groupMarkers[55] = groupMarkerCopy55;
  groupMarkers[56] = groupMarkerCopy56;
  groupMarkers[57] = groupMarkerCopy57;
  groupMarkers[58] = groupMarkerCopy58;
  groupMarkers[59] = groupMarkerCopy59;
  const length1 = fiber0147(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[50] = groupMarkerCopy50;
  groupMarkers[51] = groupMarkerCopy51;
  groupMarkers[52] = groupMarkerCopy52;
  groupMarkers[53] = groupMarkerCopy53;
  groupMarkers[54] = groupMarkerCopy54;
  groupMarkers[55] = groupMarkerCopy55;
  groupMarkers[56] = groupMarkerCopy56;
  groupMarkers[57] = groupMarkerCopy57;
  groupMarkers[58] = groupMarkerCopy58;
  groupMarkers[59] = groupMarkerCopy59;

  return -1;
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
   * groupStartMarker
   * ...,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[24] = i;
  /*
   * nonBacktrackingQuantifier
   * ...1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((...
   *              ^^^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0150(
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
  groupMarkers[48] = tempGroupStartMarkers[24];
  groupMarkers[49] = i;
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
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * disjunction
   * /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy2 = groupMarkers[2];
  const groupMarkerCopy3 = groupMarkers[3];
  const groupMarkerCopy24 = groupMarkers[24];
  const groupMarkerCopy25 = groupMarkers[25];
  const groupMarkerCopy28 = groupMarkers[28];
  const groupMarkerCopy29 = groupMarkers[29];
  const groupMarkerCopy34 = groupMarkers[34];
  const groupMarkerCopy35 = groupMarkers[35];
  const groupMarkerCopy36 = groupMarkers[36];
  const groupMarkerCopy37 = groupMarkers[37];
  const groupMarkerCopy38 = groupMarkers[38];
  const groupMarkerCopy39 = groupMarkers[39];
  const groupMarkerCopy40 = groupMarkers[40];
  const groupMarkerCopy41 = groupMarkers[41];
  const groupMarkerCopy42 = groupMarkers[42];
  const groupMarkerCopy43 = groupMarkers[43];
  const groupMarkerCopy44 = groupMarkers[44];
  const groupMarkerCopy45 = groupMarkers[45];
  const groupMarkerCopy46 = groupMarkers[46];
  const groupMarkerCopy47 = groupMarkers[47];
  const groupMarkerCopy50 = groupMarkers[50];
  const groupMarkerCopy51 = groupMarkers[51];
  const groupMarkerCopy52 = groupMarkers[52];
  const groupMarkerCopy53 = groupMarkers[53];
  const groupMarkerCopy54 = groupMarkers[54];
  const groupMarkerCopy55 = groupMarkers[55];
  const groupMarkerCopy56 = groupMarkers[56];
  const groupMarkerCopy57 = groupMarkers[57];
  const groupMarkerCopy58 = groupMarkers[58];
  const groupMarkerCopy59 = groupMarkers[59];
  const length0 = fiber0002(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[2] = groupMarkerCopy2;
  groupMarkers[3] = groupMarkerCopy3;
  const length1 = fiber0011(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  const length2 = fiber0014(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length2 !== -1) {
    return length2;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  const length3 = fiber0018(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length3 !== -1) {
    return length3;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  const length4 = fiber0023(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length4 !== -1) {
    return length4;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  const length5 = fiber0028(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length5 !== -1) {
    return length5;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  const length6 = fiber0033(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length6 !== -1) {
    return length6;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  const length7 = fiber0038(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length7 !== -1) {
    return length7;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[24] = groupMarkerCopy24;
  groupMarkers[25] = groupMarkerCopy25;
  const length8 = fiber0047(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length8 !== -1) {
    return length8;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[28] = groupMarkerCopy28;
  groupMarkers[29] = groupMarkerCopy29;
  const length9 = fiber0048(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length9 !== -1) {
    return length9;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  const length10 = fiber0103(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length10 !== -1) {
    return length10;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[34] = groupMarkerCopy34;
  groupMarkers[35] = groupMarkerCopy35;
  groupMarkers[36] = groupMarkerCopy36;
  groupMarkers[37] = groupMarkerCopy37;
  groupMarkers[38] = groupMarkerCopy38;
  groupMarkers[39] = groupMarkerCopy39;
  groupMarkers[40] = groupMarkerCopy40;
  groupMarkers[41] = groupMarkerCopy41;
  groupMarkers[42] = groupMarkerCopy42;
  groupMarkers[43] = groupMarkerCopy43;
  groupMarkers[44] = groupMarkerCopy44;
  groupMarkers[45] = groupMarkerCopy45;
  groupMarkers[46] = groupMarkerCopy46;
  groupMarkers[47] = groupMarkerCopy47;
  const length11 = fiber0148(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length11 !== -1) {
    return length11;
  }
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;
  groupMarkers[50] = groupMarkerCopy50;
  groupMarkers[51] = groupMarkerCopy51;
  groupMarkers[52] = groupMarkerCopy52;
  groupMarkers[53] = groupMarkerCopy53;
  groupMarkers[54] = groupMarkerCopy54;
  groupMarkers[55] = groupMarkerCopy55;
  groupMarkers[56] = groupMarkerCopy56;
  groupMarkers[57] = groupMarkerCopy57;
  groupMarkers[58] = groupMarkerCopy58;
  groupMarkers[59] = groupMarkerCopy59;

  return -1;
};

/*
 * ...}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0056 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[0]++;

  if (quantifierCounters[0] === 1) {
    return fiber0054(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const groupMarkerCopy46 = groupMarkers[46];
  const groupMarkerCopy47 = groupMarkers[47];
  const tryDeeperResult = fiber0061(
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
  groupMarkers[46] = groupMarkerCopy46;
  groupMarkers[47] = groupMarkerCopy47;

  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy44 = groupMarkers[44];
  const groupMarkerCopy45 = groupMarkers[45];

  const followUpResult = fiber0054(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[0] = groupMarkerCopy0;
    groupMarkers[1] = groupMarkerCopy1;
    groupMarkers[44] = groupMarkerCopy44;
    groupMarkers[45] = groupMarkerCopy45;
    quantifierCounters[0]--;
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
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[1]++;

  if (quantifierCounters[1] === 1) {
    return fiber0065(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const groupMarkerCopy42 = groupMarkers[42];
  const groupMarkerCopy43 = groupMarkers[43];
  const tryDeeperResult = fiber0072(
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
  groupMarkers[42] = groupMarkerCopy42;
  groupMarkers[43] = groupMarkerCopy43;

  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy38 = groupMarkers[38];
  const groupMarkerCopy39 = groupMarkers[39];
  const groupMarkerCopy40 = groupMarkers[40];
  const groupMarkerCopy41 = groupMarkers[41];
  const groupMarkerCopy44 = groupMarkers[44];
  const groupMarkerCopy45 = groupMarkers[45];
  const groupMarkerCopy46 = groupMarkers[46];
  const groupMarkerCopy47 = groupMarkers[47];

  const followUpResult = fiber0065(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[0] = groupMarkerCopy0;
    groupMarkers[1] = groupMarkerCopy1;
    groupMarkers[38] = groupMarkerCopy38;
    groupMarkers[39] = groupMarkerCopy39;
    groupMarkers[40] = groupMarkerCopy40;
    groupMarkers[41] = groupMarkerCopy41;
    groupMarkers[44] = groupMarkerCopy44;
    groupMarkers[45] = groupMarkerCopy45;
    groupMarkers[46] = groupMarkerCopy46;
    groupMarkers[47] = groupMarkerCopy47;
    quantifierCounters[1]--;
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
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[1]++;

  if (quantifierCounters[1] === 1) {
    return fiber0076(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const tryDeeperResult = fiber0083(
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

  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy38 = groupMarkers[38];
  const groupMarkerCopy39 = groupMarkers[39];
  const groupMarkerCopy40 = groupMarkers[40];
  const groupMarkerCopy41 = groupMarkers[41];
  const groupMarkerCopy42 = groupMarkers[42];
  const groupMarkerCopy43 = groupMarkers[43];
  const groupMarkerCopy44 = groupMarkers[44];
  const groupMarkerCopy45 = groupMarkers[45];
  const groupMarkerCopy46 = groupMarkers[46];
  const groupMarkerCopy47 = groupMarkers[47];

  const followUpResult = fiber0076(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[0] = groupMarkerCopy0;
    groupMarkers[1] = groupMarkerCopy1;
    groupMarkers[38] = groupMarkerCopy38;
    groupMarkers[39] = groupMarkerCopy39;
    groupMarkers[40] = groupMarkerCopy40;
    groupMarkers[41] = groupMarkerCopy41;
    groupMarkers[42] = groupMarkerCopy42;
    groupMarkers[43] = groupMarkerCopy43;
    groupMarkers[44] = groupMarkerCopy44;
    groupMarkers[45] = groupMarkerCopy45;
    groupMarkers[46] = groupMarkerCopy46;
    groupMarkers[47] = groupMarkerCopy47;
    quantifierCounters[1]--;
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
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[1]++;

  if (quantifierCounters[1] === 1) {
    return fiber0087(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const tryDeeperResult = fiber0094(
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

  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy38 = groupMarkers[38];
  const groupMarkerCopy39 = groupMarkers[39];
  const groupMarkerCopy40 = groupMarkers[40];
  const groupMarkerCopy41 = groupMarkers[41];
  const groupMarkerCopy42 = groupMarkers[42];
  const groupMarkerCopy43 = groupMarkers[43];
  const groupMarkerCopy44 = groupMarkers[44];
  const groupMarkerCopy45 = groupMarkers[45];
  const groupMarkerCopy46 = groupMarkers[46];
  const groupMarkerCopy47 = groupMarkers[47];

  const followUpResult = fiber0087(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[0] = groupMarkerCopy0;
    groupMarkers[1] = groupMarkerCopy1;
    groupMarkers[38] = groupMarkerCopy38;
    groupMarkers[39] = groupMarkerCopy39;
    groupMarkers[40] = groupMarkerCopy40;
    groupMarkers[41] = groupMarkerCopy41;
    groupMarkers[42] = groupMarkerCopy42;
    groupMarkers[43] = groupMarkerCopy43;
    groupMarkers[44] = groupMarkerCopy44;
    groupMarkers[45] = groupMarkerCopy45;
    groupMarkers[46] = groupMarkerCopy46;
    groupMarkers[47] = groupMarkerCopy47;
    quantifierCounters[1]--;
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
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[2]++;

  if (quantifierCounters[2] === 1) {
    return fiber0096(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const groupMarkerCopy34 = groupMarkers[34];
  const groupMarkerCopy35 = groupMarkers[35];
  const groupMarkerCopy36 = groupMarkers[36];
  const groupMarkerCopy37 = groupMarkers[37];
  const tryDeeperResult = fiber0102(
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
  groupMarkers[34] = groupMarkerCopy34;
  groupMarkers[35] = groupMarkerCopy35;
  groupMarkers[36] = groupMarkerCopy36;
  groupMarkers[37] = groupMarkerCopy37;

  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy38 = groupMarkers[38];
  const groupMarkerCopy39 = groupMarkers[39];
  const groupMarkerCopy40 = groupMarkers[40];
  const groupMarkerCopy41 = groupMarkers[41];
  const groupMarkerCopy42 = groupMarkers[42];
  const groupMarkerCopy43 = groupMarkers[43];
  const groupMarkerCopy44 = groupMarkers[44];
  const groupMarkerCopy45 = groupMarkers[45];
  const groupMarkerCopy46 = groupMarkers[46];
  const groupMarkerCopy47 = groupMarkers[47];

  const followUpResult = fiber0096(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[0] = groupMarkerCopy0;
    groupMarkers[1] = groupMarkerCopy1;
    groupMarkers[38] = groupMarkerCopy38;
    groupMarkers[39] = groupMarkerCopy39;
    groupMarkers[40] = groupMarkerCopy40;
    groupMarkers[41] = groupMarkerCopy41;
    groupMarkers[42] = groupMarkerCopy42;
    groupMarkers[43] = groupMarkerCopy43;
    groupMarkers[44] = groupMarkerCopy44;
    groupMarkers[45] = groupMarkerCopy45;
    groupMarkers[46] = groupMarkerCopy46;
    groupMarkers[47] = groupMarkerCopy47;
    quantifierCounters[2]--;
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
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[3]++;

  if (quantifierCounters[3] === 1) {
    return fiber0097(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const groupMarkerCopy36 = groupMarkers[36];
  const groupMarkerCopy37 = groupMarkers[37];
  const tryDeeperResult = fiber0099(
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
  groupMarkers[36] = groupMarkerCopy36;
  groupMarkers[37] = groupMarkerCopy37;

  const groupMarkerCopy34 = groupMarkers[34];
  const groupMarkerCopy35 = groupMarkers[35];

  const followUpResult = fiber0097(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[34] = groupMarkerCopy34;
    groupMarkers[35] = groupMarkerCopy35;
    quantifierCounters[3]--;
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
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[4]++;

  if (quantifierCounters[4] === 1) {
    return fiber0106(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const groupMarkerCopy58 = groupMarkers[58];
  const groupMarkerCopy59 = groupMarkers[59];
  const tryDeeperResult = fiber0113(
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
  groupMarkers[58] = groupMarkerCopy58;
  groupMarkers[59] = groupMarkerCopy59;

  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy56 = groupMarkers[56];
  const groupMarkerCopy57 = groupMarkers[57];

  const followUpResult = fiber0106(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[0] = groupMarkerCopy0;
    groupMarkers[1] = groupMarkerCopy1;
    groupMarkers[56] = groupMarkerCopy56;
    groupMarkers[57] = groupMarkerCopy57;
    quantifierCounters[4]--;
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
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[5]++;

  if (quantifierCounters[5] === 1) {
    return fiber0117(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const groupMarkerCopy54 = groupMarkers[54];
  const groupMarkerCopy55 = groupMarkers[55];
  const tryDeeperResult = fiber0124(
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
  groupMarkers[54] = groupMarkerCopy54;
  groupMarkers[55] = groupMarkerCopy55;

  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy50 = groupMarkers[50];
  const groupMarkerCopy51 = groupMarkers[51];
  const groupMarkerCopy52 = groupMarkers[52];
  const groupMarkerCopy53 = groupMarkers[53];
  const groupMarkerCopy56 = groupMarkers[56];
  const groupMarkerCopy57 = groupMarkers[57];
  const groupMarkerCopy58 = groupMarkers[58];
  const groupMarkerCopy59 = groupMarkers[59];

  const followUpResult = fiber0117(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[0] = groupMarkerCopy0;
    groupMarkers[1] = groupMarkerCopy1;
    groupMarkers[50] = groupMarkerCopy50;
    groupMarkers[51] = groupMarkerCopy51;
    groupMarkers[52] = groupMarkerCopy52;
    groupMarkers[53] = groupMarkerCopy53;
    groupMarkers[56] = groupMarkerCopy56;
    groupMarkers[57] = groupMarkerCopy57;
    groupMarkers[58] = groupMarkerCopy58;
    groupMarkers[59] = groupMarkerCopy59;
    quantifierCounters[5]--;
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
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[5]++;

  if (quantifierCounters[5] === 1) {
    return fiber0128(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const tryDeeperResult = fiber0135(
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

  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy50 = groupMarkers[50];
  const groupMarkerCopy51 = groupMarkers[51];
  const groupMarkerCopy52 = groupMarkers[52];
  const groupMarkerCopy53 = groupMarkers[53];
  const groupMarkerCopy54 = groupMarkers[54];
  const groupMarkerCopy55 = groupMarkers[55];
  const groupMarkerCopy56 = groupMarkers[56];
  const groupMarkerCopy57 = groupMarkers[57];
  const groupMarkerCopy58 = groupMarkers[58];
  const groupMarkerCopy59 = groupMarkers[59];

  const followUpResult = fiber0128(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[0] = groupMarkerCopy0;
    groupMarkers[1] = groupMarkerCopy1;
    groupMarkers[50] = groupMarkerCopy50;
    groupMarkers[51] = groupMarkerCopy51;
    groupMarkers[52] = groupMarkerCopy52;
    groupMarkers[53] = groupMarkerCopy53;
    groupMarkers[54] = groupMarkerCopy54;
    groupMarkers[55] = groupMarkerCopy55;
    groupMarkers[56] = groupMarkerCopy56;
    groupMarkers[57] = groupMarkerCopy57;
    groupMarkers[58] = groupMarkerCopy58;
    groupMarkers[59] = groupMarkerCopy59;
    quantifierCounters[5]--;
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
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[5]++;

  if (quantifierCounters[5] === 1) {
    return fiber0139(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const tryDeeperResult = fiber0146(
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

  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy50 = groupMarkers[50];
  const groupMarkerCopy51 = groupMarkers[51];
  const groupMarkerCopy52 = groupMarkers[52];
  const groupMarkerCopy53 = groupMarkers[53];
  const groupMarkerCopy54 = groupMarkers[54];
  const groupMarkerCopy55 = groupMarkers[55];
  const groupMarkerCopy56 = groupMarkers[56];
  const groupMarkerCopy57 = groupMarkers[57];
  const groupMarkerCopy58 = groupMarkers[58];
  const groupMarkerCopy59 = groupMarkers[59];

  const followUpResult = fiber0139(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[0] = groupMarkerCopy0;
    groupMarkers[1] = groupMarkerCopy1;
    groupMarkers[50] = groupMarkerCopy50;
    groupMarkers[51] = groupMarkerCopy51;
    groupMarkers[52] = groupMarkerCopy52;
    groupMarkers[53] = groupMarkerCopy53;
    groupMarkers[54] = groupMarkerCopy54;
    groupMarkers[55] = groupMarkerCopy55;
    groupMarkers[56] = groupMarkerCopy56;
    groupMarkers[57] = groupMarkerCopy57;
    groupMarkers[58] = groupMarkerCopy58;
    groupMarkers[59] = groupMarkerCopy59;
    quantifierCounters[5]--;
  }
  return followUpResult;
};
