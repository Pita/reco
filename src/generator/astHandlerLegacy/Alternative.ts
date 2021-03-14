import { AST } from 'regexpp';
import { QuickCheckDetails } from '../../dfa-analyzer/CharRangeSequencePossibilities';
import { CollectedTemplateValues } from '../CollectedTemplateValues';
import { GeneratorContext } from '../generator';
import { CharASTElement, handleCharSequence } from './CharacterSequence';
import { handleElement } from './Element';
import * as _ from 'lodash/fp';

type GroupedCharElements = {
  readonly type: 'GroupedChars';
  readonly chars: readonly CharASTElement[];
};

export const handleAlternative = (
  alternative: AST.Alternative,
  templateValues: CollectedTemplateValues,
  context: GeneratorContext,
  quickCheck: QuickCheckDetails | null = null,
): CollectedTemplateValues => {
  const groupedElements = _.reduce(
    (acc, element) => {
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
    },
    [] as readonly (GroupedCharElements | AST.Element)[],
    alternative.elements,
  );

  return _.reduce(
    (templateValues, groupedElement) => {
      switch (groupedElement.type) {
        case 'GroupedChars':
          return handleCharSequence(
            groupedElement.chars,
            templateValues,
            context,
            quickCheck,
          );
        default:
          return handleElement(groupedElement, templateValues, context);
      }
    },
    templateValues,
    groupedElements,
  );
};
