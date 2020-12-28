// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/'
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
   * nonBacktrackingQuantifier
   * ...[\/][0-9]+[,.]?[0-9]✱)✱/
   *              ^^^^^
   */
  let matches0 = 0;
  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0005 = i;
    inlineFiber0005: {
      let i = startinlineFiber0005;

      /*
       * charOrSet
       * ...[\/][0-9]+[,.]?[0-9]✱)✱/
       *              ^^^^
       */
      if (i >= str.length) {
        break inlineFiber0005;
      }
      const charCode0 = str.charCodeAt(i);
      let result0 = false;

      result0 = charCode0 === 44 || charCode0 === 46;

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

      matches0++;

      if (matches0 === 1) {
        break;
      }
    }
  }
  /*
   * nonBacktrackingQuantifier
   * ...0-9]+[,.]?[0-9]✱)✱/
   *              ^^^^^^
   */
  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0004 = i;
    inlineFiber0004: {
      let i = startinlineFiber0004;

      /*
       * charOrSet
       * ...0-9]+[,.]?[0-9]✱)✱/
       *              ^^^^^
       */
      if (i >= str.length) {
        break inlineFiber0004;
      }
      const charCode0 = str.charCodeAt(i);
      let result0 = false;

      if (charCode0 <= 57) {
        result0 = charCode0 >= 48;
      }
      if (!result0) {
        break inlineFiber0004;
      }
      i++;
      wrappedResult = i;
    }

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * groupEndMarker
   * ...,.]?[0-9]✱([\/][0-9]+[,.]?[0-9]✱)✱/
   *              ^^^^^^^^^^^^^^^^^^^^^^^
   */
  groupMarkers[0] = tempGroupStartMarkers[0];
  groupMarkers[1] = i;
  return greedyQuantifier0003(
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

  /*
   * groupStartMarker
   * ...,.]?[0-9]✱([\/][0-9]+[,.]?[0-9]✱)✱/
   *              ^^^^^^^^^^^^^^^^^^^^^^^
   */
  tempGroupStartMarkers[0] = i;
  /*
   * charOrSet
   * ....]?[0-9]✱([\/][0-9]+[,.]...
   *              ^^^^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i);
  let result1 = false;

  result1 = charCode1 === 47;

  if (!result1) {
    return -1;
  }
  i++;
  /*
   * backtrackingFixedLengthQuantifier
   * ...0-9]✱([\/][0-9]+[,.]?[0-9]...
   *              ^^^^^^
   */
  let matches2 = 0;

  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0006 = i;
    inlineFiber0006: {
      let i = startinlineFiber0006;

      /*
       * charOrSet
       * ...0-9]✱([\/][0-9]+[,.]?[0-9...
       *              ^^^^^
       */
      if (i >= str.length) {
        break inlineFiber0006;
      }
      const charCode0 = str.charCodeAt(i);
      let result0 = false;

      if (charCode0 <= 57) {
        result0 = charCode0 >= 48;
      }
      if (!result0) {
        break inlineFiber0006;
      }
      i++;
      wrappedResult = i;
    }

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
const fiber0008 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  let i = start;

  /*
   * nonBacktrackingQuantifier
   * /[-]?[0-9]+[,.]?[0-9]✱([\/...
   *            ^^^^^
   */
  let matches0 = 0;
  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0010 = i;
    inlineFiber0010: {
      let i = startinlineFiber0010;

      /*
       * charOrSet
       * /[-]?[0-9]+[,.]?[0-9]✱([\...
       *            ^^^^
       */
      if (i >= str.length) {
        break inlineFiber0010;
      }
      const charCode0 = str.charCodeAt(i);
      let result0 = false;

      result0 = charCode0 === 44 || charCode0 === 46;

      if (!result0) {
        break inlineFiber0010;
      }
      i++;
      wrappedResult = i;
    }

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
   * nonBacktrackingQuantifier
   * ...0-9]+[,.]?[0-9]✱([\/][0-9]...
   *              ^^^^^^
   */
  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0009 = i;
    inlineFiber0009: {
      let i = startinlineFiber0009;

      /*
       * charOrSet
       * ...0-9]+[,.]?[0-9]✱([\/][0-9...
       *              ^^^^^
       */
      if (i >= str.length) {
        break inlineFiber0009;
      }
      const charCode0 = str.charCodeAt(i);
      let result0 = false;

      if (charCode0 <= 57) {
        result0 = charCode0 >= 48;
      }
      if (!result0) {
        break inlineFiber0009;
      }
      i++;
      wrappedResult = i;
    }

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;
    }
  }
  /*
   * quantifierStarter
   * ...,.]?[0-9]✱([\/][0-9]+[,.]?[0-9]✱)✱/
   *              ^^^^^^^^^^^^^^^^^^^^^^^^
   */
  const cursorAfterQuantifier = greedyQuantifier0003(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  return cursorAfterQuantifier;
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
   * /[-]?[0-9]+[,.]...
   *  ^^^^
   */
  let matches0 = 0;
  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0013 = i;
    inlineFiber0013: {
      let i = startinlineFiber0013;

      /*
       * charOrSet
       * /[-]?[0-9]+[,....
       *  ^^^
       */
      if (i >= str.length) {
        break inlineFiber0013;
      }
      const charCode0 = str.charCodeAt(i);
      let result0 = false;

      result0 = charCode0 === 45;

      if (!result0) {
        break inlineFiber0013;
      }
      i++;
      wrappedResult = i;
    }

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
   * /[-]?[0-9]+[,.]?[0-9]...
   *      ^^^^^^
   */
  let matches1 = 0;

  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0011 = i;
    inlineFiber0011: {
      let i = startinlineFiber0011;

      /*
       * charOrSet
       * /[-]?[0-9]+[,.]?[0-9...
       *      ^^^^^
       */
      if (i >= str.length) {
        break inlineFiber0011;
      }
      const charCode0 = str.charCodeAt(i);
      let result0 = false;

      if (charCode0 <= 57) {
        result0 = charCode0 >= 48;
      }
      if (!result0) {
        break inlineFiber0011;
      }
      i++;
      wrappedResult = i;
    }

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
    const directFollowUpResult1 = fiber0008(
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

/*
 * ...,.]?[0-9]✱([\/][0-9]+[,.]?[0-9]✱)✱/
 *              ^^^^^^^^^^^^^^^^^^^^^^^^
 */
const greedyQuantifier0003 = (
  start: number,
  str: string,
  groupMarkers: GroupMarkers,
  tempGroupStartMarkers: TempGroupMarkers,
  quantifierCounters: QuantifierCounters
): number => {
  const groupMarkerCopy0 = groupMarkers[0];
  const groupMarkerCopy1 = groupMarkers[1];
  const tryDeeperResult = fiber0007(
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

  const followUpResult = fiber0001(
    start,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );

  if (followUpResult === -1) {
  }
  return followUpResult;
};
