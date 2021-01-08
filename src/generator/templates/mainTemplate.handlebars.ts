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

interface Context {
  {{#each groups}}
    groupMarkerStart{{{@index}}}: number;
    groupMarkerStartTemp{{{@index}}}: number;
    groupMarkerEnd{{{@index}}}: number;
  {{/each}}
  {{#times quantifierCountersLength}}
    quantifierCounter{{{@this}}}: number;
  {{/times}}
}

export function generatedRegexMatcher(str: string) {
  const context: Context = {
    {{#each groups}}
      groupMarkerStart{{{@index}}}: -1,
      groupMarkerStartTemp{{{@index}}}: -1,
      groupMarkerEnd{{{@index}}}: -1,
    {{/each}}
    {{#times quantifierCountersLength}}
      quantifierCounter{{{@this}}}: -1, 
    {{/times}}
  };

  {{#with matchPositioning}}
    {{#switchCase 'startAnchored'}}
      // startAnchored
      const min = 0;
      const max = 0;
    {{/switchCase}}
    {{#switchCase 'endAnchored'}}
      // endAnchored
      const min = Math.max(str.length - {{{maxCharsLeft}}}, 0);
      const max = str.length - {{{minCharsLeft}}};
    {{/switchCase}}
    {{#switchCase 'minCharsLeft'}}
      // minCharsLeft
      const min = 0;
      const max = str.length - {{{minCharsLeft}}};
    {{/switchCase}}
    {{#switchCase 'fullScan'}}
      // fullScan
      const min = 0;
      const max = str.length;
    {{/switchCase}}
  {{/with}}

  for (let i = min; i <= max; i++) {
    const posAfterMatch = {{{mainHandler.functionName}}}(i, str, context);
    if (posAfterMatch !== -1) {
      return {
        index: i,
        matches: [
          str.substring(i, posAfterMatch),
          {{#each groups}}
            context.groupMarkerEnd{{{@index}}} !== -1
              ? str.substring(context.groupMarkerStart{{{@index}}}, context.groupMarkerEnd{{{@index}}})
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
    context: Context
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
          const groupMarkerStartCopy{{{idx}}} = context.groupMarkerStart{{{idx}}};
          const groupMarkerEndCopy{{{idx}}} = context.groupMarkerEnd{{{idx}}};
        {{/each}}
        {{#each alternatives}}            
          const length{{{@index}}} = {{{functionName}}}(i, str, context);
          if (length{{{@index}}} !== -1) {
            return length{{{@index}}};
          }
          {{#each meta.groups}}
            context.groupMarkerStart{{{idx}}} = groupMarkerStartCopy{{{idx}}};
            context.groupMarkerEnd{{{idx}}} = groupMarkerEndCopy{{{idx}}};
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
        context.groupMarkerStartTemp{{{groupReference.idx}}} = i;
      {{/switchCase}}
      {{#switchCase 'groupEndMarker'}}
        context.groupMarkerStart{{{groupReference.idx}}} = context.groupMarkerStartTemp{{{groupReference.idx}}};
        context.groupMarkerEnd{{{groupReference.idx}}} = i;
      {{/switchCase}}
      {{#switchCase 'lookaround'}}
        const lookaroundResult{{{@index}}} = {{{lookaroundFiber.functionName}}}(i, str, context);
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
          const wrappedResult = {{{wrappedHandler.functionName}}}(i, str, context);

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
      {{#switchCase 'lazyQuantifier'}}
        {{#if maxOrMinCount}}
          let matches{{{@index}}} = 0;
        {{/if}}
        while(true) {
          {{#if minCount}}
            if (matches{{{@index}}} >= {{{minCount}}}) {
          {{/if}}
            const directFollowUpResult{{{@index}}} = {{{followUp.functionName}}}(i, str, context);
            
            if (directFollowUpResult{{{@index}}} !== -1 
              {{#if maxCount}}
                || (matches{{{@index}}} === {{{maxCount}}})
              {{/if}}
              || i > (str.length - {{{followUp.meta.minCharLength}}})
            ) {
              return directFollowUpResult{{{@index}}};
            } 
          {{#if minCount}}
            }
          {{/if}}

          const wrappedResult = {{{wrappedHandler.functionName}}}(i, str, context);
          if (wrappedResult === -1) {
            return -1;
          }
          i = wrappedResult;
          {{#if maxOrMinCount}}
            matches{{{@index}}}++;
          {{/if}}
        }
      {{/switchCase}}
      {{#switchCase 'backtrackingFixedLengthQuantifier'}}
        let matches{{{@index}}} = 0;

        while(true) {
          const wrappedResult = {{{wrappedHandler.functionName}}}(i, str, context);

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

            if (i > (str.length - {{{followUp.meta.minCharLength}}})
              {{#if maxCount}}
                || matches{{{@index}}} === {{{maxCount}}}
              {{/if}}
            ) {
              break;
            }
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
              const directFollowUpResult{{{@index}}} = {{{followUp.functionName}}}(i, str, context);

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
        let backReferenceI{{{index}}} = context.groupMarkerStart{{{groupIndex}}};
        const backReferenceEnd{{{index}}} = context.groupMarkerEnd{{{groupIndex}}};
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
      {{/switchCase}}
      {{#switchCase 'quantifierStarter'}}
        {{#if maxOrMinCount}}
          let matchCountCopy{{{functionName}}} = context.quantifierCounter{{{quantifierCounterIndex}}};
          context.quantifierCounter{{{quantifierCounterIndex}}} = -1;
        {{/if}}
        const cursorAfterQuantifier = {{{functionName}}}(i, str, context);
        {{#if maxOrMinCount}}
          context.quantifierCounter{{{quantifierCounterIndex}}} = matchCountCopy{{{functionName}}};
        {{/if}}

        return cursorAfterQuantifier;
      {{/switchCase}}
    {{/each}}
    {{#unless lastAtomReturns}}
      {{#if followUp}}
        return {{{followUp.functionName}}}(i, str, context);
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
    context: Context,
  ): number => {
    {{#unless followUp}}
      return start;
    {{/unless}}
    {{#if followUp}}
      {{#if maxOrMinCount}}
        context.quantifierCounter{{{quantifierCounterIndex}}}++;
      {{/if}}

      {{#if minCount}}
        if (context.quantifierCounter{{{quantifierCounterIndex}}} >= {{{minCount}}}) {
      {{/if}}
        {{#each followUp.meta.groups}}
          const groupMarkerStartCopy{{{idx}}} = context.groupMarkerStart{{{idx}}};
          const groupMarkerEndCopy{{{idx}}} = context.groupMarkerEnd{{{idx}}};
        {{/each}}
        const followUpResult = {{{followUp.functionName}}}(
          start, 
          str, 
          context,
        );
        if (followUpResult === -1) {
          {{#each followUp.meta.groups}}
            context.groupMarkerStart{{{idx}}} = groupMarkerStartCopy{{{idx}}};
            context.groupMarkerEnd{{{idx}}} = groupMarkerEndCopy{{{idx}}};
          {{/each}}
        } else {
          return followUpResult;
        }

      {{#if minCount}}
        }
      {{/if}}
      
      if (start < (str.length - {{{followUp.meta.minCharLength}}})
        {{#if maxCount}}
           && context.quantifierCounter{{{quantifierCounterIndex}}} < {{{maxCount}}}
        {{/if}}
      ) {
        {{#each wrappedHandler.meta.groups}}
          const groupMarkerStartCopy{{{idx}}} = context.groupMarkerStart{{{idx}}};
          const groupMarkerEndCopy{{{idx}}} = context.groupMarkerEnd{{{idx}}};
        {{/each}}
        const tryDeeperResult = {{{wrappedHandler.functionName}}}(start, str, context);
        if (tryDeeperResult !== -1) {
          // we actually were able to go deeper, nice!
          return tryDeeperResult;
        }
        {{#each wrappedHandler.meta.groups}}
          context.groupMarkerStart{{{idx}}} = groupMarkerStartCopy{{{idx}}};
          context.groupMarkerEnd{{{idx}}} = groupMarkerEndCopy{{{idx}}};
        {{/each}}
      }

      {{#if maxOrMinCount}}
        context.quantifierCounter{{{quantifierCounterIndex}}}--;
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
    context: Context,
  ): number => {
    {{#if maxOrMinCount}}
      context.quantifierCounter{{{quantifierCounterIndex}}}++;
    {{/if}}

    if (start > (str.length - {{{followUp.meta.minCharLength}}})
      {{#if maxCount}}
        || context.quantifierCounter{{{quantifierCounterIndex}}} === {{{maxCount}}}
      {{/if}}
    ) {
        {{#if followUp}}
          return {{{followUp.functionName}}}(
            start,
            str, 
            context,
          );
        {{/if}}
        {{#unless followUp}}
          return start;
        {{/unless}}
      }

    {{#each wrappedHandler.meta.groups}}
      const groupMarkerStartCopy{{{idx}}} = context.groupMarkerStart{{{idx}}};
      const groupMarkerEndCopy{{{idx}}} = context.groupMarkerEnd{{{idx}}};
    {{/each}}
    const tryDeeperResult = {{{wrappedHandler.functionName}}}(start, str, context);
    if (tryDeeperResult !== -1) {
      // we actually were able to go deeper, nice!
      return tryDeeperResult;
    } 

    // recursion failed, reset groups
    {{#each wrappedHandler.meta.groups}}
      context.groupMarkerStart{{{idx}}} = groupMarkerStartCopy{{{idx}}};
      context.groupMarkerEnd{{{idx}}} = groupMarkerEndCopy{{{idx}}};
    {{/each}}

    {{#if minCount}}
      if (context.quantifierCounter{{{quantifierCounterIndex}}} < {{{minCount}}}) {
        context.quantifierCounter{{{quantifierCounterIndex}}}--;
        return -1;
      }
    {{/if}}

    {{#if followUp}}
      {{#each followUp.meta.groups}}
        const groupMarkerStartCopy{{{idx}}} = context.groupMarkerStart{{{idx}}};
        const groupMarkerEndCopy{{{idx}}} = context.groupMarkerEnd{{{idx}}};
      {{/each}}

      const followUpResult = {{{followUp.functionName}}}(
        start,
        str, 
        context,
      );

      if (followUpResult === -1) {
        {{#each followUp.meta.groups}}
          context.groupMarkerStart{{{idx}}} = groupMarkerStartCopy{{{idx}}};
          context.groupMarkerEnd{{{idx}}} = groupMarkerEndCopy{{{idx}}};
        {{/each}}
        {{#if maxOrMinCount}}
          context.quantifierCounter{{{quantifierCounterIndex}}}--;
        {{/if}}
      }
      return followUpResult;
    {{/if}}
    {{#unless followUp}}
      return start;
    {{/unless}}
  }
{{/each}}`;
