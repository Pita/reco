export default `
{{#switchCase 'type' 'startAnchor'}}
  if (i !== 0) {
    return -1;
  }
{{/switchCase}}
`;
