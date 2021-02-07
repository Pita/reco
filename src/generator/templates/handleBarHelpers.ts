import * as Handlebars from 'handlebars';
import { FiberTemplateDefinition, TemplateValues } from './mainTemplate';

Handlebars.registerHelper('escapeComment', function (this: any, value) {
  return new Handlebars.SafeString(value.replace(/\*/g, '✱'));
});

Handlebars.registerHelper(
  'switchCase',
  function (this: any, keyName, expectedValue, options) {
    if (this[keyName] === expectedValue) {
      return options.fn(this.data ? this.data : this);
    } else {
      return options.inverse(this);
    }
  },
);

Handlebars.registerHelper('times', function (n, block) {
  let accum = '';
  for (let i = 0; i < n; i++) accum += block.fn(i);
  return accum;
});

Handlebars.registerHelper('nextItem', function (array, currentIndex, options) {
  if (currentIndex + 1 >= array.length) {
    return;
  }

  return options.fn({
    ...array[currentIndex + 1],
    nextIndex: currentIndex + 1,
  });
});

const assertQuantifierExists = (root: TemplateValues, functionName: string) => {
  const greedyQuantifier = root.greedyQuantifierHandlers.find(
    (quantifier) => quantifier.functionName === functionName,
  );
  if (greedyQuantifier) {
    return greedyQuantifier;
  }

  const lazyQuantifier = root.lazyQuantifierHandlers.find(
    (quantifier) => quantifier.functionName === functionName,
  );
  if (lazyQuantifier) {
    return lazyQuantifier;
  }

  throw new Error(`Did not find quantifier ${functionName}`);
};

Handlebars.registerHelper(
  'withEntryOf',
  function (root: TemplateValues, functionName: string, options) {
    const fiber = root.fiberHandlers.find(
      (fiber) => fiber.functionName === functionName,
    );
    if (fiber) {
      const type = fiber.atoms[0].type;
      return options.fn({ entryNode: `${functionName}_0_${type}` });
    }
    assertQuantifierExists(root, functionName);
    return options.fn({ entryNode: functionName });
  },
);

Handlebars.registerHelper(
  'withExitOf',
  function (root: TemplateValues, functionName: string, options) {
    const fiber = root.fiberHandlers.find(
      (fiber) => fiber.functionName === functionName,
    );
    if (fiber) {
      const lastIndex = fiber.atoms.length - 1;
      const type = fiber.atoms[lastIndex].type;
      return options.fn({ exitNode: `${functionName}_${lastIndex}_${type}` });
    }

    assertQuantifierExists(root, functionName);
    return options.fn({ exitNode: functionName });
  },
);
