export default `
let {{{returnVar}}} = -1;

{{{functionName}}}: {
  {{>atoms}}
  {{{returnVar}}} = i;
}
`;
