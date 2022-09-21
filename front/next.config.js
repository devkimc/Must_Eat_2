module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_URL_DEV}/:path*`,
            },
        ];
    },
};
