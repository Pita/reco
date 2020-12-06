import * as fs from 'fs';
import { LeafTemplate, registerLeafPartial } from './leaf';
import * as Handlebars from 'handlebars';
import { CharRange } from '../CharRange';
const prettier = require('prettier');

export interface GroupReference {
  idx: number;
}

export interface FunctionDefinition {
  functionName: string;
  followUp: FollowUp;
  meta: {
    groups: GroupReference[];
    combinedCharRange: CharRange;
    firstCharRange: CharRange;
  };
}

export interface FiberTemplateDefinition extends FunctionDefinition {
  atoms: TemplateAtom[];
  lastAtomReturns: boolean;
}

export interface QuantifierTemplateDefinition extends FunctionDefinition {
  wrappedHandler: FunctionDefinition;
  maxOrMinCount?: boolean;
  minCount?: number;
  maxCount?: number;
  posLine1: string;
  posLine2: string;
}

export type FollowUp = FunctionDefinition | null;

export interface BaseTemplateAtom {
  posLine1: string;
  posLine2: string;
}

export interface CharOrSetTemplateAtom extends BaseTemplateAtom {
  type: 'charOrSet';
  data: {
    tree: LeafTemplate;
    negate: boolean;
    unicode: boolean;
  };
}

export interface CharOrSetBackwardTemplateAtom extends BaseTemplateAtom {
  type: 'charOrSetBackward';
  data: {
    tree: LeafTemplate;
    negate: boolean;
    unicode: boolean;
  };
}

export interface DisjunctionTemplateAtom extends BaseTemplateAtom {
  type: 'disjunction';
  data: {
    groupsToRestore: GroupReference[];
    alternatives: FiberTemplateDefinition[];
  };
}

export interface StartAnchorTemplateAtom extends BaseTemplateAtom {
  type: 'startAnchor';
  data: {};
}

export interface EndAnchorTemplateAtom extends BaseTemplateAtom {
  type: 'endAnchor';
  data: {};
}

export interface MultiLineStartAnchorTemplateAtom extends BaseTemplateAtom {
  type: 'multiLineStartAnchor';
  data: {};
}

export interface MultiLineEndAnchorTemplateAtom extends BaseTemplateAtom {
  type: 'multiLineEndAnchor';
  data: {};
}

export interface GroupStartMarkerTemplateAtom extends BaseTemplateAtom {
  type: 'groupStartMarker';
  data: {
    groupReference: GroupReference;
  };
}

export interface GroupEndMarkerTemplateAtom extends BaseTemplateAtom {
  type: 'groupEndMarker';
  data: {
    groupReference: GroupReference;
  };
}

export interface QuantifierStarterTemplateAtom extends BaseTemplateAtom {
  type: 'quantifierStarter';
  data: {
    maxOrMinCount?: boolean;
    functionName: string;
  };
}

export interface LookaroundTemplateAtom extends BaseTemplateAtom {
  type: 'lookaround';
  data: {
    lookaroundFiber: FiberTemplateDefinition;
    negate: boolean;
  };
}

export interface WordBoundaryTemplateAtom extends BaseTemplateAtom {
  type: 'wordBoundary';
  data: {
    negate: boolean;
  };
}

export interface GroupBackReferenceTemplateAtom extends BaseTemplateAtom {
  type: 'groupBackReference';
  data: {
    startGroupMarkerIndex: number;
    endGroupMarkerIndex: number;
  };
}

export interface NonBacktrackingQuantifier extends BaseTemplateAtom {
  type: 'nonBacktrackingQuantifier';
  data: {
    maxOrMinCount?: boolean;
    minCount?: number;
    maxCount?: number;
  };
}

export type TemplateAtom =
  | CharOrSetTemplateAtom
  | CharOrSetBackwardTemplateAtom
  | DisjunctionTemplateAtom
  | StartAnchorTemplateAtom
  | EndAnchorTemplateAtom
  | MultiLineStartAnchorTemplateAtom
  | MultiLineEndAnchorTemplateAtom
  | GroupStartMarkerTemplateAtom
  | GroupEndMarkerTemplateAtom
  | QuantifierStarterTemplateAtom
  | LookaroundTemplateAtom
  | WordBoundaryTemplateAtom
  | GroupBackReferenceTemplateAtom
  | NonBacktrackingQuantifier;

export interface TemplateValues {
  fiberHandlers: FiberTemplateDefinition[];
  greedyQuantifierHandlers: QuantifierTemplateDefinition[];
  lazyQuantifierHandlers: QuantifierTemplateDefinition[];
  mainHandler: FiberTemplateDefinition;
  regexStr: string;
  groups: GroupReference[];
}

registerLeafPartial();
const template = fs.readFileSync(
  __dirname + '/mainTemplate.handlebars',
  'utf8',
);
const compiled = Handlebars.compile(template);
export function genCodeFromTemplate(context: TemplateValues): string {
  return prettier.format(compiled(context), {
    semi: true,
    parser: 'babel-ts',
  });
}
