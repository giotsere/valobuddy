const express = require('express');
const router = express.Router();
const posts_controller = require('../controllers/posts_controller');

router.get('/', posts_controller.posts_get);

router.get('/:id', posts_controller.post_details);

router.post('/create', posts_controller.post_create);

router.patch('/:id/update', posts_controller.post_update);

router.post('/:id/delete', posts_controller.post_delete);

module.exports = router;
