import * as fs from 'fs';
import { LeafTemplate, registerLeafPartial } from './leaf';
import * as Handlebars from 'handlebars';
const prettier = require('prettier');

export interface GroupReference {
  idx: number;
}

export interface FunctionDefinition {
  functionName: string;
  followUp: FollowUp;
  hasCallback: boolean;
  meta: {
    groups: GroupReference[];
  };
}

export interface FiberTemplateDefinition extends FunctionDefinition {
  atoms: TemplateAtom[];
  lastAtomReturns: boolean;
}

export interface GreedyQuantifierTemplateDefinition extends FunctionDefinition {
  wrappedHandler: FunctionDefinition;
  maxOrMinCount?: boolean;
  minCount?: number;
  maxCount?: number;
  posLine1: string;
  posLine2: string;
}

export type FollowUp = FunctionDefinition | { functionName: 'callback' } | null;

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

export interface GreedyQuantifierStarterTemplateAtom extends BaseTemplateAtom {
  type: 'greedyQuantifierStarter';
  data: {
    maxOrMinCount?: boolean;
    functionName: string;
  };
}

export interface LazyQuantifierTemplateAtom extends BaseTemplateAtom {
  type: 'lazyQuantifier';
  data: {
    wrappedHandler: FiberTemplateDefinition;
    maxOrMinCount?: boolean;
    minCount?: number;
    maxCount?: number;
    followUp: FollowUp;
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
  | GreedyQuantifierStarterTemplateAtom
  | LazyQuantifierTemplateAtom
  | LookaroundTemplateAtom
  | WordBoundaryTemplateAtom
  | GroupBackReferenceTemplateAtom;

export interface TemplateValues {
  fiberHandlers: FiberTemplateDefinition[];
  greedyQuantifierHandlers: GreedyQuantifierTemplateDefinition[];
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
