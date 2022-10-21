const express = require('express');
const router = express.Router();
const users_controller = require('../controllers/users_controller');
const authController = require('../auth/authMiddleware');

router.get('/:id', users_controller.user_details);

router.post('/:id/update', authController.isAuth, users_controller.user_update);

router.post('/:id/delete', authController.isAuth, users_controller.user_delete);

module.exports = router;
