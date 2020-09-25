import * as Handlebars from 'handlebars';
const jsStringEscape = require('js-string-escape');
const prettier = require('prettier');

const template = `
// {{{regexStr}}}
class GeneratedRegex {
  matched: boolean;

  groupMarkers: [
    {{#times groups}}
      number, number,
    {{/times}}
  ] = [
    {{#times groups}}
      -1, -1,
    {{/times}}
  ]

  {{#each setHandler}}
    // {{{posLine1}}}
    // {{{posLine2}}}
    private {{{functionName}}}(str: string, start: number, alreadyMatched: number): number {
      const charCode = str.charCodeAt(start);

      const matched = {{#if complement}}!{{/if}}(
        {{#each ranges}}
           (charCode >= {{{from}}} && charCode <= {{{to}}}) ||
        {{/each}}
        {{#each chars}}
           charCode === {{{this}}} ||
        {{/each}}
        false
      );

      if (!matched) {
        return -1;
      }

      {{#if followUp}}
        return this.{{{followUp.functionName}}}(str, start + 1, alreadyMatched + 1);
      {{/if}}
      {{#unless followUp}}
        return alreadyMatched + 1;
      {{/unless}}
    }
  {{/each}}

  {{#each groupMarkerHandler}}
    // {{{posLine1}}}
    // {{{posLine2}}}
    private {{{functionName}}}(str: string, start: number, alreadyMatched: number): number {

      {{#if followUp}}
        const followUp = this.{{{followUp.functionName}}}(str, start, alreadyMatched);
        if (followUp !== -1) {
          this.groupMarkers[{{{groupMarkerIndex}}}] = start;
        }

        return followUp;
      {{/if}}
      {{#unless followUp}}
        this.groupMarkers[{{{groupMarkerIndex}}}] = start;
        return alreadyMatched;
      {{/unless}}
    }
  {{/each}}

  {{#each characterHandler}}
    // {{{posLine1}}}
    // {{{posLine2}}}
    private {{{functionName}}}(str: string, start: number, alreadyMatched: number): number {
      const isMatch = str.charCodeAt(start) === {{{charCode}}};
      if (!isMatch) {
        return -1;
      }

      {{#if followUp}}
        return this.{{{followUp.functionName}}}(str, start + 1, alreadyMatched + 1);
      {{/if}}
      {{#unless followUp}}
        return alreadyMatched + 1;
      {{/unless}}
    }

  {{/each}}

  {{#each disjunctionHandler}}
    // {{{posLine1}}}
    // {{{posLine2}}}
    private {{{functionName}}}(str: string, start: number, alreadyMatched: number): number {
      const groupMarkersCopy = this.groupMarkers.slice();

      {{#each alternatives}}
        const result_{{{functionName}}} = this.{{{functionName}}}(str, start, alreadyMatched);

        if (result_{{{functionName}}} !== -1) {
          {{#if ../followUp}}
            return this.{{{../followUp.functionName}}}(
              str, 
              start + result_{{{functionName}}}, 
              alreadyMatched + result_{{{functionName}}}
            );
          {{/if}}
          {{#unless ../followUp}}
            return result_{{{functionName}}};
          {{/unless}}
        }

        this.groupMarkers = groupMarkersCopy;
      {{/each}}

      return -1;
    }

  {{/each}}

  {{#each lazyQuantifierHandler}}
    // {{{posLine1}}}
    // {{{posLine2}}}
    private {{{functionName}}}(
      str: string, 
      start: number, 
      alreadyMatched: number, 
      {{#if recursionLimit}} recursionCount: number {{/if}}
    ): number {
      {{#unless followUp}}
        return 0;
      {{/unless}}
      {{#if followUp}}
        const followUpMatch = this.{{{followUp.functionName}}}(str, start, alreadyMatched);
        if (followUpMatch !== -1) {
          return followUpMatch;
        }

        const wrappedResult = this.{{{wrappedHandler.functionName}}}(str, start, 0);
        if (wrappedResult === -1) {
          return -1;
        }

        {{#if recursionLimit}}
          return this.{{{followUp.functionName}}}(
            str, 
            start + wrappedResult, 
            alreadyMatched + wrappedResult, 
          );
        {{/if}}

        return this.{{{functionName}}}(
          str, 
          start + wrappedResult, 
          alreadyMatched + wrappedResult, 
          {{#if recursionLimit}} recursionCount + 1 {{/if}}
        )
      {{/if}}
    }
  {{/each}}


  {{#each greedyQuantifierHandler}}
    // {{{posLine1}}}
    // {{{posLine2}}}
    private {{{functionName}}}(
      str: string, 
      start: number, 
      alreadyMatched: number, 
      {{#if recursionLimit}} recursionCount: number {{/if}}
    ): number {
      const groupMarkersCopy = this.groupMarkers.slice();

      // try to match
      const wrappedResult = this.{{{wrappedHandler.functionName}}}(str, start, 0);
      if (wrappedResult === -1) {
        this.groupMarkers = groupMarkersCopy;

        {{#if followUp}}
          // match did not work, try do the follow up instead
          return this.{{{followUp.functionName}}}(str, start, alreadyMatched);
        {{/if}}
        {{#unless followUp}}
          // match did not work, no follow up, what we got is enough
          return alreadyMatched;
        {{/unless}}
      }

      {{#if recursionLimit}}
        if (recursionCount + 1 === {{{recursionLimit}}}) {
          {{#if followUp}}
            return this.{{{followUp.functionName}}}(
              str, 
              start + wrappedResult, 
              alreadyMatched + wrappedResult, 
            );
          {{/if}}
          {{#unless followUp}}
            return alreadyMatched + wrappedResult;
          {{/unless}}
        }
      {{/if}}

      const recursionResult = this.{{{functionName}}}(
        str, 
        start + wrappedResult, 
        alreadyMatched + wrappedResult, 
        {{#if recursionLimit}} recursionCount + 1 {{/if}}
      );
      if (recursionResult === -1) {
        this.groupMarkers = groupMarkersCopy;
        {{#if followUp}}
          return this.{{{followUp.functionName}}}(
            str, 
            start, 
            alreadyMatched, 
          );
        {{/if}}
        {{#unless followUp}}
          return alreadyMatched;
        {{/unless}}
      }

      return recursionResult;
    }
  {{/each}}

  {{#each quantifierWithMinOrMaxHandler}}
    // {{{posLine1}}}
    // {{{posLine2}}}
    private {{{functionName}}}(str: string, start_base: number, alreadyMatched_base: number): number {
      let start = start_base;
      let alreadyMatched = alreadyMatched_base;

      {{#if minRequired}}
        for (let i = 0; i < {{{ minRequired}}}; i++) {
          const wrappedResult = this.{{{wrappedHandler.functionName}}}(str, start, 0);
          if (wrappedResult === -1) {
            return -1;
          }
          start += wrappedResult;
          alreadyMatched += wrappedResult;
        }
      {{/if}}
      {{#if minIsMax}}
        {{#if followUp}}
          return this.{{{followUp.functionName}}}(
            str, 
            start, 
            alreadyMatched, 
          );
        {{/if}}
        {{#unless followUp}}
          return alreadyMatched;
        {{/unless}}
      {{/if}}
      {{#unless minIsMax}}
        return this.{{{recursiveQuantifier.functionName}}}(
          str, 
          start, 
          alreadyMatched,
          {{#if recursionLimit}} 0 {{/if}}
        );
      {{/unless}}
    }
  {{/each}}

  constructor(str: string, start: number) {
    const length = this.{{{mainHandler.functionName}}}(str, start, 0);
    if (length !== -1) {
      this.matched = true;
      this.groupMarkers[0] = start;
      this.groupMarkers[1] = start + length;
    } else {
      this.matched = false;
    }
  }

  static exec(str: string) {
    for (let i = 0; i < str.length; i++) {
      const instance = new GeneratedRegex(str, i);

      if (instance.matched) {
        return {
          matches: [
            {{#times groups}}
              instance.groupMarkers[{{@index}} * 2 + 1] !== -1 
                ? str.substring(instance.groupMarkers[{{@index}} * 2], instance.groupMarkers[{{@index}} * 2 + 1])
                : undefined,
            {{/times}}
          ],
          index: i,
        }
      }
    }

    return null;
  }
};

module.exports = {GeneratedRegex};
`;

export interface FunctionHandle {
  functionName: string;
}

export type FollowUpFunctionHandle = FunctionHandle | null;

interface FunctionDefinition {
  functionName: string;
  followUp: FollowUpFunctionHandle;
  posLine1: string;
  posLine2: string;
}

export interface TemplateCharacterDefinition extends FunctionDefinition {
  charCode: number;
}

export interface TemplateGroupMarkerDefinition extends FunctionDefinition {
  groupMarkerIndex: number;
}

export interface TemplateSetDefinition extends FunctionDefinition {
  ranges: { from: number; to: number }[];
  chars: number[];
  complement: boolean;
}

export interface TemplateDisjunctionDefinition extends FunctionDefinition {
  alternatives: FunctionHandle[];
}

export interface TemplateRecursiveQuantifierDefinition
  extends FunctionDefinition {
  recursionLimit?: number;
  wrappedHandler: FunctionHandle;
}

export interface TemplateQuantifierWithMinOrMaxDefinition
  extends FunctionDefinition {
  wrappedHandler: FunctionHandle;
  recursiveQuantifier?: FunctionHandle;
  minRequired?: number;
  minIsMax: boolean;
  recursionLimit?: number;
}

export interface TemplateValues {
  characterHandler: TemplateCharacterDefinition[];
  groupMarkerHandler: TemplateGroupMarkerDefinition[];
  setHandler: TemplateSetDefinition[];
  disjunctionHandler: TemplateDisjunctionDefinition[];
  lazyQuantifierHandler: TemplateRecursiveQuantifierDefinition[];
  greedyQuantifierHandler: TemplateRecursiveQuantifierDefinition[];
  quantifierWithMinOrMaxHandler: TemplateQuantifierWithMinOrMaxDefinition[];
  mainHandler: FunctionHandle;
  groups: number;
  regexStr: string;
}

Handlebars.registerHelper(
  'string',
  (str) => new Handlebars.SafeString(jsStringEscape(str)),
);

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
