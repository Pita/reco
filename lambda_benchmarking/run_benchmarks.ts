import * as glob from 'glob';
import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';
import * as _ from 'lodash';
const cgf = require('changed-git-files');
const endpoints = require('./endpoints.json');

const hasOldBenchmarkdDataChanged = () => {
  return new Promise((resolve, reject) => {
    cgf((err, gitFilesChanged: Array<{ filename: string; status: string }>) => {
      if (err) {
        return reject(err);
      }

      const hasOldBenchmarkdDataChanged = gitFilesChanged.some(
        (gitFileChanged) => {
          gitFileChanged.filename ===
            'lambda_benchmarking/benchmarks_result/old_benchmark_data.js';
        },
      );
      resolve(hasOldBenchmarkdDataChanged);
    });
  });
};

const copyNewToOldBenchmarkData = () => {
  let oldData = fs.readFileSync(
    path.resolve(__dirname, 'benchmarks_result/benchmark_data.js'),
    'utf8',
  );
  fs.writeFileSync(
    path.resolve(__dirname, 'benchmarks_result/old_benchmark_data.js'),
    oldData.replace('benchmarkData', 'oldBenchmarkData'),
    'utf8',
  );
};

(async () => {
  const hasOldBenchmarkDataChanged = await hasOldBenchmarkdDataChanged();
  if (!hasOldBenchmarkDataChanged) {
    copyNewToOldBenchmarkData();
  }

  const cwd = `${__dirname}/generated`;
  const folders = glob.sync('*/*', { cwd });

  const resultsUnsorted: { folder: string; result: number }[] = [];
  await Promise.all(
    folders.map(async (folder) => {
      const response = await axios.get(endpoints.benchmark.GET, {
        params: { name: folder.replace('/', '___') },
      });
      resultsUnsorted.push({ folder, result: response.data.benchmarkResult });
      console.log(folder, response.data.benchmarkResult);
    }),
  );
  const resultsSorted = _.sortBy(resultsUnsorted, 'folder');
  const resultsObject: { [key: string]: number } = {};
  resultsSorted.forEach(({ folder, result }) => {
    resultsObject[folder] = result;
  });

  const dataJS = `const benchmarkData = ${JSON.stringify(
    resultsObject,
    null,
    2,
  )};`;

  fs.writeFileSync(
    path.resolve(__dirname, 'benchmarks_result/benchmark_data.js'),
    dataJS,
    'utf8',
  );
})();
