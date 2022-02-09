const Router =require('express');
const router = new Router();
const authMiddleware = require('../middleware/authMiddleware')
const userController = require('../controllers/userController');
const {login,check,registration}=userController;

router.post('/registration',registration)
router.post('/login',login)
router.get('/check',authMiddleware,check)



module.exports = router