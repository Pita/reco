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
  private fiberHandlers: FiberTemplateDefinition[] = [];

  constructor(regexStr: string) {
    this.regexStr = regexStr;
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

  addAtom(def: AtomDefinition): FunctionHandle {
    let currentFiber: FiberTemplateDefinition | undefined = undefined;
    if (def.followUp) {
      currentFiber = this.fiberHandlers.find(
        (fiberHandler) =>
          fiberHandler.functionName === def.followUp?.functionName,
      );
    }
    if (currentFiber === undefined) {
      currentFiber = {
        followUp: null,
        atoms: [],
        functionName: `fiber${this.getNewCount()}`,
      };
      this.fiberHandlers.push(currentFiber);
    }

    const newAtom: TemplateAtom = {
      ...this.formatAstLocation(def.location),
      ..._.omit(def, 'followUp'),
    };

    currentFiber.atoms.unshift(newAtom);

    return currentFiber;
  }

  getTemplateValues(): Omit<TemplateValues, 'mainHandler'> {
    return {
      regexStr: this.regexStr,
      fiberHandlers: this.fiberHandlers,
    };
  }
}

const handleSetOrCharacter = (
  term: RegexSet | Character,
  collector: Collector,
  followUp: FollowUpFunctionHandle,
  flags: RegExpFlags,
): FunctionHandle => {
  if (term.quantifier) {
    throw new Error('Quantifiers for sets and chars are not implemented yet');
  }

  const chars: number[] = [];
  const ranges: Range[] = [];
  let complement = false;

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
    chars,
    ranges,
    complement,
    followUp,
    location: term.loc,
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

  throw new Error('Disjunction not implemented yet');
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

  const collector = new Collector(regexStr);
  const disjunction = pattern.value;
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
