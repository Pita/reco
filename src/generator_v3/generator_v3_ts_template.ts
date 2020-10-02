import * as Handlebars from 'handlebars';
// const jsStringEscape = require('js-string-escape');
const prettier = require('prettier');

const template = `
// {{{regexStr}}}
function generatedRegexMatcher(str: string) {
  const strLength = str.length;

  {{#each fiberHandlers}}
    const {{{functionName}}} = (start: number): number => {
      let i = start;
      {{#each atoms}}
        /*
         * {{{posLine1}}}
         * {{{posLine2}}}
         */
        {{#ifEquals type 'charOrSet'}}
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
        {{/ifEquals}}
      {{/each}}
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
      return {
        index: i,
        matches: [str.substring(i, length)]
      }
    }
  }

  return null;
};

module.exports = {generatedRegexMatcher};
`;

export interface FunctionHandle {
  functionName: string;
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
  ranges: { from: number; to: number }[];
  chars: number[];
  complement: boolean;
}

export type TemplateAtom = CharOrSetTemplateAtom;

export interface FiberTemplateDefinition extends FunctionTemplateDefinition {
  atoms: TemplateAtom[];
}

export interface TemplateValues {
  fiberHandlers: FiberTemplateDefinition[];
  mainHandler: FunctionHandle;
  regexStr: string;
}

Handlebars.registerHelper('ifEquals', function (
  this: any,
  arg1,
  arg2,
  options,
) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

// Handlebars.registerHelper(
//   'string',
//   (str) => new Handlebars.SafeString(jsStringEscape(str)),
// );

// Handlebars.registerHelper('times', function (n, block) {
//   var accum = '';
//   for (var i = 0; i < n; ++i) {
//     block.data.index = i;
//     accum += block.fn(i);
//   }
//   return accum;
// });

const compiled = Handlebars.compile(template);
export function genCodeFromTemplate(context: TemplateValues): string {
  return prettier.format(compiled(context), {
    semi: true,
    parser: 'babel-ts',
  });
}
