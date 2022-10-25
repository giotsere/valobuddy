const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserDetailSchema = new Schema({
  userID: { type: String, required: true },
  username: { type: String, required: true },
  avatar: { type: String, data: Buffer, required: false },
  discord: { type: String, required: false },
  riot: { type: String, required: false },
});

module.exports = mongoose.model('UserDetail', UserDetailSchema);
