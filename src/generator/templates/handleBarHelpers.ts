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

Handlebars.registerHelper(
  'groupStartArrayIndex',
  function (groupReference: GroupReference) {
    return new Handlebars.SafeString('' + groupReference.idx * 2);
  },
);

Handlebars.registerHelper(
  'groupEndArrayIndex',
  function (groupReference: GroupReference) {
    return new Handlebars.SafeString('' + (groupReference.idx * 2 + 1));
  },
);

Handlebars.registerHelper('times', function (n, block) {
  let accum = '';
  for (let i = 0; i < n; i++) accum += block.fn(i);
  return accum;
});
