import * as glob from 'glob';
import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';
import * as _ from 'lodash';
const endpoints = require('./endpoints.json');

(async () => {
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
