import * as glob from 'glob';
import mkdirp from 'mkdirp';
import * as fs from 'fs';
import { genCode } from '../generator';
import template from './generate_tests_template';
import * as rimraf from 'rimraf';
import * as path from 'path';

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
    if (config.type !== 'groupMatch') {
      throw new Error(`Unsupported test type: ${config.type}`);
    }

    const testName = configFile.replace(/\.json$/, '');

    const { code, templateValues } = genCode(config.regex);

    const nativeRegex: RegExp = eval(config.regex);
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
    fs.writeFileSync(`${folderName}/${fileName}.test.ts`, testCode, 'utf8');
  } catch (e) {
    passed = false;

    if (config.mustPass) {
      console.error(`Can't generate previously passing test: ${configFile}`);

      throw e;
    } else {
      console.error(`Skipped: ${configFile}`, e.toString());
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
