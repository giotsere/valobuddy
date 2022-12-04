const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts_controller');
const authController = require('../auth/authMiddleware');

router.post('/', postsController.posts_get);

router.post('/create', authController.isAuth, postsController.post_create);

router.get('/:id', postsController.post_details);

router.post('/:id/edit', authController.isAuth, postsController.post_edit);

router.get('/:id/delete', postsController.post_details);
router.post('/:id/delete', authController.isAuth, postsController.post_delete);

//moved filtering to posts_get
// router.post('/filtered', postsController.post_filtered);

module.exports = router;
