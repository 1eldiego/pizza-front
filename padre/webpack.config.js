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
    port: 5000
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
      name: 'padre',
      filename: 'remoteEntry.js',
      remotes: {
        hijo1: 'hijo1@http://localhost:5001/remoteEntry.js',
        hijo2: 'hijo2@http://localhost:5002/remoteEntry.js',
      },
      shared: ['react', 'react-dom/client', 'react-router-dom'],
    }),
  ],
};