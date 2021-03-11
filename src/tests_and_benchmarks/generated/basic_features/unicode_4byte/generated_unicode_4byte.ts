// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/\u{1f604}/u'
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
  /* TODO quantifierCounter
   */
}

// Regex optimized to: /\u{1f604}/u

export function generatedRegexMatcher(
  str: string
): {
  index: number;
  matches: [string | undefined];
} | null {
  const context: Context = {
    /* TODO quantifierCounter
     */
  };

  // fullScan
  const min = 0;
  const max = str.length;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = atom0000(i, str, context);
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [str.substring(i, posAfterMatch)],
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
    if (i + 1 >= str.length) {
      return -1;
    }

    const charCode0 = str.codePointAt(i)!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

    i += 2;

    let result0: boolean;

    result0 = charCode0 === 128516;

    if (!result0) {
      return -1;
    }
  }

  return i;
};
