import * as babel from '@babel/standalone';
import * as prettier from 'prettier';
import * as typescriptPreset from '@babel/preset-typescript';

export type ExportType = 'js' | 'ts';

const stripTypes = (code: string) => {
  const transformedResult = babel.transform(code, {
    filename: 'generatedRegex.ts',
    presets: [
      typescriptPreset
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
