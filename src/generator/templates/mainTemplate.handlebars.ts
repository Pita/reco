import charSequence from './atoms/charSequence';
import groupStartMarker from './atoms/groupStartMarker';
import groupEndMarker from './atoms/groupEndMarker';
import endAnchor from './atoms/endAnchor';
import startAnchor from './atoms/startAnchor';
import wordBoundary from './atoms/wordBoundary';
import multiLineStartAnchor from './atoms/multiLineStartAnchor';
import multiLineEndAnchor from './atoms/multiLineEndAnchor';
import backreference from './atoms/backReference';
import lookaround from './atoms/lookaround';

export default `
// This code was generated with RECO v{{{version}}}
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
// 
// Generated from: '{{{originalRegexStr}}}'
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
  {{#times groupsLength}}
    groupMarkerStart{{{@this}}}: number;
    groupMarkerStartTemp{{{@this}}}: number;
    groupMarkerEnd{{{@this}}}: number;
  {{/times}}
  
  /* TODO quantifierCounter
  {{#times quantifierCountersLength}}
    quantifierCounter{{{@this}}}: number;
  {{/times}}
  */
}

// Regex optimized to: {{{optimizedRegexStr}}}

export function generatedRegexMatcher(str: string): {
  index: number,
  matches: [
    string | undefined,
    {{#times groupsLength}}
      string | undefined,
    {{/times}}
  ],
} | null {
  const context: Context = {
    {{#times groupsLength}}
      groupMarkerStart{{{@this}}}: -1,
      groupMarkerStartTemp{{{@this}}}: -1,
      groupMarkerEnd{{{@this}}}: -1,
    {{/times}}
    /* TODO quantifierCounter
    {{#times quantifierCountersLength}}
      quantifierCounter{{{@this}}}: -1, 
    {{/times}} 
    */
  };

  {{#with matchPositioning}}
    {{#switchCase 'type' 'startAnchored'}}
      // startAnchored
      const min = 0;
      const max = 0;
    {{/switchCase}}
    {{#switchCase 'type' 'endAnchored'}}
      // endAnchored
      const min = Math.max(str.length - {{{maxCharsLeft}}}, 0);
      const max = str.length - {{{minCharsLeft}}};
    {{/switchCase}}
    {{#switchCase 'type' 'minCharsLeft'}}
      // minCharsLeft
      const min = 0;
      const max = str.length - {{{minCharsLeft}}};
    {{/switchCase}}
    {{#switchCase 'type' 'fullScan'}}
      // fullScan
      const min = 0;
      const max = str.length;
    {{/switchCase}}
  {{/with}}

  for (let i = min; i <= max; i++) {
    const posAfterMatch = {{{entryFunctionName}}}(i, str, context);
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [
          str.substring(i, posAfterMatch),
          {{#times groupsLength}}
            context.groupMarkerEnd{{{@this}}} !== -1
              ? str.substring(context.groupMarkerStart{{{@this}}}, context.groupMarkerEnd{{{@this}}})
              : undefined,
          {{/times}}
        ]
      }
    }
  }

  return null;
};

{{#each templateAtoms}}
   /*
    * {{{type}}}
    * {{escapeComment posLine1}}
    * {{{posLine2}}}
    * 
    {{stringifyComment 'data' data}}
    *
    {{stringifyComment 'references' references}}
    * 
    */

  const {{{functionName}}} = (
    i: number,
    str: string,
    context: Context
  ): number => {
    ${charSequence}
    ${groupStartMarker}
    ${groupEndMarker}
    ${endAnchor}
    ${startAnchor}
    ${wordBoundary}
    ${multiLineStartAnchor}
    ${multiLineEndAnchor}
    ${backreference}
    ${lookaround}
    {{#if references.nextAtom}}
      return {{{references.nextAtom}}}(i, str, context)
    {{/if}}
    {{#unless references.nextAtom}}
      return i;
    {{/unless}}
  } 
{{/each}}
`;
