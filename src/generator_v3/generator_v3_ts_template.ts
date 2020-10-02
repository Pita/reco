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
          {{#each alternatives}}
            const length{{{@index}}} = {{{functionName}}}(i);
            if (length{{{@index}}} !== -1) {
              return length{{{@index}}};
            }
          {{/each}}
          return -1;
        {{/atomCase}}
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

export type TemplateAtom = CharOrSetTemplateAtom | DisjunctionTemplateAtom;

export interface FiberTemplateDefinition extends FunctionTemplateDefinition {
  atoms: TemplateAtom[];
}

export interface TemplateValues {
  fiberHandlers: FiberTemplateDefinition[];
  mainHandler: FunctionHandle;
  regexStr: string;
}

Handlebars.registerHelper('atomCase', function (this: any, atomType, options) {
  const isAtomType = this.type === atomType;

  if (isAtomType) {
    return options.fn(this.data);
  } else {
    return options.inverse(this);
  }
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
