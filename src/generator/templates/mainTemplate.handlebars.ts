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
    {{#each atoms}}
      /*
        * {{{type}}}
        * {{escapeComment posLine1}}
        * {{{posLine2}}}
        */
      {{#switchCase 'charOrSet'}}
        if (i >= str.length) {
          return -1;
        }
        const charCode{{{@index}}} =
        {{#if unicode}}
          str.codePointAt(i)!;
        {{/if}}
        {{#unless unicode}}
          str.charCodeAt(i);
        {{/unless}}
        let result{{{@index}}} = false;
        {{> leaf tree atomIndex=@index}}
        if({{#unless negate}}!{{/unless}}result{{{@index}}}) {
          return -1;
        };
        {{#if unicode}}
          // surrogate pair might require moving 2 chars ahead
          i += charCode{{{@index}}} >= 0x10000 ? 2 : 1
        {{/if}}
        {{#unless unicode}}
          i++;
        {{/unless}}
      {{/switchCase}}
      {{#switchCase 'charOrSetBackward'}}
        {{#if unicode}}
          let isSurrogatePair{{{@index}}} = false;
          if (i >= 2) {
            const charCodeBefore{{{@index}}} = str.charCodeAt(i - 2);
            if (charCodeBefore{{{@index}}} >= 0xD800 && charCodeBefore{{{@index}}} <= 0xDBFF) {
              isSurrogatePair{{{@index}}} = true;
            }
          } 
          i -= isSurrogatePair{{{@index}}} ? 2 : 1;
        {{/if}}
        {{#unless unicode}}
          i--;
        {{/unless}}
        if (i < 0) {
          return -1;
        }
        const charCode{{{@index}}} =
          {{#if unicode}}
            str.codePointAt(i);
          {{/if}}
          {{#unless unicode}}
            str.charCodeAt(i);
          {{/unless}}
        let result{{{@index}}} = false;
        {{> leaf tree atomIndex=@index}}
        if({{#unless negate}}!{{/unless}}result{{{@index}}}) {
          return -1;
        };
      {{/switchCase}}
      {{#switchCase 'disjunction'}}
        {{#each groupsToRestore}}
          const groupMarkerCopy{{{groupStartArrayIndex @this}}} = groupMarkers[{{groupStartArrayIndex @this}}];
          const groupMarkerCopy{{{groupEndArrayIndex @this}}} = groupMarkers[{{groupEndArrayIndex @this}}];
        {{/each}}
        {{#each alternatives}}            
          const length{{{@index}}} = {{{functionName}}}(i, str, groupMarkers, tempGroupStartMarkers, quantifierCounters);
          if (length{{{@index}}} !== -1) {
            return length{{{@index}}};
          }
          {{#each meta.groups}}
            groupMarkers[{{groupStartArrayIndex @this}}] = groupMarkerCopy{{{groupStartArrayIndex @this}}};
            groupMarkers[{{groupEndArrayIndex @this}}] = groupMarkerCopy{{{groupEndArrayIndex @this}}};
          {{/each}}
        {{/each}}
        return -1;
      {{/switchCase}}
      {{#switchCase 'startAnchor'}}
        if (i !== 0) {
          return -1;
        }
      {{/switchCase}}
      {{#switchCase 'endAnchor'}}
        if (i !== str.length) {
          return -1;
        }
      {{/switchCase}}
      {{#switchCase 'multiLineStartAnchor'}}
        if (i !== 0) {
          const charCodeMultiLineStartAnchor{{{index}}} = str.charCodeAt(i - 1);
          let isNewLineChar{{{index}}} = false;
          // TODO: find way to generate these trees
          if (charCodeMultiLineStartAnchor{{{index}}} <= 13) {
            isNewLineChar{{{index}}} = charCodeMultiLineStartAnchor{{{index}}} === 10 || charCodeMultiLineStartAnchor{{{index}}} === 13;
          } else {
            if (charCodeMultiLineStartAnchor{{{index}}} <= 8233) {
              isNewLineChar{{{index}}} = charCodeMultiLineStartAnchor{{{index}}} >= 8232;
            }
          }
          if (!isNewLineChar{{{index}}}) {
            return -1;
          }
        }

      {{/switchCase}}
      {{#switchCase 'multiLineEndAnchor'}}
        if (i !== str.length) {
          const charCodeMultiLineEndAnchor{{{index}}} = str.charCodeAt(i);
          let isNewLineChar{{{index}}} = false;
          // TODO: find way to generate these trees
          if (charCodeMultiLineEndAnchor{{{index}}} <= 13) {
            isNewLineChar{{{index}}} = charCodeMultiLineEndAnchor{{{index}}} === 10 || charCodeMultiLineEndAnchor{{{index}}} === 13;
          } else {
            if (charCodeMultiLineEndAnchor{{{index}}} <= 8233) {
              isNewLineChar{{{index}}} = charCodeMultiLineEndAnchor{{{index}}} >= 8232;
            }
          }
          if (!isNewLineChar{{{index}}}) {
            return -1;
          }
        }
      {{/switchCase}}
      {{#switchCase 'groupStartMarker'}}
        tempGroupStartMarkers[{{{groupReference.idx}}}] = i;
      {{/switchCase}}
      {{#switchCase 'groupEndMarker'}}
        groupMarkers[{{groupStartArrayIndex groupReference}}] = tempGroupStartMarkers[{{{groupReference.idx}}}];
        groupMarkers[{{groupEndArrayIndex groupReference}}] = i;
      {{/switchCase}}
      {{#switchCase 'lookaround'}}
        const lookaroundResult{{{@index}}} = {{{lookaroundFiber.functionName}}}(i, str, groupMarkers, tempGroupStartMarkers, quantifierCounters);
        {{#if negate}}
          if (lookaroundResult{{{@index}}} !== -1) { 
        {{/if}}
        {{#unless negate}}
          if (lookaroundResult{{{@index}}} === -1) { 
        {{/unless}}
          return -1;
        }
      {{/switchCase}}
      {{#switchCase 'nonBacktrackingQuantifier'}}
        {{#if maxOrMinCount}}
          let matches{{{@index}}} = 0;
        {{/if}}
        while(true) {
          const wrappedResult = {{{wrappedHandler.functionName}}}(i, str, groupMarkers, tempGroupStartMarkers, quantifierCounters);

          if (wrappedResult === -1) {
            {{#if minCount}}
              if (matches{{{@index}}} < {{{minCount}}}) {
                return -1;
              }
            {{/if}}

            break;
          } else {
            i = wrappedResult;

            {{#if maxOrMinCount}}
              matches{{{@index}}}++;
            {{/if}}

            {{#if maxCount}}
              if (matches{{{@index}}} === {{{maxCount}}}) {
                break;
              }
            {{/if}}
          }
        }
      {{/switchCase}}
      {{#switchCase 'backtrackingFixedLengthQuantifier'}}
        let matches{{{@index}}} = 0;

        while(true) {
          const wrappedResult = {{{wrappedHandler.functionName}}}(i, str, groupMarkers, tempGroupStartMarkers, quantifierCounters);

          if (wrappedResult === -1) {
            {{#if minCount}}
              if (matches{{{@index}}} < {{{minCount}}}) {
                return -1;
              }
            {{/if}}

            break;
          } else {
            i = wrappedResult;
            matches{{{@index}}}++;

            {{#if maxCount}}
              if (matches{{{@index}}} === {{{maxCount}}}) {
                break;
              }
            {{/if}}
          }
        }

        // needs followUp & forkingFiber
        {{#unless followUp}}
          return i;
        {{/unless}}
        {{#if followUp}}
          {{#if minCount}}
            while(matches{{{@index}}} >= {{{minCount}}}) {
          {{/if}}
          {{#unless minCount}}
            while(matches{{{@index}}} >= 0) {
          {{/unless}}
              const directFollowUpResult{{{@index}}} = {{{followUp.functionName}}}(i, str, groupMarkers, tempGroupStartMarkers, quantifierCounters);

              if (directFollowUpResult{{{@index}}} !== -1) {
                return directFollowUpResult{{{@index}}};
              }

              matches{{{@index}}}--;
              i-={{{fixedLength}}};
            }

            return -1;
        {{/if}}
      {{/switchCase}}
      {{#switchCase 'wordBoundary'}}
        if (i !== 0 && i !== str.length) {
          // TODO: find way to generate these trees
          const charCodeBefore{{{@index}}} = str.charCodeAt(i-1);
          let isBeforeWord{{{@index}}} = false;
          if (charCodeBefore{{{@index}}} <= 90) {
            if (charCodeBefore{{{@index}}} <= 57) {
              isBeforeWord{{{@index}}} = charCodeBefore{{{@index}}} >= 48;
            } else {
              isBeforeWord{{{@index}}} = charCodeBefore{{{@index}}} >= 65;
            }
          } else {
            if (charCodeBefore{{{@index}}} === 95) {
              isBeforeWord{{{@index}}} = true;
            } else {
              if (charCodeBefore{{{@index}}} <= 122) {
                isBeforeWord{{{@index}}} = charCodeBefore{{{@index}}} >= 97;
              }
            }
          }

          const charCodeAfter{{{@index}}} = str.charCodeAt(i);
          let isAfterWord{{{@index}}} = false;
          if (charCodeAfter{{{@index}}} <= 90) {
            if (charCodeAfter{{{@index}}} <= 57) {
              isAfterWord{{{@index}}} = charCodeAfter{{{@index}}} >= 48;
            } else {
              isAfterWord{{{@index}}} = charCodeAfter{{{@index}}} >= 65;
            }
          } else {
            if (charCodeAfter{{{@index}}} === 95) {
              isAfterWord{{{@index}}} = true;
            } else {
              if (charCodeAfter{{{@index}}} <= 122) {
                isAfterWord{{{@index}}} = charCodeAfter{{{@index}}} >= 97;
              }
            }
          }

          {{#if negate}}
            if (isBeforeWord{{{@index}}} !== isAfterWord{{{@index}}}) {
              return -1;
            }
          {{/if}}
          {{#unless negate}}
            if (isBeforeWord{{{@index}}} === isAfterWord{{{@index}}}) {
              return -1;
            }
          {{/unless}}
        }
        {{#if negate}}
        else {
          return -1;
        }
        {{/if}}
      {{/switchCase}}
      {{#switchCase 'groupBackReference'}}
      if ({{{endGroupMarkerIndex}}} < groupMarkers.length) {
        let backReferenceI{{{index}}} = groupMarkers[{{{startGroupMarkerIndex}}}];
        const backReferenceEnd{{{index}}} = groupMarkers[{{{endGroupMarkerIndex}}}];
        while(backReferenceI{{{index}}} < backReferenceEnd{{{index}}}) {
          if (i >= str.length) {
            return -1;
          }

          const backReferenceCharCode = str.charCodeAt(backReferenceI{{{index}}});
          const currentCharCode = str.charCodeAt(i);

          if (backReferenceCharCode !== currentCharCode) {
            return -1;
          }

          backReferenceI{{{index}}}++;
          i++;
        }
      }
      {{/switchCase}}
      {{#switchCase 'quantifierStarter'}}
        {{#if maxOrMinCount}}
          let matchCountCopy{{{functionName}}} = quantifierCounters[{{{quantifierCounterIndex}}}];
          quantifierCounters[{{{quantifierCounterIndex}}}] = -1;
        {{/if}}
        const cursorAfterQuantifier = {{{functionName}}}(i, str, groupMarkers, tempGroupStartMarkers, quantifierCounters);
        {{#if maxOrMinCount}}
          quantifierCounters[{{{quantifierCounterIndex}}}] = matchCountCopy{{{functionName}}};
        {{/if}}

        return cursorAfterQuantifier;
      {{/switchCase}}
      {{#switchCase 'optionalQuantifier'}}
        {{#each groupsToRestore}}
          const groupMarkerCopy{{{groupStartArrayIndex @this}}} = groupMarkers[{{groupStartArrayIndex @this}}];
          const groupMarkerCopy{{{groupEndArrayIndex @this}}} = groupMarkers[{{groupEndArrayIndex @this}}];
        {{/each}}

        const withOptionalResult{{{@index}}} = {{{wrappedHandler.functionName}}}(i, str, groupMarkers, tempGroupStartMarkers, quantifierCounters);
        if (withOptionalResult{{{@index}}} !== -1) {
          return withOptionalResult{{{@index}}};
        }

        {{#each groupsToRestore}}
          groupMarkers[{{groupStartArrayIndex @this}}] = groupMarkerCopy{{{groupStartArrayIndex @this}}};
          groupMarkers[{{groupEndArrayIndex @this}}] = groupMarkerCopy{{{groupEndArrayIndex @this}}};
        {{/each}}

        {{#if followUp}}
          return {{{followUp.functionName}}}(i, str, groupMarkers, tempGroupStartMarkers, quantifierCounters);
        {{/if}}
        {{#unless followUp}}
          return i;
        {{/unless}}        
      {{/switchCase}}
    {{/each}}
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
