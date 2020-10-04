import {
  RegExpParser,
  Disjunction,
  Character,
  Alternative,
  IRegExpAST,
  Term,
  Set as RegexSet,
  Range,
  RegExpFlags,
  RegExpPattern,
  Group,
  Assertion,
  Quantifier,
} from 'regexp-to-ast';
import {
  genCodeFromTemplate,
  TemplateValues,
  FiberTemplateDefinition,
  TemplateAtom,
  FollowUp,
} from './generator_v3_ts_template';
import { normalizeUpperLowerCase } from '../normalize_upper_lower_case';
import * as _ from 'lodash';

type AtomDefinition = Omit<TemplateAtom, 'posLine1' | 'posLine2'> & {
  location: IRegExpAST['loc'];
};

class Collector {
  private regexStr: string;
  private counter = 0;
  private groupCount: number;
  private fiberHandlers: FiberTemplateDefinition[] = [];

  constructor(regexStr: string, groupCount: number) {
    this.regexStr = regexStr;
    this.groupCount = groupCount;
  }

  private getNewCount() {
    this.counter++;
    return (this.counter + '').padStart(4, '0');
  }

  private formatAstLocation(location: IRegExpAST['loc']) {
    return {
      posLine1: this.regexStr,
      posLine2:
        ' '.repeat(location.begin) + '^'.repeat(location.end - location.begin),
    };
  }

  createConnectedFiber(fiber: FiberTemplateDefinition) {
    // Special case where the fiber to close has zero atoms,
    // therefore we can delete it
    let followUp: FollowUp = fiber;
    const hasCallback = fiber.hasCallback;
    if (fiber.atoms.length === 0) {
      followUp = fiber.followUp;
      const index = this.fiberHandlers.indexOf(fiber);
      if (index !== -1) {
        this.fiberHandlers.splice(index, 1);
      }
    }

    const newFiber: FiberTemplateDefinition = {
      followUp,
      atoms: [],
      functionName: `fiber${this.getNewCount()}`,
      lastAtomReturns: false,
      hasCallback,
    };
    this.fiberHandlers.push(newFiber);
    return newFiber;
  }

  createFinalFiber() {
    const newFiber: FiberTemplateDefinition = {
      followUp: null,
      atoms: [],
      functionName: `fiber${this.getNewCount()}`,
      lastAtomReturns: false,
      hasCallback: false,
    };
    this.fiberHandlers.push(newFiber);
    return newFiber;
  }

  createForkingFiber(fiber: FiberTemplateDefinition) {
    const newFiber: FiberTemplateDefinition = {
      followUp: null,
      atoms: [],
      functionName: `fiber${this.getNewCount()}`,
      lastAtomReturns: true,
      hasCallback: fiber.hasCallback,
    };
    this.fiberHandlers.push(newFiber);
    return newFiber;
  }

  createCallbackFiber() {
    const newFiber: FiberTemplateDefinition = {
      followUp: { functionName: 'callback' },
      atoms: [],
      functionName: `fiber${this.getNewCount()}`,
      lastAtomReturns: false,
      hasCallback: true,
    };
    this.fiberHandlers.push(newFiber);
    return newFiber;
  }

  addAtom(currentFiber: FiberTemplateDefinition, def: AtomDefinition) {
    // TODO: type this correctly
    const newAtom: any = {
      ...this.formatAstLocation(def.location),
      type: def.type,
      data: def.data,
    };

    currentFiber.atoms.unshift(newAtom);
    return currentFiber;
  }

  getTemplateValues(): Omit<TemplateValues, 'mainHandler'> {
    return {
      regexStr: this.regexStr,
      fiberHandlers: this.fiberHandlers,
      groupsCount: this.groupCount,
    };
  }
}

interface AstWithQuantifier {
  quantifier?: Quantifier;
  loc: IRegExpAST['loc'];
}

const withQuantifier = <T extends AstWithQuantifier>(
  func: (
    ast: T,
    collector: Collector,
    currentFiber: FiberTemplateDefinition,
    flags: RegExpFlags,
  ) => FiberTemplateDefinition,
): ((
  ast: T,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: RegExpFlags,
) => FiberTemplateDefinition) => {
  return (ast, collector, currentFiber, flags) => {
    const quantifier = ast.quantifier;
    if (quantifier == null) {
      return func(ast, collector, currentFiber, flags);
    }

    const wrappedHandler = func(
      ast,
      collector,
      collector.createCallbackFiber(),
      flags,
    );
    const minCount = quantifier.atLeast === 0 ? undefined : quantifier.atLeast;
    const maxCount =
      quantifier.atMost === Infinity ? undefined : quantifier.atMost;
    const maxOrMinCount = minCount !== undefined || maxCount !== undefined;

    return collector.addAtom(collector.createForkingFiber(currentFiber), {
      type: quantifier.greedy ? 'greedyQuantifier' : 'lazyQuantifier',
      data: {
        minCount,
        maxCount,
        maxOrMinCount,
        wrappedHandler,
        followUp: currentFiber,
      },
      location: quantifier.loc,
    });
  };
};

const handleSetOrCharacter = withQuantifier(
  (
    term: RegexSet | Character,
    collector: Collector,
    currentFiber: FiberTemplateDefinition,
    flags: RegExpFlags,
  ): FiberTemplateDefinition => {
    const chars: number[] = [];
    const ranges: Range[] = [];
    let complement = false;

    // TODO: simplify ranges

    const addCharacter = (char: number) => {
      normalizeUpperLowerCase(char, flags.ignoreCase).forEach((char) =>
        chars.push(char),
      );
    };

    const addRange = (range: Range) => {
      const from = normalizeUpperLowerCase(range.from, flags.ignoreCase);
      const to = normalizeUpperLowerCase(range.to, flags.ignoreCase);

      for (let i = 0; i < from.length; i++) {
        ranges.push({ from: from[i], to: to[i] });
      }
    };

    if (term.type === 'Set') {
      complement = term.complement;
      term.value.forEach((value) => {
        if (typeof value === 'number') {
          addCharacter(value);
        } else {
          addRange(value);
        }
      });
    } else {
      addCharacter(term.value);
    }

    return collector.addAtom(currentFiber, {
      type: 'charOrSet',
      data: {
        chars,
        ranges,
        complement,
      },
      location: term.loc,
    });
  },
);

const handleGroup = withQuantifier(
  (
    group: Group,
    collector: Collector,
    currentFiber: FiberTemplateDefinition,
    flags: RegExpFlags,
  ): FiberTemplateDefinition => {
    if (!group.capturing) {
      return handleDisjunction(group.value, collector, currentFiber, flags);
    }
    const idx = group.idx;
    if (idx == null) {
      throw new Error('Capturing group does not have an idx');
    }

    const groupEndMarker = collector.addAtom(currentFiber, {
      type: 'groupEndMarker',
      location: { begin: group.loc.end - 1, end: group.loc.end },
      data: {
        groupIndex: idx,
        groupStartMarkerIndex: idx * 2,
        groupEndMarkerIndex: idx * 2 + 1,
      },
    });

    const disjunction = handleDisjunction(
      group.value,
      collector,
      groupEndMarker,
      flags,
    );

    const groupStartMarker = collector.addAtom(disjunction, {
      type: 'groupStartMarker',
      location: { begin: group.loc.begin, end: group.loc.begin + 1 },
      data: {
        groupIndex: idx,
      },
    });

    return groupStartMarker;
  },
);

const handleStartAnchor = (
  startAnchor: Assertion,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: RegExpFlags,
): FiberTemplateDefinition => {
  if (startAnchor.value) {
    throw new Error('Start Anchor has value!');
  }
  return collector.addAtom(currentFiber, {
    type: 'startAnchor',
    location: startAnchor.loc,
    data: {},
  });
};

const handleEndAnchor = (
  endAnchor: Assertion,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: RegExpFlags,
): FiberTemplateDefinition => {
  if (endAnchor.value) {
    throw new Error('End Anchor has value!');
  }
  return collector.addAtom(currentFiber, {
    type: 'endAnchor',
    location: endAnchor.loc,
    data: {},
  });
};

const handleTerm = (
  term: Term,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: RegExpFlags,
): FiberTemplateDefinition => {
  switch (term.type) {
    case 'Character':
    case 'Set':
      return handleSetOrCharacter(term, collector, currentFiber, flags);
    case 'Group':
      return handleGroup(term, collector, currentFiber, flags);
    case 'StartAnchor':
      return handleStartAnchor(term, collector, currentFiber, flags);
    case 'EndAnchor':
      return handleEndAnchor(term, collector, currentFiber, flags);
    default:
      throw new Error(`${term.type} not implemented as a term type yet`);
  }
};

const handleAlternative = (
  alternative: Alternative,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: RegExpFlags,
): FiberTemplateDefinition => {
  let lastFiber = currentFiber;
  for (let i = alternative.value.length - 1; i >= 0; i--) {
    lastFiber = handleTerm(alternative.value[i], collector, lastFiber, flags);
  }

  return lastFiber;
};

const handleDisjunction = (
  disjunction: Disjunction,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: RegExpFlags,
): FiberTemplateDefinition => {
  if (disjunction.value.length === 1) {
    return handleAlternative(
      disjunction.value[0],
      collector,
      currentFiber,
      flags,
    );
  }

  const alternatives = disjunction.value.map((alternative) =>
    handleAlternative(
      alternative,
      collector,
      collector.createConnectedFiber(currentFiber),
      flags,
    ),
  );

  return collector.addAtom(collector.createForkingFiber(currentFiber), {
    type: 'disjunction',
    data: { alternatives },
    location: disjunction.loc,
  });
};

const fixGroupIdx = (disjunction: Disjunction) => {
  let idx = 1;

  function traverse(element: any) {
    const value = element && element.value;

    if (element.type === 'Group' && element.capturing) {
      element.idx = idx;
      idx++;
    }

    if (Array.isArray(value)) {
      value.forEach((value) => traverse(value));
    } else if (value) {
      traverse(value);
    }
  }

  traverse(disjunction);

  return {
    disjunction,
    groupCount: idx,
  };
};

export const genCode = (
  regexStr: string,
): { code: string; templateValues: TemplateValues; pattern: RegExpPattern } => {
  const pattern = new RegExpParser().pattern(regexStr);
  debugger;

  if (pattern.flags.unicode) {
    throw new Error('Does not support unicode yet');
  }
  if (pattern.flags.multiLine) {
    throw new Error('Does not support multiline yet');
  }

  const { disjunction, groupCount } = fixGroupIdx(pattern.value);
  const collector = new Collector(regexStr, groupCount);
  const mainHandler = handleDisjunction(
    disjunction,
    collector,
    collector.createFinalFiber(),
    pattern.flags,
  );

  const templateValues = { ...collector.getTemplateValues(), mainHandler };
  const code = genCodeFromTemplate(templateValues);
  return { code, templateValues, pattern };
};
