var express = require('express')

var router = express.Router()

var auth = require('../middlewares/auth')

var controller = require('../controllers/register')

router.post('/register', auth.register, controller.register);

module.exports = router;