'use strict';
function generatedRegexMatcher(n) {
  for (
    var a = n.length,
      u = function (e) {
        var r = e;
        if (a <= r) return -1;
        var t = n.charCodeAt(r),
          e = !1;
        return (
          t <= 90
            ? (e = t <= 57 ? 48 <= t : 65 <= t)
            : t <= 122 && (e = 97 <= t),
          e ? ++r : -1
        );
      },
      e = 0;
    e < a;
    e++
  ) {
    var r = (function (e) {
      for (var r = e; ; ) {
        var t = u(r);
        if (-1 === t) break;
        r = t;
      }
      return r;
    })(e);
    if (-1 !== r) return { index: e, matches: [n.substring(e, r)] };
  }
  return null;
}
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.generatedRegexMatcher = generatedRegexMatcher);
