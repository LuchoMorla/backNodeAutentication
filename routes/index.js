const productosRouting = require('./productosRouting');
const categoriasRouting = require('./categoriasRouting');
const usersRuta = require('./usersRouting');

const express = require('express');
const router = require('./productosRouting');

function routerApi(app) {
    app.use('/products', productosRouting);
    app.use('/category', categoriasRouting);
    app.use('/users', usersRuta);

    const routerV1 = express.Router();
    app.use('/api/v1', routerV1);
    routerV1.use('/products/', productosRouting);
    routerV1.use('/category', categoriasRouting);
    routerV1.use('/users', usersRuta);
}

/* Podemos manejar varias versiones en produccion de la siguiente manera:

const routerAPI = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', users);
  router.use('/categories', categories);

  const routerV2 = express.Router();
  app.use('/api/v2', routerV2);
  routerV2.use('/other', otherRouter);
};
*/

module.exports = routerApi;
