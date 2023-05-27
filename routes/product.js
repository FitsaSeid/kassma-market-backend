const router = require('express').Router();
const { getProduct, getSingleProduct } = require('../controller/product.js');

router.get('/', getProduct);
router.get('/product/:id', getSingleProduct);

module.exports = router;