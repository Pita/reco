import * as Handlebars from 'handlebars';
const prettier = require('prettier');

const template = `
import { generatedRegexMatcher } from './{{{string fileName}}}';
import templateValues from './{{{string fileName}}}_templateValues.json';

// {{{testRegex}}}
describe('{{{string testName}}}', () => {
  test('template values are as expected', () => {
    // @ts-ignore
    delete templateValues['version'];
    expect(templateValues).toMatchSnapshot();
  });
  
  {{#each testInputs}}
    test('processes test input \\'{{string testInput}}\\' correctly', () => {
      const result = generatedRegexMatcher('{{string testInput}}');

      {{#if isNull}}
        expect(result).toBeNull();
      {{/if}}
      {{#unless isNull}}
        expect(result?.index).toBe({{{index}}});

        {{#each groups}}
          {{#if isUndefined}}
            expect(result?.matches[{{@index}}]).toBeUndefined();
          {{/if}}
          {{#unless isUndefined}}
            expect(result?.matches[{{@index}}]).toBe('{{string value}}');
          {{/unless}}
        {{/each}}
      {{/unless}}
    });
  {{/each}}
})
`;

const compiled = Handlebars.compile(template);
export default (context: any) => {
  return prettier.format(compiled(context), {
    semi: true,
    parser: 'babel-ts',
  });
};
