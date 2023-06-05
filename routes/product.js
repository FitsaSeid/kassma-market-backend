const router = require('express').Router();
const { login } = require('../controller/authentication.js');
const { getProduct, getSingleProduct } = require('../controller/product.js');

router.get('/products', getProduct);
router.get('/product/:id', getSingleProduct);

module.exports = router;

