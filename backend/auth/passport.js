const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../models/User');
const validatePassword = require('./passwordUtils').validatePassword;

const verifyCallback = (username, password, done) => {
  User.findOne({ username: username })
    .then((user) => {
      if (!user) {
        return done(null, false, { message: 'Incorrect username or pasword.' });
      }

      const isValid = validatePassword(password, user.password);

      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect username or pasword.' });
      }
    })
    .catch((error) => {
      done(error);
    });
};

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser(function (user, done) {
  process.nextTick(function () {
    done(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function (user, done) {
  process.nextTick(function () {
    return done(null, user);
  });
});
