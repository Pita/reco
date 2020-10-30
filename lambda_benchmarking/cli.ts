import 'source-map-support/register';
import * as benchmarks from './generated/generated_all';

const benchmarkName = process.argv[2];
if (!benchmarkName || typeof benchmarks[benchmarkName] !== 'function') {
  console.error(`Unkown benchmark: ${benchmarkName}`);
  process.exit(1);
}

benchmarks[benchmarkName]().then((benchmarkResult) => {
  console.log(benchmarkName, benchmarkResult);
});
