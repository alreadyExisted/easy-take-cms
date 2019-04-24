const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
import * as HappyPack from 'happypack'
import * as path from 'path'
import * as Uglify from 'uglifyjs-webpack-plugin'
import * as webpack from 'webpack'
import * as WebpackBar from 'webpackbar'
import { babelLoader, baseConfig } from './base.config'
import { ResourcesPlugin } from './resource-plugin'
import { isDev, rootDir, staticPath } from './tools'

const externalConfig: webpack.Configuration & { devServer: any } = {
  ...baseConfig,

  entry: {
    app: ['core-js', './src/client']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: !isDev
          ? 'happypack/loader?id=tsx'
          : [
              babelLoader,
              {
                loader: 'ts-loader',
                options: {
                  transpileOnly: true,
                  experimentalWatchApi: true
                }
              }
            ]
      }
    ]
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, '../src/tsconfig.json'),
      checkSyntacticErrors: true
    }),

    new ResourcesPlugin({
      from: 'locales/locales.json',
      to: 'locales',
      extension: 'json'
    }),

    ...(isDev
      ? [new webpack.HotModuleReplacementPlugin(), new WebpackBar()]
      : [
          new HappyPack({
            id: 'tsx',
            loaders: [
              babelLoader,
              {
                loader: 'ts-loader',
                options: {
                  happyPackMode: true
                }
              }
            ]
          }),
          new webpack.optimize.OccurrenceOrderPlugin(false)
        ])
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },

    minimize: !isDev,
    minimizer: [
      new Uglify({
        parallel: true,
        uglifyOptions: {
          output: {
            comments: /license|@preserve|@license|@cc_on/gi
          }
        }
      })
    ]
  },

  performance: {
    hints: false
  },

  stats: {
    modules: false,
    children: false
  },

  // CSS file mapping not allowed
  // To allow file mapping for CSS use 'source-map'
  devtool: (isDev && 'cheap-module-eval-source-map') || undefined,

  devServer: {
    hot: true,
    inline: true,
    contentBase: [staticPath, path.join(rootDir, './views')],
    port: 5003,
    historyApiFallback: {
      index: 'debug.html'
    },
    publicPath: '/'
  }
}

// tslint:disable-next-line:no-default-export
export default externalConfig
