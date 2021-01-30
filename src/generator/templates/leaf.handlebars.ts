export default `
{{#switchCase 'type' 'lastComparison'}}
  result{{{atomIndex}}} = {{>comparison atomIndex=atomIndex}}
{{/switchCase}}
{{#switchCase 'type' 'comparison'}}
  if ({{>comparison atomIndex=atomIndex}}) {
    {{>leaf comparisonTrue atomIndex=atomIndex}}
  }
  else {
    {{>leaf comparisonFalse atomIndex=atomIndex}}
  }
{{/switchCase}}`;
