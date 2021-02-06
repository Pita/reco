export default `
digraph G {
  #rankdir="LR";
  ordering="in";
  compound=true;

  graph [fontname = "helvetica"];
  node [fontname = "helvetica", shape=rect, style=rounded];
  edge [fontname = "helvetica"];

  start [shape=circle, style="filled" fillcolor="green"];
  start -> {{{mainHandler.functionName}}}_start;
  
  {{#each fiberHandlers}}
    subgraph cluster{{{functionName}}} {
      style=rounded;
      color=black;

      {{{functionName}}}_start [shape=triangle, label="", style=solid];
      {{#each atoms}}
        {{{../functionName}}}_{{{@index}}}_{{{type}}} 
          [label=<{{raw}}<br /><font POINT-SIZE="7"><br />{{type}}</font>>];

        {{#if @first}}
          {{{../functionName}}}_start -> {{{../functionName}}}_{{{@index}}}_{{{type}}};
        {{/if}}

        {{#nextItem ../atoms @index}} 
        {{{../../functionName}}}_{{{@index}}}_{{{../type}}} -> {{{../../functionName}}}_{{{nextIndex}}}_{{{type}}};
        {{/nextItem}}

        {{#if @last}}
          {{#unless ../lastAtomReturns}}
            {{{../functionName}}}_{{{@index}}}_{{{type}}} -> {{{../functionName}}}_end;
          {{/unless}}
        {{/if}}

        {{#if data.followUp.functionName}}
          {{{../functionName}}}_{{{@index}}}_{{{type}}} -> {{{data.followUp.functionName}}}_start;
        {{/if}}
        {{#if data.wrappedHandler.functionName}}
          {{{../functionName}}}_{{{@index}}}_{{{type}}} -> {{{data.wrappedHandler.functionName}}}_start;
          {{{data.wrappedHandler.returningFunctionName}}}_end -> {{{../functionName}}}_{{{@index}}}_{{{type}}};
        {{/if}}
      {{/each}}
      {{#unless lastAtomReturns}}
        {{{functionName}}}_end [shape=invtriangle, label="", style=solid];

        {{#if followUp}}
          return {{{functionName}}}_end -> {{{followUp.functionName}}}_start;
        {{/if}}
      {{/unless}}

    }
  {{/each}}

  end [shape=circle, style="filled" fillcolor="red"];
  {{{mainHandler.returningFunctionName}}}_end -> end;
}
`;
