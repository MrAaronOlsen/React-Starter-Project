const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = () => {
  return {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      port: 3000,
      hot: true,
      open: true,
    },
    module: {
      rules: rules(),
    },
    plugins: plugins(),
  }
}

// Rules
//

const rules = () => {
  return [jsx(), scssModule(), scssGlobal(), images()]
}

const jsx = () => {
  return {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  }
}

const scssModule = () => {
  return {
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
      'sass-loader',
    ],
    include: /\.mod\.scss$/,
  }
}

const scssGlobal = () => {
  return {
    test: /\.(css|scss)$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    exclude: /\.mod\.scss$/,
  }
}

const images = () => {
  return {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/assets',
        },
      },
    ],
  }
}

// Plugins
//

const plugins = () => {
  return [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new ReactRefreshWebpackPlugin(),
  ]
}