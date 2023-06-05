const { product, user } = require('./data');
const seeder = require('express').Router();
const ProductModel = require('../model/product');
const userModel = require('../model/user');

seeder.get("/", async (req, res) => {
    await ProductModel.deleteMany();
    await userModel.deleteMany();
    const createdUser = await userModel.insertMany(user);
    const createdProducts = await ProductModel.insertMany(product);
    // const createdUsers = await User.insertMany(data.users);
    res.send({ createdProducts, createdUser });
    console.log(product)
});

module.exports = seeder;
