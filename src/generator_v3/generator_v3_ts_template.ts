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
      {{#if hasCallback}} callback: (start: number) => number {{/if}}
    ): number => {
      let i = start;
      {{#each atoms}}
        /*
         * {{{type}}}
         * {{#escapeComment posLine1}}{{/escapeComment}}
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
          const groupMarkersCopy = groupMarkers.slice() as any;

          {{#each alternatives}}
            const length{{{@index}}} = {{{functionName}}}(
              i, 
              {{#if hasCallback}} callback, {{/if}}
            );
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
          const followUpCallback = (start: number) => {
            {{#if followUp}}
              return {{{followUp.functionName}}}(
                start, 
                {{#if followUp.hasCallback}} callback, {{/if}}
              );
            {{/if}}
            {{#unless followUp}}
              return start;
            {{/unless}}
          }

          const recursiveCallback = (start: number): number => {
            {{#if maxOrMinCount}}
              matchCount++;
            {{/if}}

            {{#if maxCount}}
              if (matchCount === {{{maxCount}}}) {
                return followUpCallback(start);
              }
            {{/if}}

            const groupMarkersCopy = groupMarkers.slice() as any;
            const tryDeeperResult = {{{wrappedHandler.functionName}}}(start, recursiveCallback);
            if (tryDeeperResult !== -1) {
              // we actually were able to go deeper, nice!
              return tryDeeperResult;
            } 

            // recursion failed, reset groups
            groupMarkers = groupMarkersCopy;

            {{#if minCount}}
              if (matchCount < {{{minCount}}}) {
                matchCount--;
                return -1;
              }
            {{/if}}

            const followUpResult = followUpCallback(start);
            if (followUpResult === -1) {
              groupMarkers = groupMarkersCopy;
              {{#if maxOrMinCount}}
                matchCount--;
              {{/if}}
            }
            return followUpResult;
          };

          return recursiveCallback(i);
        {{/atomCase}}        
      {{/each}}
      {{#unless lastAtomReturns}}
        {{#if followUp}}
          return {{{followUp.functionName}}}(i, {{#if followUp.hasCallback}} callback {{/if}});
        {{/if}}
        {{#unless followUp}}
          return i;
        {{/unless}}
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

export interface FiberTemplateDefinition {
  atoms: TemplateAtom[];
  lastAtomReturns: boolean;
  functionName: string;
  followUp: FollowUp;
  hasCallback: boolean;
}

export type FollowUp =
  | FiberTemplateDefinition
  | { functionName: 'callback' }
  | null;

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
    alternatives: FiberTemplateDefinition[];
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
    wrappedHandler: FiberTemplateDefinition;
    maxOrMinCount?: boolean;
    minCount?: number;
    maxCount?: number;
    followUp: FollowUp;
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

export interface TemplateValues {
  fiberHandlers: FiberTemplateDefinition[];
  mainHandler: FiberTemplateDefinition;
  regexStr: string;
  groupsCount: number;
}

Handlebars.registerHelper('escapeComment', function (this: any, value) {
  return value.replace(/\*/g, '✱');
});

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
