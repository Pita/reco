import templateFile from './mainTemplate.handlebars';
import dotTemplateFile from './mainTemplate.dot.handlebars';
import { LeafTemplate, registerLeafPartial } from './leaf';
import * as Handlebars from 'handlebars';
import { ASTPath } from '../../dfa-analyzer/types';
import { UTF16UnitsCount } from '../CharRange';
import { QuickCheckDetails } from '../../dfa-analyzer/CharRangeSequencePossibilities';

export interface GroupReference {
  readonly idx: number;
}

export interface FunctionDefinition {
  readonly functionName: string;
  readonly followUp: FollowUp;
  readonly returningFunctionName: string;
  readonly meta: {
    readonly groups: ReadonlyArray<GroupReference>;
    readonly minCharLength: number;
    readonly maxCharLength: number;
    readonly anchorsAtStartOfLine: boolean;
    readonly anchorsAtEndOfLine: boolean;
    readonly path: ASTPath;
  };
}

export interface FiberTemplateDefinition extends FunctionDefinition {
  readonly atoms: ReadonlyArray<TemplateAtom>;
  readonly lastAtomReturns: boolean;
}

export interface QuantifierTemplateDefinition extends FunctionDefinition {
  readonly wrappedHandler: FunctionDefinition;
  readonly maxOrMinCount?: boolean;
  readonly minCount?: number;
  readonly maxCount?: number;
  readonly posLine1: string;
  readonly posLine2: string;
  readonly quantifierCounterIndex?: number;
}

export type FollowUp = FunctionDefinition | null;

export interface CharSequenceTemplateAtom {
  readonly type: 'charSequence';
  readonly data: {
    readonly orderedLoading: ReadonlyArray<{
      readonly unitsCount: UTF16UnitsCount;
      readonly unicode: boolean;
    }> | null;
    readonly length: number;
    readonly chars: ReadonlyArray<{
      readonly tree: LeafTemplate;
      readonly negate: boolean;
      readonly unitsCount: UTF16UnitsCount;
      readonly offset: number;
      readonly canBeSkipped: boolean;
    }>;
  };
}

export interface CharOrSetTemplateAtom {
  readonly type: 'charOrSet';
  readonly data: {
    readonly tree: LeafTemplate;
    readonly negate: boolean;
    readonly unitsCount: UTF16UnitsCount;
    readonly unicode: boolean;
  };
}

export interface CharOrSetBackwardTemplateAtom {
  readonly type: 'charOrSetBackward';
  readonly data: {
    readonly tree: LeafTemplate;
    readonly negate: boolean;
    readonly unicode: boolean;
  };
}

export interface DisjunctionTemplateAtom {
  readonly type: 'disjunction';
  readonly data: {
    readonly hasQuickCheck: boolean;
    readonly alternativesWithQuickChecks: ReadonlyArray<{
      readonly alternative: FiberTemplateDefinition;
      readonly quickCheck: QuickCheckDetails | null;
    }>;
  };
}

export interface StartAnchorTemplateAtom {
  readonly type: 'startAnchor';
  readonly data: Record<string, never>;
}

export interface EndAnchorTemplateAtom {
  readonly type: 'endAnchor';
  readonly data: Record<string, never>;
}

export interface MultiLineStartAnchorTemplateAtom {
  readonly type: 'multiLineStartAnchor';
  readonly data: Record<string, never>;
}

export interface MultiLineEndAnchorTemplateAtom {
  readonly type: 'multiLineEndAnchor';
  readonly data: Record<string, never>;
}

export interface GroupStartMarkerTemplateAtom {
  readonly type: 'groupStartMarker';
  readonly data: {
    readonly groupReference: GroupReference;
  };
}

export interface GroupEndMarkerTemplateAtom {
  readonly type: 'groupEndMarker';
  readonly data: {
    readonly groupReference: GroupReference;
  };
}

export interface QuantifierStarterTemplateAtom {
  readonly type: 'quantifierStarter';
  readonly data: {
    readonly maxOrMinCount: boolean;
    readonly shouldBackupPrevious: boolean;
    readonly functionName: string;
    readonly quantifierCounterIndex?: number;
  };
}

export interface LookaroundTemplateAtom {
  readonly type: 'lookaround';
  readonly data: {
    readonly lookaroundFiber: FiberTemplateDefinition;
    readonly negate: boolean;
  };
}

export interface WordBoundaryTemplateAtom {
  readonly type: 'wordBoundary';
  readonly data: {
    readonly negate: boolean;
  };
}

export interface GroupBackReferenceTemplateAtom {
  readonly type: 'groupBackReference';
  readonly data: {
    readonly groupIndex: number;
  };
}

export interface NonBacktrackingQuantifier {
  readonly type: 'nonBacktrackingQuantifier';
  readonly data: {
    readonly maxOrMinCount?: boolean;
    readonly minCount?: number;
    readonly maxCount?: number;
    readonly wrappedHandler: FiberTemplateDefinition;
  };
}

export interface BacktrackingFixedLengthQuantifier {
  readonly type: 'backtrackingFixedLengthQuantifier';
  readonly data: {
    readonly maxOrMinCount?: boolean;
    readonly minCount?: number;
    readonly maxCount?: number;
    readonly wrappedHandler: FiberTemplateDefinition;
    readonly followUp: FollowUp;
    readonly fixedLength: number;
  };
}

export interface LazyQuantifier {
  readonly type: 'lazyQuantifier';
  readonly data: {
    readonly maxOrMinCount?: boolean;
    readonly minCount?: number;
    readonly maxCount?: number;
    readonly wrappedHandler: FiberTemplateDefinition;
    readonly followUp: FollowUp;
  };
}

export interface NonBacktrackingDisjunctionTemplateAtom {
  readonly type: 'nonBacktrackingDisjunction';
  readonly data: {
    readonly groupsToRestore: ReadonlyArray<GroupReference>;
    readonly hasQuickCheck: boolean;
    readonly alternativesWithQuickChecks: {
      readonly alternative: FiberTemplateDefinition;
      readonly quickCheck: QuickCheckDetails | null;
    };
  };
}

export type BaseTemplateAtom =
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

export type TemplateAtom = BaseTemplateAtom & {
  readonly posLine1: string;
  readonly posLine2: string;
  readonly raw: string;
};

export type MatchPositioning =
  | {
      readonly type: 'startAnchored';
    }
  | {
      readonly type: 'endAnchored';
      readonly maxCharsLeft: number;
      readonly minCharsLeft: number;
    }
  | { readonly type: 'minCharsLeft'; readonly minCharsLeft: number }
  | { readonly type: 'fullScan' };

export interface TemplateValues {
  readonly optimizedRegexStr: string;
  readonly originalRegexStr: string;
  readonly fiberHandlers: ReadonlyArray<FiberTemplateDefinition>;
  readonly greedyQuantifierHandlers: ReadonlyArray<QuantifierTemplateDefinition>;
  readonly lazyQuantifierHandlers: ReadonlyArray<QuantifierTemplateDefinition>;
  readonly mainHandler: FiberTemplateDefinition;
  readonly quantifierCountersLength: number;
  readonly groupsLength: number;
  readonly version: string;
  readonly matchPositioning: MatchPositioning;
}

registerLeafPartial();
export const template = Handlebars.compile(templateFile);
export const dotTemplate = Handlebars.compile(dotTemplateFile);
