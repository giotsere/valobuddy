const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserDetailSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  postID: { type: Schema.Types.ObjectId, ref: 'Post', required: false },
  avatar: { type: String, data: Buffer, required: false },
  discord: { type: String, required: false },
  riot: { type: String, required: false },
});

UserSchema.virtual('url').get(function () {
  return 'users/' + this._id;
});

module.exports = mongoose.model('UserDetail', UserDetailSchema);
