const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/entry.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 5001
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], 
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'hijo1',
      filename: 'remoteEntry.js',
      exposes: {
        './Hijo1': './src/App.jsx',
        './Menu': './src/Menu.jsx',
      },
      shared: ['react', 'react-dom/client', 'react-router-dom'],
    }),
  ],
};