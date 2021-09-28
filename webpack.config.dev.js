const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtract = require('mini-css-extract-plugin');
const basePath = __dirname;
const distPath = 'dist';
const indextInput = './src/container/login/index.html';
const indexOutput = 'index.html';
const webpackInitConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.ts'],
  },
  entry: {
    app: ['@babel/polyfill', './src/container/component/index.ts'],
  },
  output: {
    path: path.join(basePath, distPath),
    filename: '[chunkhash][name].js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.ts/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: [
          MiniCSSExtract.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: indexOutput,
      template: indextInput,
    }),
    new MiniCSSExtract({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
module.exports = webpackInitConfig;