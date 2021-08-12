const path = require('path');
const baseConfig = require('./webpack.base.js');
const webpackMerge = require('webpack-merge');

const mainConfig = {
  entry: path.resolve(__dirname, '../app/main/electron.ts'),
  target: 'electron-main',
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  mode: 'development', // 参考"https://www.webpackjs.com/concepts/mode/", 会将 process.env.NODE_ENV 的值设为 development
};

module.exports = webpackMerge.merge(baseConfig, mainConfig);
