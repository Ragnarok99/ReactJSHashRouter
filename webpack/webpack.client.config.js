const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.jsx?$/, //if is js or jsx use babel
        loader: 'babel-loader',
        exclude: /{node_modules}/,
        query: {
          presets: [
            'es2016', 'es2017', 'react'
          ]
        }
      }
    ]
  },
  target: 'web'
};