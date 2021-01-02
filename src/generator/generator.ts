import { AST, RegExpParser } from 'regexpp';
import { Collector } from './Collector';
import { handleDisjunction } from './astHandler/Disjunction';
import { CharRange } from './CharRange';

export interface Flags extends AST.Flags {
  INTERNAL_backwards?: boolean;
  INTERNAL_no_backtracking?: boolean;
}

export const genTemplateValues = (regexStr: string) => {
  const literal = new RegExpParser().parseLiteral(regexStr);

  const collector = new Collector(regexStr);
  const mainHandler = handleDisjunction(
    literal.pattern.alternatives,
    collector,
    collector.createFinalFiber(CharRange.createEmptyRange()),
    literal.flags,
  );

  const matchMinCharLength =
    mainHandler.meta.minCharLength === 0
      ? 0
      : mainHandler.meta.minCharLength - 1;

  return { ...collector.getTemplateValues(), matchMinCharLength, mainHandler };
};
