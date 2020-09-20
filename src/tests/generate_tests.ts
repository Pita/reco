import * as glob from 'glob';
import mkdirp from 'mkdirp';
import * as fs from 'fs';
import { genCode } from '../generator';
import template from './generate_tests_template';
import * as rimraf from 'rimraf';

const configFolder = `${__dirname}/config`;

const configFiles = glob.sync('**/*.json', {
  cwd: configFolder,
});

rimraf.sync(`${__dirname}/generated`);

configFiles.forEach((configFile) => {
  try {
    const config: {
      type: string;
      testInputs: string[];
      regex: string;
    } = JSON.parse(fs.readFileSync(`${configFolder}/${configFile}`, 'utf8'));

    if (config.type !== 'groupMatch') {
      throw new Error(`Unsupported test type: ${config.type}`);
    }

    const testName = configFile.replace(/\.json$/, '');

    const regexCode = genCode(config.regex);

    const nativeRegex: RegExp = eval(config.regex);
    const testInputs = config.testInputs.map((testInput) => {
      const result = nativeRegex.exec(testInput);

      if (result === null) {
        return { testInput, isNull: true };
      }

      let groups = [];
      for (let i = 0; i < result.length; i++) {
        groups.push(result[i]);
      }

      return { testInput, isNull: false, index: result.index, groups };
    });
    const testCode = template({
      testName,
      testInputs,
      testRegex: config.regex,
    });

    const folderName = `${__dirname}/generated/${testName}`;

    mkdirp.sync(folderName);
    fs.writeFileSync(`${folderName}/generated_regex.ts`, regexCode, 'utf8');
    fs.writeFileSync(`${folderName}/generated_test.test.ts`, testCode, 'utf8');
  } catch (e) {
    console.error(`Skipped: ${configFile}`, e.toString());
  }
});
