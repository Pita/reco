import * as Handlebars from 'handlebars';
import * as fs from 'fs';
import './handleBarHelpers';

export const registerComparisonPartial = () => {
  const template = fs.readFileSync(
    __dirname + '/comparison.handlebars',
    'utf8',
  );
  Handlebars.registerPartial('comparison', template);
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
