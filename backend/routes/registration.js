const express = require('express');
const router = express.Router();
const registration_controller = require('../controllers/registration_controller');
const authController = require('../auth/authMiddleware');
const passport = require('passport');

router.post(
  '/login',
  passport.authenticate('local'),
  registration_controller.login_post
);

router.post('/signup', registration_controller.signup_post);

router.post(
  '/logout',
  authController.isAuth,
  registration_controller.logout_post
);

module.exports = router;
