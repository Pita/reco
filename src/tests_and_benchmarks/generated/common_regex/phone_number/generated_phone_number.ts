// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/'
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

type QuantifierCounters = [number, number, number];

export function generatedRegexMatcher(str: string) {
  const groupMarkers: GroupMarkers = [-1, -1, -1, -1, -1, -1];
  const tempGroupStartMarkers: TempGroupMarkers = [-1, -1, -1];
  const quantifierCounters: QuantifierCounters = [-1, -1, -1];

  for (let i = 0; i < str.length; i++) {
    const posAfterMatch = fiber0041(
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
   * endAnchor
   * .../]?(\d+))?$/
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
   * nonBacktrackingQuantifier
   * ...tension|x)[\-\.\ \\\/]?(\d+))?$/
   *              ^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0005(
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
  /*
   * groupStartMarker
   * ...\.\ \\\/]?(\d+))?$/
   *              ^^^^^
   */
  tempGroupStartMarkers[2] = i;
  /*
   * nonBacktrackingQuantifier
   * ....\ \\\/]?(\d+))?$/
   *              ^^^
   */
  let matches2 = 0;
  while (true) {
    const wrappedResult = fiber0004(
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
   * ...\.\ \\\/]?(\d+))?$/
   *              ^^^^^
   */
  groupMarkers[4] = tempGroupStartMarkers[2];
  groupMarkers[5] = i;
  return greedyQuantifier0003(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * ....\ \\\/]?(\d+))?$/
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
   * ...tension|x)[\-\.\ \\\/]?(\d+))?$/
   *              ^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 47) {
    if (charCode0 === 32) {
      result0 = true;
    } else {
      result0 = charCode0 >= 45;
    }
  } else {
    result0 = charCode0 === 92;
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
   * ... \\\/]?(?:#|ext\.?|ex...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 35;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0002(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
};
const fiber0007 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  return fiber0002(
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
   * ...]?(?:#|ext\.?|extensio...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 46;

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
   * ...\\/]?(?:#|ext\.?|exte...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 101;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...\/]?(?:#|ext\.?|exten...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 120;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * .../]?(?:#|ext\.?|extens...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 116;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * ...]?(?:#|ext\.?|extension...
   *              ^^^
   */
  let matches3 = 0;

  while (true) {
    const wrappedResult = fiber0008(
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

  // needs followUp & forkingFiber
  while (matches3 >= 0) {
    const directFollowUpResult3 = fiber0007(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult3 !== -1) {
      return directFollowUpResult3;
    }

    matches3--;
    i -= 1;
  }

  return -1;
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
   * ...:#|ext\.?|extension|x...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 101;

  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...#|ext\.?|extension|x)...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 120;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|ext\.?|extension|x)[...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 116;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...ext\.?|extension|x)[\...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i);
  let result3 = false;

  result3 = charCode3 === 101;

  if (!result3) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...xt\.?|extension|x)[\-...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode4 = str.charCodeAt(i);
  let result4 = false;

  result4 = charCode4 === 110;

  if (!result4) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...t\.?|extension|x)[\-\...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode5 = str.charCodeAt(i);
  let result5 = false;

  result5 = charCode5 === 115;

  if (!result5) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...\.?|extension|x)[\-\....
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode6 = str.charCodeAt(i);
  let result6 = false;

  result6 = charCode6 === 105;

  if (!result6) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ....?|extension|x)[\-\.\...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode7 = str.charCodeAt(i);
  let result7 = false;

  result7 = charCode7 === 111;

  if (!result7) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...?|extension|x)[\-\.\ ...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode8 = str.charCodeAt(i);
  let result8 = false;

  result8 = charCode8 === 110;

  if (!result8) {
    return -1;
  }
  i++;
  return fiber0002(
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
   * ...extension|x)[\-\.\ \\...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 120;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0002(
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
   * nonBacktrackingQuantifier
   * ...?){0,})(?:[\-\.\ \\\/]?(?:#|ext\....
   *              ^^^^^^^^^^^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0013(
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
  /*
   * disjunction
   * ...\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy4 = groupMarkers[4];
  const groupMarkerCopy5 = groupMarkers[5];
  const length0 = fiber0006(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length0 !== -1) {
    return length0;
  }
  groupMarkers[4] = groupMarkerCopy4;
  groupMarkers[5] = groupMarkerCopy5;
  const length1 = fiber0009(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length1 !== -1) {
    return length1;
  }
  groupMarkers[4] = groupMarkerCopy4;
  groupMarkers[5] = groupMarkerCopy5;
  const length2 = fiber0010(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length2 !== -1) {
    return length2;
  }
  groupMarkers[4] = groupMarkerCopy4;
  groupMarkers[5] = groupMarkerCopy5;
  const length3 = fiber0011(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (length3 !== -1) {
    return length3;
  }
  groupMarkers[4] = groupMarkerCopy4;
  groupMarkers[5] = groupMarkerCopy5;
  return -1;
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
   * ...?){0,})(?:[\-\.\ \\\/]?(?:#|ext\...
   *              ^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 47) {
    if (charCode0 === 32) {
      result0 = true;
    } else {
      result0 = charCode0 >= 45;
    }
  } else {
    result0 = charCode0 === 92;
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
   * groupEndMarker
   * ...\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ ...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[2] = tempGroupStartMarkers[1];
  groupMarkers[3] = i;
  /*
   * quantifierStarter
   * ...\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0003 = quantifierCounters[0];
  quantifierCounters[0] = -1;
  const cursorAfterQuantifier = greedyQuantifier0003(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[0] = matchCountCopygreedyQuantifier0003;

  return cursorAfterQuantifier;
};
const fiber0015 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  return greedyQuantifier0016(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * ...?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:...
   *              ^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 47) {
    if (charCode0 === 32) {
      result0 = true;
    } else {
      result0 = charCode0 >= 45;
    }
  } else {
    result0 = charCode0 === 92;
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
   * ...:\(?\d{1,}\)?[\-\.\ \\\...
   *              ^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0019(
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
  /*
   * backtrackingFixedLengthQuantifier
   * ...?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[...
   *              ^^^^^^^^^^^^^
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
      break;
    } else {
      i = wrappedResult;
      matches1++;

      if (matches1 === 1) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches1 >= 0) {
    const directFollowUpResult1 = fiber0015(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 1;
  }

  return -1;
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
   * ...:\(?\d{1,}\)?[\-\.\ \\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 41;

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
   * ...?)?((?:\(?\d{1,}\)?[\-...
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
const fiber0021 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * nonBacktrackingQuantifier
   * ...\/]?)?((?:\(?\d{1,}\)?[...
   *              ^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0022(
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
  /*
   * backtrackingFixedLengthQuantifier
   * ...?)?((?:\(?\d{1,}\)?[\-\.\ ...
   *              ^^^^^^
   */
  let matches1 = 0;

  while (true) {
    const wrappedResult = fiber0020(
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

  // needs followUp & forkingFiber
  while (matches1 >= 1) {
    const directFollowUpResult1 = fiber0018(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 1;
  }

  return -1;
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
   * ...\/]?)?((?:\(?\d{1,}\)?...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 40;

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
   * groupStartMarker
   * ...\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ ...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[1] = i;
  /*
   * quantifierStarter
   * ... \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\...
   *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const cursorAfterQuantifier = greedyQuantifier0016(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  return cursorAfterQuantifier;
};
const fiber0024 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  return greedyQuantifier0025(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * ...]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?...
   *              ^^^^^^^^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 47) {
    if (charCode0 === 32) {
      result0 = true;
    } else {
      result0 = charCode0 >= 45;
    }
  } else {
    result0 = charCode0 === 92;
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
   * backtrackingFixedLengthQuantifier
   * ...]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\...
   *              ^^^^^^^^^^^^^
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
    const directFollowUpResult0 = fiber0024(
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
const fiber0028 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupEndMarker
   * ...?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\....
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  /*
   * nonBacktrackingQuantifier
   * ...|[1-9]\d?)\)?)?[\-\.\ \...
   *              ^^^
   */
  let matches1 = 0;
  while (true) {
    const wrappedResult = fiber0030(
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

      matches1++;

      if (matches1 === 1) {
        break;
      }
    }
  }
  return greedyQuantifier0029(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * ...|[1-9]\d?)\)?)?[\-\.\ ...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 41;

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
   * charOrSet
   * ...(?:00|\+)([1-4]\d\d|[1-9]...
   *              ^^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  if (charCode0 <= 52) {
    result0 = charCode0 >= 49;
  }
  if (!result0) {
    return -1;
  }
  i++;
  /*
   * charOrSet
   * ...|\+)([1-4]\d\d|[1-9]\d...
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
   * ...+)([1-4]\d\d|[1-9]\d?)...
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
  return fiber0028(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
};
const fiber0032 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  return fiber0028(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * charOrSet
   * ...\d\d|[1-9]\d?)\)?)?[\-...
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
   * ...[1-4]\d\d|[1-9]\d?)\)?)?[...
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
   * backtrackingFixedLengthQuantifier
   * ...\d\d|[1-9]\d?)\)?)?[\-\...
   *              ^^^
   */
  let matches1 = 0;

  while (true) {
    const wrappedResult = fiber0033(
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
      matches1++;

      if (matches1 === 1) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches1 >= 0) {
    const directFollowUpResult1 = fiber0032(
      i,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );

    if (directFollowUpResult1 !== -1) {
      return directFollowUpResult1;
    }

    matches1--;
    i -= 1;
  }

  return -1;
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
   * groupStartMarker
   * ...?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\....
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * disjunction
   * ...?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\....
   *              ^^^^^^^^^^^^^^^^^^^^
   */
  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const length0 = fiber0031(
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
  const length1 = fiber0034(
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
  return -1;
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
   * ...:(?:\(?(?:00|\+)([1-4...
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
  /*
   * charOrSet
   * ...(?:\(?(?:00|\+)([1-4]...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 48;

  if (!result1) {
    return -1;
  }
  i++;
  return fiber0035(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * ...:\(?(?:00|\+)([1-4]\d\...
   *              ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 43;

  if (!result0) {
    return -1;
  }
  i++;
  return fiber0035(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
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
   * /^(?:(?:\(?(?:00|\+)(...
   *         ^^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0039(
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
  /*
   * disjunction
   * /^(?:(?:\(?(?:00|\+)([1-4]\d\d...
   *            ^^^^^^^^^
   */
  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const length0 = fiber0036(
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
  const length1 = fiber0037(
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
  return -1;
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
   * /^(?:(?:\(?(?:00|\+)...
   *         ^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 40;

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
   * quantifierStarter
   * /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\...
   *      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0029 = quantifierCounters[2];
  quantifierCounters[2] = -1;
  const cursorAfterQuantifier = greedyQuantifier0029(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[2] = matchCountCopygreedyQuantifier0029;

  return cursorAfterQuantifier;
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
   * startAnchor
   * /^(?:(?:\(?(...
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * quantifierStarter
   * /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{...
   *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   */
  let matchCountCopygreedyQuantifier0025 = quantifierCounters[1];
  quantifierCounters[1] = -1;
  const cursorAfterQuantifier = greedyQuantifier0025(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[1] = matchCountCopygreedyQuantifier0025;

  return cursorAfterQuantifier;
};

/*
 * ...\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0003 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[0]++;

  if (quantifierCounters[0] === 1) {
    return fiber0001(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const groupMarkerCopy4 = groupMarkers[4];
  const groupMarkerCopy5 = groupMarkers[5];
  const tryDeeperResult = fiber0012(
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
  groupMarkers[4] = groupMarkerCopy4;
  groupMarkers[5] = groupMarkerCopy5;

  const followUpResult = fiber0001(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    quantifierCounters[0]--;
  }
  return followUpResult;
};
/*
 * ... \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\...
 *              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0016 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  const tryDeeperResult = fiber0021(
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

  const groupMarkerCopy2 = groupMarkers[2];
  const groupMarkerCopy3 = groupMarkers[3];
  const groupMarkerCopy4 = groupMarkers[4];
  const groupMarkerCopy5 = groupMarkers[5];

  const followUpResult = fiber0014(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[2] = groupMarkerCopy2;
    groupMarkers[3] = groupMarkerCopy3;
    groupMarkers[4] = groupMarkerCopy4;
    groupMarkers[5] = groupMarkerCopy5;
  }
  return followUpResult;
};
/*
 * /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{...
 *   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0025 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[1]++;

  if (quantifierCounters[1] === 1) {
    return fiber0023(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const tryDeeperResult = fiber0040(
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
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;

  const groupMarkerCopy2 = groupMarkers[2];
  const groupMarkerCopy3 = groupMarkers[3];
  const groupMarkerCopy4 = groupMarkers[4];
  const groupMarkerCopy5 = groupMarkers[5];

  const followUpResult = fiber0023(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    groupMarkers[2] = groupMarkerCopy2;
    groupMarkers[3] = groupMarkerCopy3;
    groupMarkers[4] = groupMarkerCopy4;
    groupMarkers[5] = groupMarkerCopy5;
    quantifierCounters[1]--;
  }
  return followUpResult;
};
/*
 * /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\...
 *      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0029 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[2]++;

  if (quantifierCounters[2] === 1) {
    return fiber0027(
      start,
      str,
      groupMarkers,
      tempGroupStartMarkers,
      quantifierCounters
    );
  }

  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const tryDeeperResult = fiber0038(
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
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;

  const followUpResult = fiber0027(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
    quantifierCounters[2]--;
  }
  return followUpResult;
};
