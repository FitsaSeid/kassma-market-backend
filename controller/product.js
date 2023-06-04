const product = require('../database/database')
const productModel = require('../model/product')

const getProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.status(200).json(products)
    } catch (error) {
        console.log(error.message)
    }
}

const getSingleProduct = async (req, res) => {
    try {
        const { id: pid } = req.params
        const product = await productModel.findOne({ _id: pid })
        if (!product)
            return res.status(400).send({ message: "Item not found" })
        return res.status(200).send(product)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    getProduct,
    getSingleProduct
}