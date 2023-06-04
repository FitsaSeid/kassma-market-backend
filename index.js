const express = require('express');
const product = require('./routes/product.js')
const cors = require('cors');
require('dotenv').config();

const connectDatabase = require('./database/database.js');
const seeder = require('./database/seeder.js');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }))

app.use('/', seeder)
app.use('/api/v1/', product)

const start = async () => {
    try {
        const connect = await connectDatabase(process.env.CONNECTION_STRING);
        app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`))
        console.log("DB connected " + connect.connection.host)
    } catch (error) {
        console.log(error.message)
    }
}

start();
