import {
  RegExpParser,
  Disjunction,
  Character,
  Alternative,
  IRegExpAST,
  Term,
  Quantifier,
  Group,
  Set as RegexSet,
  Range,
} from 'regexp-to-ast';
import {
  FunctionHandle,
  FollowUpFunctionHandle,
  TemplateCharacterDefinition,
  genCodeFromTemplate,
  TemplateGroupMarkerDefinition,
  TemplateValues,
  TemplateSetDefinition,
  TemplateDisjunctionDefinition,
  TemplateRecursiveQuantifierDefinition,
  TemplateQuantifierWithMinOrMaxDefinition,
} from './generator_ts_template';

type SubDefinition<T> = Omit<T, 'functionName' | 'posLine1' | 'posLine2'> & {
  location: IRegExpAST['loc'];
};

type CharacterDefinition = SubDefinition<TemplateCharacterDefinition>;
type GroupMarkerDefinition = SubDefinition<TemplateGroupMarkerDefinition>;
type SetDefinition = SubDefinition<TemplateSetDefinition>;
type DisjunctionDefinition = SubDefinition<TemplateDisjunctionDefinition>;
type RecursiveQuantifierDefinition = SubDefinition<
  TemplateRecursiveQuantifierDefinition
>;
type QuantifierWithMinOrMaxDefinition = SubDefinition<
  TemplateQuantifierWithMinOrMaxDefinition
>;

class Collector {
  private regexStr: string;
  private counter = 0;
  private groups = 1;
  private characterHandler: TemplateCharacterDefinition[] = [];
  private groupMarkerHandler: TemplateGroupMarkerDefinition[] = [];
  private setHandler: TemplateSetDefinition[] = [];
  private disjunctionHandler: TemplateDisjunctionDefinition[] = [];
  private greedyQuantifierHandler: TemplateRecursiveQuantifierDefinition[] = [];
  private lazyQuantifierHandler: TemplateRecursiveQuantifierDefinition[] = [];
  private quantifierWithMinOrMaxHandler: TemplateQuantifierWithMinOrMaxDefinition[] = [];

  constructor(regexStr: string) {
    this.regexStr = regexStr;
  }

  private getNewCount() {
    this.counter++;
    return this.counter;
  }

  private formatAstLocation(location: IRegExpAST['loc']) {
    return {
      posLine1: this.regexStr,
      posLine2:
        ' '.repeat(location.begin) + '^'.repeat(location.end - location.begin),
    };
  }

  bumpGroupsCount(idx: number) {
    this.groups = Math.max(this.groups, idx + 1);
  }

  addCharacterDefinition(def: CharacterDefinition): FunctionHandle {
    const functionName = 'handleCharacter' + this.getNewCount();
    this.characterHandler.push({
      functionName,
      ...this.formatAstLocation(def.location),
      ...def,
    });

    return { functionName };
  }

  addGroupMarkerDefintion(def: GroupMarkerDefinition): FunctionHandle {
    const functionName = 'groupMarker' + this.getNewCount();
    this.groupMarkerHandler.push({
      functionName,
      ...this.formatAstLocation(def.location),
      ...def,
    });

    return { functionName };
  }

  addDisjunctionDefintion(def: DisjunctionDefinition): FunctionHandle {
    const functionName = 'handleDisjunction' + this.getNewCount();
    this.disjunctionHandler.push({
      functionName,
      ...this.formatAstLocation(def.location),
      ...def,
    });

    return { functionName };
  }

  addSetDefintion(def: SetDefinition): FunctionHandle {
    const functionName = 'handleSet' + this.getNewCount();
    this.setHandler.push({
      functionName,
      ...this.formatAstLocation(def.location),
      ...def,
    });

    return { functionName };
  }

  addLazyQuantifierDefintion(
    def: RecursiveQuantifierDefinition,
  ): FunctionHandle {
    const functionName = 'lazyQuantifier' + this.getNewCount();
    this.lazyQuantifierHandler.push({
      functionName,
      ...this.formatAstLocation(def.location),
      ...def,
    });

    return { functionName };
  }

  addGreedyQuantifierDefintion(
    def: RecursiveQuantifierDefinition,
  ): FunctionHandle {
    const functionName = 'greedyQuantifier' + this.getNewCount();
    this.greedyQuantifierHandler.push({
      functionName,
      ...this.formatAstLocation(def.location),
      ...def,
    });

    return { functionName };
  }

  addQuantifierWithMinOrMaxHandlerDefintion(
    def: QuantifierWithMinOrMaxDefinition,
  ): FunctionHandle {
    const functionName = 'quantifierWithMinOrMax' + this.getNewCount();
    this.quantifierWithMinOrMaxHandler.push({
      functionName,
      ...this.formatAstLocation(def.location),
      ...def,
    });

    return { functionName };
  }

  getTemplateValues(): Omit<TemplateValues, 'mainHandler'> {
    return {
      groups: this.groups,
      characterHandler: this.characterHandler,
      groupMarkerHandler: this.groupMarkerHandler,
      regexStr: this.regexStr,
      setHandler: this.setHandler,
      disjunctionHandler: this.disjunctionHandler,
      lazyQuantifierHandler: this.lazyQuantifierHandler,
      greedyQuantifierHandler: this.greedyQuantifierHandler,
      quantifierWithMinOrMaxHandler: this.quantifierWithMinOrMaxHandler,
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
  ) => FunctionHandle,
): ((
  ast: T,
  collector: Collector,
  followUp: FollowUpFunctionHandle,
) => FunctionHandle) => {
  return (ast, collector, followUp) => {
    const quantifier = ast.quantifier;
    if (quantifier == null) {
      return func(ast, collector, followUp);
    }

    const wrappedHandler = func(ast, collector, null);
    if (quantifier.atLeast > 0 || quantifier.atMost !== Infinity) {
      const minRequired = quantifier.atLeast || undefined;
      const minIsMax = quantifier.atLeast === quantifier.atMost;
      const recursionLimit =
        quantifier.atMost === Infinity
          ? undefined
          : quantifier.atMost - quantifier.atLeast;

      let recursiveQuantifier = undefined;
      if (!minIsMax) {
        const recursionOptions = {
          recursionLimit,
          wrappedHandler,
          location: ast.loc,
          followUp,
        };

        recursiveQuantifier = quantifier.greedy
          ? collector.addGreedyQuantifierDefintion(recursionOptions)
          : collector.addLazyQuantifierDefintion(recursionOptions);
      }

      return collector.addQuantifierWithMinOrMaxHandlerDefintion({
        wrappedHandler,
        minRequired,
        minIsMax,
        recursionLimit,
        recursiveQuantifier,
        followUp: recursiveQuantifier ? null : followUp,
        location: quantifier.loc,
      });
    } else {
      const recursionOptions = {
        recursionLimit: undefined,
        wrappedHandler,
        location: quantifier.loc,
        followUp,
      };

      return quantifier.greedy
        ? collector.addGreedyQuantifierDefintion(recursionOptions)
        : collector.addLazyQuantifierDefintion(recursionOptions);
    }
  };
};

const handleCharacter = withQuantifier(
  (
    character: Character,
    collector: Collector,
    followUp: FollowUpFunctionHandle,
  ): FunctionHandle => {
    return collector.addCharacterDefinition({
      charCode: character.value,
      followUp,
      location: character.loc,
    });
  },
);

const handleSet = withQuantifier(
  (
    set: RegexSet,
    collector: Collector,
    followUp: FollowUpFunctionHandle,
  ): FunctionHandle => {
    const chars: number[] = [];
    const ranges: Range[] = [];
    set.value.forEach((value) => {
      if (typeof value === 'number') {
        chars.push(value);
      } else {
        ranges.push(value);
      }
    });

    return collector.addSetDefintion({
      chars,
      ranges,
      complement: set.complement,
      followUp,
      location: set.loc,
    });
  },
);

const handleGroup = withQuantifier(
  (
    group: Group,
    collector: Collector,
    followUp: FollowUpFunctionHandle,
  ): FunctionHandle => {
    if (group.capturing) {
      const idx = group.idx;
      if (idx == null) {
        throw new Error('Capturing group does not have an idx');
      }
      collector.bumpGroupsCount(idx);

      const groupEndMarker = collector.addGroupMarkerDefintion({
        groupMarkerIndex: idx * 2 + 1,
        followUp,
        location: { begin: group.loc.end - 1, end: group.loc.end },
      });
      const disjunction = handleDisjunction(
        group.value,
        collector,
        groupEndMarker,
      );
      const groupStartMarker = collector.addGroupMarkerDefintion({
        groupMarkerIndex: idx * 2,
        followUp: disjunction,
        location: { begin: group.loc.begin, end: group.loc.begin + 1 },
      });

      return groupStartMarker;
    } else {
      return handleDisjunction(group.value, collector, followUp);
    }
  },
);

const handleTerm = (
  term: Term,
  collector: Collector,
  followUp: FollowUpFunctionHandle,
): FunctionHandle => {
  switch (term.type) {
    case 'Character':
      return handleCharacter(term, collector, followUp);
    case 'Group':
      return handleGroup(term, collector, followUp);
    case 'Set':
      return handleSet(term, collector, followUp);
    default:
      throw new Error(`${term.type} not implemented as a term type yet`);
  }
};

const handleAlternative = (
  alternative: Alternative,
  collector: Collector,
  followUp: FollowUpFunctionHandle,
): FunctionHandle => {
  let currentFollowUp = followUp;
  for (let i = alternative.value.length - 1; i >= 0; i--) {
    currentFollowUp = handleTerm(
      alternative.value[i],
      collector,
      currentFollowUp,
    );
  }

  return currentFollowUp!;
};

const handleDisjunction = (
  disjunction: Disjunction,
  collector: Collector,
  followUp: FollowUpFunctionHandle,
): FunctionHandle => {
  if (disjunction.value.length === 1) {
    return handleAlternative(disjunction.value[0], collector, followUp);
  }

  const alternatives = disjunction.value.map((alternative) =>
    handleAlternative(alternative, collector, followUp),
  );
  return collector.addDisjunctionDefintion({
    alternatives,
    followUp: null,
    location: disjunction.loc,
  });
};

const fixGroupIdx = (disjunction: Disjunction) => {
  let idx = 1;

  function traverse(element: any) {
    const value = element?.value;

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

  return disjunction;
};

export const genCode = (
  regexStr: string,
): { code: string; templateValues: TemplateValues } => {
  const pattern = new RegExpParser().pattern(regexStr);

  if (pattern.flags.ignoreCase) {
    throw new Error('Does not support ignoreCase yet');
  }
  if (pattern.flags.unicode) {
    throw new Error('Does not support unicode yet');
  }
  if (pattern.flags.multiLine) {
    throw new Error('Does not support multiline yet');
  }

  const collector = new Collector(regexStr);
  const disjunction = fixGroupIdx(pattern.value);
  const mainHandler = handleDisjunction(disjunction, collector, null);

  const templateValues = { ...collector.getTemplateValues(), mainHandler };
  const code = genCodeFromTemplate(templateValues);
  return { code, templateValues };
};
