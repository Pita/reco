import { AST, RegExpParser, visitRegExpAST } from 'regexpp';
import { handleDisjunction } from './astHandler/Disjunction';
import {
  Atom,
  GroupReference,
  MatchPositioning,
  TemplateValues,
} from './templates/mainTemplate';
import { simplifyRegex } from '../simplifier/simplifyRegex';
import * as _ from 'lodash/fp';
import { unrollEntryAtom } from './atomsToTemplateAtoms';
import { anchoringASTReducer } from './astReducer/anchoringASTReducer';
import { lengthASTReducer } from './astReducer/lengthASTReducer';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('../../package.json');

export interface Flags extends Readonly<AST.Flags> {
  readonly INTERNAL_backwards?: boolean;
  readonly INTERNAL_no_inside_out_backtracking?: boolean;
  readonly INTERNAL_can_repeat?: boolean;
}

const deriveMatchPositioning = (
  literal: AST.RegExpLiteral,
): MatchPositioning => {
  const { anchorsAtEndOfLine, anchorsAtStartOfLine } = anchoringASTReducer(
    literal,
    literal.flags,
  );

  if (anchorsAtStartOfLine || literal.flags.sticky) {
    return {
      type: 'startAnchored',
    };
  }

  const { minCharLength, maxCharLength } = lengthASTReducer(
    literal,
    literal.flags,
  );

  if (anchorsAtEndOfLine && maxCharLength !== Infinity) {
    return {
      type: 'endAnchored',
      maxCharsLeft: maxCharLength,
      minCharsLeft: minCharLength,
    };
  }

  if (minCharLength > 0) {
    return {
      type: 'minCharsLeft',
      minCharsLeft: minCharLength,
    };
  }

  return {
    type: 'fullScan',
  };
};

type GroupIndex = ReadonlyMap<AST.CapturingGroup, GroupReference>;

const indexGroups = (literal: AST.RegExpLiteral): GroupIndex => {
  // eslint-disable-next-line functional/prefer-readonly-type
  const capturingGroups: AST.CapturingGroup[] = [];

  visitRegExpAST(literal, {
    onCapturingGroupEnter: (capturingGroup) => {
      capturingGroups.push(capturingGroup);
    },
  });

  const capturingGroupsSorted = _.sortBy(
    (group) => group.start,
    capturingGroups,
  );
  const capturingGroupsEntries = capturingGroupsSorted.map(
    (capturingGroup, idx): readonly [AST.CapturingGroup, GroupReference] => {
      const groupReference: GroupReference = { idx };
      return [capturingGroup, groupReference];
    },
  );

  return new Map(capturingGroupsEntries);
};

export interface GeneratorContext {
  readonly literal: AST.RegExpLiteral;
  readonly groupIndex: GroupIndex;
  readonly flags: Flags;
}

export type ASTHandler<ASTType, Options = undefined> = (
  ast: ASTType,
  previousAtom: Atom | null,
  context: GeneratorContext,
  extraOptions?: Options,
) => Atom | null;

const genTemplateValuesPrivate = (
  originalRegexStr: string,
  version: string,
): TemplateValues => {
  const optimizedRegexStr = simplifyRegex(originalRegexStr);

  const literal = new RegExpParser().parseLiteral(optimizedRegexStr);
  const groupIndex = indexGroups(literal);
  const context = { literal, groupIndex, flags: literal.flags };

  const entryAtom = handleDisjunction(
    literal.pattern.alternatives,
    null,
    context,
  );

  if (entryAtom === null) {
    throw new Error('Could not resolve regex');
  }

  const matchPositioning = deriveMatchPositioning(literal);

  const { entryFunctionName, templateAtoms } = unrollEntryAtom(
    optimizedRegexStr,
    entryAtom,
  );

  return {
    originalRegexStr,
    optimizedRegexStr,
    matchPositioning,
    version,
    entryFunctionName,
    templateAtoms,
    // quantifierCountersLength: 0, // TODO: figure out quantifier counter
    groupsLength: groupIndex.size,
  };
};

export const genTemplateValues = (regexStr: string): TemplateValues => {
  return genTemplateValuesPrivate(regexStr, version);
};

export const genDevTemplateValues = (regexStr: string): TemplateValues => {
  return genTemplateValuesPrivate(regexStr, 'DEV');
};
