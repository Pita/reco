import * as Handlebars from 'handlebars';
import prettier from 'prettier';

const template = `
import { generatedRegexMatcher } from './{{{string fileName}}}';

// {{{testRegex}}}
describe('{{{string testName}}}', () => {  
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
export default (context: unknown) => {
  return prettier.format(compiled(context), {
    semi: true,
    parser: 'babel-ts',
  });
};
