// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(?:a)(b)c/'
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

/* eslint prefer-const: 0, functional/prefer-readonly-type: 0, functional/no-let: 0, functional/immutable-data: 0 */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Context {
  groupMarkerStart0: number;
  groupMarkerStartTemp0: number;
  groupMarkerEnd0: number;

  /* TODO quantifierCounter
   */
}

// Regex optimized to: /a(b)c/

export function generatedRegexMatcher(
  str: string
): {
  index: number;
  matches: [string | undefined, string | undefined];
} | null {
  const context: Context = {
    groupMarkerStart0: -1,
    groupMarkerStartTemp0: -1,
    groupMarkerEnd0: -1,
    /* TODO quantifierCounter
     */
  };

  // fullScan
  const min = 0;
  const max = str.length;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = atom0004(i, str, context);
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [
          str.substring(i, posAfterMatch),
          context.groupMarkerEnd0 !== -1
            ? str.substring(context.groupMarkerStart0, context.groupMarkerEnd0)
            : undefined,
        ],
      };
    }
  }

  return null;
}

const atom0000 = (i: number, str: string, context: Context): number => {
  const iAfterMatch = i + 1;
  if (iAfterMatch > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 99;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch;
  }

  return i;
};
const atom0001 = (i: number, str: string, context: Context): number => {
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;

  return atom0000(i, str, context);
};
const atom0002 = (i: number, str: string, context: Context): number => {
  const iAfterMatch = i + 1;
  if (iAfterMatch > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 98;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch;
  }

  return atom0001(i, str, context);
};
const atom0003 = (i: number, str: string, context: Context): number => {
  context.groupMarkerStartTemp0 = i;

  return atom0002(i, str, context);
};
const atom0004 = (i: number, str: string, context: Context): number => {
  const iAfterMatch = i + 1;
  if (iAfterMatch > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    result0 = charCode0 === 97;

    if (!result0) {
      return -1;
    }

    i = iAfterMatch;
  }

  return atom0003(i, str, context);
};
