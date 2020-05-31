const path = require('path')
module.exports = {
  entry: './lib/index.tsx',
  output: {
    filename: 'index.js',
    library: 'MaxUI',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist/lib')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}