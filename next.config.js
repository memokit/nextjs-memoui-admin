// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const TerserPlugin = require('terser-webpack-plugin');
// const withPlugins = require("next-compose-plugins");
const withOffline = require('next-offline')
const withImages = require("next-images");
const withCss = require('@zeit/next-css')
const withSass = require("@zeit/next-sass");
// const webpack = require("webpack");
const path = require("path");



const isDev = process.env.NODE_ENV !== 'production';

if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => { }
}

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => { }
}


const srcFolder = [
  path.resolve('src')
]

const srcExcludeFolder = [
  path.resolve('src/pages-sections'),
  path.resolve('src/components')
]


const nextConfig = {
  distDir: 'build',

  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
      // config.module.rules.push({
      //     test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      //     use: {
      //         loader: 'url-loader',
      //         options: {
      //             limit: 100000,
      //             name: '[name].[ext]'
      //         }
      //     }
      // })

      config.resolve.modules.push(path.resolve("./src"));

      // if (!dev) {
      //     config.plugins.push(
      //         ...[
      //             new BundleAnalyzerPlugin({
      //                 analyzerMode: 'disabled',
      //                 generateStatsFile: true,
      //                 statsFilename: 'stats.json'
      //             }),

      //             new TerserPlugin({
      //                 cache: true,
      //                 terserOptions: {
      //                     ecma: 6,
      //                     warnings: false,
      //                     extractComments: false, // remove comment
      //                     compress: {
      //                         drop_console: true // remove console
      //                     },
      //                     ie8: false
      //                 }
      //             }),
      //         ]);
      //     config.module.rules.push({
      //         test: /\.js$/,
      //         include: srcFolder,
      //         options: {
      //             workerParallelJobs: 50,
      //             // additional node.js arguments
      //             workerNodeArgs: ['--max-old-space-size=1024'],
      //         },
      //         loader: 'thread-loader'
      //     });
      //     config.devtool = 'source-map';
      // } else {
          config.module.rules.push({
              test: /\.js$/,
              enforce: 'pre',
              include: srcFolder,
              exclude: srcExcludeFolder,
              options: {
                  configFile: path.resolve('.eslintrc'),
                  eslint: {
                      configFile: path.resolve(__dirname, '.eslintrc')
                  }
              },
              loader: 'eslint-loader'
          });
          config.devtool = 'cheap-module-inline-source-map';
      // }

      

      return config;
  },

  serverRuntimeConfig: { // Will only be available on the server side
      rootDir: path.join(__dirname, './'),
      PORT: isDev ? 3006 : (process.env.PORT || 5999)
  },
  publicRuntimeConfig: { // Will be available on both server and client
      staticFolder: '/public',
      isDev, // Pass through env variables
      host: 'https://demo.memokit.me'
  },
  env: {
      SERVER_HOST: 'https://demo.memokit.me'
  }
}


module.exports = withOffline(withImages(withSass(withCss(nextConfig))));




