const express = require('express');
const router = express.Router();
const users_controller = require('../controllers/users_controller');

router.get('/', users_controller.users_get);

router.get('/:id', users_controller.user_details);

// router.get('/create', users_controller.user_create_get);
// router.post('/create', users_controller.user_create_post);

router.get('/:id/update', users_controller.user_update_get);
router.post('/:id/update', users_controller.user_update_post);

router.get('/:id/delete', users_controller.user_delete_get);
router.post('/:id/delete', users_controller.user_delete_post);

module.exports = router;
