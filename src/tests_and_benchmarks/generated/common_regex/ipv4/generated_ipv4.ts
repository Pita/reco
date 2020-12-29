// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/'
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

type GroupMarkers = [number, number, number, number, number, number];

type TempGroupMarkers = [number, number, number];

type QuantifierCounters = [];

export function generatedRegexMatcher(str: string) {
  const groupMarkers: GroupMarkers = [-1, -1, -1, -1, -1, -1];
  const tempGroupStartMarkers: TempGroupMarkers = [-1, -1, -1];
  const quantifierCounters: QuantifierCounters = [];

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
   * startAnchor
   * /^(([0-9]|[1...
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * groupStartMarker
   * /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * groupStartMarker
   * /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * nonBacktrackingDisjunction
   * /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction3: {
    const length0 = fiber0017(
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

    const length1 = fiber0018(
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

    const length2 = fiber0019(
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

    const length3 = fiber0020(
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

    const length4 = fiber0021(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length4 !== -1) {
      i = length4;
      break nonBacktrackingDisjunction3;
    }

    return -1;
  }
  /*
   * groupEndMarker
   * /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  /*
   * charOrSet
   * ...]|25[0-5])\.){3}([0-9]...
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
   * /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  /*
   * groupStartMarker
   * /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * groupStartMarker
   * /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * nonBacktrackingDisjunction
   * /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction9: {
    const length0 = fiber0012(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction9;
    }

    const length1 = fiber0013(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction9;
    }

    const length2 = fiber0014(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction9;
    }

    const length3 = fiber0015(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction9;
    }

    const length4 = fiber0016(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length4 !== -1) {
      i = length4;
      break nonBacktrackingDisjunction9;
    }

    return -1;
  }
  /*
   * groupEndMarker
   * /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  /*
   * charOrSet
   * ...]|25[0-5])\.){3}([0-9]...
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
   * /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  /*
   * groupStartMarker
   * /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * groupStartMarker
   * /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * nonBacktrackingDisjunction
   * /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction15: {
    const length0 = fiber0007(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length0 !== -1) {
      i = length0;
      break nonBacktrackingDisjunction15;
    }

    const length1 = fiber0008(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length1 !== -1) {
      i = length1;
      break nonBacktrackingDisjunction15;
    }

    const length2 = fiber0009(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length2 !== -1) {
      i = length2;
      break nonBacktrackingDisjunction15;
    }

    const length3 = fiber0010(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length3 !== -1) {
      i = length3;
      break nonBacktrackingDisjunction15;
    }

    const length4 = fiber0011(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length4 !== -1) {
      i = length4;
      break nonBacktrackingDisjunction15;
    }

    return -1;
  }
  /*
   * groupEndMarker
   * /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-...
   *    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  /*
   * charOrSet
   * ...]|25[0-5])\.){3}([0-9]...
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
   * /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  /*
   * groupStartMarker
   * ...-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[2] = i;
  /*
   * nonBacktrackingDisjunction
   * ...-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  nonBacktrackingDisjunction20: {
    const length0 = fiber0002(
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

    const length1 = fiber0003(
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

    const length2 = fiber0004(
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

    const length3 = fiber0005(
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

    const length4 = fiber0006(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
    if (length4 !== -1) {
      i = length4;
      break nonBacktrackingDisjunction20;
    }

    return -1;
  }
  /*
   * groupEndMarker
   * ...-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[4] = tempGroupStartMarkers[2];
  groupMarkers[5] = i;
  /*
   * endAnchor
   * ...]|25[0-5])$/
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
   * ...{2}|2[0-4][0-9]|25[0-5])$/
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
   * ...0-4][0-9]|25[0-5])$/
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
   * ...-4][0-9]|25[0-5])$/
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
   * ...4][0-9]|25[0-5])$/
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
   * /^(([0-9]|[1-9][0-9...
   *     ^^^^^
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
   * /^(([0-9]|[1-9][0-9]|1[0-...
   *           ^^^^^
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
   * /^(([0-9]|[1-9][0-9...
   *     ^^^^^
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
   * /^(([0-9]|[1-9][0-9]|1[0-...
   *           ^^^^^
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
   * /^(([0-9]|[1-9][0-9...
   *     ^^^^^
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
   * /^(([0-9]|[1-9][0-9]|1[0-...
   *           ^^^^^
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
