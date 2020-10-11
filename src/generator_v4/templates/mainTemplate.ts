import * as fs from 'fs';
import { LeafTemplate, registerLeafPartial } from './leaf';
import * as Handlebars from 'handlebars';
const prettier = require('prettier');

export interface GroupReference {
  idx: number;
}

export interface FiberTemplateDefinition {
  atoms: TemplateAtom[];
  lastAtomReturns: boolean;
  functionName: string;
  followUp: FollowUp;
  hasCallback: boolean;
  meta: {
    groups: GroupReference[];
  };
}

export type FollowUp =
  | FiberTemplateDefinition
  | { functionName: 'callback' }
  | null;

export interface BaseTemplateAtom {
  posLine1: string;
  posLine2: string;
}

export interface CharOrSetTemplateAtom extends BaseTemplateAtom {
  type: 'charOrSet';
  data: {
    tree: LeafTemplate;
    negate: boolean;
    backwards: boolean;
  };
}

export interface DisjunctionTemplateAtom extends BaseTemplateAtom {
  type: 'disjunction';
  data: {
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

export interface GreedyQuantifierTemplateAtom extends BaseTemplateAtom {
  type: 'greedyQuantifier';
  data: {
    wrappedHandler: FiberTemplateDefinition;
    maxOrMinCount?: boolean;
    minCount?: number;
    maxCount?: number;
    followUp: FollowUp;
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

export type TemplateAtom =
  | CharOrSetTemplateAtom
  | DisjunctionTemplateAtom
  | StartAnchorTemplateAtom
  | EndAnchorTemplateAtom
  | GroupStartMarkerTemplateAtom
  | GroupEndMarkerTemplateAtom
  | GreedyQuantifierTemplateAtom
  | LazyQuantifierTemplateAtom
  | LookaroundTemplateAtom;

export interface TemplateValues {
  fiberHandlers: FiberTemplateDefinition[];
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
