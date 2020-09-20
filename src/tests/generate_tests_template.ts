import * as Handlebars from 'handlebars';
const jsStringEscape = require('js-string-escape');
const prettier = require('prettier');

const template = `
import { GeneratedRegex } from './generated_regex.ts';

// {{{testRegex}}}
describe('{{{string testName}}}', () => {
  {{#each testInputs}}
    test('processes test input \\'{{string testInput}}\\' correctly', () => {
      const result = GeneratedRegex.exec('{{string testInput}}');

      {{#if isNull}}
        expect(result).toBeNull();
      {{/if}}
      {{#unless isNull}}
        expect(result.index).toBe({{{index}}});

        {{#each groups}}
          expect(result.matches[{{@index}}]).toBe('{{string this}}');
        {{/each}}
      {{/unless}}
    });
  {{/each}}
})
`;

Handlebars.registerHelper(
  'string',
  (str) => new Handlebars.SafeString(jsStringEscape(str)),
);

const compiled = Handlebars.compile(template);
export default (context: any) => {
  return prettier.format(compiled(context), {
    semi: true,
    parser: 'babel-ts',
  });
};
