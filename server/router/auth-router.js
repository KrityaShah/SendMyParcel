const express = require('express');
const router = express.Router();


router.route('/').get((req, res) => {
    res
    .status(200)
    .send("Welcome to the home using router");
})


module.exports = router