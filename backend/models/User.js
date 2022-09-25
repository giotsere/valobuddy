const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.virtual('url').get(function () {
  return '/users/' + this._id;
});

module.exports = mongoose.model('User', pserSchema);
