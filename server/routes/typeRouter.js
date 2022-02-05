const Router =require('express');
const router = new Router();
const typeController = require('../controllers/typeController')
const{create,getAll}= typeController

router.post('/',create)
router.get('/',getAll)



module.exports = router