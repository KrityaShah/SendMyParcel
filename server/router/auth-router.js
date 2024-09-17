const express = require('express');
const router = express.Router();
const authControllers = require('../controller/auth-controller');



router.route('/').get(authControllers.home)


module.exports = router