const path = require('path');

module.exports = {
  target: 'node',
  devtool: '#source-map',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        use: [{
          loader: 'ts-loader',
          options: {
            silent: true,
          }
        }]
      }
    ]
  }
}
