import {
  RegExpParser,
  Disjunction,
  Character,
  Alternative,
  Term,
  Group,
  Set,
  IRegExpAST,
  Quantifier,
} from 'regexp-to-ast';
import { CharRange } from './CharRange';

const regexpParser = new RegExpParser();

interface AnalyzeableGroup {
  startRange: CharRange;
  endRange: CharRange;
  required: boolean;
  minLength: number;
  maxLength: number;
  children?: {
    type: 'alternatives' | 'series';
    values: AnalyzeableGroup[];
  };
  ast: IRegExpAST;
  quantifier?: Quantifier;
}

interface AnalyzeOptions {
  required: boolean;
  ignoreCase: boolean;
}

function handleGroup(group: Group, options: AnalyzeOptions): AnalyzeableGroup {
  const required = options.required && (group.quantifier?.atLeast ?? 1) >= 1;
  const disjunction = handleDisjunction(group.value, { ...options, required });

  if (group.quantifier) {
    disjunction.minLength = group.quantifier.atLeast * disjunction.minLength;
    disjunction.maxLength = group.quantifier.atMost * disjunction.maxLength;
    disjunction.quantifier = group.quantifier;
  }

  return disjunction;
}

function handleSetOrCharacter(
  atom: Set | Character,
  options: AnalyzeOptions,
): AnalyzeableGroup {
  const charRange =
    atom.type === 'Set'
      ? CharRange.fromSet(atom, options.ignoreCase)
      : CharRange.fromCharacter(atom, options.ignoreCase);

  let minLength = 1;
  let maxLength = 1;
  if (atom.quantifier) {
    minLength = atom.quantifier.atLeast;
    maxLength = atom.quantifier.atMost;
  }

  return {
    startRange: charRange,
    endRange: charRange,
    required: options.required && minLength >= 1,
    minLength,
    maxLength,
    ast: atom,
    quantifier: atom.quantifier,
  };
}

function handleTerm(term: Term, options: AnalyzeOptions): AnalyzeableGroup {
  switch (term.type) {
    case 'Set':
    case 'Character':
      return handleSetOrCharacter(term, options);
    case 'Group':
      return handleGroup(term, options);
    default:
      throw new Error(`${term.type} not implemented as a term type yet`);
  }
}

function handleAlternative(
  alternative: Alternative,
  options: AnalyzeOptions,
): AnalyzeableGroup {
  if (alternative.value.length === 1) {
    return handleTerm(alternative.value[0], options);
  }

  const terms = alternative.value.map((term) => handleTerm(term, options));

  let startRange = terms[0].startRange;
  let endRange = terms[terms.length - 1].endRange;
  let minLength = 0;
  let maxLength = 0;

  for (let term of terms) {
    minLength += term.minLength;
    maxLength += term.maxLength;
  }

  const children: AnalyzeableGroup['children'] = {
    type: 'series',
    values: terms,
  };

  return {
    required: options.required,
    startRange,
    endRange,
    minLength,
    maxLength,
    children,
    ast: alternative,
  };
}

function handleDisjunction(
  disjunction: Disjunction,
  options: AnalyzeOptions,
): AnalyzeableGroup {
  if (disjunction.value.length === 1) {
    return handleAlternative(disjunction.value[0], options);
  }

  const alternatives = disjunction.value.map((alternative) =>
    handleAlternative(alternative, { ...options, required: false }),
  );

  let startRange = CharRange.createEmptyRange();
  let endRange = CharRange.createEmptyRange();
  let minLength = Infinity;
  let maxLength = -Infinity;

  for (let alternative of alternatives) {
    minLength = Math.min(minLength, alternative.minLength);
    maxLength = Math.max(maxLength, alternative.maxLength);
    startRange = startRange.union(alternative.startRange);
    endRange = endRange.union(alternative.endRange);
  }

  const children: AnalyzeableGroup['children'] = {
    type: 'alternatives',
    values: alternatives,
  };

  return {
    required: options.required,
    startRange,
    endRange,
    minLength,
    maxLength,
    children,
    ast: disjunction,
  };
}

export function analyzeRegex(regexStr: string): AnalyzeableGroup {
  const pattern = regexpParser.pattern(regexStr);
  const disjunction = pattern.value;
  return handleDisjunction(disjunction, {
    required: true,
    ignoreCase: pattern.flags.ignoreCase,
  });
}

function prettyPrint(str: string) {
  console.dir(analyzeRegex(str), { colors: true, depth: 10 });
}

/*
  MOVE TO NOTES

  Possible functions with this structure:
  verify if a star or plus quantifier needs backtracking
  check if there are fixed position strings
  get minLength of match
  verify at positions throughout the code if match is still possible
*/

/*
  To verify backtracking: 
  - find instance of quantifier
  - find next sibling
  - verify if there is an overlap
*/

// console.dir(analyzeRegex('/\\d*(\\.\\d+)?/'), { colors: true, depth: 10 });

prettyPrint('/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6})*$/');
