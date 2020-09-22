import {
  RegExpParser,
  Disjunction,
  Character,
  Alternative,
  IRegExpAST,
  Term,
  Quantifier,
  Group,
  Set,
} from 'regexp-to-ast';
import {
  FunctionHandle,
  FollowUpFunctionHandle,
  TemplateCharacterDefinition,
  genCodeFromTemplate,
} from './generator_ts_template';

type CharacterDefinition = Omit<TemplateCharacterDefinition, 'functionName'>;

class Collector {
  private counter = 0;
  private characterHandler: TemplateCharacterDefinition[] = [];

  private getNewCount() {
    this.counter++;
    return this.counter;
  }

  addCharacterDefinition(def: CharacterDefinition): FunctionHandle {
    const functionName = 'handleCharacter' + this.getNewCount();
    this.characterHandler.push({
      functionName,
      ...def,
    });

    return { functionName };
  }

  getTemplateValues() {
    return {
      characterHandler: this.characterHandler,
    };
  }
}

function handleCharacter(
  character: Character,
  collector: Collector,
  followUp: FollowUpFunctionHandle,
): FunctionHandle {
  if (character.quantifier) {
    throw new Error('Quantifier on charachters are not implemented yet');
  }

  return collector.addCharacterDefinition({
    charCode: character.value,
    followUp,
  });
}

function handleTerm(
  term: Term,
  collector: Collector,
  followUp: FollowUpFunctionHandle,
): FollowUpFunctionHandle {
  switch (term.type) {
    case 'Character':
      return handleCharacter(term, collector, followUp);
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

  const collector = new Collector();
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
