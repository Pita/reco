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

Handlebars.registerHelper(
  'withEntryOf',
  function (root: TemplateValues, functionName: string, options) {
    const fiber = root.fiberHandlers.find(
      (fiber) => fiber.functionName === functionName,
    );
    if (fiber) {
      return options.fn({
        ...fiber.atoms[0],
        functionName,
        index: 0,
      });
    }
  },
);

Handlebars.registerHelper(
  'withExitOf',
  function (root: TemplateValues, functionName: string, options) {
    const fiber = root.fiberHandlers.find(
      (fiber) => fiber.functionName === functionName,
    );
    if (fiber) {
      return options.fn({
        ...fiber.atoms[fiber.atoms.length - 1],
        functionName,
        index: fiber.atoms.length - 1,
      });
    }
  },
);
