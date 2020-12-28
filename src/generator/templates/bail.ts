import * as Handlebars from 'handlebars';
import templateFile from './bail.handlebars';

export const registerBailPartial = () => {
  Handlebars.registerPartial('bail', templateFile);
};
