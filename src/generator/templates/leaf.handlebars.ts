export default `
{{#switchCase 'lastComparison'}}
  result{{{atomIndex}}} = {{>comparison atomIndex=atomIndex}}
{{/switchCase}}
{{#switchCase 'comparison'}}
  if ({{>comparison atomIndex=atomIndex}}) {
    {{>leaf comparisonTrue atomIndex=atomIndex}}
  }
  {{#if comparisonFalse}}
    else {
      {{>leaf comparisonFalse atomIndex=atomIndex}}
    }
  {{/if}}
{{/switchCase}}`;
