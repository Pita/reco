import * as fs from 'fs';
import * as path from 'path';

function runFakeDataBenchmark(file: string, regex: string) {
  function getOriginalRegex() {
    const originalRegexConfigPath = path.resolve(
      __dirname,
      '../tests_and_benchmarks/config',
      `${regex}.json`,
    );
    return eval(require(originalRegexConfigPath).regex);
  }

  function getGeneratedRegexCode() {
    const generatedRegexCodePath = path.resolve(
      __dirname,
      '../tests_and_benchmarks/generated',
      regex,
      `generated_${regex.split('/')[1]}`,
    );
    return require(generatedRegexCodePath).generatedRegexMatcher;
  }

  function getTestData() {
    const generatedRegexCodePath = path.resolve(__dirname, 'fake_data', file);
    return require(generatedRegexCodePath);
  }

  function benchmarkNativeRegex(testData: string[]) {
    const originalRegex = getOriginalRegex();
    console.log('originalRegex', originalRegex);

    const startOriginalRegex = Date.now();
    let originalRegexCheckSum = 0;
    testData.forEach((testValue: string) => {
      const match = originalRegex.exec(testValue);
      if (match) {
        for (let i = 0; i < match.length; i++) {
          originalRegexCheckSum +=
            typeof match[i] === 'string' ? match[i].length : 0;
        }
      }
    });
    const durationOriginalRegex = Date.now() - startOriginalRegex;
    console.log(`Native duration: ${durationOriginalRegex}ms`);
    return { durationOriginalRegex, originalRegexCheckSum };
  }

  function benchmarkGeneratedRegex(testData: string[]) {
    const generatedRegex = getGeneratedRegexCode();

    const startGeneratedRegex = Date.now();
    let generatedRegexCheckSum = 0;
    testData.forEach((testValue: string) => {
      const result = generatedRegex(testValue);
      if (result) {
        for (let i = 0; i < result.matches.length; i++) {
          generatedRegexCheckSum +=
            typeof result.matches[i] === 'string'
              ? result.matches[i].length
              : 0;
        }
      }
    });
    const durationGeneratedRegex = Date.now() - startGeneratedRegex;
    console.log(`Generated duration: ${durationGeneratedRegex}ms`);
    return { durationGeneratedRegex, generatedRegexCheckSum };
  }

  console.log(regex.toUpperCase());
  const testData = getTestData();
  const { durationOriginalRegex, originalRegexCheckSum } = benchmarkNativeRegex(
    testData,
  );
  const {
    durationGeneratedRegex,
    generatedRegexCheckSum,
  } = benchmarkGeneratedRegex(testData);

  const factor = durationGeneratedRegex / durationOriginalRegex;
  if (generatedRegexCheckSum !== originalRegexCheckSum) {
    console.error(
      'Different checksums original vs generated!!!',
      generatedRegexCheckSum,
      originalRegexCheckSum,
    );
  }
  console.log(`FACTOR: ${factor.toFixed(1)}`, '\n');
  return factor;
}

runFakeDataBenchmark('emails', 'common_regex/email1');
runFakeDataBenchmark('emails', 'common_regex/email2');
runFakeDataBenchmark('emails', 'common_regex/email3');
runFakeDataBenchmark('ip_v4', 'common_regex/ipv4');
runFakeDataBenchmark('ip_v6', 'common_regex/ipv6');
runFakeDataBenchmark('ip_v4', 'common_regex/ipv4_and_ipv6');
runFakeDataBenchmark('ip_v6', 'common_regex/ipv4_and_ipv6');
runFakeDataBenchmark('urls', 'common_regex/url_http');
runFakeDataBenchmark('urls', 'common_regex/url_protocol_optional');
