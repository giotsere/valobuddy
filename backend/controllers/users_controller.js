const UserDetail = require('../models/UserDetail');
const Post = require('../models/Post');
const mongoose = require('mongoose');

exports.user_details = async (req, res) => {
  const user = await UserDetail.findOne({ username: req.params.id });

  if (!user) {
    return res.status(400).json({ error: 'User does not exist' });
  }

  const post = await Post.findOne({ userID: user.userID.toString() });

  res.status(200).json([user, post]);
};

exports.user_delete = function (req, res) {
  res.send('NOT IMPLEMENTED');
};
exports.user_update = function (req, res) {
  res.send('NOT IMPLEMENTED');
};
