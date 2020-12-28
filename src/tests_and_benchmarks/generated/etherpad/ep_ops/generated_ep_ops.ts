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

  for (let i = 0; i < str.length; i++) {
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
    let wrappedResult = -1;
    const startinlineFiber0006 = i;
    inlineFiber0006: {
      let i = startinlineFiber0006;

      /*
       * charOrSet
       * /((?:\✱[0-9a-z]+)...
       *      ^^
       */
      if (i >= str.length) {
        break inlineFiber0006;
      }
      const charCode0 = str.charCodeAt(i);
      let result0 = false;

      result0 = charCode0 === 42;

      if (!result0) {
        break inlineFiber0006;
      }
      i++;
      /*
       * nonBacktrackingQuantifier
       * /((?:\✱[0-9a-z]+)✱)(?:\|([...
       *        ^^^^^^^^^
       */
      let matches1 = 0;
      while (true) {
        let wrappedResult = -1;
        const startinlineFiber0007 = i;
        inlineFiber0007: {
          let i = startinlineFiber0007;

          /*
           * charOrSet
           * /((?:\✱[0-9a-z]+)✱)(?:\|(...
           *        ^^^^^^^^
           */
          if (i >= str.length) {
            break inlineFiber0007;
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
            break inlineFiber0007;
          }
          i++;
          wrappedResult = i;
        }

        if (wrappedResult === -1) {
          if (matches1 < 1) {
            break inlineFiber0006;
          }

          break;
        } else {
          i = wrappedResult;

          matches1++;
        }
      }
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
    let wrappedResult = -1;
    const startinlineFiber0004 = i;
    inlineFiber0004: {
      let i = startinlineFiber0004;

      /*
       * charOrSet
       * ...-z]+)✱)(?:\|([0-9a-z]+...
       *              ^^
       */
      if (i >= str.length) {
        break inlineFiber0004;
      }
      const charCode0 = str.charCodeAt(i);
      let result0 = false;

      result0 = charCode0 === 124;

      if (!result0) {
        break inlineFiber0004;
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
        let wrappedResult = -1;
        const startinlineFiber0005 = i;
        inlineFiber0005: {
          let i = startinlineFiber0005;

          /*
           * charOrSet
           * ...+)✱)(?:\|([0-9a-z]+))?([-+=]...
           *              ^^^^^^^^
           */
          if (i >= str.length) {
            break inlineFiber0005;
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
            break inlineFiber0005;
          }
          i++;
          wrappedResult = i;
        }

        if (wrappedResult === -1) {
          if (matches2 < 1) {
            break inlineFiber0004;
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
    let wrappedResult = -1;
    const startinlineFiber0003 = i;
    inlineFiber0003: {
      let i = startinlineFiber0003;

      /*
       * charOrSet
       * ...)?([-+=])([0-9a-z]+)|\?/
       *              ^^^^^^^^
       */
      if (i >= str.length) {
        break inlineFiber0003;
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
        break inlineFiber0003;
      }
      i++;
      wrappedResult = i;
    }

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
