import templateFile from './mainTemplate.handlebars';
import dotTemplateFile from './mainTemplate.dot.handlebars';
import { LeafTemplate, registerLeafPartial } from './leaf';
import * as Handlebars from 'handlebars';
import { ASTPath } from '../../dfa-analyzer/types';
import { UTF16UnitsCount } from '../CharRange';
import { QuickCheckDetails } from '../../dfa-analyzer/CharRangeSequencePossibilities';

export interface GroupReference {
  idx: number;
}

export interface FunctionDefinition {
  functionName: string;
  followUp: FollowUp;
  returningFunctionName: string;
  meta: {
    groups: GroupReference[];
    minCharLength: number;
    maxCharLength: number;
    anchorsAtStartOfLine: boolean;
    anchorsAtEndOfLine: boolean;
    path: ASTPath;
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
  quantifierCounterIndex?: number;
}

export type FollowUp = FunctionDefinition | null;

export interface BaseTemplateAtom {
  posLine1: string;
  posLine2: string;
  raw: string;
}

export interface CharSequenceTemplateAtom extends BaseTemplateAtom {
  type: 'charSequence';
  data: {
    nonOrderedLoading: Array<{
      unitsCount: UTF16UnitsCount;
      unicode: boolean;
    }>;
    length: number;
    chars: Array<{
      tree: LeafTemplate;
      negate: boolean;
      unitsCount: UTF16UnitsCount;
      offset: number;
      canBeSkipped: boolean;
    }>;
  };
}

export interface CharOrSetTemplateAtom extends BaseTemplateAtom {
  type: 'charOrSet';
  data: {
    tree: LeafTemplate;
    negate: boolean;
    unitsCount: UTF16UnitsCount;
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
    hasQuickCheck: boolean;
    alternativesWithQuickChecks: {
      alternative: FiberTemplateDefinition;
      quickCheck: QuickCheckDetails | null;
    };
  };
}

export interface StartAnchorTemplateAtom extends BaseTemplateAtom {
  type: 'startAnchor';
  data: Record<string, never>;
}

export interface EndAnchorTemplateAtom extends BaseTemplateAtom {
  type: 'endAnchor';
  data: Record<string, never>;
}

export interface MultiLineStartAnchorTemplateAtom extends BaseTemplateAtom {
  type: 'multiLineStartAnchor';
  data: Record<string, never>;
}

export interface MultiLineEndAnchorTemplateAtom extends BaseTemplateAtom {
  type: 'multiLineEndAnchor';
  data: Record<string, never>;
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
    backupCounter: boolean;
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

export interface LazyQuantifier extends BaseTemplateAtom {
  type: 'lazyQuantifier';
  data: {
    maxOrMinCount?: boolean;
    minCount?: number;
    maxCount?: number;
    wrappedHandler: FiberTemplateDefinition;
    followUp: FollowUp;
  };
}

export interface NonBacktrackingDisjunctionTemplateAtom
  extends BaseTemplateAtom {
  type: 'nonBacktrackingDisjunction';
  data: {
    groupsToRestore: GroupReference[];
    hasQuickCheck: boolean;
    alternativesWithQuickChecks: {
      alternative: FiberTemplateDefinition;
      quickCheck: QuickCheckDetails | null;
    };
  };
}

export type TemplateAtom =
  | CharSequenceTemplateAtom
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
  | NonBacktrackingQuantifier
  | BacktrackingFixedLengthQuantifier
  | LazyQuantifier
  | NonBacktrackingDisjunctionTemplateAtom;

export type MatchPositioning =
  | {
      type: 'startAnchored';
    }
  | { type: 'endAnchored'; maxCharsLeft: number; minCharsLeft: number }
  | { type: 'minCharsLeft'; minCharsLeft: number }
  | { type: 'fullScan' };
export interface TemplateValues {
  optimizedRegexStr: string;
  originalRegexStr: string;
  fiberHandlers: FiberTemplateDefinition[];
  greedyQuantifierHandlers: QuantifierTemplateDefinition[];
  lazyQuantifierHandlers: QuantifierTemplateDefinition[];
  mainHandler: FiberTemplateDefinition;
  groups: GroupReference[];
  quantifierCountersLength: number;
  version: string;
  matchPositioning: MatchPositioning;
}

registerLeafPartial();
export const template = Handlebars.compile(templateFile);
export const dotTemplate = Handlebars.compile(dotTemplateFile);
