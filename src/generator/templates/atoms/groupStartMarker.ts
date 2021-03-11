export default `
{{#switchCase 'type' 'groupStartMarker'}}
  context.groupMarkerStartTemp{{{groupReference.idx}}} = i;
{{/switchCase}}
`;
