export default `
{{#with comparison}}
  {{#switchCase 'type' 'true'}}
    true
  {{/switchCase}}
  {{#switchCase 'type' 'false'}}
    false
  {{/switchCase}}
  {{#switchCase 'type' 'equalOneOfTwo'}}
    charCode{{{../atomIndex}}} === {{{comparisonValue1}}} || charCode{{{../atomIndex}}} === {{{comparisonValue2}}}
  {{/switchCase}}
  {{#switchCase 'type' 'equal'}}
    charCode{{{../atomIndex}}} === {{{comparisonValue}}}
  {{/switchCase}}
  {{#switchCase 'type' 'lessOrEqual'}}
    charCode{{{../atomIndex}}} <= {{{comparisonValue}}}
  {{/switchCase}}
  {{#switchCase 'type' 'moreOrEqual'}}
    charCode{{{../atomIndex}}} >= {{{comparisonValue}}}
  {{/switchCase}}
{{/with}}`;
