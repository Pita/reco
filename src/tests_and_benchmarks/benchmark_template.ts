const prettier = require('prettier');
import * as Handlebars from 'handlebars';

const template = `
  const Benchmark = require('benchmark');
  import { generatedRegexMatcher } from './{{{string fileName}}}';

  export function benchmark() {
    return new Promise((resolve, reject) => {
      // console.log('Running benchmark', '{{{string testName}}}');

      const testStrings = [
        {{#each testInputs}}
          '{{string testInput}}',
        {{/each}}
      ];
      const suite = new Benchmark.Suite('{{{string testName}}}');
      suite.add('native', function () {
        testStrings.forEach(testStr => {
          {{{testRegex}}}.exec(testStr);
        });
      });
      suite.add('generated', function () {
        testStrings.forEach(testStr => {
          generatedRegexMatcher(testStr);
        });
      });
      suite.on('complete', function () {
        resolve((this[1].stats.mean / this[0].stats.mean).toFixed(2));
      });
      suite.on('error', function (err: any) {
        reject(err);
      });

      suite.run({
        async: true,
      });
    });
  }
`;

const compiled = Handlebars.compile(template);
export default (context: any) => {
  return prettier.format(compiled(context), {
    semi: true,
    parser: 'babel-ts',
  });
};
