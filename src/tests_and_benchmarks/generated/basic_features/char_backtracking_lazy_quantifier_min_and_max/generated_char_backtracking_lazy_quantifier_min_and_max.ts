// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(aa?){3}?/'
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

type QuantifierCounters = [];

export function generatedRegexMatcher(str: string) {
  const groupMarkers: GroupMarkers = [-1, -1];
  const tempGroupStartMarkers: TempGroupMarkers = [-1];
  const quantifierCounters: QuantifierCounters = [];

  for (let i = 0; i < str.length; i++) {
    const posAfterMatch = fiber0006(
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

  /*
   * groupEndMarker
   * /(aa?){3}?/
   *  ^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  /*
   * groupStartMarker
   * /(aa?){3}?/
   *  ^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * charOrSet
   * /(aa?){3}?/
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
   * nonBacktrackingQuantifier
   * /(aa?){3}?/
   *    ^^
   */
  let matches3 = 0;
  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0002 = i;
    inlineFiber0002: {
      let i = startinlineFiber0002;

      /*
       * charOrSet
       * /(aa?){3}?/
       *    ^
       */
      if (i >= str.length) {
        break inlineFiber0002;
      }
      const charCode0 = str.charCodeAt(i);
      let result0 = false;

      result0 = charCode0 === 97;

      if (!result0) {
        break inlineFiber0002;
      }
      i++;
      wrappedResult = i;
    }

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
   * groupEndMarker
   * /(aa?){3}?/
   *  ^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
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
   * groupEndMarker
   * /(aa?){3}?/
   *  ^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  /*
   * groupStartMarker
   * /(aa?){3}?/
   *  ^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * charOrSet
   * /(aa?){3}?/
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
   * /(aa?){3}?/
   *    ^^
   */
  let matches3 = 0;

  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0003 = i;
    inlineFiber0003: {
      let i = startinlineFiber0003;

      /*
       * charOrSet
       * /(aa?){3}?/
       *    ^
       */
      if (i >= str.length) {
        break inlineFiber0003;
      }
      const charCode0 = str.charCodeAt(i);
      let result0 = false;

      result0 = charCode0 === 97;

      if (!result0) {
        break inlineFiber0003;
      }
      i++;
      wrappedResult = i;
    }

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
    const directFollowUpResult3 = fiber0001(
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
const fiber0006 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * groupStartMarker
   * /(aa?){3}?/
   *  ^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * charOrSet
   * /(aa?){3}?/
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
   * /(aa?){3}?/
   *    ^^
   */
  let matches2 = 0;

  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0005 = i;
    inlineFiber0005: {
      let i = startinlineFiber0005;

      /*
       * charOrSet
       * /(aa?){3}?/
       *    ^
       */
      if (i >= str.length) {
        break inlineFiber0005;
      }
      const charCode0 = str.charCodeAt(i);
      let result0 = false;

      result0 = charCode0 === 97;

      if (!result0) {
        break inlineFiber0005;
      }
      i++;
      wrappedResult = i;
    }

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
    const directFollowUpResult2 = fiber0004(
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
