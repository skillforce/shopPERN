const Router =require('express');
const router = new Router();
const deviceRouter = require('./deviceRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')


router.use('/auth',userRouter)
router.use('/type',typeRouter)
router.use('/brand',brandRouter)
router.use('/device',deviceRouter)




module.exports = router