import { AST } from 'regexpp';
import { Flags } from 'regexpp/ast';
import { CharRange } from '../generator/CharRange';

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

export type CharRangesBeforeAndAfter = {
  before: CharRange[];
  after: CharRange[];
};

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
  },
) => CharRangesBeforeAndAfter;
