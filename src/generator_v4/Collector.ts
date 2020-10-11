import { AST } from 'regexpp';
import {
  TemplateValues,
  FiberTemplateDefinition,
  TemplateAtom,
  FollowUp,
  GroupReference,
} from './templates/mainTemplate';
import * as _ from 'lodash';

type AtomDefinition = Omit<TemplateAtom, 'posLine1' | 'posLine2'> & {
  ast: AST.Node;
};

export class Collector {
  private regexStr: string;
  private counter = 0;
  private groups: Array<GroupReference & { astStart: number }> = [];
  private fiberHandlers: FiberTemplateDefinition[] = [];

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
      hasCallback: false,
      meta: {
        groups: [],
      },
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
      meta: {
        groups: fiber.meta.groups.slice(),
      },
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
      meta: {
        groups: [],
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
    return newGroup;
  }

  getTemplateValues(): Omit<TemplateValues, 'mainHandler'> {
    return {
      regexStr: this.regexStr,
      fiberHandlers: this.fiberHandlers,
      groups: this.groups,
    };
  }
}
