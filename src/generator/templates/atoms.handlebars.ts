export default `
{{#each atoms}}
  /*
    * {{{type}}}
    * {{escapeComment posLine1}}
    * {{{posLine2}}}
    */
  {{#switchCase 'charOrSet'}}
    if (i >= str.length) {
      {{>bail ../..}}
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
      {{>bail ../..}}
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
      {{>bail ../..}}
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
      {{>bail ../..}}
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
    {{>bail ../..}}
  {{/switchCase}}
  {{#switchCase 'inlineDisjunction'}}
    {{#each groupsToRestore}}
      const groupMarkerCopy{{{groupStartArrayIndex @this}}} = groupMarkers[{{groupStartArrayIndex @this}}];
      const groupMarkerCopy{{{groupEndArrayIndex @this}}} = groupMarkers[{{groupEndArrayIndex @this}}];
    {{/each}}
    alternatives{{{counter}}}: {
      {{#each alternatives}}
        {{>inlineFiber returnVarPrefix='length' returnVarCounter=@index}}
        if (length{{{@index}}} !== -1) {
          i = length{{{@index}}};
          break alternatives{{{../counter}}};
        }
        {{#each meta.groups}}
          groupMarkers[{{groupStartArrayIndex @this}}] = groupMarkerCopy{{{groupStartArrayIndex @this}}};
          groupMarkers[{{groupEndArrayIndex @this}}] = groupMarkerCopy{{{groupEndArrayIndex @this}}};
        {{/each}}
      {{/each}}

      {{>bail ../..}}
    }
  {{/switchCase}}
  {{#switchCase 'startAnchor'}}
    if (i !== 0) {
      {{>bail ../..}}
    }
  {{/switchCase}}
  {{#switchCase 'endAnchor'}}
    if (i !== str.length) {
      {{>bail ../..}}
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
        {{>bail ../..}}
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
        {{>bail ../..}}
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
      {{>bail ../..}}
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
            {{>bail ../..}}
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
            {{>bail ../..}}
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

        {{>bail ../..}}
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
          {{>bail ../..}}
        }
      {{/if}}
      {{#unless negate}}
        if (isBeforeWord{{{@index}}} === isAfterWord{{{@index}}}) {
          {{>bail ../..}}
        }
      {{/unless}}
    }
    {{#if negate}}
    else {
      {{>bail ../..}}
    }
    {{/if}}
  {{/switchCase}}
  {{#switchCase 'groupBackReference'}}
  if ({{{endGroupMarkerIndex}}} < groupMarkers.length) {
    let backReferenceI{{{index}}} = groupMarkers[{{{startGroupMarkerIndex}}}];
    const backReferenceEnd{{{index}}} = groupMarkers[{{{endGroupMarkerIndex}}}];
    while(backReferenceI{{{index}}} < backReferenceEnd{{{index}}}) {
      if (i >= str.length) {
        {{>bail ../..}}
      }

      const backReferenceCharCode = str.charCodeAt(backReferenceI{{{index}}});
      const currentCharCode = str.charCodeAt(i);

      if (backReferenceCharCode !== currentCharCode) {
        {{>bail ../..}}
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
{{/each}}
`;
