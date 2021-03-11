// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/(a{3}?)(a)/'
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
  groupMarkerStart1: number;
  groupMarkerStartTemp1: number;
  groupMarkerEnd1: number;

  /* TODO quantifierCounter
   */
}

// Regex optimized to: /(aaa)(a)/

export function generatedRegexMatcher(
  str: string
): {
  index: number;
  matches: [string | undefined, string | undefined, string | undefined];
} | null {
  const context: Context = {
    groupMarkerStart0: -1,
    groupMarkerStartTemp0: -1,
    groupMarkerEnd0: -1,
    groupMarkerStart1: -1,
    groupMarkerStartTemp1: -1,
    groupMarkerEnd1: -1,
    /* TODO quantifierCounter
     */
  };

  // fullScan
  const min = 0;
  const max = str.length;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = atom0005(i, str, context);
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
        ],
      };
    }
  }

  return null;
}

/*
 * groupEndMarker
 * /(aaa)(a)/
 *         ^
 *
 * data:
 * {
 *   "groupReference": {
 *     "idx": 1
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
  context.groupMarkerStart1 = context.groupMarkerStartTemp1;
  context.groupMarkerEnd1 = i;

  return i;
};
/*
 * charSequence
 * /(aaa)(a)/
 *        ^
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

  return atom0000(i, str, context);
};
/*
 * groupStartMarker
 * /(aaa)(a)/
 *       ^
 *
 * data:
 * {
 *   "groupReference": {
 *     "idx": 1
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
  context.groupMarkerStartTemp1 = i;

  return atom0001(i, str, context);
};
/*
 * groupEndMarker
 * /(aaa)(a)/
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
 *   "nextAtom": "atom0002"
 * }
 *
 */

const atom0003 = (i: number, str: string, context: Context): number => {
  context.groupMarkerStart0 = context.groupMarkerStartTemp0;
  context.groupMarkerEnd0 = i;

  return atom0002(i, str, context);
};
/*
 * charSequence
 * /(aaa)(a)/
 *   ^^^
 *
 * data:
 * {
 *   "orderedLoading": null,
 *   "length": 3,
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
 *   "nextAtom": "atom0003"
 * }
 *
 */

const atom0004 = (i: number, str: string, context: Context): number => {
  const iAfterMatch = i + 3;
  if (iAfterMatch > str.length) {
    return -1;
  }

  {
    const charCode0 = str.charCodeAt(i + 2);

    let result0: boolean;

    result0 = charCode0 === 97;

    if (!result0) {
      return -1;
    }
    const charCode1 = str.charCodeAt(i + 1);

    let result1: boolean;

    result1 = charCode1 === 97;

    if (!result1) {
      return -1;
    }
    const charCode2 = str.charCodeAt(i + 0);

    let result2: boolean;

    result2 = charCode2 === 97;

    if (!result2) {
      return -1;
    }

    i = iAfterMatch;
  }

  return atom0003(i, str, context);
};
/*
 * groupStartMarker
 * /(aaa)(a)/
 *  ^
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
 *   "nextAtom": "atom0004"
 * }
 *
 */

const atom0005 = (i: number, str: string, context: Context): number => {
  context.groupMarkerStartTemp0 = i;

  return atom0004(i, str, context);
};
