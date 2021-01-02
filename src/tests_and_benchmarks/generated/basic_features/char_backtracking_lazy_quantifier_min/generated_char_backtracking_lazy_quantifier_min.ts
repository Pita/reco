// This code was generated with RECO v0.3.2
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(aa?){3,}?/'
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

type GroupMarkers = [number, number];

type TempGroupMarkers = [number];

type QuantifierCounters = [number];

export function generatedRegexMatcher(str: string) {
  const groupMarkers: GroupMarkers = [-1, -1];
  const tempGroupStartMarkers: TempGroupMarkers = [-1];
  const quantifierCounters: QuantifierCounters = [-1];

  // minCharsLeft
  const min = 0;
  const max = str.length - 1;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0012(
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
   * groupEndMarker
   * /(aa?){3,}?/
   *  ^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  return lazyQuantifier0003(
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
   * /(aa?){3,}?/
   *    ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 97;

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
   * groupStartMarker
   * /(aa?){3,}?/
   *  ^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * charOrSet
   * /(aa?){3,}?/
   *   ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * /(aa?){3,}?/
   *    ^^
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
      break;
    } else {
      i = wrappedResult;
      matches2++;

      if (matches2 === 1) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches2 >= 0) {
    const directFollowUpResult2 = fiber0002(
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
const fiber0006 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;
  /*
   * groupEndMarker
   * /(aa?){3,}?/
   *  ^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  /*
   * quantifierStarter
   * /(aa?){3,}?/
   *  ^^^^^^^^^^
   */
  let matchCountCopylazyQuantifier0003 = quantifierCounters[0];
  quantifierCounters[0] = -1;
  const cursorAfterQuantifier = lazyQuantifier0003(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  quantifierCounters[0] = matchCountCopylazyQuantifier0003;

  return cursorAfterQuantifier;
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
   * /(aa?){3,}?/
   *    ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 97;

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
   * groupEndMarker
   * /(aa?){3,}?/
   *  ^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  /*
   * groupStartMarker
   * /(aa?){3,}?/
   *  ^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * charOrSet
   * /(aa?){3,}?/
   *   ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 97;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * /(aa?){3,}?/
   *    ^^
   */
  let matches3 = 0;

  while (true) {
    const wrappedResult = fiber0007(
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
    const directFollowUpResult3 = fiber0006(
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
   * /(aa?){3,}?/
   *    ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 97;

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
   * groupEndMarker
   * /(aa?){3,}?/
   *  ^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  /*
   * groupStartMarker
   * /(aa?){3,}?/
   *  ^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * charOrSet
   * /(aa?){3,}?/
   *   ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i);
  let result2 = false;

  result2 = charCode2 === 97;

  if (!result2) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * /(aa?){3,}?/
   *    ^^
   */
  let matches3 = 0;

  while (true) {
    const wrappedResult = fiber0009(
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
    const directFollowUpResult3 = fiber0008(
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
   * /(aa?){3,}?/
   *    ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0 = false;

  result0 = charCode0 === 97;

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
   * /(aa?){3,}?/
   *  ^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * charOrSet
   * /(aa?){3,}?/
   *   ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * /(aa?){3,}?/
   *    ^^
   */
  let matches2 = 0;

  while (true) {
    const wrappedResult = fiber0011(
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

      if (matches2 === 1) {
        break;
      }
    }
  }

  // needs followUp & forkingFiber
  while (matches2 >= 0) {
    const directFollowUpResult2 = fiber0010(
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

/*
 * /(aa?){3,}?/
 *  ^^^^^^^^^^
 */
const lazyQuantifier0003 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  quantifierCounters[0]++;

  const followUpResult = fiber0001(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (followUpResult === -1) {
  } else {
    return followUpResult;
  }

  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const tryDeeperResult = fiber0005(
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
  groupMarkers[0] = groupMarkerCopy0;
  groupMarkers[1] = groupMarkerCopy1;

  quantifierCounters[0]--;
  return -1;
};
