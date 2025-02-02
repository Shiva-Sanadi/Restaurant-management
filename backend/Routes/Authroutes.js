const express = require("express");
const router = express.Router();
// const { Router } = require('express');
const authController = require('../controllers/Authcontroler')
// const router = Router();
const auth = require('../middlewares/authmidlewaresss');

router.post('/register', authController.signup);
router.post('/login', authController.login);
// router.get('/user', auth, authController.get_user);

module.exports = router;