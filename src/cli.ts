#!/usr/bin/env node
// Hack to workaround with an issue requiring a babel preset within npx
import * as path from 'path';
process.env.NODE_PATH = path.resolve(__dirname, '../..');
require('module').Module._initPaths();

import yargs from 'yargs';
import { validateRegExpLiteral } from 'regexpp';
import { genCode } from './generator/generator';
import * as babel from '@babel/core';
import * as uglify from 'uglify-js';
import * as fs from 'fs';
const packageJSON = require('../package.json');

const argv = yargs(process.argv.slice(2))
  .usage('reco --out [filename].js [regex]')
  .options({
    out: {
      alias: 'o',
      default: 'generatedRegex.js',
      describe: 'The filename to write to',
      type: 'string',
    },
    type: {
      alias: 't',
      default: 'minified-js',
      describe: 'The kind of file to generate',
      choices: ['minified-js', 'js', 'ts'],
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

const transformTS = (code: string) => {
  const transformedResult = babel.transformSync(code, {
    filename: 'generatedRegex.ts',
    presets: [
      [
        '@babel/preset-env',
        { targets: { node: 'current' }, forceAllTransforms: true },
      ],
      '@babel/preset-typescript',
    ],
  });

  const transformedCode = transformedResult?.code;
  if (!transformedCode) {
    throw new Error('Could not transform typescript code!');
  }
  return transformedCode;
};

const minify = (code: string) => {
  return uglify.minify(code).code;
};

const regexStr = argv._[0] as string;
const { type, out } = argv;
const { code } = genCode(regexStr);
let processedCode;
switch (type) {
  case 'ts':
    processedCode = code;
  case 'js':
    processedCode = transformTS(code);
  case 'minified-js':
    processedCode = minify(transformTS(code));
    break;
}

const disclaimer = `
// This code was generated with RECO v${packageJSON.version}
// A Regular Expression to Code Compiler
// Visit: https://github.com/pita/reco
// 
// Generated from: '${regexStr}'
// 
// Use like this:
// 
// import { generatedRegexMatcher } from './THIS_FILE';
// const result = generatedRegexMatcher(str);
// console.log(result);
// 
// Outputs:
// {
//   index: 0, // position of the string that matched
//   matches: [ 'foo', 'bar'] // groups that matched
// }
// or null in case there is no match
`;

fs.writeFileSync(out, disclaimer + processedCode, 'utf8');
console.log(`Regex matcher code successfully written to ${out}`);
