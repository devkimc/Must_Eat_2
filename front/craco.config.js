const CracoAlias = require('craco-alias');

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'options',
                baseUrl: './src',
                aliases: {
                    root: './',
                    lib: './lib',
                    assets: './assets',
                    components: './components',
                    constants: './constants',
                    containers: './containers',
                    layouts: './layouts',
                    pages: './pages',
                    atom: './atom',
                    utils: './utils',
                },
            },
        },
    ],
};
