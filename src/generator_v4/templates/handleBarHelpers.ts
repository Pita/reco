import * as Handlebars from 'handlebars';

Handlebars.registerHelper('escapeComment', function (this: any, value) {
  return value.replace(/\*/g, '✱');
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

Handlebars.registerHelper('times', function (n, block) {
  var accum = '';
  for (var i = 0; i < n; ++i) {
    block.data.index = i;
    accum += block.fn(i);
  }
  return accum;
});
