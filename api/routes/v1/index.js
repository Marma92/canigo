var express = require('express');
var router = express.Router();

const userRoute = require('./users');

router.get('/', async (req, res) => {
    res.status(200).json({
        name   : 'API',
        version: '1.0',
        status : 200,
        message: 'Welcome to the API'
    });
});

router.use('/users', userRoute);

module.exports = router;