import * as Handlebars from 'handlebars';
import { GroupReference } from './mainTemplate';

Handlebars.registerHelper('escapeComment', function (this: any, value) {
  return new Handlebars.SafeString(value.replace(/\*/g, '✱'));
});

Handlebars.registerHelper('switchCase', function (this: any, type, options) {
  if (this.type === type) {
    return options.fn(this.data ? this.data : this);
  } else {
    return options.inverse(this);
  }
});

Handlebars.registerHelper('hasCallback', function (this: any, options) {
  const hasCallback = this.followUp?.functionName === 'callback';

  if (hasCallback) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

Handlebars.registerHelper('groupStartArrayIndex', function (
  groupReference: GroupReference,
) {
  return new Handlebars.SafeString('' + groupReference.idx * 2);
});

Handlebars.registerHelper('groupEndArrayIndex', function (
  groupReference: GroupReference,
) {
  return new Handlebars.SafeString('' + (groupReference.idx * 2 + 1));
});
