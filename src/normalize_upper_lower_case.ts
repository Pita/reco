import _ from 'lodash';

export function normalizeUpperLowerCase(
  char: number,
  ignoreCase: boolean,
): number[] {
  if (!ignoreCase) {
    return [char];
  }

  const str = String.fromCharCode(char);
  return _.uniq([
    str.toLowerCase().charCodeAt(0),
    str.toUpperCase().charCodeAt(0),
  ]);
}
