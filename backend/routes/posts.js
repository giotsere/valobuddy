const express = require('express');
const router = express.Router();
const posts_controller = require('../controllers/posts_controller');

router.get('/', posts_controller.posts_get);

router.get('/:id', posts_controller.post_details);

router.get('/create', posts_controller.post_create_get);
router.post('/create', posts_controller.post_create_post);

router.get('/:id/update', posts_controller.post_update_get);
router.post('/:id/update', posts_controller.post_update_post);

router.get('/:id/delete', posts_controller.post_delete_get);
router.post('/:id/delete', posts_controller.post_delete_post);

module.exports = router;
