export default `
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
`;
