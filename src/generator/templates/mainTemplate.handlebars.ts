export default `
// This code was generated with RECO v{{{version}}}
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
// 
// Generated from: '{{{regexStr}}}'
// 
// Use like this:
// 
// import { generatedRegexMatcher } from './THIS_FILE';
// const result = generatedRegexMatcher(str);
// console.log(result);
// 
// Outputs:
// {
//   index: 0, // position of the string that matched
//   matches: [ 'foo', 'bar'] // groups that matched
// }
// or null in case there is no match

type GroupMarkers = [
  {{#each groups}}
    number, number,
  {{/each}}
];

type TempGroupMarkers = [
  {{#each groups}}
    number, 
  {{/each}}
];

type QuantifierCounters = [
  {{#times quantifierCountersLength}}
    number, 
  {{/times}}
]

export function generatedRegexMatcher(str: string) {
  const groupMarkers: GroupMarkers = [
    {{#each groups}}
      -1, -1,
    {{/each}}
  ];
  const tempGroupStartMarkers: TempGroupMarkers = [
    {{#each groups}}
      -1,
    {{/each}}
  ];
  const quantifierCounters: QuantifierCounters = [
    {{#times quantifierCountersLength}}
      -1, 
    {{/times}}
  ]

  for (let i = 0; i < str.length; i++) {
    const posAfterMatch = {{{mainHandler.functionName}}}(i, str, groupMarkers, tempGroupStartMarkers, quantifierCounters);
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [
          str.substring(i, posAfterMatch),
          {{#each groups}}
            groupMarkers[{{groupEndArrayIndex @this}}] !== -1
              ? str.substring(groupMarkers[{{groupStartArrayIndex @this}}], groupMarkers[{{groupEndArrayIndex @this}}])
              : undefined,
          {{/each}}
        ]
      }
    }
  }

  return null;
};

{{#each fiberHandlers}}
  const {{{functionName}}} = (
    start: number,
    str: string,
    groupMarkers: GroupMarkers,
    tempGroupStartMarkers: TempGroupMarkers,
    quantifierCounters: QuantifierCounters,
  ): number => {
    let i = start;
    {{> atoms}}
    {{#unless lastAtomReturns}}
      {{#if followUp}}
        return {{{followUp.functionName}}}(i, str, groupMarkers, tempGroupStartMarkers, quantifierCounters);
      {{/if}}
      {{#unless followUp}}
        return i;
      {{/unless}}
    {{/unless}}
  }
{{/each}}

{{#each lazyQuantifierHandlers}}
    /*
    * {{escapeComment posLine1}}
    * {{{posLine2}}}
    */
  const {{{functionName}}} = (
    start: number,
    str: string,
    groupMarkers: GroupMarkers,
    tempGroupStartMarkers: TempGroupMarkers,
    quantifierCounters: QuantifierCounters,
  ): number => {
    {{#unless followUp}}
      return start;
    {{/unless}}
    {{#if followUp}}
      {{#if maxOrMinCount}}
        quantifierCounters[{{{quantifierCounterIndex}}}]++;
      {{/if}}

      {{#if minCount}}
        if (quantifierCounters[{{{quantifierCounterIndex}}}] >= {{{minCount}}}) {
      {{/if}}
        {{#each followUp.meta.groups}}
          const groupMarkerCopy{{{groupStartArrayIndex @this}}} = groupMarkers[{{groupStartArrayIndex @this}}];
          const groupMarkerCopy{{{groupEndArrayIndex @this}}} = groupMarkers[{{groupEndArrayIndex @this}}];
        {{/each}}
        const followUpResult = {{{followUp.functionName}}}(
          start, 
          str, 
          groupMarkers, 
          tempGroupStartMarkers,
          quantifierCounters,
        );
        if (followUpResult === -1) {
          {{#each followUp.meta.groups}}
            groupMarkers[{{groupStartArrayIndex @this}}] = groupMarkerCopy{{{groupStartArrayIndex @this}}};
            groupMarkers[{{groupEndArrayIndex @this}}] = groupMarkerCopy{{{groupEndArrayIndex @this}}};
          {{/each}}
        } else {
          return followUpResult;
        }

      {{#if minCount}}
        }
      {{/if}}
      
      {{#if maxCount}}
        if (quantifierCounters[{{{quantifierCounterIndex}}}] < {{{maxCount}}}) {
      {{/if}}
        {{#each wrappedHandler.meta.groups}}
          const groupMarkerCopy{{{groupStartArrayIndex @this}}} = groupMarkers[{{groupStartArrayIndex @this}}];
          const groupMarkerCopy{{{groupEndArrayIndex @this}}} = groupMarkers[{{groupEndArrayIndex @this}}];
        {{/each}}
        const tryDeeperResult = {{{wrappedHandler.functionName}}}(start, str, groupMarkers, tempGroupStartMarkers, quantifierCounters);
        if (tryDeeperResult !== -1) {
          // we actually were able to go deeper, nice!
          return tryDeeperResult;
        }
        {{#each wrappedHandler.meta.groups}}
          groupMarkers[{{groupStartArrayIndex @this}}] = groupMarkerCopy{{{groupStartArrayIndex @this}}};
          groupMarkers[{{groupEndArrayIndex @this}}] = groupMarkerCopy{{{groupEndArrayIndex @this}}};
        {{/each}}
      {{#if maxCount}}
        }
      {{/if}}

      {{#if maxOrMinCount}}
        quantifierCounters[{{{quantifierCounterIndex}}}]--;
      {{/if}}
      return -1;
    {{/if}}
  }
{{/each}}

{{#each greedyQuantifierHandlers}}
    /*
    * {{escapeComment posLine1}}
    * {{{posLine2}}}
    */
  const {{{functionName}}} = (
    start: number,
    str: string,
    groupMarkers: GroupMarkers,
    tempGroupStartMarkers: TempGroupMarkers,
    quantifierCounters: QuantifierCounters,
  ): number => {
    {{#if maxOrMinCount}}
      quantifierCounters[{{{quantifierCounterIndex}}}]++;
    {{/if}}

    {{#if maxCount}}
      if (quantifierCounters[{{{quantifierCounterIndex}}}] === {{{maxCount}}}) {
        {{#if followUp}}
          return {{{followUp.functionName}}}(
            start,
            str, 
            groupMarkers, 
            tempGroupStartMarkers,
            quantifierCounters
          );
        {{/if}}
        {{#unless followUp}}
          return start;
        {{/unless}}
      }
    {{/if}}

    {{#each wrappedHandler.meta.groups}}
      const groupMarkerCopy{{{groupStartArrayIndex @this}}} = groupMarkers[{{groupStartArrayIndex @this}}];
      const groupMarkerCopy{{{groupEndArrayIndex @this}}} = groupMarkers[{{groupEndArrayIndex @this}}];
    {{/each}}
    const tryDeeperResult = {{{wrappedHandler.functionName}}}(start, str, groupMarkers, tempGroupStartMarkers, quantifierCounters);
    if (tryDeeperResult !== -1) {
      // we actually were able to go deeper, nice!
      return tryDeeperResult;
    } 

    // recursion failed, reset groups
    {{#each wrappedHandler.meta.groups}}
      groupMarkers[{{groupStartArrayIndex @this}}] = groupMarkerCopy{{{groupStartArrayIndex @this}}};
      groupMarkers[{{groupEndArrayIndex @this}}] = groupMarkerCopy{{{groupEndArrayIndex @this}}};
    {{/each}}

    {{#if minCount}}
      if (quantifierCounters[{{{quantifierCounterIndex}}}] < {{{minCount}}}) {
        quantifierCounters[{{{quantifierCounterIndex}}}]--;
        return -1;
      }
    {{/if}}

    {{#if followUp}}
      {{#each followUp.meta.groups}}
        const groupMarkerCopy{{{groupStartArrayIndex @this}}} = groupMarkers[{{groupStartArrayIndex @this}}];
        const groupMarkerCopy{{{groupEndArrayIndex @this}}} = groupMarkers[{{groupEndArrayIndex @this}}];
      {{/each}}

      const followUpResult = {{{followUp.functionName}}}(
        start,
        str, 
        groupMarkers, 
        tempGroupStartMarkers,
        quantifierCounters,
      );

      if (followUpResult === -1) {
        {{#each followUp.meta.groups}}
          groupMarkers[{{groupStartArrayIndex @this}}] = groupMarkerCopy{{{groupStartArrayIndex @this}}};
          groupMarkers[{{groupEndArrayIndex @this}}] = groupMarkerCopy{{{groupEndArrayIndex @this}}};
        {{/each}}
        {{#if maxOrMinCount}}
          quantifierCounters[{{{quantifierCounterIndex}}}]--;
        {{/if}}
      }
      return followUpResult;
    {{/if}}
    {{#unless followUp}}
      return start;
    {{/unless}}
  }
{{/each}}`;
