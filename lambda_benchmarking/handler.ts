import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import * as benchmarks from './generated/generated_all';

export const benchmark: APIGatewayProxyHandler = async (event, _context) => {
  const benchmarkName = event.queryStringParameters.name;
  if (!benchmarkName || typeof benchmarks[benchmarkName] !== 'function') {
    return {
      statusCode: 400,
      body: '',
    };
  }

  const benchmarkResult = await benchmarks[benchmarkName]();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        benchmarkResult,
        benchmarkName,
      },
      null,
      2,
    ),
  };
};
