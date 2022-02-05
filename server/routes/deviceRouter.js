const Router =require('express');
const router = new Router();
const DeviceController=require('../controllers/deviceController')
const{getOne,getAll,create}=DeviceController


router.post('/',create)
router.get('/',getAll)
router.get('/:id',getOne)



module.exports = router