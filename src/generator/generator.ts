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
  let templateValues, code, error;
  try {
    const collector = new Collector(regexStr);
    const mainHandler = handleDisjunction(
      literal.pattern.alternatives,
      collector,
      collector.createFinalFiber(CharRange.createEmptyRange()),
      literal.flags,
    );

    templateValues = { ...collector.getTemplateValues(), mainHandler };
    code = genCodeFromTemplate(templateValues);
  } catch (e) {
    error = e;
  }
  return { code, templateValues, literal, error };
};
