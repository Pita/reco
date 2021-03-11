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

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('../../package.json');

export interface Flags extends Readonly<AST.Flags> {
  readonly INTERNAL_backwards?: boolean;
  readonly INTERNAL_no_inside_out_backtracking?: boolean;
  readonly INTERNAL_can_repeat?: boolean;
}

// const deriveMatchPositioning = (
//   mainHandler: FiberTemplateDefinition,
// ): MatchPositioning => {
//   if (mainHandler.meta.anchorsAtStartOfLine) {
//     return {
//       type: 'startAnchored',
//     };
//   }

//   if (
//     mainHandler.meta.anchorsAtEndOfLine &&
//     mainHandler.meta.maxCharLength !== Infinity
//   ) {
//     return {
//       type: 'endAnchored',
//       maxCharsLeft: mainHandler.meta.maxCharLength,
//       minCharsLeft: mainHandler.meta.minCharLength,
//     };
//   }

//   if (mainHandler.meta.minCharLength > 0) {
//     return {
//       type: 'minCharsLeft',
//       minCharsLeft: mainHandler.meta.minCharLength,
//     };
//   }

//   return {
//     type: 'fullScan',
//   };
// };

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

  // const blankTemplateValues = createTemplateValues(
  //   originalRegexStr,
  //   optimizedRegexStr,
  // );

  const entryAtom = handleDisjunction(
    literal.pattern.alternatives,
    null,
    context,
  );

  if (entryAtom === null) {
    throw new Error('Could not resolve regex');
  }

  // TODO: bring back match positioning optimization
  // const matchPositioning = deriveMatchPositioning(mainHandler);
  const matchPositioning: MatchPositioning = {
    type: 'fullScan',
  };

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
