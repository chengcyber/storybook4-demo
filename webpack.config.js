const webpack = require('webpack')
const path = require('path')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin

// pre-assumption
const DEV_MODE = process.env.NODE_ENV !== 'production'

const babelConfig = require('./bableCommonConfig')

const config = {

  mode: 'development',

  entry: {
    blitz: [
      path.resolve(__dirname, 'src/components/index.ts'),
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    library: 'blitz',
    libraryTarget: 'umd',
  },

  // treat those pkg as peerDependency
  externals: externalize({
    'classnames': 'classNames',
    'react': 'React',
    'react-dom': 'ReactDom',
  }),

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
    plugins: [
      new TsConfigPathsPlugin(/* { tsconfig, compiler } */),
    ],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: [
          {
            loader: 'babel-loader',
            options: babelConfig,
          },
          'awesome-typescript-loader',
        ]
      }
    ],
  },

  plugins: [

  ],
}

module.exports = config

function externalize(exObj) {
  const result = {}

  for (const [pkgName, pkgRoot] of Object.entries(exObj)) {
    result[pkgName] = {
      commonjs: pkgName,
      commonjs2: pkgName,
      amd: pkgName,
      root: pkgRoot,
    }
  }

  return result
}
