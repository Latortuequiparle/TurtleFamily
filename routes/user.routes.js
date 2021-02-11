const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.contoller');



router.post('/register', authController.signUp);

router.get('/', userController.getAllUsers);

module.exports = router;