import { AST } from 'regexpp';
import { QuickCheckDetails } from '../../dfa-analyzer/CharRangeSequencePossibilities';
import { CollectedTemplateValues } from '../CollectedTemplateValues';
import { Flags } from '../generator';
import { CharASTElement, handleCharSequence } from './CharacterSequence';
import { handleElement } from './Element';
import * as _ from 'lodash/fp';

type GroupedCharElements = ReadonlyArray<CharASTElement>;

export const handleAlternative = (
  alternative: AST.Alternative,
  templateValues: CollectedTemplateValues,
  flags: Flags,
  literal: AST.RegExpLiteral,
  quickCheck: QuickCheckDetails | null = null,
): CollectedTemplateValues => {
  const groupedElements = _.reduce(
    (acc, element) => {
      switch (element.type) {
        case 'Character':
        case 'CharacterSet':
        case 'CharacterClass': {
          const lastElement = _.last(acc);
          if (Array.isArray(lastElement)) {
            return [[element, ...lastElement], ...acc.slice(1)];
          } else {
            return [[element], ...acc];
          }
        }
        default:
          return [element, ...acc];
      }
    },
    [] as ReadonlyArray<GroupedCharElements | AST.Element>,
    _.reverse(alternative.elements),
  );

  return _.reduce(
    (templateValues, groupedElement) => {
      if (Array.isArray(groupedElement)) {
        return handleCharSequence(
          groupedElement as GroupedCharElements,
          templateValues,
          flags,
          literal,
          quickCheck,
        );
      } else {
        throw new Error('Non chars are not yet supported');
        // return handleElement(groupedElement, templateValues, flags, literal);
      }
    },
    templateValues,
    groupedElements,
  );

  // let lastFiber = currentFiber;
  // let collectedChars: CharASTElement[] = [];

  // const flushChars = () => {
  //   if (collectedChars.length > 0) {
  //     lastFiber = handleCharSequence(
  //       collectedChars,
  //       templateValues,
  //       lastFiber,
  //       flags,
  //       literal,
  //       quickCheck,
  //     );
  //   }
  //   collectedChars = [];
  // };

  // for (let i = alternative.elements.length - 1; i >= 0; i--) {
  //   const currentElement = alternative.elements[i];
  //   switch (currentElement.type) {
  //     case 'Character':
  //     case 'CharacterSet':
  //     case 'CharacterClass':
  //       collectedChars.unshift(currentElement);
  //       break;
  //     default:
  //       flushChars();
  //       lastFiber = handleElement(
  //         alternative.elements[i],
  //         templateValues,
  //         lastFiber,
  //         flags,
  //         literal,
  //       );
  //       break;
  //   }
  // }
  // flushChars();

  // return lastFiber;
};
