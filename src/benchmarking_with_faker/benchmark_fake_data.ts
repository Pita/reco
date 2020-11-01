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
      `generated_${regex.split('/')[1]}.ts`,
    );
    return require(generatedRegexCodePath).generatedRegexMatcher;
  }

  function getTestData() {
    const generatedRegexCodePath = path.resolve(__dirname, 'fake_data', file);
    return require(generatedRegexCodePath);
  }

  function benchmarkNativeRegex(testData: string[]) {
    const originalRegex = getOriginalRegex();

    const startOriginalRegex = Date.now();
    let sum = 0;
    testData.forEach((testValue: string) => {
      const match = originalRegex.exec(testValue);
      if (match) {
        sum += match[0].length;
      }
    });
    const durationOriginalRegex = Date.now() - startOriginalRegex;
    console.log('Native checksum:', sum);
    console.log(`Native duration: ${durationOriginalRegex}ms`);
    return durationOriginalRegex;
  }

  function benchmarkGeneratedRegex(testData: string[]) {
    const generatedRegex = getGeneratedRegexCode();

    const startGeneratedRegex = Date.now();
    let sum = 0;
    testData.forEach((testValue: string) => {
      const result = generatedRegex(testValue);
      if (result) {
        sum += result.matches[0].length;
      }
    });
    const durationGeneratedRegex = Date.now() - startGeneratedRegex;
    console.log('Generated checksum:', sum);
    console.log(`Generated duration: ${durationGeneratedRegex}ms`);
    return durationGeneratedRegex;
  }

  console.log(regex.toUpperCase());
  const testData = getTestData();
  const nativeDuration = benchmarkNativeRegex(testData);
  const generatedDuration = benchmarkGeneratedRegex(testData);

  const factor = generatedDuration / nativeDuration;
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
