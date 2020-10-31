import { AST } from 'regexpp';
import { CharRangeBTreeMatcher } from '../CharRangeBTreeMatcher';
import { Collector } from '../Collector';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { Flags } from '../generator';
import matchPropertyValue from 'unicode-match-property-value-ecmascript';

function cc(char: string) {
  return char.charCodeAt(0);
}

export const handleSetOrCharacter = (
  element:
    | AST.CharacterClass
    | AST.AnyCharacterSet
    | AST.EscapeCharacterSet
    | AST.UnicodePropertyCharacterSet
    | AST.Character,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  const bTreeMatcher = new CharRangeBTreeMatcher(flags.ignoreCase);
  let negate = false;

  const addCharacterSet = (
    set:
      | AST.EscapeCharacterSet
      | AST.UnicodePropertyCharacterSet
      | AST.AnyCharacterSet,
  ) => {
    switch (set.kind) {
      case 'any':
        negate = true;
        if (!flags.dotAll) {
          bTreeMatcher.addChar(cc('\n'));
          bTreeMatcher.addChar(cc('\r'));
          bTreeMatcher.addChar(cc('\u2028'));
          bTreeMatcher.addChar(cc('\u2029'));
        }
        break;
      case 'digit':
        negate = set.negate;
        bTreeMatcher.addRange(cc('0'), cc('9'));
        break;
      case 'space':
        negate = set.negate;
        bTreeMatcher.addChar(cc(' '));
        bTreeMatcher.addChar(cc('\f'));
        bTreeMatcher.addChar(cc('\n'));
        bTreeMatcher.addChar(cc('\r'));
        bTreeMatcher.addChar(cc('\t'));
        bTreeMatcher.addChar(cc('\v'));
        bTreeMatcher.addChar(cc('\t'));
        bTreeMatcher.addChar(cc('\u00a0'));
        bTreeMatcher.addChar(cc('\u1680'));
        bTreeMatcher.addChar(cc('\u2000'));
        bTreeMatcher.addChar(cc('\u2001'));
        bTreeMatcher.addChar(cc('\u2002'));
        bTreeMatcher.addChar(cc('\u2003'));
        bTreeMatcher.addChar(cc('\u2004'));
        bTreeMatcher.addChar(cc('\u2005'));
        bTreeMatcher.addChar(cc('\u2006'));
        bTreeMatcher.addChar(cc('\u2007'));
        bTreeMatcher.addChar(cc('\u2008'));
        bTreeMatcher.addChar(cc('\u2009'));
        bTreeMatcher.addChar(cc('\u200a'));
        bTreeMatcher.addChar(cc('\u2028'));
        bTreeMatcher.addChar(cc('\u2029'));
        bTreeMatcher.addChar(cc('\u202f'));
        bTreeMatcher.addChar(cc('\u205f'));
        bTreeMatcher.addChar(cc('\u3000'));
        bTreeMatcher.addChar(cc('\ufeff'));
        break;
      case 'word':
        negate = set.negate;
        bTreeMatcher.addRange(cc('a'), cc('z'));
        bTreeMatcher.addRange(cc('A'), cc('Z'));
        bTreeMatcher.addRange(cc('0'), cc('9'));
        bTreeMatcher.addChar(cc('_'));
        break;
      case 'property':
        negate = set.negate;
        const fullValue = matchPropertyValue(set.key, set.value!);
        const regenerateSet: {
          toArray: () => number[];
        } = require(`regenerate-unicode-properties/${set.key}/${fullValue}.js`);
        regenerateSet.toArray().forEach((char) => {
          bTreeMatcher.addChar(char);
        });
        break;
    }
  };

  switch (element.type) {
    case 'Character':
      bTreeMatcher.addChar(element.value);
      break;
    case 'CharacterClass':
      // TODO: there is a bug here where the children might have a different negate attribute than the parent
      element.elements.forEach((element) => {
        switch (element.type) {
          case 'Character':
            bTreeMatcher.addChar(element.value);
            break;
          case 'CharacterClassRange':
            bTreeMatcher.addRange(element.min.value, element.max.value);
            break;
          case 'CharacterSet':
            addCharacterSet(element);
            break;
        }
      });
      negate = element.negate;
      break;
    case 'CharacterSet':
      addCharacterSet(element);
      break;
  }

  if (flags.INTERNAL_backwards) {
    return collector.addAtom(currentFiber, {
      type: 'charOrSetBackward',
      data: {
        tree: bTreeMatcher.toLeafValues(),
        negate,
        unicode: flags.unicode,
      },
      ast: element,
    });
  } else {
    return collector.addAtom(currentFiber, {
      type: 'charOrSet',
      data: {
        tree: bTreeMatcher.toLeafValues(),
        negate,
        unicode: flags.unicode,
      },
      ast: element,
    });
  }
};
