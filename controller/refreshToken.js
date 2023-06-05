const jwt = require('jsonwebtoken');
const userModel = require('../model/user');
const { generateAccessToken } = require('./authentication');
require('dotenv').config();

const refreshToken = async (req, res) => {
    const refreshToken = req.body.token;
    if (refreshToken == null) return res.sendStatus(401);

    const user = await userModel.findOne({ token: refreshToken });
    if (!user) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET, (err, { userName, role }) => {
        if (err) return res.sendStatus(403);
        const newToken = generateAccessToken({ userName, role })
        res.status(200).json({ accessToken: newToken })
    })
}

module.exports = refreshToken