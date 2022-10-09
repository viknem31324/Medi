const path = require('path');
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      jquery: 'jquery',
      'window.jquery': 'jquery',
      $: 'jquery',
      'window.$': 'jquery',
    }),
  ],

  entry: {
    main: './src/ts/index.ts',
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
  },

  devtool: 'inline-source-map',

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },

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
      '%modules%': path.resolve(__dirname, 'src/blocks/modules'),
      '%components%': path.resolve(__dirname, 'src/blocks/components'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
