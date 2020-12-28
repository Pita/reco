export default `
{{#if ../inlinedLabel}}
  break {{{../inlinedLabel}}};
{{/if}}
{{#unless ../inlinedLabel}}
  return -1;
{{/unless}}
`;
