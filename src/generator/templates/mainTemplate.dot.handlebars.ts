export default `
digraph G {
  #ordering="in";
  concentrate=true;
  splines="ortho";

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
        {{#isAnyOf type 'disjunction' 'nonBacktrackingDisjunction'}}
          {{{../../functionName}}}_{{{@index}}}_{{{../type}}} [label={{{../type}}}];
        {{/isAnyOf}}
        {{#isNotAnyOf type 'disjunction' 'nonBacktrackingDisjunction'}}
          {{{../../functionName}}}_{{{@index}}}_{{{../type}}} [label=<{{../raw}}<br /><font POINT-SIZE="7"><br />{{../type}}</font>>
            {{#isAnyOf ../type 'lazyQuantifier' 'backtrackingFixedLengthQuantifier'}}
              , fillcolor=lightblue, style=filled
            {{/isAnyOf}}
          ];
        {{/isNotAnyOf}}
      {{/each}}
      {{#unless atoms}}
        {{{functionName}}}_0_empty [label=Empty];
      {{/unless}}
    }
  {{/each}}

  {{#each greedyQuantifierHandlers}}
    # greedyQuantifier TODO: indicate counter
    {{{functionName}}} [label=<{{raw}}<br /><font POINT-SIZE="7"><br />greedyQuantifier</font>>, fillcolor=lightblue, style=filled];

    {{#if followUp.functionName}}
      # greedy quantifier followUp
      {{#withEntryOf @root followUp.functionName}}
        {{{../functionName}}} -> {{{entryNode}}};
      {{/withEntryOf}}
    {{/if}}
    {{#if wrappedHandler.functionName}}
      # greedy quantifier wrappedHandler
      {{#withEntryOf @root wrappedHandler.functionName}}
        {{{../functionName}}} -> {{{entryNode}}};
      {{/withEntryOf}}
      {{#withExitOf @root wrappedHandler.functionName}}
        {{{exitNode}}} -> {{{../functionName}}};
      {{/withExitOf}}
    {{/if}}
  {{/each}}

  {{#each lazyQuantifierHandlers}}
    # lazyQuantifier TODO: indicate counter
    {{{functionName}}} [label=<{{raw}}<br /><font POINT-SIZE="7"><br />greedyQuantifier</font>>, fillcolor=lightblue, style=filled];

    {{#if followUp.functionName}}
      # lazy quantifier followUp
      {{#withEntryOf @root followUp.functionName}}
        {{{../functionName}}} -> {{{entryNode}}};
      {{/withEntryOf}}
    {{/if}}
    {{#if wrappedHandler.functionName}}
      # lazy quantifier wrappedHandler
      {{#withEntryOf @root wrappedHandler.functionName}}
        {{{../functionName}}} -> {{{entryNode}}};
      {{/withEntryOf}}
      {{#withExitOf @root wrappedHandler.functionName}}
        {{{exitNode}}} -> {{{../functionName}}};
      {{/withExitOf}}
    {{/if}}
  {{/each}}

  {{#each fiberHandlers}}
    {{#each atoms}}
      {{#nextItem ../atoms @index}}
        #nextItem
        {{{../../functionName}}}_{{{@index}}}_{{{../type}}} -> {{{../../functionName}}}_{{{nextIndex}}}_{{{type}}};
      {{/nextItem}}

      {{#if data.followUp.functionName}}
        # atom followUp
        {{#withEntryOf @root data.followUp.functionName}}
          {{{../../functionName}}}_{{{@index}}}_{{{../type}}} -> {{{entryNode}}};
        {{/withEntryOf}}
      {{/if}}
      {{#if data.wrappedHandler.functionName}}
        # atom wrappedHandler
        {{#withEntryOf @root data.wrappedHandler.functionName}}
          {{{../../functionName}}}_{{{@index}}}_{{{../type}}} -> {{{entryNode}}};
        {{/withEntryOf}}
        {{#withExitOf @root data.wrappedHandler.functionName}}
          {{{exitNode}}} -> {{{../../functionName}}}_{{{@index}}}_{{{../type}}};
        {{/withExitOf}}
      {{/if}}

      {{#if data.lookaroundFiber.functionName}}
        # lookaroundFiber
        {{#withEntryOf @root data.lookaroundFiber.functionName}}
          {{{../../functionName}}}_{{{@index}}}_{{{../type}}} -> {{{entryNode}}};
        {{/withEntryOf}}
        {{#withExitOf @root data.lookaroundFiber.functionName}}
          {{{exitNode}}} -> {{{../../functionName}}}_{{{@index}}}_{{{../type}}};
        {{/withExitOf}}
      {{/if}}

      {{#switchCase 'type' 'quantifierStarter'}}
        # quantifierStarter
        {{{../../functionName}}}_{{{@index}}}_{{{../type}}} -> {{{functionName}}};
      {{/switchCase}}

      {{#switchCase 'type' 'disjunction'}}
        {{#each alternativesWithQuickChecks}}
          # disjunction alternatives with quickcheck
          {{#withEntryOf @root alternative.functionName}}
            {{{../../../../functionName}}}_{{{@../index}}}_{{{../../../type}}} -> {{{entryNode}}};
          {{/withEntryOf}}
        {{/each}}
      {{/switchCase}}
      {{#switchCase 'type' 'nonBacktrackingDisjunction'}}
        {{#each alternativesWithQuickChecks}}
          # nonBacktrackingDisjunction alternatives with quickcheck
          {{#withEntryOf @root alternative.functionName}}
            {{{../../../../functionName}}}_{{{@../index}}}_{{{../../../type}}} -> {{{entryNode}}};
          {{/withEntryOf}}
          // TODO: there is a problem here, this sometimes does not exist
          {{#withExitOf @root alternative.returningFunctionName}}
            {{{exitNode}}} -> {{{../../../../functionName}}}_{{{@../index}}}_{{{../../../type}}};
          {{/withExitOf}}
        {{/each}}
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
