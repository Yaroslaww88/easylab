var express = require('express')

var router = express.Router()

var auth = require('../middlewares/auth')

var controller = require('../controllers/login')

router.post('/login', auth.login, controller.login);

module.exports = router;