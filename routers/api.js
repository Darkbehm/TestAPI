const router = require('express').Router();

const apiSalesRouter = require('./api/Sales');
const apiProductsRouter = require('./api/Products');
const apiBrandsRouter = require('./api/Brands');


router.use('/sales', apiSalesRouter);
router.use('/products', apiProductsRouter);
router.use('/brands', apiBrandsRouter);

module.exports = router;