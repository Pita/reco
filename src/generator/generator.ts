import { AST, RegExpParser } from 'regexpp';
import { Collector } from './Collector';
import { handleDisjunction } from './astHandler/Disjunction';
import { CharRange } from './CharRange';
import {
  FiberTemplateDefinition,
  MatchPositioning,
} from './templates/mainTemplate';

export interface Flags extends AST.Flags {
  INTERNAL_backwards?: boolean;
  INTERNAL_no_backtracking?: boolean;
}

const deriveMatchPositioning = (
  mainHandler: FiberTemplateDefinition,
): MatchPositioning => {
  if (mainHandler.meta.anchorsAtStartOfLine) {
    return {
      type: 'startAnchored',
    };
  }

  if (mainHandler.meta.minCharLength > 1) {
    return {
      type: 'minCharsLeft',
      minCharsLeft: mainHandler.meta.minCharLength,
    };
  }

  // TODO: endAnchored

  return {
    type: 'fullScan',
  };
};

export const genTemplateValues = (regexStr: string) => {
  const literal = new RegExpParser().parseLiteral(regexStr);

  const collector = new Collector(regexStr);
  const mainHandler = handleDisjunction(
    literal.pattern.alternatives,
    collector,
    collector.createFinalFiber(CharRange.createEmptyRange()),
    literal.flags,
  );

  const matchPositioning = deriveMatchPositioning(mainHandler);

  return { ...collector.getTemplateValues(), mainHandler, matchPositioning };
};
