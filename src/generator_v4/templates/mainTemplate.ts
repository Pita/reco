import * as fs from 'fs';
import { LeafTemplate, registerLeafPartial } from './leaf';
import * as Handlebars from 'handlebars';
const prettier = require('prettier');

export interface FiberTemplateDefinition {
  atoms: TemplateAtom[];
  lastAtomReturns: boolean;
  functionName: string;
  followUp: FollowUp;
  hasCallback: boolean;
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
    groupIndex: number;
  };
}

export interface GroupEndMarkerTemplateAtom extends BaseTemplateAtom {
  type: 'groupEndMarker';
  data: {
    groupIndex: number;
    groupStartMarkerIndex: number;
    groupEndMarkerIndex: number;
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

export interface LookaheadTemplateAtom extends BaseTemplateAtom {
  type: 'lookAhead';
  data: {
    lookAheadFiber: FiberTemplateDefinition;
    negative: boolean;
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
  | LookaheadTemplateAtom;

export interface TemplateValues {
  fiberHandlers: FiberTemplateDefinition[];
  mainHandler: FiberTemplateDefinition;
  regexStr: string;
  groupsCount: number;
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
