import * as Handlebars from 'handlebars';
import templateFile from './leaf.handlebars';
import { ComparsionTemplate, registerComparisonPartial } from './comparison';

export const registerLeafPartial = () => {
  registerComparisonPartial();
  Handlebars.registerPartial('leaf', templateFile);
};

export type LeafTemplate =
  | { type: 'lastComparison'; comparison: ComparsionTemplate }
  | {
      type: 'comparison';
      comparison: ComparsionTemplate;
      comparisonTrue: LeafTemplate;
      comparisonFalse: LeafTemplate;
    };
