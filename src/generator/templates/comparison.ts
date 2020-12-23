import * as Handlebars from 'handlebars';
import './handleBarHelpers';
import templateFile from './comparison.handlebars';

export const registerComparisonPartial = () => {
  Handlebars.registerPartial('comparison', templateFile);
};

export type ComparsionTemplate =
  | {
      type: 'lessOrEqual' | 'moreOrEqual' | 'equal';
      comparisonValue: number;
    }
  | {
      type: 'equalOneOfTwo';
      comparisonValue1: number;
      comparisonValue2: number;
    }
  | {
      type: 'true';
    };
