const express = require('express');
const product = require('./routes/product.js')
const cors = require('cors');
require('dotenv').config();

const connectDatabase = require('./database/database.js');
const seeder = require('./database/seeder.js');
const authorize = require('./controller/authorization.js');
const auth = require('./routes/auth.js');
const cookieParser = require('cookie-parser');


const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', seeder)
app.use('/api/v1/', authorize, product)
app.use('/', auth)

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
