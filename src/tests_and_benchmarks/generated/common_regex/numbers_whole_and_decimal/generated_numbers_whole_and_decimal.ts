// This code was generated with RECO v0.3.0
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/^\d*(\.\d+)?$/'
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
   * /^\d✱(\.\d+)?$/
   *  ^
   */
  if (i !== 0) {
    return -1;
  }
  /*
   * nonBacktrackingQuantifier
   * /^\d✱(\.\d+)?$/
   *   ^^^
   */
  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0004 = i;
    inlineFiber0004: {
      let i = startinlineFiber0004;

      /*
       * charOrSet
       * /^\d✱(\.\d+)?$/
       *   ^^
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
   * nonBacktrackingQuantifier
   * /^\d✱(\.\d+)?$/
   *      ^^^^^^^^
   */
  let matches2 = 0;
  while (true) {
    let wrappedResult = -1;
    const startinlineFiber0002 = i;
    inlineFiber0002: {
      let i = startinlineFiber0002;

      /*
       * groupStartMarker
       * /^\d✱(\.\d+)?$/
       *      ^^^^^^^
       */
      tempGroupStartMarkers[0] = i;
      /*
       * charOrSet
       * /^\d✱(\.\d+)?$/
       *       ^^
       */
      if (i >= str.length) {
        break inlineFiber0002;
      }
      const charCode1 = str.charCodeAt(i);
      let result1 = false;

      result1 = charCode1 === 46;

      if (!result1) {
        break inlineFiber0002;
      }
      i++;
      /*
       * nonBacktrackingQuantifier
       * /^\d✱(\.\d+)?$/
       *         ^^^
       */
      let matches2 = 0;
      while (true) {
        let wrappedResult = -1;
        const startinlineFiber0003 = i;
        inlineFiber0003: {
          let i = startinlineFiber0003;

          /*
           * charOrSet
           * /^\d✱(\.\d+)?$/
           *         ^^
           */
          if (i >= str.length) {
            break inlineFiber0003;
          }
          const charCode0 = str.charCodeAt(i);
          let result0 = false;

          if (charCode0 <= 57) {
            result0 = charCode0 >= 48;
          }
          if (!result0) {
            break inlineFiber0003;
          }
          i++;
          wrappedResult = i;
        }

        if (wrappedResult === -1) {
          if (matches2 < 1) {
            break inlineFiber0002;
          }

          break;
        } else {
          i = wrappedResult;

          matches2++;
        }
      }
      /*
       * groupEndMarker
       * /^\d✱(\.\d+)?$/
       *      ^^^^^^^
       */
      groupMarkers[0] = tempGroupStartMarkers[0];
      groupMarkers[1] = i;
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
  /*
   * endAnchor
   * /^\d✱(\.\d+)?$/
   *              ^
   */
  if (i !== str.length) {
    return -1;
  }
  return i;
};
