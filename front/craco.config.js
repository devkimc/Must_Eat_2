const CracoAlias = require('craco-alias');

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'options',
                baseUrl: './src',
                aliases: {
                    '@root': './',
                    '@assets': './assets',
                    '@components': './components',
                    '@constants': './constants',
                    '@containers': './containers',
                    '@layouts': './layouts',
                    '@pages': './pages',
                    '@recoil': './recoil',
                    '@utils': './utils',
                },
            },
        },
    ],
};
