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
      let nativeCheckSum = 0;
      suite.add('native', function () {
        testStrings.forEach(testStr => {
          const result = {{{testRegex}}}.exec(testStr);
          if (result) {
            for (let i = 0;i<result.length; i++) {
              nativeCheckSum += result[i] ? result[i].length : 0;
            }
          }
        });
      });
      let generatedCheckSum = 0;
      suite.add('generated', function () {
        testStrings.forEach(testStr => {
          const result = generatedRegexMatcher(testStr);
          if (result) {
            for (let i = 0;i<result.matches.length; i++) {
              generatedCheckSum += result.matches[i] ? result.matches[i].length : 0;
            }
          }
        });
      });
      suite.on('complete', function () {
        console.log('nativeCheckSum', nativeCheckSum);
        console.log('generatedCheckSum', generatedCheckSum);
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
