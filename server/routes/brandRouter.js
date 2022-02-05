const Router =require('express');
const router = new Router();
const brandController= require('../controllers/brandController')
const{create,getOne,getAll}=brandController

router.post('/',create)
router.get('/',getAll)




module.exports = router