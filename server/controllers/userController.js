const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')
const {where} = require("sequelize");


const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'})
}


class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('email and password are required field'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('User with such email is already exist'))
        }

        const hashPass = await bcrypt.hash(password, 5);

        const newUser = await User.create({email, password: hashPass, role})

        const basket = await Basket.create({userId: newUser.id})

        const token = generateJwt(newUser.id, newUser.email, newUser.role)
        return res.json({token})
    }


    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('User with such email/password is not exist'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.forbidden('Incorrect Email/password'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})

    }


    async check(req, res, next) {
        const token = generateJwt(req.user.id,req.user.email,req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()