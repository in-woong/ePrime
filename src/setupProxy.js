const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/record', {
      target: 'http://e-prime.ap-northeast-2.elasticbeanstalk.com',
      changeOrigin: true,
    }),
    createProxyMiddleware('/cms', {
      target: 'http://e-prime.ap-northeast-2.elasticbeanstalk.com',
      changeOrigin: true,
    }),
    createProxyMiddleware('/news', {
      target: 'http://e-prime.ap-northeast-2.elasticbeanstalk.com',
      changeOrigin: true,
    })
  );
};
