export default `
let {{{returnVarPrefix}}}{{{returnVarCounter}}} = -1;
const start{{{functionName}}} = i;
{{{functionName}}}: {
  let i = start{{{functionName}}};
  {{>atoms}}
  {{{returnVarPrefix}}}{{{returnVarCounter}}} = i;
}
`;
