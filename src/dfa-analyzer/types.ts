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

export type DFAHandler<T> = (
  element: T,
  flags: Flags,
  currentLength: number,
  maxLength: number,
  path: ASTPath,
) => CharRange[];
