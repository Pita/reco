import * as Handlebars from 'handlebars';
import templateFile from './atoms.handlebars';

export const registerAtomsPartial = () => {
  Handlebars.registerPartial('atoms', templateFile);
};
