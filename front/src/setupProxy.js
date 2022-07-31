const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    if (process.env.NODE_ENV === 'production') return;

    app.use(
        createProxyMiddleware('/api', {
            target: process.env.REACT_APP_API_URL_DEV,
            changeOrigin: true,
            secure: false,
        }),
    );
};
