import { RegExpParser } from 'regexpp';
import { simplifyRegex } from './simplifyRegex';

describe('simplifyRegex', () => {
  test('removes elements from the beginning of each alternative', () => {
    const regex = new RegExpParser().parseLiteral('/abce|abde/i');
    const simplified = simplifyRegex(regex);

    expect(simplified).toEqual('/ab(?:ce|de)/i');
  });
});
