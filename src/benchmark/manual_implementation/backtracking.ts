type GroupMarker = (group_number: number, start: number, end: number) => void;

type MatchFunction = (options: {
  str: string;
  start: number;
  groupMarker: GroupMarker;
}) => number;

const matchAny: MatchFunction = ({ str }) => {
  return str.length;
};

const matchChar: MatchFunction = ({ str, start }) => {
  return str.charCodeAt(start) === 98 ? start + 1 : -1;
};

const backtracking1: MatchFunction = ({ str, start, groupMarker }) => {
  const positionAfterFirstMatched = matchAny({ str, start, groupMarker });

  for (let i = positionAfterFirstMatched; i >= start; i--) {
    const positionAfterSecondMatched = backtracking2({
      str,
      start: i,
      // end,
      groupMarker,
    });
    if (positionAfterSecondMatched !== -1) {
      groupMarker(0, start, i);
      return positionAfterSecondMatched;
    }
  }
  return -1;
};

const backtracking2: MatchFunction = ({ str, start, groupMarker }) => {
  let positionAfterCharMatch = matchChar({ str, start, groupMarker });
  if (positionAfterCharMatch === -1) {
    return -1;
  }
  groupMarker(1, start, positionAfterCharMatch);

  const positionAfterFirstMatched = matchAny({
    str,
    start: positionAfterCharMatch,
    groupMarker,
  });

  for (let i = positionAfterFirstMatched; i >= positionAfterCharMatch; i--) {
    const positionAfterSecondMatched = matchChar({
      str,
      start: i,
      groupMarker,
    });
    if (positionAfterSecondMatched !== -1) {
      groupMarker(2, positionAfterCharMatch, i);
      groupMarker(3, i, positionAfterSecondMatched);
      return positionAfterSecondMatched;
    }
  }
  return -1;
};

// (.*)(b)(.*)(b)
export function complete(str: string) {
  const positions = [
    [-1, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1],
  ];
  const groupMarker: GroupMarker = (
    group_number: number,
    start: number,
    end: number,
  ) => {
    positions[group_number][0] = start;
    positions[group_number][1] = end;
  };
  backtracking1({
    start: 0,
    str,
    groupMarker,
  });

  // return positions.map((position) => str.substring(position[0], position[1]));
}
