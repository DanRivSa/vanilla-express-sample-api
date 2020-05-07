//main app router
const {Router} = require('express');
const router = Router();

//controllers
const UserController = require('../controllers/users.controller');

//user routes
const user_ctrl = new UserController(); //user controller init
router.get('/users',user_ctrl.getUsers);
router.get('/users/:id',user_ctrl.getUserById);
router.post('/users/create',user_ctrl.postUser);
router.delete('/users/delete/:id',user_ctrl.deleteUser);
router.put('/users/update/:id',user_ctrl.updateUser);

//other routes

module.exports = router;