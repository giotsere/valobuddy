const User = require('../models/User');
const UserDetail = require('../models/UserDetail');
const genPassword = require('../auth/passwordUtils').genPassword;
const { body, validationResult } = require('express-validator');
const passport = require('passport');

exports.login_post = [
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
  (req, res) => {
    if (!errors.isEmpty()) {
      return res.status(404).json({ error: errors.array() });
    } else {
      passport.authenticate('login', {
        successRedirect: '/browse',
        failureRedirect: '/login',
        failureFlash: true,
      })(req, res);
    }
  },
];

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
      return res.status(404).json({ error: errors.array() });
    }

    const { hash } = genPassword(req.body.password);

    const user = new User({
      username: req.body.username,
      password: hash,
    });

    let userID;

    user.save((err) => {
      if (err) {
        return res.status(404).json({ error: err });
      }

      userID = user._id;
      const userDetail = new UserDetail({
        userID: userID,
      });

      userDetail.save((err) => {
        if (err) {
          return res.status(404).json({ error: err });
        }

        res.status(200).json(userDetail.url);
      });
    });
  },
];
