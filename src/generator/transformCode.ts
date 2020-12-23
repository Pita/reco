const babel = require('@babel/standalone');
import * as prettier from 'prettier';
const typescriptPreset = require('@babel/preset-typescript');

export type ExportType = 'js' | 'ts';

const stripTypes = (code: string) => {
  const transformedResult = babel.transform(code, {
    presets: [
      ['env', { targets: { node: 'current' } }],
      ['typescript', { allExtensions: true }],
    ],
  });

  const transformedCode = transformedResult?.code;
  if (!transformedCode) {
    throw new Error('Could not transform typescript code!');
  }
  return transformedCode;
};

const prettify = (code: string): string => {
  return prettier.format(code, {
    semi: true,
    parser: 'babel-ts',
  });
};

export function transformCode(templatedCode: string, type: ExportType): string {
  switch (type) {
    case 'ts':
      return prettify(templatedCode);
    case 'js':
      return prettify(stripTypes(templatedCode));
  }
}
