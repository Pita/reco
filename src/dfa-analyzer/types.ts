import { AST } from 'regexpp';
import { CharRange } from '../generator/CharRange';
import { CharRangeSequence } from './CharRangeSequence';

export type MaxCountASTElement = {
  type: 'MaxCountASTElement';
  element: AST.QuantifiableElement;
  count: number;
};

export type InfiniteASTElement = {
  type: 'InfiniteASTElement';
  element: AST.QuantifiableElement;
};

export type AstElementOrQuantifierElement =
  | AST.Node
  | MaxCountASTElement
  | InfiniteASTElement;

export type ASTPath = AstElementOrQuantifierElement[];
export interface DFACache {
  astToCharRange: Map<AST.Element, CharRange>;
}

export type ExlusiveState = 'Exlusive' | 'NotExclusive' | 'OrderExclusive';

export type DFAHandler<T> = (
  element: T,
  options: {
    cache: DFACache;
    literal: AST.RegExpLiteral;
    currentLength: number;
    maxLength: number;
    path: ASTPath;
    currentSequences: CharRangeSequence[];
  },
) => CharRangeSequence[];
