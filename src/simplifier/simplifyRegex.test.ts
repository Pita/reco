import { simplifyRegex } from './simplifyRegex';

describe('simplifyRegex', () => {
  test('removes chars from the beginning of each alternative', () => {
    const simplified = simplifyRegex('/abce|abdf/i');

    expect(simplified).toEqual('/ab(?:ce|df)/i');
  });

  test('removes chars from the end of each alternative', () => {
    const simplified = simplifyRegex('/abef|cdef/i');

    expect(simplified).toEqual('/(?:ab|cd)ef/i');
  });

  test('removes end & start assertions of the ends of alternatives', () => {
    const simplified = simplifyRegex('/(^abc$|^def$)/i');

    expect(simplified).toEqual('/^(abc|def)$/i');
  });

  test('removes common assertions from groups', () => {
    const simplified = simplifyRegex('/(^abc$)|(^def$)/i');

    expect(simplified).toEqual('/^(?:(abc)|(def))$/i');
  });

  test('remove unnecassary non capturing groups', () => {
    const simplified = simplifyRegex('/ab(?:cd)e/i');

    expect(simplified).toEqual('/abcde/i');
  });

  test('resolve simple char disjunction to set', () => {
    const simplified = simplifyRegex('/a|b|c/i');

    expect(simplified).toEqual('/[abc]/i');
  });

  test('can do a simple multi pass optimization', () => {
    const simplified = simplifyRegex('/(?:ad|bd|c(?:d))/i');

    expect(simplified).toEqual('/[abc]d/i');
  });

  test('resolve nested disjunctions', () => {
    const simplified = simplifyRegex('/((?:ab|cd)|(?:ef|gh))/i');

    expect(simplified).toEqual('/(ab|cd|ef|gh)/i');
  });

  test('removes zero max quantifiers', () => {
    const simplified = simplifyRegex('/ab{0}/i');

    expect(simplified).toEqual('/a/i');
  });

  test('resolves min quantifiers', () => {
    const simplified = simplifyRegex('/a+/i');

    expect(simplified).toEqual('/aa*/i');
  });

  test('does not resolve min quantifiers if they contain groups', () => {
    const simplified = simplifyRegex('/(a)+/i');

    expect(simplified).toEqual('/(a)+/i');
  });

  test('reorder alternatives', () => {
    const simplified = simplifyRegex('/(ab|ac|ba|ad|bb)/i');

    expect(simplified).toEqual('/(a[bcd]|b[ab])/i');
  });

  test.skip('erase duplicate disjunction entries', () => {
    const simplified = simplifyRegex('/(a|a)/i');

    expect(simplified).toEqual('/(a)/i');
  });
});
