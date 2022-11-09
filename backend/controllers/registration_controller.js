const User = require('../models/User');
const UserDetail = require('../models/UserDetail');
const genPassword = require('../auth/passwordUtils').genPassword;
const { body, validationResult } = require('express-validator');
const passport = require('passport');

exports.login_post = async (req, res, next) => {
  passport.authenticate('local', async (err, user) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }

      const userRes = {
        username: user.username,
        userID: user._id,
      };

      res.status(200).json(userRes);
    });
  })(req, res, next);
};

exports.logout_post = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).json({ msg: 'logged out' });
  });
};

exports.signup_post = [
  body('username')
    .trim()
    .isLength({ min: 3 })
    .escape()
    .withMessage('Username required'),
  body('password')
    .trim()
    .isLength({ min: 8 })
    .escape()
    .withMessage('Password required'),
  body('passwordConfirmation').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    }
    return true;
  }),
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const { hash } = genPassword(req.body.password);

    const user = new User({
      username: req.body.username,
      password: hash,
    });

    user.save((err) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      const userDetail = new UserDetail({
        userID: user._id,
        username: user.username,
        discord: '',
        riot: '',
      });

      userDetail.save((err) => {
        if (err) {
          return res.status(400).json({ error: err });
        }

        res.status(200).json({ ok: 'signed up' });
      });
    });
  },
];
