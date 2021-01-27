import { CharRange } from '../generator/CharRange';

export class CharRangeSequence {
  private charRanges: CharRange[];

  constructor(charRanges: CharRange[] = []) {
    this.charRanges = charRanges;
  }

  push(charRange: CharRange) {
    return new CharRangeSequence([...this.charRanges, charRange]);
  }

  toJSON() {
    return this.charRanges.map((charRange) => charRange.toJSON());
  }

  // concat(seq: CharRangeSequence) {
  //   return new CharRangeSequence([...this.charRanges, ...seq.charRanges]);
  // }
}
