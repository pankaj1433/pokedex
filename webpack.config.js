var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.(scss|sass)$/i, use: 'sass-loader' },
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
        ]
    }
}