const express = require('express');
const router = express.Router();
const userController = require('../Controllers/User');

router.post('/users', userController.createUser);


module.exports = router;
