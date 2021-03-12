export default `
{{#switchCase 'type' 'multiLineEndAnchor'}}
  if (i !== str.length) {
    const charCodeMultiLineEndAnchor{{{@index}}} = str.charCodeAt(i);
    let isNewLineChar{{{@index}}} = false;
    // TODO: find way to generate these trees
    if (charCodeMultiLineEndAnchor{{{@index}}} <= 13) {
      isNewLineChar{{{@index}}} = charCodeMultiLineEndAnchor{{{@index}}} === 10 || charCodeMultiLineEndAnchor{{{@index}}} === 13;
    } else {
      if (charCodeMultiLineEndAnchor{{{@index}}} <= 8233) {
        isNewLineChar{{{@index}}} = charCodeMultiLineEndAnchor{{{@index}}} >= 8232;
      }
    }
    if (!isNewLineChar{{{@index}}}) {
      return -1;
    }
  }
{{/switchCase}}
`;
