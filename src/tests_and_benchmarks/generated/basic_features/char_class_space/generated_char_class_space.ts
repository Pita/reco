// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/\s/'
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

// Regex optimized to: /\s/

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
 * /\s/
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
 *           "comparisonValue": 8202
 *         },
 *         "comparisonTrue": {
 *           "type": "comparison",
 *           "comparison": {
 *             "type": "lessOrEqual",
 *             "comparisonValue": 160
 *           },
 *           "comparisonTrue": {
 *             "type": "comparison",
 *             "comparison": {
 *               "type": "lessOrEqual",
 *               "comparisonValue": 32
 *             },
 *             "comparisonTrue": {
 *               "type": "comparison",
 *               "comparison": {
 *                 "type": "lessOrEqual",
 *                 "comparisonValue": 13
 *               },
 *               "comparisonTrue": {
 *                 "type": "lastComparison",
 *                 "comparison": {
 *                   "type": "moreOrEqual",
 *                   "comparisonValue": 9
 *                 }
 *               },
 *               "comparisonFalse": {
 *                 "type": "lastComparison",
 *                 "comparison": {
 *                   "type": "equal",
 *                   "comparisonValue": 32
 *                 }
 *               }
 *             },
 *             "comparisonFalse": {
 *               "type": "lastComparison",
 *               "comparison": {
 *                 "type": "equal",
 *                 "comparisonValue": 160
 *               }
 *             }
 *           },
 *           "comparisonFalse": {
 *             "type": "comparison",
 *             "comparison": {
 *               "type": "equal",
 *               "comparisonValue": 5760
 *             },
 *             "comparisonTrue": {
 *               "type": "lastComparison",
 *               "comparison": {
 *                 "type": "true"
 *               }
 *             },
 *             "comparisonFalse": {
 *               "type": "lastComparison",
 *               "comparison": {
 *                 "type": "moreOrEqual",
 *                 "comparisonValue": 8192
 *               }
 *             }
 *           }
 *         },
 *         "comparisonFalse": {
 *           "type": "comparison",
 *           "comparison": {
 *             "type": "lessOrEqual",
 *             "comparisonValue": 8287
 *           },
 *           "comparisonTrue": {
 *             "type": "comparison",
 *             "comparison": {
 *               "type": "lessOrEqual",
 *               "comparisonValue": 8239
 *             },
 *             "comparisonTrue": {
 *               "type": "comparison",
 *               "comparison": {
 *                 "type": "lessOrEqual",
 *                 "comparisonValue": 8233
 *               },
 *               "comparisonTrue": {
 *                 "type": "lastComparison",
 *                 "comparison": {
 *                   "type": "moreOrEqual",
 *                   "comparisonValue": 8232
 *                 }
 *               },
 *               "comparisonFalse": {
 *                 "type": "lastComparison",
 *                 "comparison": {
 *                   "type": "equal",
 *                   "comparisonValue": 8239
 *                 }
 *               }
 *             },
 *             "comparisonFalse": {
 *               "type": "lastComparison",
 *               "comparison": {
 *                 "type": "equal",
 *                 "comparisonValue": 8287
 *               }
 *             }
 *           },
 *           "comparisonFalse": {
 *             "type": "lastComparison",
 *             "comparison": {
 *               "type": "equalOneOfTwo",
 *               "comparisonValue1": 12288,
 *               "comparisonValue2": 65279
 *             }
 *           }
 *         }
 *       },
 *       "negate": false,
 *       "unicode": false,
 *       "unitsCount": "1",
 *       "averageComplexity": 4,
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

    if (charCode0 <= 8202) {
      if (charCode0 <= 160) {
        if (charCode0 <= 32) {
          if (charCode0 <= 13) {
            result0 = charCode0 >= 9;
          } else {
            result0 = charCode0 === 32;
          }
        } else {
          result0 = charCode0 === 160;
        }
      } else {
        if (charCode0 === 5760) {
          result0 = true;
        } else {
          result0 = charCode0 >= 8192;
        }
      }
    } else {
      if (charCode0 <= 8287) {
        if (charCode0 <= 8239) {
          if (charCode0 <= 8233) {
            result0 = charCode0 >= 8232;
          } else {
            result0 = charCode0 === 8239;
          }
        } else {
          result0 = charCode0 === 8287;
        }
      } else {
        result0 = charCode0 === 12288 || charCode0 === 65279;
      }
    }
    if (!result0) {
      return -1;
    }

    i = iAfterMatch;
  }

  return i;
};
