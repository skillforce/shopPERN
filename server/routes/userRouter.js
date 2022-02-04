const Router =require('express');
const router = new Router();
const userController = require('../controllers/userController');
const {login,check,registration}=userController;

router.post('/registration',registration)
router.post('/login',login)
router.get('/auth',check)



module.exports = router