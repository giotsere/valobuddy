const bcrypt = require('bcryptjs');

function genPassword(password) {
  let salt = bcrypt.genSaltSync(15);
  let hash = bcrypt.hashSync(password, salt);

  return { hash };
}

function validatePassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}

module.exports.genPassword = genPassword;
module.exports.validatePassword = validatePassword;
