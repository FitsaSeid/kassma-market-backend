const { login } = require('../controller/authentication');
const refreshToken = require('../controller/refreshToken');

const router = require('express').Router();

router.post('/login', login)
router.get('/refresh', refreshToken)

module.exports = router