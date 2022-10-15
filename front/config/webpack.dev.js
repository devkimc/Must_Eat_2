const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const dotenv = require('dotenv');
const path = require('path');
const webpack = require('webpack');

module.exports = () => {
    dotenv.config({
        path: path.resolve(__dirname, '../.env.local'),
    });

    return merge(common, {
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            open: false,
            hot: true,
            compress: true,
            port: 3000,
            historyApiFallback: true,
            liveReload: true,
            proxy: {
                '/api': { target: process.env.REACT_APP_API_URL_DEV },
            },
        },

        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/i,
                    use: ['style-loader', 'css-loader'], // 필요에 따라 sass-loader 추가
                },
            ],
        },

        plugins: [
            new webpack.DefinePlugin({
                'process.env.REACT_APP_API_URL_DEV': JSON.stringify(
                    process.env.REACT_APP_API_URL_DEV,
                ),
                'process.env.REACT_APP_API_KEY_KAKAO_MAP': JSON.stringify(
                    process.env.REACT_APP_API_KEY_KAKAO_MAP,
                ),
            }),

            new webpack.EnvironmentPlugin([
                'REACT_APP_API_URL_DEV',
                'REACT_APP_API_KEY_KAKAO_MAP',
            ]),
        ],
    });
};
