const path = require('path');
const externals = require('externals-dependencies');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        use: {
          loader: 'babel-loader',
          options: { cacheDirectory: true },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  node: {
    global: true,
    __filename: true,
    __dirname: true,
  },
  externals: [externals()], // delete some warning log
};
