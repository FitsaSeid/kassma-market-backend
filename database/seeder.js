const product = require('./data');
const seeder = require('express').Router();
const ProductModel = require('../model/product')

seeder.get("/", async (req, res) => {
    // await productModel.remove({});
    const createdProducts = await ProductModel.insertMany(product);
    // const createdUsers = await User.insertMany(data.users);
    res.send({ createdProducts });
    console.log(product)
});

module.exports = seeder;
