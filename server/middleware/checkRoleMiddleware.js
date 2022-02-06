const jwt = require('jsonwebtoken')


module.exports = function (role) {
    return (req, res, next) => {

        if (req.method === "OPTIONS") {
            return next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]//Bearer
            if (!token) {
                return res.status(401).json({message: 'User is not authorized'})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if(decoded.role !== role){
                res.status(403).json({message:'Forbidden action'})
            }
            next()
        } catch (err) {
            return res.status(401).json({message: 'User is not authorized'})
        }

    }
}