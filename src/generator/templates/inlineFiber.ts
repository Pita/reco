import * as Handlebars from 'handlebars';
import templateFile from './inlineFiber.handlebars';

export const registerInlineFiberPartial = () => {
  Handlebars.registerPartial('inlineFiber', templateFile);
};
