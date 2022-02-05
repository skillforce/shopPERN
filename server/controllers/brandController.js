const {Brand, Type}=require('../models/models')

class BrandController{

    async create(req,res){
        const {name} = req.body
        const newBrand = await Brand.create({name})
        return res.json(newBrand)

    }

    async getAll(req,res){
        const brands = await Brand.findAll()
        return res.json(brands)
    }

}

module.exports= new BrandController()