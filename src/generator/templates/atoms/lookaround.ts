export default `
{{#switchCase 'type' 'lookaround'}}
  const lookaroundResult{{{@index}}} = {{{../references.lookaround}}}(i, str, context);
  {{#if negate}}
    if (lookaroundResult{{{@index}}} !== -1) { 
  {{/if}}
  {{#unless negate}}
    if (lookaroundResult{{{@index}}} === -1) { 
  {{/unless}}
    return -1;
  }
{{/switchCase}}`;
