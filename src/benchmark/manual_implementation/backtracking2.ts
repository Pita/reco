export class BacktrackRegex {
  group_1_start = -1;
  group_1_end = -1;
  group_2_start = -1;
  group_2_end = -1;
  group_3_start = -1;
  group_3_end = -1;
  group_4_start = -1;
  group_4_end = -1;

  private matchAny(str: string) {
    return str.length;
  }

  private matchChar(str: string, start: number) {
    return str.charCodeAt(start) === 98 ? start + 1 : -1;
  }

  matchAll(str: string) {
    const start = 0;
    const positionAfterFirstMatched = this.matchAny(str);

    for (let i = positionAfterFirstMatched; i >= start; i--) {
      const positionAfterSecondMatched = this.backtracking2(str, i);
      if (positionAfterSecondMatched !== -1) {
        this.group_1_start = start;
        this.group_1_end = i;
        return positionAfterSecondMatched;
      }
    }
    return -1;
  }

  backtracking2(str: string, start: number) {
    let positionAfterCharMatch = this.matchChar(str, start);
    if (positionAfterCharMatch === -1) {
      return -1;
    }
    this.group_2_start = start;
    this.group_2_end = positionAfterCharMatch;

    const positionAfterFirstMatched = this.matchAny(str);

    for (let i = positionAfterFirstMatched; i >= positionAfterCharMatch; i--) {
      const positionAfterSecondMatched = this.matchChar(str, i);
      if (positionAfterSecondMatched !== -1) {
        this.group_3_start = positionAfterCharMatch;
        this.group_3_end = i;
        this.group_4_start = i;
        this.group_4_end = positionAfterSecondMatched;
      }
    }
    return -1;
  }
}
