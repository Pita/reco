export default `
let {{{returnVar}}} = -1;

{{{inlinedLabel}}}: {
  {{>atoms}}
  {{{returnVar}}} = i;
}
`;
