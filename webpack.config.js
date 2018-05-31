var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

config = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.(png|jpg|gif)$/, loader  : 'url-loader' },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    mode: 'production'
}


;[
    ['woff', 'application/font-woff'],
    ['woff2', 'application/font-woff2'],
    ['ttf', 'application/octet-stream'],
    ['svg', 'image/svg+xml'],
].forEach((font) => {
    const extension = font[0];
    const mimetype = font[1];
    config.module.rules.push({
        test    : new RegExp(`\\.${extension}$`),
        loader  : 'url-loader',
        options : {
            name  : 'fonts/[name].[ext]',
            limit : 10000,
            mimetype,
        },
    });
});

module.exports = config