// This code was generated with RECO vDEV
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
//
// Generated from: '/\Bfoo/'
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

// Regex optimized to: /\Bfoo/

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
  const max = str.length - 3;

  for (let i = min; i <= max; i++) {
    const posAfterMatch = atom0001(i, str, context);
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
 * /\Bfoo/
 *    ^^^
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
 *           "comparisonValue": 111
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
 *           "comparisonValue": 111
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
 *           "comparisonValue": 102
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
  const iAfterMatch = i + 3;
  if (iAfterMatch > str.length) {
    return -1;
  }

  const charCode0 = str.charCodeAt(i + 2);

  let result0: boolean;

  result0 = charCode0 === 111;

  if (!result0) {
    return -1;
  }
  const charCode1 = str.charCodeAt(i + 1);

  let result1: boolean;

  result1 = charCode1 === 111;

  if (!result1) {
    return -1;
  }
  const charCode2 = str.charCodeAt(i + 0);

  let result2: boolean;

  result2 = charCode2 === 102;

  if (!result2) {
    return -1;
  }

  i = iAfterMatch;

  return i;
};
/*
 * wordBoundary
 * /\Bfoo/
 *  ^^
 *
 * data:
 * {
 *   "negate": true
 * }
 *
 * references:
 * {
 *   "nextAtom": "atom0000"
 * }
 *
 */

const atom0001 = (i: number, str: string, context: Context): number => {
  if (i !== 0 && i !== str.length) {
    // TODO: find way to generate these trees
    const charCodeBefore1 = str.charCodeAt(i - 1);
    let isBeforeWord1 = false;
    if (charCodeBefore1 <= 90) {
      if (charCodeBefore1 <= 57) {
        isBeforeWord1 = charCodeBefore1 >= 48;
      } else {
        isBeforeWord1 = charCodeBefore1 >= 65;
      }
    } else {
      if (charCodeBefore1 === 95) {
        isBeforeWord1 = true;
      } else {
        if (charCodeBefore1 <= 122) {
          isBeforeWord1 = charCodeBefore1 >= 97;
        }
      }
    }

    const charCodeAfter1 = str.charCodeAt(i);
    let isAfterWord1 = false;
    if (charCodeAfter1 <= 90) {
      if (charCodeAfter1 <= 57) {
        isAfterWord1 = charCodeAfter1 >= 48;
      } else {
        isAfterWord1 = charCodeAfter1 >= 65;
      }
    } else {
      if (charCodeAfter1 === 95) {
        isAfterWord1 = true;
      } else {
        if (charCodeAfter1 <= 122) {
          isAfterWord1 = charCodeAfter1 >= 97;
        }
      }
    }

    if (isBeforeWord1 !== isAfterWord1) {
      return -1;
    }
  } else {
    return -1;
  }

  return atom0000(i, str, context);
};
