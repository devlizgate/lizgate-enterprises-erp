const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const roles = require('../config/roles');

router.get('/', authMiddleware, roleMiddleware(roles.admin), userController.getUsers);

module.exports = router;
