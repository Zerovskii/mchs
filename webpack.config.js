const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const autoprefixer = require('autoprefixer')
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const TerserPlugin = require("terser-webpack-plugin");

const pages = fs.readdirSync(path.resolve(__dirname, 'src')).filter(name => name.endsWith('.html'))

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  // if (isProd) {
  //   config.minimizer = [
  //     new CssMinimizerPlugin(),
  //     new TerserPlugin()
  //   ]
  // }

  return config
}

const filename = ext => isDev ? `${ext}/[name].${ext}` : `${ext}/[name].[hash].${ext}`;

const babelOptions = preset => {
  const opts = {
    presets: [
      '@babel/preset-env',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
    ]
  }
  if (preset) {
    opts.presets.push(preset)
  }
  return opts
}

const plugins = () => {
  const base = [
    ...pages.map(page => new HtmlWebpackPlugin({
        title: 'СУЭЗ',
        template: page,
        filename: page,
        publicPath: './',
      })
    ),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, './src/img/'),
        to: path.resolve(__dirname, './dist/img/'),
      },{
        from: path.resolve(__dirname, './src/fonts/'),
        to: path.resolve(__dirname, './dist/fonts/'),
      },{
        from: path.resolve(__dirname, './src/ajax/'),
        to: path.resolve(__dirname, './dist/ajax/'),
      },{
        from: path.resolve(__dirname, './src/favicon.ico'),
        to: path.resolve(__dirname, './dist/favicon.ico')
      }]
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ]

  // if (isProd) {
  //   base.push(new BundleAnalyzerPlugin())
  // }

  return base
}

module.exports = {
  context: path.resolve(__dirname, './src'),
  mode: 'development',
  target: 'web',
  entry: {
    main: ['@babel/polyfill', './js/index.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: filename('js')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions(),
          }
        ],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions('@babel/preset-typescript')
          }
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    autoprefixer({
                      overrideBrowserslist:['> 1%', 'not dead', 'last 12 version']
                    })
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    autoprefixer({
                      overrideBrowserslist:['> 1%', 'not dead', 'last 12 version']
                    })
                  ],
                ],
              },
            },
          },
          'sass-loader'
        ],
      },
    ],
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev
  },
  devtool: isDev ? 'source-map' : false,
  plugins: plugins(),
}