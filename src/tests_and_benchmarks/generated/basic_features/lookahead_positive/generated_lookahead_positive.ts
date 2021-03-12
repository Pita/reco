// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/x(?=y)/'
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

// Regex optimized to: /x(?=y)/

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

  // minCharsLeft
  const min = 0;
  const max = str.length - 1;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = atom0002(i, str, context);
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [str.substring(i, posAfterMatch)],
      };
    }
  }

  return null;
}

/*
 * charSequence
 * /x(?=y)/
 *      ^
 *
 * data:
 * {
 *   "orderedLoading": null,
 *   "length": 1,
 *   "chars": [
 *     {
 *       "tree": {
 *         "type": "lastComparison",
 *         "comparison": {
 *           "type": "equal",
 *           "comparisonValue": 121
 *         }
 *       },
 *       "negate": false,
 *       "unicode": false,
 *       "unitsCount": "1",
 *       "averageComplexity": 1,
 *       "offset": 0,
 *       "canBeSkipped": false
 *     }
 *   ]
 * }
 *
 * references:
 * {
 *   "nextAtom": null
 * }
 *
 */

const atom0000 = (i: number, str: string, context: Context): number => {
  const iAfterMatch = i + 1;
  if (iAfterMatch > str.length) {
    return -1;
  }

  const charCode0 = str.charCodeAt(i + 0);

  let result0: boolean;

  result0 = charCode0 === 121;

  if (!result0) {
    return -1;
  }

  i = iAfterMatch;

  return i;
};
/*
 * lookaround
 * /x(?=y)/
 *   ^^^^^
 *
 * data:
 * {
 *   "negate": false
 * }
 *
 * references:
 * {
 *   "nextAtom": null,
 *   "lookaround": "atom0000"
 * }
 *
 */

const atom0001 = (i: number, str: string, context: Context): number => {
  const lookaroundResult1 = atom0000(i, str, context);
  if (lookaroundResult1 === -1) {
    return -1;
  }
  return i;
};
/*
 * charSequence
 * /x(?=y)/
 *  ^
 *
 * data:
 * {
 *   "orderedLoading": null,
 *   "length": 1,
 *   "chars": [
 *     {
 *       "tree": {
 *         "type": "lastComparison",
 *         "comparison": {
 *           "type": "equal",
 *           "comparisonValue": 120
 *         }
 *       },
 *       "negate": false,
 *       "unicode": false,
 *       "unitsCount": "1",
 *       "averageComplexity": 1,
 *       "offset": 0,
 *       "canBeSkipped": false
 *     }
 *   ]
 * }
 *
 * references:
 * {
 *   "nextAtom": "atom0001"
 * }
 *
 */

const atom0002 = (i: number, str: string, context: Context): number => {
  const iAfterMatch = i + 1;
  if (iAfterMatch > str.length) {
    return -1;
  }

  const charCode0 = str.charCodeAt(i + 0);

  let result0: boolean;

  result0 = charCode0 === 120;

  if (!result0) {
    return -1;
  }

  i = iAfterMatch;

  return atom0001(i, str, context);
};
