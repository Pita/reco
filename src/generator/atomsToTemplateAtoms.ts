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

function firstCharOfASTElement(astElement: AST.Element): RegexSlice {
  return {
    start: astElement.start,
    end: astElement.end + 1,
  };
}

function lastCharOfASTElement(astElement: AST.Element): RegexSlice {
  return {
    start: astElement.start - 1,
    end: astElement.end,
  };
}

function wholeRangeOfAstElements(
  astElements: ReadonlyArray<AST.Element>,
): RegexSlice {
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

function isArray<T>(
  value: T | ReadonlyArray<T> | null,
): value is ReadonlyArray<T> {
  return Array.isArray(value);
}

function reduceAtom(
  atom: Atom,
  optimizedRegexStr: string,
  templateAtomsAcc: ReadonlyArray<TemplateAtom>,
): {
  readonly functionName: string;
  readonly templateAtomsAcc: ReadonlyArray<TemplateAtom>;
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
      default:
        throw new Error(`templating for atom ${atom.type} not implemented yet`);
    }
  })();

  const templateAtom: TemplateAtom = {
    ...atom,
    ...astLocation,
    references: references,
    functionName,
  };

  return {
    templateAtomsAcc: [...accWithReferences, templateAtom],
    functionName,
  };
}

function reduceAtomsArray(
  atomArray: ReadonlyArray<Atom>,
  optimizedRegexStr: string,
  templateAtomsAcc: ReadonlyArray<TemplateAtom>,
): {
  readonly templateAtomsAcc: ReadonlyArray<TemplateAtom>;
  readonly functionNames: ReadonlyArray<string>;
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
    { templateAtomsAcc, functionNames: [] as ReadonlyArray<string> },
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
  templateAtomsAcc: ReadonlyArray<TemplateAtom>,
): {
  readonly templateAtomsAcc: ReadonlyArray<TemplateAtom>;
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
            [entryKey, functionNames] as readonly [
              string,
              ReadonlyArray<string>,
            ],
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
      referencesEntries: [] as ReadonlyArray<
        readonly [string, string | ReadonlyArray<string> | null]
      >,
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
  readonly templateAtoms: ReadonlyArray<TemplateAtom>;
} {
  const unrolled = reduceAtom(atom, optimizedRegexStr, []);

  return {
    templateAtoms: unrolled.templateAtomsAcc,
    entryFunctionName: unrolled.functionName,
  };
}
