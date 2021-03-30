/* eslint-disable global-require */

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  const proxy = require('http-proxy-middleware');
  const apiProxy = proxy('/users', {
    target: 'http://localhost:3200/',// "https://saas-planet-backend-dev.herokuapp.com/", //"https://720095e7.ngrok.io",// "https://saas-planet-backend-dev.herokuapp.com",//
    changeOrigin: true,
    logLevel: 'debug',
    ws: true,
  });
  // const apiProxy1 = proxy('/register', {
  //   target: 'http://localhost:5000/',// "https://saas-planet-backend-dev.herokuapp.com/", //"https://720095e7.ngrok.io",// "https://saas-planet-backend-dev.herokuapp.com",//
  //   changeOrigin: true,
  //   logLevel: 'debug',
  //   ws: true,
  // });
  app.use('/users', apiProxy);
  if (isProd) {
    const addProdMiddlewares = require('./addProdMiddlewares');
    addProdMiddlewares(app, options);
  } else {
    const webpackConfig = require('../../internals/webpack/webpack.dev.babel');
    const addDevMiddlewares = require('./addDevMiddlewares');
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
