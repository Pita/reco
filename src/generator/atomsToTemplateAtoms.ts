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

// function firstCharOfASTElement(astElement: AST.Element): RegexSlice {
//   return {
//     start: astElement.start,
//     end: astElement.end + 1,
//   };
// }

// function lastCharOfASTElement(astElement: AST.Element): RegexSlice {
//   return {
//     start: astElement.start - 1,
//     end: astElement.end,
//   };
// }

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
  readonly templateAtom: TemplateAtom;
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

  switch (atom.type) {
    case 'charSequence': {
      const templateAtom: TemplateAtom = {
        ...atom,
        ...formatAstLocation(
          optimizedRegexStr,
          wholeRangeOfAstElements(atom.astElements),
        ),
        references: references,
        functionName,
      };

      return {
        templateAtomsAcc: [...accWithReferences, templateAtom],
        templateAtom,
      };
    }
    default:
      throw new Error(`templating for atom ${atom.type} not implemented yet`);
  }
}

function reduceAtomsArray(
  atomArray: ReadonlyArray<Atom>,
  optimizedRegexStr: string,
  templateAtomsAcc: ReadonlyArray<TemplateAtom>,
): {
  readonly templateAtomsAcc: ReadonlyArray<TemplateAtom>;
  readonly templateAtomsArray: ReadonlyArray<TemplateAtom>;
} {
  const { templateAtomsAcc: accWithArray, templateAtomsArray } = _.reduce(
    ({ templateAtomsAcc, templateAtomsArray }, atom) => {
      const { templateAtomsAcc: accWithAtom, templateAtom } = reduceAtom(
        atom,
        optimizedRegexStr,
        templateAtomsAcc,
      );

      return {
        templateAtomsAcc: accWithAtom,
        templateAtomsArray: [...templateAtomsArray, templateAtom],
      };
    },
    { templateAtomsAcc, templateAtomsArray: [] as ReadonlyArray<TemplateAtom> },
    atomArray,
  );

  return {
    templateAtomsAcc: accWithArray,
    templateAtomsArray,
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
          templateAtomsArray,
        } = reduceAtomsArray(entryValue, optimizedRegexStr, templateAtomsAcc);

        return {
          templateAtomsAcc: accWithArray,
          referencesEntries: [
            ...referencesEntries,
            [entryKey, templateAtomsArray] as readonly [
              string,
              ReadonlyArray<TemplateAtom>,
            ],
          ],
        };
      }

      const { templateAtomsAcc: accWithAtom, templateAtom } = reduceAtom(
        entryValue,
        optimizedRegexStr,
        templateAtomsAcc,
      );

      return {
        templateAtomsAcc: accWithAtom,
        referencesEntries: [
          ...referencesEntries,
          [entryKey, templateAtom] as readonly [string, TemplateAtom],
        ],
      };
    },
    {
      templateAtomsAcc,
      referencesEntries: [] as ReadonlyArray<
        readonly [string, TemplateAtom | readonly TemplateAtom[] | null]
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
  readonly entryTemplateAtom: TemplateAtom;
  readonly templateAtoms: ReadonlyArray<TemplateAtom>;
} {
  const unrolled = reduceAtom(atom, optimizedRegexStr, []);

  return {
    templateAtoms: unrolled.templateAtomsAcc,
    entryTemplateAtom: unrolled.templateAtom,
  };
}
