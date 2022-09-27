const express = require('express');
const router = express.Router();
const posts_controller = require('../controllers/posts_controller');

router.get('/', posts_controller.posts_get);

router.get('/:id', posts_controller.post_details);

router.post('/create', posts_controller.post_create);

router.get('/:id/edit', posts_controller.get_post_edit);
router.post('/:id/edit', posts_controller.post_edit);

router.get('/:id/delete', posts_controller.post_delete);
router.post('/:id/delete', posts_controller.post_delete);

module.exports = router;
