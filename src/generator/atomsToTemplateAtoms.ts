import { Atom, AtomReferences, TemplateAtom } from './templates/mainTemplate';
import { AST } from 'regexpp';
import _ from 'lodash/fp';

interface RegexSlice {
  readonly start: number;
  readonly end: number;
}
function formatAstLocation(
  optimizedRegexStr: string,
  slice: RegexSlice,
): { readonly posLine1: string; readonly posLine2: string } {
  const startNeedsTruncation = slice.start > 13;
  const regexStrStart = startNeedsTruncation ? slice.start - 10 : 0;
  const endNeedsTruncation = optimizedRegexStr.length > slice.end + 13;
  const regexStrEnd = endNeedsTruncation
    ? slice.end + 10
    : optimizedRegexStr.length;

  return {
    posLine1:
      (startNeedsTruncation ? '...' : '') +
      optimizedRegexStr.substring(regexStrStart, regexStrEnd) +
      (endNeedsTruncation ? '...' : ''),
    posLine2:
      ' '.repeat(slice.start - regexStrStart + (startNeedsTruncation ? 3 : 0)) +
      '^'.repeat(slice.end - slice.start),
    // raw: optimizedRegexStr.substring(ast.start, ast.end),
  };
}

function firstCharOfASTElement(astElement: AST.Node): RegexSlice {
  return {
    start: astElement.start,
    end: astElement.start + 1,
  };
}

function lastCharOfASTElement(astElement: AST.Node): RegexSlice {
  return {
    start: astElement.end - 1,
    end: astElement.end,
  };
}

function wholeRangeOfAstElements(astElements: readonly AST.Node[]): RegexSlice {
  return _.reduce(
    ({ start: accStart, end: accEnd }, { start, end }) => {
      return {
        start: Math.min(accStart, start),
        end: Math.max(accEnd, end),
      };
    },
    { start: Infinity, end: -Infinity },
    astElements,
  );
}

function isArray<T>(value: T | readonly T[] | null): value is readonly T[] {
  return Array.isArray(value);
}

function reduceAtom(
  atom: Atom,
  optimizedRegexStr: string,
  templateAtomsAcc: readonly TemplateAtom[],
): {
  readonly functionName: string;
  readonly templateAtomsAcc: readonly TemplateAtom[];
} {
  const { templateAtomsAcc: accWithReferences, references } = reduceReferences(
    optimizedRegexStr,
    atom.references,
    templateAtomsAcc,
  );

  const functionName = `atom${(accWithReferences.length + '').padStart(
    4,
    '0',
  )}`;

  const astLocation = (() => {
    switch (atom.type) {
      case 'charSequence':
        return formatAstLocation(
          optimizedRegexStr,
          wholeRangeOfAstElements(atom.astElements),
        );
      case 'groupStartMarker':
        return formatAstLocation(
          optimizedRegexStr,
          firstCharOfASTElement(atom.astElement),
        );
      case 'groupEndMarker':
        return formatAstLocation(
          optimizedRegexStr,
          lastCharOfASTElement(atom.astElement),
        );
      case 'multiLineEndAnchor':
      case 'multiLineStartAnchor':
      case 'wordBoundary':
      case 'startAnchor':
      case 'endAnchor':
      case 'groupBackReference':
      case 'lookaround':
        return formatAstLocation(optimizedRegexStr, atom.astElement);
      default:
        throw new Error(`templating for atom ${atom.type} not implemented yet`);
    }
  })();

  const templateAtom: TemplateAtom = {
    ...atom,
    ...astLocation,
    functionName,

    // this is fine, not sure how to fix this type error
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    references: references as any,
  };

  return {
    templateAtomsAcc: [...accWithReferences, templateAtom],
    functionName,
  };
}

function reduceAtomsArray(
  atomArray: readonly Atom[],
  optimizedRegexStr: string,
  templateAtomsAcc: readonly TemplateAtom[],
): {
  readonly templateAtomsAcc: readonly TemplateAtom[];
  readonly functionNames: readonly string[];
} {
  const { templateAtomsAcc: accWithArray, functionNames } = _.reduce(
    ({ templateAtomsAcc, functionNames }, atom) => {
      const { templateAtomsAcc: accWithAtom, functionName } = reduceAtom(
        atom,
        optimizedRegexStr,
        templateAtomsAcc,
      );

      return {
        templateAtomsAcc: accWithAtom,
        functionNames: [...functionNames, functionName],
      };
    },
    { templateAtomsAcc, functionNames: [] as readonly string[] },
    atomArray,
  );

  return {
    templateAtomsAcc: accWithArray,
    functionNames,
  };
}

function reduceReferences(
  optimizedRegexStr: string,
  references: AtomReferences<Atom>,
  templateAtomsAcc: readonly TemplateAtom[],
): {
  readonly templateAtomsAcc: readonly TemplateAtom[];
  readonly references: AtomReferences<string>;
} {
  const referenceEntries = Object.entries(references);

  const {
    templateAtomsAcc: accWithReferences,
    referencesEntries: templateReferenceEntries,
  } = _.reduce(
    ({ templateAtomsAcc, referencesEntries }, [entryKey, entryValue]) => {
      if (entryValue === null) {
        return {
          templateAtomsAcc,
          referencesEntries: [
            ...referencesEntries,
            [entryKey, entryValue] as readonly [string, null],
          ],
        };
      }

      if (isArray<Atom>(entryValue)) {
        const {
          templateAtomsAcc: accWithArray,
          functionNames,
        } = reduceAtomsArray(entryValue, optimizedRegexStr, templateAtomsAcc);

        return {
          templateAtomsAcc: accWithArray,
          referencesEntries: [
            ...referencesEntries,
            [entryKey, functionNames] as readonly [string, readonly string[]],
          ],
        };
      }

      const { templateAtomsAcc: accWithAtom, functionName } = reduceAtom(
        entryValue,
        optimizedRegexStr,
        templateAtomsAcc,
      );

      return {
        templateAtomsAcc: accWithAtom,
        referencesEntries: [
          ...referencesEntries,
          [entryKey, functionName] as readonly [string, string],
        ],
      };
    },
    {
      templateAtomsAcc,
      referencesEntries: [] as readonly (readonly [
        string,
        string | readonly string[] | null,
      ])[],
    },
    referenceEntries,
  );

  const templateReferences = Object.fromEntries(
    templateReferenceEntries,
  ) as AtomReferences<string>;

  return {
    templateAtomsAcc: accWithReferences,
    references: templateReferences,
  };
}

export function unrollEntryAtom(
  optimizedRegexStr: string,
  atom: Atom,
): {
  readonly entryFunctionName: string;
  readonly templateAtoms: readonly TemplateAtom[];
} {
  const unrolled = reduceAtom(atom, optimizedRegexStr, []);

  return {
    templateAtoms: unrolled.templateAtomsAcc,
    entryFunctionName: unrolled.functionName,
  };
}
