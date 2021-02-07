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
    start -> {{{entryNode}}};
  {{/withEntryOf}}
  
  {{#each fiberHandlers}}
    subgraph cluster{{{functionName}}} {
      style=rounded;
      color=black;

      {{#each atoms}}
        #atom definition
        {{{../functionName}}}_{{{@index}}}_{{{type}}} [label=<{{raw}}<br /><font POINT-SIZE="7"><br />{{type}}</font>>];
      {{/each}}
    }
  {{/each}}

  {{#each greedyQuantifierHandlers}}
    # greedyQuantifier TODO: indicate counter
    {{{functionName}}} [label=<{{raw}}<br /><font POINT-SIZE="7"><br />greedyQuantifier</font>>];

    {{#if followUp.functionName}}
      # followUp
      {{#withEntryOf @root followUp.functionName}}
        {{{../functionName}}} -> {{{entryNode}}};
      {{/withEntryOf}}
    {{/if}}
    {{#if wrappedHandler.functionName}}
      # wrappedHandler
      {{#withEntryOf @root wrappedHandler.functionName}}
        {{{../functionName}}} -> {{{entryNode}}};
      {{/withEntryOf}}
      {{#withExitOf @root wrappedHandler.functionName}}
        {{{exitNode}}} -> {{{../functionName}}};
      {{/withExitOf}}
    {{/if}}
  {{/each}}

  {{#each lazyQuantifierHandlers}}
    # lazyQuantifier
    {{{functionName}}} [label=<{{raw}}<br /><font POINT-SIZE="7"><br />{{type}}</font>>];
  {{/each}}

  {{#each fiberHandlers}}
    {{#each atoms}}
      {{#nextItem ../atoms @index}}
        #nextItem
        {{{../../functionName}}}_{{{@index}}}_{{{../type}}} -> {{{../../functionName}}}_{{{nextIndex}}}_{{{type}}};
      {{/nextItem}}

      {{#if data.followUp.functionName}}
        # followUp
        {{#withEntryOf @root data.followUp.functionName}}
          {{{../../functionName}}}_{{{@index}}}_{{{../type}}} -> {{{entryNode}}};
        {{/withEntryOf}}
      {{/if}}
      {{#if data.wrappedHandler.functionName}}
        # wrappedHandler
        {{#withEntryOf @root data.wrappedHandler.functionName}}
          {{{../../functionName}}}_{{{@index}}}_{{{../type}}} -> {{{entryNode}}};
        {{/withEntryOf}}
        {{#withExitOf @root data.wrappedHandler.functionName}}
          {{{exitNode}}} -> {{{../../functionName}}}_{{{@index}}}_{{{../type}}};
        {{/withExitOf}}
      {{/if}}

      {{#switchCase 'type' 'quantifierStarter'}}
        # quantifierStarter
        {{{../../functionName}}}_{{{@index}}}_{{{../type}}} -> {{{functionName}}};
      {{/switchCase}}
    {{/each}}
    {{#unless lastAtomReturns}}
      {{#if followUp}}
        # function end follow up
        {{#withExitOf @root functionName}}
          {{{exitNode}}} ->
        {{/withExitOf}}
        {{#withEntryOf @root followUp.functionName}}
          {{{entryNode}}};
        {{/withEntryOf}}
      {{/if}}
    {{/unless}}
  {{/each}}

  end [shape=circle, style="filled" fillcolor="red"];

  {{#withExitOf @root mainHandler.returningFunctionName}}
    {{{exitNode}}} -> end;
  {{/withExitOf}}
}
`;
