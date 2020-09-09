export class ReverseRegex {
  group_1_start = -1;
  group_1_end = -1;
  group_2_start = -1;
  group_2_end = -1;
  group_3_start = -1;
  group_3_end = -1;
  group_4_start = -1;
  group_4_end = -1;

  private searchBBackwards(str: string, start: number): number {
    for (let i = start; i >= 0; i--) {
      if (str.charCodeAt(i) === 98) {
        return i;
      }
    }

    return -1;
  }

  matchAll(str: string) {
    const b2 = this.searchBBackwards(str, str.length - 1);
    if (b2 === -1) {
      return -1;
    }

    const b1 = this.searchBBackwards(str, b2 - 1);
    if (b1 === -1) {
      return -1;
    }

    this.group_1_start = 0;
    this.group_1_end = b1;
    this.group_2_start = b1;
    this.group_2_end = b1 + 1;
    this.group_3_start = b1 + 1;
    this.group_3_end = b2;
    this.group_4_start = b2;
    this.group_4_end = b2 + 1;
  }
}
