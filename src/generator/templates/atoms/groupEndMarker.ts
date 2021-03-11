export default `
{{#switchCase 'type' 'groupEndMarker'}}
  context.groupMarkerStart{{{groupReference.idx}}} = context.groupMarkerStartTemp{{{groupReference.idx}}};
  context.groupMarkerEnd{{{groupReference.idx}}} = i;
{{/switchCase}}
`;
