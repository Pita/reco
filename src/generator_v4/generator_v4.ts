import { AST, RegExpParser } from 'regexpp';
import {
  genCodeFromTemplate,
  TemplateValues,
  FiberTemplateDefinition,
  TemplateAtom,
  FollowUp,
} from './generator_v4_ts_template';
import * as _ from 'lodash';
import { CharRangeBTreeMatcher } from './CharRangeBTreeMatcher';

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
  const bTreeMatcher = new CharRangeBTreeMatcher(flags.ignoreCase);
  let negate = false;

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
          bTreeMatcher.addChar(cc('\n'));
          bTreeMatcher.addChar(cc('\r'));
          bTreeMatcher.addChar(cc('\u2028'));
          bTreeMatcher.addChar(cc('\u2029'));
        }
        break;
      case 'digit':
        negate = set.negate;
        bTreeMatcher.addRange(cc('0'), cc('9'));
        break;
      case 'space':
        negate = set.negate;
        bTreeMatcher.addChar(cc(' '));
        bTreeMatcher.addChar(cc('\f'));
        bTreeMatcher.addChar(cc('\n'));
        bTreeMatcher.addChar(cc('\r'));
        bTreeMatcher.addChar(cc('\t'));
        bTreeMatcher.addChar(cc('\v'));
        bTreeMatcher.addChar(cc('\t'));
        bTreeMatcher.addChar(cc('\u00a0'));
        bTreeMatcher.addChar(cc('\u1680'));
        bTreeMatcher.addChar(cc('\u2000'));
        bTreeMatcher.addChar(cc('\u2001'));
        bTreeMatcher.addChar(cc('\u2002'));
        bTreeMatcher.addChar(cc('\u2003'));
        bTreeMatcher.addChar(cc('\u2004'));
        bTreeMatcher.addChar(cc('\u2005'));
        bTreeMatcher.addChar(cc('\u2006'));
        bTreeMatcher.addChar(cc('\u2007'));
        bTreeMatcher.addChar(cc('\u2008'));
        bTreeMatcher.addChar(cc('\u2009'));
        bTreeMatcher.addChar(cc('\u200a'));
        bTreeMatcher.addChar(cc('\u2028'));
        bTreeMatcher.addChar(cc('\u2029'));
        bTreeMatcher.addChar(cc('\u202f'));
        bTreeMatcher.addChar(cc('\u205f'));
        bTreeMatcher.addChar(cc('\u3000'));
        bTreeMatcher.addChar(cc('\ufeff'));
        break;
      case 'word':
        negate = set.negate;
        bTreeMatcher.addRange(cc('a'), cc('z'));
        bTreeMatcher.addRange(cc('A'), cc('Z'));
        bTreeMatcher.addRange(cc('0'), cc('9'));
        bTreeMatcher.addChar(cc('_'));
        break;
      case 'property':
        negate = set.negate;
        throw new Error('CharacterSet with property not supported yet');
    }
  };

  switch (element.type) {
    case 'Character':
      bTreeMatcher.addChar(element.value);
      break;
    case 'CharacterClass':
      negate = element.negate;
      element.elements.forEach((element) => {
        switch (element.type) {
          case 'Character':
            bTreeMatcher.addChar(element.value);
            break;
          case 'CharacterClassRange':
            bTreeMatcher.addRange(element.min.value, element.max.value);
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
      tree: bTreeMatcher.toLeafValues(),
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
