export default `
digraph G {
  start [shape=Mdiamond];
  
  {{#each fiberHandlers}}
    subgraph {{{functionName}}} {
      color=black;

      {{{functionName}}}_start [shape=rect];
      {{#each atoms}}
        {{{../functionName}}}_{{{@index}}}_{{{type}}};

        {{#if @first}}
          {{{../functionName}}}_start ->  {{{../functionName}}}_{{{@index}}}_{{{type}}};
        {{/if}}

        {{#nextItem ../atoms @index}} 
        {{{../../functionName}}}_{{{@index}}}_{{{../type}}} -> {{{../../functionName}}}_{{{nextIndex}}}_{{{type}}};
        {{/nextItem}}

        {{#if @last}}
          {{#unless ../lastAtomReturns}}
            {{{../functionName}}}_{{{@index}}}_{{{type}}} -> {{{../functionName}}}_end;
          {{/unless}}
        {{/if}}

        {{#switchCase 'type' 'lazyQuantifier'}}
          {{{../../functionName}}}_{{{@../index}}}_{{{../type}}} -> {{{wrappedHandler.functionName}}}_start [dir=both, label=wrappedHandler];
          {{{../../functionName}}}_{{{@../index}}}_{{{../type}}} -> {{{followUp.functionName}}}_start [label=followUp];
        {{/switchCase}}


      {{/each}}
      {{#unless lastAtomReturns}}
        {{{functionName}}}_end [shape=rect];

        {{#if followUp}}
          return {{{functionName}}}_end -> {{{followUp.functionName}}}_start;
        {{/if}}
      {{/unless}}
    }
  {{/each}}

  start -> {{{mainHandler.functionName}}}_start
}
`;
