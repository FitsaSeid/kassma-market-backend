const jwt = require('jsonwebtoken');
const userModel = require('../model/user');
const bcrypt = require('bcrypt');
require('dotenv').config();

const login = async (req, res) => {
    const { userName, password } = req.body;
    console.log(req.body)
    if (!userName || !password)
        return res.status(400).json({ message: "UserName and password must be provided" });
    try {
        const userExist = await userModel.findOne({ userName })
        if (!userExist)
            return res.status(401).send({ message: "User not found" })
        const isPassMatch = await bcrypt.compare(password, userExist.password);

        if (isPassMatch) {
            const data = { userName: userName, role: userExist.role }

            const refreshToken = jwt.sign(
                { userName: userName, role: userExist.role },
                process.env.JWT_REFRESH_TOKEN_SECRET,
                { expiresIn: "1hr" }
            )
            const accessToken = generateAccessToken(data);

            await userModel.updateMany({ _id: userExist._id }, { token: refreshToken });
            res.status(200).json({ accessToken: accessToken, refreshToken: refreshToken })
        }

        else
            res.status(404).send({ message: "user not found" })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const generateAccessToken = (data) => {
    return jwt.sign(
        data,
        process.env.JWT_ACCESS_TOKEN_SECRET,
        { expiresIn: "30m" })
}

module.exports = {
    login,
    generateAccessToken
}