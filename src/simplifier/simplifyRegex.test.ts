import { RegExpParser } from 'regexpp';
import { simplifyRegex } from './simplifyRegex';

describe('simplifyRegex', () => {
  test('removes elements from the beginning of each alternative', () => {
    const regex = new RegExpParser().parseLiteral('/abce|abdf/i');
    const simplified = simplifyRegex(regex);

    expect(simplified).toEqual('/ab(?:ce|df)/i');
  });

  test('removes elements from the end of each alternative', () => {
    const regex = new RegExpParser().parseLiteral('/abef|cdef/i');
    const simplified = simplifyRegex(regex);

    expect(simplified).toEqual('/(?:ab|cd)ef/i');
  });
});
