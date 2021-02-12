const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.contoller');


//On definit les routes a suivre et quels sont les modules a executer sur celui-ci pour recuperer (get) ou envoyer (post) des donnees
router.post('/register', authController.signUp);


router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);

router.put('/:id', userController.updateUser);

module.exports = router;