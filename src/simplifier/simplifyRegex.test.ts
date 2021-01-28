import { RegExpParser } from 'regexpp';
import { simplifyRegex } from './simplifyRegex';

describe('simplifyRegex', () => {
  test('removes chars from the beginning of each alternative', () => {
    const regex = new RegExpParser().parseLiteral('/abce|abdf/i');
    const simplified = simplifyRegex(regex);

    expect(simplified).toEqual('/ab(?:ce|df)/i');
  });

  test('removes chars from the end of each alternative', () => {
    const regex = new RegExpParser().parseLiteral('/abef|cdef/i');
    const simplified = simplifyRegex(regex);

    expect(simplified).toEqual('/(?:ab|cd)ef/i');
  });

  test('removes end & start assertions of the ends of alternatives', () => {
    const regex = new RegExpParser().parseLiteral('/(^abc$|^def$)/i');
    const simplified = simplifyRegex(regex);

    expect(simplified).toEqual('/(^(?:abc|def)$)/i');
  });

  test('remove unnecassary non capturing groups', () => {
    const regex = new RegExpParser().parseLiteral('/ab(?:cd)e/i');
    const simplified = simplifyRegex(regex);

    expect(simplified).toEqual('/abcde/i');
  });

  test('resolve simple char disjunction to set', () => {
    const regex = new RegExpParser().parseLiteral('/a|b|c/i');
    const simplified = simplifyRegex(regex);

    expect(simplified).toEqual('/[abc]/i');
  });

  test.skip('resolve nested disjunctions', () => {
    const regex = new RegExpParser().parseLiteral('/((?:ab|cd)|(?:ef|gh))/i');
    const simplified = simplifyRegex(regex);

    expect(simplified).toEqual('/(ab|cd|ef|gh)/i');
  });

  test.skip('resolves min quantifiers', () => {
    const regex = new RegExpParser().parseLiteral('/a+/i');
    const simplified = simplifyRegex(regex);

    expect(simplified).toEqual('/aa*/i');
  });

  test.skip('reorder alternatives', () => {
    const regex = new RegExpParser().parseLiteral('/(ab|ac|ba|ad|bb)/i');
    const simplified = simplifyRegex(regex);

    expect(simplified).toEqual('/((a[bcd]|b[ab]))/i');
  });
});
