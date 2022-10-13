const express = require('express');
const router = express.Router();
const registration_controller = require('../controllers/registration_controller');

router.post('/login', registration_controller.login_post);

router.post('/signup', registration_controller.signup_post);

module.exports = router;
