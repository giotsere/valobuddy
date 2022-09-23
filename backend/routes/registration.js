const express = require('express');
const router = express.Router();
const registration_controller = require('../controllers/registration_controller');

router.get('/signup', registration_controller.signup_get);
router.post('/signup', registration_controller.signup_post);

router.get('/login', registration_controller.login_get);
router.post('/login', registration_controller.login_post);

module.exports = router;
