import { AST, RegExpParser } from 'regexpp';
import { Collector } from './Collector';
import { genCodeFromTemplate } from './templates/mainTemplate';
import { handleDisjunction } from './astHandler/Disjunction';
import { CharRange } from './CharRange';

export interface Flags extends AST.Flags {
  INTERNAL_backwards?: boolean;
  INTERNAL_no_backtracking?: boolean;
}

export const genCode = (regexStr: string) => {
  const literal = new RegExpParser().parseLiteral(regexStr);

  const collector = new Collector(regexStr);
  const mainHandler = handleDisjunction(
    literal.pattern.alternatives,
    collector,
    collector.createFinalFiber(CharRange.createEmptyRange()),
    literal.flags,
  );

  const templateValues = { ...collector.getTemplateValues(), mainHandler };
  const code = genCodeFromTemplate(templateValues);

  return { code, templateValues, literal };
};
