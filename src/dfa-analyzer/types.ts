import { AST } from 'regexpp';
import { CharRange } from '../generator/CharRange';
import { CharRangeSequence } from './CharRangeSequence';

export type MaxCountASTElement = {
  readonly type: 'MaxCountASTElement';
  readonly element: AST.QuantifiableElement;
  readonly count: number;
};

export type InfiniteASTElement = {
  readonly type: 'InfiniteASTElement';
  readonly element: AST.QuantifiableElement;
};

export type AstElementOrQuantifierElement =
  | AST.Node
  | MaxCountASTElement
  | InfiniteASTElement;

export type ASTPath = readonly AstElementOrQuantifierElement[];
export interface DFACache {
  readonly astToCharRange: ReadonlyMap<AST.Element, CharRange>;
}

export type ExclusiveState = 'Exclusive' | 'NotExclusive' | 'OrderExclusive';

export type DFAHandler<T> = (
  element: T,
  options: {
    readonly cache: DFACache;
    readonly literal: AST.RegExpLiteral;
    readonly currentLength: number;
    readonly maxLength: number;
    readonly path: ASTPath;
    readonly currentSequences: readonly CharRangeSequence[];
  },
) => readonly CharRangeSequence[];
