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
    private {{functionName}}(str: string, start: number, alreadyMatched: number): number {
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
    private {{functionName}}(str: string, start: number, alreadyMatched: number): number {
      this.groupMarkers[{{{groupMarkerIndex}}}] = start;

      {{#if followUp}}
        return this.{{{followUp.functionName}}}(str, start, alreadyMatched);
      {{/if}}
      {{#unless followUp}}
        return alreadyMatched;
      {{/unless}}
    }
  {{/each}}

  {{#each characterHandler}}
    // {{{posLine1}}}
    // {{{posLine2}}}
    private {{functionName}}(str: string, start: number, alreadyMatched: number): number {
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
              str.substring(instance.groupMarkers[{{@index}} * 2], instance.groupMarkers[{{@index}} * 2 + 1]),
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

export interface TemplateValues {
  characterHandler: TemplateCharacterDefinition[];
  groupMarkerHandler: TemplateGroupMarkerDefinition[];
  setHandler: TemplateSetDefinition[];
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
