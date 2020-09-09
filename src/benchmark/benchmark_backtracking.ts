const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');
import { complete } from './manual_implementation/backtracking';
// import { FSMRegex } from './manual_implementation/backtracking_fsm';
import { BacktrackRegex } from './manual_implementation/backtracking2';
import { ReverseRegex } from './manual_implementation/backtracking3_start_with_atom';

const suite = new Benchmark.Suite();
suite.add('native', function () {
  /(.*)(b)(.*)(b)/.exec('aaaaaaabaaaaaab');
});
// suite.add('native fsm', function () {
//   /([^b])(b)([^b])(b)/.exec('aaaaaaabaaaaaab');
// });
// suite.add('native fsm non greedy', function () {
//   /(.*?)(b)(.*?)(b)/.exec('aaaaaaabaaaaaab');
// });
suite.add('js-implementation', function () {
  complete('aaaaaaabaaaaaab');
});
suite.add('js-implementation 2', function () {
  new BacktrackRegex().matchAll('aaaaaaabaaaaaab');
});
suite.add('js-implementation 3', function () {
  new ReverseRegex().matchAll('aaaaaaabaaaaaab');
});
// suite.add('js-implementation fsm', function () {
//   new FSMRegex().matchAll('aaaaaaabaaaaaab');
// });
suite.on('cycle', function (event: any) {
  benchmarks.add(event.target);
});
suite.on('complete', function () {
  benchmarks.log();
});
suite.on('error', function (err: any) {
  console.error(err);
});
suite.run({
  async: true,
});
