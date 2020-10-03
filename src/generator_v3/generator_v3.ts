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
  FunctionHandle,
  FollowUpFunctionHandle,
  genCodeFromTemplate,
  TemplateValues,
  FiberTemplateDefinition,
  TemplateAtom,
} from './generator_v3_ts_template';
import { normalizeUpperLowerCase } from '../normalize_upper_lower_case';
import * as _ from 'lodash';

type SubDefinition<T> = Omit<T, 'posLine1' | 'posLine2'> & {
  location: IRegExpAST['loc'];
  followUp: FunctionHandle | null;
};

type AtomDefinition = SubDefinition<TemplateAtom>;

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

  // addGreedyQuantifier(
  //   def: Omit<
  //     GreedyQuantifierTemplateDefinition,
  //     'functionName' | 'posLine1' | 'posLine2'
  //   > & { location: IRegExpAST['loc'] },
  // ): FunctionHandle {
  //   const functionName = `greedyQuantifier${this.getNewCount()}`;

  //   this.greedyQuantifierHandlers.push({
  //     functionName,
  //     ...this.formatAstLocation(def.location),
  //     ...def,
  //   });

  //   return {
  //     functionName,
  //     isClosed: true,
  //   };
  // }

  addAtom(def: AtomDefinition): FunctionHandle {
    let currentFiber: FiberTemplateDefinition | undefined = undefined;
    if (def.followUp && def.followUp.isClosed === false) {
      currentFiber = this.fiberHandlers.find(
        (fiberHandler) =>
          fiberHandler.functionName === def.followUp?.functionName,
      );
    }
    if (currentFiber === undefined) {
      currentFiber = {
        followUp: def.followUp,
        atoms: [],
        functionName: `fiber${this.getNewCount()}`,
      };
      this.fiberHandlers.push(currentFiber);
    }

    // TODO: type this correctly
    const newAtom: any = {
      ...this.formatAstLocation(def.location),
      type: def.type,
      data: def.data,
    };

    currentFiber.atoms.unshift(newAtom);

    return {
      functionName: currentFiber.functionName,
      isClosed: false,
    };
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
    followUp: FollowUpFunctionHandle,
    flags: RegExpFlags,
  ) => FunctionHandle,
): ((
  ast: T,
  collector: Collector,
  followUp: FollowUpFunctionHandle,
  flags: RegExpFlags,
) => FunctionHandle) => {
  return (ast, collector, followUp, flags) => {
    const quantifier = ast.quantifier;
    if (quantifier == null) {
      return func(ast, collector, followUp, flags);
    }
    if (!quantifier.greedy) {
      throw new Error('Non greedy quantifiers not implemented yet');
    }

    const wrappedHandler = func(
      ast,
      collector,
      { functionName: 'callback', isClosed: true },
      flags,
    );
    if (followUp) {
      followUp.isClosed = true;
    }
    const minCount = quantifier.atLeast === 0 ? undefined : quantifier.atLeast;
    const maxCount =
      quantifier.atMost === Infinity ? undefined : quantifier.atMost;
    const maxOrMinCount = minCount !== undefined || maxCount !== undefined;

    return collector.addAtom({
      type: 'greedyQuantifier',
      data: {
        minCount,
        maxCount,
        maxOrMinCount,
        wrappedHandler,
        followUp,
      },
      location: quantifier.loc,
      followUp: null,
    });
  };
};

const handleSetOrCharacter = withQuantifier(
  (
    term: RegexSet | Character,
    collector: Collector,
    followUp: FollowUpFunctionHandle,
    flags: RegExpFlags,
  ): FunctionHandle => {
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

    return collector.addAtom({
      type: 'charOrSet',
      data: {
        chars,
        ranges,
        complement,
      },
      followUp,
      location: term.loc,
    });
  },
);

const handleGroup = withQuantifier(
  (
    group: Group,
    collector: Collector,
    followUp: FollowUpFunctionHandle,
    flags: RegExpFlags,
  ): FunctionHandle => {
    if (!group.capturing) {
      return handleDisjunction(group.value, collector, followUp, flags);
    }
    const idx = group.idx;
    if (idx == null) {
      throw new Error('Capturing group does not have an idx');
    }

    const groupEndMarker = collector.addAtom({
      type: 'groupEndMarker',
      followUp,
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

    const groupStartMarker = collector.addAtom({
      type: 'groupStartMarker',
      followUp: disjunction,
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
  followUp: FollowUpFunctionHandle,
  flags: RegExpFlags,
): FunctionHandle => {
  if (startAnchor.value) {
    throw new Error('Start Anchor has value!');
  }
  return collector.addAtom({
    type: 'startAnchor',
    followUp,
    location: startAnchor.loc,
    data: {},
  });
};

const handleEndAnchor = (
  endAnchor: Assertion,
  collector: Collector,
  followUp: FollowUpFunctionHandle,
  flags: RegExpFlags,
): FunctionHandle => {
  if (endAnchor.value) {
    throw new Error('End Anchor has value!');
  }
  return collector.addAtom({
    type: 'endAnchor',
    followUp,
    location: endAnchor.loc,
    data: {},
  });
};

const handleTerm = (
  term: Term,
  collector: Collector,
  followUp: FollowUpFunctionHandle,
  flags: RegExpFlags,
): FunctionHandle => {
  switch (term.type) {
    case 'Character':
    case 'Set':
      return handleSetOrCharacter(term, collector, followUp, flags);
    case 'Group':
      return handleGroup(term, collector, followUp, flags);
    case 'StartAnchor':
      return handleStartAnchor(term, collector, followUp, flags);
    case 'EndAnchor':
      return handleEndAnchor(term, collector, followUp, flags);
    default:
      throw new Error(`${term.type} not implemented as a term type yet`);
  }
};

const handleAlternative = (
  alternative: Alternative,
  collector: Collector,
  followUp: FollowUpFunctionHandle,
  flags: RegExpFlags,
): FunctionHandle => {
  let currentFollowUp = followUp;
  for (let i = alternative.value.length - 1; i >= 0; i--) {
    currentFollowUp = handleTerm(
      alternative.value[i],
      collector,
      currentFollowUp,
      flags,
    );
  }

  return currentFollowUp!;
};

const handleDisjunction = (
  disjunction: Disjunction,
  collector: Collector,
  followUp: FollowUpFunctionHandle,
  flags: RegExpFlags,
): FunctionHandle => {
  if (disjunction.value.length === 1) {
    return handleAlternative(disjunction.value[0], collector, followUp, flags);
  }

  if (followUp) {
    followUp.isClosed = true;
  }

  const alternatives = disjunction.value.map((alternative) =>
    handleAlternative(alternative, collector, followUp, flags),
  );

  return collector.addAtom({
    type: 'disjunction',
    data: { alternatives },
    followUp: null,
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
    null,
    pattern.flags,
  );

  const templateValues = { ...collector.getTemplateValues(), mainHandler };
  const code = genCodeFromTemplate(templateValues);
  return { code, templateValues, pattern };
};
