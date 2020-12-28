// This code was generated with RECO v0.2.4
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(?<!𝒴)x/u'
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
   * lookaround
   * /(?<!𝒴)x/u
   *  ^^^^^^^
   */
  const lookaroundResult0 = fiber0002(
    i,
    str,
    groupMarkers,
    tempGroupStartMarkers,
    quantifierCounters
  );
  if (lookaroundResult0 !== -1) {
    return -1;
  }
  /*
   * charOrSet
   * /(?<!𝒴)x/u
   *         ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode1 = str.codePointAt(i)!;
  let result1 = false;

  result1 = charCode1 === 120;

  if (!result1) {
    return -1;
  }
  // surrogate pair might require moving 2 chars ahead
  i += charCode1 >= 0x10000 ? 2 : 1;
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
   * charOrSetBackward
   * /(?<!𝒴)x/u
   *      ^^
   */
  let isSurrogatePair0 = false;
  if (i >= 2) {
    const charCodeBefore0 = str.charCodeAt(i - 2);
    if (charCodeBefore0 >= 0xd800 && charCodeBefore0 <= 0xdbff) {
      isSurrogatePair0 = true;
    }
  }
  i -= isSurrogatePair0 ? 2 : 1;
  if (i < 0) {
    return -1;
  }
  const charCode0 = str.codePointAt(i);
  let result0 = false;

  result0 = charCode0 === 119988;

  if (!result0) {
    return -1;
  }
  return i;
};
