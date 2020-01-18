const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  watch: true,
  target: 'node',
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  mode: 'development',
  devtool: 'source-map',
  entry: './src/server.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@app': path.resolve(__dirname, './src/'),
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
