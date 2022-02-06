const Router =require('express');
const router = new Router();
const brandController= require('../controllers/brandController')
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");
const{create,getOne,getAll}=brandController

router.post('/',checkRoleMiddleware('ADMIN'),create)
router.get('/',getAll)




module.exports = router