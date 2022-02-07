const Router =require('express');
const router = new Router();
const DeviceController=require('../controllers/deviceController')
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const{getOne,getAll,create}=DeviceController


router.post('/',checkRoleMiddleware('ADMIN'),create)
router.get('/',authMiddleware,getAll)
router.get('/:id',getOne)



module.exports = router