// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/'
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

/* eslint prefer-const: 0 */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Context {
  groupMarkerStart0: number;
  groupMarkerStartTemp0: number;
  groupMarkerEnd0: number;
  groupMarkerStart1: number;
  groupMarkerStartTemp1: number;
  groupMarkerEnd1: number;
  groupMarkerStart2: number;
  groupMarkerStartTemp2: number;
  groupMarkerEnd2: number;
  groupMarkerStart3: number;
  groupMarkerStartTemp3: number;
  groupMarkerEnd3: number;
}

// Regex optimized to: /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/

export function generatedRegexMatcher(str: string) {
  const context: Context = {
    groupMarkerStart0: -1,
    groupMarkerStartTemp0: -1,
    groupMarkerEnd0: -1,
    groupMarkerStart1: -1,
    groupMarkerStartTemp1: -1,
    groupMarkerEnd1: -1,
    groupMarkerStart2: -1,
    groupMarkerStartTemp2: -1,
    groupMarkerEnd2: -1,
    groupMarkerStart3: -1,
    groupMarkerStartTemp3: -1,
    groupMarkerEnd3: -1,
  };

  // minCharsLeft
  const min = 0;
  const max = str.length - 6;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = fiber0001(i, str, context);
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [
          str.substring(i, posAfterMatch),
          context.groupMarkerEnd0 !== -1
            ? str.substring(context.groupMarkerStart0, context.groupMarkerEnd0)
            : undefined,
          context.groupMarkerEnd1 !== -1
            ? str.substring(context.groupMarkerStart1, context.groupMarkerEnd1)
            : undefined,
          context.groupMarkerEnd2 !== -1
            ? str.substring(context.groupMarkerStart2, context.groupMarkerEnd2)
            : undefined,
          context.groupMarkerEnd3 !== -1
            ? str.substring(context.groupMarkerStart3, context.groupMarkerEnd3)
            : undefined,
        ],
      };
    }
  }

  return null;
}

const fiber0005 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * /((1[0-2]|0?[1-9]):([...
   *           ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 48;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0004 = (i: number, str: string, context: Context): number => {
  /*
   * nonBacktrackingQuantifier
   * /((1[0-2]|0?[1-9]):([0...
   *           ^^
   */
  let matches0 = 0;
  while (true) {
    const wrappedResult = fiber0005(i, str, context);

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
   * charSequence
   * /((1[0-2]|0?[1-9]):([0-5][0...
   *             ^^^^^
   */
  const iAfterMatch1 = i + 1;
  if (iAfterMatch1 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 49;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch1;
  }
  return i;
};
const fiber0003 = (i: number, str: string, context: Context): number => {
  /*
   * charSequence
   * /((1[0-2]|0?[1-9]):...
   *    ^^^^^^
   */
  const iAfterMatch0 = i + 2;
  if (iAfterMatch0 > str.length) {
    return -1;
  }

  {
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    if (charCode1 <= 50) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch0;
  }
  return i;
};
const fiber0002 = (i: number, str: string, context: Context): number => {
  /*
   * charOrSet
   * ...0-5][0-9]) ?([AaPp][M...
   *              ^
   */
  if (i >= str.length) {
    return -1;
  }
  const charCode0 = str.charCodeAt(i);
  let result0: boolean;

  result0 = charCode0 === 32;

  if (!result0) {
    return -1;
  }
  i++;
  return i;
};
const fiber0001 = (i: number, str: string, context: Context): number => {
  /*
   * groupStartMarker
   * /((1[0-2]|0?...
   *  ^
   */
  context.groupMarkerStartTemp0 = i;
  /*
   * groupStartMarker
   * /((1[0-2]|0?[...
   *   ^
   */
  context.groupMarkerStartTemp1 = i;
  /*
   * nonBacktrackingDisjunction
   * /((1[0-2]|0?[1-9]):([0-5][0-...
   *   ^^^^^^^^^^^^^^^^
   */
  const firstCharQuickCheck2 = i < str.length ? str.charCodeAt(i) : 0;
  const secondCharQuickCheck2 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;

  const quickCheckValue2 = (firstCharQuickCheck2 << 16) ^ secondCharQuickCheck2;

  nonBacktrackingDisjunction2: {
    if ((quickCheckValue2 & 2147450876) === 3211312) {
      const length0 = fiber0003(i, str, context);
      if (length0 !== -1) {
        i = length0;
        break nonBacktrackingDisjunction2;
      }
    }
    if ((quickCheckValue2 & 2146467824) === 3145776) {
      const length1 = fiber0004(i, str, context);
      if (length1 !== -1) {
        i = length1;
        break nonBacktrackingDisjunction2;
      }
    }
    return -1;
  }
  /*
   * groupEndMarker
   * ...2]|0?[1-9]):([0-5][0-...
   *              ^
   */
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;
  /*
   * charSequence
   * ...]|0?[1-9]):([0-5][0-9...
   *              ^
   */
  const iAfterMatch4 = i + 1;
  if (iAfterMatch4 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 58;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch4;
  }
  /*
   * groupStartMarker
   * ...|0?[1-9]):([0-5][0-9]...
   *              ^
   */
  context.groupMarkerStartTemp2 = i;
  /*
   * charSequence
   * ...0?[1-9]):([0-5][0-9]) ?([AaPp]...
   *              ^^^^^^^^^^
   */
  const iAfterMatch6 = i + 2;
  if (iAfterMatch6 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    if (charCode0 <= 57) {
      result0 = charCode0 >= 48;
    } else {
      result0 = false;
    }
    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    if (charCode1 <= 53) {
      result1 = charCode1 >= 48;
    } else {
      result1 = false;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch6;
  }
  /*
   * groupEndMarker
   * ...[0-5][0-9]) ?([AaPp][...
   *              ^
   */
  context.groupMarkerStart2 = context.groupMarkerStartTemp2;
  context.groupMarkerEnd2 = i;
  /*
   * nonBacktrackingQuantifier
   * ...0-5][0-9]) ?([AaPp][Mm...
   *              ^^
   */
  let matches8 = 0;
  while (true) {
    const wrappedResult = fiber0002(i, str, context);

    if (wrappedResult === -1) {
      break;
    } else {
      i = wrappedResult;

      matches8++;

      if (matches8 === 1) {
        break;
      }
    }
  }
  /*
   * groupStartMarker
   * ...5][0-9]) ?([AaPp][Mm]))/
   *              ^
   */
  context.groupMarkerStartTemp3 = i;
  /*
   * charSequence
   * ...][0-9]) ?([AaPp][Mm]))/
   *              ^^^^^^^^^^
   */
  const iAfterMatch10 = i + 2;
  if (iAfterMatch10 > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 1);

    let result0: boolean;

    result0 = charCode0 === 77 || charCode0 === 109;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 0);

    let result1: boolean;

    if (charCode1 <= 80) {
      result1 = charCode1 === 65 || charCode1 === 80;
    } else {
      result1 = charCode1 === 97 || charCode1 === 112;
    }
    if (!result1) {
      return -1;
    }

    i = iAfterMatch10;
  }
  /*
   * groupEndMarker
   * ...[AaPp][Mm]))/
   *              ^
   */
  context.groupMarkerStart3 = context.groupMarkerStartTemp3;
  context.groupMarkerEnd3 = i;
  /*
   * groupEndMarker
   * ...AaPp][Mm]))/
   *              ^
   */
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;
  return i;
};
