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
} from './generator_ts_template';

// MAYBE EXTEND INSTEAD OF OMIT?!

type SubDefinition<T> = Omit<T, 'functionName' | 'posLine1' | 'posLine2'> & {
  location: IRegExpAST['loc'];
};

type CharacterDefinition = SubDefinition<TemplateCharacterDefinition>;
type GroupMarkerDefinition = SubDefinition<TemplateGroupMarkerDefinition>;
type SetDefinition = SubDefinition<TemplateSetDefinition>;

class Collector {
  private regexStr: string;
  private counter = 0;
  private groups = 1;
  private characterHandler: TemplateCharacterDefinition[] = [];
  private groupMarkerHandler: TemplateGroupMarkerDefinition[] = [];
  private setHandler: TemplateSetDefinition[] = [];

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

  addSetDefintion(def: SetDefinition): FunctionHandle {
    const functionName = 'handleSet' + this.getNewCount();
    this.setHandler.push({
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
    };
  }
}

function handleCharacter(
  character: Character,
  collector: Collector,
  followUp: FollowUpFunctionHandle,
): FollowUpFunctionHandle {
  if (character.quantifier) {
    throw new Error('Quantifier on charachters are not implemented yet');
  }

  return collector.addCharacterDefinition({
    charCode: character.value,
    followUp,
    location: character.loc,
  });
}

function handleSet(
  set: RegexSet,
  collector: Collector,
  followUp: FollowUpFunctionHandle,
): FollowUpFunctionHandle {
  if (set.quantifier) {
    throw new Error('Quantifier on charachters are not implemented yet');
  }

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
}

function handleGroup(
  group: Group,
  collector: Collector,
  followUp: FollowUpFunctionHandle,
): FollowUpFunctionHandle {
  if (group.quantifier) {
    throw new Error('Quantifier on groups are not implemented yet');
  }

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
}

function handleTerm(
  term: Term,
  collector: Collector,
  followUp: FollowUpFunctionHandle,
): FollowUpFunctionHandle {
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
}

function handleAlternative(
  alternative: Alternative,
  collector: Collector,
  followUp: FollowUpFunctionHandle,
): FollowUpFunctionHandle {
  let currentFollowUp = followUp;
  for (let i = alternative.value.length - 1; i >= 0; i--) {
    currentFollowUp = handleTerm(
      alternative.value[i],
      collector,
      currentFollowUp,
    );
  }

  return currentFollowUp;
}

function handleDisjunction(
  disjunction: Disjunction,
  collector: Collector,
  followUp: FollowUpFunctionHandle,
): FollowUpFunctionHandle {
  if (disjunction.value.length === 1) {
    return handleAlternative(disjunction.value[0], collector, followUp);
  }

  throw new Error('Multiple disjunctions not yet supported');
}

export function genCode(regexStr: string): string {
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
  const disjunction = pattern.value;
  const mainHandler = handleDisjunction(disjunction, collector, null);

  if (mainHandler === null) {
    throw new Error('No main handle function generated');
  }

  return genCodeFromTemplate({
    ...collector.getTemplateValues(),
    mainHandler,
  });
}
