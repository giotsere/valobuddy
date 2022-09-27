const Post = require('../models/Post');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');

exports.posts_get = async (req, res) => {
  const posts = await Post.find({});

  res.status(200).json(posts);
};

exports.post_details = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Post does not exist.' });
  }

  const post = await Post.findById(id);

  if (!post) {
    return res.status(404).json({ error: 'Post does not exist.' });
  }

  res.status(200).json(post);
};

exports.post_create = [
  (req, res, next) => {
    if (!Array.isArray(req.body.roles)) {
      req.body.roles =
        typeof req.body.genre === 'undefined' ? [] : [req.body.genre];
    }
    next();
  },

  body('name', 'Name must not be empty').trim().isLength({ min: 1 }).escape(),
  body('rank').escape(),
  body('region').escape(),
  body('roles.*').escape(),
  body('description', 'Description must not be empty.')
    .trim()
    .isLength({ max: 300 })
    .withMessage('must contain a number')
    .escape()
    .withMessage('Description must not be empty'),
  body('lookingFrom').escape(),
  body('lookingTo').escape(),
  body('lookingRegion').escape(),
  body('discord').trim().optional({ checkFalsy: true }).escape(),
  body('riot').trim().optional({ checkFalsy: true }).escape(),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(404).json({ error: errors.array() });
    }

    const post = new Post({ ...req.body });

    post.save((err) => {
      if (err) {
        return res.status(404).json({ error: err });
      }

      res.status(200).json(post);
    });
  },
];

exports.post_delete = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Post does not exist.' });
  }

  const post = await Post.findOneAndDelete({ _id: id });

  if (!post) {
    return res.status(200).json({ error: 'Post does not exist.' });
  }

  res.status(200).json(post);
};

exports.get_post_edit = async (req, res) => {
  const post = Post.findById(req.params.id, function (err, post) {
    if (err) {
      return res.status(404).json({ error: err });
    }
  });

  if (post == null) {
    let err = new Error('Post not found');
    err.status = 404;
    return res.status(404).json({ error: err });
  }

  return res.status(200).json({ 1: 1 });
};

exports.post_edit = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Post does not exist.' });
  }

  const post = await Post.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!post) {
    return res.status(200).json({ error: 'Post does not exist.' });
  }

  res.status(200).json(post);
};
