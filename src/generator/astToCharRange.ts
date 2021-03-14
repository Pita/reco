import { AST } from 'regexpp';
import { Flags } from './generator';
import matchPropertyValue from 'unicode-match-property-value-ecmascript';
import { CharRange } from './CharRange';

const SPACES = [
  ' ',
  '\f',
  '\n',
  '\r',
  '\t',
  '\v',
  '\t',
  '\u00a0',
  '\u1680',
  '\u2000',
  '\u2001',
  '\u2002',
  '\u2003',
  '\u2004',
  '\u2005',
  '\u2006',
  '\u2007',
  '\u2008',
  '\u2009',
  '\u200a',
  '\u2028',
  '\u2029',
  '\u202f',
  '\u205f',
  '\u3000',
  '\ufeff',
];

const NEW_LINES = ['\n', '\r', '\u2028', '\u2029'];

const WORDS = [
  { from: 'a', to: 'z' },
  { from: 'A', to: 'Z' },
  { from: '0', to: '9' },
  '_',
];

export const astToCharRange = (
  element:
    | AST.CharacterClass
    | AST.AnyCharacterSet
    | AST.EscapeCharacterSet
    | AST.UnicodePropertyCharacterSet
    | AST.Character,
  flags: Flags,
): CharRange => {
  const { ignoreCase } = flags;

  const addCharacterSet = (
    set:
      | AST.EscapeCharacterSet
      | AST.UnicodePropertyCharacterSet
      | AST.AnyCharacterSet,
  ): CharRange => {
    switch (set.kind) {
      case 'any':
        if (!flags.dotAll) {
          return CharRange.create(NEW_LINES, {
            negate: true,
            ignoreCase,
          });
        } else {
          return CharRange.createFullRange();
        }
      case 'digit':
        return CharRange.create([{ from: '0', to: '9' }], {
          negate: set.negate,
          ignoreCase,
        });
      case 'space':
        return CharRange.create(SPACES, { negate: set.negate, ignoreCase });
      case 'word':
        return CharRange.create(WORDS, { negate: set.negate, ignoreCase });
      case 'property': {
        const setValue = set.value;
        if (setValue === null) {
          throw new Error('Set value is null');
        }
        const fullValue = matchPropertyValue(set.key, setValue);
        const regenerateSet: {
          readonly toArray: () => readonly number[];
          // eslint-disable-next-line @typescript-eslint/no-var-requires
        } = require(`regenerate-unicode-properties/${set.key}/${fullValue}.js`);
        return CharRange.create(regenerateSet.toArray(), {
          negate: set.negate,
          ignoreCase,
        });
      }
    }
  };

  const newCharRange: CharRange = (() => {
    switch (element.type) {
      case 'Character':
        return CharRange.create([element.value], { ignoreCase, negate: false });
      case 'CharacterClass': {
        const charRange = element.elements.reduce(
          (currentCharRange, element) => {
            switch (element.type) {
              case 'Character':
                return currentCharRange.union(
                  CharRange.create([element.value], {
                    negate: false,
                    ignoreCase,
                  }),
                );
              case 'CharacterClassRange':
                return currentCharRange.union(
                  CharRange.create(
                    [{ from: element.min.value, to: element.max.value }],
                    {
                      negate: false,
                      ignoreCase,
                    },
                  ),
                );
              case 'CharacterSet':
                return currentCharRange.union(addCharacterSet(element));
            }
          },
          CharRange.createEmptyRange(),
        );
        return element.negate ? charRange.invert() : charRange;
      }
      case 'CharacterSet':
        return addCharacterSet(element);
    }
  })();

  return newCharRange;
};
