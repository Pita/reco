export default `
{{#switchCase 'type' 'groupBackReference'}}
  let backReferenceI{{{@index}}} = context.groupMarkerStart{{{groupIndex}}};
  const backReferenceEnd{{{@index}}} = context.groupMarkerEnd{{{groupIndex}}};
  while(backReferenceI{{{@index}}} < backReferenceEnd{{{@index}}}) {
    if (i >= str.length) {
      return -1;
    }

    const backReferenceCharCode = str.charCodeAt(backReferenceI{{{@index}}});
    const currentCharCode = str.charCodeAt(i);

    if (backReferenceCharCode !== currentCharCode) {
      return -1;
    }

    backReferenceI{{{@index}}}++;
    i++;
  }
{{/switchCase}}`;
