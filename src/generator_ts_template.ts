import * as Handlebars from 'handlebars';
const jsStringEscape = require('js-string-escape');
const prettier = require('prettier');

const template = `
class GeneratedRegex {
  matched: boolean;
  start: number = -1;
  end: number = -1;

  {{#each characterHandler}}
    {{functionName}}(str: string, start: number, alreadyMatched: number): number {
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
      this.start = start;
      this.end = start + length;
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
            str.substring(instance.start, instance.end)
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

export interface TemplateCharacterDefinition {
  functionName: string;
  charCode: number;
  followUp: FollowUpFunctionHandle;
}

export interface TemplateValues {
  characterHandler: TemplateCharacterDefinition[];
  mainHandler: FunctionHandle;
}

Handlebars.registerHelper(
  'string',
  (str) => new Handlebars.SafeString(jsStringEscape(str)),
);

const compiled = Handlebars.compile(template);
export function genCodeFromTemplate(context: TemplateValues): string {
  return prettier.format(compiled(context), {
    semi: true,
    parser: 'babel-ts',
  });
}
