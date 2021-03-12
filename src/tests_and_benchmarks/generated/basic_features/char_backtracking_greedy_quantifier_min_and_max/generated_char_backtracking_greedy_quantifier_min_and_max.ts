// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(aa){3}/'
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

// Regex optimized to: /aaaa(aa)/

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

  // minCharsLeft
  const min = 0;
  const max = str.length - 6;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = atom0003(i, str, context);
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

/*
 * groupEndMarker
 * /aaaa(aa)/
 *         ^
 *
 * data:
 * {
 *   "groupReference": {
 *     "idx": 0
 *   }
 * }
 *
 * references:
 * {
 *   "nextAtom": null
 * }
 *
 */

const atom0000 = (i: number, str: string, context: Context): number => {
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;

  return i;
};
/*
 * charSequence
 * /aaaa(aa)/
 *       ^^
 *
 * data:
 * {
 *   "orderedLoading": null,
 *   "length": 2,
 *   "chars": [
 *     {
 *       "tree": {
 *         "type": "lastComparison",
 *         "comparison": {
 *           "type": "equal",
 *           "comparisonValue": 97
 *         }
 *       },
 *       "negate": false,
 *       "unicode": false,
 *       "unitsCount": "1",
 *       "averageComplexity": 1,
 *       "offset": 1,
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
 *   "nextAtom": "atom0000"
 * }
 *
 */

const atom0001 = (i: number, str: string, context: Context): number => {
  const iAfterMatch = i + 2;
  if (iAfterMatch > str.length) {
    return -1;
  }

  const charCode0 = str.charCodeAt(i + 1);

  let result0: boolean;

  result0 = charCode0 === 97;

  if (!result0) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i + 0);

  let result1: boolean;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }

  i = iAfterMatch;

  return atom0000(i, str, context);
};
/*
 * groupStartMarker
 * /aaaa(aa)/
 *      ^
 *
 * data:
 * {
 *   "groupReference": {
 *     "idx": 0
 *   }
 * }
 *
 * references:
 * {
 *   "nextAtom": "atom0001"
 * }
 *
 */

const atom0002 = (i: number, str: string, context: Context): number => {
  context.groupMarkerStartTemp0 = i;

  return atom0001(i, str, context);
};
/*
 * charSequence
 * /aaaa(aa)/
 *  ^^^^
 *
 * data:
 * {
 *   "orderedLoading": null,
 *   "length": 4,
 *   "chars": [
 *     {
 *       "tree": {
 *         "type": "lastComparison",
 *         "comparison": {
 *           "type": "equal",
 *           "comparisonValue": 97
 *         }
 *       },
 *       "negate": false,
 *       "unicode": false,
 *       "unitsCount": "1",
 *       "averageComplexity": 1,
 *       "offset": 3,
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
 *       "unicode": false,
 *       "unitsCount": "1",
 *       "averageComplexity": 1,
 *       "offset": 2,
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
 *       "unicode": false,
 *       "unitsCount": "1",
 *       "averageComplexity": 1,
 *       "offset": 1,
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
 *   "nextAtom": "atom0002"
 * }
 *
 */

const atom0003 = (i: number, str: string, context: Context): number => {
  const iAfterMatch = i + 4;
  if (iAfterMatch > str.length) {
    return -1;
  }

  const charCode0 = str.charCodeAt(i + 3);

  let result0: boolean;

  result0 = charCode0 === 97;

  if (!result0) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i + 2);

  let result1: boolean;

  result1 = charCode1 === 97;

  if (!result1) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i + 1);

  let result2: boolean;

  result2 = charCode2 === 97;

  if (!result2) {
    return -1;
  }
  const charCode3 = str.charCodeAt(i + 0);

  let result3: boolean;

  result3 = charCode3 === 97;

  if (!result3) {
    return -1;
  }

  i = iAfterMatch;

  return atom0002(i, str, context);
};
