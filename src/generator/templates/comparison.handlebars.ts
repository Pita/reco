export default `
{{#with comparison}}
  {{#switchCase 'true'}}
    true
  {{/switchCase}}
  {{#switchCase 'equalOneOfTwo'}}
    charCode{{{../atomIndex}}} === {{{comparisonValue1}}} || charCode{{{../atomIndex}}} === {{{comparisonValue2}}}
  {{/switchCase}}
  {{#switchCase 'equal'}}
    charCode{{{../atomIndex}}} === {{{comparisonValue}}}
  {{/switchCase}}
  {{#switchCase 'lessOrEqual'}}
    charCode{{{../atomIndex}}} <= {{{comparisonValue}}}
  {{/switchCase}}
  {{#switchCase 'moreOrEqual'}}
    charCode{{{../atomIndex}}} >= {{{comparisonValue}}}
  {{/switchCase}}
{{/with}}`;
