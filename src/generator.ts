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
import * as crypto from 'crypto';
const prettier = require('prettier');

const regexpParser = new RegExpParser();

function sha1(str: string): string {
  var shasum = crypto.createHash('sha1');
  shasum.update(str);
  return shasum.digest('hex');
}

interface HandlerFunction {
  type: string;
  code: string;
  ast: IRegExpAST;
  salt?: string;
}
interface FunctionHandle {
  name: string;
}

interface CollectedFunction {
  origin: string;
  name: string;
  code: string;
}

class Collector {
  private functions: CollectedFunction[] = [];
  private regexStr: string;

  constructor(regexStr: string) {
    this.regexStr = regexStr;
    this.functions = [];
  }

  addFunction(newFunc: HandlerFunction): FunctionHandle {
    const { type, code, ast, salt } = newFunc;
    const origin = this.regexStr.substring(ast.loc.begin, ast.loc.end);
    const sha = sha1((salt || '') + origin).substr(0, 8);
    const name = `${type}_${sha}`;

    const indexOfExisting = this.functions.findIndex(
      (func) => func.name === name,
    );

    if (indexOfExisting !== -1) {
      return { name: this.functions[indexOfExisting].name };
    }

    this.functions.push({
      origin,
      name,
      code,
    });

    return { name };
  }

  getFunctions() {
    return this.functions;
  }
}

function wrapWithQuantifier(options: {
  fn: FunctionHandle;
  collector: Collector;
  quantifier: Quantifier;
}): FunctionHandle {
  const { fn, collector, quantifier } = options;

  let code = (() => {
    if (quantifier.atLeast === 0 && quantifier.atMost === 1) {
      return `
        const result = this.${fn.name}(str, start);
        return result === -1 ? 0 : result;
      `;
    }

    let code = `
let i = start;
    `;
    let i = 0;

    if (quantifier.atLeast > 0) {
      for (; i < quantifier.atLeast; i++) {
        code += `
const match_${i} = this.${fn.name}(str, i);
if (match_${i} === -1) {
  return -1;
}
i += match_${i};
        `;
      }
    }
    if (quantifier.atMost !== Infinity) {
      for (; i < quantifier.atMost; i++) {
        code += `
const match_${i} = this.${fn.name}(str, i);
if (match_${i} === -1) {
  return i - start;
}
i += match_${i};
        `;
      }
    }
    if (quantifier.atMost === Infinity) {
      code += `
while(i < str.length) {
  const greedy_match = this.${fn.name}(str, i);
  if (greedy_match === -1) {
    return i - start;
  }
  i += greedy_match;
}     
`;
    }
    // TODO: implement greedy correctly

    code += `return i - start;`;
    return code;
  })();

  return collector.addFunction({
    code,
    ast: quantifier,
    type: 'quantifier',
    salt: fn.name,
  });
}

function handleCharacter(
  character: Character,
  collector: Collector,
): FunctionHandle {
  const code = `
  const isMatch = str.charCodeAt(start) === ${character.value};
  return isMatch ? 1 : -1; 
  `;

  const fn = collector.addFunction({
    code,
    ast: character,
    type: 'handle_charachter',
  });

  if (character.quantifier) {
    return wrapWithQuantifier({
      fn,
      collector,
      quantifier: character.quantifier,
    });
  }
  return fn;
}

function handleGroup(group: Group, collector: Collector): FunctionHandle {
  throw new Error('Groups are not implemented yet');
  // TODO; has more features
  // const fn = handleDisjunction(group.value, collector);
  // if (group.quantifier) {
  //   return wrapWithQuantifier({ quantifier: group.quantifier, fn, collector });
  // }
  // return fn;
}

function handleSet(set: Set, collector: Collector): FunctionHandle {
  let code = `const char = str.charCodeAt(start);`;
  // TODO: what is complement?!
  set.value.forEach((value, i) => {
    if (typeof value === 'number') {
      code += `
if (char === ${value}) {
  return 1;
}
      `;
    } else {
      code += `
if (char >= ${value.from} && char <= ${value.to}) {
  return 1;
}
      `;
    }
  });
  code += `return -1;`;
  const fn = collector.addFunction({
    code,
    type: 'set',
    ast: set,
  });

  if (set.quantifier) {
    return wrapWithQuantifier({ quantifier: set.quantifier, fn, collector });
  }
  return fn;
}

function handleTerm(term: Term, collector: Collector): FunctionHandle {
  switch (term.type) {
    case 'Character':
      return handleCharacter(term, collector);
    case 'Group':
      return handleGroup(term, collector);
    case 'Set':
      return handleSet(term, collector);
    default:
      throw new Error(`${term.type} not implemented as a term type yet`);
  }
}

function handleAlternative(
  alternative: Alternative,
  collector: Collector,
): FunctionHandle {
  if (alternative.value.length === 1) {
    return handleTerm(alternative.value[0], collector);
  }

  const terms = alternative.value
    .map((term) => handleTerm(term, collector))
    .map((handle, i) => {
      return `
const result_${i} = this.${handle.name}(str, i);
if (result_${i} === -1) {
  return -1;
}
i += result_${i};
        `;
    });

  const code = `
let i = start;
${terms.join('\n')}
return i - start;
  `;

  return collector.addFunction({
    code,
    ast: alternative,
    type: 'handle_alternative',
  });
}

function handleDisjunction(
  disjunction: Disjunction,
  collector: Collector,
): FunctionHandle {
  if (disjunction.value.length === 1) {
    return handleAlternative(disjunction.value[0], collector);
  }

  const alternativesCode = disjunction.value
    .map((alternative) => handleAlternative(alternative, collector))
    .map((fn, i) => {
      return `
const alternative_${i} = this.${fn.name}(str, start);
if (alternative_${i} !== -1) {
  return alternative_${i};
}
      `;
    });

  const code = `
${alternativesCode.join('\n')}
return -1
  `;

  return collector.addFunction({
    code,
    ast: disjunction,
    type: 'disjunction',
  });
}

function collectedFunctionsToCode(
  functions: CollectedFunction[],
  mainHandle: FunctionHandle,
): string {
  const runtime = `
    class GeneratedRegex {
      matched: boolean;
      start: number = -1;
      end: number = -1;
  `;

  const functionStrings = functions.map((fn) => {
    return `
// From: ${fn.origin}
private ${fn.name}(str: string, start: number): number {
  ${fn.code}
}
    `;
  });

  const mainFunction = `
      constructor(str: string, start: number) {
        const length = this.${mainHandle.name}(str, start);
        if (length !== -1) {
          this.matched = true;
          this.start = start;
          this.end = start + length;
        } else {
          this.matched = false;
        }
      }

      static exec(str: string) {
        for (let i = 0; i < str.length; i++) {
          const instance = new GeneratedRegex(str, i);

          if (instance.matched) {
            return {
              matches: [
                str.substring(instance.start, instance.end)
              ],
              index: i,
            }
          }
        }

        return null;
      }
    }

    module.exports = { GeneratedRegex };
  `;

  return prettier.format(runtime + functionStrings.join('') + mainFunction, {
    semi: true,
    parser: 'babel-ts',
  });
}

export function genCode(regexStr: string): string {
  const pattern = regexpParser.pattern(regexStr);
  const collector = new Collector(regexStr);
  const disjunction = pattern.value;
  const mainHandle = handleDisjunction(disjunction, collector);

  return collectedFunctionsToCode(collector.getFunctions(), mainHandle);
}
