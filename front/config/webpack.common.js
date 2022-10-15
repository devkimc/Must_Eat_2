const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
        new webpack.ProvidePlugin({
            React: 'react',
        }),
    ],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src/'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.json'],
    },

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
};
