const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        default: "buyer"
    },
    token: {
        type: String,
    }
})

module.exports = mongoose.model("userModel", userSchema);
