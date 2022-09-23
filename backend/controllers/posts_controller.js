const Post = require('../models/Post');
const mongoose = require('mongoose');

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

  if (!workout) {
    return res.status(404).json({ error: 'Post does not exist.' });
  }

  res.status(200).json(post);
};

exports.post_create = async (req, res) => {
  const {
    name,
    rank,
    region,
    microphone,
    description,
    lookingFrom,
    lookingTo,
    lookingRegion,
    discord,
    riot,
  } = req.body;

  try {
    const post = await Post.create({
      name,
      rank,
      region,
      microphone,
      description,
      lookingFrom,
      lookingTo,
      lookingRegion,
      discord,
      riot,
    });
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

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

exports.post_update = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Post does not exist.' });
  }

  const post = await POst.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!post) {
    return res.status(200).json({ error: 'Post does not exist.' });
  }

  res.status(200).json(post);
};
