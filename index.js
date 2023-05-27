
const express = require('express');
const product = require('./routes/product.js')
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/', product)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))