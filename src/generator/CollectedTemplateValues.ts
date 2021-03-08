import { AST } from 'regexpp';
import {
  FiberTemplateDefinition,
  TemplateAtom,
  GroupReference,
  QuantifierTemplateDefinition,
  BaseTemplateAtom,
} from './templates/mainTemplate';
import * as _ from 'lodash/fp';
import { AstElementOrQuantifierElement, ASTPath } from '../dfa-analyzer/types';

/*
  Functions should probably return fiber as well, like before

  Write unit tests
  Integrate into astHandler code

  Think about splitting functions into layers path, groups, min & max length, etc
  Think about better function names
*/

type ASTLocation = { readonly start: number; readonly end: number };

export function mergeGroupsOfFibers(
  forks: ReadonlyArray<FiberTemplateDefinition>,
): ReadonlyArray<GroupReference> {
  const groups = _.reduce(
    (acc, fork) => _.union(acc, fork.meta.groups),
    [] as ReadonlyArray<GroupReference>,
    forks,
  );

  return _.sortBy((g) => g.idx, groups);
}

export interface QuantifierCounter {
  readonly ast: AST.Quantifier;
}

export interface CollectedTemplateValues {
  readonly optimizedRegexStr: string;
  readonly originalRegexStr: string;
  readonly fiberHandlers: ReadonlyArray<Readonly<FiberTemplateDefinition>>;
  readonly greedyQuantifierHandlers: ReadonlyArray<
    Readonly<QuantifierTemplateDefinition>
  >;
  readonly lazyQuantifierHandlers: ReadonlyArray<
    Readonly<QuantifierTemplateDefinition>
  >;
  readonly groups: ReadonlyArray<Readonly<GroupReference>>;
  readonly quantifierCounters: ReadonlyArray<Readonly<QuantifierCounter>>;
  readonly counter: number;
  readonly entryFunctionName: string;
}

export function createTemplateValues(
  originalRegexStr: string,
  optimizedRegexStr: string,
): CollectedTemplateValues {
  const entry: FiberTemplateDefinition = {
    followUp: null,
    atoms: [],
    functionName: 'tailFiber',
    returningFunctionName: 'tailFiber',
    lastAtomReturns: false,
    meta: {
      groups: [],
      minCharLength: 0,
      maxCharLength: 0,
      anchorsAtStartOfLine: false,
      anchorsAtEndOfLine: false,
      path: [],
    },
  };

  return {
    optimizedRegexStr,
    originalRegexStr,
    counter: 0,
    groups: [],
    fiberHandlers: [entry],
    greedyQuantifierHandlers: [],
    lazyQuantifierHandlers: [],
    quantifierCounters: [],
    entryFunctionName: entry.functionName,
  };
}

function bumpCount(values: CollectedTemplateValues) {
  const newCount = values.counter + 1;
  return {
    values: {
      ...values,
      counter: newCount,
    },
    newCount: (newCount + '').padStart(4, '0'),
  };
}

function formatAstLocation(values: CollectedTemplateValues, ast: ASTLocation) {
  const startNeedsTruncation = ast.start > 13;
  const regexStrStart = startNeedsTruncation ? ast.start - 10 : 0;
  const endNeedsTruncation = values.optimizedRegexStr.length > ast.end + 13;
  const regexStrEnd = endNeedsTruncation
    ? ast.end + 10
    : values.optimizedRegexStr.length;

  return {
    posLine1:
      (startNeedsTruncation ? '...' : '') +
      values.optimizedRegexStr.substring(regexStrStart, regexStrEnd) +
      (endNeedsTruncation ? '...' : ''),
    posLine2:
      ' '.repeat(ast.start - regexStrStart + (startNeedsTruncation ? 3 : 0)) +
      '^'.repeat(ast.end - ast.start),
    raw: values.optimizedRegexStr.substring(ast.start, ast.end),
  };
}

export function createConnectedFiber(
  values: CollectedTemplateValues,
  followUp: FiberTemplateDefinition,
): CollectedTemplateValues {
  const { values: newValues, newCount } = bumpCount(values);

  const entry: FiberTemplateDefinition = {
    followUp,
    atoms: [],
    functionName: `fiber${newCount}`,
    lastAtomReturns: false,
    returningFunctionName: followUp.returningFunctionName,
    meta: {
      groups: followUp.meta.groups,
      minCharLength: followUp.meta.minCharLength,
      maxCharLength: followUp.meta.maxCharLength,
      anchorsAtStartOfLine: false,
      anchorsAtEndOfLine: followUp.meta.anchorsAtEndOfLine,
      path: followUp.meta.path,
    },
  };

  return {
    ...newValues,
    fiberHandlers: [entry, ...newValues.fiberHandlers],
    entryFunctionName: entry.functionName,
  };
}

// used by lookaround & non backtracking quantifier
export function createFinalFiber(
  values: CollectedTemplateValues,
  path: ASTPath,
): CollectedTemplateValues {
  const { values: newValues, newCount } = bumpCount(values);

  const functionName = `fiber${newCount}`;
  const entry: FiberTemplateDefinition = {
    followUp: null,
    atoms: [],
    functionName: functionName,
    returningFunctionName: functionName,
    lastAtomReturns: false,
    meta: {
      groups: [],
      minCharLength: 0,
      maxCharLength: 0,
      anchorsAtStartOfLine: false,
      anchorsAtEndOfLine: false,
      path,
    },
  };

  return {
    ...newValues,
    fiberHandlers: [entry, ...newValues.fiberHandlers],
    entryFunctionName: entry.functionName,
  };
}

// used by disjunction and quantifier
export function createForkingFiber(
  values: CollectedTemplateValues,
  followUpFiber: FiberTemplateDefinition,
  groups: ReadonlyArray<GroupReference>,
  anchorsAtStartOfLine: boolean,
  anchorsAtEndOfLine: boolean,
): CollectedTemplateValues {
  const { values: newValues, newCount } = bumpCount(values);

  const entry: FiberTemplateDefinition = {
    followUp: null,
    atoms: [],
    functionName: `fiber${newCount}`,
    lastAtomReturns: true,
    returningFunctionName: followUpFiber.returningFunctionName,
    meta: {
      groups: groups.slice(),
      minCharLength: 0,
      maxCharLength: 0,
      anchorsAtStartOfLine,
      anchorsAtEndOfLine,
      path: followUpFiber.meta.path,
    },
  };

  return {
    ...newValues,
    fiberHandlers: [entry, ...newValues.fiberHandlers],
    entryFunctionName: entry.functionName,
  };
}

// used by recursive quantifiers
export function createQuantifierFiberPair(
  values: CollectedTemplateValues,
  followUp: FiberTemplateDefinition,
  type: 'greedy' | 'lazy',
  astLocation: ASTLocation,
  pathForHandler: ASTPath,
): {
  readonly quantifierHandler: QuantifierTemplateDefinition;
  readonly quantifierFinalFiber: FiberTemplateDefinition;
  readonly values: CollectedTemplateValues;
} {
  const { values: newValues1, newCount: fiberCount } = bumpCount(values);

  const quantifierFinalFiber: FiberTemplateDefinition = {
    followUp: null,
    atoms: [],
    functionName: `fiber${fiberCount}`,
    lastAtomReturns: false,
    returningFunctionName: followUp.returningFunctionName,
    meta: {
      groups: [],
      minCharLength: 0,
      maxCharLength: 0,
      anchorsAtStartOfLine: false,
      anchorsAtEndOfLine: false,
      path: pathForHandler,
    },
  };

  const { values: newValues2, newCount: quantifierCount } = bumpCount(
    newValues1,
  );

  const quantifierHandler: QuantifierTemplateDefinition = {
    followUp,
    functionName:
      type === 'greedy'
        ? `greedyQuantifier${quantifierCount}`
        : `lazyQuantifier${quantifierCount}`,
    wrappedHandler: quantifierFinalFiber,
    returningFunctionName: followUp.returningFunctionName,
    meta: {
      groups: [],
      minCharLength: 0,
      maxCharLength: 0,
      anchorsAtStartOfLine: false,
      anchorsAtEndOfLine: followUp.meta.anchorsAtEndOfLine,
      path: followUp.meta.path,
    },
    ...formatAstLocation(newValues2, astLocation),
  };

  // there is no other way to create a cyclic dependency
  // eslint-disable-next-line functional/immutable-data
  quantifierFinalFiber.followUp = quantifierHandler;

  return {
    values: {
      ...newValues2,
      fiberHandlers: [quantifierFinalFiber, ...newValues2.fiberHandlers],
      greedyQuantifierHandlers: [
        ...newValues2.greedyQuantifierHandlers,
        ...(type === 'greedy' ? [quantifierHandler] : []),
      ],
      lazyQuantifierHandlers: [
        ...newValues2.greedyQuantifierHandlers,
        ...(type === 'lazy' ? [quantifierHandler] : []),
      ],
    },
    quantifierFinalFiber,
    quantifierHandler,
  };
}

export function addCapturingGroup(
  values: CollectedTemplateValues,
  currentFiber: FiberTemplateDefinition,
  ast: AST.CapturingGroup,
): {
  readonly group: GroupReference;
  readonly values: CollectedTemplateValues;
} {
  const existingGroup = values.groups.find(
    (group) => group.astStart === ast.start,
  );
  if (existingGroup !== undefined) {
    return { group: existingGroup, values };
  }

  const allGroupsUnsorted = [
    ...values.groups,
    {
      idx: -1,
      astStart: ast.start,
    },
  ];
  const allGroupsSorted = _.sortBy((g) => g.astStart, allGroupsUnsorted);
  const allGroupsCorrected = allGroupsSorted.map((group, idx) => ({
    ...group,
    idx,
  }));

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const newGroup = allGroupsCorrected.find(
    (group) => group.astStart === ast.start,
  )!;

  const newFiberHandlers = values.fiberHandlers.map((fiberHandler) => {
    if (fiberHandler !== currentFiber) {
      return fiberHandler;
    }

    const fiberGroupsUnsorted = [...fiberHandler.meta.groups, newGroup];
    const fiberGroupsSorted = _.sortBy((g) => g.idx, fiberGroupsUnsorted);

    return {
      ...fiberHandler,
      meta: {
        ...fiberHandler.meta,
        groups: fiberGroupsSorted,
      },
    };
  });

  return {
    values: {
      ...values,
      groups: allGroupsCorrected,
      fiberHandlers: newFiberHandlers,
    },
    group: newGroup,
  };
}

export function findEntryHandler(
  templateValues: CollectedTemplateValues,
): Readonly<FiberTemplateDefinition> {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return templateValues.fiberHandlers.find(
    (fiberHandler) =>
      fiberHandler.functionName === templateValues.entryFunctionName,
  )!;
}

export function addAtom(
  templateValues: CollectedTemplateValues,
  def: BaseTemplateAtom,
  astLocation: ASTLocation,
  minLength: number,
  maxLength: number,
  newPathElement:
    | AstElementOrQuantifierElement
    | ReadonlyArray<AstElementOrQuantifierElement>
    | 'noAstElement',
): CollectedTemplateValues {
  const newAtom: TemplateAtom = {
    ...def,
    ...formatAstLocation(templateValues, astLocation),
  };

  const newFiberHandlers = templateValues.fiberHandlers.map(
    (fiberHandler): FiberTemplateDefinition => {
      if (fiberHandler.functionName !== templateValues.entryFunctionName) {
        return fiberHandler;
      }

      const minCharLength = fiberHandler.meta.minCharLength + minLength;
      const maxCharLength = fiberHandler.meta.maxCharLength + maxLength;
      const atoms = [newAtom, ...fiberHandler.atoms];

      const anchorsAtStartOfLine =
        def.type !== 'disjunction'
          ? def.type === 'startAnchor'
          : fiberHandler.meta.anchorsAtStartOfLine;

      const anchorsAtEndOfLine =
        def.type === 'endAnchor' ? true : fiberHandler.meta.anchorsAtEndOfLine;

      const newPath: ASTPath = (() => {
        if (newPathElement === 'noAstElement') {
          return [];
        }

        if (Array.isArray(newPathElement)) {
          return newPathElement;
        }

        return [newPathElement];
      })();
      const path = [...newPath, ...fiberHandler.meta.path];

      return {
        ...fiberHandler,
        atoms,
        meta: {
          ...fiberHandler.meta,
          minCharLength,
          maxCharLength,
          anchorsAtStartOfLine,
          anchorsAtEndOfLine,
          path,
        },
      };
    },
  );

  return {
    ...templateValues,
    fiberHandlers: newFiberHandlers,
  };
}
