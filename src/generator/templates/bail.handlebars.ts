export default `
{{#if inline}}
  break {{{functionName}}};
{{/if}}
{{#unless inline}}
  return -1;
{{/unless}}
`;
