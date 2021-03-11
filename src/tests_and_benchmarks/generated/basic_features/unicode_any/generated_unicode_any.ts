// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/.a/u'
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

// Regex optimized to: /.a/u

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

/*
 * charSequence
 * /.a/u
 *  ^^
 *
 * data:
 * {
 *   "orderedLoading": [
 *     {
 *       "unitsCount": "variable",
 *       "unicode": true
 *     },
 *     {
 *       "unitsCount": "1",
 *       "unicode": true
 *     }
 *   ],
 *   "length": 2,
 *   "chars": [
 *     {
 *       "tree": {
 *         "type": "comparison",
 *         "comparison": {
 *           "type": "lessOrEqual",
 *           "comparisonValue": 13
 *         },
 *         "comparisonTrue": {
 *           "type": "lastComparison",
 *           "comparison": {
 *             "type": "equalOneOfTwo",
 *             "comparisonValue1": 10,
 *             "comparisonValue2": 13
 *           }
 *         },
 *         "comparisonFalse": {
 *           "type": "comparison",
 *           "comparison": {
 *             "type": "lessOrEqual",
 *             "comparisonValue": 8233
 *           },
 *           "comparisonTrue": {
 *             "type": "lastComparison",
 *             "comparison": {
 *               "type": "moreOrEqual",
 *               "comparisonValue": 8232
 *             }
 *           },
 *           "comparisonFalse": {
 *             "type": "lastComparison",
 *             "comparison": {
 *               "type": "false"
 *             }
 *           }
 *         }
 *       },
 *       "negate": true,
 *       "unicode": true,
 *       "unitsCount": "variable",
 *       "averageComplexity": 2.25,
 *       "offset": 0,
 *       "canBeSkipped": false
 *     },
 *     {
 *       "tree": {
 *         "type": "lastComparison",
 *         "comparison": {
 *           "type": "equal",
 *           "comparisonValue": 97
 *         }
 *       },
 *       "negate": false,
 *       "unicode": true,
 *       "unitsCount": "1",
 *       "averageComplexity": 1,
 *       "offset": 1,
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
  const iAfterMatch = i + 2;
  if (iAfterMatch > str.length) {
    return -1;
  }

  {
    if (i >= str.length) {
      return -1;
    }

    const charCode0 = str.codePointAt(i)!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

    i += charCode0 >= 0x10000 ? 2 : 1;
    if (i >= str.length) {
      return -1;
    }

    const charCode1 = str.codePointAt(i)!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

    i++;

    let result0: boolean;

    if (charCode0 <= 13) {
      result0 = charCode0 === 10 || charCode0 === 13;
    } else {
      if (charCode0 <= 8233) {
        result0 = charCode0 >= 8232;
      } else {
        result0 = false;
      }
    }
    if (result0) {
      return -1;
    }
    let result1: boolean;

    result1 = charCode1 === 97;

    if (!result1) {
      return -1;
    }
  }

  return i;
};
