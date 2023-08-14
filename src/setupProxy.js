const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/record', {
      target: 'http://e-prime.ap-northeast-2.elasticbeanstalk.com',
      changeOrigin: true,
    })
  );
};
