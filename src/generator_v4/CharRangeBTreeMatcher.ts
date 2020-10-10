import * as Handlebars from 'handlebars';
import * as _ from 'lodash';
const prettier = require('prettier');

const comparisonTemplate = `
{{#with comparison}}
  {{#if isTrue}}
    true
  {{/if}}
  {{#if equalOneOfTwo}}
    char === {{{comparisonValue1}}} || char === {{{comparisonValue2}}}
  {{/if}}
  {{#if equal}}
    char === {{{comparisonValue}}}
  {{/if}}
  {{#if lessOrEqual}}
    char <= {{{comparisonValue}}}
  {{/if}}
  {{#if moreOrEqual}}
    char >= {{{comparisonValue}}}
  {{/if}}
{{/with}}
`;
Handlebars.registerPartial('comparison', comparisonTemplate);

Handlebars.registerHelper('log', function (this: any, value) {
  console.log('templateLog', this);
});

const leafTemplate = `
  {{#if lastComparison}}
    result = {{>comparison}}
  {{/if}}
  {{#unless lastComparison}}
    if ({{>comparison}}) {
      {{>leaf comparisonTrue}}
    }
    {{#if comparisonFalse}}
      else {
        {{>leaf comparisonFalse}}
      }
    {{/if}}
  {{/unless}}
`;
Handlebars.registerPartial('leaf', leafTemplate);

const template = `
  let result = false;

  {{> leaf tree}}
`;

// TODO: fix type
interface ComparsionValues {
  lessOrEqual?: boolean;
  moreOrEqual?: boolean;
  equal?: boolean;
  equalOneOfTwo?: boolean;
  isTrue?: boolean;
  comparisonValue?: number;
  comparisonValue1?: number;
  comparisonValue2?: number;
}

interface LeafValues {
  lastComparison: boolean;
  comparison: ComparsionValues;
  comparisonTrue?: LeafValues;
  comparisonFalse?: LeafValues;
}

function cc(char: string) {
  return char.charCodeAt(0);
}

interface Leaf {
  min: number;
  max: number;
  maxChecked?: boolean;
}

class CharRangeBTreeMatcher {
  private chars: number[] = [];

  addChar(char: number) {
    this.chars.push(char);
  }

  addRange(min: number, max: number) {
    for (let char = min; char <= max; char++) {
      this.chars.push(char);
    }
  }

  private processLeafs(leafs: Leaf[]): LeafValues | undefined {
    if (leafs.length === 0) {
      return undefined;
    }
    if (leafs.length === 1) {
      if (leafs[0].min === leafs[0].max) {
        return {
          lastComparison: true,
          comparison: {
            equal: true,
            comparisonValue: leafs[0].min,
          },
        };
      }
      if (leafs[0].maxChecked) {
        return {
          lastComparison: true,
          comparison: {
            moreOrEqual: true,
            comparisonValue: leafs[0].min,
          },
        };
      }
    }
    if (leafs.length === 2) {
      if (leafs[0].min === leafs[0].max && leafs[1].min === leafs[1].max) {
        return {
          lastComparison: true,
          comparison: {
            equalOneOfTwo: true,
            comparisonValue1: leafs[0].min,
            comparisonValue2: leafs[1].min,
          },
        };
      }
      if (leafs[0].min === leafs[0].max) {
        return {
          lastComparison: false,
          comparison: {
            equal: true,
            comparisonValue: leafs[0].min,
          },
          comparisonTrue: {
            lastComparison: true,
            comparison: { isTrue: true },
          },
          comparisonFalse: this.processLeafs(leafs.slice(1)),
        };
      }
    }

    const slicePoint = Math.ceil(leafs.length / 2);
    leafs[slicePoint - 1].maxChecked = true;

    const lowerHalf = this.processLeafs(leafs.slice(0, slicePoint));
    const upperHalf = this.processLeafs(leafs.slice(slicePoint));

    const comparison = {
      lessOrEqual: true,
      comparisonValue: leafs[slicePoint - 1].max,
    };

    return {
      lastComparison: false,
      comparison,
      comparisonTrue: lowerHalf,
      comparisonFalse: upperHalf,
    };
  }

  toLeafValues() {
    const sortedChars = _.sortedUniq(_.sortBy(this.chars));
    const leafs: Leaf[] = [];

    let rangeLeafStart = null;
    for (let i = 0; i < sortedChars.length; i++) {
      const currentChar = sortedChars[i];
      const nextCharIsFollowUp = currentChar + 1 === sortedChars[i + 1];

      if (rangeLeafStart === null) {
        if (nextCharIsFollowUp) {
          rangeLeafStart = currentChar;
        } else {
          leafs.push({ min: currentChar, max: currentChar });
        }
      } else if (!nextCharIsFollowUp) {
        leafs.push({
          min: rangeLeafStart,
          max: currentChar,
        });
        rangeLeafStart = null;
      }
    }

    return this.processLeafs(leafs);
  }
}

const bTree = new CharRangeBTreeMatcher();
bTree.addChar(cc('_'));
// bTree.addRange(cc('a'), cc('z'));
// bTree.addRange(cc('A'), cc('Z'));
bTree.addRange(cc('0'), cc('9'));

const values = bTree.toLeafValues();
const compiled = Handlebars.compile(template);
const code = prettier.format(compiled({ tree: values }), {
  semi: true,
  parser: 'babel-ts',
});
console.log(code);
