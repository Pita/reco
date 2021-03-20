import * as Handlebars from 'handlebars';
import './handleBarHelpers';
import templateFile from './comparison.handlebars';

export const registerComparisonPartial = (): void => {
  Handlebars.registerPartial('comparison', templateFile);
};

export type ComparsionTemplate =
  | {
      readonly type: 'lessOrEqual' | 'moreOrEqual' | 'equal';
      readonly comparisonValue: number;
    }
  | {
      readonly type: 'equalOneOfTwo';
      readonly comparisonValue1: number;
      readonly comparisonValue2: number;
    }
  | {
      readonly type: 'true';
    }
  | {
      readonly type: 'false';
    };
