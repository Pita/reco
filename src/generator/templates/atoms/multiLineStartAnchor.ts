export default `
{{#switchCase 'type' 'multiLineStartAnchor'}}
  if (i !== 0) {
    const charCodeMultiLineStartAnchor{{{@index}}} = str.charCodeAt(i - 1);
    let isNewLineChar{{{@index}}} = false;
    // TODO: find way to generate these trees
    if (charCodeMultiLineStartAnchor{{{@index}}} <= 13) {
      isNewLineChar{{{@index}}} = charCodeMultiLineStartAnchor{{{@index}}} === 10 || charCodeMultiLineStartAnchor{{{@index}}} === 13;
    } else {
      if (charCodeMultiLineStartAnchor{{{@index}}} <= 8233) {
        isNewLineChar{{{@index}}} = charCodeMultiLineStartAnchor{{{@index}}} >= 8232;
      }
    }
    if (!isNewLineChar{{{@index}}}) {
      return -1;
    }
  }

{{/switchCase}}
`;
