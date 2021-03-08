import { AST, RegExpParser } from 'regexpp';
import { handleDisjunction } from './astHandler/Disjunction';
import {
  FiberTemplateDefinition,
  MatchPositioning,
  TemplateValues,
} from './templates/mainTemplate';
import { simplifyRegex } from '../simplifier/simplifyRegex';
import {
  createTemplateValues,
  findEntryHandler,
} from './CollectedTemplateValues';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('../../package.json');

export interface Flags extends Readonly<AST.Flags> {
  readonly INTERNAL_backwards?: boolean;
  readonly INTERNAL_no_inside_out_backtracking?: boolean;
  readonly INTERNAL_can_repeat?: boolean;
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

const genTemplateValuesPrivate = (
  originalRegexStr: string,
  version: string,
): TemplateValues => {
  const optimizedRegexStr = simplifyRegex(originalRegexStr);

  const literal = new RegExpParser().parseLiteral(optimizedRegexStr);

  const blankTemplateValues = createTemplateValues(
    originalRegexStr,
    optimizedRegexStr,
  );
  const templateValues = handleDisjunction(
    literal.pattern.alternatives,
    blankTemplateValues,
    literal.flags,
    literal,
  );

  const mainHandler = findEntryHandler(templateValues);
  const matchPositioning = deriveMatchPositioning(mainHandler);

  return {
    ...templateValues,
    matchPositioning,
    mainHandler,
    version,
    quantifierCountersLength: templateValues.quantifierCounters.length,
  };
};

export const genTemplateValues = (regexStr: string): TemplateValues => {
  return genTemplateValuesPrivate(regexStr, version);
};

export const genDevTemplateValues = (regexStr: string): TemplateValues => {
  return genTemplateValuesPrivate(regexStr, 'DEV');
};
