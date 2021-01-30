import { AST } from 'regexpp';
import { Collector } from '../Collector';
import { Flags } from '../generator';
import { FiberTemplateDefinition } from '../templates/mainTemplate';
import { handleSetOrCharacter } from './Character';
import { CharASTElement, handleCharSequence } from './CharacterSequence';
import { handleElement } from './Element';

export const handleAlternative = (
  alternative: AST.Alternative,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
  literal: AST.RegExpLiteral,
): FiberTemplateDefinition => {
  let lastFiber = currentFiber;
  let collectedChars: CharASTElement[] = [];

  const flushChars = () => {
    if (collectedChars.length === 1) {
      lastFiber = handleSetOrCharacter(
        collectedChars[0],
        collector,
        lastFiber,
        flags,
        literal,
      );
    }
    if (collectedChars.length > 1) {
      lastFiber = handleCharSequence(
        collectedChars,
        collector,
        lastFiber,
        flags,
        literal,
      );
    }
    collectedChars = [];
  };

  for (let i = alternative.elements.length - 1; i >= 0; i--) {
    const currentElement = alternative.elements[i];
    switch (currentElement.type) {
      case 'Character':
      case 'CharacterSet':
      case 'CharacterClass':
        collectedChars.unshift(currentElement);
        break;
      default:
        flushChars();
        lastFiber = handleElement(
          alternative.elements[i],
          collector,
          lastFiber,
          flags,
          literal,
        );
        break;
    }
  }
  flushChars();

  return lastFiber;
};
