const mongoose = require('mongoose');

const productModel = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    product_image: {
        type: String,
        required: true
    },
    product_description: {
        type: String,
    },
    product_price: {
        type: Number,
        required: true
    },
    product_rating: {
        type: Number,
        default: 0,
    },
    noOfReview: {
        type: Number,
        default: 0,
    },
    noOfProduct: {
        type: Number,
        default: 0,
    }
});

module.exports = mongoose.model("ProductModel", productModel)