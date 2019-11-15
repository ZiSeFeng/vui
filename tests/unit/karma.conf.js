// const webpackConfig = require("../../build/webpack.test.js");

// module.exports = function (config) {
//   config.set({
//     basePath: "",
//     frameworks: ["mocha", 'chai'],
//     files: [
//       "./index.js"
//     ],
//     exclude: [],
//     preprocessord: {
//       "./index.js": ["webpack", "sourcemap"]
//     },
//     webpack: webpackConfig,
//     reporters: ["progress"],
//     runtimeCompiler: true,
//     port: 9876,
//     colors: true,
//     logLevel: config.LOG_INFO,
//     autoWatch: true,
//     browsers: ["Chrome"],
//     singleRun: false,
//     concurrency: Infinity
//   });
// };

var webpackConfig = require('@vue/cli-service/webpack.config.js')

module.exports = function (config) {
  const configuration = {
    // 浏览器环境
    browsers: ['ChromeHeadless'],
    // 浏览器使用的框架
    frameworks: ['mocha', 'sinon-chai'],
    // 结果存在哪里
    reporters: ['spec', 'coverage'],
    // 测试入口（相对于karma.conf.js所在的目录）
    files: ['./specs/*.spec.js'],
    // 对指定文件进行预处理
    preprocessors: {
      './specs/*.spec.js': ['webpack', 'sourcemap', 'coverage']
    },
    // webpack打包规则
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    // 覆盖率配置
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    client: {
      mocha: {
        timeout: 4000
      }
    },
    runtimeCompiler: true,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false,
    concurrency: Infinity
  };

  config.set(configuration);
};