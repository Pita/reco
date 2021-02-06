import * as Handlebars from 'handlebars';
import { GroupReference } from './mainTemplate';

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
  console.log('arguments', arguments);
  if (currentIndex + 1 >= array.length) {
    return;
  }

  return options.fn({
    ...array[currentIndex + 1],
    nextIndex: currentIndex + 1,
  });
});
