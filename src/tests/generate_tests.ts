import * as glob from 'glob';
import mkdirp from 'mkdirp';
import * as fs from 'fs';
import { genCode } from '../generator';
import template from './generate_tests_template';
import * as rimraf from 'rimraf';
import * as path from 'path';
import * as _ from 'lodash';

const configFolder = `${__dirname}/config`;

const configFiles = glob.sync('**/*.json', {
  cwd: configFolder,
});

rimraf.sync(`${__dirname}/generated/**/*.+(ts|json)`);
configFiles.forEach((configFile) => {
  const config: {
    type: string;
    testInputs: string[];
    regex: string;
    mustPass?: boolean;
  } = JSON.parse(fs.readFileSync(`${configFolder}/${configFile}`, 'utf8'));
  let passed = true;

  try {
    const testName = configFile.replace(/\.json$/, '');

    const { code, templateValues, pattern } = genCode(config.regex);
    const nativeRegex: RegExp = eval(config.regex);
    if (nativeRegex.global) {
      throw new Error("Can't correctly test global regex yet");
    }

    if (config.regex.indexOf('\\W') !== -1) {
      throw new Error(`Bug in regexp parser ${config.regex}`);
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
    fs.writeFileSync(`${folderName}/${fileName}.ts`, code, 'utf8');
    fs.writeFileSync(
      `${folderName}/${fileName}_templateValues.json`,
      JSON.stringify(templateValues, null, 2),
      'utf8',
    );
    fs.writeFileSync(
      `${folderName}/${fileName}_pattern.json`,
      JSON.stringify(pattern, null, 2),
      'utf8',
    );
    fs.writeFileSync(`${folderName}/${fileName}.test.ts`, testCode, 'utf8');
  } catch (e) {
    passed = false;

    if (config.mustPass) {
      console.error(`Can't generate previously passing test: ${configFile}`);

      throw e;
    } else {
      console.error(`Skipped: ${configFile}`, e.toString(), e.stack);
    }
  }

  if (passed) {
    fs.writeFileSync(
      `${configFolder}/${configFile}`,
      JSON.stringify({ ...config, mustPass: true }, null, 2),
      'utf8',
    );
  }
});
