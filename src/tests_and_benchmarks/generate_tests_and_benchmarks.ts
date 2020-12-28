import * as glob from 'glob';
import * as mkdirp from 'mkdirp';
import * as fs from 'fs';
import { genTemplateValues } from '../generator/generator';
import testTemplate from './test_template';
import benchmarkTemplate from './benchmark_template';
import * as rimraf from 'rimraf';
import * as path from 'path';
import * as _ from 'lodash';
import * as Handlebars from 'handlebars';
import { template } from '../generator/templates/mainTemplate';
import { transformCode } from '../generator/transformCode';
const jsStringEscape = require('js-string-escape');
const safeStringify = require('fast-safe-stringify');

Handlebars.registerHelper(
  'string',
  (str) => new Handlebars.SafeString(jsStringEscape(str)),
);

const configFolder = `${__dirname}/config`;

const configFiles = glob.sync('**/*.json', {
  cwd: configFolder,
});
const filter = process.env.FILTER;

let importAllBenchmarksCode = '';
rimraf.sync(`${__dirname}/generated/**/*.+(ts|json)`);
rimraf.sync(`${__dirname}/../../lambda_benchmarking/generated/**/*.+(ts)`);

configFiles
  .filter((configFile) => {
    if (!filter) {
      return true;
    }

    return configFile.indexOf(filter) !== -1;
  })
  .forEach((configFile, configIndex) => {
    let config: {
      type: string;
      testInputs: string[];
      regex: string;
      mustPass?: boolean;
    };
    try {
      config = JSON.parse(
        fs.readFileSync(`${configFolder}/${configFile}`, 'utf8'),
      );
    } catch (e) {
      console.error(`Error parsing ${configFolder}/${configFile}`, e.message);
      throw e;
    }
    const testName = configFile.replace(/\.json$/, '');

    let unformattedCode, templateValues, error;
    try {
      templateValues = genTemplateValues(config.regex);
      unformattedCode = template(templateValues);
    } catch (e) {
      console.error(e);
      error = e;
    }
    const nativeRegex: RegExp = eval(config.regex);
    if (nativeRegex.global) {
      throw new Error("Can't correctly test global regex yet");
    }

    if (config.type === 'textSearch') {
      const newTestInputs = config.testInputs.map((testInput) => {
        let start = 0;
        const partlyMatches = [];
        let result: RegExpExecArray | null;
        while ((result = nativeRegex.exec(testInput.substr(start))) !== null) {
          if (result === null) {
            break;
          }
          const end = start + result.index + result[0].length;
          partlyMatches.push(testInput.substring(start, end));
          start = end + 1;
        }

        partlyMatches.push(testInput.substr(start));
        return partlyMatches;
      });

      config.testInputs = _.flatten(newTestInputs);
    }

    const testInputs = config.testInputs.map((testInput) => {
      const result = nativeRegex.exec(testInput);

      if (result === null) {
        return { testInput, isNull: true };
      }

      const groups = [];
      for (let i = 0; i < result.length; i++) {
        groups.push({
          isUndefined: result[i] === undefined,
          value: result[i],
        });
      }

      return { testInput, isNull: false, index: result.index, groups };
    });
    const fileName = `generated_${path.basename(testName)}`;

    const testCode = testTemplate({
      fileName,
      testName,
      testInputs,
      testRegex: config.regex,
    });
    const benchmarkCode = benchmarkTemplate({
      fileName,
      testName,
      testInputs,
      testRegex: config.regex,
    });

    const testFolderName = `${__dirname}/generated/${testName}`;
    const benchmarkFolderName = `${__dirname}/../../lambda_benchmarking/generated/${testName}`;

    mkdirp.sync(testFolderName);
    mkdirp.sync(benchmarkFolderName);

    if (unformattedCode && templateValues) {
      const tsCode = transformCode(unformattedCode, 'ts');
      fs.writeFileSync(`${testFolderName}/${fileName}.ts`, tsCode, 'utf8');
      fs.writeFileSync(`${benchmarkFolderName}/${fileName}.ts`, tsCode, 'utf8');
      fs.writeFileSync(
        `${testFolderName}/${fileName}.js`,
        transformCode(unformattedCode, 'js'),
        'utf8',
      );
      // fs.writeFileSync(
      //   `${testFolderName}/${fileName}_templateValues.json`,
      //   safeStringify(
      //     templateValues,
      //     (k: string, v: any) => {
      //       if (v === Infinity) {
      //         return 'Infinity';
      //       }
      //       if (v === -Infinity) {
      //         return '-Infinity';
      //       }
      //       if (Number.isNaN(v)) {
      //         return 'NaN';
      //       }

      //       return v;
      //     },
      //     2,
      //   ),
      //   'utf8',
      // );
      fs.writeFileSync(
        `${testFolderName}/${fileName}.test.ts`,
        testCode,
        'utf8',
      );

      fs.writeFileSync(
        `${benchmarkFolderName}/${fileName}.benchmark.ts`,
        benchmarkCode,
        'utf8',
      );
      importAllBenchmarksCode += `export { benchmark as ${testName.replace(
        '/',
        '___',
      )} } from "./${testName}/${fileName}.benchmark";\n`;

      fs.writeFileSync(
        `${configFolder}/${configFile}`,
        JSON.stringify({ ...config, mustPass: true }, null, 2),
        'utf8',
      );
    } else {
      console.error(`Skipped: ${configFile}`, error.toString(), error.stack);
      if (config.mustPass) {
        if (process.env.RESET) {
          fs.writeFileSync(
            `${configFolder}/${configFile}`,
            JSON.stringify({ ...config, mustPass: false }, null, 2),
            'utf8',
          );
        } else {
          throw new Error(
            `Previously passing test does not pass anymore: ${configFile}`,
          );
        }
      }
    }
  });

fs.writeFileSync(
  `${__dirname}/../../lambda_benchmarking/generated/generated_all.ts`,
  importAllBenchmarksCode,
  'utf8',
);
