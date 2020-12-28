// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/[a-c]*[B-X]+[c]?/'
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

type GroupMarkers = [];

type TempGroupMarkers = [];

type QuantifierCounters = [];

export function generatedRegexMatcher(str: string) {
  const groupMarkers: GroupMarkers = [];
  const tempGroupStartMarkers: TempGroupMarkers = [];
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
        matches: [str.substring(i, posAfterMatch)],
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
   * nonBacktrackingQuantifier
   * /[a-c]✱[B-X]+[c]?/
   *  ^^^^^^
   */
  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0004 = i;
    inlineFiber0004: {
      let i = startinlineFiber0004;

      /*
       * charOrSet
       * /[a-c]✱[B-X]+[c]?/
       *  ^^^^^
       */
      if (i >= str.length) {
        break inlineFiber0004;
      }
      const charCode0 = str.charCodeAt(i);
      let result0 = false;

      if (charCode0 <= 99) {
        result0 = charCode0 >= 97;
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
   * nonBacktrackingQuantifier
   * /[a-c]✱[B-X]+[c]?/
   *        ^^^^^^
   */
  let matches1 = 0;
  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0003 = i;
    inlineFiber0003: {
      let i = startinlineFiber0003;

      /*
       * charOrSet
       * /[a-c]✱[B-X]+[c]?/
       *        ^^^^^
       */
      if (i >= str.length) {
        break inlineFiber0003;
      }
      const charCode0 = str.charCodeAt(i);
      let result0 = false;

      if (charCode0 <= 88) {
        result0 = charCode0 >= 66;
      }
      if (!result0) {
        break inlineFiber0003;
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
  /*
   * nonBacktrackingQuantifier
   * /[a-c]✱[B-X]+[c]?/
   *              ^^^^
   */
  let matches2 = 0;
  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0002 = i;
    inlineFiber0002: {
      let i = startinlineFiber0002;

      /*
       * charOrSet
       * /[a-c]✱[B-X]+[c]?/
       *              ^^^
       */
      if (i >= str.length) {
        break inlineFiber0002;
      }
      const charCode0 = str.charCodeAt(i);
      let result0 = false;

      result0 = charCode0 === 99;

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

      matches2++;

      if (matches2 === 1) {
        break;
      }
    }
  }
  return i;
};
