// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/\w/'
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

// Regex optimized to: /\w/

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
 * /\w/
 *  ^^
 *
 * data:
 * {
 *   "orderedLoading": null,
 *   "length": 1,
 *   "chars": [
 *     {
 *       "tree": {
 *         "type": "comparison",
 *         "comparison": {
 *           "type": "lessOrEqual",
 *           "comparisonValue": 90
 *         },
 *         "comparisonTrue": {
 *           "type": "comparison",
 *           "comparison": {
 *             "type": "lessOrEqual",
 *             "comparisonValue": 57
 *           },
 *           "comparisonTrue": {
 *             "type": "lastComparison",
 *             "comparison": {
 *               "type": "moreOrEqual",
 *               "comparisonValue": 48
 *             }
 *           },
 *           "comparisonFalse": {
 *             "type": "lastComparison",
 *             "comparison": {
 *               "type": "moreOrEqual",
 *               "comparisonValue": 65
 *             }
 *           }
 *         },
 *         "comparisonFalse": {
 *           "type": "comparison",
 *           "comparison": {
 *             "type": "equal",
 *             "comparisonValue": 95
 *           },
 *           "comparisonTrue": {
 *             "type": "lastComparison",
 *             "comparison": {
 *               "type": "true"
 *             }
 *           },
 *           "comparisonFalse": {
 *             "type": "comparison",
 *             "comparison": {
 *               "type": "lessOrEqual",
 *               "comparisonValue": 122
 *             },
 *             "comparisonTrue": {
 *               "type": "lastComparison",
 *               "comparison": {
 *                 "type": "moreOrEqual",
 *                 "comparisonValue": 97
 *               }
 *             },
 *             "comparisonFalse": {
 *               "type": "lastComparison",
 *               "comparison": {
 *                 "type": "false"
 *               }
 *             }
 *           }
 *         }
 *       },
 *       "negate": false,
 *       "unicode": false,
 *       "unitsCount": "1",
 *       "averageComplexity": 3,
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

  {
    const charCode0 = str.charCodeAt(i + 0);

    let result0: boolean;

    if (charCode0 <= 90) {
      if (charCode0 <= 57) {
        result0 = charCode0 >= 48;
      } else {
        result0 = charCode0 >= 65;
      }
    } else {
      if (charCode0 === 95) {
        result0 = true;
      } else {
        if (charCode0 <= 122) {
          result0 = charCode0 >= 97;
        } else {
          result0 = false;
        }
      }
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch;
  }

  return i;
};
