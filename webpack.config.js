const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: (getPath) => getPath('css/style.css').replace('css/js', 'css')
})

const copyImages = [{
    from: './src/images',
    to: './images'
  },
  {
    from: './src/fonts',
    to: './fonts'
  }
]

const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/bundle.js'
  },
  mode: 'production',
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /node_modules/,
          name: 'vendor',
          filename: 'js/vendor.js',
          chunks: 'initial',
          minSize: 1
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader?url=false&minimize=false'
        }, {
          loader: 'sass-loader'
        }],
        fallback: 'style-loader'
      })
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new CopyWebpackPlugin(copyImages),
    extractSass
  ],
  stats: {
    colors: true
  }
}

// DXSYNC EXIT WORKAROUND.
const readline = require('readline')
readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === ('c')) {
    process.exit()
  }
})

module.exports = config
