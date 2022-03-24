const {travel} = require('../config/prismaClient');

module.exports.getAllTravels = async (req, res)=>{
    try {
        const travels = await travel.findMany()
        res.status(200).json({
            message: "success",
            travels:travels.reverse()
        })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports.getOne = async (req, res)=>{
    try {
        const travels = await travel.findFirst({
            where: {
                id:parseInt(req.params.id)
            }
        })
        res.status(200).json({
            message: "success",
            travels
        })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports.create = async (req, res) =>{
    try {
        const { title, image, description } = req.body
            const travelPost = await travel.create({
                data: {
                    title,
                    image,
                    description,
                    active: true
                }
            })
            res.status(201).json({
                message: "success",    
                travelPost
            })
    }
    catch (error) {
        res.status(409).json({error})
    }
} 

module.exports.update = async (req, res) =>{
    try {
        const { title, image, description } = req.body
        const { id } = req.params
        const updateTravel = await travel.update({
            data: {
                title,
                image,
                description,
            },
            where:{
                id:parseInt(id)
            }
        })
        res.status(201).json({
            message: "success",    
            updateTravel
        })
    }
    catch (error) {
        res.status(409).json({error})
    }
}

module.exports.delete = async (req, res)=>{
    try {
        const { id } = req.params
        const removeTravel = await travel.delete({
            where:{
                id:parseInt(id)
            }
        })
        res.status(201).json({
            message: "success"
        })
    }
    catch (error) {
        res.status(409).json({error})
    }
}

