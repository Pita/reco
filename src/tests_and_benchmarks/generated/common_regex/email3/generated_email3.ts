// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
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
  number
];

type QuantifierCounters = [number];

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
  ];
  const quantifierCounters: QuantifierCounters = [-1];

  // startAnchored
  const min = 0;
  const max = 0;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0021(
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
   * ...)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[8] = tempGroupStartMarkers[4];
  groupMarkers[9] = i;
  /*
   * endAnchor
   * ...A-Z]{2,}))$/
   *              ^
   */
  if (i !== str.length) {
    return -1;
  }
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
   * ...|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[5] = i;
  /*
   * charOrSet
   * ...(".+"))@((\[[0-9]{1,3}...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 91;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ....+"))@((\[[0-9]{1,3}\.[0-9]{1,...
   *              ^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0006(
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

      if (matches2 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...[0-9]{1,3}\.[0-9]{1,3}...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  result3 = charCode3 === 46;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,...
   *              ^^^^^^^^^^
   */
  let matches4 = 0;
  while (true) {
    const wrappedResult = fiber0005(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches4 < 1) {
        return -1;
      }

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
   * charOrSet
   * ...[0-9]{1,3}\.[0-9]{1,3}...
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
   * nonBacktrackingQuantifier
   * ...-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,...
   *              ^^^^^^^^^^
   */
  let matches6 = 0;
  while (true) {
    const wrappedResult = fiber0004(
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

      if (matches6 === 3) {
        break;
      }
    }
  }
  /*
   * charOrSet
   * ...[0-9]{1,3}\.[0-9]{1,3}...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7 = false;

  result7 = charCode7 === 46;

  if (!result7) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * ...-9]{1,3}\.[0-9]{1,3}])|(([a-zA...
   *              ^^^^^^^^^^
   */
  let matches8 = 0;
  while (true) {
    const wrappedResult = fiber0003(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches8 < 1) {
        return -1;
      }

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
   * ...[0-9]{1,3}])|(([a-zA-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode9 = str.charCodeAt(i);
  let result9 = false;

  result9 = charCode9 === 93;

  if (!result9) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[10] = tempGroupStartMarkers[5];
  groupMarkers[11] = i;
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
   * ...-9]{1,3}\.[0-9]{1,3}])|((...
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
   * ...-9]{1,3}\.[0-9]{1,3}\.[0-...
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
   * ...-9]{1,3}\.[0-9]{1,3}\.[0-...
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
   * ....+"))@((\[[0-9]{1,3}\.[0-...
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
const fiber0007 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * ...-0-9]+\.)+[a-zA-Z]{2,}))$/
   *              ^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0008(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (wrappedResult === -1) {
      if (matches0 < 2) {
        return -1;
      }

      break;
    } else {
      i = wrappedResult;

      matches0++;
    }
  }
  /*
   * groupEndMarker
   * ...9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[12] = tempGroupStartMarkers[6];
  groupMarkers[13] = i;
  return fiber0001(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * ...-0-9]+\.)+[a-zA-Z]{2,}))$/
   *              ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 90) {
    result0 = charCode0 >= 65;
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
const fiber0009 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{...
   *              ^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[7] = i;
  /*
   * nonBacktrackingQuantifier
   * ...{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-...
   *              ^^^^^^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0011(
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
    }
  }
  /*
   * charOrSet
   * ...A-Z\-0-9]+\.)+[a-zA-Z]...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 46;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{...
   *              ^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[14] = tempGroupStartMarkers[7];
  groupMarkers[15] = i;
  return greedyQuantifier0010(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * ...{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA...
   *              ^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    if (charCode0 === 45) {
      result0 = true;
    } else {
      result0 = charCode0 >= 48;
    }
  } else {
    if (charCode0 <= 90) {
      result0 = charCode0 >= 65;
    } else {
      if (charCode0 <= 122) {
        result0 = charCode0 >= 97;
      }
    }
  }
  if (!result0) {
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
   * groupStartMarker
   * ...9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[6] = i;
  /*
   * quantifierStarter
   * ...]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2...
   *              ^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0010 = quantifierCounters[0];
  quantifierCounters[0] = -1;
  const cursorAfterQuantifier = greedyQuantifier0010(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[0] = matchCountCopygreedyQuantifier0010;

  return cursorAfterQuantifier;
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
   * groupEndMarker
   * /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+"))@((\[[0-9]...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  /*
   * charOrSet
   * ...✱)|(".+"))@((\[[0-9]{...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 64;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[4] = i;
  /*
   * disjunction
   * ...)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy8 = groupMarkers[8];
  const groupMarkerCopy9 = groupMarkers[9];
  const groupMarkerCopy10 = groupMarkers[10];
  const groupMarkerCopy11 = groupMarkers[11];
  const groupMarkerCopy12 = groupMarkers[12];
  const groupMarkerCopy13 = groupMarkers[13];
  const groupMarkerCopy14 = groupMarkers[14];
  const groupMarkerCopy15 = groupMarkers[15];
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
  groupMarkers[8] = groupMarkerCopy8;
  groupMarkers[9] = groupMarkerCopy9;
  groupMarkers[10] = groupMarkerCopy10;
  groupMarkers[11] = groupMarkerCopy11;
  const length1 = fiber0012(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }
  groupMarkers[8] = groupMarkerCopy8;
  groupMarkers[9] = groupMarkerCopy9;
  groupMarkers[12] = groupMarkerCopy12;
  groupMarkers[13] = groupMarkerCopy13;
  groupMarkers[14] = groupMarkerCopy14;
  groupMarkers[15] = groupMarkerCopy15;
  return -1;
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
   * groupStartMarker
   * /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+"))@(...
   *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * nonBacktrackingQuantifier
   * /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\...
   *     ^^^^^^^^^^^^^^^^^^^^^^
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
    }
  }
  /*
   * nonBacktrackingQuantifier
   * ....,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+"))@...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0015(
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
   * groupEndMarker
   * /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+"))@(...
   *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  return fiber0013(
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
   * groupStartMarker
   * ....,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+"))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[2] = i;
  /*
   * charOrSet
   * ...,;:\s@"]+(\.[^<>()\[\]...
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
   * nonBacktrackingQuantifier
   * ...:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+")...
   *              ^^^^^^^^^^^^^^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0016(
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
  /*
   * groupEndMarker
   * ....,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+"))...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[4] = tempGroupStartMarkers[2];
  groupMarkers[5] = i;
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
   * ...:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+"...
   *              ^^^^^^^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 64) {
    if (charCode0 <= 44) {
      if (charCode0 <= 34) {
        if (charCode0 <= 32) {
          if (charCode0 <= 13) {
            result0 = charCode0 >= 9;
          } else {
            result0 = charCode0 === 32;
          }
        } else {
          result0 = charCode0 === 34;
        }
      } else {
        if (charCode0 <= 41) {
          result0 = charCode0 >= 40;
        } else {
          result0 = charCode0 === 44;
        }
      }
    } else {
      if (charCode0 <= 60) {
        if (charCode0 === 46) {
          result0 = true;
        } else {
          result0 = charCode0 >= 58;
        }
      } else {
        result0 = charCode0 === 62 || charCode0 === 64;
      }
    }
  } else {
    if (charCode0 <= 8233) {
      if (charCode0 <= 5760) {
        if (charCode0 <= 160) {
          if (charCode0 <= 93) {
            result0 = charCode0 >= 91;
          } else {
            result0 = charCode0 === 160;
          }
        } else {
          result0 = charCode0 === 5760;
        }
      } else {
        if (charCode0 <= 8202) {
          result0 = charCode0 >= 8192;
        } else {
          result0 = charCode0 >= 8232;
        }
      }
    } else {
      if (charCode0 <= 8287) {
        result0 = charCode0 === 8239 || charCode0 === 8287;
      } else {
        result0 = charCode0 === 12288 || charCode0 === 65279;
      }
    }
  }
  if (result0) {
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
   * /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()...
   *     ^^^^^^^^^^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 64) {
    if (charCode0 <= 44) {
      if (charCode0 <= 34) {
        if (charCode0 <= 32) {
          if (charCode0 <= 13) {
            result0 = charCode0 >= 9;
          } else {
            result0 = charCode0 === 32;
          }
        } else {
          result0 = charCode0 === 34;
        }
      } else {
        if (charCode0 <= 41) {
          result0 = charCode0 >= 40;
        } else {
          result0 = charCode0 === 44;
        }
      }
    } else {
      if (charCode0 <= 60) {
        if (charCode0 === 46) {
          result0 = true;
        } else {
          result0 = charCode0 >= 58;
        }
      } else {
        result0 = charCode0 === 62 || charCode0 === 64;
      }
    }
  } else {
    if (charCode0 <= 8233) {
      if (charCode0 <= 5760) {
        if (charCode0 <= 160) {
          if (charCode0 <= 93) {
            result0 = charCode0 >= 91;
          } else {
            result0 = charCode0 === 160;
          }
        } else {
          result0 = charCode0 === 5760;
        }
      } else {
        if (charCode0 <= 8202) {
          result0 = charCode0 >= 8192;
        } else {
          result0 = charCode0 >= 8232;
        }
      }
    } else {
      if (charCode0 <= 8287) {
        result0 = charCode0 === 8239 || charCode0 === 8287;
      } else {
        result0 = charCode0 === 12288 || charCode0 === 65279;
      }
    }
  }
  if (result0) {
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
   * ...]+)✱)|(".+"))@((\[[0-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 34;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...\s@"]+)✱)|(".+"))@((\[[0-9...
   *              ^^^^^^
   */
  groupMarkers[6] = tempGroupStartMarkers[3];
  groupMarkers[7] = i;
  return fiber0013(
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
   * charOrSet
   * ...@"]+)✱)|(".+"))@((\[[...
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
const fiber0020 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupStartMarker
   * ...\s@"]+)✱)|(".+"))@((\[[0-9...
   *              ^^^^^^
   */
  tempGroupStartMarkers[3] = i;
  /*
   * charOrSet
   * ...s@"]+)✱)|(".+"))@((\[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 34;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * ...@"]+)✱)|(".+"))@((\[[0...
   *              ^^
   */
  let matches2 = 0;

  while (true) {
    const wrappedResult = fiber0019(
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
    const directFollowUpResult2 = fiber0018(
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
const fiber0021 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * startAnchor
   * /^(([^<>()\[...
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * groupStartMarker
   * /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+"))@((\[[0-9]...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * disjunction
   * /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)✱)|(".+"))@((\[[0-9]...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy2 = groupMarkers[2];
  const groupMarkerCopy3 = groupMarkers[3];
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
  const length0 = fiber0014(
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
  groupMarkers[8] = groupMarkerCopy8;
  groupMarkers[9] = groupMarkerCopy9;
  groupMarkers[10] = groupMarkerCopy10;
  groupMarkers[11] = groupMarkerCopy11;
  groupMarkers[12] = groupMarkerCopy12;
  groupMarkers[13] = groupMarkerCopy13;
  groupMarkers[14] = groupMarkerCopy14;
  groupMarkers[15] = groupMarkerCopy15;
  const length1 = fiber0020(
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
  groupMarkers[6] = groupMarkerCopy6;
  groupMarkers[7] = groupMarkerCopy7;
  groupMarkers[8] = groupMarkerCopy8;
  groupMarkers[9] = groupMarkerCopy9;
  groupMarkers[10] = groupMarkerCopy10;
  groupMarkers[11] = groupMarkerCopy11;
  groupMarkers[12] = groupMarkerCopy12;
  groupMarkers[13] = groupMarkerCopy13;
  groupMarkers[14] = groupMarkerCopy14;
  groupMarkers[15] = groupMarkerCopy15;
  return -1;
};

/*
 * ...]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2...
 *              ^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0010 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[0]++;

  const groupMarkerCopy14 = groupMarkers[14];
  const groupMarkerCopy15 = groupMarkers[15];
  const tryDeeperResult = fiber0009(
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
  groupMarkers[14] = groupMarkerCopy14;
  groupMarkers[15] = groupMarkerCopy15;

  if (quantifierCounters[0] < 1) {
    quantifierCounters[0]--;
    return -1;
  }

  const groupMarkerCopy8 = groupMarkers[8];
  const groupMarkerCopy9 = groupMarkers[9];
  const groupMarkerCopy12 = groupMarkers[12];
  const groupMarkerCopy13 = groupMarkers[13];

  const followUpResult = fiber0007(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[8] = groupMarkerCopy8;
    groupMarkers[9] = groupMarkerCopy9;
    groupMarkers[12] = groupMarkerCopy12;
    groupMarkers[13] = groupMarkerCopy13;
    quantifierCounters[0]--;
  }
  return followUpResult;
};
