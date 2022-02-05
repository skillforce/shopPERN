const {Device, DeviceInfo} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files;
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const newDevice = await Device.create({
                name,
                price,
                brandId,
                typeId,
                img: fileName
            })

            if (info) {
                info = JSON.parse(info)
                info.forEach(t => {
                    DeviceInfo.create({
                        title: t.title,
                        description: t.description,
                        deviceId: newDevice.id
                    })
                })
            }
            return res.json(newDevice)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const device = await Device.findOne(
                {
                    where: {id},
                    include: [{
                        model: DeviceInfo, as: 'info'
                    }]
                })
            return res.json(device)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset})
        }
        return res.json(devices);


    }

}

module.exports = new DeviceController()