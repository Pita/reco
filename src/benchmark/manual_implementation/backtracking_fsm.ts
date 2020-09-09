// type GroupMarker = (group_number: number, start: number, end: number) => void;

type MatchFunction = (
  str: string,
  start: number,
  // groupMarker: GroupMarker,
) => number;

export class FSMRegex {
  group_1_start = -1;
  group_1_end = -1;
  group_2_start = -1;
  group_2_end = -1;
  group_3_start = -1;
  group_3_end = -1;
  group_4_start = -1;
  group_4_end = -1;

  // TRY: move these out of the class
  private matchAnyNonB(str: string, start: number) {
    let i = start;
    for (; i < str.length; i++) {
      if (str.charCodeAt(i) === 98) {
        break;
      }
    }

    return i;
  }

  // private matchChar(str: string, start: number) {
  //   return str.charCodeAt(start) === 98 ? start + 1 : -1;
  // }

  matchAll(str: string) {
    const firstMove = this.matchAnyNonB(str, 0);
    this.group_1_start = 0;
    this.group_1_end = firstMove;

    const secondMove = firstMove + 1;
    this.group_2_start = firstMove;
    this.group_2_end = secondMove;

    const thirdMove = this.matchAnyNonB(str, secondMove);
    this.group_3_start = secondMove;
    this.group_3_end = thirdMove;

    const fourthMove = thirdMove + 1;
    this.group_4_start = thirdMove;
    this.group_4_end = fourthMove;

    return fourthMove;
  }
}
