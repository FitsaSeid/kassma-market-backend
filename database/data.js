const bcrypt = require('bcrypt');

const product = [
    {
        product_name: "YSSOA Racing Video Backrest and Seat Height Recliner",
        product_image: "https://i.postimg.cc/tRsK8PLj/headphone2.png",
        product_description: "This is the description of this product",
        product_price: 12900,
        itemsInStock: 10,
        product_rating: 4.5,
        noOfReview: 10,
    },
    {
        product_name: "YSSOA Racing Video Backrest and Seat Height Recliner",
        product_image: "https://i.postimg.cc/WbJ5wwxd/chair.png",
        product_description: "This is the description of this product",
        product_price: 12900,
        itemsInStock: 10,
        product_rating: 4.5,
        noOfReview: 46,
    },
    {
        product_name: "YSSOA Racing Video Backrest and Seat Height Recliner",
        product_image: "https://i.postimg.cc/CKwJYT58/headphone.png",
        product_description: "This is the description of this product",
        product_price: 12900,
        itemsInStock: 10,
        product_rating: 4,
        noOfReview: 7,
    },
    {
        product_name: "YSSOA Racing Video Backrest and Seat Height Recliner",
        product_image: "https://i.postimg.cc/0ysh64rk/key3.png.png",
        product_price: 12900,
        itemsInStock: 10,
        product_rating: 2.5,
        noOfReview: 10,
    },
    {
        product_name: "YSSOA Racing Video Backrest and Seat Height Recliner",
        product_image: "https://i.postimg.cc/W1wC07JM/keyboard.png",
        product_description: "This is the description of this product",
        product_price: 12900,
        itemsInStock: 10,
        product_rating: 1,
        noOfReview: 23,
    },
    {
        product_name: "YSSOA Racing Video Backrest and Seat Height Recliner",
        product_image: "https://i.postimg.cc/3N0F93Ss/keyboard2.png",
        product_price: 12900,
        product_description: "This is the description of this product",
        product_rating: 0,
        itemsInStock: 10,
        noOfReview: 1,
    },
    {
        product_name: "YSSOA Racing Video Backrest and Seat Height Recliner",
        product_image: "https://i.postimg.cc/mD5SQPw3/mouse.png.png",
        product_price: 12900,
        product_description: "This is the description of this product",
        product_rating: 3.5,
        itemsInStock: 10,
        noOfReview: 56
    },
    {
        product_name: "YSSOA Racing Video Backrest and Seat Height Recliner",
        product_image: "https://i.postimg.cc/CKwJYT58/headphone.png",
        product_price: 12900,
        product_rating: 3,
        itemsInStock: 10,
        product_description: "This is the description of this product",
        noOfReview: 234,
    }
]

const user = [
    {
        userName: "Fitsum",
        password: bcrypt.hashSync("1234", 10),
        role: "seller"
    },
    {
        userName: "chaltu",
        password: bcrypt.hashSync("1234", 10),
        role: "buyer"
    }
]
module.exports = { product, user }