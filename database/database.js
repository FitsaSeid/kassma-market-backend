const mongoose = require('mongoose');

const connectDatabase = (url) => {
    return mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
}


module.exports = connectDatabase