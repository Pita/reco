
/**
  * This code was generated with RECO v0.1.0
  * A Regular Expression to Code Compiler
  * Visit: https://github.com/pita/reco
  * 
  * Generated from: '/[0-9]/i'
  * 
  * Use like this:
  * 
  * import { generatedRegexMatcher } from './THIS_FILE';
  * const result = generatedRegexMatcher(str);
  * console.log(result);
  * 
  * Outputs:
  * {
  *   index: 0, // position of the string that matched
  *   matches: [ 'foo', 'bar'] // groups that matched
  * }
  * or null in case there is no match
  * 
  */
"use strict";function generatedRegexMatcher(t){for(var n=t.length,e=0;e<n;e++){var r=function(e){var r=e;if(n<=r)return-1;e=t.charCodeAt(r);return e<=57&&48<=e?++r:-1}(e);if(-1!==r)return{index:e,matches:[t.substring(e,r)]}}return null}Object.defineProperty(exports,"__esModule",{value:!0}),exports.generatedRegexMatcher=generatedRegexMatcher;