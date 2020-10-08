import {
  AST,
  RegExpParser,
} from 'regexpp';
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
  ast: AST.Node;
};

interface Flags extends AST.Flags {
  INTERNAL_backwards?: boolean;
}

class Collector {
  private regexStr: string;
  private counter = 0;
  private groupCount: number;
  private fiberHandlers: FiberTemplateDefinition[] = [];

  constructor(regexStr: string) {
    this.regexStr = regexStr;
    this.groupCount = 0;
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

// interface AstWithQuantifier {
//   quantifier?: Quantifier;
//   loc: IRegExpAST['loc'];
// }

// const withQuantifier = <T extends AstWithQuantifier>(
//   func: (
//     ast: T,
//     collector: Collector,
//     currentFiber: FiberTemplateDefinition,
//     flags: Flags,
//   ) => FiberTemplateDefinition,
// ): ((
//   ast: T,
//   collector: Collector,
//   currentFiber: FiberTemplateDefinition,
//   flags: Flags,
// ) => FiberTemplateDefinition) => {
//   return (ast, collector, currentFiber, flags) => {
//     const quantifier = ast.quantifier;
//     if (quantifier == null) {
//       return func(ast, collector, currentFiber, flags);
//     }

//     const wrappedHandler = func(
//       ast,
//       collector,
//       collector.createCallbackFiber(),
//       flags,
//     );
//     const minCount = quantifier.atLeast === 0 ? undefined : quantifier.atLeast;
//     const maxCount =
//       quantifier.atMost === Infinity ? undefined : quantifier.atMost;
//     const maxOrMinCount = minCount !== undefined || maxCount !== undefined;

//     return collector.addAtom(collector.createForkingFiber(currentFiber), {
//       type: quantifier.greedy ? 'greedyQuantifier' : 'lazyQuantifier',
//       data: {
//         minCount,
//         maxCount,
//         maxOrMinCount,
//         wrappedHandler,
//         followUp: currentFiber,
//       },
//       location: quantifier.loc,
//     });
//   };
// };

// const handleSetOrCharacter = withQuantifier(
const handleSetOrCharacter = 
  (
    element: AST.CharacterClass | AST.AnyCharacterSet | AST.EscapeCharacterSet | AST.UnicodePropertyCharacterSet | AST.Character,
    collector: Collector,
    currentFiber: FiberTemplateDefinition,
    flags: Flags,
  ): FiberTemplateDefinition => {
    const chars: number[] = [];
    const ranges: {from: number, to: number}[] = [];
    let complement = false;

    // TODO: simplify ranges

    const addCharacter = (char: number) => {
      normalizeUpperLowerCase(char, flags.ignoreCase).forEach((char) =>
        chars.push(char),
      );
    };

    const addRange = (range: {from: number, to: number}) => {
      const from = normalizeUpperLowerCase(range.from, flags.ignoreCase);
      const to = normalizeUpperLowerCase(range.to, flags.ignoreCase);

      for (let i = 0; i < from.length; i++) {
        ranges.push({ from: from[i], to: to[i] });
      }
    };

    switch(element.type) {
      case 'Character': 
        addCharacter(element.value);
        break;
      case 'CharacterSet':
        element.
      break;
      default: 
        throw new Error(`Unsupported char type: ${element.type}`)
    }
    element.type

    // if (term.type === 'Set') {
    //   complement = term.complement;
    //   term.value.forEach((value) => {
    //     if (typeof value === 'number') {
    //       addCharacter(value);
    //     } else {
    //       addRange(value);
    //     }
    //   });
    // } else {
    //   addCharacter(term.value);
    // }

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

// const handleGroup = withQuantifier(
//   (
//     group: Group,
//     collector: Collector,
//     currentFiber: FiberTemplateDefinition,
//     flags: Flags,
//   ): FiberTemplateDefinition => {
//     if (!group.capturing) {
//       return handleDisjunction(group.value, collector, currentFiber, flags);
//     }
//     const idx = group.idx;
//     if (idx == null) {
//       throw new Error('Capturing group does not have an idx');
//     }

//     const groupEndMarker = collector.addAtom(currentFiber, {
//       type: 'groupEndMarker',
//       location: { begin: group.loc.end - 1, end: group.loc.end },
//       data: {
//         groupIndex: idx,
//         groupStartMarkerIndex: idx * 2,
//         groupEndMarkerIndex: idx * 2 + 1,
//       },
//     });

//     const disjunction = handleDisjunction(
//       group.value,
//       collector,
//       groupEndMarker,
//       flags,
//     );

//     const groupStartMarker = collector.addAtom(disjunction, {
//       type: 'groupStartMarker',
//       location: { begin: group.loc.begin, end: group.loc.begin + 1 },
//       data: {
//         groupIndex: idx,
//       },
//     });

//     return groupStartMarker;
//   },
// );

// const handleStartAnchor = (
//   startAnchor: Assertion,
//   collector: Collector,
//   currentFiber: FiberTemplateDefinition,
//   flags: Flags,
// ): FiberTemplateDefinition => {
//   if (startAnchor.value) {
//     throw new Error('Start Anchor has value!');
//   }
//   return collector.addAtom(currentFiber, {
//     type: 'startAnchor',
//     location: startAnchor.loc,
//     data: {},
//   });
// };

// const handleEndAnchor = (
//   endAnchor: Assertion,
//   collector: Collector,
//   currentFiber: FiberTemplateDefinition,
//   flags: Flags,
// ): FiberTemplateDefinition => {
//   if (endAnchor.value) {
//     throw new Error('End Anchor has value!');
//   }
//   return collector.addAtom(currentFiber, {
//     type: 'endAnchor',
//     location: endAnchor.loc,
//     data: {},
//   });
// };

// const handleLookahead = (
//   lookahead: Assertion,
//   collector: Collector,
//   currentFiber: FiberTemplateDefinition,
//   flags: Flags,
// ): FiberTemplateDefinition => {
//   const lookAheadDisjunction = lookahead.value;
//   if (!lookAheadDisjunction) {
//     throw new Error('Lookahead without value');
//   }
//   const lookAheadFiber = handleDisjunction(
//     lookAheadDisjunction,
//     collector,
//     collector.createFinalFiber(),
//     flags,
//   );

//   const negative = lookahead.type === 'NegativeLookahead';
//   return collector.addAtom(currentFiber, {
//     type: 'lookAhead',
//     location: lookahead.loc,
//     data: {
//       lookAheadFiber,
//       negative,
//     },
//   });
// };

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

  // const templateValues = { ...collector.getTemplateValues(), mainHandler };
  // const code = genCodeFromTemplate(templateValues);
  // return { code, templateValues, pattern };
};
