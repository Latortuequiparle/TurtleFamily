const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.contoller');


//On definit les routes a suivre et quels sont les modules a executer sur celui-ci pour recuperer (get), envoyer (post), modifier (put), supprimer (delete) des donnees
router.post('/register', authController.signUp);


router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;