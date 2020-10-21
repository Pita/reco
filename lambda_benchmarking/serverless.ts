import { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
  service: {
    name: 'reco-benchmark',
    // app and org for use with dashboard.serverless.com
    // app: your-app-name,
    // org: your-org-name,
  },
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
    exportEndpoints: {
      output: {
        path: './endpoints.json',
      },
    },
  },
  // Add the serverless-webpack plugin
  plugins: ['serverless-webpack', 'serverless-plugin-export-endpoints'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    memorySize: 1024,
    timeout: 15,
  },
  functions: {
    benchmark: {
      handler: 'handler.benchmark',
      events: [
        {
          http: {
            method: 'get',
            path: 'benchmark',
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
