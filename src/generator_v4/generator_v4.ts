import { AST, RegExpParser } from 'regexpp';
import {
  genCodeFromTemplate,
  TemplateValues,
  FiberTemplateDefinition,
  TemplateAtom,
  FollowUp,
} from './generator_v4_ts_template';
import { normalizeUpperLowerCase } from '../normalize_upper_lower_case';
import * as _ from 'lodash';

type AtomDefinition = Omit<TemplateAtom, 'posLine1' | 'posLine2'> & {
  ast: AST.Node;
};

interface Flags extends AST.Flags {
  INTERNAL_backwards?: boolean;
}

class Collector {
  private regexStr: string;
  private counter = 0;
  private groupCount: number = 1;
  private fiberHandlers: FiberTemplateDefinition[] = [];

  constructor(regexStr: string) {
    this.regexStr = regexStr;
  }

  private getNewCount() {
    this.counter++;
    return (this.counter + '').padStart(4, '0');
  }

  private formatAstLocation(ast: AST.Node) {
    return {
      posLine1: this.regexStr,
      posLine2: ' '.repeat(ast.start) + '^'.repeat(ast.end - ast.start),
    };
  }

  bumpGroupCount() {
    this.groupCount++;
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
      ...this.formatAstLocation(def.ast),
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

function cc(char: string) {
  return char.charCodeAt(0);
}

// const handleSetOrCharacter = withQuantifier(
const handleSetOrCharacter = (
  element:
    | AST.CharacterClass
    | AST.AnyCharacterSet
    | AST.EscapeCharacterSet
    | AST.UnicodePropertyCharacterSet
    | AST.Character,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  const chars: number[] = [];
  const ranges: { min: number; max: number }[] = [];
  let negate = false;

  // TODO: simplify ranges

  const addCharacter = (char: number) => {
    normalizeUpperLowerCase(char, flags.ignoreCase).forEach((char) =>
      chars.push(char),
    );
  };

  const addRange = (min: number, max: number) => {
    const normalizedMin = normalizeUpperLowerCase(min, flags.ignoreCase);
    const normalizedMax = normalizeUpperLowerCase(max, flags.ignoreCase);

    for (let i = 0; i < normalizedMin.length; i++) {
      ranges.push({ min: normalizedMin[i], max: normalizedMax[i] });
    }
  };

  const addCharacterSet = (
    set:
      | AST.EscapeCharacterSet
      | AST.UnicodePropertyCharacterSet
      | AST.AnyCharacterSet,
  ) => {
    switch (set.kind) {
      case 'any':
        negate = true;
        if (!flags.dotAll) {
          addCharacter(cc('\n'));
          addCharacter(cc('\r'));
          addCharacter(cc('\u2028'));
          addCharacter(cc('\u2029'));
        }
        break;
      case 'digit':
        negate = set.negate;
        addRange(cc('0'), cc('9'));
        break;
      case 'space':
        negate = set.negate;
        addCharacter(cc(' '));
        addCharacter(cc('\f'));
        addCharacter(cc('\n'));
        addCharacter(cc('\r'));
        addCharacter(cc('\t'));
        addCharacter(cc('\v'));
        addCharacter(cc('\t'));
        addCharacter(cc('\u00a0'));
        addCharacter(cc('\u1680'));
        addCharacter(cc('\u2000'));
        addCharacter(cc('\u2001'));
        addCharacter(cc('\u2002'));
        addCharacter(cc('\u2003'));
        addCharacter(cc('\u2004'));
        addCharacter(cc('\u2005'));
        addCharacter(cc('\u2006'));
        addCharacter(cc('\u2007'));
        addCharacter(cc('\u2008'));
        addCharacter(cc('\u2009'));
        addCharacter(cc('\u200a'));
        addCharacter(cc('\u2028'));
        addCharacter(cc('\u2029'));
        addCharacter(cc('\u202f'));
        addCharacter(cc('\u205f'));
        addCharacter(cc('\u3000'));
        addCharacter(cc('\ufeff'));
        break;
      case 'word':
        negate = set.negate;
        addRange(cc('a'), cc('z'));
        addRange(cc('A'), cc('Z'));
        addRange(cc('0'), cc('9'));
        addCharacter(cc('_'));
        break;
      case 'property':
        negate = set.negate;
        throw new Error('CharacterSet with property not supported yet');
    }
  };

  switch (element.type) {
    case 'Character':
      addCharacter(element.value);
      break;
    case 'CharacterClass':
      negate = element.negate;
      element.elements.forEach((element) => {
        switch (element.type) {
          case 'Character':
            addCharacter(element.value);
            break;
          case 'CharacterClassRange':
            addRange(element.min.value, element.max.value);
            break;
          case 'CharacterSet':
            addCharacterSet(element);
            break;
        }
      });
      break;
    case 'CharacterSet':
      addCharacterSet(element);
      break;
  }

  return collector.addAtom(currentFiber, {
    type: 'charOrSet',
    data: {
      chars,
      ranges,
      negate,
    },
    ast: element,
  });
};

const handleElement = (
  element: AST.Element,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  switch (element.type) {
    case 'Character':
    case 'CharacterSet':
    case 'CharacterClass':
      return handleSetOrCharacter(element, collector, currentFiber, flags);
    // case 'Group':
    //   return handleGroup(element, collector, currentFiber, flags);
    // case 'StartAnchor':
    //   return handleStartAnchor(element, collector, currentFiber, flags);
    // case 'EndAnchor':
    //   return handleEndAnchor(element, collector, currentFiber, flags);
    // case 'Lookahead':
    // case 'NegativeLookahead':
    //   return handleLookahead(element, collector, currentFiber, flags);
    // case 'Lookbehind':
    // case 'NegativeLookahead':
    //   return handleLookahead(element, collector, currentFiber, flags);
    default:
      throw new Error(`${element.type} not implemented as a element type yet`);
  }
};

const handleAlternative = (
  alternative: AST.Alternative,
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  let lastFiber = currentFiber;
  for (let i = alternative.elements.length - 1; i >= 0; i--) {
    lastFiber = handleElement(
      alternative.elements[i],
      collector,
      lastFiber,
      flags,
    );
  }

  return lastFiber;
};

const handleDisjunction = (
  alternatives: AST.Alternative[],
  collector: Collector,
  currentFiber: FiberTemplateDefinition,
  flags: Flags,
): FiberTemplateDefinition => {
  if (alternatives.length === 1) {
    return handleAlternative(alternatives[0], collector, currentFiber, flags);
  }

  const mappedAlternatives = alternatives.map((alternative) =>
    handleAlternative(
      alternative,
      collector,
      collector.createConnectedFiber(currentFiber),
      flags,
    ),
  );

  return collector.addAtom(collector.createForkingFiber(currentFiber), {
    type: 'disjunction',
    data: { alternatives: mappedAlternatives },
    ast: alternatives[0].parent,
  });
};

export const genCode = (regexStr: string) => {
  //: { code: string; templateValues: TemplateValues; pattern: RegExpPattern } => {
  const literal = new RegExpParser().parseLiteral(regexStr);
  let templateValues, code, error;
  try {
    if (literal.flags.unicode) {
      throw new Error('Does not support unicode yet');
    }
    if (literal.flags.multiline) {
      throw new Error('Does not support multiline yet');
    }

    const collector = new Collector(regexStr);
    const mainHandler = handleDisjunction(
      literal.pattern.alternatives,
      collector,
      collector.createFinalFiber(),
      literal.flags,
    );

    templateValues = { ...collector.getTemplateValues(), mainHandler };
    code = genCodeFromTemplate(templateValues);
  } catch (e) {
    error = e;
  }
  return { code, templateValues, literal, error };
};
