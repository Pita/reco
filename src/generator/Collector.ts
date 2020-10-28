import { AST } from 'regexpp';
import {
  TemplateValues,
  FiberTemplateDefinition,
  TemplateAtom,
  FollowUp,
  GroupReference,
  QuantifierTemplateDefinition,
} from './templates/mainTemplate';
import * as _ from 'lodash';

type AtomDefinition = Omit<TemplateAtom, 'posLine1' | 'posLine2'> & {
  ast: AST.Node;
};

export function mergeGroupsOfFibers(forks: FiberTemplateDefinition[]) {
  const groups: GroupReference[] = [];
  forks.forEach((fork) => {
    fork.meta.groups.forEach((group) => {
      if (groups.indexOf(group) === -1) {
        groups.push(group);
      }
    });
  });
  groups.sort((a, b) => a.idx - b.idx);
  return groups;
}

export class Collector {
  private regexStr: string;
  private counter = 0;
  private groups: Array<GroupReference & { astStart: number }> = [];
  private fiberHandlers: FiberTemplateDefinition[] = [];
  private greedyQuantifierHandlers: QuantifierTemplateDefinition[] = [];
  private lazyQuantifierHandlers: QuantifierTemplateDefinition[] = [];

  constructor(regexStr: string) {
    this.regexStr = regexStr;
  }

  private getNewCount() {
    this.counter++;
    return (this.counter + '').padStart(4, '0');
  }

  private formatAstLocation(ast: AST.Node) {
    const startNeedsTruncation = ast.start > 10;
    const regexStrStart = startNeedsTruncation ? 10 : ast.start;
    const endNeedsTruncation = this.regexStr.length > ast.end + 10;
    const regexStrEnd = endNeedsTruncation
      ? ast.end + 10
      : this.regexStr.length;

    return {
      posLine1:
        (startNeedsTruncation ? '...' : '') +
        this.regexStr.substring(regexStrStart, regexStrEnd) +
        (endNeedsTruncation ? '...' : ''),
      posLine2:
        ' '.repeat(ast.start - regexStrStart + (startNeedsTruncation ? 3 : 0)) +
        '^'.repeat(ast.end - ast.start),
    };
  }

  createConnectedFiber(fiber: FiberTemplateDefinition) {
    // Special case where the fiber to close has zero atoms,
    // therefore we can delete it
    let followUp: FollowUp = fiber;
    const groups = fiber.meta.groups.slice();
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
      meta: {
        groups,
      },
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
      meta: {
        groups: [],
      },
    };
    this.fiberHandlers.push(newFiber);
    return newFiber;
  }

  createForkingFiber(
    followUpFiber: FiberTemplateDefinition,
    groups: GroupReference[],
  ) {
    const newFiber: FiberTemplateDefinition = {
      followUp: null,
      atoms: [],
      functionName: `fiber${this.getNewCount()}`,
      lastAtomReturns: true,
      meta: {
        groups: groups.slice(),
      },
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

  createQuantifierFiberPair(
    followUp: FiberTemplateDefinition,
    type: 'greedy' | 'lazy',
    ast: AST.Node,
  ) {
    const quantifierFinalFiber: FiberTemplateDefinition = {
      followUp: null,
      atoms: [],
      functionName: `fiber${this.getNewCount()}`,
      lastAtomReturns: false,
      meta: {
        groups: [],
      },
    };

    const quantifierHandler: any = {
      followUp,
      functionName:
        type === 'greedy'
          ? `greedyQuantifier${this.getNewCount()}`
          : `lazyQuantifier${this.getNewCount()}`,
      wrappedHandler: quantifierFinalFiber,
      meta: {
        groups: [],
      },
      ...this.formatAstLocation(ast),
    };

    quantifierFinalFiber.followUp = quantifierHandler;

    this.fiberHandlers.push(quantifierFinalFiber);
    if (type === 'greedy') {
      this.greedyQuantifierHandlers.push(quantifierHandler);
    } else {
      this.lazyQuantifierHandlers.push(quantifierHandler);
    }

    return { quantifierFinalFiber, quantifierHandler };
  }

  addCapturingGroup(
    currentFiber: FiberTemplateDefinition,
    ast: AST.CapturingGroup,
  ) {
    const newGroup = {
      idx: -1,
      astStart: ast.start,
    };

    this.groups.push(newGroup);
    this.groups.sort((a, b) => a.astStart - b.astStart);
    this.groups.forEach((group, i) => {
      group.idx = i;
    });

    currentFiber.meta.groups.push(newGroup);
    currentFiber.meta.groups.sort((a, b) => a.idx - b.idx);
    return newGroup;
  }

  getTemplateValues(): Omit<TemplateValues, 'mainHandler'> {
    return {
      regexStr: this.regexStr,
      fiberHandlers: this.fiberHandlers,
      greedyQuantifierHandlers: this.greedyQuantifierHandlers,
      lazyQuantifierHandlers: this.lazyQuantifierHandlers,
      groups: this.groups,
    };
  }
}
