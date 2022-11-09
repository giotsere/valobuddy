module.exports.isAuth = (req, res, next) => {
  console.log(req.user);
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized Access' });
  }
};
