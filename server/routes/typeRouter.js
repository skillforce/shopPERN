const Router =require('express');
const router = new Router();
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')
const typeController = require('../controllers/typeController')
const{create,getAll}= typeController

router.post('/',checkRoleMiddleware('ADMIN'),create)
router.get('/',getAll)



module.exports = router