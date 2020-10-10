import * as Handlebars from 'handlebars';
import * as fs from 'fs';

export const registerComparisonPartial = () => {
  const template = fs.readFileSync(
    __dirname + '/comparison.handlebars',
    'utf8',
  );
  Handlebars.registerPartial('comparison', template);
};

export interface ComparsionTemplate {
  lessOrEqual?: boolean;
  moreOrEqual?: boolean;
  equal?: boolean;
  equalOneOfTwo?: boolean;
  isTrue?: boolean;
  comparisonValue?: number;
  comparisonValue1?: number;
  comparisonValue2?: number;
}
