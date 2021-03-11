import templateFile from './mainTemplate.handlebars';
// import dotTemplateFile from './mainTemplate.dot.handlebars.legacy';
import { LeafTemplate, registerLeafPartial } from './leaf';
import * as Handlebars from 'handlebars';
import { UTF16UnitsCount } from '../CharRange';
import { QuickCheckDetails } from '../../dfa-analyzer/CharRangeSequencePossibilities';
import { AST } from 'regexpp';
import { CharASTElement } from '../astHandler/CharacterSequence';

export interface GroupReference {
  readonly idx: number;
}

// Idea: backtracking strategy analayzer!

// TODO: when should that be created?

// interface References<HandlerType> {
//   readonly [type: string]: HandlerType | ReadonlyArray<HandlerType> | null;
// } // TODO: implement me

export interface AtomReferences<HandlerType> {
  readonly nextAtom: HandlerType | null;
  readonly [key: string]: HandlerType | ReadonlyArray<HandlerType> | null;
}

interface BaseAtom<HandlerType> {
  readonly references: AtomReferences<HandlerType>;
}

export interface RecursiveQuantifierAtom<HandlerType>
  extends BaseAtom<HandlerType> {
  readonly type: 'recursiveQuantifier';
  readonly astElement: AST.Quantifier;
  readonly maxOrMinCount?: boolean;
  readonly minCount?: number;
  readonly maxCount?: number;
  readonly references: {
    readonly nextAtom: HandlerType | null;
    readonly wrappedHandler: HandlerType;
  };
}

export interface CharSequenceAtom<HandlerType> extends BaseAtom<HandlerType> {
  readonly type: 'charSequence';
  readonly astElements: ReadonlyArray<CharASTElement>;
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

export interface StartAnchorAtom<HandlerType> extends BaseAtom<HandlerType> {
  readonly type: 'startAnchor';
  readonly astElement: AST.EdgeAssertion;
  readonly data: Record<string, never>;
}

export interface EndAnchorAtom<HandlerType> extends BaseAtom<HandlerType> {
  readonly type: 'endAnchor';
  readonly astElement: AST.EdgeAssertion;
  readonly data: Record<string, never>;
}

export interface MultiLineStartAnchorAtom<HandlerType>
  extends BaseAtom<HandlerType> {
  readonly type: 'multiLineStartAnchor';
  readonly astElement: AST.EdgeAssertion;
  readonly data: Record<string, never>;
}

export interface MultiLineEndAnchorAtom<HandlerType>
  extends BaseAtom<HandlerType> {
  readonly type: 'multiLineEndAnchor';
  readonly astElement: AST.EdgeAssertion;
  readonly data: Record<string, never>;
}

export interface GroupStartMarkerAtom<HandlerType>
  extends BaseAtom<HandlerType> {
  readonly type: 'groupStartMarker';
  readonly astElement: AST.CapturingGroup;
  readonly data: {
    readonly groupReference: GroupReference;
  };
}

export interface GroupEndMarkerAtom<HandlerType> extends BaseAtom<HandlerType> {
  readonly type: 'groupEndMarker';
  readonly astElement: AST.CapturingGroup;
  readonly data: {
    readonly groupReference: GroupReference;
  };
}

export interface RecursiveQuantifierStarterAtom<HandlerType>
  extends BaseAtom<HandlerType> {
  readonly type: 'recursiveQuantifierStarter';
  readonly astElement: AST.Quantifier;
  readonly data: {
    readonly maxOrMinCount: boolean;
    readonly shouldBackupPrevious: boolean;
    readonly quantifier: RecursiveQuantifierAtom<HandlerType>;
    readonly quantifierCounterIndex?: number;
  };
}

export interface LookaroundAtom<HandlerType> extends BaseAtom<HandlerType> {
  readonly type: 'lookaround';
  readonly astElement: AST.LookaroundAssertion;
  readonly data: {
    readonly negate: boolean;
  };
  readonly references: {
    readonly nextAtom: HandlerType | null;
    readonly lookaround: HandlerType;
  };
}

export interface WordBoundaryAtom<HandlerType> extends BaseAtom<HandlerType> {
  readonly type: 'wordBoundary';
  readonly astElement: AST.WordBoundaryAssertion;
  readonly data: {
    readonly negate: boolean;
  };
}

export interface GroupBackReferenceAtom<HandlerType>
  extends BaseAtom<HandlerType> {
  readonly type: 'groupBackReference';
  readonly astElement: AST.Backreference;
  readonly data: {
    readonly groupIndex: number;
  };
}

export interface GreedyPossessiveQuantifierAtom<HandlerType>
  extends BaseAtom<HandlerType> {
  readonly type: 'greedyPossessiveQuantifier';
  readonly astElement: AST.Quantifier;
  readonly data: {
    readonly maxOrMinCount?: boolean;
    readonly minCount?: number;
    readonly maxCount?: number;
  };
  readonly references: {
    readonly nextAtom: HandlerType | null;
    readonly wrappedHandler: HandlerType;
  };
}

export interface GreedyBacktrackingFixedLengthQuantifierAtom<HandlerType>
  extends BaseAtom<HandlerType> {
  readonly type: 'greedyBacktrackingFixedLengthQuantifier';
  readonly astElement: AST.Quantifier;
  readonly data: {
    readonly maxOrMinCount?: boolean;
    readonly minCount?: number;
    readonly maxCount?: number;
    readonly fixedLength: number;
  };
  readonly references: {
    readonly nextAtom: HandlerType | null;
    readonly wrappedHandler: HandlerType;
  };
}

export interface LazyQuantifierAtom<HandlerType> extends BaseAtom<HandlerType> {
  readonly type: 'lazyQuantifier';
  readonly astElement: AST.Quantifier;
  readonly data: {
    readonly maxOrMinCount?: boolean;
    readonly minCount?: number;
    readonly maxCount?: number;
  };
  readonly references: {
    readonly nextAtom: HandlerType | null;
    readonly wrappedHandler: HandlerType;
  };
}

export interface DisjunctionAtom<HandlerType> extends BaseAtom<HandlerType> {
  readonly type: 'disjunction';
  readonly astElements: ReadonlyArray<AST.Alternative>;
  readonly data: {
    readonly quickChecks: ReadonlyArray<QuickCheckDetails>;
  };
  readonly references: {
    readonly nextAtom: HandlerType | null;
    readonly alternatives: ReadonlyArray<HandlerType>;
  };
}

export interface PossessiveDisjunctionAtom<HandlerType>
  extends BaseAtom<HandlerType> {
  readonly type: 'possessiveDisjunction';
  readonly astElements: ReadonlyArray<AST.Alternative>;
  readonly data: {
    readonly groupsToRestore: ReadonlyArray<GroupReference>;
    readonly quickChecks: ReadonlyArray<QuickCheckDetails>;
  };
  readonly references: {
    readonly nextAtom: HandlerType | null;
    readonly alternatives: ReadonlyArray<HandlerType>;
  };
}

export type Atom =
  // Char matching
  | CharSequenceAtom<Atom>

  // Back reference
  | GroupBackReferenceAtom<Atom>

  // Disjunction
  | DisjunctionAtom<Atom>
  | PossessiveDisjunctionAtom<Atom>

  // Assertions
  | StartAnchorAtom<Atom>
  | EndAnchorAtom<Atom>
  | MultiLineStartAnchorAtom<Atom>
  | MultiLineEndAnchorAtom<Atom>
  | LookaroundAtom<Atom>
  | WordBoundaryAtom<Atom>

  // Groups
  | GroupStartMarkerAtom<Atom>
  | GroupEndMarkerAtom<Atom>

  // Quantifier
  | GreedyPossessiveQuantifierAtom<Atom>
  | GreedyBacktrackingFixedLengthQuantifierAtom<Atom>
  | LazyQuantifierAtom<Atom>

  // Recursive Quantifier
  | RecursiveQuantifierStarterAtom<Atom>
  | RecursiveQuantifierAtom<Atom>;

export type TemplateAtom = (
  | // Char matching
  CharSequenceAtom<string>

  // Back reference
  | GroupBackReferenceAtom<string>

  // Disjunction
  | DisjunctionAtom<string>
  | PossessiveDisjunctionAtom<string>

  // Assertions
  | StartAnchorAtom<string>
  | EndAnchorAtom<string>
  | MultiLineStartAnchorAtom<string>
  | MultiLineEndAnchorAtom<string>
  | LookaroundAtom<string>
  | WordBoundaryAtom<string>

  // Groups
  | GroupStartMarkerAtom<string>
  | GroupEndMarkerAtom<string>

  // Quantifier
  | GreedyPossessiveQuantifierAtom<string>
  | GreedyBacktrackingFixedLengthQuantifierAtom<string>
  | LazyQuantifierAtom<string>

  // Recursive Quantifier
  | RecursiveQuantifierStarterAtom<string>
  | RecursiveQuantifierAtom<string>
) & {
  readonly functionName: string;
  readonly posLine1: string;
  readonly posLine2: string;
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
  readonly version: string;

  readonly templateAtoms: ReadonlyArray<TemplateAtom>;
  readonly entryFunctionName: string;

  readonly matchPositioning: MatchPositioning;
  readonly groupsLength: number;

  // TODO: might not be necassary
  // readonly quantifierCountersLength: number;
}

registerLeafPartial();
export const template = Handlebars.compile(templateFile);
// export const dotTemplate = Handlebars.compile(dotTemplateFile);
