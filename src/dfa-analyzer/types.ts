import { AST } from 'regexpp';
import { CharRange } from '../generator/CharRange';
import { CharRangeSequence } from './CharRangeSequence';

export type OptionalASTElement = {
  type: 'OptionalASTElement';
  element: AST.QuantifiableElement;
};

export type InfiniteASTElement = {
  type: 'InfiniteASTElement';
  element: AST.QuantifiableElement;
};

export type AstElementOrQuantifierElement =
  | AST.Element
  | OptionalASTElement
  | InfiniteASTElement;

export type ASTPath = AstElementOrQuantifierElement[];
export interface DFACache {
  astToCharRange: Map<AST.Element, CharRange>;
}

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
