import * as Handlebars from 'handlebars';
// const jsStringEscape = require('js-string-escape');
const prettier = require('prettier');

const template = `
// {{{regexStr}}}
function generatedRegexMatcher(str: string) {
  const strLength = str.length;
  let groupMarkers:[
    {{#times groupsCount}}
      number, number,
    {{/times}}
  ] = [
    {{#times groupsCount}}
      -1, -1,
    {{/times}}
  ];
  const tempGroupStartMarkers: [
    {{#times groupsCount}}
      number, 
    {{/times}}
  ] = [
    {{#times groupsCount}}
      -1,
    {{/times}}
  ];

  {{#each fiberHandlers}}
    const {{{functionName}}} = (
      start: number,
      {{#hasCallback}} callback: (start: number) => number {{/hasCallback}}
    ): number => {
      let i = start;
      {{#each atoms}}
        /*
         * {{{type}}}
         * {{{posLine1}}}
         * {{{posLine2}}}
         */
        {{#atomCase 'charOrSet'}}
          if (i >= strLength) {
            return -1;
          }
          const charCode{{{@index}}} = str.charCodeAt(i);
          if({{#unless complement}}!{{/unless}}(
            {{#each ranges}}
              (charCode{{{@../index}}} >= {{{from}}} && charCode{{{@../index}}} <= {{{to}}}) ||
            {{/each}}
            {{#each chars}}
              charCode{{{@../index}}} === {{{this}}} ||
            {{/each}}
            false
          )) {
            return -1;
          };
          i++;
        {{/atomCase}}
        {{#atomCase 'disjunction'}}
          // TODO: Make that this does not require garbage collection
          // typed array or for loop
          // there might also be a possiblity to not copy all groups
          const groupMarkersCopy = groupMarkers.slice();

          {{#each alternatives}}
            const length{{{@index}}} = {{{functionName}}}(i);
            if (length{{{@index}}} !== -1) {
              return length{{{@index}}};
            }
            groupMarkers = groupMarkersCopy;
          {{/each}}
          return -1;
        {{/atomCase}}
        {{#atomCase 'startAnchor'}}
          if (i !== 0) {
            return -1;
          }
        {{/atomCase}}
        {{#atomCase 'endAnchor'}}
          if (i !== strLength) {
            return -1;
          }
        {{/atomCase}}
        {{#atomCase 'groupStartMarker'}}
          tempGroupStartMarkers[{{{groupIndex}}}] = i;
        {{/atomCase}}
        {{#atomCase 'groupEndMarker'}}
          groupMarkers[{{{groupStartMarkerIndex}}}] = tempGroupStartMarkers[{{{groupIndex}}}];
          groupMarkers[{{{groupEndMarkerIndex}}}] = i;
        {{/atomCase}}
        {{#atomCase 'greedyQuantifier'}}
          {{#if maxOrMinCount}}
            let matchCount = -1;
          {{/if}}

          // TODO: can probably be inlined
          const followUpCallback = (start: number) => {
            {{#if followUp}}
              return {{{followUp.functionName}}}(start);
            {{/if}}
            {{#unless followUp}}
              return start;
            {{/unless}}
          }

          const recursiveCallback = (start: number): number => {
            {{#if maxOrMinCount}}
              matchCount++;
            {{/if}}

            // if max count is reached, return followUpCallback
            {{#if maxCount}}
              // we've matched enough, lets continue with the follow up
              if (matchCount=== {{{maxCount}}}) {
                return followUpCallback(start); 
              }
            {{/if}}

            const tryDeeperResult = {{{wrappedHandler.functionName}}}(start, recursiveCallback);
            if (tryDeeperResult !== -1) {
              // we actually were able to go deeper, nice!
              return tryDeeperResult;
            }
            
            {{#if minCount}}
              // we didn't match enough, bail!
              if (matchCount < {{{minCount}}}) {
                return -1; 
              }
            {{/if}}

            {{#if maxOrMinCount}}
              matchCount--;
            {{/if}}

            // we couldn't find a deeper match, we can only try the follow up
            return followUpCallback(start);          
          };

          return recursiveCallback(start);
        {{/atomCase}}        
      {{/each}}
      // TODO: not needed in case last element is disjunction or quantifier
      {{#if followUp}}
        return {{{followUp.functionName}}}(i);
      {{/if}}
      {{#unless followUp}}
        return i;
      {{/unless}}
    }
  {{/each}}

  for (let i = 0; i < strLength; i++) {
    const length = {{{mainHandler.functionName}}}(i);
    if (length !== -1) {
      // TODO: why do we do this?!
      groupMarkers[0] = i;
      groupMarkers[1] = length;
      return {
        index: i,
        matches: [
          {{#times groupsCount}}
            groupMarkers[{{@index}} * 2 + 1] !== -1 
              ? str.substring(groupMarkers[{{@index}} * 2], groupMarkers[{{@index}} * 2 + 1])
              : undefined,
          {{/times}}
        ]
      }
    }
  }

  return null;
};

module.exports = {generatedRegexMatcher};
`;

export interface FunctionHandle {
  functionName: string;
  isClosed: boolean;
}

export type FollowUpFunctionHandle = FunctionHandle | null;

export interface FunctionTemplateDefinition {
  functionName: string;
  followUp: FollowUpFunctionHandle;
}

export interface BaseTemplateAtom {
  posLine1: string;
  posLine2: string;
}

export interface CharOrSetTemplateAtom extends BaseTemplateAtom {
  type: 'charOrSet';
  data: {
    ranges: { from: number; to: number }[];
    chars: number[];
    complement: boolean;
  };
}

export interface DisjunctionTemplateAtom extends BaseTemplateAtom {
  type: 'disjunction';
  data: {
    alternatives: FunctionHandle[];
  };
}

export interface StartAnchorTemplateAtom extends BaseTemplateAtom {
  type: 'startAnchor';
  data: {};
}

export interface EndAnchorTemplateAtom extends BaseTemplateAtom {
  type: 'endAnchor';
  data: {};
}

export interface GroupStartMarkerTemplateAtom extends BaseTemplateAtom {
  type: 'groupStartMarker';
  data: {
    groupIndex: number;
  };
}

export interface GroupEndMarkerTemplateAtom extends BaseTemplateAtom {
  type: 'groupEndMarker';
  data: {
    groupIndex: number;
    groupStartMarkerIndex: number;
    groupEndMarkerIndex: number;
  };
}

export interface GreedyQuantifierTemplateAtom extends BaseTemplateAtom {
  type: 'greedyQuantifier';
  data: {
    wrappedHandler: FunctionHandle;
    maxOrMinCount?: boolean;
    minCount?: number;
    maxCount?: number;
    followUp: FollowUpFunctionHandle;
  };
}

export type TemplateAtom =
  | CharOrSetTemplateAtom
  | DisjunctionTemplateAtom
  | StartAnchorTemplateAtom
  | EndAnchorTemplateAtom
  | GroupStartMarkerTemplateAtom
  | GroupEndMarkerTemplateAtom
  | GreedyQuantifierTemplateAtom;

export interface FiberTemplateDefinition extends FunctionTemplateDefinition {
  atoms: TemplateAtom[];
}

export interface TemplateValues {
  fiberHandlers: FiberTemplateDefinition[];
  mainHandler: FunctionHandle;
  regexStr: string;
  groupsCount: number;
}

Handlebars.registerHelper('atomCase', function (this: any, atomType, options) {
  const isAtomType = this.type === atomType;

  if (isAtomType) {
    return options.fn(this.data);
  } else {
    return options.inverse(this);
  }
});

Handlebars.registerHelper('hasCallback', function (this: any, options) {
  const hasCallback = this.followUp?.functionName === 'callback';

  if (hasCallback) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

Handlebars.registerHelper('times', function (n, block) {
  var accum = '';
  for (var i = 0; i < n; ++i) {
    block.data.index = i;
    accum += block.fn(i);
  }
  return accum;
});

const compiled = Handlebars.compile(template);
export function genCodeFromTemplate(context: TemplateValues): string {
  return prettier.format(compiled(context), {
    semi: true,
    parser: 'babel-ts',
  });
}
