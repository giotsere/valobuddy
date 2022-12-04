const Post = require('../models/Post');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const { ranks, regions } = require('../utils/filterVars');

exports.posts_get = async (req, res) => {
  let originalValues = [
    { name: 'ranks', value: ranks },
    { name: 'regions', value: regions },
  ];

  let fieldValues = [];

  //if one of the fields are empty, replace it with the default values for that field,then perform the filtering

  let query = {};

  const page = req.body.page || 1;
  const ITEMS_PER_PAGE = 8;

  if (req.body.filterState) {
    fieldValues = [
      { name: 'ranks', value: req.body.filterState.ranks },
      { name: 'regions', value: req.body.filterState.regions },
    ];

    fieldValues.forEach((field, index) => {
      if (field.value == '') {
        fieldValues[index].value = originalValues[index].value;
      }
    });

    query = {
      $and: [
        { rank: { $in: fieldValues[0].value } },
        { region: { $in: fieldValues[1].value } },
      ],
    };
  }

  try {
    const skip = (page - 1) * ITEMS_PER_PAGE;
    const count = await Post.countDocuments(query);
    const posts = await Post.find(query).limit(ITEMS_PER_PAGE).skip(skip);

    const pageCount = Math.ceil(count / ITEMS_PER_PAGE);
    res.status(200).json({ pagination: { count, pageCount }, posts });
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

exports.post_details = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Post does not exist.' });
  }

  const post = await Post.findById(id);

  if (!post) {
    return res.status(400).json({ error: 'Post does not exist.' });
  }

  res.status(200).json(post);
};

exports.post_create = [
  (req, res, next) => {
    if (!Array.isArray(req.body.roles)) {
      req.body.roles =
        typeof req.body.roles === 'undefined' ? [] : [req.body.roles];
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
      return res.status(400).json({ error: errors.array() });
    }

    if (!req.user) {
      return res
        .status(401)
        .json({ error: 'Need to be Signed in to create post' });
    }

    const post = new Post({
      name: req.body.name,
      userID: req.user.id,
      rank: req.body.rank,
      region: req.body.region,
      microphone: req.body.microphone,
      roles: req.body.roles,
      description: req.body.description,
      lookingFrom: req.body.lookingFrom,
      lookingTo: req.body.lookingTo,
      lookingRegion: req.body.lookingRegion,
      riot: req.body.riot,
      discord: req.body.discord,
    });

    post.save((err) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      res.status(200).json(post);
    });
  },
];

exports.post_delete = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Post does not exist.' });
  }

  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized to delete this post' });
  } else {
    Post.findById(id).then((post) => {
      if (post.userID != req.user.id) {
        return res
          .status(401)
          .json({ error: 'Unauthorized to delete this post' });
      }
    });
  }

  const post = await Post.findOneAndDelete({ _id: id });

  if (!post) {
    return res.status(200).json({ error: 'Post does not exist.' });
  }

  res.status(200).json(post);
};

exports.post_edit = [
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

  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const { id } = req.params;

    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized to edit this post' });
    } else {
      Post.findById(id).then((post) => {
        if (post.userID != req.user.id) {
          return res
            .status(401)
            .json({ error: 'Unauthorized to edit this post' });
        }
      });
    }

    const post = new Post({ ...req.body, _id: id });

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Post does not exist.' });
    }

    Post.findByIdAndUpdate(id, post, {}, (err, postRes) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      res.status(200).json(postRes);
    });
  },
];
