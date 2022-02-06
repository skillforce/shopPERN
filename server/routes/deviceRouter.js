const Router =require('express');
const router = new Router();
const DeviceController=require('../controllers/deviceController')
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");
const{getOne,getAll,create}=DeviceController


router.post('/',checkRoleMiddleware('ADMIN'),create)
router.get('/',getAll)
router.get('/:id',getOne)



module.exports = router