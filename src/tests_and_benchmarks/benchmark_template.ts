const prettier = require('prettier');
import * as Handlebars from 'handlebars';

const template = `
  console.log('{{{string testName}}}');
  const Benchmark = require('benchmark');
  const benchmarks = require('beautify-benchmark');
  import { generatedRegexMatcher } from './{{{string fileName}}}';

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
  suite.on('cycle', function (event: any) {
    benchmarks.add(event.target);
  });
  suite.on('complete', function () {
    benchmarks.log();
  });
  suite.on('error', function (err: any) {
    console.error(err);
  });

  suite.run({
    async: true,
  });
`;

const compiled = Handlebars.compile(template);
export default (context: any) => {
  return prettier.format(compiled(context), {
    semi: true,
    parser: 'babel-ts',
  });
};
