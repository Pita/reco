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
  /*
  {{#times groupsLength}}
    groupMarkerStart{{{@this}}}: number;
    groupMarkerStartTemp{{{@this}}}: number;
    groupMarkerEnd{{{@this}}}: number;
  {{/times}}
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
    {{#times quantifierCountersLength}}
      quantifierCounter{{{@this}}}: -1, 
    {{/times}}
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
    const posAfterMatch = {{{entryTemplateAtom.functionName}}}(i, str, context);
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
  const {{{functionName}}} = (
    i: number,
    str: string,
    context: Context
  ): number => {
    {{#switchCase 'type' 'charSequence'}}
      const iAfterMatch = i + {{{length}}};
      if (iAfterMatch > str.length) {
        return -1;
      }

      {
        {{#if orderedLoading}}
          {{#each orderedLoading}}
            {{#switchCase 'unitsCount' '1' }}
              if (i >= str.length) {
                return -1;
              }
            {{/switchCase}}
            {{#switchCase 'unitsCount' '2' }}
              if (i + 1 >= str.length) {
                return -1;
              }
            {{/switchCase}}
            {{#switchCase 'unitsCount' 'variable' }}
              if (i >= str.length) {
                return -1;
              }
            {{/switchCase}}

            const charCode{{{@index}}} = 
              {{#if unicode}}
                str.codePointAt(i)!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
              {{/if}}
              {{#unless unicode}}
                str.charCodeAt(i);
              {{/unless}}

            {{#switchCase 'unitsCount' '1' }}
              i++;
            {{/switchCase}}
            {{#switchCase 'unitsCount' '2' }}
              i+=2;
            {{/switchCase}}
            {{#switchCase 'unitsCount' 'variable' }}
              i += charCode{{{@index}}} >= 0x10000 ? 2 : 1
            {{/switchCase}}
          {{/each}}

          {{#each chars}}
            {{#unless canBeSkipped}}
              let result{{{@index}}}: boolean;
              {{> leaf tree atomIndex=@index}}
              if({{#unless negate}}!{{/unless}}result{{{@index}}}) {
                return -1;
              };
            {{/unless}}
          {{/each}}
        {{/if}}
        {{#unless orderedLoading}}
          {{#each chars}}
            {{#unless canBeSkipped}}
              const charCode{{{@index}}} = str.charCodeAt(i + {{{offset}}});
              
              let result{{{@index}}}: boolean;
              {{> leaf tree atomIndex=@index}}
              if({{#unless negate}}!{{/unless}}result{{{@index}}}) {
                return -1;
              };
            {{/unless}}
          {{/each}}

          i = iAfterMatch;
        {{/unless}}
      }
    {{/switchCase}}

    {{#if references.nextAtom}}
      return {{{references.nextAtom}}}(str, i, context)
    {{/if}}
    {{#unless references.nextAtom}}
      return i;
    {{/unless}}
  } 
{{/each}}
`;
