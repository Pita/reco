import { AST } from 'regexpp';
import { QuickCheckDetails } from '../../dfa-analyzer/CharRangeSequencePossibilities';
import { ASTHandler } from '../generator';
import { CharASTElement, handleCharSequence } from './CharacterSequence';
import * as _ from 'lodash/fp';
import { Atom } from '../templates/mainTemplate';
import { handleElement } from './Element';

type GroupedCharElements = {
  readonly type: 'GroupedChars';
  readonly chars: readonly CharASTElement[];
};

export const handleAlternative: ASTHandler<
  AST.Alternative,
  QuickCheckDetails | null
> = (alternative, nextAtom, context, quickCheck = null): Atom | null => {
  const groupedElements = alternative.elements.reduce((acc, element) => {
    switch (element.type) {
      case 'Character':
      case 'CharacterSet':
      case 'CharacterClass': {
        const firstElement = _.first(acc);
        if (firstElement && firstElement.type === 'GroupedChars') {
          const groupedChars: GroupedCharElements = {
            type: 'GroupedChars',
            chars: [...firstElement.chars, element],
          };
          return [groupedChars, ...acc.slice(1)];
        } else {
          const groupedChars: GroupedCharElements = {
            type: 'GroupedChars',
            chars: [element],
          };
          return [groupedChars, ...acc];
        }
      }
      default:
        return [element, ...acc];
    }
  }, [] as readonly (GroupedCharElements | AST.Element)[]);

  return groupedElements.reduce((nextAtom, groupedElement) => {
    switch (groupedElement.type) {
      case 'GroupedChars':
        return handleCharSequence(
          groupedElement.chars,
          nextAtom,
          context,
          quickCheck,
        );
      default:
        return handleElement(groupedElement, nextAtom, context);
    }
  }, nextAtom);
};
