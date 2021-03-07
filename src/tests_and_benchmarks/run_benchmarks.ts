import * as glob from 'glob';
import * as fs from 'fs';
import * as path from 'path';

(async () => {
  const cwd = `${__dirname}/generated`;
  const folders = glob.sync('*/*', { cwd });

  const results: { [key: string]: number } = {};
  for (const folder of folders) {
    try {
      const benchmarkFile = `${cwd}/${folder}/generated_${
        folder.split('/')[1]
      }.benchmark`;
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const benchmark = require(benchmarkFile).benchmark;
      const ratio = await benchmark();
      results[folder] = ratio;
      console.log(folder, ratio);
    } catch (e) {
      console.error(folder, e.message);
    }
  }

  const dataJS = `const benchmarkData = ${JSON.stringify(results, null, 2)};`;

  fs.writeFileSync(
    path.resolve(__dirname, 'benchmarks_result/benchmark_data.js'),
    dataJS,
    'utf8',
  );
})();
