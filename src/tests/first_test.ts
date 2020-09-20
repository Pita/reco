import { genCode } from '../generator';
import * as fs from 'fs';

const regex = /[a-zA-Z0-9]/;
const testInputs = ['hello', 'what', '03aasdf90', '1223!8', ';,2342abc'];
const testName = 'char_sets';
let compiledRegexModule: {
  exec: (input: string) => { matches: string[]; index: number } | null;
};

beforeAll(() => {
  const code = genCode(regex.toString());
  const filename = `./generated_${testName}_regex.ts`;
  fs.writeFileSync(`${__dirname}/${filename}`, code, 'utf8');
  compiledRegexModule = require(filename).Regex;
});

describe(testName, () => {
  testInputs.forEach((testInput) => {
    test(`proccesses test input '${testInput}' correctly`, () => {
      const jsRegexResult = regex.exec(testInput);
      const compiledRegexResult = compiledRegexModule.exec(testInput);

      if (jsRegexResult === null || compiledRegexResult === null) {
        expect(compiledRegexResult).toBeNull();
        expect(jsRegexResult).toBeNull();
        return;
      }

      expect(jsRegexResult.index).toBe(compiledRegexResult.index);

      for (let i = 0; i < jsRegexResult.length; i++) {
        expect(compiledRegexResult.matches[i]).toBe(jsRegexResult[i]);
      }
    });
  });
});
