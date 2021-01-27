import { AST, RegExpParser } from 'regexpp';
import { Collector } from './Collector';
import { handleDisjunction } from './astHandler/Disjunction';
import { CharRange } from './CharRange';
import {
  FiberTemplateDefinition,
  MatchPositioning,
} from './templates/mainTemplate';
const { version } = require('../../package.json');
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

  if (
    mainHandler.meta.anchorsAtEndOfLine &&
    mainHandler.meta.maxCharLength !== Infinity
  ) {
    return {
      type: 'endAnchored',
      maxCharsLeft: mainHandler.meta.maxCharLength,
      minCharsLeft: mainHandler.meta.minCharLength,
    };
  }

  if (mainHandler.meta.minCharLength > 0) {
    return {
      type: 'minCharsLeft',
      minCharsLeft: mainHandler.meta.minCharLength,
    };
  }

  return {
    type: 'fullScan',
  };
};

const genTemplateValuesPrivate = (regexStr: string, version: string) => {
  const literal = new RegExpParser().parseLiteral(regexStr);

  const collector = new Collector(regexStr);
  const mainHandler = handleDisjunction(
    literal.pattern.alternatives,
    collector,
    collector.createFinalFiber([]),
    literal.flags,
    literal,
  );

  const matchPositioning = deriveMatchPositioning(mainHandler);

  return {
    ...collector.getTemplateValues(),
    mainHandler,
    matchPositioning,
    version,
  };
};

export const genTemplateValues = (regexStr: string) => {
  return genTemplateValuesPrivate(regexStr, version);
};

export const genDevTemplateValues = (regexStr: string) => {
  return genTemplateValuesPrivate(regexStr, 'DEV');
};
