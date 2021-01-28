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
});
