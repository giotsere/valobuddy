const express = require('express');
const router = express.Router();
const users_controller = require('../controllers/users_controller');

router.get('/:id', users_controller.user_details);

router.post('/:id/update', users_controller.user_update);

router.post('/:id/delete', users_controller.user_delete);

module.exports = router;
