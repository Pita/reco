export default `
{{#switchCase 'lastComparison'}}
  result{{{atomIndex}}} = {{>comparison atomIndex=atomIndex}}
{{/switchCase}}
{{#switchCase 'comparison'}}
  if ({{>comparison atomIndex=atomIndex}}) {
    {{>leaf comparisonTrue atomIndex=atomIndex}}
  }
  else {
    {{>leaf comparisonFalse atomIndex=atomIndex}}
  }
{{/switchCase}}`;
