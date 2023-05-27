const product = require('../database/database')

const getProduct = async (req, res) => {
    res.status(200).send({ data: product })
}

const getSingleProduct = async (req, res) => {
    const singleProduct = product.find(item => item.id == req.params.id)

    if (singleProduct)
        res.status(200).send({ data: singleProduct })
    else
        res.status(404).send({ message: 'Product you are looking for does not exist' })
}

module.exports = {
    getProduct,
    getSingleProduct
}