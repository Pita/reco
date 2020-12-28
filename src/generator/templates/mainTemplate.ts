import templateFile from './mainTemplate.handlebars';
import { LeafTemplate, registerLeafPartial } from './leaf';
import * as Handlebars from 'handlebars';
import { CharRange } from '../CharRange';
import { registerBailPartial } from './bail';
import { registerAtomsPartial } from './atoms';
import { registerInlineFiberPartial } from './inlineFiber';
export interface GroupReference {
  idx: number;
}

export interface FunctionDefinition {
  functionName: string;
  followUp: FollowUp;
  meta: {
    groups: GroupReference[];
    firstCharRange: CharRange;
    minCharLength: number;
    maxCharLength: number;
  };
}

export interface FiberTemplateDefinition extends FunctionDefinition {
  atoms: TemplateAtom[];
  lastAtomReturns: boolean;
  inline?: boolean;
}

export interface QuantifierTemplateDefinition extends FunctionDefinition {
  wrappedHandler: FunctionDefinition;
  maxOrMinCount?: boolean;
  minCount?: number;
  maxCount?: number;
  posLine1: string;
  posLine2: string;
  quantifierCounterIndex?: number;
}

export type FollowUp = FunctionDefinition | null;

export interface BaseTemplateAtom {
  posLine1: string;
  posLine2: string;
  inlinedFunction?: string;
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

export interface InlineDisjunctionTemplateAtom extends BaseTemplateAtom {
  type: 'inlineDisjunction';
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
    quantifierCounterIndex?: number;
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
    wrappedHandler: FiberTemplateDefinition;
  };
}

export interface BacktrackingFixedLengthQuantifier extends BaseTemplateAtom {
  type: 'backtrackingFixedLengthQuantifier';
  data: {
    maxOrMinCount?: boolean;
    minCount?: number;
    maxCount?: number;
    wrappedHandler: FiberTemplateDefinition;
    followUp: FollowUp;
    groups: GroupReference[];
  };
}

// TODO: group by kind of atom (assertion, group, tailing, charCheck)
export type TemplateAtom =
  | CharOrSetTemplateAtom
  | CharOrSetBackwardTemplateAtom
  | DisjunctionTemplateAtom
  | InlineDisjunctionTemplateAtom
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
  | NonBacktrackingQuantifier
  | BacktrackingFixedLengthQuantifier;

export interface TemplateValues {
  fiberHandlers: FiberTemplateDefinition[];
  greedyQuantifierHandlers: QuantifierTemplateDefinition[];
  lazyQuantifierHandlers: QuantifierTemplateDefinition[];
  mainHandler: FiberTemplateDefinition;
  regexStr: string;
  groups: GroupReference[];
  quantifierCountersLength: number;
  version: string;
}

registerLeafPartial();
registerBailPartial();
registerAtomsPartial();
registerInlineFiberPartial();
export const template = Handlebars.compile(templateFile);
