const express = require('express');
const router = express.Router();
const mainController = require('../controller/controller')

router.post(`/register`, mainController.register);
router.get(`/userRegister`, mainController.userRegister);

module.exports = router;