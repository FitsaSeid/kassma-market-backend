const jwt = require('jsonwebtoken');
require('dotenv').config();

const authorize = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.status(401).send({ message: "Unauthorized user" });

    jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (err, data) => {
        if (err) return res.status(403).send({ message: "Invalid access token" });
        req.user = data.userName;
        req.role = data.role;
        next()
    })

}

module.exports = authorize 