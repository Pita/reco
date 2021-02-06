export default `
digraph G {
  #rankdir="LR";
  ordering="in";
  compound=true;

  graph [fontname = "helvetica"];
  node [fontname = "helvetica", shape=rect, style=rounded];
  edge [fontname = "helvetica"];

  start [shape=circle, style="filled" fillcolor="green"];
  {{#withEntryOf @root mainHandler.functionName}}
    start -> {{{functionName}}}_{{index}}_{{type}};
  {{/withEntryOf}}
  
  {{#each fiberHandlers}}
    subgraph cluster{{{functionName}}} {
      style=rounded;
      color=black;

      {{#each atoms}}
        #atom
        {{{../functionName}}}_{{{@index}}}_{{{type}}} [label=<{{raw}}<br /><font POINT-SIZE="7"><br />{{type}}</font>>];

        {{#nextItem ../atoms @index}}
          #nextItem
          {{{../../functionName}}}_{{{@index}}}_{{{../type}}} -> {{{../../functionName}}}_{{{nextIndex}}}_{{{type}}};
        {{/nextItem}}

        {{#if data.followUp.functionName}}
          # followUp
          {{#withEntryOf @root data.followUp.functionName}}
            {{{../../functionName}}}_{{{@../index}}}_{{{../type}}} -> {{{functionName}}}_{{index}}_{{type}};
          {{/withEntryOf}}
        {{/if}}
        {{#if data.wrappedHandler.functionName}}
          # wrappedHandler
          {{#withEntryOf @root data.wrappedHandler.functionName}}
            {{{../../functionName}}}_{{{@../index}}}_{{{../type}}} -> {{{functionName}}}_{{index}}_{{type}};
          {{/withEntryOf}}
          {{#withExitOf @root data.wrappedHandler.functionName}}
            {{{functionName}}}_{{index}}_{{type}} -> {{{../../functionName}}}_{{{@../index}}}_{{{../type}}};
          {{/withExitOf}}
        {{/if}}
      {{/each}}
      {{#unless lastAtomReturns}}
        {{#if followUp}}
          {{#withEntryOf @root functionName}}
            {{{functionName}}}_{{index}}_{{type}} ->
          {{/withEntryOf}}
          {{#withExitOf @root followUp.functionName}}
            {{{functionName}}}_{{index}}_{{type}};
          {{/withExitOf}}
        {{/if}}
      {{/unless}}
    }
  {{/each}}

  end [shape=circle, style="filled" fillcolor="red"];

  {{#withExitOf @root mainHandler.returningFunctionName}}
    {{{functionName}}}_{{index}}_{{type}} -> end;
  {{/withExitOf}}
}
`;
