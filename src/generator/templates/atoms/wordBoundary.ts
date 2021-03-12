export default `
{{#switchCase 'type' 'wordBoundary'}}
  if (i !== 0 && i !== str.length) {
    // TODO: find way to generate these trees
    const charCodeBefore{{{@index}}} = str.charCodeAt(i-1);
    let isBeforeWord{{{@index}}} = false;
    if (charCodeBefore{{{@index}}} <= 90) {
      if (charCodeBefore{{{@index}}} <= 57) {
        isBeforeWord{{{@index}}} = charCodeBefore{{{@index}}} >= 48;
      } else {
        isBeforeWord{{{@index}}} = charCodeBefore{{{@index}}} >= 65;
      }
    } else {
      if (charCodeBefore{{{@index}}} === 95) {
        isBeforeWord{{{@index}}} = true;
      } else {
        if (charCodeBefore{{{@index}}} <= 122) {
          isBeforeWord{{{@index}}} = charCodeBefore{{{@index}}} >= 97;
        }
      }
    }

    const charCodeAfter{{{@index}}} = str.charCodeAt(i);
    let isAfterWord{{{@index}}} = false;
    if (charCodeAfter{{{@index}}} <= 90) {
      if (charCodeAfter{{{@index}}} <= 57) {
        isAfterWord{{{@index}}} = charCodeAfter{{{@index}}} >= 48;
      } else {
        isAfterWord{{{@index}}} = charCodeAfter{{{@index}}} >= 65;
      }
    } else {
      if (charCodeAfter{{{@index}}} === 95) {
        isAfterWord{{{@index}}} = true;
      } else {
        if (charCodeAfter{{{@index}}} <= 122) {
          isAfterWord{{{@index}}} = charCodeAfter{{{@index}}} >= 97;
        }
      }
    }

    {{#if negate}}
      if (isBeforeWord{{{@index}}} !== isAfterWord{{{@index}}}) {
        return -1;
      }
    {{/if}}
    {{#unless negate}}
      if (isBeforeWord{{{@index}}} === isAfterWord{{{@index}}}) {
        return -1;
      }
    {{/unless}}
  }
  {{#if negate}}
  else {
    return -1;
  }
  {{/if}}
{{/switchCase}}
`;
