export default `
{{#switchCase 'type' 'endAnchor'}}
  if (i !== str.length) {
    return -1;
  }
{{/switchCase}}
`;
