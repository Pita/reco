#!/usr/bin/env node
import yargs from 'yargs';
import { validateRegExpLiteral } from 'regexpp';
import { genTemplateValues } from './generator/generator';
import { template } from './generator/templates/mainTemplate';
import { transformCode } from './generator/transformCode';
import * as fs from 'fs';

const argv = yargs(process.argv.slice(2))
  .usage('reco --out [filename].js [regex]')
  .options({
    out: {
      alias: 'o',
      default: '-',
      describe: 'The filename to write to, - to write stdout',
      type: 'string',
    },
    type: {
      alias: 't',
      default: 'js',
      describe: 'The kind of file to generate',
      choices: ['js', 'ts'],
      type: 'string',
    },
  })
  .check((argv) => {
    if (argv._.length !== 1) {
      throw new Error('No regex string was passed');
    }
    const regexStr = argv._[0];
    try {
      if (typeof regexStr !== 'string') {
        throw new Error('Invalid regex');
      }
      validateRegExpLiteral(regexStr);
    } catch (e) {
      throw new Error(
        `Invalid regex '${regexStr}'\nMake sure the regex has a correct format like it would be used in javascript, for example: '/[a-z]*/i`,
      );
    }

    return true;
  })
  .help().argv;

const regexStr = argv._[0] as string;
const { type, out } = argv;
const templateValues = genTemplateValues(regexStr);
const unformattedCode = template(templateValues);
let transormedCode;
switch (type) {
  case 'ts':
  case 'js':
    transormedCode = transformCode(unformattedCode, type);
    break;
  default:
    throw new Error(`Unkown type: ${type}`);
}

if (out === '-') {
  console.log(transormedCode);
} else {
  fs.writeFileSync(out, transormedCode, 'utf8');
  console.log(`Regex matcher code successfully written to ${out}`);
}
