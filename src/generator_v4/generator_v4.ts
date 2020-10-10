import { AST, RegExpParser } from 'regexpp';
import { Collector } from './Collector';
import { genCodeFromTemplate } from './templates/mainTemplate';
import { handleDisjunction } from './astHandler/Disjunction';

export interface Flags extends AST.Flags {
  INTERNAL_backwards?: boolean;
}

export const genCode = (regexStr: string) => {
  const literal = new RegExpParser().parseLiteral(regexStr);
  let templateValues, code, error;
  try {
    if (literal.flags.unicode) {
      throw new Error('Does not support unicode yet');
    }
    if (literal.flags.multiline) {
      throw new Error('Does not support multiline yet');
    }

    const collector = new Collector(regexStr);
    const mainHandler = handleDisjunction(
      literal.pattern.alternatives,
      collector,
      collector.createFinalFiber(),
      literal.flags,
    );

    templateValues = { ...collector.getTemplateValues(), mainHandler };
    code = genCodeFromTemplate(templateValues);
  } catch (e) {
    error = e;
  }
  return { code, templateValues, literal, error };
};
