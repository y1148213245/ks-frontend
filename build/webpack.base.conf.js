'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
var baseConfig = require('../src/config');
utils.createVueComponentsMap();

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/projects/' + baseConfig.concurrentProject + "/main/index.js",
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  externals: {
    // 不打包这些js
    vue: 'Vue',
    'element-ui': 'ELEMENT',
    jquery: 'jQuery',
    moment: 'moment',
    showdown: 'showdown',
    swiper: 'swiper'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@common': resolve("src/components/common"),
      '@config': resolve("src/config"),
      '@work': resolve("src/components/work"),
      'projectConfig': "@common/config.js",//resolve('src/projects/' + baseConfig.concurrentProject + "/config/index.js"),
      '@project': resolve('src/projects/' + baseConfig.concurrentProject),
      '@components': resolve("src/components")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        // loader: 'vue-loader',
        loader: path.resolve(__dirname, './vue-loader/index.js'), //'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')],
        exclude: /node_modules\/(?!(dom7|swiper)\/).*/
      },
      {
        test: /\.css$/,
        include: [
          /src/,//表示在src目录下的css需要编译
          '/node_modules/element-ui/lib/'   //增加此项
        ],
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};
