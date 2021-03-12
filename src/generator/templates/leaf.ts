import * as Handlebars from 'handlebars';
import templateFile from './leaf.handlebars';
import { ComparsionTemplate, registerComparisonPartial } from './comparison';

export const registerLeafPartial = () => {
  registerComparisonPartial();
  Handlebars.registerPartial('leaf', templateFile);
};

export type LeafTemplate =
  | { readonly type: 'lastComparison'; readonly comparison: ComparsionTemplate }
  | {
      readonly type: 'comparison';
      readonly comparison: ComparsionTemplate;
      readonly comparisonTrue: LeafTemplate;
      readonly comparisonFalse: LeafTemplate;
    };
