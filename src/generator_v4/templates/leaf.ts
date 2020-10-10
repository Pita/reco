import * as Handlebars from 'handlebars';
import * as fs from 'fs';
import { ComparsionTemplate, registerComparisonPartial } from './comparison';

export const registerLeafPartial = () => {
  registerComparisonPartial();
  const template = fs.readFileSync(__dirname + '/leaf.handlebars', 'utf8');
  Handlebars.registerPartial('leaf', template);
};

export interface LeafTemplate {
  noop?: boolean;
  lastComparison: boolean;
  comparison: ComparsionTemplate;
  comparisonTrue?: LeafTemplate;
  comparisonFalse?: LeafTemplate;
}
