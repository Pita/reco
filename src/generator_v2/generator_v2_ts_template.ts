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

  {{#each setOrCharacterHandler}}
    // {{{posLine1}}}
    // {{{posLine2}}}
    private {{{functionName}}}(str: string, start: number): number {
      if (start >= str.length) {
        return -1;
      }

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
        return this.{{{followUp.functionName}}}(str, start + 1);
      {{/if}}
      {{#unless followUp}}
        return start + 1;
      {{/unless}}
    }
  {{/each}}

  {{#each groupMarkerHandler}}
    // {{{posLine1}}}
    // {{{posLine2}}}
    private {{{functionName}}}(str: string, start: number): number {

      {{#if followUp}}
        const followUp = this.{{{followUp.functionName}}}(str, start);
        if (followUp !== -1) {
          this.groupMarkers[{{{groupMarkerIndex}}}] = start;
        }

        return followUp;
      {{/if}}
      {{#unless followUp}}
        this.groupMarkers[{{{groupMarkerIndex}}}] = start;
        return start;
      {{/unless}}
    }
  {{/each}}

  {{#each disjunctionHandler}}
    // {{{posLine1}}}
    // {{{posLine2}}}
    private {{{functionName}}}(str: string, start: number): number {
      const groupMarkersCopy = this.groupMarkers.slice();

      {{#each alternatives}}
        const result_{{{functionName}}} = this.{{{functionName}}}(str, start);

        if (result_{{{functionName}}} !== -1) {
          {{#if ../followUp}}
            return this.{{{../followUp.functionName}}}(
              str, 
              start + result_{{{functionName}}}, 
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
      {{#if recursionLimit}} recursionCount: number {{/if}}
    ): number {
      {{#unless followUp}}
        return 0;
      {{/unless}}
      {{#if followUp}}
        const followUpMatch = this.{{{followUp.functionName}}}(str, start);
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
            wrappedResult, 
          );
        {{/if}}

        return this.{{{functionName}}}(
          str, 
          wrappedResult, 
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
      {{#if recursionLimit}} recursionCount: number {{/if}}
    ): number {
      const groupMarkersCopy = this.groupMarkers.slice();

      // try to match
      const wrappedResult = this.{{{wrappedHandler.functionName}}}(str, start, 0);
      if (wrappedResult === -1) {
        this.groupMarkers = groupMarkersCopy;

        {{#if followUp}}
          // match did not work, try do the follow up instead
          return this.{{{followUp.functionName}}}(str, start);
        {{/if}}
        {{#unless followUp}}
          // match did not work, no follow up, what we got is enough
          return start;
        {{/unless}}
      }

      {{#if recursionLimit}}
        if (recursionCount + 1 === {{{recursionLimit}}}) {
          {{#if followUp}}
            return this.{{{followUp.functionName}}}(
              str, 
              wrappedResult, 
            );
          {{/if}}
          {{#unless followUp}}
            return wrappedResult;
          {{/unless}}
        }
      {{/if}}

      const recursionResult = this.{{{functionName}}}(
        str, 
        wrappedResult, 
        {{#if recursionLimit}} recursionCount + 1 {{/if}}
      );
      if (recursionResult === -1) {
        this.groupMarkers = groupMarkersCopy;
        {{#if followUp}}
          return this.{{{followUp.functionName}}}(
            str, 
            start, 
          );
        {{/if}}
        {{#unless followUp}}
          return start;
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

      {{#if minRequired}}
        for (let i = 0; i < {{{ minRequired}}}; i++) {
          const wrappedResult = this.{{{wrappedHandler.functionName}}}(str, start, 0);
          if (wrappedResult === -1) {
            return -1;
          }
          start = wrappedResult;
        }
      {{/if}}
      {{#if minIsMax}}
        {{#if followUp}}
          return this.{{{followUp.functionName}}}(
            str, 
            start, 
          );
        {{/if}}
        {{#unless followUp}}
          return start;
        {{/unless}}
      {{/if}}
      {{#unless minIsMax}}
        return this.{{{recursiveQuantifier.functionName}}}(
          str, 
          start, 
          {{#if recursionLimit}} 0 {{/if}}
        );
      {{/unless}}
    }
  {{/each}}

  {{#each startAnchorHandler}}
    // {{{posLine1}}}
    // {{{posLine2}}}
    private {{{functionName}}}(str: string, start: number): number {
      if (start !== 0) {
        return -1;
      }

      {{#if followUp}}
        return this.{{{followUp.functionName}}}(str, start);
      {{/if}}
      {{#unless followUp}}
        return start;
      {{/unless}}
    }
  {{/each}}

  {{#each endAnchorHandler}}
    // {{{posLine1}}}
    // {{{posLine2}}}
    private {{{functionName}}}(str: string, start: number): number {
      if (str.length !== start) {
        return -1;
      }

      {{#if followUp}}
        return this.{{{followUp.functionName}}}(str, start);
      {{/if}}
      {{#unless followUp}}
        return start;
      {{/unless}}
    }
  {{/each}}

  constructor(str: string, start: number) {
    const length = this.{{{mainHandler.functionName}}}(str, start);
    if (length !== -1) {
      this.matched = true;
      this.groupMarkers[0] = start;
      this.groupMarkers[1] = length;
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

export interface TemplateFunctionDefinition {
  functionName: string;
  followUp: FollowUpFunctionHandle;
  posLine1: string;
  posLine2: string;
}

export interface TemplateGroupMarkerDefinition
  extends TemplateFunctionDefinition {
  groupMarkerIndex: number;
}

export interface TemplateSetOrCharacterDefinition
  extends TemplateFunctionDefinition {
  ranges: { from: number; to: number }[];
  chars: number[];
  complement: boolean;
}

export interface TemplateDisjunctionDefinition
  extends TemplateFunctionDefinition {
  alternatives: FunctionHandle[];
}

export interface TemplateRecursiveQuantifierDefinition
  extends TemplateFunctionDefinition {
  recursionLimit?: number;
  wrappedHandler: FunctionHandle;
}

export interface TemplateQuantifierWithMinOrMaxDefinition
  extends TemplateFunctionDefinition {
  wrappedHandler: FunctionHandle;
  recursiveQuantifier?: FunctionHandle;
  minRequired?: number;
  minIsMax: boolean;
  recursionLimit?: number;
}

export interface TemplateValues {
  setOrCharacterHandler: TemplateSetOrCharacterDefinition[];
  groupMarkerHandler: TemplateGroupMarkerDefinition[];
  disjunctionHandler: TemplateDisjunctionDefinition[];
  lazyQuantifierHandler: TemplateRecursiveQuantifierDefinition[];
  greedyQuantifierHandler: TemplateRecursiveQuantifierDefinition[];
  quantifierWithMinOrMaxHandler: TemplateQuantifierWithMinOrMaxDefinition[];
  startAnchorHandler: TemplateFunctionDefinition[];
  endAnchorHandler: TemplateFunctionDefinition[];
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
