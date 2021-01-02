// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/((?:\*[0-9a-z]+)*)(?:\|([0-9a-z]+))?([-+=])([0-9a-z]+)|\?/'
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
  number
];

type TempGroupMarkers = [number, number, number, number];

type QuantifierCounters = [];

export function generatedRegexMatcher(str: string) {
  const groupMarkers: GroupMarkers = [-1, -1, -1, -1, -1, -1, -1, -1];
  const tempGroupStartMarkers: TempGroupMarkers = [-1, -1, -1, -1];
  const quantifierCounters: QuantifierCounters = [];

  const max = str.length - 0;
  for (let i = 0; i < max; i++) {
    const posAfterMatch = fiber0009(
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
        ],
      };
    }
  }

  return null;
}

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
   * /((?:\✱[0-9a-z]+)✱)(?:\|([0-9...
   *  ^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * nonBacktrackingQuantifier
   * /((?:\✱[0-9a-z]+)✱)(?:\|([0-...
   *   ^^^^^^^^^^^^^^^^
   */
  while (true) {
    const wrappedResult = fiber0006(
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
   * /((?:\✱[0-9a-z]+)✱)(?:\|([0-9...
   *  ^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  /*
   * nonBacktrackingQuantifier
   * ...-9a-z]+)✱)(?:\|([0-9a-z]+))?([-+=])([0...
   *              ^^^^^^^^^^^^^^^^^^
   */
  let matches3 = 0;
  while (true) {
    const wrappedResult = fiber0004(
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

      matches3++;

      if (matches3 === 1) {
        break;
      }
    }
  }
  /*
   * groupStartMarker
   * ...-9a-z]+))?([-+=])([0-9a-z]+...
   *              ^^^^^^^
   */
  tempGroupStartMarkers[2] = i;
  /*
   * charOrSet
   * ...9a-z]+))?([-+=])([0-9a-z]...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode5 = str.charCodeAt(i);
  let result5 = false;

  if (charCode5 <= 45) {
    result5 = charCode5 === 43 || charCode5 === 45;
  } else {
    result5 = charCode5 === 61;
  }
  if (!result5) {
    return -1;
  }
  i++;
  /*
   * groupEndMarker
   * ...-9a-z]+))?([-+=])([0-9a-z]+...
   *              ^^^^^^^
   */
  groupMarkers[4] = tempGroupStartMarkers[2];
  groupMarkers[5] = i;
  /*
   * groupStartMarker
   * ...))?([-+=])([0-9a-z]+)|\?/
   *              ^^^^^^^^^^^
   */
  tempGroupStartMarkers[3] = i;
  /*
   * nonBacktrackingQuantifier
   * ...)?([-+=])([0-9a-z]+)|\?/
   *              ^^^^^^^^^
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
    }
  }
  /*
   * groupEndMarker
   * ...))?([-+=])([0-9a-z]+)|\?/
   *              ^^^^^^^^^^^
   */
  groupMarkers[6] = tempGroupStartMarkers[3];
  groupMarkers[7] = i;
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
   * ...)?([-+=])([0-9a-z]+)|\?/
   *              ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
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
   * ...-z]+)✱)(?:\|([0-9a-z]+...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 124;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * groupStartMarker
   * ...]+)✱)(?:\|([0-9a-z]+))?([-+=])(...
   *              ^^^^^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * nonBacktrackingQuantifier
   * ...+)✱)(?:\|([0-9a-z]+))?([-+=])...
   *              ^^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0005(
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
   * ...]+)✱)(?:\|([0-9a-z]+))?([-+=])(...
   *              ^^^^^^^^^^^
   */
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
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
   * ...+)✱)(?:\|([0-9a-z]+))?([-+=]...
   *              ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
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
   * /((?:\✱[0-9a-z]+)...
   *      ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 42;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * nonBacktrackingQuantifier
   * /((?:\✱[0-9a-z]+)✱)(?:\|([...
   *        ^^^^^^^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0007(
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
   * /((?:\✱[0-9a-z]+)✱)(?:\|(...
   *        ^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 57) {
    result0 = charCode0 >= 48;
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
   * ...0-9a-z]+)|\?/
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 63;

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
   * disjunction
   * /((?:\✱[0-9a-z]+)✱)(?:\|([0-9a-z]+))?([-+=])([0-9a-z]+)|\?/
   *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const groupMarkerCopy4 = groupMarkers[4];
  const groupMarkerCopy5 = groupMarkers[5];
  const groupMarkerCopy6 = groupMarkers[6];
  const groupMarkerCopy7 = groupMarkers[7];
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
  groupMarkers[4] = groupMarkerCopy4;
  groupMarkers[5] = groupMarkerCopy5;
  groupMarkers[6] = groupMarkerCopy6;
  groupMarkers[7] = groupMarkerCopy7;
  const length1 = fiber0008(
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
