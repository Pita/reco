import * as glob from 'glob';
import mkdirp from 'mkdirp';
import * as fs from 'fs';
import { genCode } from '../generator_v4/generator_v4';
import template from './generate_tests_template';
import * as rimraf from 'rimraf';
import * as path from 'path';
import * as _ from 'lodash';
const safeStringify = require('fast-safe-stringify');

const configFolder = `${__dirname}/config`;

const configFiles = glob.sync('**/*.json', {
  cwd: configFolder,
});
const filter = process.env.TEST_FILTER;

rimraf.sync(`${__dirname}/generated/**/*.+(ts|json)`);
configFiles
  .filter((configFile) => {
    if (!filter) {
      return true;
    }

    return configFile.indexOf(filter) !== -1;
  })
  .forEach((configFile) => {
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

    const { code, templateValues, literal, error } = genCode(config.regex);
    const nativeRegex: RegExp = eval(config.regex);
    if (nativeRegex.global) {
      throw new Error("Can't correctly test global regex yet");
    }

    if (config.type === 'textSearch') {
      const newTestInputs = config.testInputs.map((testInput) => {
        let start = 0;
        let partlyMatches = [];
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

      let groups = [];
      for (let i = 0; i < result.length; i++) {
        groups.push({
          isUndefined: result[i] === undefined,
          value: result[i],
        });
      }

      return { testInput, isNull: false, index: result.index, groups };
    });
    const fileName = `generated_${path.basename(testName)}`;

    const testCode = template({
      fileName,
      testName,
      testInputs,
      testRegex: config.regex,
    });

    const folderName = `${__dirname}/generated/${testName}`;

    mkdirp.sync(folderName);
    fs.writeFileSync(
      `${folderName}/${fileName}_pattern.json`,
      safeStringify(literal, null, 2),
      'utf8',
    );
    if (code && templateValues) {
      fs.writeFileSync(`${folderName}/${fileName}.ts`, code, 'utf8');
      fs.writeFileSync(
        `${folderName}/${fileName}_templateValues.json`,
        JSON.stringify(templateValues, null, 2),
        'utf8',
      );
      fs.writeFileSync(`${folderName}/${fileName}.test.ts`, testCode, 'utf8');

      if (process.env.RESET) {
        fs.writeFileSync(
          `${configFolder}/${configFile}`,
          JSON.stringify({ ...config, mustPass: false }, null, 2),
          'utf8',
        );
      } else {
        fs.writeFileSync(
          `${configFolder}/${configFile}`,
          JSON.stringify({ ...config, mustPass: true }, null, 2),
          'utf8',
        );
      }
    } else {
      console.error(`Skipped: ${configFile}`, error.toString(), error.stack);
      if (config.mustPass) {
        throw new Error(
          `Previously passing test does not pass anymore: ${configFile}`,
        );
      }
    }
  });
